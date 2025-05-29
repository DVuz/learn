'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { List, ChevronLeft, ChevronRight, Hash } from 'lucide-react';

interface OutlineItem {
  id: string;
  title: string;
  level: number;
}

interface Progress {
  completed: number;
  total: number;
  percentage: number;
}

interface HTMLOutlineProps {
  progress?: Progress;
  isCollapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
}

export default function HTMLOutline({ progress, isCollapsed, onToggleCollapse }: HTMLOutlineProps) {
  const [outline, setOutline] = useState<OutlineItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Tự động lấy tất cả heading elements có id
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');

    const outlineItems: OutlineItem[] = Array.from(headings).map(heading => {
      const level = parseInt(heading.tagName.charAt(1));

      return {
        id: heading.id,
        title: heading.textContent?.trim() || '',
        level: level,
      };
    });

    setOutline(outlineItems);

    // Intersection Observer để detect heading nào đang visible
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    headings.forEach(heading => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-24">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg relative">
        {/* Toggle Button */}
        <button
          onClick={() => onToggleCollapse(!isCollapsed)}
          className="absolute -left-3 top-4 bg-white border border-gray-200 rounded-full p-1.5 shadow-md hover:shadow-lg transition-all duration-200 z-10"
          title={isCollapsed ? 'Mở rộng outline' : 'Thu nhỏ outline'}
        >
          {isCollapsed ? (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          )}
        </button>

        {!isCollapsed ? (
          /* Expanded State */
          <>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <List className="w-4 h-4 text-orange-600" />
                <h3 className="font-semibold text-sm text-gray-900">Mục lục bài học</h3>
              </div>
              {progress && (
                <div className="text-xs text-gray-600">
                  Tiến độ: {progress.completed}/{progress.total} phần
                </div>
              )}
            </CardHeader>
            <CardContent className="p-0">
              {outline.length > 0 ? (
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="p-4 space-y-1">
                    {outline.map(item => (
                      <button
                        key={item.id}
                        onClick={() => scrollToHeading(item.id)}
                        className={`w-full text-left px-2 py-1 rounded text-xs transition-all hover:bg-orange-50 ${
                          activeId === item.id
                            ? 'bg-orange-100 text-orange-700 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                      >
                        <div className="flex items-center gap-2">
                          <Hash className="w-3 h-3 opacity-50" />
                          <span className="truncate">{item.title}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500 text-xs">Không có mục lục</div>
              )}
            </CardContent>
          </>
        ) : (
          /* Collapsed State */
          <div className="p-4">
            <div className="flex flex-col items-center gap-2">
              <List className="w-6 h-6 text-orange-600" />
              {progress && (
                <div className="text-xs text-center text-gray-600">
                  <div className="font-medium">{progress.percentage}%</div>
                  <div>hoàn thành</div>
                </div>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
