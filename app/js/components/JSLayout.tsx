'use client';

import { useState } from 'react';
import JSContent from './JSContent';
import JSHeader from './JSHeader';
import JSNavigation from './JSNavigation';
import JSOutline from './JSOutline';
import JSSidebar from './JSSidebar';

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

interface JSLayoutProps {
  children: React.ReactNode;
  currentLesson: string;
  tableOfContents: Section[];
  navigation?: Navigation;
  progress?: Progress;
}

export default function JSLayout({
  children,
  currentLesson,
  tableOfContents,
  navigation = {},
  progress,
}: JSLayoutProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <JSHeader currentLesson={currentLesson} />

      <div className="mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Course TOC */}
          <div className={`${sidebarClass} transition-all duration-300`}>
            <JSSidebar
              tableOfContents={tableOfContents}
              currentLesson={currentLesson}
              isCollapsed={sidebarCollapsed}
              onToggleCollapse={setSidebarCollapsed}
            />
          </div>

          {/* Main Content + Navigation */}
          <div className={`${contentClass} transition-all duration-300`}>
            <JSContent>{children}</JSContent>
            <JSNavigation prev={navigation?.prev} next={navigation?.next} />
          </div>

          {/* Right Sidebar - Current Lesson Outline */}
          <div className={`${outlineClass} transition-all duration-300`}>
            <JSOutline
              isCollapsed={outlineCollapsed}
              onToggleCollapse={setOutlineCollapsed}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
