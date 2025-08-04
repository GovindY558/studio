import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { RevealCard } from '@/components/reveal-card';
import { MemoryLane } from '@/components/memory-lane';
import { VideoPlayer } from '@/components/video-player';
import { ClothingChoice } from '@/components/clothing-choice';
import { PageFooter } from '@/components/page-footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        <StorySection title="A Letter for You">
          <RevealCard
            coverContent={<p className="text-lg">Click to read my birthday wishes for you...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="https://placehold.co/800x1100" alt="Handwritten birthday letter" width={800} height={1100} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">My dearest, happy birthday! I hope this letter brings a smile to your face.</p>
          </RevealCard>
        </StorySection>

        <StorySection title="For Your Creative Soul">
          <RevealCard
            coverContent={<p className="text-lg">A little something to help your inner director shine...</p>}
          >
            <div className="relative w-full max-w-lg">
              <Image src="https://placehold.co/600x600" alt="Tripod" width={600} height={600} className="rounded-lg shadow-lg" data-ai-hint="camera tripod" />
            </div>
            <p className="mt-4 text-center font-body text-lg max-w-prose">I know how much you love creating beautiful videos. This is to help you capture every perfect angle. Can't wait to see what you create!</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Our Memory Lane">
          <MemoryLane />
        </StorySection>
        
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

        <StorySection title="Just a Few More Words...">
          <RevealCard
            coverContent={<p className="text-lg">Something from the heart...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="https://placehold.co/800x1100" alt="Handwritten love letter" width={800} height={1100} className="rounded-lg shadow-lg object-contain" data-ai-hint="love letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">...about us, our journey, and my promise to you.</p>
          </RevealCard>
        </StorySection>

        <StorySection title="A Gift for Your Wardrobe">
          <ClothingChoice />
        </StorySection>

        <StorySection title="And One Last Tiny Surprise">
          <RevealCard
            coverContent={<p className="text-lg">What could it be?</p>}
          >
            <div className="relative w-full max-w-sm">
              <Image src="https://placehold.co/400x400" alt="Earrings or Bracelet" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="earrings bracelet" />
            </div>
            <p className="mt-4 text-center font-body text-lg">A little sparkle for the brightest person I know.</p>
          </RevealCard>
        </StorySection>
      </main>
      <PageFooter />
    </div>
  );
}
