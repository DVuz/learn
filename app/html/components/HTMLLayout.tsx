'use client';

import { useState } from 'react';
import HTMLHeader from './HTMLHeader';
import HTMLSidebar from './HTMLSidebar';
import HTMLContent from './HTMLContent';
import HTMLNavigation from './HTMLNavigation';
import HTMLOutline from './HTMLOutline';

interface Lesson {
  id: string;
  title: string;
}

interface Section {
  title: string;
  lessons: Lesson[];
}

interface Navigation {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}

interface Progress {
  completed: number;
  total: number;
  percentage: number;
}

interface HTMLLayoutProps {
  children: React.ReactNode;
  currentLesson: string;
  tableOfContents: Section[];
  navigation?: Navigation;
  progress?: Progress;
}

export default function HTMLLayout({
  children,
  currentLesson,
  tableOfContents,
  navigation = {},
  progress,
}: HTMLLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [outlineCollapsed, setOutlineCollapsed] = useState(false);

  // Tính toán class names dựa trên trạng thái collapse
  const getLayoutClasses = () => {
    const sidebarClass = sidebarCollapsed ? 'col-span-1' : 'col-span-2';
    const outlineClass = outlineCollapsed ? 'col-span-1' : 'col-span-2';

    let contentClass;
    if (sidebarCollapsed && outlineCollapsed) {
      contentClass = 'col-span-10';
    } else if (sidebarCollapsed || outlineCollapsed) {
      contentClass = 'col-span-9';
    } else {
      contentClass = 'col-span-8';
    }

    return {
      sidebarClass,
      contentClass,
      outlineClass,
    };
  };

  const { sidebarClass, contentClass, outlineClass } = getLayoutClasses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <HTMLHeader currentLesson={currentLesson} />

      <div className="mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Course TOC */}
          <div className={`${sidebarClass} transition-all duration-300`}>
            <HTMLSidebar
              tableOfContents={tableOfContents}
              currentLesson={currentLesson}
              isCollapsed={sidebarCollapsed}
              onToggleCollapse={setSidebarCollapsed}
            />
          </div>

          {/* Main Content + Navigation */}
          <div className={`${contentClass} transition-all duration-300`}>
            <HTMLContent>{children}</HTMLContent>
            <HTMLNavigation prev={navigation?.prev} next={navigation?.next} />
          </div>

          {/* Right Sidebar - Current Lesson Outline */}
          <div className={`${outlineClass} transition-all duration-300`}>
            <HTMLOutline
              progress={progress}
              isCollapsed={outlineCollapsed}
              onToggleCollapse={setOutlineCollapsed}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
