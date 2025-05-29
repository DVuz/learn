'use client';

import { Zap } from 'lucide-react';
import Link from 'next/link';

interface JSHeaderProps {
  currentLesson: string;
}

export default function JSHeader({ currentLesson }: JSHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-yellow-200 shadow-sm">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">JavaScript Course</h1>
              <p className="text-sm text-gray-600 leading-tight">Ngôn ngữ tương tác cho Web</p>
            </div>
          </Link>

          <div className="text-sm text-gray-600">
            Bài học: <span className="font-medium text-gray-900">{currentLesson}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
