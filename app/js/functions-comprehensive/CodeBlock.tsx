'use client';

import React, { useState } from 'react';
import { Check, Copy, Code2, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  caption?: string;
  output?: string;
  highlight?: number[];
  id?: string;
}

export function CodeBlock({
  code,
  language = 'javascript',
  showLineNumbers = true,
  caption,
  output,
  highlight = [],
  id,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className="group relative my-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      {caption && (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
          <p className="text-sm font-medium">{caption}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Code2 className="h-3.5 w-3.5" />
            <span>{language}</span>
          </div>
        </div>
      )}

      <div className="relative">
        <pre className={cn('overflow-x-auto p-4 text-sm', showLineNumbers ? 'pl-12' : 'pl-4')}>
          {lines.map((line, i) => (
            <div
              key={`${id}-line-${i}`}
              className={cn('min-h-6', highlight.includes(i + 1) && 'bg-primary/10')}
            >
              {showLineNumbers && (
                <span className="absolute left-0 w-8 inline-block text-right pr-2 select-none text-muted-foreground text-xs">
                  {i + 1}
                </span>
              )}
              <code>{line || ' '}</code>
            </div>
          ))}
        </pre>

        <div className="absolute right-2 top-2 flex gap-1">
          {output && (
            <button
              onClick={() => setShowOutput(!showOutput)}
              className="h-7 w-7 rounded bg-primary/10 p-1 text-muted-foreground hover:bg-primary/20"
              title="Run code"
            >
              <Play className="h-full w-full" />
            </button>
          )}
          <button
            onClick={handleCopy}
            className="h-7 w-7 rounded bg-primary/10 p-1 text-muted-foreground hover:bg-primary/20"
            title={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? <Check className="h-full w-full" /> : <Copy className="h-full w-full" />}
          </button>
        </div>
      </div>

      {output && showOutput && (
        <div className="border-t bg-muted/30 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <p className="text-xs font-medium">Output</p>
          </div>
          <pre className="overflow-x-auto rounded-md bg-muted p-4 text-sm">
            <code>{output}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
