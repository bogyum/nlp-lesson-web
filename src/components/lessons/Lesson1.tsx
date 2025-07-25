import React from 'react';
import CodeBlock from '@/components/ui/CodeBlock';
import TipBox from '@/components/ui/TipBox';

export default function Lesson1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Docker 개념 이해하기</h2>
        <p className="text-gray-700 mb-4">
          Docker는 마치 '소프트웨어 컨테이너'를 만드는 기술과 같습니다. 컨테이너는 프로그램과 그 프로그램을 실행하는 데 필요한 모든 것(코드, 라이브러리, 설정 등)을 한데 묶어 어떤 컴퓨터에서든 동일하게 작동하도록 해주는 독립적인 공간입니다.
        </p>
        
        <TipBox type="info" title="Docker를 사용하는 이유">
          <ul className="space-y-2">
            <li>• <strong>환경 일관성</strong>: "내 컴퓨터에서는 되는데 왜 친구 컴퓨터에서는 안 되지?"라는 문제를 해결</li>
            <li>• <strong>쉬운 배포</strong>: 개발 환경에서 잘 작동하는 프로그램을 컨테이너에 담아 다른 서버나 클라우드에 쉽게 옮겨 실행</li>
            <li>• <strong>자원 효율성</strong>: 가상 머신보다 가볍고 빠르게 실행되어 컴퓨터 자원을 효율적으로 사용</li>
            <li>• <strong>격리성</strong>: 각 프로그램이 독립된 컨테이너 안에서 실행되므로, 한 프로그램의 문제가 다른 프로그램에 영향을 주지 않음</li>
          </ul>
        </TipBox>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Docker Hub에서 이미지 다운로드</h3>
        <p className="text-gray-700 mb-4">
          Docker Hub에 접속하여 업로드한 가상환경을 확인하고 다운로드합니다.
        </p>
        
        <CodeBlock
          code="docker pull [ID:repository_name]"
          language="bash"
          title="Docker 이미지 다운로드"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">컨테이너 실행 및 관리</h3>
        
        <CodeBlock
          code={`docker run -it -d -p 10022:22 -p 3000:3000 -p 8000:8000 -p 8080:8080 --name='nlp' [repository_name]`}
          language="bash"
          title="컨테이너 실행"
        />

        <TipBox type="tip" title="명령어 옵션 설명">
          <ul className="space-y-1">
            <li>• <code>-it</code>: interactive + tty - 컨테이너와 상호작용 가능한 터미널</li>
            <li>• <code>-d</code>: detached - 백그라운드에서 실행</li>
            <li>• <code>-p</code>: port forwarding - 포트 연결</li>
            <li>• <code>--name</code>: 컨테이너 이름 지정</li>
          </ul>
        </TipBox>

        <div className="mt-4">
          <CodeBlock
            code="ssh [ID]@localhost -p 10022"
            language="bash"
            title="SSH 접속"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">컨테이너 관리 명령어</h3>
        
        <CodeBlock
          code={`docker stop nlp      # nlp 컨테이너 종료
docker restart nlp   # nlp 컨테이너 재시동`}
          language="bash"
          title="컨테이너 관리"
        />
      </div>
    </div>
  );
} 