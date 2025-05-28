'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface NavigationItem {
  title: string;
  href: string;
}

interface CSSNavigationProps {
  prev?: NavigationItem;
  next?: NavigationItem;
}

export default function CSSNavigation({ prev, next }: CSSNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-6">
      {prev ? (
        <Link href={prev.href}>
          <Button variant="outline" className="flex items-center gap-2 hover:bg-gray-50">
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left">
              <div className="font-medium text-sm">{prev.title}</div>
            </div>
          </Button>
        </Link>
      ) : (
        <div></div>
      )}

      {next ? (
        <Link href={next.href}>
          <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <div className="text-right">
              <div className="font-medium text-sm">{next.title}</div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
