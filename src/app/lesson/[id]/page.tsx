import React from 'react';
import { getLessonById, lessons } from '@/data/lessons';
import LessonPageClient from '@/components/LessonPageClient';

// 정적 사이트 생성을 위한 함수
export async function generateStaticParams() {
  return lessons.map((lesson) => ({
    id: lesson.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lessonId = parseInt(id);
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">레슨을 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-6">요청하신 레슨이 존재하지 않습니다.</p>
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return <LessonPageClient lesson={lesson} />;
} 