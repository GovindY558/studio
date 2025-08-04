import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="About Us: A Love Story">
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12 space-y-8">
                    <div className="relative aspect-[3/1] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
                        <Image src="https://placehold.co/1200x400" alt="Romantic banner" fill className="object-cover" data-ai-hint="romantic hearts" />
                    </div>
                    <div className="font-body text-lg text-foreground/90 max-w-3xl mx-auto space-y-6 text-center">
                        <p>This is the story of Yashraj and Ayushi. A tale written not in the stars, but in shared glances, quiet moments, and endless laughter. It's a story that doesn't need a grand library; it lives in the spaces between our hands and the melody of our favorite songs.</p>
                        <p>Our 'About Us' isn't a timeline of dates, but a collection of feelings. It’s about the warmth of a hug on a tough day, the joy of discovering a new favorite food together, and the comfort of knowing that no matter what, we are each other's home.</p>
                        <p>We are partners in crime, dreamers of the same dream, and keepers of each other's secrets. This little corner of the internet is just another chapter in our ever-evolving story. Thank you for being the best part of it.</p>
                    </div>
                </CardContent>
            </Card>
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
