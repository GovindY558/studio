import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { MemoryLane } from '@/components/memory-lane';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MemoryLanePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
                <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="Our Memory Lane">
          <MemoryLane />
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
