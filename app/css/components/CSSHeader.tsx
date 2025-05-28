'use client';

import { Badge } from '@/components/ui/badge';
import { BookOpen, Home } from 'lucide-react';
import Link from 'next/link';

interface CSSHeaderProps {
  currentLesson: string;
}

export default function CSSHeader({ currentLesson }: CSSHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Home className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900">Frontend Hub</span>
            </Link>
            <span className="text-gray-400">/</span>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              <BookOpen className="w-4 h-4 mr-1" />
              CSS Course
            </Badge>
          </div>

          <div className="text-sm text-gray-600">
            Bài học: <span className="font-medium text-gray-900">{currentLesson}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
