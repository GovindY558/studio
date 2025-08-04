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
      <BackgroundMusic src="/music-letter.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="A Letter for You">
          <RevealCard
            coverContent={<p className="text-lg">Click to read my birthday wishes for you...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="https://placehold.co/800x1100.png" alt="Handwritten birthday letter" width={800} height={1100} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">My dearest, happy birthday! I hope this letter brings a smile to your face.</p>
          </RevealCard>
        </StorySection>
        
        <StorySection title="Just a Few More Words...">
          <RevealCard
            coverContent={<p className="text-lg">Something from the heart...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="https://placehold.co/800x1100.png" alt="Handwritten love letter" width={800} height={1100} className="rounded-lg shadow-lg object-contain" data-ai-hint="love letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">...about us, our journey, and my promise to you.</p>
          </RevealCard>
        </StorySection>
      
      </main>
      <PageFooter />
    </div>
  );
}
