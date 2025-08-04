import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { PageFooter } from '@/components/page-footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        <StorySection title="Welcome, My Love">
            <div className="text-center font-body text-lg max-w-2xl mx-auto">
                <p className="mb-8">This is a special place I've built just for you, to celebrate your birthday and our journey together. Each section is a chapter of our story, a token of my love for you.</p>
                <p>Click the button below to begin your journey.</p>
            </div>
        </StorySection>
        
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
            <Link href="/letter" passHref>
                <Button size="lg" className="w-64">
                    A Letter For You <ArrowRight className="ml-2" />
                </Button>
            </Link>
            <Link href="/memory-lane" passHref>
                <Button size="lg" className="w-64">
                    Our Memory Lane <ArrowRight className="ml-2" />
                </Button>
            </Link>
            <Link href="/video" passHref>
                <Button size="lg" className="w-64">
                    A Moving Picture Show <ArrowRight className="ml-2" />
                </Button>
            </Link>
            <Link href="/gifts" passHref>
                <Button size="lg" className="w-64">
                    A Few Gifts <ArrowRight className="ml-2" />
                </Button>
            </Link>
        </section>

      </main>
      <PageFooter />
    </div>
  );
}
