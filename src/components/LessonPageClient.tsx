'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lesson } from '@/data/lessons';
import { promptExamples } from '@/data/prompt-examples';
import Navigation from '@/components/layout/Navigation';
import { ArrowLeft, Target, Clock } from 'lucide-react';
import Lesson1 from '@/components/lessons/Lesson1';
import Lesson2 from '@/components/lessons/Lesson2';
import Lesson3 from '@/components/lessons/Lesson3';
import Lesson4 from '@/components/lessons/Lesson4';
import Lesson5 from '@/components/lessons/Lesson5';
import Lesson6 from '@/components/lessons/Lesson6';

interface LessonPageClientProps {
  lesson: Lesson;
}

export default function LessonPageClient({ lesson }: LessonPageClientProps) {
  const router = useRouter();
  const [currentLesson, setCurrentLesson] = useState(lesson.id);
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  const handleLessonChange = (newLessonId: number) => {
    setCurrentLesson(newLessonId);
    router.push(`/lesson/${newLessonId}`);
  };

  const copyPromptToClipboard = async (promptId: number) => {
    try {
      const promptExample = promptExamples.find((p: any) => p.id === promptId);
      if (promptExample) {
        await navigator.clipboard.writeText(promptExample.prompt);
        setCopiedPrompt(promptId);
        setTimeout(() => setCopiedPrompt(null), 2000);
      }
    } catch (error) {
      console.error('Failed to copy prompt:', error);
    }
  };

  const getLessonContent = (lessonId: number) => {
    switch (lessonId) {
      case 1: return <Lesson1 />;
      case 2: return <Lesson2 copiedPrompt={copiedPrompt} copyPromptToClipboard={copyPromptToClipboard} />;
      case 3: return <Lesson3 />;
      case 4: return <Lesson4 />;
      case 5: return <Lesson5 />;
      case 6: return <Lesson6 />;
      default: return (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">레슨 내용을 불러올 수 없습니다</h3>
          <p className="text-gray-600">요청하신 레슨의 내용을 찾을 수 없습니다.</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>홈으로</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Target size={16} />
                <span>목표: {lesson.objectives.length}개</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock size={16} />
                <span>{lesson.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navigation 
            currentLesson={currentLesson} 
            onLessonChange={handleLessonChange} 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{lesson.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.objectives.map((objective, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm font-medium">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {getLessonContent(currentLesson)}
        </div>
      </div>
    </div>
  );
} 