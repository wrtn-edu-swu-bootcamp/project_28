import { NextRequest, NextResponse } from "next/server";
import { searchTerm } from "@/app/data/terms";
import { practicalTermsData } from "@/app/data/practicalTerms";

// Rate limiting state
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }
  
  if (limit.count >= 20) {
    return false;
  }
  
  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "너무 많은 요청입니다. 잠시 후 다시 시도해주세요." },
        { status: 429 }
      );
    }

    const { term, direction } = await request.json();

    if (!term || !direction) {
      return NextResponse.json(
        { error: "용어와 방향을 입력해주세요" },
        { status: 400 }
      );
    }

    if (term.length > 100) {
      return NextResponse.json(
        { error: "검색어가 너무 깁니다 (최대 100자)" },
        { status: 400 }
      );
    }

    // 로컬 데이터에서 검색
    let result = searchTerm(term); // 먼저 학술 용어로 검색
    
    // 학술 용어로 찾지 못했으면 실무 용어로 검색
    if (!result) {
      const normalizedTerm = term.trim().toLowerCase();
      
      // 실무 용어 데이터에서 정확히 매칭되는 것 찾기
      for (const [key, data] of Object.entries(practicalTermsData)) {
        if (key.toLowerCase() === normalizedTerm) {
          result = data;
          break;
        }
      }
      
      // 정확한 매칭이 없으면 부분 매칭 시도
      if (!result) {
        for (const [key, data] of Object.entries(practicalTermsData)) {
          if (key.toLowerCase().includes(normalizedTerm) || 
              normalizedTerm.includes(key.toLowerCase())) {
            result = data;
            break;
          }
        }
      }
    }
    
    if (!result) {
      return NextResponse.json(
        { error: `"${term}" 용어를 찾을 수 없습니다. 용어집에서 다른 용어를 선택해주세요.` },
        { status: 404 }
      );
    }

    // 약간의 딜레이로 실제 API 느낌 (선택사항)
    await new Promise(resolve => setTimeout(resolve, 300));

    return NextResponse.json(result);
    
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: "번역 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
