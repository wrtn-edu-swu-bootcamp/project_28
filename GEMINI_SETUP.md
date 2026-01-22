# Google Gemini API 설정 가이드 🔑

## 🎉 Gemini의 장점

✅ **완전 무료** - 결제 수단 등록 불필요!  
✅ **충분한 무료 한도** - 월 1,500회 요청  
✅ **빠른 응답** - OpenAI와 비슷한 성능  
✅ **한국어 지원** - 우수한 한국어 이해력  
✅ **간편한 설정** - Google 계정만 있으면 OK

---

## 🔑 API 키 발급 방법 (2분!)

### 1단계: Google AI Studio 접속

**웹사이트**: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### 2단계: Google 계정 로그인

- Gmail 계정 사용 가능
- 회원가입 불필요 (기존 계정 사용)

### 3단계: API 키 생성

1. **"Create API key"** 버튼 클릭
2. 프로젝트 선택:
   - 기존 Google Cloud 프로젝트가 있다면 선택
   - 없다면 "Create API key in new project" 선택
3. **API 키가 즉시 생성됨!**

### 4단계: API 키 복사

```
AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- "Copy" 버튼으로 복사
- 안전한 곳에 저장

---

## ⚙️ 프로젝트에 적용

### 1. 환경변수 파일 생성

프로젝트 루트에 `.env.local` 파일 생성:

```bash
# Mac/Linux
echo "GEMINI_API_KEY=여기에_복사한_키_붙여넣기" > .env.local

# 또는 텍스트 에디터로 직접 생성
```

`.env.local` 파일 내용:

```env
GEMINI_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 테스트

http://localhost:3000 접속하여 검색 테스트!

---

## 📊 무료 사용 한도

### Gemini 1.5 Flash (현재 사용 모델)

| 항목 | 한도 |
|------|------|
| **분당 요청** | 15회 |
| **일일 요청** | 1,500회 |
| **월간 요청** | 약 45,000회 |
| **입력 토큰** | 무제한 (무료) |
| **출력 토큰** | 무제한 (무료) |

**테스트와 소규모 서비스에 충분합니다!** 👍

### 사용량 확인

[Google AI Studio](https://aistudio.google.com) → Usage 탭에서 확인 가능

---

## 🆚 OpenAI vs Gemini 비교

| 항목 | OpenAI GPT | Google Gemini |
|------|------------|---------------|
| **무료 사용** | ❌ 불가능 | ✅ 가능 |
| **결제 수단** | 필수 | 불필요 |
| **무료 한도** | 없음 | 월 1,500회 |
| **비용** | $0.15/1M 토큰~ | **무료** |
| **성능** | 매우 우수 | 우수 |
| **한국어** | 우수 | 우수 |
| **응답 속도** | 빠름 | 빠름 |
| **설정** | 쉬움 | 매우 쉬움 |

**결론**: MVP와 테스트에는 Gemini가 최고! 🏆

---

## ✅ 설정 확인

### 환경변수 확인

```bash
# Mac/Linux
cat .env.local

# Windows (PowerShell)
type .env.local
```

다음과 같이 표시되어야 함:
```
GEMINI_API_KEY=AIzaSy...
```

### API 키 테스트

개발 서버 실행 후:
1. http://localhost:3000 접속
2. "시각적 위계" 검색
3. 결과가 표시되면 성공! ✅

---

## 🚨 문제 해결

### "API 키가 설정되지 않았습니다" 오류

**해결 방법:**
1. `.env.local` 파일이 프로젝트 **루트**에 있는지 확인
2. 파일명이 정확한지 확인 (`.env.local`)
3. `GEMINI_API_KEY=` 형식이 맞는지 확인
4. 개발 서버 재시작:
   ```bash
   # Ctrl+C로 종료 후
   npm run dev
   ```

### "API 인증 오류" 메시지

**해결 방법:**
1. API 키를 정확히 복사했는지 확인
2. Google AI Studio에서 키가 활성화되어 있는지 확인
3. 키 앞뒤에 공백이 없는지 확인

### "일일 사용량 초과" 메시지

**원인**: 무료 한도 (일 1,500회) 초과

**해결 방법:**
1. 내일까지 기다리기 (자정에 리셋)
2. 또는 Google Cloud에서 유료 플랜으로 업그레이드
   - [Google Cloud Console](https://console.cloud.google.com)
   - 하지만 무료 한도가 매우 넉넉하므로 대부분 불필요!

### JSON 파싱 오류

**원인**: Gemini 응답이 JSON 형식이 아닐 때

**해결 방법:**
- 이미 코드에 처리 로직 포함됨
- 자동으로 재시도 (최대 3회)
- 계속 오류 시 GitHub Issue 등록

---

## 🔐 보안 주의사항

### 해야 할 것 ✅

- ✅ `.env.local` 파일을 Git에 커밋하지 않기
- ✅ API 키를 코드에 직접 작성하지 않기
- ✅ `.gitignore`에 `.env*.local` 포함되어 있는지 확인
- ✅ 배포 시 환경변수는 Vercel 등에서 설정

### 하지 말아야 할 것 ❌

- ❌ API 키를 GitHub에 업로드
- ❌ API 키를 코드에 하드코딩
- ❌ API 키를 다른 사람과 공유
- ❌ 클라이언트 사이드 코드에 키 노출

---

## 📈 유료 플랜으로 업그레이드 (선택사항)

무료 한도가 부족하다면:

1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. 프로젝트 선택
3. Billing → 결제 계정 연결
4. API & Services → Generative Language API 활성화

**유료 요금**:
- Gemini 1.5 Flash: 매우 저렴
- 입력: $0.075 / 1M tokens
- 출력: $0.30 / 1M tokens

하지만 **MVP 단계에서는 무료로 충분합니다!** 😊

---

## 🎓 추가 리소스

- [Gemini API 공식 문서](https://ai.google.dev/docs)
- [Google AI Studio](https://aistudio.google.com)
- [Gemini API 가격](https://ai.google.dev/pricing)
- [사용량 대시보드](https://aistudio.google.com/app/apikey)

---

## 🆘 도움이 필요하신가요?

1. **API 키 발급**: [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. **전체 문서**: [README.md](./README.md)
3. **빠른 시작**: [QUICK_START.md](./QUICK_START.md)

---

**Gemini로 무료로 시작하세요!** 🚀✨

결제 수단 없이, 바로 개발을 시작할 수 있습니다! 😊
