import React from 'react';
import Image from 'next/image';
import CodeBlock from '@/components/ui/CodeBlock';
import TipBox from '@/components/ui/TipBox';

export default function Lesson3() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">VS Code 확장 기능 설치</h2>
        
        <TipBox type="info" title="VS Code 원격 개발의 장점">
          <ul className="space-y-2">
            <li>• <strong>로컬 자원 사용 최소화</strong>: 고성능의 개발 환경(많은 메모리, 빠른 CPU 등)이 필요한 복잡한 프로젝트를 진행할 때, 모든 작업을 로컬 컴퓨터에서 처리하면 컴퓨터가 느려질 수 있습니다. 원격 개발은 실제 계산 작업을 원격 서버에서 수행하므로, 여러분의 로컬 컴퓨터는 단순히 화면을 보여주는 역할만 하게 되어 부담이 훨씬 줄어듭니다.</li>
            <li>• <strong>개발 환경 일관성 유지</strong>: 팀 프로젝트를 할 때, 각 팀원의 컴퓨터 환경이 다르면 예상치 못한 오류가 발생할 수 있습니다. 원격 개발을 사용하면 모든 팀원이 동일한 Docker 컨테이너나 원격 서버에 접속하여 개발하므로, "내 컴퓨터에서는 되는데 왜 네 컴퓨터에서는 안 돼?"와 같은 환경 문제를 근본적으로 해결할 수 있습니다.</li>
            <li>• <strong>협업 용이성</strong>: 여러 명이 동일한 원격 환경에 접속하여 같은 코드 파일을 실시간으로 편집하고, 서로의 작업 진행 상황을 공유하며 협업할 수 있습니다. 이는 마치 구글 문서(Google Docs)를 여러 명이 함께 편집하는 것과 비슷합니다.</li>
            <li>• <strong>보안 강화</strong>: 중요한 소스 코드나 민감한 데이터가 로컬 컴퓨터에 저장되지 않고, 보안이 강화된 원격 서버에 보관됩니다. 이는 데이터 유출 위험을 줄여주고, 개인 장치 분실 시에도 코드 보안을 유지하는 데 도움이 됩니다.</li>
            <li>• <strong>어디서든 개발 가능</strong>: 인터넷만 연결되어 있다면 학교 컴퓨터, 집 컴퓨터, 심지어 태블릿에서도 원격 서버에 접속하여 개발 작업을 이어나갈 수 있습니다. 장소에 구애받지 않고 언제든지 작업할 수 있는 유연성을 제공합니다.</li>
          </ul>
        </TipBox>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h4 className="font-medium text-gray-900 mb-4">설치할 확장 기능:</h4>
          
          <div className="space-y-6">
            {/* Remote Explorer */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/lessons/lesson3/remote-explorer.png"
                  alt="Remote Explorer 확장 기능"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Remote Explorer</h5>
                  <p className="text-sm text-gray-600">View remote machines for SSH and Tunnels</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-blue-600 font-medium">Microsoft</span>
                    <span className="text-xs text-gray-500">✓ Verified</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">설치 방법:</h5>
                <ol className="space-y-2 text-sm text-blue-800">
                  <li>1. VS Code에서 Extensions 탭 열기 (Ctrl+Shift+X)</li>
                  <li>2. 검색창에 "Remote Explorer" 입력</li>
                  <li>3. Microsoft에서 제공하는 Remote Explorer 확장 기능 찾기</li>
                  <li>4. Install 버튼 클릭하여 설치</li>
                </ol>
              </div>
              
              {/* Remote Explorer 이미지를 크게 표시 */}
              <div className="mt-6 text-center">
                <Image
                  src="/images/lessons/lesson3/remote-explorer.png"
                  alt="Remote Explorer 확장 기능 스크린샷"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">Remote Explorer 확장 기능 마켓플레이스 화면</p>
              </div>
            </div>

            {/* Dev Containers */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/lessons/lesson3/dev-containers.png"
                  alt="Dev Containers 확장 기능"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Dev Containers</h5>
                  <p className="text-sm text-gray-600">Open any folder or repository inside a Docker container</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-blue-600 font-medium">Microsoft</span>
                    <span className="text-xs text-gray-500">✓ Verified</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">설치 방법:</h5>
                <ol className="space-y-2 text-sm text-blue-800">
                  <li>1. VS Code에서 Extensions 탭 열기 (Ctrl+Shift+X)</li>
                  <li>2. 검색창에 "Dev Containers" 입력</li>
                  <li>3. Microsoft에서 제공하는 Dev Containers 확장 기능 찾기</li>
                  <li>4. Install 버튼 클릭하여 설치</li>
                </ol>
              </div>
              
              {/* Dev Containers 이미지를 크게 표시 */}
              <div className="mt-6 text-center">
                <Image
                  src="/images/lessons/lesson3/dev-containers.png"
                  alt="Dev Containers 확장 기능 스크린샷"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">Dev Containers 확장 기능 마켓플레이스 화면</p>
              </div>
            </div>

            {/* Remote Development */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <Image
                  src="/images/lessons/lesson3/remote-development.png"
                  alt="Remote Development 확장 기능"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900">Remote Development</h5>
                  <p className="text-sm text-gray-600">An extension pack that enables you to open any folder in a container, on a remote machine, or in WSL</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-blue-600 font-medium">Microsoft</span>
                    <span className="text-xs text-gray-500">✓ Verified</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">설치 방법:</h5>
                <ol className="space-y-2 text-sm text-blue-800">
                  <li>1. VS Code에서 Extensions 탭 열기 (Ctrl+Shift+X)</li>
                  <li>2. 검색창에 "Remote Development" 입력</li>
                  <li>3. Microsoft에서 제공하는 Remote Development 확장 기능 찾기</li>
                  <li>4. Install 버튼 클릭하여 설치</li>
                </ol>
              </div>
              
              {/* Remote Development 이미지를 크게 표시 */}
              <div className="mt-6 text-center">
                <Image
                  src="/images/lessons/lesson3/remote-development.png"
                  alt="Remote Development 확장 기능 스크린샷"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <p className="text-sm text-gray-600 mt-2">Remote Development 확장 기능 마켓플레이스 화면</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Docker Container 원격 접속</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">접속 방법:</h4>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>1. VS Code 좌측하단 '원격 탐색기(Remote Explorer)' 클릭</li>
              <li>2. 'SSH'에서 '+' 버튼 클릭</li>
              <li>3. Docker Container에 원격 접속 설정</li>
              <li>4. ssh [ID]@localhost -p 10022 입력</li>
            </ol>
          </div>

          <CodeBlock
            code="ssh [ID]@localhost -p 10022"
            language="bash"
            title="SSH 접속 명령어"
          />
        </div>
      </div>
    </div>
  );
} 