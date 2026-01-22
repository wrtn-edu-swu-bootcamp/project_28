// 그래픽 디자인 학술-실무 용어 데이터 (50개)

export interface TermData {
  academic_term: string;
  practical_terms: string[];
  explanation: string;
  contexts: {
    situation: string;
    example: string;
  }[];
}

export const termsData: Record<string, TermData> = {
  // 디자인 원리 (13개)
  "시각적 위계": {
    academic_term: "시각적 위계 (Visual Hierarchy)",
    practical_terms: ["정보 우선순위", "시선 흐름", "강조 포인트"],
    explanation: "학교에서 배우는 '시각적 위계'는 크기, 색상, 위치 등을 조절해 정보의 중요도를 시각적으로 구분하는 원리입니다. 실무에서는 '어떤 정보를 먼저 보여줄지' 또는 '시선이 어디로 가게 할지'로 표현하며, 사용자가 핵심 정보를 빠르게 파악하도록 돕는 디자인의 기본 원칙이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "제목을 48pt로 키워서 시선이 먼저 가게 해주세요"
      },
      {
        situation: "클라이언트 피드백",
        example: "로고가 너무 작아요. 정보 우선순위상 가장 크게 해야죠"
      },
      {
        situation: "업무 지시",
        example: "CTA 버튼이 가장 중요하니까 강조 포인트로 잡아주세요"
      }
    ]
  },
  "게슈탈트 법칙": {
    academic_term: "게슈탈트 법칙 (Gestalt Principles)",
    practical_terms: ["그룹감", "관련 요소 묶기", "레이아웃 정리"],
    explanation: "게슈탈트 법칙은 근접성, 유사성, 연속성 등을 통해 사람이 시각 정보를 어떻게 인식하고 그룹화하는지 설명하는 심리학 이론입니다. 실무에서는 '관련된 것끼리 묶어서 그룹감을 준다'고 표현하며, 복잡한 정보를 사용자가 직관적으로 이해하도록 정리하는 데 활용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "관련된 정보들은 가까이 배치해서 한 묶음으로 보이게 합시다"
      },
      {
        situation: "클라이언트 피드백",
        example: "이 섹션들이 따로 놀아요. 좀 더 그룹감 있게 정리해주세요"
      },
      {
        situation: "업무 지시",
        example: "같은 카테고리 항목들은 비슷한 스타일로 통일해주세요"
      }
    ]
  },
  "근접성의 원리": {
    academic_term: "근접성의 원리 (Law of Proximity)",
    practical_terms: ["붙여서 배치", "간격 조절", "관계 표현"],
    explanation: "게슈탈트의 근접성 원리는 가까이 있는 요소들을 같은 그룹으로 인식한다는 법칙입니다. 실무에서는 '관련된 것은 붙이고, 다른 것은 떨어뜨린다'는 간단한 규칙으로 적용하며, 정보 구조를 명확하게 전달하는 가장 기본적이고 효과적인 방법이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "제목과 설명을 붙여서 한 단위로 보이게 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "섹션 사이 간격을 더 벌려서 구분되게 해주세요"
      },
      {
        situation: "업무 지시",
        example: "같은 그룹은 16px, 다른 그룹과는 48px 간격으로"
      }
    ]
  },
  "유사성의 원리": {
    academic_term: "유사성의 원리 (Law of Similarity)",
    practical_terms: ["같은 스타일", "통일감", "패턴"],
    explanation: "유사성 원리는 비슷한 모양, 색상, 크기의 요소들을 같은 그룹으로 인식한다는 법칙입니다. 실무에서는 '같은 기능은 같은 스타일'이라는 원칙으로 적용하며, 일관성 있는 디자인으로 사용자가 패턴을 학습하고 편하게 사용하도록 만들어요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "모든 링크는 파란색으로 통일해서 클릭 가능하다는 걸 알려요"
      },
      {
        situation: "클라이언트 피드백",
        example: "중요 버튼들은 전부 같은 스타일로 일관성 있게 해주세요"
      },
      {
        situation: "업무 지시",
        example: "카테고리별로 아이콘 스타일 통일해주세요"
      }
    ]
  },
  "연속성의 원리": {
    academic_term: "연속성의 원리 (Law of Continuity)",
    practical_terms: ["시선 흐름", "자연스러운 동선", "이어지는 느낌"],
    explanation: "연속성 원리는 요소들이 선이나 곡선을 따라 배치되면 그 흐름을 따라 시선이 이동한다는 법칙입니다. 실무에서는 '사용자의 눈이 자연스럽게 이동하는 동선'을 만드는 데 활용하며, F자 패턴, Z자 패턴 등의 레이아웃 설계에 적용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "위에서 아래로 시선이 자연스럽게 흐르게 배치했어요"
      },
      {
        situation: "클라이언트 피드백",
        example: "여기서 시선이 끊겨요. 동선을 이어주세요"
      },
      {
        situation: "업무 지시",
        example: "Z자 패턴으로 시선 유도해주세요"
      }
    ]
  },
  "폐쇄성의 원리": {
    academic_term: "폐쇄성의 원리 (Law of Closure)",
    practical_terms: ["암시적 표현", "생략", "여운"],
    explanation: "폐쇄성 원리는 불완전한 형태를 보면 우리 뇌가 자동으로 완성해서 인식한다는 법칙입니다. 실무에서는 '일부만 보여줘도 전체가 이해된다'는 원리로 활용하며, 미니멀한 디자인이나 은유적 표현을 만들 때 효과적으로 사용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "로고를 다 그리지 않고 일부만 암시적으로 표현해봅시다"
      },
      {
        situation: "클라이언트 피드백",
        example: "점선만으로도 사각형이 느껴지네요. 깔끔해요"
      },
      {
        situation: "업무 지시",
        example: "테두리 일부만 그려서 미니멀하게 해주세요"
      }
    ]
  },
  "대칭": {
    academic_term: "대칭 (Symmetry)",
    practical_terms: ["좌우 대칭", "중앙 정렬", "미러링"],
    explanation: "대칭은 중심축을 기준으로 좌우가 동일한 형태를 이루는 구성 방식입니다. 실무에서는 안정감, 격식, 신뢰감을 표현할 때 주로 사용하며, 특히 고급 브랜드나 공식적인 디자인에서 선호되는 레이아웃 방식이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "고급스러운 느낌 내려면 중앙 정렬로 대칭 구조 만들어요"
      },
      {
        situation: "클라이언트 피드백",
        example: "너무 격식 차려 보여요. 비대칭으로 캐주얼하게 해주세요"
      },
      {
        situation: "업무 지시",
        example: "초대장 디자인은 좌우 대칭으로 정중하게"
      }
    ]
  },
  "비대칭": {
    academic_term: "비대칭 (Asymmetry)",
    practical_terms: ["자유로운 배치", "역동적", "개성"],
    explanation: "비대칭은 좌우가 다른 형태로 구성되어 시각적 긴장감과 역동성을 만드는 방식입니다. 실무에서는 젊고 자유로운 느낌, 창의적이고 현대적인 이미지를 표현할 때 선호하며, 특정 요소에 강조점을 주기에도 효과적이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "비대칭 레이아웃으로 역동적인 느낌 줍시다"
      },
      {
        situation: "클라이언트 피드백",
        example: "좀 더 젊고 캐주얼한 느낌으로 자유롭게 배치해주세요"
      },
      {
        situation: "업무 지시",
        example: "왼쪽에 큰 이미지, 오른쪽에 텍스트로 비대칭 구성"
      }
    ]
  },
  "균형": {
    academic_term: "균형 (Balance)",
    practical_terms: ["밸런스", "좌우 균형", "안정감"],
    explanation: "균형은 시각적 무게가 한쪽으로 치우치지 않고 조화롭게 분산된 상태를 의미합니다. 실무에서는 '밸런스'라고 부르며, 대칭이든 비대칭이든 전체적으로 안정적으로 보이는지 확인하는 중요한 평가 기준이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "왼쪽이 너무 무거워요. 오른쪽 밸런스 맞춰주세요"
      },
      {
        situation: "클라이언트 피드백",
        example: "전체적인 밸런스가 이상해서 불안정해 보여요"
      },
      {
        situation: "업무 지시",
        example: "좌우 시각적 무게 체크하면서 밸런스 잡아주세요"
      }
    ]
  },
  "반복": {
    academic_term: "반복 (Repetition)",
    practical_terms: ["패턴", "일관성", "통일감"],
    explanation: "반복은 동일한 요소나 스타일을 여러 번 사용하여 리듬감과 통일성을 만드는 원리입니다. 실무에서는 브랜드 일관성을 유지하고 사용자가 인터페이스 패턴을 학습하도록 돕는 핵심 원칙으로, 디자인 시스템의 기반이 되요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "모든 카드 디자인을 같은 스타일로 반복해서 통일감 줘요"
      },
      {
        situation: "클라이언트 피드백",
        example: "페이지마다 스타일이 달라서 일관성이 없어요"
      },
      {
        situation: "업무 지시",
        example: "버튼 스타일 가이드 따라서 패턴 유지해주세요"
      }
    ]
  },
  "강조": {
    academic_term: "강조 (Emphasis)",
    practical_terms: ["포인트", "하이라이트", "눈에 띄게"],
    explanation: "강조는 특정 요소를 크기, 색상, 대비 등으로 두드러지게 만들어 사용자의 주의를 끄는 원리입니다. 실무에서는 '포인트를 준다'고 표현하며, CTA 버튼이나 중요 정보를 부각시켜 사용자 행동을 유도하는 데 필수적이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "CTA 버튼에 포인트 컬러 써서 강조해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "할인율이 제일 중요한데 너무 안 보여요. 강조 필요해요"
      },
      {
        situation: "업무 지시",
        example: "신제품 부분만 하이라이트 주세요"
      }
    ]
  },
  "대비": {
    academic_term: "대비 (Contrast)",
    practical_terms: ["콘트라스트", "차이", "구분"],
    explanation: "대비는 두 요소 간의 차이를 명확하게 하여 구분되고 눈에 띄게 만드는 원리입니다. 실무에서는 가독성 확보와 웹 접근성 준수를 위해 필수적이며, 특히 배경과 텍스트의 색상 대비는 법적 기준(WCAG)까지 존재하는 중요한 요소예요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "밝은 배경에 밝은 텍스트라 대비가 약해요. 어둡게 바꿔요"
      },
      {
        situation: "클라이언트 피드백",
        example: "이 버튼 배경이랑 색이 비슷해서 안 보여요"
      },
      {
        situation: "업무 지시",
        example: "접근성 기준 맞추려면 콘트라스트 비율 4.5:1 이상"
      }
    ]
  },
  "통일성": {
    academic_term: "통일성 (Unity)",
    practical_terms: ["조화", "하나의 느낌", "일체감"],
    explanation: "통일성은 디자인의 모든 요소가 하나의 전체로 어우러져 보이는 상태를 의미합니다. 반복이 같은 요소의 재사용이라면, 통일성은 서로 다른 요소들이 공통된 특성(색상, 스타일, 분위기)으로 조화를 이루는 것이에요. 실무에서는 '한 디자이너가 만든 것처럼' 느껴지는 일관된 브랜드 경험을 만드는 핵심 원리예요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "전체적으로 통일성이 없어 보여요. 같은 톤으로 맞춰야 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "페이지들이 각각 다른 사이트 같아요. 하나의 느낌으로 통일해주세요"
      },
      {
        situation: "업무 지시",
        example: "디자인 시스템 적용해서 전체 통일성 확보해주세요"
      }
    ]
  },

  // 타이포그래피 (7개)
  "타이포그래피": {
    academic_term: "타이포그래피 (Typography)",
    practical_terms: ["폰트 작업", "텍스트 디자인", "글자 스타일"],
    explanation: "타이포그래피는 글자의 선택, 배열, 간격, 크기 등을 다루는 시각 디자인 분야입니다. 실무에서는 단순히 '폰트 고르기'를 넘어 가독성, 브랜드 정체성, 정보 위계를 모두 고려하는 핵심 작업이며, 디자인의 약 80%가 텍스트로 구성되어 있어 매우 중요해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "타이포그래피 시스템부터 잡고 시작합시다"
      },
      {
        situation: "클라이언트 피드백",
        example: "폰트 선택은 좋은데 자간이랑 행간 조정이 필요해요"
      },
      {
        situation: "업무 지시",
        example: "제목, 부제, 본문 각각 타이포 스타일 정의해주세요"
      }
    ]
  },
  "가독성": {
    academic_term: "가독성 (Legibility & Readability)",
    practical_terms: ["읽기 편함", "잘 읽힘", "텍스트 가독성"],
    explanation: "가독성은 글자가 얼마나 명확하게 구별되고(Legibility) 편하게 읽히는지(Readability)를 나타냅니다. 실무에서는 '사용자가 피로 없이 편하게 읽을 수 있는가'가 핵심이며, 폰트 크기, 자간, 행간, 대비, 줄 길이 등을 종합적으로 고려해야 하는 필수 요소예요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "이 폰트는 작은 크기에서 가독성이 떨어져요"
      },
      {
        situation: "클라이언트 피드백",
        example: "본문이 너무 작아서 읽기 힘들어요. 최소 14pt는 돼야죠"
      },
      {
        situation: "업무 지시",
        example: "모바일에서 가독성 테스트 꼭 해주세요"
      }
    ]
  },
  "자간": {
    academic_term: "자간 (Letter Spacing / Tracking)",
    practical_terms: ["글자 간격", "트래킹", "자간 조정"],
    explanation: "자간은 글자와 글자 사이의 간격을 의미합니다. 실무에서는 너무 좁으면 답답하고 읽기 어렵고, 너무 넓으면 흩어져 보이므로 적절한 조절이 필요하며, 특히 대제목은 자간을 좁게(-10~-20), 작은 텍스트는 자간을 넓게(+5~+10) 조정하는 것이 일반적이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "제목 자간을 -15로 타이트하게 줘서 임팩트 있게 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "글자가 너무 붙어있어요. 자간 좀 벌려주세요"
      },
      {
        situation: "업무 지시",
        example: "작은 폰트는 자간 +5 줘서 가독성 높여주세요"
      }
    ]
  },
  "행간": {
    academic_term: "행간 (Line Height / Leading)",
    practical_terms: ["줄 간격", "라인 높이", "행간 조정"],
    explanation: "행간은 텍스트 줄과 줄 사이의 간격을 의미합니다. 실무에서는 보통 폰트 크기의 1.4~1.6배를 표준으로 사용하며, 긴 본문은 1.6~1.8로 넓게, 제목은 1.1~1.3으로 좁게 설정해요. 적절한 행간은 텍스트의 가독성을 크게 좌우하는 핵심 요소예요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "본문 행간을 1.6으로 넉넉하게 줘서 읽기 편하게 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "줄 간격이 좁아서 답답해요. 행간 조정 필요해요"
      },
      {
        situation: "업무 지시",
        example: "제목은 행간 1.2, 본문은 1.5로 설정해주세요"
      }
    ]
  },
  "위계": {
    academic_term: "타이포그래피 위계 (Typographic Hierarchy)",
    practical_terms: ["제목 크기 차이", "텍스트 레벨", "정보 순서"],
    explanation: "타이포그래피 위계는 제목, 부제, 본문 등을 크기, 굵기, 색상으로 구분하여 정보의 중요도를 시각적으로 표현하는 체계입니다. 실무에서는 보통 H1(대제목), H2(중제목), H3(소제목), Body(본문), Caption(캡션) 등 5~6단계로 정의하며, 명확한 위계는 사용자의 빠른 정보 파악을 돕는 핵심이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "제목은 32pt, 부제는 20pt, 본문은 14pt로 위계 잡아요"
      },
      {
        situation: "클라이언트 피드백",
        example: "제목이랑 본문 크기 차이가 별로 없어서 구분이 안 가요"
      },
      {
        situation: "업무 지시",
        example: "타이포 위계 시스템 먼저 정의하고 적용해주세요"
      }
    ]
  },
  "서체 선택": {
    academic_term: "서체 선택 (Font Selection)",
    practical_terms: ["폰트 고르기", "서체 매칭", "폰트 조합"],
    explanation: "서체 선택은 프로젝트의 목적, 브랜드 정체성, 가독성을 고려하여 적절한 폰트를 고르는 작업입니다. 실무에서는 보통 제목용(임팩트)과 본문용(가독성) 2~3개를 조합하며, 한글 폰트는 자간과 행간이 잘 맞는지, 라이선스는 문제없는지도 반드시 확인해야 해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "제목은 볼드한 고딕, 본문은 읽기 편한 명조로 조합해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "이 폰트는 우리 브랜드 이미지랑 안 맞는 것 같아요"
      },
      {
        situation: "업무 지시",
        example: "폰트 라이선스 꼭 체크하고 사용하세요"
      }
    ]
  },
  "커닝": {
    academic_term: "커닝 (Kerning)",
    practical_terms: ["글자 사이 미세 조정", "자간 수동 조정"],
    explanation: "커닝은 특정 두 글자 사이의 간격을 개별적으로 조정하는 작업입니다. 자간(Tracking)이 전체 글자 간격을 일괄 조절하는 것과 달리, 커닝은 'AV', 'To' 같은 특정 조합에서 발생하는 불균형을 수동으로 교정하며, 주로 로고나 대형 타이틀 작업에서 섬세함을 더할 때 사용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "로고 글자 사이가 들쭉날쭉해요. 커닝 조정 필요해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "이 두 글자 사이만 너무 벌어져 보여요"
      },
      {
        situation: "업무 지시",
        example: "대제목은 커닝 수동으로 다듬어주세요"
      }
    ]
  },

  // 색채 이론 (10개)
  "색상환": {
    academic_term: "색상환 (Color Wheel)",
    practical_terms: ["컬러 서클", "배색", "색 조합"],
    explanation: "색상환은 빨강, 노랑, 파랑 등 12가지 기본 색을 원형으로 배열한 도구로, 조화로운 색 조합을 찾는 데 사용됩니다. 실무에서는 유사색(옆에 있는 색), 보색(반대편 색), 삼각색(120도 간격) 등의 배색 법칙을 활용하여 브랜드 컬러 팔레트를 구성해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "유사색 배색으로 안정감 있게 가요"
      },
      {
        situation: "클라이언트 피드백",
        example: "이 색 조합은 너무 튀어요. 좀 더 조화롭게"
      },
      {
        situation: "업무 지시",
        example: "보색 대비로 강렬한 느낌 만들어주세요"
      }
    ]
  },
  "색채 대비": {
    academic_term: "색채 대비 (Color Contrast)",
    practical_terms: ["컬러 대비", "명암 차이", "색 구분"],
    explanation: "색채 대비는 두 색 간의 명도, 채도, 색상 차이를 의미하며, 특히 배경과 텍스트 간 충분한 대비는 가독성과 웹 접근성의 필수 요소입니다. 실무에서는 WCAG 기준(일반 텍스트 4.5:1, 큰 텍스트 3:1 이상)을 준수해야 하며, 대비 체커 도구로 반드시 검증해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "밝은 배경에 밝은 글씨는 대비가 약해서 안 보여요"
      },
      {
        situation: "클라이언트 피드백",
        example: "이 버튼 색이 배경이랑 비슷해서 잘 안 보여요"
      },
      {
        situation: "업무 지시",
        example: "접근성 때문에 컬러 대비 비율 4.5:1 이상 필수예요"
      }
    ]
  },
  "채도": {
    academic_term: "채도 (Saturation)",
    practical_terms: ["색 진하기", "선명도", "색 강도"],
    explanation: "채도는 색의 순수성과 강렬함을 나타내는 지표입니다. 고채도는 비비드하고 에너제틱한 느낌을, 저채도는 차분하고 세련된 느낌을 주며, 실무에서는 브랜드 톤에 맞춰 조절하되 너무 높은 채도는 눈의 피로를 유발하므로 주의해야 해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "너무 비비드해요. 채도 낮춰서 부드럽게 만들어요"
      },
      {
        situation: "클라이언트 피드백",
        example: "색이 너무 탁해요. 채도 올려서 선명하게 해주세요"
      },
      {
        situation: "업무 지시",
        example: "파스텔톤으로 채도 30% 정도로 낮춰주세요"
      }
    ]
  },
  "명도": {
    academic_term: "명도 (Value / Brightness)",
    practical_terms: ["밝기", "톤", "명암"],
    explanation: "명도는 색의 밝고 어두운 정도를 나타냅니다. 실무에서는 같은 색상이라도 명도를 조절해 여러 단계를 만들어 사용하며(예: Primary 색의 Lightest, Light, Default, Dark, Darkest), 특히 다크모드와 라이트모드를 모두 지원할 때 명도 시스템이 매우 중요해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "배경이 너무 어두워요. 명도 올려주세요"
      },
      {
        situation: "클라이언트 피드백",
        example: "전체적으로 톤을 밝게 해서 경쾌하게 해주세요"
      },
      {
        situation: "업무 지시",
        example: "다크모드니까 명도 낮춰서 눈이 편하게"
      }
    ]
  },
  "색온도": {
    academic_term: "색온도 (Color Temperature)",
    practical_terms: ["따뜻한 색", "차가운 색", "색감"],
    explanation: "색온도는 빨강·주황·노랑 계열의 따뜻한 색(Warm)과 파랑·초록 계열의 차가운 색(Cool)으로 구분되며, 각각 다른 감정과 분위기를 전달합니다. 실무에서는 따뜻한 색은 친근하고 활동적인 브랜드에, 차가운 색은 신뢰와 전문성을 강조하는 브랜드에 주로 사용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "따뜻한 색감으로 친근하고 편안한 느낌 줘요"
      },
      {
        situation: "클라이언트 피드백",
        example: "금융 서비스니까 차가운 톤으로 신뢰감 있게"
      },
      {
        situation: "업무 지시",
        example: "따뜻한 오렌지 계열로 식욕 자극하는 느낌"
      }
    ]
  },
  "보색": {
    academic_term: "보색 (Complementary Colors)",
    practical_terms: ["반대색", "대비 색"],
    explanation: "보색은 색상환에서 정반대에 위치한 색의 조합으로, 가장 강렬한 대비를 만듭니다. 실무에서는 빨강-초록, 파랑-주황, 보라-노랑 같은 조합이 대표적이며, 포인트 컬러나 강조 요소에 효과적이지만 과하게 사용하면 눈이 피로하므로 면적 비율을 조절해야 해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "보색 대비로 CTA 버튼 확 튀게 만들어요"
      },
      {
        situation: "클라이언트 피드백",
        example: "너무 강렬해서 눈이 아파요. 보색 비율 줄여주세요"
      },
      {
        situation: "업무 지시",
        example: "보색 포인트는 5% 이하로 제한해서 사용하세요"
      }
    ]
  },
  "유사색": {
    academic_term: "유사색 (Analogous Colors)",
    practical_terms: ["인접색", "비슷한 색", "같은 계열"],
    explanation: "유사색은 색상환에서 이웃한 색들의 조합으로, 조화롭고 안정적인 느낌을 줍니다. 실무에서는 파랑-청록-초록, 빨강-주황-노랑 같은 조합이 대표적이며, 자연스럽고 편안한 분위기를 만들 때 가장 안전하고 효과적인 배색 방법이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "유사색 배색으로 부드럽고 통일된 느낌 만들어요"
      },
      {
        situation: "클라이언트 피드백",
        example: "자연스럽고 편안한 색감으로 해주세요"
      },
      {
        situation: "업무 지시",
        example: "파란색 계열 유사색으로 안정감 있게"
      }
    ]
  },
  "색의 심리": {
    academic_term: "색의 심리 (Color Psychology)",
    practical_terms: ["색 이미지", "색 느낌", "컬러 인상"],
    explanation: "색의 심리는 각 색이 사람에게 전달하는 감정과 연상 작용을 연구하는 분야입니다. 실무에서는 빨강(열정, 긴급), 파랑(신뢰, 안정), 초록(자연, 건강), 노랑(활력, 주의), 보라(고급, 창의) 등의 일반적 의미를 브랜드 메시지에 맞춰 전략적으로 활용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "빨간색은 긴급함을 전달하니까 경고 메시지에 써요"
      },
      {
        situation: "클라이언트 피드백",
        example: "헬스케어 브랜드니까 초록색으로 건강 이미지 강조해요"
      },
      {
        situation: "업무 지시",
        example: "금융 앱이니 파란색으로 신뢰감 주세요"
      }
    ]
  },
  "그레이스케일": {
    academic_term: "무채색 (Grayscale / Achromatic)",
    practical_terms: ["회색", "그레이", "흑백"],
    explanation: "그레이스케일은 흰색, 검은색, 회색 등 채도가 없는 무채색 계열입니다. 실무에서는 텍스트, 배경, 경계선 등에 주로 사용하며, 보통 9단계(Gray 100~900)로 정의해 일관성 있게 사용해요. 세련되고 미니멀한 디자인의 기본이 되는 색 체계예요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "컬러는 포인트만 쓰고 전체는 그레이 톤으로 깔끔하게"
      },
      {
        situation: "클라이언트 피드백",
        example: "흑백만으로도 충분히 세련돼 보여요"
      },
      {
        situation: "업무 지시",
        example: "텍스트는 Gray 900, 비활성은 Gray 400으로"
      }
    ]
  },
  "컬러 팔레트": {
    academic_term: "색채 체계 (Color Palette / Color System)",
    practical_terms: ["컬러 시스템", "브랜드 컬러", "색 조합"],
    explanation: "컬러 팔레트는 프로젝트에서 사용할 색을 Primary, Secondary, Accent, Neutral 등으로 체계화한 세트입니다. 실무에서는 보통 주 색상 1개, 보조 색상 2~3개, 강조 색상 1개, 그레이스케일로 구성하며, 일관된 팔레트 사용은 브랜드 정체성의 핵심이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "컬러 팔레트 먼저 정의하고 전체 디자인 시작해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "브랜드 컬러 가이드 따라서 일관되게 써주세요"
      },
      {
        situation: "업무 지시",
        example: "Primary는 파랑, Accent는 오렌지로 시스템 잡아요"
      }
    ]
  },

  // 레이아웃 (10개)
  "여백": {
    academic_term: "여백 / 네거티브 스페이스 (White Space / Negative Space)",
    practical_terms: ["공간", "숨통", "브리딩 스페이스"],
    explanation: "여백은 요소들 사이의 비어있는 공간으로, '아무것도 없는 공간'이 아니라 디자인의 숨통을 트이게 하는 적극적 요소입니다. 실무에서는 충분한 여백이 고급스럽고 읽기 편한 디자인을 만들며, 초보자는 여백을 두려워해 빽빽하게 채우는 실수를 자주 해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "여백을 넉넉하게 줘서 고급스럽고 여유있게 만들어요"
      },
      {
        situation: "클라이언트 피드백",
        example: "너무 빽빽해요. 숨통 트이게 공간 좀 주세요"
      },
      {
        situation: "업무 지시",
        example: "각 섹션 사이 80px 여백 필수예요"
      }
    ]
  },
  "그리드 시스템": {
    academic_term: "그리드 시스템 (Grid System)",
    practical_terms: ["그리드", "레이아웃 틀", "컬럼"],
    explanation: "그리드 시스템은 화면을 일정한 가로 컬럼(보통 12개)으로 나눠 요소를 규칙적으로 배치하는 레이아웃 체계입니다. 실무에서는 반응형 디자인의 기본이 되며, 12컬럼 그리드는 2, 3, 4, 6 등분으로 유연하게 나눌 수 있어 가장 널리 사용돼요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "12컬럼 그리드로 레이아웃 잡으면 깔끔하게 정리돼요"
      },
      {
        situation: "클라이언트 피드백",
        example: "요소들이 그리드 안 맞아서 삐뚤어 보여요"
      },
      {
        situation: "업무 지시",
        example: "PC는 12컬럼, 모바일은 4컬럼 그리드로"
      }
    ]
  },
  "비율": {
    academic_term: "비율 / 프로포션 (Proportion / Ratio)",
    practical_terms: ["사이즈 비율", "크기 관계", "황금 비율"],
    explanation: "비율은 요소들 간의 크기 관계를 의미하며, 조화로운 비율은 시각적 안정감을 만듭니다. 실무에서는 황금비율(1:1.618), 16:9(영상), 4:3(이미지), 3:2(사진) 등이 자주 사용되며, 제목과 본문의 크기 비율도 보통 2:1 이상으로 명확하게 구분해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "이미지 비율 16:9로 통일해서 일관성 있게 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "제목과 본문 크기 비율이 애매해서 구분이 안 가요"
      },
      {
        situation: "업무 지시",
        example: "황금 비율로 레이아웃 분할해서 조화롭게"
      }
    ]
  },
  "마진과 패딩": {
    academic_term: "마진과 패딩 (Margin & Padding)",
    practical_terms: ["바깥 간격", "안쪽 간격", "여백 조절"],
    explanation: "마진은 요소 바깥쪽 간격, 패딩은 요소 안쪽 간격을 의미합니다. 실무에서는 마진으로 요소 간 간격을 조절하고 패딩으로 요소 내부 여유를 주며, 보통 8px 배수(8, 16, 24, 32...)로 일관성 있게 사용하는 스페이싱 시스템을 적용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "버튼 패딩 16px 줘서 클릭하기 편하게, 마진은 24px로"
      },
      {
        situation: "클라이언트 피드백",
        example: "텍스트가 박스에 너무 붙어있어요. 패딩 주세요"
      },
      {
        situation: "업무 지시",
        example: "섹션 마진 80px, 카드 패딩 20px로 통일"
      }
    ]
  },
  "정렬": {
    academic_term: "정렬 (Alignment)",
    practical_terms: ["라인 맞추기", "얼라인먼트", "축 정렬"],
    explanation: "정렬은 여러 요소를 일정한 기준선(왼쪽, 오른쪽, 중앙, 상단, 하단)에 맞춰 배치하는 것입니다. 실무에서는 정렬이 안 맞으면 아마추어처럼 보이므로, 가이드라인을 켜고 1px까지 정확하게 맞추는 것이 프로의 기본 자세예요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "모든 요소 왼쪽 축 기준으로 정렬 맞춰주세요"
      },
      {
        situation: "클라이언트 피드백",
        example: "아이콘들이 삐뚤삐뚤해요. 정렬 체크 필요해요"
      },
      {
        situation: "업무 지시",
        example: "텍스트와 아이콘 세로 중앙 정렬로"
      }
    ]
  },
  "Z-인덱스": {
    academic_term: "레이어 순서 (Z-index / Stacking Order)",
    practical_terms: ["레이어 순서", "앞뒤 배치", "겹침 순서"],
    explanation: "Z-인덱스는 요소들이 겹칠 때 어느 것이 위에 표시될지 결정하는 순서입니다. 실무에서는 배경(0), 콘텐츠(10), 헤더(100), 모달(1000), 툴팁(10000) 같은 시스템으로 관리하며, 체계 없이 쓰면 나중에 꼬여서 수정이 어려워져요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "모달이 헤더 뒤로 가네요. Z-인덱스 올려야 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "드롭다운 메뉴가 다른 요소에 가려져요"
      },
      {
        situation: "업무 지시",
        example: "레이어 순서 시스템 정의해서 일관되게 써주세요"
      }
    ]
  },
  "반응형 레이아웃": {
    academic_term: "반응형 레이아웃 (Responsive Layout)",
    practical_terms: ["반응형", "모바일 대응", "디바이스별 레이아웃"],
    explanation: "반응형 레이아웃은 화면 크기에 따라 자동으로 조정되는 유연한 디자인 방식입니다. 실무에서는 모바일(375px), 태블릿(768px), 데스크톱(1280px) 등 브레이크포인트를 정해 각각 최적화하며, 모바일 먼저 디자인하는 'Mobile First' 접근이 일반적이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "PC, 태블릿, 모바일 반응형으로 다 작업해야 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "모바일에서 레이아웃 깨져요. 반응형 체크 필요해요"
      },
      {
        situation: "업무 지시",
        example: "브레이크포인트 3개로 반응형 디자인해주세요"
      }
    ]
  },
  "F-패턴과 Z-패턴": {
    academic_term: "F-패턴과 Z-패턴 (F-Pattern & Z-Pattern)",
    practical_terms: ["시선 동선", "읽기 패턴", "스캔 패턴"],
    explanation: "F-패턴은 텍스트가 많을 때, Z-패턴은 이미지와 텍스트가 혼합됐을 때 사용자의 시선이 움직이는 전형적인 경로입니다. 실무에서는 중요한 정보와 CTA를 이 동선 상에 배치하여 사용자의 주의를 효과적으로 이끌어요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "랜딩페이지는 Z-패턴으로 시선 유도해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "중요한 버튼이 시선 동선 밖에 있어서 안 보여요"
      },
      {
        situation: "업무 지시",
        example: "F-패턴 고려해서 왼쪽 상단에 핵심 정보 배치"
      }
    ]
  },
  "가시 영역": {
    academic_term: "가시 영역 (Above the Fold)",
    practical_terms: ["첫 화면", "스크롤 전 영역", "퍼스트 뷰"],
    explanation: "가시 영역은 스크롤하지 않고 처음 보이는 화면 영역을 의미합니다. 실무에서는 이 영역에 가장 중요한 메시지와 CTA를 배치해야 하며, 사용자의 80%는 스크롤을 많이 하지 않으므로 첫 화면이 전환율을 크게 좌우해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "핵심 메시지와 CTA는 무조건 첫 화면에 들어가야 해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "스크롤 해야 중요한 정보가 보여요. 위로 올려주세요"
      },
      {
        situation: "업무 지시",
        example: "모바일 퍼스트 뷰에서 가치 제안 명확히 전달"
      }
    ]
  },
  "컨테이너": {
    academic_term: "컨테이너 (Container / Wrapper)",
    practical_terms: ["박스", "래퍼", "콘텐츠 영역"],
    explanation: "컨테이너는 콘텐츠를 담는 박스 역할을 하며, 최대 너비를 제한해 가독성을 확보하고 일관된 레이아웃을 유지합니다. 실무에서는 보통 최대 너비 1200~1440px, 좌우 여백 20~40px로 설정하며, 모든 콘텐츠를 컨테이너 안에 배치해 정돈된 느낌을 만들어요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "컨테이너 max-width 1280px로 제한해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "큰 화면에서 텍스트가 너무 넓게 펴져서 읽기 힘들어요"
      },
      {
        situation: "업무 지시",
        example: "컨테이너 좌우 패딩 24px로 모바일에서 여유 있게"
      }
    ]
  },

  // 디자인 요소 (5개)
  "질감": {
    academic_term: "질감 / 텍스처 (Texture)",
    practical_terms: ["텍스처", "표면 느낌", "재질감"],
    explanation: "질감은 표면의 촉각적 특성을 시각적으로 표현한 것으로, 디자인에 입체감과 리얼리티를 더합니다. 실무에서는 종이 질감, 패브릭 질감, 노이즈 그레인 등을 미묘하게 추가해 평면적인 디자인에 깊이를 주며, 과하면 구식으로 보이므로 절제가 중요해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "배경에 은은한 종이 질감 넣어서 따뜻한 느낌 줘요"
      },
      {
        situation: "클라이언트 피드백",
        example: "너무 평면적이에요. 텍스처 좀 추가해주세요"
      },
      {
        situation: "업무 지시",
        example: "그라데이션 노이즈로 자연스러운 질감 표현"
      }
    ]
  },
  "형태": {
    academic_term: "형태 (Shape / Form)",
    practical_terms: ["도형", "모양", "형태"],
    explanation: "형태는 원, 사각형, 삼각형 등 기본 도형과 이들의 조합으로 만들어지는 시각적 구조입니다. 실무에서는 사각형(안정, 신뢰), 원(부드러움, 완전), 삼각형(역동, 방향) 등 각 형태가 주는 심리적 효과를 고려하여 선택하며, 모서리 둥글기(Border Radius)도 브랜드 인상에 큰 영향을 미쳐요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "버튼 모서리를 둥글게 해서 친근한 느낌 주세요"
      },
      {
        situation: "클라이언트 피드백",
        example: "너무 각져서 딱딱해요. 형태를 부드럽게 만들어주세요"
      },
      {
        situation: "업무 지시",
        example: "Border radius 8px로 통일해서 일관성"
      }
    ]
  },
  "선": {
    academic_term: "선 (Line)",
    practical_terms: ["라인", "구분선", "테두리"],
    explanation: "선은 요소를 구분하고 시선을 유도하며 방향성을 표현하는 기본 요소입니다. 실무에서는 구분선(Divider)은 1px 회색, 테두리(Border)는 1~2px, 장식선은 더 굵게 사용하며, 너무 많은 선은 복잡해 보이므로 여백이나 배경색으로 대체하는 것이 현대적이에요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "섹션 구분은 선 대신 여백으로 처리해서 깔끔하게"
      },
      {
        situation: "클라이언트 피드백",
        example: "선이 너무 많아서 복잡해 보여요"
      },
      {
        situation: "업무 지시",
        example: "구분선은 Gray 200, 1px로 얇게"
      }
    ]
  },
  "아이콘": {
    academic_term: "아이콘 / 픽토그램 (Icon / Pictogram)",
    practical_terms: ["아이콘", "심볼", "그래픽"],
    explanation: "아이콘은 개념이나 기능을 간단한 그래픽으로 상징화한 시각 기호입니다. 실무에서는 라인 스타일과 솔리드 스타일 중 하나로 통일하고, 크기는 16px, 24px, 32px 등 일정 규칙으로 사용하며, 사용자에게 익숙한 보편적 아이콘(홈, 설정, 검색 등)을 우선 활용해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "아이콘 스타일 라인으로 통일해서 일관성 유지해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "이 아이콘이 무슨 기능인지 모르겠어요"
      },
      {
        situation: "업무 지시",
        example: "Material Icons 라이브러리에서 24px로 써주세요"
      }
    ]
  },
  "이미지": {
    academic_term: "이미지 (Image / Photography)",
    practical_terms: ["사진", "이미지", "비주얼"],
    explanation: "이미지는 시각적 정보를 전달하고 감정을 불러일으키는 강력한 요소입니다. 실무에서는 고해상도(최소 2배 이상), 일관된 톤앤매너, 적절한 압축(웹 최적화), 대체 텍스트(접근성) 등을 고려하며, 좋은 이미지 하나가 수많은 텍스트보다 효과적일 수 있어요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "히어로 이미지는 고화질로 임팩트 있게 가요"
      },
      {
        situation: "클라이언트 피드백",
        example: "이미지가 흐려요. 해상도 높여주세요"
      },
      {
        situation: "업무 지시",
        example: "이미지 WebP로 압축해서 용량 줄여주세요"
      }
    ]
  },

  // UX/UI (5개)
  "인터페이스 디자인": {
    academic_term: "사용자 인터페이스 디자인 (User Interface Design)",
    practical_terms: ["UI", "화면 디자인", "인터페이스"],
    explanation: "인터페이스 디자인은 사용자가 제품과 상호작용하는 시각적 접점을 설계하는 작업입니다. 실무에서는 심미성뿐 아니라 직관성, 일관성, 접근성을 모두 고려하며, 사용자가 학습 없이 바로 사용할 수 있도록 만드는 것이 최우선 목표예요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "UI는 예쁘게보다 사용하기 쉽게가 우선이에요"
      },
      {
        situation: "클라이언트 피드백",
        example: "화면 디자인은 좋은데 버튼이 어디 있는지 모르겠어요"
      },
      {
        situation: "업무 지시",
        example: "UI 컴포넌트 라이브러리 먼저 만들고 시작해요"
      }
    ]
  },
  "사용자 경험": {
    academic_term: "사용자 경험 (User Experience)",
    practical_terms: ["UX", "사용성", "편의성"],
    explanation: "사용자 경험은 제품을 사용하는 전체 과정에서 느끼는 만족도와 효율성을 의미합니다. 실무에서는 UI가 '어떻게 보이는가'라면 UX는 '어떻게 작동하는가'이며, 사용자 리서치, 플로우 설계, 테스트를 통해 직관적이고 편리한 경험을 만들어요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "회원가입 플로우가 너무 길어요. UX 개선 필요해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "사용자 테스트 결과 여기서 많이 이탈해요"
      },
      {
        situation: "업무 지시",
        example: "UX 리서치 먼저 하고 와이어프레임 그려주세요"
      }
    ]
  },
  "인터랙션": {
    academic_term: "인터랙션 디자인 (Interaction Design)",
    practical_terms: ["인터랙션", "애니메이션", "동작"],
    explanation: "인터랙션은 사용자의 행동에 반응하는 동적 효과입니다. 실무에서는 버튼 호버, 클릭 피드백, 페이지 전환 등에 부드러운 애니메이션을 추가해 생동감과 피드백을 주며, 너무 과하면 답답하므로 0.2~0.3초 정도의 빠른 트랜지션이 적절해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "버튼 호버 시 색 변하는 인터랙션 추가해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "클릭했는지 안 했는지 피드백이 없어서 답답해요"
      },
      {
        situation: "업무 지시",
        example: "트랜지션 0.2s ease-out으로 부드럽게"
      }
    ]
  },
  "접근성": {
    academic_term: "웹 접근성 (Web Accessibility)",
    practical_terms: ["접근성", "장애인 지원", "스크린 리더"],
    explanation: "접근성은 장애가 있는 사용자도 제품을 동등하게 사용할 수 있도록 설계하는 것입니다. 실무에서는 색각 이상자를 위한 충분한 대비, 시각 장애인을 위한 대체 텍스트, 키보드 네비게이션 지원 등이 필수이며, WCAG 기준을 준수해야 법적 문제가 없어요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "색맹 모드로 보면 이 버튼 구분이 안 가요. 접근성 체크 필요해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "공공기관 프로젝트라 접근성 준수 필수예요"
      },
      {
        situation: "업무 지시",
        example: "모든 이미지에 alt 텍스트 꼭 넣어주세요"
      }
    ]
  },
  "반응형 디자인": {
    academic_term: "반응형 웹 디자인 (Responsive Web Design)",
    practical_terms: ["반응형", "모바일 대응", "적응형"],
    explanation: "반응형 디자인은 하나의 디자인이 모든 화면 크기에 자동으로 최적화되는 방식입니다. 실무에서는 모바일 우선(Mobile First)으로 설계하여 작은 화면에서 큰 화면으로 확장하며, 3~4개 브레이크포인트(모바일, 태블릿, 데스크톱, 대형)로 구분해요.",
    contexts: [
      {
        situation: "디자인 회의",
        example: "모바일 트래픽이 70%니까 모바일 먼저 디자인해요"
      },
      {
        situation: "클라이언트 피드백",
        example: "태블릿에서 레이아웃이 어색해요"
      },
      {
        situation: "업무 지시",
        example: "375px, 768px, 1280px 브레이크포인트로 반응형 작업"
      }
    ]
  }
};

// 모든 학술 용어 키 목록
export const allTermKeys = Object.keys(termsData).sort();

// 검색 함수
export function searchTerm(query: string): TermData | null {
  const normalizedQuery = query.trim().toLowerCase();
  
  // 정확한 매칭
  for (const [key, data] of Object.entries(termsData)) {
    if (key.toLowerCase() === normalizedQuery) {
      return data;
    }
  }
  
  // 부분 매칭
  for (const [key, data] of Object.entries(termsData)) {
    if (key.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(key.toLowerCase())) {
      return data;
    }
    
    // 실무 용어로도 검색
    for (const practicalTerm of data.practical_terms) {
      if (practicalTerm.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(practicalTerm.toLowerCase())) {
        return data;
      }
    }
  }
  
  return null;
}
