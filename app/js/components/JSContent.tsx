'use client';

import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface JSContentProps {
  children: ReactNode;
}

export default function JSContent({ children }: JSContentProps) {
  return (
    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
}
