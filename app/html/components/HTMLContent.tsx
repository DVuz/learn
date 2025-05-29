'use client';

interface HTMLContentProps {
  children: React.ReactNode;
}

export default function HTMLContent({ children }: HTMLContentProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
      <div className="p-8">{children}</div>
    </div>
  );
}
