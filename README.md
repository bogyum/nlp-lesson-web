# NLP Lesson Web Application

Docker, VS Code, Jupyter Lab을 활용한 자연어처리 학습 웹사이트입니다.

## 🚀 프로젝트 개요

이 프로젝트는 학생들이 자연어처리(NLP)를 단계별로 학습할 수 있는 인터랙티브 웹 애플리케이션입니다.

### 📚 학습 내용

1. **Docker 기초** - 컨테이너 환경 이해
2. **VS Code 확장 기능** - 원격 개발 환경 설정
3. **Jupyter Lab 설치** - 개발 환경 구축
4. **자연어처리 라이브러리** - KoNLPy, spaCy, Hugging Face 등
5. **웹 서비스 아키텍처** - 프론트엔드, 백엔드, 데이터베이스

### 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🏃‍♂️ 로컬 개발

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/bogyum/nlp-lesson-web.git
cd nlp-lesson-web

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 정적 사이트 생성 (GitHub Pages용)
npm run export
```

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### 배포 URL

- **라이브 사이트**: https://bogyum.github.io/nlp-lesson-web
- **GitHub 저장소**: https://github.com/bogyum/nlp-lesson-web

### 배포 과정

1. `main` 브랜치에 푸시하면 자동으로 GitHub Actions가 실행됩니다
2. Next.js 프로젝트가 정적 사이트로 빌드됩니다
3. GitHub Pages에 자동으로 배포됩니다

## 📁 프로젝트 구조

```
nlp-lesson-web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── lesson/[id]/     # 동적 라우팅 (레슨 페이지)
│   │   └── page.tsx         # 메인 페이지
│   ├── components/          # React 컴포넌트
│   │   ├── lessons/         # 레슨별 컴포넌트
│   │   ├── ui/              # UI 컴포넌트
│   │   └── layout/          # 레이아웃 컴포넌트
│   └── data/                # 데이터 파일
├── public/                  # 정적 파일
│   └── images/              # 이미지 파일
└── .github/workflows/       # GitHub Actions
```

## 🎨 주요 기능

### 📖 인터랙티브 레슨
- 6개의 단계별 학습 모듈
- 시각적 다이어그램과 예시
- 코드 블록과 팁 박스

### 🎯 학습 진행도 추적
- 완료된 레슨 표시
- 진행률 시각화
- 네비게이션 지원

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 지원
- 최적화된 사용자 경험

## 🔧 개발 가이드

### 새로운 레슨 추가

1. `src/data/lessons.ts`에 레슨 정보 추가
2. `src/components/lessons/`에 레슨 컴포넌트 생성
3. `src/app/lesson/[id]/page.tsx`에 레슨 컴포넌트 연결

### 스타일링

- Tailwind CSS 클래스 사용
- 컴포넌트별 스타일 모듈화
- 일관된 디자인 시스템 적용

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 [GitHub Issues](https://github.com/bogyum/nlp-lesson-web/issues)를 통해 문의해 주세요.

---

**NLP Lesson Web Application** - 자연어처리 학습을 위한 현대적인 웹 플랫폼 🚀
