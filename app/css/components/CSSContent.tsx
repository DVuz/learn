'use client';

import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

interface CSSContentProps {
  children: React.ReactNode;
}

export default function CSSContent({ children }: CSSContentProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg min-h-[600px]">
      <CardContent className="p-8">{children}</CardContent>
    </Card>
  );
}
