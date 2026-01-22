# Design Bridge 배포 가이드 📦

이 문서는 Design Bridge를 로컬 환경에서 개발하고 프로덕션에 배포하는 방법을 안내합니다.

## 목차

1. [로컬 개발 환경 설정](#로컬-개발-환경-설정)
2. [Vercel 배포](#vercel-배포)
3. [기타 플랫폼 배포](#기타-플랫폼-배포)
4. [문제 해결](#문제-해결)

---

## 로컬 개발 환경 설정

### 1. 필수 요구사항 확인

\`\`\`bash
# Node.js 버전 확인 (18 이상 필요)
node --version

# npm 버전 확인
npm --version
\`\`\`

### 2. 프로젝트 설정

\`\`\`bash
# 의존성 설치
npm install

# 환경변수 파일 생성
cp .env.example .env.local
\`\`\`

### 3. OpenAI API 키 발급

1. [OpenAI Platform](https://platform.openai.com) 접속
2. 로그인 또는 회원가입
3. API Keys 메뉴 접속
4. "Create new secret key" 클릭
5. 키 복사 (한 번만 표시됨!)

### 4. 환경변수 설정

`.env.local` 파일 편집:

\`\`\`env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
\`\`\`

### 5. 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 http://localhost:3000 접속

---

## Vercel 배포

Vercel은 Next.js를 만든 회사로, 최적의 호스팅 환경을 제공합니다.

### 방법 1: GitHub 연동 (권장)

#### 1단계: GitHub 저장소 생성

\`\`\`bash
# Git 초기화
git init

# .gitignore 확인 (.env.local은 제외되어야 함)
cat .gitignore

# 커밋
git add .
git commit -m "Initial commit: Design Bridge MVP"

# GitHub 저장소 생성 후 연결
git remote add origin https://github.com/YOUR_USERNAME/design-bridge.git
git branch -M main
git push -u origin main
\`\`\`

#### 2단계: Vercel 프로젝트 생성

1. [Vercel](https://vercel.com) 접속
2. GitHub 계정으로 로그인
3. "Add New..." → "Project" 클릭
4. Import Git Repository 섹션에서 저장소 선택
5. "Import" 클릭

#### 3단계: 프로젝트 설정

- **Framework Preset**: Next.js (자동 감지)
- **Root Directory**: ./
- **Build Command**: `npm run build` (기본값)
- **Output Directory**: `.next` (기본값)

#### 4단계: 환경변수 설정

"Environment Variables" 섹션에서:

\`\`\`
Name: OPENAI_API_KEY
Value: sk-proj-xxxxxxxxxxxxxxxxxxxxx
\`\`\`

- **All** (Production, Preview, Development) 선택

#### 5단계: 배포

"Deploy" 버튼 클릭 → 자동 빌드 및 배포

**배포 URL**: `https://your-project-name.vercel.app`

### 방법 2: Vercel CLI 사용

\`\`\`bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
\`\`\`

### 배포 후 자동화

GitHub에 푸시할 때마다 자동으로 배포됩니다:

- `main` 브랜치 → 프로덕션 배포
- 다른 브랜치 → 프리뷰 배포

---

## 기타 플랫폼 배포

### Netlify

1. [Netlify](https://netlify.com) 접속
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 연결
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Environment variables 추가
6. Deploy

### AWS Amplify

\`\`\`bash
# Amplify CLI 설치
npm install -g @aws-amplify/cli

# 설정
amplify configure

# 초기화
amplify init

# 호스팅 추가
amplify add hosting

# 배포
amplify publish
\`\`\`

### Docker (자체 서버)

\`\`\`dockerfile
# Dockerfile 생성
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

\`\`\`bash
# 빌드
docker build -t design-bridge .

# 실행
docker run -p 3000:3000 -e OPENAI_API_KEY=your_key design-bridge
\`\`\`

---

## 환경변수 관리

### 개발 환경

\`\`\`.env.local
OPENAI_API_KEY=sk-proj-dev-key
\`\`\`

### 프로덕션 환경

배포 플랫폼 대시보드에서 설정:

- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **Docker**: `-e` 플래그 또는 docker-compose.yml

### 보안 주의사항

- ❌ `.env.local`을 Git에 커밋하지 마세요
- ✅ `.gitignore`에 `.env*.local` 포함 확인
- ✅ 프로덕션과 개발 환경에서 다른 키 사용
- ✅ API 키 정기적으로 갱신

---

## 성능 최적화

### 1. 빌드 최적화

\`\`\`javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}
\`\`\`

### 2. 이미지 최적화

Next.js Image 컴포넌트 사용:

\`\`\`tsx
import Image from 'next/image'

<Image src="/logo.png" width={200} height={100} alt="Logo" />
\`\`\`

### 3. 캐싱 전략

API 라우트에 캐시 헤더 추가:

\`\`\`typescript
export async function GET() {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
    }
  })
}
\`\`\`

---

## 모니터링

### Vercel Analytics

\`\`\`bash
npm install @vercel/analytics
\`\`\`

\`\`\`tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

### 로그 확인

- **Vercel**: Dashboard → Deployments → Function Logs
- **Netlify**: Site → Functions → Logs

---

## 문제 해결

### 빌드 오류

\`\`\`bash
# 캐시 삭제
rm -rf .next node_modules
npm install
npm run build
\`\`\`

### 환경변수 인식 안 됨

1. `.env.local` 파일 확인
2. 서버 재시작
3. 배포 플랫폼에서 환경변수 재확인

### API 요청 실패

1. OpenAI API 키 유효성 확인
2. API 사용량 한도 확인
3. 네트워크 연결 확인
4. 브라우저 콘솔에서 에러 메시지 확인

### 배포 후 404 오류

- Next.js App Router 사용 확인
- Vercel에서 자동으로 라우팅 처리됨
- 다른 플랫폼: `rewrites` 설정 필요

---

## 체크리스트

배포 전 확인사항:

- [ ] `.env.local` 파일이 `.gitignore`에 포함
- [ ] OpenAI API 키 유효성 확인
- [ ] 로컬에서 `npm run build` 성공
- [ ] 프로덕션 환경변수 설정 완료
- [ ] README.md 업데이트
- [ ] 테스트 완료

---

## 다음 단계

배포 완료 후:

1. 커스텀 도메인 연결
2. HTTPS 인증서 설정 (Vercel 자동)
3. 모니터링 및 분석 도구 설정
4. 사용자 피드백 수집
5. 성능 최적화

---

**즐거운 배포 되세요!** 🚀
