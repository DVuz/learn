'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Hash, List } from 'lucide-react';
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
}

export default function CSSOutline({ progress }: CSSOutlineProps) {
  const [outline, setOutline] = useState<OutlineItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Tự động lấy tất cả heading elements có id
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');

    console.log('Headings found:', headings);

    const outlineItems: OutlineItem[] = Array.from(headings).map(heading => {
      const level = parseInt(heading.tagName.charAt(1));

      return {
        id: heading.id,
        title: heading.textContent?.trim() || '',
        level: level,
      };
    });
    console.log('Outline items:', outlineItems);

    setOutline(outlineItems);

    // Intersection Observer để detect heading nào đang visible
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px', // Trigger khi heading ở vị trí 20% từ top
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Lấy heading đầu tiên đang visible
        const firstVisible = visibleEntries[0];
        setActiveId(firstVisible.target.id);
      }
    }, observerOptions);

    // Observe tất cả headings
    headings.forEach(heading => {
      observer.observe(heading);
    });

    // Smooth scroll behavior
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.substring(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          // Manually set active id khi click
          setActiveId(id);

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Thêm event listener cho smooth scroll
    const outlineLinks = document.querySelectorAll('.outline-link');
    outlineLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
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
    <aside className="col-span-3">
      <div className="sticky top-24">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-4">
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

          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
