"use client";

import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { MemoryLane } from '@/components/memory-lane';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BackgroundMusic } from '@/components/background-music';

export default function MemoryLanePage() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "hsl(var(--background))",
      "hsl(340, 60%, 94%)", // Lighter pink
      "hsl(269, 60%, 94%)", // Lighter purple
      "hsl(340, 60%, 94%)", // Lighter pink
      "hsl(var(--background))",
    ]
  );

  return (
    <motion.div 
      className="flex flex-col min-h-dvh text-foreground transition-colors duration-500"
      style={{ backgroundColor }}
    >
      <BackgroundMusic src="/music-placeholder-2.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
                <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="Your Memory Lane">
          <MemoryLane />
        </StorySection>

      </main>
      <PageFooter />
    </motion.div>
  );
}
