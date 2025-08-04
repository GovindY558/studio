"use client";

import { useState, type ReactNode } from 'react';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface RevealCardProps {
  coverContent: ReactNode;
  children: ReactNode;
  className?: string;
  coverClassName?: string;
  contentClassName?: string;
}

export function RevealCard({ coverContent, children, className, coverClassName, contentClassName }: RevealCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Card className={cn("w-full overflow-hidden shadow-lg bg-card", className)}>
      <div className="relative">
        <div
          className={cn(
            "w-full transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center p-8",
            coverClassName,
            isRevealed ? 'max-h-0 opacity-0 p-0' : 'max-h-96 opacity-100 min-h-64'
          )}
          style={{ transition: 'max-height 0.7s ease-in-out, opacity 0.5s ease-in-out, padding 0.7s ease-in-out' }}
        >
          <div className="font-body text-muted-foreground mb-6">{coverContent}</div>
          <Button onClick={() => setIsRevealed(true)} size="lg" variant="default">
            <Gift className="mr-2 h-5 w-5" />
            Click to Reveal
          </Button>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 ease-in-out",
            contentClassName,
            isRevealed ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          )}
          style={{ transition: 'max-height 1.5s ease-in-out, opacity 1s 0.5s ease-in-out' }}
        >
          <CardContent className="p-2 sm:p-4 md:p-6 flex flex-col items-center gap-4">
            {children}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
