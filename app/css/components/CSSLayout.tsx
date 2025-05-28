'use client';

import React from 'react';
import CSSContent from './CSSContent';
import CSSHeader from './CSSHeader';
import CSSNavigation from './CSSNavigation';
import CSSOutline from './CSSOutline';
import CSSSidebar from './CSSSidebar';

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
  navigation?: {
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
  navigation = {},
  progress,
}: CSSLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <CSSHeader currentLesson={currentLesson} />

      <div className=" mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Course TOC */}
          <CSSSidebar tableOfContents={tableOfContents} currentLesson={currentLesson} />

          {/* Main Content + Navigation */}
          <div className="col-span-7 space-y-0">
            <CSSContent>{children}</CSSContent>

            <CSSNavigation prev={navigation?.prev} next={navigation?.next} />
          </div>

          {/* Right Sidebar - Current Lesson Outline */}
          <CSSOutline  progress={progress} />
        </div>
      </div>
    </div>
  );
}
