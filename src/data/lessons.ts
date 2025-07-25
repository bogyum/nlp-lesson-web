export interface Lesson {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  duration: string;
  status: 'pending' | 'in-progress' | 'completed';
  icon: string;
  color: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Docker 가상환경 구성 복습",
    description: "Docker 개념과 명령어를 복습하고 컨테이너를 관리하는 방법을 학습합니다.",
    objectives: [
      "Docker 개념 이해하기",
      "Docker Hub에서 이미지 다운로드",
      "컨테이너 실행 및 관리",
      "SSH 접속 방법 학습"
    ],
    duration: "50분",
    status: 'pending',
    icon: "container",
    color: "emerald"
  },
  {
    id: 2,
    title: "Docker 환경 복습 및 Gemini CLI 테스트",
    description: "Conda 환경을 확인하고 Gemini CLI를 활용한 프로그래밍을 실습합니다.",
    objectives: [
      "Conda 환경 확인 및 관리",
      "Gemini CLI 사용법 학습",
      "좋은 프롬프트 작성법 이해",
      "간단한 프로그램 생성 실습"
    ],
    duration: "50분",
    status: 'pending',
    icon: "bot",
    color: "blue"
  },
  {
    id: 3,
    title: "VS Code 연동하기",
    description: "VS Code를 Docker 컨테이너에 연결하여 원격 개발 환경을 구축합니다.",
    objectives: [
      "VS Code 확장 기능 설치",
      "Docker Container 원격 접속",
      "원격 개발 환경 설정",
      "터미널 활용법 학습"
    ],
    duration: "50분",
    status: 'pending',
    icon: "code",
    color: "purple"
  },
  {
    id: 4,
    title: "Jupyter Lab 구동하기",
    description: "Jupyter Lab을 설치하고 설정하여 대화형 개발 환경을 구축합니다.",
    objectives: [
      "Jupyter Lab 설치 및 설정",
      "노트북 파일 생성 및 사용",
      "대화형 개발 환경 이해",
      "데이터 분석 도구 활용"
    ],
    duration: "50분",
    status: 'pending',
    icon: "notebook",
    color: "orange"
  },
  {
    id: 5,
    title: "자연어처리 모듈 개발",
    description: "다양한 NLP 라이브러리를 활용하여 자연어처리 프로그램을 개발합니다.",
    objectives: [
      "KoNLPy를 활용한 형태소 분석",
      "spaCy를 활용한 개체명 인식",
      "Hugging Face를 활용한 감성 분석",
      "KeyBERT를 활용한 키워드 추출"
    ],
    duration: "100분",
    status: 'pending',
    icon: "brain",
    color: "pink"
  },
  {
    id: 6,
    title: "웹 서비스 구축 소개",
    description: "Next.js와 Python API를 활용하여 웹 서비스를 구축하는 방법을 학습합니다.",
    objectives: [
      "웹 서비스 아키텍처 이해",
      "Next.js 프론트엔드 개발",
      "Python 백엔드 API 개발",
      "데이터베이스 연동 방법"
    ],
    duration: "50분",
    status: 'pending',
    icon: "globe",
    color: "indigo"
  }
];

export const getLessonById = (id: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
}; 