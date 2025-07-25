import React from 'react';
import CodeBlock from '@/components/ui/CodeBlock';
import TipBox from '@/components/ui/TipBox';
import { promptExamples } from '@/data/prompt-examples';
import { Copy, Check } from 'lucide-react';

interface Lesson2Props {
  copiedPrompt: number | null;
  copyPromptToClipboard: (promptId: number) => void;
}

export default function Lesson2({ copiedPrompt, copyPromptToClipboard }: Lesson2Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Conda 환경 확인 및 관리</h2>
        
        <CodeBlock
          code={`python --version
conda --version`}
          language="bash"
          title="버전 확인"
        />

        <CodeBlock
          code={`conda env list
conda activate [env_name]`}
          language="bash"
          title="환경 관리"
        />

        <TipBox type="info" title="Conda 환경의 중요성">
          <ul className="space-y-2">
            <li>• <strong>라이브러리 충돌 방지</strong>: 각 프로젝트가 자신만의 독립적인 라이브러리 세트를 가질 수 있도록 함</li>
            <li>• <strong>프로젝트 격리</strong>: 특정 프로젝트를 위한 라이브러리만 설치하여 환경을 깨끗하게 유지</li>
            <li>• <strong>쉬운 공유 및 재현</strong>: 프로젝트의 가상 환경 설정을 쉽게 공유할 수 있어, 다른 사람도 동일한 환경에서 프로젝트를 실행</li>
          </ul>
        </TipBox>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Gemini CLI 테스트하기</h3>
        
        <CodeBlock
          code="gemini"
          language="bash"
          title="Gemini CLI 실행"
        />

        <TipBox type="tip" title="좋은 프롬프트 작성법">
          <div className="space-y-3">
            <p><strong>1. 명확하게 목표를 제시하기</strong></p>
            <p className="text-sm">나쁜 예시: "파이썬 코드 만들어 줘."</p>
            <p className="text-sm">좋은 예시: "사용자가 숫자를 입력하면, 해당 숫자까지의 덧셈한 결과를 출력하는 파이썬 프로그램을 만들어 줘."</p>
            
            <p><strong>2. 구체적인 입력과 출력 명시하기</strong></p>
            <p className="text-sm">프로그램이 어떤 입력을 받고, 어떤 형식으로 출력해야 하는지 상세하게 알려주기</p>
            
            <p><strong>3. 제약 조건과 요구사항 추가하기</strong></p>
            <p className="text-sm">특정 라이브러리 사용, 파일 형식, 코드 스타일, 성능 요구사항 등</p>
          </div>
        </TipBox>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">프롬프트 예시 모음</h3>
        <p className="text-gray-700 mb-6">
          다음은 학생들이 Gemini CLI로 파이썬 프로그램을 만들 때 사용할 수 있는 좋은 프롬프트 예시들입니다.
          각 프롬프트를 복사해서 Gemini CLI에서 사용해보세요.
        </p>

        <div className="space-y-6">
          {promptExamples.map((example) => (
            <div key={example.id} className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {example.id}. {example.title}
                  </h4>
                  <p className="text-gray-600 mb-2">{example.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      example.difficulty === '초급' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {example.difficulty}
                    </span>
                    <span className="text-gray-500">{example.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyPromptToClipboard(example.id)}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  {copiedPrompt === example.id ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-600" />
                  )}
                  <span className="text-sm">
                    {copiedPrompt === example.id ? '복사됨' : '복사'}
                  </span>
                </button>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-2">프롬프트:</h5>
                <div className="bg-white p-3 rounded border font-mono text-sm">
                  {example.prompt}
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-gray-900 mb-2">학습 목표:</h5>
                <ul className="space-y-1">
                  {example.learningObjectives.map((objective, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 