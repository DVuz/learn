import React from 'react';
import CSSHeader from './CSSHeader';
import CSSSidebar from './CSSSidebar';
import CSSContent from './CSSContent';
import CSSOutline from './CSSOutline';
import CSSNavigation from './CSSNavigation';

interface Lesson {
  id: string;
  title: string;
  completed?: boolean;
}

interface Section {
  title: string;
  lessons: Lesson[];
}

interface OutlineItem {
  id: string;
  title: string;
}

interface NavigationItem {
  title: string;
  href: string;
}

interface CSSLayoutProps {
  children: React.ReactNode;
  currentLesson: string;
  tableOfContents: Section[];
  outline: OutlineItem[];
  navigation: {
    prev?: NavigationItem;
    next?: NavigationItem;
  };
  progress?: {
    current: number;
    total: number;
  };
}

export default function CSSLayout({
  children,
  currentLesson,
  tableOfContents,
  outline,
  navigation,
  progress,
}: CSSLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <CSSHeader currentLesson={currentLesson} />

      <div className=" mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          <CSSSidebar tableOfContents={tableOfContents} currentLesson={currentLesson} />

          <div className="col-span-7 space-y-0">
            <CSSContent>{children}</CSSContent>

            <CSSNavigation prev={navigation.prev} next={navigation.next} />
          </div>

          <CSSOutline progress={progress} />
        </div>
      </div>
    </div>
  );
}
