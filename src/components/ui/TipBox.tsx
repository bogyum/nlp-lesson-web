import React from 'react';
import { Info, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';

interface TipBoxProps {
  type?: 'info' | 'warning' | 'success' | 'tip';
  title?: string;
  children: React.ReactNode;
}

const getTipBoxStyles = (type: TipBoxProps['type']) => {
  switch (type) {
    case 'warning':
      return {
        container: 'border-yellow-200 bg-yellow-50',
        icon: 'text-yellow-600',
        title: 'text-yellow-800',
        content: 'text-yellow-700'
      };
    case 'success':
      return {
        container: 'border-green-200 bg-green-50',
        icon: 'text-green-600',
        title: 'text-green-800',
        content: 'text-green-700'
      };
    case 'tip':
      return {
        container: 'border-blue-200 bg-blue-50',
        icon: 'text-blue-600',
        title: 'text-blue-800',
        content: 'text-blue-700'
      };
    default:
      return {
        container: 'border-gray-200 bg-gray-50',
        icon: 'text-gray-600',
        title: 'text-gray-800',
        content: 'text-gray-700'
      };
  }
};

const getIcon = (type: TipBoxProps['type']) => {
  switch (type) {
    case 'warning':
      return <AlertTriangle className="w-5 h-5" />;
    case 'success':
      return <CheckCircle className="w-5 h-5" />;
    case 'tip':
      return <Lightbulb className="w-5 h-5" />;
    default:
      return <Info className="w-5 h-5" />;
  }
};

export default function TipBox({ type = 'info', title, children }: TipBoxProps) {
  const styles = getTipBoxStyles(type);
  const icon = getIcon(type);

  return (
    <div className={`border-l-4 p-4 my-6 ${styles.container}`}>
      <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 ${styles.icon}`}>
          {icon}
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-medium mb-2 ${styles.title}`}>
              {title}
            </h4>
          )}
          <div className={`text-sm ${styles.content}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 