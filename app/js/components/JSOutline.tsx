'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Hash, List } from 'lucide-react';
import { useEffect, useState } from 'react';

interface OutlineItem {
  id: string;
  title: string;
  level: number;
}

interface JSOutlineProps {
  isCollapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
}

export default function JSOutline({ isCollapsed, onToggleCollapse }: JSOutlineProps) {
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
    <div className="sticky top-6">
      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        {!isCollapsed ? (
          <>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <List className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-medium text-gray-900 text-sm">Mục lục</h3>
                </div>
                <button
                  onClick={() => onToggleCollapse(true)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  title="Thu gọn"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {outline.length > 0 ? (
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="p-4 space-y-1">
                    {outline.map(item => (
                      <button
                        key={item.id}
                        onClick={() => scrollToHeading(item.id)}
                        className={`w-full text-left px-2 py-1 rounded text-xs transition-all hover:bg-yellow-50 ${
                          activeId === item.id
                            ? 'bg-yellow-100 text-yellow-700 font-medium'
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
                <div className="p-4 text-center text-gray-500 text-sm">Không có mục lục</div>
              )}
            </CardContent>
          </>
        ) : (
          /* Collapsed State */
          <div className="p-4">
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => onToggleCollapse(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Mở rộng mục lục"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
              <List className="w-6 h-6 text-yellow-600" />
              <span className="text-xs text-gray-600 writing-mode-vertical-rl text-orientation-mixed">
                Mục lục
              </span>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
