'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface NavigationLink {
  title: string;
  href: string;
}

interface HTMLNavigationProps {
  prev?: NavigationLink;
  next?: NavigationLink;
}

export default function HTMLNavigation({ prev, next }: HTMLNavigationProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex justify-between items-center">
        {/* Previous Button */}
        <div className="flex-1">
          {prev && (
            <Link href={prev.href}>
              <Button
                variant="outline"
                className="group hover:bg-orange-50 hover:border-orange-300 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="font-medium">{prev.title}</div>
                </div>
              </Button>
            </Link>
          )}
        </div>

        {/* Next Button */}
        <div className="flex-1 flex justify-end">
          {next && (
            <Link href={next.href}>
              <Button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="text-right mr-2">
                  <div className="font-medium">{next.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
