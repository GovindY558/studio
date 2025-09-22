
import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { PageFooter } from '@/components/page-footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Info, FileText, Send } from 'lucide-react';
import { BackgroundMusic } from '@/components/background-music';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <BackgroundMusic src="/music-placeholder-1.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        <StorySection title="Welcome, My Love">
            <div className="text-center font-body text-lg max-w-2xl mx-auto">
                <p className="mb-8">This is a special space I’ve created just for you, to celebrate the beautiful occasion of your birthday. Every part of it tells a different story—each chapter reflecting a unique perspective of You.</p>
                <p>Click the buttons below to begin your journey.</p>
            </div>
        </StorySection>
        
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                <Link href="/letter" passHref>
                    <Button size="lg" className="w-full">
                        A Letter For You <ArrowRight className="ml-2" />
                    </Button>
                </Link>
                <Link href="/memory-lane" passHref>
                    <Button size="lg" className="w-full">
                        Our Memory Lane <ArrowRight className="ml-2" />
                    </Button>
                </Link>
                <Link href="/video" passHref>
                    <Button size="lg" className="w-full">
                        A Moving Picture Show <ArrowRight className="ml-2" />
                    </Button>
                </Link>
                <Link href="/gifts" passHref>
                    <Button size="lg" className="w-full">
                        A Few Gifts <ArrowRight className="ml-2" />
                    </Button>
                </Link>
            </div>

            <div className="w-full border-t border-border mt-12 pt-12 flex justify-center items-center gap-4">
                 <Link href="/about" passHref>
                    <Button variant="outline">
                        <Info /> About This Site
                    </Button>
                </Link>
                 <Link href="/contact" passHref>
                    <Button variant="outline">
                        <Send /> Get In Touch
                    </Button>
                </Link>
                 <Link href="/terms" passHref>
                    <Button variant="outline">
                        <FileText /> Terms & Conditions
                    </Button>
                </Link>
            </div>
        </section>

      </main>
      <PageFooter />
    </div>
  );
}
