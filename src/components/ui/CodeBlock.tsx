'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showCopyButton?: boolean;
}

const getLanguageColor = (language: string) => {
  switch (language) {
    case 'python':
      return 'text-blue-400';
    case 'bash':
      return 'text-green-400';
    case 'javascript':
      return 'text-yellow-400';
    case 'typescript':
      return 'text-blue-400';
    default:
      return 'text-gray-300';
  }
};

export default function CodeBlock({ 
  code, 
  language = 'bash', 
  title, 
  showCopyButton = true 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="my-6">
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg text-sm font-medium">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className={`${title ? 'rounded-b-lg' : 'rounded-lg'} bg-gray-900 text-gray-100 p-4 overflow-x-auto`}>
          <code className={`${getLanguageColor(language)} font-mono text-sm`}>
            {code}
          </code>
        </pre>
        {showCopyButton && (
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
            title="코드 복사"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-300" />
            )}
          </button>
        )}
      </div>
    </div>
  );
} 