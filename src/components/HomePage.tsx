'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { lessons } from '@/data/lessons';
import LessonCard from '@/components/ui/LessonCard';
import { BookOpen, Clock, Target } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(0);
  const [totalLessons, setTotalLessons] = useState(0);

  useEffect(() => {
    setMounted(true);
    setCompletedLessons(lessons.filter(lesson => lesson.status === 'completed').length);
    setTotalLessons(lessons.length);
  }, []);

  const handleLessonClick = (lessonId: number) => {
    router.push(`/lesson/${lessonId}`);
  };

  // 클라이언트 사이드에서만 렌더링
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Docker 환경에서 자연어처리 모듈 개발하기
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Docker, VS Code, Jupyter Lab을 활용하여 자연어처리 프로그램을 개발하고 
              웹 서비스로 구축하는 과정을 단계별로 학습합니다.
            </p>
            <div className="flex justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>6교시 수업</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>총 6시간</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>실습 중심</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">전체 진행률</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
                ></div>
              </div>
            </div>
            <span className="text-sm text-gray-600">
              {completedLessons}/{totalLessons} 완료
            </span>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onClick={() => handleLessonClick(lesson.id)}
            />
          ))}
        </div>

        {/* Course Overview */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">수업 개요</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">오전 수업 (1-4교시)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Docker 가상환경 구성 및 관리</li>
                <li>• VS Code 원격 개발 환경 구축</li>
                <li>• Jupyter Lab 설치 및 설정</li>
                <li>• Gemini CLI를 활용한 프로그래밍</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">오후 수업 (5-6교시)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 자연어처리 라이브러리 활용</li>
                <li>• 형태소 분석, 감성 분석 실습</li>
                <li>• 웹 서비스 아키텍처 이해</li>
                <li>• Next.js와 Python API 연동</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 