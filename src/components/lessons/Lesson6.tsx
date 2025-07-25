import React from 'react';
import Image from 'next/image';
import TipBox from '@/components/ui/TipBox';

export default function Lesson6() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">웹 서비스 아키텍처 이해</h2>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">웹 서비스의 구성 요소</h3>
          
          {/* 웹 서비스 아키텍처 다이어그램 */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">웹 서비스 아키텍처 다이어그램</h4>
                <p className="text-sm text-gray-600">사용자 요청부터 응답까지의 데이터 흐름</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                {/* 사용자 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold text-lg">👤</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">사용자</p>
                </div>
                
                {/* 화살표 */}
                <div className="hidden md:block">
                  <div className="w-8 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-8 border-l border-gray-400 mx-auto"></div>
                  <div className="w-8 h-0.5 bg-gray-400"></div>
                </div>
                
                {/* 프론트엔드 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-2 border-2 border-blue-300">
                    <span className="text-blue-700 font-bold text-sm">Frontend</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">프론트엔드</p>
                  <p className="text-xs text-gray-500">Next.js</p>
                </div>
                
                {/* 화살표 */}
                <div className="hidden md:block">
                  <div className="w-8 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-8 border-l border-gray-400 mx-auto"></div>
                  <div className="w-8 h-0.5 bg-gray-400"></div>
                </div>
                
                {/* 백엔드 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-2 border-2 border-green-300">
                    <span className="text-green-700 font-bold text-sm">Backend</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">백엔드</p>
                  <p className="text-xs text-gray-500">Python API</p>
                </div>
                
                {/* 화살표 */}
                <div className="hidden md:block">
                  <div className="w-8 h-0.5 bg-gray-400"></div>
                  <div className="w-0 h-8 border-l border-gray-400 mx-auto"></div>
                  <div className="w-8 h-0.5 bg-gray-400"></div>
                </div>
                
                {/* 데이터베이스 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-200 rounded-lg flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                    <span className="text-purple-700 font-bold text-sm">Database</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">데이터베이스</p>
                  <p className="text-xs text-gray-500">MySQL/PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-xl">🎨</span>
              </div>
              <h4 className="font-medium text-blue-900 mb-2">프론트엔드 (Frontend)</h4>
              <p className="text-sm text-blue-700 mb-3">
                사용자가 직접 보고 상호작용하는 부분. 웹 페이지의 디자인, 버튼, 이미지 등이 여기에 해당합니다.
              </p>
              <div className="bg-blue-100 p-2 rounded text-xs text-blue-800">
                <strong>기술 스택:</strong> Next.js, React, HTML, CSS, JavaScript
              </div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">⚙️</span>
              </div>
              <h4 className="font-medium text-green-900 mb-2">백엔드 (Backend)</h4>
              <p className="text-sm text-green-700 mb-3">
                사용자의 요청을 처리하고 데이터를 관리하는 '서버' 부분. 복잡한 계산을 수행하는 등의 작업을 합니다.
              </p>
              <div className="bg-green-100 p-2 rounded text-xs text-green-800">
                <strong>기술 스택:</strong> Python, Flask/Django, API, 비즈니스 로직
              </div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-xl">🗄️</span>
              </div>
              <h4 className="font-medium text-purple-900 mb-2">데이터베이스 (Database)</h4>
              <p className="text-sm text-purple-700 mb-3">
                모든 정보가 저장되는 곳. 사용자 정보, 게시물 내용, 분석 결과 등 웹 서비스에 필요한 모든 데이터가 체계적으로 저장됩니다.
              </p>
              <div className="bg-purple-100 p-2 rounded text-xs text-purple-800">
                <strong>기술 스택:</strong> MySQL, PostgreSQL, MongoDB, Redis
              </div>
            </div>
          </div>
        </div>

        {/* 웹 서비스 동작 과정 */}
        <div className="bg-white p-6 rounded-lg border mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">웹 서비스 동작 과정</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-gray-900">사용자 요청</h4>
                <p className="text-sm text-gray-600">사용자가 웹페이지에서 버튼을 클릭하거나 폼을 제출합니다.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-gray-900">프론트엔드 처리</h4>
                <p className="text-sm text-gray-600">Next.js가 사용자 인터페이스를 렌더링하고 사용자 상호작용을 처리합니다.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-gray-900">백엔드 API 호출</h4>
                <p className="text-sm text-gray-600">프론트엔드에서 Python 백엔드 API로 데이터 요청을 보냅니다.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-gray-900">데이터베이스 조회</h4>
                <p className="text-sm text-gray-600">백엔드가 데이터베이스에서 필요한 정보를 조회하거나 저장합니다.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-medium text-gray-900">응답 반환</h4>
                <p className="text-sm text-gray-600">처리된 데이터가 프론트엔드로 반환되어 사용자에게 표시됩니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next.js와 Python API의 역할 */}
        <div className="bg-white p-6 rounded-lg border mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Next.js와 Python API의 역할</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎨</span>
                Next.js (프론트엔드)
              </h4>
              <p className="text-sm text-blue-800 mb-3">
                Next.js는 웹페이지의 '얼굴'을 아름답고 편리하게 만들어주는 도구입니다. 사용자가 직접 보고 만지는 모든 부분이 Next.js로 만들어집니다.
              </p>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• 사용자 인터페이스(UI) 구성</li>
                <li>• 반응형 웹 디자인 구현</li>
                <li>• 클라이언트 사이드 상호작용</li>
                <li>• 라우팅 및 페이지 관리</li>
                <li>• API 호출 및 데이터 표시</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">⚙️</span>
                Python API (백엔드)
              </h4>
              <p className="text-sm text-green-800 mb-3">
                Python으로 만드는 API는 웹 서비스의 '두뇌' 역할을 합니다. 사용자의 요청을 받아서 데이터를 처리하고, 필요한 정보를 데이터베이스에서 가져오거나 저장하는 등의 복잡한 계산과 로직을 담당합니다.
              </p>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• 비즈니스 로직 처리</li>
                <li>• 데이터베이스 연동</li>
                <li>• API 엔드포인트 제공</li>
                <li>• 데이터 검증 및 보안</li>
                <li>• 자연어처리 모듈 실행</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 실제 웹 서비스 예시 이미지 */}
        <div className="bg-white p-6 rounded-lg border mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">실제 웹 서비스 예시</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 온라인 쇼핑몰 예시 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🛒</span>
                온라인 쇼핑몰 예시
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-2">프론트엔드 (Next.js)</h5>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 상품 목록 페이지</li>
                    <li>• 장바구니 기능</li>
                    <li>• 결제 폼</li>
                    <li>• 사용자 프로필</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-2">백엔드 (Python API)</h5>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 상품 검색 및 필터링</li>
                    <li>• 주문 처리 로직</li>
                    <li>• 결제 시스템 연동</li>
                    <li>• 사용자 인증</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-2">데이터베이스</h5>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 상품 정보 저장</li>
                    <li>• 사용자 계정 정보</li>
                    <li>• 주문 내역</li>
                    <li>• 재고 관리</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 소셜 미디어 예시 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📱</span>
                소셜 미디어 예시
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-2">프론트엔드 (Next.js)</h5>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 피드 페이지</li>
                    <li>• 포스트 작성 폼</li>
                    <li>• 댓글 시스템</li>
                    <li>• 실시간 알림</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-2">백엔드 (Python API)</h5>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 포스트 생성/수정/삭제</li>
                    <li>• 좋아요/댓글 처리</li>
                    <li>• 팔로우 시스템</li>
                    <li>• 실시간 메시징</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-medium text-gray-900 mb-2">데이터베이스</h5>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 사용자 프로필</li>
                    <li>• 포스트 내용</li>
                    <li>• 댓글 및 좋아요</li>
                    <li>• 팔로우 관계</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TipBox type="info" title="웹 서비스 개발의 중요성">
          <p className="text-sm">
            웹 서비스는 현대 소프트웨어 개발의 핵심입니다. 프론트엔드와 백엔드가 잘 연결되어야 사용자가 편리하게 이용할 수 있는 완성된 서비스가 됩니다. 
            각 부분의 역할을 이해하고 적절한 기술을 선택하는 것이 성공적인 웹 서비스 개발의 첫걸음입니다.
          </p>
        </TipBox>
      </div>
    </div>
  );
} 