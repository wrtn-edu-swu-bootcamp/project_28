"use client";

import { useState } from "react";
import SearchHistory, { addToHistory } from "./components/SearchHistory";
import { allTermKeys } from "./data/terms";
import { practicalTermsOnly } from "./data/practicalTerms";

type TranslationResult = {
  academic_term: string;
  practical_terms: string[];
  explanation: string;
  contexts: {
    situation: string;
    example: string;
  }[];
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [direction, setDirection] = useState<"academic-to-practical" | "practical-to-academic">(
    "academic-to-practical"
  );
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showAllTerms, setShowAllTerms] = useState(false);

  // 방향에 따라 표시할 용어 목록 선택
  const displayTerms = direction === "academic-to-practical" ? allTermKeys : practicalTermsOnly;

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("검색어를 입력해주세요");
      return;
    }

    if (searchTerm.length > 100) {
      setError("검색어가 너무 깁니다 (최대 100자)");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout

      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          term: searchTerm,
          direction: direction,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "번역 요청에 실패했습니다");
      }

      const data = await response.json();
      
      if (!data || !data.academic_term) {
        throw new Error("올바르지 않은 응답 형식입니다");
      }
      
      setResult(data);
      setShowAllTerms(false); // 결과가 나타나면 용어집 접기
      addToHistory(searchTerm, direction);
      
      // 결과로 부드럽게 스크롤
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } catch (err) {
      if (err instanceof Error) {
        if (err.name === "AbortError") {
          setError("요청 시간이 초과되었습니다. 다시 시도해주세요.");
        } else {
          setError(err.message);
        }
      } else {
        setError("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (term: string) => {
    setSearchTerm(term);
  };

  const toggleDirection = () => {
    setDirection(prev => 
      prev === "academic-to-practical" ? "practical-to-academic" : "academic-to-practical"
    );
    setSearchTerm("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Design Bridge
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            디자인 학술-실무 언어 번역기
          </p>
          <p className="text-sm md:text-base text-gray-500">
            그래픽 디자인 전공 학생들을 위한 실무 언어 가이드
          </p>
        </header>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            {/* Direction Toggle */}
            <div className="flex justify-center mb-6">
              <button
                onClick={toggleDirection}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="font-medium">
                  {direction === "academic-to-practical" ? "학술 → 실무" : "실무 → 학술"}
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
            </div>

            {/* Search Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {direction === "academic-to-practical" 
                  ? "학술 용어를 입력하세요" 
                  : "실무 용어를 입력하세요"}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  placeholder={direction === "academic-to-practical" 
                    ? "예: 시각적 위계" 
                    : "예: 여백 넉넉하게"}
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-lg"
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors font-medium whitespace-nowrap"
                >
                  {loading ? "번역 중..." : "번역하기"}
                </button>
              </div>
            </div>

            {/* All Terms Dictionary */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-700">
                  📚 사용 가능한 용어 ({displayTerms.length}개)
                </p>
                <button
                  onClick={() => setShowAllTerms(!showAllTerms)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {showAllTerms ? "접기 ▲" : "전체보기 ▼"}
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${showAllTerms ? 'max-h-96 overflow-y-auto' : 'max-h-[7.5rem]'}`}>
                <div className="flex flex-wrap gap-2">
                  {displayTerms.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        handleExampleClick(term);
                        setShowAllTerms(false);
                      }}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 rounded-lg text-sm hover:from-blue-100 hover:to-purple-100 transition-all duration-200 border border-blue-200 hover:border-blue-400 hover:shadow-sm font-medium"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              {!showAllTerms && (
                <div className="mt-2">
                  <p className="text-xs text-gray-500 italic">
                    💡 클릭하여 바로 검색할 수 있어요
                  </p>
                </div>
              )}
            </div>

            {/* Search History */}
            <SearchHistory onSelectTerm={handleExampleClick} />

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>

          {/* Result Card - 별도 섹션 */}
          {result && !loading && (
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4">
                  <h2 className="text-2xl font-bold text-gray-800">🔍 번역 결과</h2>
                  <button
                    onClick={() => setResult(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    title="닫기"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    {direction === "academic-to-practical" ? "학술 용어" : "실무 용어"}
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 mb-4">
                    {result.academic_term}
                  </p>

                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    {direction === "academic-to-practical" ? "실무에서는" : "학술적으로는"}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.practical_terms.map((term, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-lg font-medium"
                      >
                        {term}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm font-semibold text-gray-500 mb-2">설명</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg">
                    {result.explanation}
                  </p>

                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    💼 실무 상황 예시
                  </h3>
                  <div className="space-y-4">
                    {result.contexts.map((context, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500"
                      >
                        <p className="font-semibold text-blue-900 mb-2">
                          {context.situation}
                        </p>
                        <p className="text-gray-700 italic">"{context.example}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-gray-600 text-sm">
              💡 학교에서 배운 이론을 실무 언어로, 실무 용어를 학술 개념으로 이해해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
