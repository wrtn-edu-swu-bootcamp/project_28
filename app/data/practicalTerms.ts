// 실무에서 자주 쓰이는 디자인 용어 데이터

import { TermData } from "./terms";

export const practicalTermsData: Record<string, TermData> = {
  // 디자인 프로세스 관련
  "레퍼런스": {
    academic_term: "참고 자료 (Reference Material)",
    practical_terms: ["레퍼런스", "레퍼", "참고 이미지"],
    explanation: "실무에서 자주 쓰는 '레퍼런스'는 학술적으로 '참고 자료'를 의미합니다. 디자인 방향을 정하거나 아이디어를 얻기 위해 수집하는 이미지나 사례를 말해요.",
    contexts: [
      { situation: "디자인 회의", example: "이런 느낌으로 레퍼런스 좀 모아주세요" },
      { situation: "클라이언트 피드백", example: "이 레퍼런스처럼 만들어주세요" },
      { situation: "업무 지시", example: "Pinterest에서 레퍼런스 서치해봐요" }
    ]
  },
  "시안": {
    academic_term: "초안 / 제안안 (Draft / Proposal)",
    practical_terms: ["시안", "초안", "제안안"],
    explanation: "실무에서 '시안'은 학술적으로 '초안' 또는 '제안안'입니다. 클라이언트에게 제안하는 디자인 방향이나 컨셉을 보여주는 초기 버전이에요.",
    contexts: [
      { situation: "디자인 회의", example: "시안 3개 정도 뽑아서 보여드립시다" },
      { situation: "클라이언트 피드백", example: "시안 A안이 가장 마음에 드네요" },
      { situation: "업무 지시", example: "내일까지 시안 작업 부탁합니다" }
    ]
  },
  "러프": {
    academic_term: "스케치 / 초벌 작업 (Rough Sketch)",
    practical_terms: ["러프", "스케치", "초벌"],
    explanation: "실무 용어 '러프'는 학술적으로 '스케치' 또는 '초벌 작업'입니다. 세부적으로 다듬기 전의 대략적인 아이디어나 구성을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "일단 러프로 빠르게 그려볼게요" },
      { situation: "클라이언트 피드백", example: "러프 단계니까 디테일은 나중에 잡읍시다" },
      { situation: "업무 지시", example: "러프 스케치만 먼저 확인할게요" }
    ]
  },
  "픽스": {
    academic_term: "확정 / 최종안 (Finalized Version)",
    practical_terms: ["픽스", "확정", "최종"],
    explanation: "실무에서 '픽스'는 학술적으로 '확정안' 또는 '최종안'입니다. 더 이상 수정 없이 이 버전으로 진행한다는 의미예요.",
    contexts: [
      { situation: "디자인 회의", example: "이 안으로 픽스할게요" },
      { situation: "클라이언트 피드백", example: "네, 이대로 픽스해주세요" },
      { situation: "업무 지시", example: "픽스되면 바로 인쇄 넘어갑니다" }
    ]
  },
  "컨펌": {
    academic_term: "승인 / 확인 (Confirmation)",
    practical_terms: ["컨펌", "승인", "확인"],
    explanation: "실무 용어 '컨펌'은 학술적으로 '승인' 또는 '확인'입니다. 클라이언트나 상급자의 최종 승인을 받는 과정을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "클라이언트 컨펌 받고 진행할게요" },
      { situation: "클라이언트 피드백", example: "컨펌했으니 작업 시작하세요" },
      { situation: "업무 지시", example: "팀장님 컨펌 받으셨나요?" }
    ]
  },
  "리비전": {
    academic_term: "수정 / 개정 (Revision)",
    practical_terms: ["리비전", "수정", "보완"],
    explanation: "실무의 '리비전'은 학술적으로 '수정' 또는 '개정'입니다. 피드백을 반영하여 디자인을 수정하는 작업을 말해요.",
    contexts: [
      { situation: "디자인 회의", example: "리비전 2차까지 무료입니다" },
      { situation: "클라이언트 피드백", example: "여기만 리비전 한 번 더 해주세요" },
      { situation: "업무 지시", example: "리비전 피드백 정리해서 보내드릴게요" }
    ]
  },
  "피드백": {
    academic_term: "의견 / 평가 (Feedback)",
    practical_terms: ["피드백", "의견", "코멘트"],
    explanation: "실무 용어 '피드백'은 학술적으로 '의견' 또는 '평가'입니다. 디자인에 대한 개선점이나 수정 방향을 전달받는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "클라이언트 피드백 반영해서 수정했어요" },
      { situation: "클라이언트 피드백", example: "전반적으로 좋은데 피드백 몇 가지 드릴게요" },
      { situation: "업무 지시", example: "피드백 취합해서 공유해주세요" }
    ]
  },
  "목업": {
    academic_term: "실물 모형 (Mockup)",
    practical_terms: ["목업", "모형", "프로토타입"],
    explanation: "실무의 '목업'은 학술적으로 '실물 모형'입니다. 실제 제품이나 환경에 디자인을 적용한 모습을 미리 보여주는 시각 자료예요.",
    contexts: [
      { situation: "디자인 회의", example: "명함 목업 만들어서 보여드릴게요" },
      { situation: "클라이언트 피드백", example: "실제 제품에 적용된 목업 보고 싶어요" },
      { situation: "업무 지시", example: "스마트폰 목업에 넣어서 프레젠테이션 준비하세요" }
    ]
  },

  // 타이포그래피 관련
  "폰트": {
    academic_term: "서체 / 글꼴 (Font / Typeface)",
    practical_terms: ["폰트", "서체", "글꼴"],
    explanation: "실무에서 자주 쓰는 '폰트'는 학술적으로 '서체' 또는 '글꼴'입니다. 텍스트의 시각적 스타일을 결정하는 디자인 요소예요.",
    contexts: [
      { situation: "디자인 회의", example: "이 폰트는 너무 딱딱해 보여요" },
      { situation: "클라이언트 피드백", example: "좀 더 캐주얼한 폰트로 바꿔주세요" },
      { situation: "업무 지시", example: "본문은 고딕체 폰트로 해주세요" }
    ]
  },
  "자간": {
    academic_term: "글자 간격 (Letter Spacing / Tracking)",
    practical_terms: ["자간", "글자 간격", "트래킹"],
    explanation: "실무 용어 '자간'은 학술적으로 '글자 간격' 또는 'Letter Spacing'입니다. 글자와 글자 사이의 거리를 조절하는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "자간을 좀 더 벌려서 여유 있게 해주세요" },
      { situation: "클라이언트 피드백", example: "글자가 너무 붙어있어요. 자간 조정해주세요" },
      { situation: "업무 지시", example: "제목은 자간 -10으로 설정해주세요" }
    ]
  },
  "행간": {
    academic_term: "줄 간격 (Line Height / Leading)",
    practical_terms: ["행간", "줄 간격", "라인 높이"],
    explanation: "실무의 '행간'은 학술적으로 '줄 간격' 또는 'Line Height'입니다. 텍스트 줄과 줄 사이의 간격을 말해요.",
    contexts: [
      { situation: "디자인 회의", example: "본문 행간이 좁아서 답답해 보여요" },
      { situation: "클라이언트 피드백", example: "행간을 넓혀서 읽기 편하게 해주세요" },
      { situation: "업무 지시", example: "행간은 1.6 정도로 맞춰주세요" }
    ]
  },
  "본문": {
    academic_term: "본문 텍스트 (Body Text / Body Copy)",
    practical_terms: ["본문", "바디 텍스트", "내용"],
    explanation: "실무에서 '본문'은 학술적으로 'Body Text'입니다. 제목이나 캡션이 아닌 주요 내용을 담고 있는 텍스트 영역이에요.",
    contexts: [
      { situation: "디자인 회의", example: "본문 폰트 사이즈는 14pt로 할게요" },
      { situation: "클라이언트 피드백", example: "본문이 너무 작아서 잘 안 읽혀요" },
      { situation: "업무 지시", example: "본문은 좌측 정렬로 해주세요" }
    ]
  },
  "헤드라인": {
    academic_term: "제목 / 표제 (Headline / Title)",
    practical_terms: ["헤드라인", "제목", "타이틀"],
    explanation: "실무 용어 '헤드라인'은 학술적으로 '제목' 또는 '표제'입니다. 가장 눈에 띄는 큰 텍스트로 주목을 끄는 역할을 해요.",
    contexts: [
      { situation: "디자인 회의", example: "헤드라인을 더 크고 굵게 만들어야 해요" },
      { situation: "클라이언트 피드백", example: "헤드라인이 임팩트가 없어요" },
      { situation: "업무 지시", example: "헤드라인은 볼드체로 강조해주세요" }
    ]
  },

  // 색상 관련
  "컬러": {
    academic_term: "색채 / 색상 (Color)",
    practical_terms: ["컬러", "색", "색상"],
    explanation: "실무의 '컬러'는 학술적으로 '색채' 또는 '색상'입니다. 디자인의 시각적 감성과 브랜드 정체성을 결정하는 중요한 요소예요.",
    contexts: [
      { situation: "디자인 회의", example: "메인 컬러를 파란색 계열로 잡을까요?" },
      { situation: "클라이언트 피드백", example: "컬러가 너무 어두워요. 밝게 해주세요" },
      { situation: "업무 지시", example: "브랜드 컬러 가이드 따라주세요" }
    ]
  },
  "톤앤매너": {
    academic_term: "색조와 분위기 (Tone & Manner)",
    practical_terms: ["톤앤매너", "무드", "분위기"],
    explanation: "실무 용어 '톤앤매너'는 학술적으로 '전체적인 색조와 분위기'를 의미합니다. 브랜드나 프로젝트의 일관된 시각적 느낌을 말해요.",
    contexts: [
      { situation: "디자인 회의", example: "전체 톤앤매너를 고급스럽게 가져가요" },
      { situation: "클라이언트 피드백", example: "톤앤매너가 우리 브랜드랑 안 맞아요" },
      { situation: "업무 지시", example: "기존 캠페인 톤앤매너 유지해주세요" }
    ]
  },
  "무드": {
    academic_term: "분위기 / 느낌 (Mood)",
    practical_terms: ["무드", "분위기", "느낌"],
    explanation: "실무의 '무드'는 학술적으로 '분위기' 또는 '정서적 느낌'입니다. 디자인이 전달하는 감정이나 인상을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "봄 시즌이니까 밝은 무드로 가요" },
      { situation: "클라이언트 피드백", example: "무드보드 만들어서 보여주세요" },
      { situation: "업무 지시", example: "따뜻한 무드로 컨셉 잡아주세요" }
    ]
  },
  "비비드": {
    academic_term: "고채도 / 선명한 (Vivid / High Saturation)",
    practical_terms: ["비비드", "선명한", "진한"],
    explanation: "실무에서 '비비드'는 학술적으로 '고채도' 또는 '채도가 높은 색'입니다. 강렬하고 선명한 색상을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "너무 비비드해서 눈이 피로해요" },
      { situation: "클라이언트 피드백", example: "좀 더 비비드한 색으로 강렬하게 해주세요" },
      { situation: "업무 지시", example: "여름 시즌이니 비비드 컬러로 가요" }
    ]
  },
  "파스텔톤": {
    academic_term: "저채도 밝은 색 (Pastel Tone)",
    practical_terms: ["파스텔톤", "파스텔", "연한 색"],
    explanation: "실무 용어 '파스텔톤'은 학술적으로 '저채도의 밝은 색상'입니다. 부드럽고 은은한 느낌을 주는 색조예요.",
    contexts: [
      { situation: "디자인 회의", example: "봄 느낌 내려면 파스텔톤이 좋겠어요" },
      { situation: "클라이언트 피드백", example: "파스텔톤으로 부드러운 이미지 원해요" },
      { situation: "업무 지시", example: "전체를 파스텔톤으로 통일해주세요" }
    ]
  },
  "다크모드": {
    academic_term: "어두운 배경 모드 (Dark Mode)",
    practical_terms: ["다크모드", "어두운 테마", "야간 모드"],
    explanation: "실무의 '다크모드'는 학술적으로 '어두운 명도의 배경 인터페이스'입니다. 눈의 피로를 줄이고 세련된 느낌을 주는 UI 방식이에요.",
    contexts: [
      { situation: "디자인 회의", example: "다크모드 버전도 같이 작업해주세요" },
      { situation: "클라이언트 피드백", example: "다크모드에서 글자가 안 보여요" },
      { situation: "업무 지시", example: "다크모드 대비 비율 체크해주세요" }
    ]
  },

  // 레이아웃 관련
  "여백": {
    academic_term: "네거티브 스페이스 (White Space / Negative Space)",
    practical_terms: ["여백", "공간", "숨통"],
    explanation: "실무에서 자주 쓰는 '여백'은 학술적으로 'Negative Space' 또는 'White Space'입니다. 요소들 사이의 비어있는 공간을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "여백을 넉넉하게 줘서 숨통 트이게 해요" },
      { situation: "클라이언트 피드백", example: "너무 빽빽해요. 여백 좀 주세요" },
      { situation: "업무 지시", example: "각 섹션 사이 여백 80px로 맞춰주세요" }
    ]
  },
  "간격": {
    academic_term: "공간 / 거리 (Spacing / Gap)",
    practical_terms: ["간격", "스페이싱", "거리"],
    explanation: "실무 용어 '간격'은 학술적으로 'Spacing'입니다. 요소들 사이의 거리를 조절하여 가독성과 시각적 편안함을 만들어요.",
    contexts: [
      { situation: "디자인 회의", example: "버튼들 간격을 16px로 맞춰주세요" },
      { situation: "클라이언트 피드백", example: "요소들 간격이 불규칙해요" },
      { situation: "업무 지시", example: "8px 간격 시스템 따라주세요" }
    ]
  },
  "마진": {
    academic_term: "바깥 여백 (Margin)",
    practical_terms: ["마진", "외부 여백", "바깥 간격"],
    explanation: "실무의 '마진'은 학술적으로 '요소 외부의 여백'입니다. 요소와 주변 요소 사이의 바깥쪽 공간을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "컨테이너 마진 24px로 설정할게요" },
      { situation: "클라이언트 피드백", example: "좌우 마진이 너무 좁아요" },
      { situation: "업무 지시", example: "모바일에서는 마진 16px로 줄여주세요" }
    ]
  },
  "패딩": {
    academic_term: "안쪽 여백 (Padding)",
    practical_terms: ["패딩", "내부 여백", "안쪽 간격"],
    explanation: "실무 용어 '패딩'은 학술적으로 '요소 내부의 여백'입니다. 콘텐츠와 경계선 사이의 안쪽 공간을 말해요.",
    contexts: [
      { situation: "디자인 회의", example: "버튼 패딩을 좀 더 줘서 클릭하기 편하게 해요" },
      { situation: "클라이언트 피드백", example: "텍스트가 박스에 너무 붙어있어요. 패딩 주세요" },
      { situation: "업무 지시", example: "카드 패딩 20px로 통일해주세요" }
    ]
  },
  "그리드": {
    academic_term: "격자 체계 (Grid System)",
    practical_terms: ["그리드", "그리드 시스템", "레이아웃 틀"],
    explanation: "실무의 '그리드'는 학술적으로 '격자 체계'입니다. 요소들을 규칙적으로 배치하기 위한 가이드 라인 시스템이에요.",
    contexts: [
      { situation: "디자인 회의", example: "12컬럼 그리드로 레이아웃 잡을게요" },
      { situation: "클라이언트 피드백", example: "그리드가 안 맞아서 삐뚤어 보여요" },
      { situation: "업무 지시", example: "그리드 시스템 켜고 작업해주세요" }
    ]
  },
  "가이드라인": {
    academic_term: "안내선 / 기준선 (Guideline)",
    practical_terms: ["가이드라인", "안내선", "가이드"],
    explanation: "실무 용어 '가이드라인'은 학술적으로 '기준선' 또는 '안내선'입니다. 정렬과 배치를 돕는 시각적 기준을 제공해요.",
    contexts: [
      { situation: "디자인 회의", example: "가이드라인 켜고 정렬 맞춰주세요" },
      { situation: "클라이언트 피드백", example: "브랜드 가이드라인 따라서 작업해주세요" },
      { situation: "업무 지시", example: "디자인 가이드라인 문서 참고하세요" }
    ]
  },
  "정렬": {
    academic_term: "배열 / 맞춤 (Alignment)",
    practical_terms: ["정렬", "얼라인", "맞춤"],
    explanation: "실무의 '정렬'은 학술적으로 'Alignment'입니다. 요소들을 일정한 기준선에 맞춰 정돈하는 것을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "텍스트 왼쪽 정렬로 통일할게요" },
      { situation: "클라이언트 피드백", example: "아이콘들 정렬이 안 맞아요" },
      { situation: "업무 지시", example: "모든 요소 가운데 정렬해주세요" }
    ]
  },
  "센터": {
    academic_term: "중앙 정렬 (Center Alignment)",
    practical_terms: ["센터", "가운데", "중앙"],
    explanation: "실무 용어 '센터'는 학술적으로 '중앙 정렬'입니다. 요소를 중앙에 배치하여 대칭적이고 안정적인 느낌을 주는 방식이에요.",
    contexts: [
      { situation: "디자인 회의", example: "로고는 센터로 배치합시다" },
      { situation: "클라이언트 피드백", example: "제목을 센터 정렬로 해주세요" },
      { situation: "업무 지시", example: "모바일에서는 다 센터로 맞춰주세요" }
    ]
  },
  "밸런스": {
    academic_term: "균형 (Balance)",
    practical_terms: ["밸런스", "균형", "안정감"],
    explanation: "실무의 '밸런스'는 학술적으로 '균형'입니다. 시각적 무게가 한쪽으로 치우치지 않고 조화롭게 분산되어 있는 상태예요.",
    contexts: [
      { situation: "디자인 회의", example: "왼쪽이 너무 무거워요. 밸런스 맞춰주세요" },
      { situation: "클라이언트 피드백", example: "전체적인 밸런스가 이상해요" },
      { situation: "업무 지시", example: "좌우 밸런스 보면서 작업해주세요" }
    ]
  },
  "비율": {
    academic_term: "프로포션 (Proportion / Ratio)",
    practical_terms: ["비율", "프로포션", "사이즈 비율"],
    explanation: "실무 용어 '비율'은 학술적으로 'Proportion'입니다. 요소들 간의 크기 관계가 조화롭고 적절한지를 나타내요.",
    contexts: [
      { situation: "디자인 회의", example: "이미지 비율 16:9로 맞춰주세요" },
      { situation: "클라이언트 피드백", example: "제목과 본문 크기 비율이 이상해요" },
      { situation: "업무 지시", example: "황금 비율로 레이아웃 잡아볼까요?" }
    ]
  },

  // 디자인 원리 관련
  "포인트": {
    academic_term: "강조점 / 액센트 (Focal Point / Accent)",
    practical_terms: ["포인트", "액센트", "포인트 컬러"],
    explanation: "실무의 '포인트'는 학술적으로 '강조점' 또는 'Focal Point'입니다. 시선을 끌고 주목시키는 핵심 요소를 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "빨간색을 포인트 컬러로 쓸게요" },
      { situation: "클라이언트 피드백", example: "여기에 포인트를 줘서 눈에 띄게 해주세요" },
      { situation: "업무 지시", example: "CTA 버튼에 포인트 주세요" }
    ]
  },
  "강조": {
    academic_term: "강세 / 주목 (Emphasis)",
    practical_terms: ["강조", "하이라이트", "부각"],
    explanation: "실무 용어 '강조'는 학술적으로 'Emphasis'입니다. 특정 요소를 두드러지게 만들어 사용자의 주의를 끄는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "할인율을 크게 강조해주세요" },
      { situation: "클라이언트 피드백", example: "중요한 정보인데 강조가 안 돼요" },
      { situation: "업무 지시", example: "신제품 부분 강조 부탁합니다" }
    ]
  },
  "시선 흐름": {
    academic_term: "시각적 동선 (Visual Flow)",
    practical_terms: ["시선 흐름", "동선", "시선 이동"],
    explanation: "실무의 '시선 흐름'은 학술적으로 '시각적 동선'입니다. 사용자의 눈이 자연스럽게 이동하는 경로를 설계하는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "시선 흐름이 위에서 아래로 자연스럽게 이어져요" },
      { situation: "클라이언트 피드백", example: "시선 흐름이 끊겨서 읽기 불편해요" },
      { situation: "업무 지시", example: "Z자 시선 흐름으로 레이아웃 잡아주세요" }
    ]
  },
  "우선순위": {
    academic_term: "위계 구조 (Hierarchy)",
    practical_terms: ["우선순위", "정보 우선순위", "중요도"],
    explanation: "실무 용어 '우선순위'는 학술적으로 '정보의 위계 구조'입니다. 어떤 정보를 먼저 보여줄지 순서를 정하는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "정보 우선순위 정해서 크기 조절할게요" },
      { situation: "클라이언트 피드백", example: "가격이 가장 중요하니 우선순위 높여주세요" },
      { situation: "업무 지시", example: "콘텐츠 우선순위 기획서 보고 작업하세요" }
    ]
  },
  "그룹감": {
    academic_term: "그룹핑 / 집단화 (Grouping)",
    practical_terms: ["그룹감", "묶음", "그루핑"],
    explanation: "실무의 '그룹감'은 학술적으로 'Grouping' 또는 '집단화'입니다. 관련된 요소들을 하나의 단위로 인식되도록 배치하는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "관련 정보끼리 그룹감 있게 배치해요" },
      { situation: "클라이언트 피드백", example: "이 항목들은 같은 카테고리니 그룹감 주세요" },
      { situation: "업무 지시", example: "박스로 묶어서 그룹감 표현해주세요" }
    ]
  },
  "통일감": {
    academic_term: "일관성 / 조화 (Consistency / Unity)",
    practical_terms: ["통일감", "일관성", "조화"],
    explanation: "실무 용어 '통일감'은 학술적으로 'Unity' 또는 '일관성'입니다. 전체 디자인이 하나의 흐름으로 연결되어 보이는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "전체 페이지 통일감 있게 스타일 맞춰주세요" },
      { situation: "클라이언트 피드백", example: "페이지마다 다른 느낌이라 통일감이 없어요" },
      { situation: "업무 지시", example: "디자인 시스템 적용해서 통일감 살려주세요" }
    ]
  },
  "대비": {
    academic_term: "대조 / 차이 (Contrast)",
    practical_terms: ["대비", "콘트라스트", "차이"],
    explanation: "실무의 '대비'는 학술적으로 'Contrast'입니다. 요소들 간의 차이를 명확히 하여 구분되고 눈에 띄게 만드는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "배경과 텍스트 대비를 높여주세요" },
      { situation: "클라이언트 피드백", example: "색 대비가 약해서 잘 안 보여요" },
      { situation: "업무 지시", example: "접근성 위해 대비 비율 4.5:1 이상으로" }
    ]
  },
  "리듬감": {
    academic_term: "반복적 패턴 (Rhythm)",
    practical_terms: ["리듬감", "패턴", "반복"],
    explanation: "실무 용어 '리듬감'은 학술적으로 'Rhythm'입니다. 요소들이 규칙적으로 반복되어 시각적 흐름을 만드는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "카드들을 규칙적으로 배치해서 리듬감 줄게요" },
      { situation: "클라이언트 피드백", example: "단조로워요. 크기 변화로 리듬감 주세요" },
      { situation: "업무 지시", example: "큰-작은 패턴 반복으로 리듬감 표현해주세요" }
    ]
  },

  // 브랜딩 관련
  "브랜딩": {
    academic_term: "브랜드 구축 (Branding)",
    practical_terms: ["브랜딩", "브랜드 작업", "브랜드 개발"],
    explanation: "실무의 '브랜딩'은 학술적으로 '브랜드 아이덴티티 구축'입니다. 브랜드의 시각적 정체성을 만들고 일관되게 전달하는 작업이에요.",
    contexts: [
      { situation: "디자인 회의", example: "브랜딩 작업부터 시작해서 전체 톤을 잡을게요" },
      { situation: "클라이언트 피드백", example: "브랜딩이 경쟁사랑 차별화가 안 돼요" },
      { situation: "업무 지시", example: "브랜딩 리뉴얼 프로젝트 시작합니다" }
    ]
  },
  "BI": {
    academic_term: "브랜드 아이덴티티 (Brand Identity)",
    practical_terms: ["BI", "브랜드 아이덴티티", "브랜드 정체성"],
    explanation: "실무 용어 'BI'는 학술적으로 'Brand Identity'입니다. 로고, 컬러, 서체 등 브랜드를 시각적으로 표현하는 모든 요소를 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "BI 가이드라인 만들어서 공유할게요" },
      { situation: "클라이언트 피드백", example: "새로운 BI 개발이 필요해요" },
      { situation: "업무 지시", example: "BI 매뉴얼 참고해서 작업해주세요" }
    ]
  },
  "로고": {
    academic_term: "상징 마크 / 로고타입 (Logo / Logotype)",
    practical_terms: ["로고", "심볼", "엠블럼"],
    explanation: "실무의 '로고'는 학술적으로 '상징 마크' 또는 'Logotype'입니다. 브랜드를 대표하는 시각적 상징물이에요.",
    contexts: [
      { situation: "디자인 회의", example: "로고 시안 3개 준비했습니다" },
      { situation: "클라이언트 피드백", example: "로고가 너무 복잡해요. 심플하게 해주세요" },
      { situation: "업무 지시", example: "로고 사이즈 규정 지켜주세요" }
    ]
  },
  "CI": {
    academic_term: "기업 아이덴티티 (Corporate Identity)",
    practical_terms: ["CI", "기업 이미지", "회사 정체성"],
    explanation: "실무 용어 'CI'는 학술적으로 'Corporate Identity'입니다. 기업의 철학과 가치를 시각적으로 표현하는 통합된 이미지 시스템이에요.",
    contexts: [
      { situation: "디자인 회의", example: "CI 리뉴얼하면서 전체 톤 바꿉시다" },
      { situation: "클라이언트 피드백", example: "우리 회사 CI에 맞게 조정해주세요" },
      { situation: "업무 지시", example: "CI 가이드북 배포했으니 참고하세요" }
    ]
  },

  // UI/UX 관련
  "UI": {
    academic_term: "사용자 인터페이스 (User Interface)",
    practical_terms: ["UI", "화면", "인터페이스"],
    explanation: "실무의 'UI'는 학술적으로 'User Interface'입니다. 사용자가 보고 조작하는 시각적 화면과 요소들을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "UI 디자인 먼저 끝내고 개발 넘기겠습니다" },
      { situation: "클라이언트 피드백", example: "UI가 직관적이지 않아요" },
      { situation: "업무 지시", example: "모바일 UI 작업 부탁합니다" }
    ]
  },
  "UX": {
    academic_term: "사용자 경험 (User Experience)",
    practical_terms: ["UX", "사용성", "사용자 경험"],
    explanation: "실무 용어 'UX'는 학술적으로 'User Experience'입니다. 사용자가 제품이나 서비스를 사용하면서 느끼는 전체적인 경험을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "UX 개선하려면 플로우를 줄여야 해요" },
      { situation: "클라이언트 피드백", example: "사용자 테스트 결과 UX가 불편하대요" },
      { situation: "업무 지시", example: "UX 리서치 먼저 진행해주세요" }
    ]
  },
  "반응형": {
    academic_term: "적응형 레이아웃 (Responsive Design)",
    practical_terms: ["반응형", "모바일 대응", "디바이스 대응"],
    explanation: "실무의 '반응형'은 학술적으로 'Responsive Design'입니다. 화면 크기에 따라 레이아웃이 자동으로 조정되는 디자인 방식이에요.",
    contexts: [
      { situation: "디자인 회의", example: "PC, 태블릿, 모바일 반응형으로 다 만들어요" },
      { situation: "클라이언트 피드백", example: "모바일에서 레이아웃 깨져요. 반응형 체크해주세요" },
      { situation: "업무 지시", example: "반응형 브레이크포인트 3개로 작업하세요" }
    ]
  },
  "모바일 대응": {
    academic_term: "모바일 최적화 (Mobile Optimization)",
    practical_terms: ["모바일 대응", "모바일 최적화", "모바일 버전"],
    explanation: "실무 용어 '모바일 대응'은 학술적으로 'Mobile Optimization'입니다. 작은 화면에서도 편하게 사용할 수 있도록 최적화하는 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "모바일 먼저 디자인하고 PC는 확장할게요" },
      { situation: "클라이언트 피드백", example: "모바일 대응이 안 돼있어요" },
      { situation: "업무 지시", example: "모바일 사용자가 많으니 모바일 중심으로 작업하세요" }
    ]
  },
  "버튼": {
    academic_term: "행동 유도 요소 (Call-to-Action / Button)",
    practical_terms: ["버튼", "CTA", "클릭 버튼"],
    explanation: "실무의 '버튼'은 학술적으로 'Call-to-Action' 또는 '행동 유도 요소'입니다. 사용자의 클릭을 유도하는 인터랙티브 요소예요.",
    contexts: [
      { situation: "디자인 회의", example: "CTA 버튼을 크고 눈에 띄게 만들어요" },
      { situation: "클라이언트 피드백", example: "버튼이 어디 있는지 잘 안 보여요" },
      { situation: "업무 지시", example: "메인 버튼은 포인트 컬러로 강조해주세요" }
    ]
  },
  "아이콘": {
    academic_term: "시각 기호 / 픽토그램 (Icon / Pictogram)",
    practical_terms: ["아이콘", "심볼", "픽토그램"],
    explanation: "실무 용어 '아이콘'은 학술적으로 '시각 기호' 또는 'Pictogram'입니다. 개념이나 기능을 간단한 그래픽으로 표현한 것이에요.",
    contexts: [
      { situation: "디자인 회의", example: "아이콘 스타일 라인으로 통일할게요" },
      { situation: "클라이언트 피드백", example: "아이콘이 뭘 의미하는지 모르겠어요" },
      { situation: "업무 지시", example: "아이콘 라이브러리에서 찾아서 써주세요" }
    ]
  },

  // 기타 실무 용어
  "작업물": {
    academic_term: "디자인 결과물 (Design Deliverable)",
    practical_terms: ["작업물", "결과물", "산출물"],
    explanation: "실무의 '작업물'은 학술적으로 '디자인 결과물' 또는 'Deliverable'입니다. 디자인 프로젝트의 최종 완성본을 의미해요.",
    contexts: [
      { situation: "디자인 회의", example: "작업물은 금요일까지 전달드릴게요" },
      { situation: "클라이언트 피드백", example: "작업물 받았는데 파일 형식 바꿔주세요" },
      { situation: "업무 지시", example: "작업물 최종본 PDF로 저장해주세요" }
    ]
  },
  "누끼따기": {
    academic_term: "배경 제거 (Background Removal / Clipping)",
    practical_terms: ["누끼따기", "누끼", "배경 제거"],
    explanation: "실무 용어 '누끼따기'는 학술적으로 '배경 제거' 또는 'Clipping'입니다. 이미지에서 피사체만 남기고 배경을 투명하게 만드는 작업이에요.",
    contexts: [
      { situation: "디자인 회의", example: "제품 이미지 누끼 따서 합성할게요" },
      { situation: "클라이언트 피드백", example: "배경 제거해서 깔끔하게 해주세요" },
      { situation: "업무 지시", example: "이 사진들 누끼 따서 PNG로 저장해주세요" }
    ]
  },
  "텍스처": {
    academic_term: "질감 / 표면 효과 (Texture)",
    practical_terms: ["텍스처", "질감", "표면"],
    explanation: "실무의 '텍스처'는 학술적으로 '질감' 또는 '표면 효과'입니다. 시각적으로 촉각적 느낌을 표현하는 디자인 요소예요.",
    contexts: [
      { situation: "디자인 회의", example: "배경에 종이 텍스처 넣어볼까요?" },
      { situation: "클라이언트 피드백", example: "너무 평면적이에요. 텍스처 좀 추가해주세요" },
      { situation: "업무 지시", example: "그라데이션 노이즈로 텍스처 살려주세요" }
    ]
  }
};

// 실무 용어 목록 (50개)
export const practicalTermsOnly = Object.keys(practicalTermsData).sort();
