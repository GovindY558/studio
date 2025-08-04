import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { VideoPlayer } from '@/components/video-player';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function VideoPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <Link href="/" passHref>
                <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="A Moving Picture Show">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 w-full">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-headline text-center mb-4 text-primary-foreground/90">This Year's Special</h3>
              <VideoPlayer src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Birthday Video 2024" />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-headline text-center mb-4 text-primary-foreground/90">A Look Back</h3>
              <VideoPlayer src="https://www.youtube.com/embed/uHgt8giw1LY" title="Birthday Video 2023" />
            </div>
          </div>
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
