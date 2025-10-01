import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { RevealCard } from '@/components/reveal-card';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BackgroundMusic } from '@/components/background-music';

export default function LetterPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <BackgroundMusic src="/music-placeholder-1.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="A Letter From My Heart">
          <RevealCard
            coverContent={<p className="text-lg">Click to read my birthday wishes for you...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="https://picsum.photos/seed/letter1/800/1067.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Every word in this letter comes straight from the heart. Happy B'Day Meri Himmat</p>
          </RevealCard>
        </StorySection>
        
        <StorySection title="A Promise in a Rose">
          <RevealCard
            coverContent={<p className="text-lg">A special promise for the future...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/test.jpg" alt="A rose and two polaroids as a promise" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="rose polaroids" />
            </div>
            <p className="mt-4 text-center font-body text-lg max-w-prose">I'm keeping this rose safe. It's a promise of all the beautiful moments waiting for us. I'll give it to you the moment we're together again.</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Another Little Keepsake">
          <RevealCard
            coverContent={<p className="text-lg">Something else that's waiting for you...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="https://picsum.photos/seed/letter3/800/1067.png" alt="A small flower and two polaroids with a note" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="flower message" />
            </div>
            <p className="mt-4 text-center font-body text-lg max-w-prose">Just like the note in this photo says... this little flower is for my love. It's another piece of my heart that I'm holding onto for you..</p>
          </RevealCard>
        </StorySection>
      
      </main>
      <PageFooter />
    </div>
  );
}
