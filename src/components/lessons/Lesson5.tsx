import React from 'react';
import CodeBlock from '@/components/ui/CodeBlock';
import TipBox from '@/components/ui/TipBox';

export default function Lesson5() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">자연어처리 라이브러리 소개</h2>
        
        <div className="space-y-8">
          {/* 1.1. 형태소 분석 라이브러리 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.1. 형태소 분석 라이브러리 (KoNLPy - Okt 활용)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">사용 가능한 라이브러리:</h4>
                <div className="bg-gray-100 p-4 rounded-lg border">
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><strong className="text-blue-700">KoNLPy:</strong> 한국어 자연어처리를 위한 대표적인 라이브러리</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Okt</code> (Open Korean Text): 가장 널리 사용되는 형태소 분석기</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Kkma</code>: 한국어 형태소 분석기 (Konlpy Korean Morphological Analyzer)</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Komoran</code>: 코모란 형태소 분석기</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Hannanum</code>: 한나눔 형태소 분석기</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Mecab</code>: MeCab 형태소 분석기 (설치가 복잡할 수 있음)</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">예시 텍스트:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"방탄소년단 신곡이 빌보드 차트 1위를 차지하며 전 세계 팬들을 열광시켰다."</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 결과 (예시):</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">['방탄소년단', '신곡', '이', '빌보드', '차트', '1위', '를', '차지', '하며', '전', '세계', '팬', '들', '을', '열광', '시키다']</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">설명:</h4>
                <p className="text-gray-700">
                  형태소 분석은 문장을 의미를 가지는 가장 작은 단위인 '형태소'로 나누는 작업입니다. 한국어는 띄어쓰기가 잘 되어 있지 않거나, 하나의 단어에 여러 의미 요소가 결합되는 특징이 있어 형태소 분석이 특히 중요합니다. 위 예시처럼 '방탄소년단', '신곡'과 같은 고유명사와 명사, 그리고 '이', '를'과 같은 조사, '차지하다', '열광시키다'와 같은 동사들이 분리됩니다. 이렇게 분리된 형태소들을 통해 컴퓨터는 문장의 문법적 구조와 의미를 더 정확하게 파악하여 다음 단계의 자연어처리 작업(예: 감성 분석, 개체명 인식)을 수행할 수 있게 됩니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 예시 코드:</h4>
                <CodeBlock
                  code={`from konlpy.tag import Okt
okt = Okt()
text = "방탄소년단 신곡이 빌보드 차트 1위를 차지하며 전 세계 팬들을 열광시켰다."
result = okt.morphs(text)
print("형태소 분석 결과:")
print(result)

# 품사 태깅도 함께 확인
pos_result = okt.pos(text)
print("\\n품사 태깅 결과:")
for word, pos in pos_result:
    print(f"{word} ({pos})")`}
                  language="python"
                  title="형태소 분석 예시"
                />
              </div>
            </div>
          </div>

          {/* 1.2. 개체명 인식 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.2. 개체명 인식 (spaCy - ko_core_news_sm 활용)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">사용 가능한 라이브러리:</h4>
                <div className="bg-gray-100 p-4 rounded-lg border">
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><strong className="text-blue-700">spaCy:</strong> 산업급 자연어처리 라이브러리</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">ko_core_news_sm</code>: 한국어 뉴스 기반 작은 모델</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">ko_core_news_md</code>: 한국어 뉴스 기반 중간 모델</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">ko_core_news_lg</code>: 한국어 뉴스 기반 큰 모델</li>
                    <li><strong className="text-blue-700">Hugging Face Transformers:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">klue/bert-base</code>: 한국어 BERT 모델</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">beomi/kcbert-base</code>: 한국어 BERT 모델</li>
                    <li><strong className="text-blue-700">KoNLPy:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Kkma</code>: 형태소 분석과 함께 개체명 추출 가능</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">예시 텍스트:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"이순신 장군은 조선 시대에 한산도 대첩에서 왜군을 크게 무찔렀다."</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 결과 (예시):</h4>
                <div className="bg-gray-50 p-3 rounded space-y-1">
                  <p className="text-gray-700">• PER (사람): 이순신</p>
                  <p className="text-gray-700">• LOC (장소): 한산도</p>
                  <p className="text-gray-700">• ORG (기관/단체): 조선</p>
                  <p className="text-gray-700">• EVT (사건): 한산도 대첩</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">설명:</h4>
                <p className="text-gray-700">
                  개체명 인식(Named Entity Recognition, NER)은 텍스트에서 사람 이름, 장소, 기관, 날짜, 시간, 금액 등 미리 정의된 특정 유형의 '개체명'을 찾아내고 그 종류를 분류하는 기술입니다. 이는 정보 추출의 핵심 단계로, 뉴스 기사에서 주요 인물이나 사건의 장소를 자동으로 파악하거나, 고객 문의에서 특정 제품명이나 날짜를 추출하는 데 활용됩니다. 위 예시에서는 '이순신'이 사람(PER), '한산도'가 장소(LOC), '조선'이 기관/단체(ORG), '한산도 대첩'이 사건(EVT)으로 정확히 인식되어 문장의 핵심 정보를 구조화할 수 있습니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 예시 코드:</h4>
                <CodeBlock
                  code={`import spacy
nlp = spacy.load("ko_core_news_sm")
text = "이순신 장군은 조선 시대에 한산도 대첩에서 왜군을 크게 무찔렀다."
doc = nlp(text)

print("개체명 인식 결과:")
for ent in doc.ents:
    print(f"{ent.text} ({ent.label_})")

# 개체명 유형별로 분류
entity_types = {}
for ent in doc.ents:
    if ent.label_ not in entity_types:
        entity_types[ent.label_] = []
    entity_types[ent.label_].append(ent.text)

print("\\n개체명 유형별 분류:")
for entity_type, entities in entity_types.items():
    print(f"{entity_type}: {', '.join(entities)}")`}
                  language="python"
                  title="개체명 인식 예시"
                />
              </div>
            </div>
          </div>

          {/* 1.3. 감성 분석 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.3. 감성 분석 (Hugging Face transformers 라이브러리 활용)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">사용 가능한 라이브러리:</h4>
                <div className="bg-gray-100 p-4 rounded-lg border">
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><strong className="text-blue-700">Hugging Face Transformers:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">klue/bert-base</code>: 한국어 BERT 기반 감성 분석</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">beomi/kcbert-base</code>: 한국어 BERT 모델</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">snunlp/KR-FinBert-SC</code>: 금융 텍스트 감성 분석</li>
                    <li><strong className="text-blue-700">KoNLPy:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Okt</code>: 형태소 분석과 함께 감성 분석 가능</li>
                    <li><strong className="text-blue-700">TextBlob:</strong> 간단한 감성 분석 (영어 위주)</li>
                    <li><strong className="text-blue-700">VADER:</strong> 소셜 미디어 텍스트 감성 분석</li>
                    <li><strong className="text-blue-700">Pororo:</strong> SKT에서 개발한 한국어 NLP 라이브러리</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">예시 텍스트 1:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"이 영화 정말 최고였어요! 배우들 연기도 스토리도 완벽해요."</p>
                <p className="text-gray-700 mt-2"><strong>분석 결과 1 (예시):</strong> 긍정 (Positive)</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">예시 텍스트 2:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"기대했던 것보다 훨씬 실망스러웠습니다. 시간 낭비였어요."</p>
                <p className="text-gray-700 mt-2"><strong>분석 결과 2 (예시):</strong> 부정 (Negative)</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">설명:</h4>
                <p className="text-gray-700">
                  감성 분석(Sentiment Analysis)은 텍스트에 담긴 주관적인 감정이나 의견(긍정, 부정, 중립 등)을 자동으로 파악하는 기술입니다. 주로 영화 리뷰, 상품 후기, 소셜 미디어 댓글, 고객 서비스 문의 등에서 사용자들이 특정 대상에 대해 어떤 감정을 표현하는지 분석하는 데 활용됩니다. 기업에서는 고객의 피드백을 분석하여 제품이나 서비스 개선에 활용하고, 정치 분야에서는 여론을 파악하는 데 사용되기도 합니다. 위 예시처럼 긍정적인 표현('최고', '완벽')은 '긍정'으로, 부정적인 표현('실망', '시간 낭비')은 '부정'으로 분류됩니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 예시 코드:</h4>
                <CodeBlock
                  code={`from transformers import pipeline
classifier = pipeline("sentiment-analysis", model="klue/bert-base")

texts = [
    "이 영화 정말 최고였어요! 배우들 연기도 스토리도 완벽해요.",
    "기대했던 것보다 훨씬 실망스러웠습니다. 시간 낭비였어요."
]

print("감성 분석 결과:")
for text in texts:
    result = classifier(text)
    print(f"\\n텍스트: {text}")
    print(f"감성: {result[0]['label']}")
    print(f"신뢰도: {result[0]['score']:.3f}")`}
                  language="python"
                  title="감성 분석 예시"
                />
              </div>
            </div>
          </div>

          {/* 1.4. 문장 분리기 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.4. 문장 분리기 (KSS 활용)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">사용 가능한 라이브러리:</h4>
                <div className="bg-gray-100 p-4 rounded-lg border">
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><strong className="text-blue-700">KSS (Korean Sentence Splitter):</strong> 한국어 전용 문장 분리기</li>
                    <li><strong className="text-blue-700">spaCy:</strong> 한국어 모델에서 문장 분리 기능 제공</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">ko_core_news_sm/md/lg</code>: 한국어 뉴스 모델</li>
                    <li><strong className="text-blue-700">NLTK:</strong> 영어 위주이지만 한국어도 지원</li>
                    <li><strong className="text-blue-700">KoNLPy:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Kkma</code>: 형태소 분석과 함께 문장 분리 가능</li>
                    <li><strong className="text-blue-700">Pororo:</strong> SKT에서 개발한 한국어 NLP 라이브러리</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">예시 텍스트:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"안녕하세요. 오늘 날씨가 정말 좋네요! 점심은 무엇을 드셨나요? 저는 비빔밥을 먹었어요."</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 결과 (예시):</h4>
                <div className="bg-gray-50 p-3 rounded space-y-1">
                  <p className="text-gray-700">• "안녕하세요."</p>
                  <p className="text-gray-700">• "오늘 날씨가 정말 좋네요!"</p>
                  <p className="text-gray-700">• "점심은 무엇을 드셨나요?"</p>
                  <p className="text-gray-700">• "저는 비빔밥을 먹었어요."</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">설명:</h4>
                <p className="text-gray-700">
                  문장 분리기(Sentence Segmentation)는 긴 텍스트를 의미적으로 완전한 문장 단위로 나누는 기술입니다. 한국어는 마침표, 물음표, 느낌표 외에도 다양한 종결 어미나 문장 연결 방식이 있어 문장 경계를 정확히 파악하는 것이 중요합니다. KSS(Korean Sentence Splitter)는 이러한 한국어의 복잡한 특성을 잘 이해하고 학습하여, 위 예시처럼 띄어쓰기가 되어 있지 않거나 복잡하게 연결된 문장도 의미 단위로 정확하게 분리해 줍니다. 이는 텍스트를 분석하거나 요약하는 등의 다음 단계 작업에 필수적인 전처리 과정입니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 예시 코드:</h4>
                <CodeBlock
                  code={`import kss
text = "안녕하세요. 오늘 날씨가 정말 좋네요! 점심은 무엇을 드셨나요? 저는 비빔밥을 먹었어요."

# 문장 분리
sentences = kss.split_sentences(text)

print("문장 분리 결과:")
for i, sentence in enumerate(sentences, 1):
    print(f"{i}. {sentence}")

# 문장 개수 확인
print(f"\\n총 문장 수: {len(sentences)}개")`}
                  language="python"
                  title="문장 분리 예시"
                />
              </div>
            </div>
          </div>

          {/* 1.5. 주제어 찾기 / 키워드 추출 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.5. 주제어 찾기 / 키워드 추출 (KeyBERT 활용)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">사용 가능한 라이브러리:</h4>
                <div className="bg-gray-100 p-4 rounded-lg border">
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><strong className="text-blue-700">KeyBERT:</strong> BERT 기반 키워드 추출</li>
                    <li><strong className="text-blue-700">Yake:</strong> 통계 기반 키워드 추출</li>
                    <li><strong className="text-blue-700">Rake:</strong> Rapid Automatic Keyword Extraction</li>
                    <li><strong className="text-blue-700">TextRank:</strong> 그래프 기반 키워드 추출</li>
                    <li><strong className="text-blue-700">KoNLPy:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Okt</code>: 형태소 분석과 함께 키워드 추출 가능</li>
                    <li><strong className="text-blue-700">soynlp:</strong> 한국어 전용 자연어처리 라이브러리</li>
                    <li><strong className="text-blue-700">Hugging Face Transformers:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">klue/bert-base</code>: 한국어 BERT 기반 키워드 추출</li>
                    <li><strong className="text-blue-700">Pororo:</strong> SKT에서 개발한 한국어 NLP 라이브러리</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">예시 텍스트:</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"최근 인공지능 기술의 발전이 매우 빠르다. 특히 딥러닝과 머신러닝 분야에서 혁신적인 연구 결과들이 쏟아지고 있으며, 이는 자율주행, 의료 진단, 자연어처리 등 다양한 산업 분야에 큰 영향을 미치고 있다."</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 결과 (예시):</h4>
                <div className="bg-gray-50 p-3 rounded space-y-1">
                  <p className="text-gray-700">• 인공지능 기술 (0.85)</p>
                  <p className="text-gray-700">• 딥러닝 (0.78)</p>
                  <p className="text-gray-700">• 머신러닝 (0.75)</p>
                  <p className="text-gray-700">• 자연어처리 (0.72)</p>
                  <p className="text-gray-700">• 자율주행 (0.69)</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">설명:</h4>
                <p className="text-gray-700">
                  주제어 찾기 또는 키워드 추출은 문서의 전체 내용을 가장 잘 대표하거나 핵심적인 의미를 담고 있는 단어나 구(phrase)를 자동으로 찾아내는 기술입니다. 이 기술은 방대한 양의 문서에서 핵심 정보를 빠르게 파악하거나, 문서 분류, 검색 엔진 최적화 등에 활용됩니다. KeyBERT와 같은 모델은 문맥적 유사성을 고려하여 문서 전체의 의미를 가장 잘 요약하는 키워드를 추출하며, 각 키워드에 대한 중요도 점수(예시의 괄호 안 숫자)도 함께 제공하여 어떤 키워드가 더 중요한지 알 수 있게 해줍니다.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 예시 코드:</h4>
                <CodeBlock
                  code={`from keybert import KeyBERT
kw_model = KeyBERT()

text = "최근 인공지능 기술의 발전이 매우 빠르다. 특히 딥러닝과 머신러닝 분야에서 혁신적인 연구 결과들이 쏟아지고 있으며, 이는 자율주행, 의료 진단, 자연어처리 등 다양한 산업 분야에 큰 영향을 미치고 있다."

# 키워드 추출
keywords = kw_model.extract_keywords(
    text, 
    keyphrase_ngram_range=(1, 2), 
    stop_words=None,
    top_k=5
)

print("키워드 추출 결과:")
for keyword, score in keywords:
    print(f"• {keyword} ({score:.2f})")

# 키워드만 추출
keyword_list = [keyword for keyword, score in keywords]
print(f"\\n추출된 키워드: {', '.join(keyword_list)}")`}
                  language="python"
                  title="키워드 추출 예시"
                />
              </div>
            </div>
          </div>

          {/* 1.6. 요약하기 */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1.6. 요약하기 (Pororo 또는 SKT-AI/KoBART 활용)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">사용 가능한 라이브러리:</h4>
                <div className="bg-gray-100 p-4 rounded-lg border">
                  <ul className="space-y-2 text-sm text-gray-800">
                    <li><strong className="text-blue-700">Hugging Face Transformers:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">SKT-AI/KoBART</code>: 한국어 BART 기반 요약 모델</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">klue/bert-base</code>: 한국어 BERT 기반 요약</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">beomi/kcbert-base</code>: 한국어 BERT 모델</li>
                    <li><strong className="text-blue-700">Pororo:</strong> SKT에서 개발한 한국어 NLP 라이브러리</li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">summarization</code>: 텍스트 요약 기능</li>
                    <li><strong className="text-blue-700">KoNLPy:</strong></li>
                    <li>• <code className="bg-gray-200 px-1 rounded text-blue-600">Okt</code>: 형태소 분석과 함께 요약 가능</li>
                    <li><strong className="text-blue-700">TextRank:</strong> 그래프 기반 요약 알고리즘</li>
                    <li><strong className="text-blue-700">LexRank:</strong> 그래프 기반 요약 알고리즘</li>
                    <li><strong className="text-blue-700">LSA (Latent Semantic Analysis):</strong> 잠재 의미 분석 기반 요약</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">예시 텍스트 (뉴스 기사):</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"서울시는 2025년부터 모든 시민을 대상으로 대중교통 요금 할인 혜택을 확대한다고 발표했다. 이는 시민들의 교통비 부담을 줄이고 대중교통 이용률을 높여 탄소 배출량 감소에도 기여할 것으로 기대된다. 특히 출퇴근 시간대에는 추가 할인이 적용될 예정이다. 자세한 내용은 서울시 홈페이지에서 확인할 수 있다."</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 결과 (예시 - 추출적 요약):</h4>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">"서울시는 2025년부터 모든 시민을 대상으로 대중교통 요금 할인 혜택을 확대한다고 발표했다. 이는 시민들의 교통비 부담을 줄이고 대중교통 이용률을 높여 탄소 배출량 감소에도 기여할 것으로 기대된다."</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">설명:</h4>
                <p className="text-gray-700">
                  요약하기(Text Summarization)는 긴 원문 텍스트의 핵심 내용을 파악하여 더 짧고 간결한 형태로 만드는 기술입니다. 이는 정보 과부하 시대에 방대한 양의 문서를 빠르게 이해해야 할 때 매우 유용합니다. 요약 방식은 크게 두 가지로 나뉩니다.
                </p>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• <strong>추출적 요약 (Extractive Summarization):</strong> 원문에서 가장 중요하다고 판단되는 문장들을 그대로 추출하여 요약문을 만듭니다. 위 예시처럼 원문의 문장이 그대로 사용됩니다.</li>
                  <li>• <strong>추상적 요약 (Abstractive Summarization):</strong> 원문의 내용을 이해하고 새로운 문장을 생성하여 요약문을 만듭니다. 마치 사람이 글을 읽고 자신의 말로 다시 요약하는 것과 유사하며, 더 자연스러운 요약문을 만들 수 있지만 기술적으로 더 어렵습니다. Pororo나 SKT-AI/KoBART와 같은 라이브러리는 이러한 요약 기능을 제공하여 뉴스 기사, 보고서, 논문 등 다양한 종류의 긴 텍스트를 효율적으로 처리할 수 있도록 돕습니다.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">분석 예시 코드:</h4>
                <CodeBlock
                  code={`from transformers import pipeline

# 요약 모델 로드
summarizer = pipeline("summarization", model="SKT-AI/KoBART")

text = "서울시는 2025년부터 모든 시민을 대상으로 대중교통 요금 할인 혜택을 확대한다고 발표했다. 이는 시민들의 교통비 부담을 줄이고 대중교통 이용률을 높여 탄소 배출량 감소에도 기여할 것으로 기대된다. 특히 출퇴근 시간대에는 추가 할인이 적용될 예정이다. 자세한 내용은 서울시 홈페이지에서 확인할 수 있다."

# 요약 수행
summary = summarizer(text, max_length=100, min_length=30, do_sample=False)

print("원문:")
print(text)
print("\\n요약 결과:")
print(summary[0]['summary_text'])

# 요약 길이 비교
print(f"\\n원문 길이: {len(text)}자")
print(f"요약 길이: {len(summary[0]['summary_text'])}자")`}
                  language="python"
                  title="텍스트 요약 예시"
                />
              </div>
            </div>
          </div>
        </div>

        <TipBox type="warning" title="라이브러리 설치 주의사항">
          각 라이브러리를 사용하기 전에 반드시 설치가 필요합니다. 
          conda 환경에서 pip install 명령어를 사용하여 설치하세요.
        </TipBox>
      </div>
    </div>
  );
} 