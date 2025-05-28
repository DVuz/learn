'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BookOpen, CheckCircle, Circle } from 'lucide-react';
import Link from 'next/link';

interface Lesson {
  id: string;
  title: string;
  completed?: boolean;
}

interface Section {
  title: string;
  lessons: Lesson[];
}

interface CSSSidebarProps {
  tableOfContents: Section[];
  currentLesson: string;
}

export default function CSSSidebar({ tableOfContents, currentLesson }: CSSSidebarProps) {
  const totalLessons = tableOfContents.reduce(
    (total, section) => total + section.lessons.length,
    0
  );
  const completedLessons = tableOfContents.reduce(
    (total, section) => total + section.lessons.filter(lesson => lesson.completed).length,
    0
  );

  return (
    <aside className="col-span-2 ">
      <div className="sticky top-24">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <h3 className="font-semibold text-sm text-gray-900">Course Content</h3>
            </div>
            <div className="text-xs text-gray-600">
              {completedLessons} of {totalLessons} lessons completed
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
              ></div>
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
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li key={lesson.id}>
                          <Link
                            href={`/css/${lesson.id === 'introduction' ? '' : lesson.id}`}
                            className={`block px-3 py-2 rounded-lg text-xs transition-all hover:bg-blue-50 group ${
                              currentLesson === lesson.title
                                ? 'bg-blue-100 text-blue-700 font-medium border-l-3 border-blue-500 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                                {lesson.completed ? (
                                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                ) : (
                                  <Circle className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" />
                                )}
                              </div>
                              <span className="truncate leading-tight">{lesson.title}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
