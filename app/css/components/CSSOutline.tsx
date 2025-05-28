'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Hash, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface OutlineItem {
  id: string;
  title: string;
  level: number;
}

interface CSSOutlineProps {
  progress?: {
    current: number;
    total: number;
  };
  isCollapsed: boolean;
  onToggleCollapse: (collapsed: boolean) => void;
}

export default function CSSOutline({ progress, isCollapsed, onToggleCollapse }: CSSOutlineProps) {
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
      const visibleEntries = entries.filter(entry => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const firstVisible = visibleEntries[0];
        setActiveId(firstVisible.target.id);
      }
    }, observerOptions);

    headings.forEach(heading => {
      observer.observe(heading);
    });

    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.substring(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          setActiveId(id);
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const outlineLinks = document.querySelectorAll('.outline-link');
    outlineLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      observer.disconnect();
      outlineLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  if (outline.length === 0) {
    return null;
  }

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

        <CardContent className="p-4">
          {!isCollapsed ? (
            /* Expanded State */
            <>
              <h3 className="font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
                <List className="w-4 h-4 text-green-600" />
                Nội dung bài học
              </h3>

              <nav className="space-y-1 mb-6">
                {outline.map(item => {
                  const isActive = activeId === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`outline-link block px-3 py-2 text-sm rounded transition-all duration-200 ${
                        item.level > 2 ? 'ml-4' : ''
                      } ${
                        isActive
                          ? 'bg-green-50 text-green-700 border-l-2 border-green-500 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Hash
                          className={`w-3 h-3 ${isActive ? 'text-green-500' : 'text-gray-400'}`}
                        />
                        <span className="leading-tight">{item.title}</span>
                      </div>
                    </a>
                  );
                })}
              </nav>
            </>
          ) : (
            /* Collapsed State */
            <div className="flex flex-col items-center gap-2">
              <List className="w-5 h-5 text-green-600" />

              {/* Mini outline indicators */}
              <div className="flex flex-col gap-1 w-full max-h-[60vh] overflow-y-auto">
                {outline.map(item => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`outline-link w-full transition-all duration-200 ${
                        item.level === 1 ? 'h-3' : item.level === 2 ? 'h-2' : 'h-1.5'
                      } ${item.level > 2 ? 'ml-2' : ''} rounded-sm ${
                        isActive ? 'bg-green-500' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
