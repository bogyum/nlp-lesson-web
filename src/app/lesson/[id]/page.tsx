'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getLessonById, lessons } from '@/data/lessons';
import Navigation from '@/components/layout/Navigation';
import { ArrowLeft, Target, Clock } from 'lucide-react';
import Lesson1 from '@/components/lessons/Lesson1';
import Lesson2 from '@/components/lessons/Lesson2';
import Lesson3 from '@/components/lessons/Lesson3';
import Lesson4 from '@/components/lessons/Lesson4';
import Lesson5 from '@/components/lessons/Lesson5';
import Lesson6 from '@/components/lessons/Lesson6';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = parseInt(params.id as string);
  const lesson = getLessonById(lessonId);
  const [currentLesson, setCurrentLesson] = useState(lessonId);
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">수업을 찾을 수 없습니다</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const handleLessonChange = (newLessonId: number) => {
    setCurrentLesson(newLessonId);
    router.push(`/lesson/${newLessonId}`);
  };

  const copyPromptToClipboard = async (prompt: string, id: number) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(id);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getLessonContent = (lessonId: number) => {
    switch (lessonId) {
      case 1:
        return <Lesson1 />;
      case 2:
        return <Lesson2 copiedPrompt={copiedPrompt} copyPromptToClipboard={copyPromptToClipboard} />;
      case 3:
        return <Lesson3 />;
      case 4:
        return <Lesson4 />;
      case 5:
        return <Lesson5 />;
      case 6:
        return <Lesson6 />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">수업 내용 준비 중</h2>
            <p className="text-gray-600">이 교시의 상세 내용은 곧 업데이트될 예정입니다.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>홈으로</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Target className="w-4 h-4" />
                <span>{lesson.objectives.length}개 목표</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation currentLesson={currentLesson} onLessonChange={handleLessonChange} />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {lesson.id}교시: {lesson.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {lesson.description}
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-3">학습 목표</h3>
              <ul className="space-y-2">
                {lesson.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start text-sm text-blue-800">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="prose max-w-none">
            {getLessonContent(lesson.id)}
          </div>
        </div>
      </div>
    </div>
  );
} 