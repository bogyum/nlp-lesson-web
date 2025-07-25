import React from 'react';
import Image from 'next/image';
import CodeBlock from '@/components/ui/CodeBlock';
import TipBox from '@/components/ui/TipBox';

export default function Lesson4() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Jupyter Lab 설치 및 설정</h2>
        
        <div className="space-y-6">
          {/* 1단계: 시스템 업데이트 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1단계: 시스템 업데이트</h3>
            <p className="text-gray-700 mb-4">
              먼저 Ubuntu 시스템을 최신 상태로 업데이트합니다.
            </p>
            <CodeBlock
              code={`sudo apt update
sudo apt upgrade -y`}
              language="bash"
              title="시스템 업데이트"
            />
          </div>

          {/* 2단계: Python 및 pip 설치 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">2단계: Python 및 pip 설치</h3>
            <p className="text-gray-700 mb-4">
              Python과 pip가 설치되어 있지 않다면 설치합니다.
            </p>
            <CodeBlock
              code={`sudo apt install python3 python3-pip python3-venv -y
python3 --version
pip3 --version`}
              language="bash"
              title="Python 및 pip 설치"
            />
          </div>

          {/* 3단계: 가상환경 생성 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">3단계: 가상환경 생성</h3>
            <p className="text-gray-700 mb-4">
              프로젝트별로 독립적인 환경을 만들기 위해 가상환경을 생성합니다.
            </p>
            <CodeBlock
              code={`python3 -m venv jupyter_env
source jupyter_env/bin/activate`}
              language="bash"
              title="가상환경 생성 및 활성화"
            />
            
            <TipBox type="tip" title="가상환경의 장점">
              <ul className="space-y-1">
                <li>• 프로젝트별로 독립적인 라이브러리 관리</li>
                <li>• 시스템 Python 환경과 분리</li>
                <li>• 다른 프로젝트와의 충돌 방지</li>
              </ul>
            </TipBox>
          </div>

          {/* 4단계: Jupyter Lab 설치 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">4단계: Jupyter Lab 설치</h3>
            <p className="text-gray-700 mb-4">
              가상환경이 활성화된 상태에서 Jupyter Lab을 설치합니다.
            </p>
            <CodeBlock
              code={`pip install jupyterlab
jupyter lab --version`}
              language="bash"
              title="Jupyter Lab 설치"
            />
          </div>

          {/* 5단계: Jupyter 설정 파일 생성 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">5단계: Jupyter 설정 파일 생성</h3>
            <p className="text-gray-700 mb-4">
              Jupyter Lab의 설정 파일을 생성합니다.
            </p>
            <CodeBlock
              code={`jupyter lab --generate-config
ls -la ~/.jupyter/`}
              language="bash"
              title="설정 파일 생성"
            />
          </div>

          {/* 6단계: 비밀번호 설정 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">6단계: 비밀번호 설정</h3>
            <p className="text-gray-700 mb-4">
              Jupyter Lab에 접속할 때 사용할 비밀번호를 설정합니다.
            </p>
            <CodeBlock
              code={`jupyter lab password
# 비밀번호를 입력하라는 프롬프트가 나타납니다
# 예: mypassword123`}
              language="bash"
              title="비밀번호 설정"
            />
          </div>

          {/* 7단계: 외부 접속을 위한 설정 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">7단계: 외부 접속을 위한 설정</h3>
            <p className="text-gray-700 mb-4">
              외부에서 접속할 수 있도록 설정을 수정합니다.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">설정 파일 편집:</h4>
                <CodeBlock
                  code={`nano ~/.jupyter/jupyter_lab_config.py`}
                  language="bash"
                  title="설정 파일 편집"
                />
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">다음 내용을 추가:</h4>
                <CodeBlock
                  code={`# 외부 접속 허용
c.ServerApp.ip = '0.0.0.0'

# 포트 설정 (기본값: 8888)
c.ServerApp.port = 8888

# 브라우저 자동 열기 비활성화
c.ServerApp.open_browser = False

# 토큰 인증 비활성화 (비밀번호만 사용)
c.ServerApp.token = ''

# 허용된 원본 설정
c.ServerApp.allow_origin = '*'

# CORS 설정
c.ServerApp.allow_credentials = True`}
                  language="python"
                  title="설정 내용"
                />
              </div>
            </div>
          </div>

          {/* 8단계: 방화벽 설정 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">8단계: 방화벽 설정</h3>
            <p className="text-gray-700 mb-4">
              Ubuntu 방화벽에서 Jupyter Lab 포트를 열어줍니다.
            </p>
            <CodeBlock
              code={`# UFW 방화벽 활성화 (필요한 경우)
sudo ufw enable

# Jupyter Lab 포트 허용
sudo ufw allow 8888

# 방화벽 상태 확인
sudo ufw status`}
              language="bash"
              title="방화벽 설정"
            />
          </div>

          {/* 9단계: Jupyter Lab 시작 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">9단계: Jupyter Lab 시작</h3>
            <p className="text-gray-700 mb-4">
              설정이 완료되면 Jupyter Lab을 시작합니다.
            </p>
            <CodeBlock
              code={`jupyter lab`}
              language="bash"
              title="Jupyter Lab 시작"
            />
            
            <TipBox type="info" title="접속 방법">
              <div className="space-y-2">
                <p><strong>로컬 접속:</strong> http://localhost:8888</p>
                <p><strong>외부 접속:</strong> http://서버IP:8888</p>
                <p><strong>예시:</strong> http://192.168.1.100:8888</p>
              </div>
            </TipBox>
          </div>

          {/* 포트 변경 방법 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">포트 번호 변경 방법</h3>
            <p className="text-gray-700 mb-4">
              기본 포트(8888) 대신 다른 포트를 사용하고 싶다면:
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">1. 설정 파일에서 포트 변경:</h4>
                <CodeBlock
                  code={`# ~/.jupyter/jupyter_lab_config.py 파일에서
c.ServerApp.port = 9999  # 원하는 포트 번호로 변경`}
                  language="python"
                  title="포트 변경"
                />
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">2. 방화벽에서 새 포트 허용:</h4>
                <CodeBlock
                  code={`sudo ufw allow 9999  # 새 포트 번호
sudo ufw status`}
                  language="bash"
                  title="방화벽 포트 허용"
                />
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">3. 특정 포트로 시작:</h4>
                <CodeBlock
                  code={`jupyter lab --port=9999`}
                  language="bash"
                  title="특정 포트로 시작"
                />
              </div>
            </div>
          </div>
        </div>

        <TipBox type="warning" title="보안 주의사항">
          <ul className="space-y-2">
            <li>• <strong>강력한 비밀번호 사용</strong>: 예측하기 어려운 비밀번호를 설정하세요</li>
            <li>• <strong>방화벽 설정</strong>: 필요한 포트만 열어두세요</li>
            <li>• <strong>HTTPS 사용</strong>: 프로덕션 환경에서는 SSL 인증서를 사용하세요</li>
            <li>• <strong>정기적인 업데이트</strong>: Jupyter Lab과 관련 패키지를 정기적으로 업데이트하세요</li>
          </ul>
        </TipBox>
      </div>
    </div>
  );
} 