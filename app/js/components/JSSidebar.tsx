'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Lesson {
  id: string;
  title: string;
  href?: string;
}

interface Section {
  title: string;
  lessons: Lesson[];
}

interface JSSidebarProps {
  tableOfContents: Section[];
  currentLesson: string;
  isCollapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
}

export default function JSSidebar({
  tableOfContents,
  currentLesson,
  isCollapsed,
  onToggleCollapse,
}: JSSidebarProps) {
  return (
    <div className="sticky top-24">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg relative">
        {/* Toggle Button */}
        <button
          onClick={() => onToggleCollapse(!isCollapsed)}
          className="absolute -right-3 top-4 bg-white border border-gray-200 rounded-full p-1.5 shadow-md hover:shadow-lg transition-all duration-200 z-10"
          title={isCollapsed ? 'Mở rộng sidebar' : 'Thu nhỏ sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>

        {!isCollapsed ? (
          /* Expanded State */
          <>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-yellow-600" />
                <h3 className="font-semibold text-sm text-gray-900">JavaScript Course Content</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <div className="p-4 space-y-4">
                  {tableOfContents.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-2">
                      <h4 className="font-medium text-xs text-gray-600 uppercase tracking-wide sticky top-0 bg-white/90 backdrop-blur-sm py-1 border-b border-gray-100">
                        {section.title}
                      </h4>
                      <ul className="space-y-1 pl-2">
                        {section.lessons.map(lesson => (
                          <li key={lesson.id}>
                            <Link
                              href={lesson.href || `/js/${lesson.id === 'basics' ? '' : lesson.id}`}
                              className={`block px-3 py-2 rounded-lg text-xs transition-all hover:bg-yellow-50 ${
                                currentLesson === lesson.title
                                  ? 'bg-yellow-100 text-yellow-700 font-medium border-l-3 border-yellow-500 shadow-sm'
                                  : 'text-gray-600 hover:text-gray-900'
                              }`}
                            >
                              <span className="truncate leading-tight">{lesson.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </>
        ) : (
          /* Collapsed State */
          <div className="p-4">
            <div className="flex flex-col items-center gap-3">
              <BookOpen className="w-6 h-6 text-yellow-600" />

              {/* Mini lesson indicators */}
              <div className="flex flex-col gap-1 w-full max-h-[60vh] overflow-y-auto">
                {tableOfContents.map(section =>
                  section.lessons.map(lesson => (
                    <Link
                      key={lesson.id}
                      href={lesson.href || `/js/${lesson.id === 'basics' ? '' : lesson.id}`}
                      className={`w-full h-2 rounded-sm transition-all ${
                        currentLesson === lesson.title
                          ? 'bg-yellow-500'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      title={lesson.title}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
