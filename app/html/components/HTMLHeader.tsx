'use client';

import { Code } from 'lucide-react';
import Link from 'next/link';

interface HTMLHeaderProps {
  currentLesson: string;
}

export default function HTMLHeader({ currentLesson }: HTMLHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">HTML Course</h1>
              <p className="text-sm text-gray-600 leading-tight">Nền tảng của Web Development</p>
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
