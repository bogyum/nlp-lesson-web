'use client';

import React from 'react';
import { lessons } from '@/data/lessons';
import { CheckCircle, Circle, PlayCircle } from 'lucide-react';

interface NavigationProps {
  currentLesson: number;
  onLessonChange: (lessonId: number) => void;
}

const getStatusIcon = (status: 'pending' | 'in-progress' | 'completed') => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case 'in-progress':
      return <PlayCircle className="w-4 h-4 text-blue-500" />;
    default:
      return <Circle className="w-4 h-4 text-gray-400" />;
  }
};

export default function Navigation({ currentLesson, onLessonChange }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => onLessonChange(lesson.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                currentLesson === lesson.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {getStatusIcon(lesson.status)}
              <span>{lesson.id}교시</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 