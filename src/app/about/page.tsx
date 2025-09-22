
import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BackgroundMusic } from '@/components/background-music';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <BackgroundMusic src="/music-placeholder-5.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="Our Story">
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12 space-y-8">
                    <div className="relative aspect-[2/1] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                        <Image src="/test.jpg" alt="A banner representing a story" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" data-ai-hint="love story" />
                    </div>
                    <div className="font-body text-lg text-foreground/90 max-w-3xl mx-auto space-y-6 text-center">
                        <p>This is a place to tell you about our story. A tale written in shared glances, quiet moments, and endless laughter. It's a story that doesn't need a grand library; it lives in the spaces between hands and the melody of favorite songs.</p>
                        <p>Your 'About Us' isn't just a timeline of dates, but a collection of feelings. It’s about the warmth of a hug on a tough day, the joy of discovering a new favorite food together, and the comfort of knowing that no matter what, you have a home in each other.</p>
                        <p>This little corner of the internet is just another chapter in an ever-evolving story. Thank you for letting us be a small part of it.</p>
                    </div>
                </CardContent>
            </Card>
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
