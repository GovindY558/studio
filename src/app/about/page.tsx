
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
                        <p>I never imagined I’d meet you like this. You came so close to me that I didn’t even realize when you became a part of me. I still remember the first time you hugged me—it’s something I can never forget. Even now, it feels unbelievable that you were the one who wrapped me in your arms.it lingers like a beautiful dream.</p>
                        <p>Never think of yourself as alone, because I’m always with you. You’re so much wiser and deeper than even you realize—understanding you is something not everyone can do. Yes, it’s true that I’m not physically there right now, but I’m still close to you. Whenever you miss me, just close your eyes—you’ll find me right beside you.</p>
                        <p>This little corner of the internet is just another chapter in an ever-evolving story.</p>
                    </div>
                </CardContent>
            </Card>
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
