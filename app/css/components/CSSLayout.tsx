'use client';

import React, { useState } from 'react';
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [outlineCollapsed, setOutlineCollapsed] = useState(false);

  // Tính toán class names dựa trên trạng thái collapse
  const getLayoutClasses = () => {
    // Sidebar nhỏ hơn: 2 columns khi mở rộng, 1 column khi thu nhỏ
    const sidebarClass = sidebarCollapsed ? 'col-span-1' : 'col-span-2';
    const outlineClass = outlineCollapsed ? 'col-span-1' : 'col-span-2';

    // Content lớn hơn và linh hoạt
    let contentClass;
    if (sidebarCollapsed && outlineCollapsed) {
      contentClass = 'col-span-10'; // 12 - 1 - 1 = 10 (rất rộng)
    } else if (sidebarCollapsed || outlineCollapsed) {
      contentClass = 'col-span-9'; // 12 - 2 - 1 = 9 hoặc 12 - 1 - 2 = 9 (rộng)
    } else {
      contentClass = 'col-span-8'; // 12 - 2 - 2 = 8 (mặc định rộng)
    }

    return {
      sidebarClass,
      contentClass,
      outlineClass,
    };
  };

  const { sidebarClass, contentClass, outlineClass } = getLayoutClasses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <CSSHeader currentLesson={currentLesson} />

      <div className="mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Course TOC (Nhỏ hơn) */}
          <div className={`${sidebarClass} transition-all duration-300`}>
            <CSSSidebar
              tableOfContents={tableOfContents}
              currentLesson={currentLesson}
              isCollapsed={sidebarCollapsed}
              onToggleCollapse={setSidebarCollapsed}
            />
          </div>

          {/* Main Content + Navigation (To hơn) */}
          <div className={`${contentClass} transition-all duration-300`}>
            <CSSContent>{children}</CSSContent>
            <CSSNavigation prev={navigation?.prev} next={navigation?.next} />
          </div>

          {/* Right Sidebar - Current Lesson Outline (Nhỏ hơn) */}
          <div className={`${outlineClass} transition-all duration-300`}>
            <CSSOutline
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
