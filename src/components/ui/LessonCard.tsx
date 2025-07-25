'use client';

import React from 'react';
import { ChevronRight, Clock, CheckCircle, Circle, PlayCircle } from 'lucide-react';
import { Lesson } from '@/data/lessons';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

const getStatusIcon = (status: Lesson['status']) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'in-progress':
      return <PlayCircle className="w-5 h-5 text-blue-500" />;
    default:
      return <Circle className="w-5 h-5 text-gray-400" />;
  }
};

const getColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    emerald: 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100',
    blue: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
    purple: 'border-purple-200 bg-purple-50 hover:bg-purple-100',
    orange: 'border-orange-200 bg-orange-50 hover:bg-orange-100',
    pink: 'border-pink-200 bg-pink-50 hover:bg-pink-100',
    indigo: 'border-indigo-200 bg-indigo-50 hover:bg-indigo-100'
  };
  return colorMap[color] || colorMap.emerald;
};

export default function LessonCard({ lesson, onClick }: LessonCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${getColorClasses(lesson.color)}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getStatusIcon(lesson.status)}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {lesson.id}교시: {lesson.title}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{lesson.duration}</span>
            </div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-2">
        {lesson.description}
      </p>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-900">학습 목표:</h4>
        <ul className="space-y-1">
          {lesson.objectives.slice(0, 2).map((objective, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              {objective}
            </li>
          ))}
          {lesson.objectives.length > 2 && (
            <li className="text-sm text-gray-500">
              +{lesson.objectives.length - 2}개 더...
            </li>
          )}
        </ul>
      </div>
    </div>
  );
} 