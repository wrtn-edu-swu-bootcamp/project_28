"use client";

import { useEffect, useState } from "react";

interface HistoryItem {
  term: string;
  direction: string;
  timestamp: number;
}

export default function SearchHistory({
  onSelectTerm,
}: {
  onSelectTerm: (term: string) => void;
}) {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("searchHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setHistory([]);
  };

  if (history.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-sm font-semibold text-gray-700">최근 검색</h4>
        <button
          onClick={clearHistory}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          전체 삭제
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.slice(0, 5).map((item, index) => (
          <button
            key={index}
            onClick={() => onSelectTerm(item.term)}
            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-200"
          >
            {item.term}
          </button>
        ))}
      </div>
    </div>
  );
}

export function addToHistory(term: string, direction: string) {
  const saved = localStorage.getItem("searchHistory");
  const history: HistoryItem[] = saved ? JSON.parse(saved) : [];
  
  const newItem: HistoryItem = {
    term,
    direction,
    timestamp: Date.now(),
  };
  
  const filtered = history.filter((item) => item.term !== term);
  const newHistory = [newItem, ...filtered].slice(0, 10);
  
  localStorage.setItem("searchHistory", JSON.stringify(newHistory));
}
