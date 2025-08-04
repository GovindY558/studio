
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import { RevealCard } from '@/components/reveal-card';
import { ClothingChoice } from '@/components/clothing-choice';

export default function GiftPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background text-foreground">
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
                    </Link>
                </div>
                
                <StorySection title="For Your Creative Soul">
                    <RevealCard coverContent={<p className="text-lg">A little something to help your inner director shine...</p>}>
                        <div className="relative w-full max-w-lg">
                            <Image src="https://placehold.co/600x600" alt="Tripod" width={600} height={600} className="rounded-lg shadow-lg" data-ai-hint="camera tripod" />
                        </div>
                        <p className="mt-4 text-center font-body text-lg max-w-prose">I know how much you love creating beautiful videos. This is to help you capture every perfect angle. Can't wait to see what you create!</p>
                    </RevealCard>
                </StorySection>

                <StorySection title="And One Last Tiny Surprise">
                     <RevealCard coverContent={<p className="text-lg">What could it be?</p>}>
                        <div className="relative w-full max-w-sm">
                            <Image src="https://placehold.co/400x400" alt="Earrings or Bracelet" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="earrings bracelet" />
                        </div>
                        <p className="mt-4 text-center font-body text-lg">A little sparkle for the brightest person I know.</p>
                    </RevealCard>
                </StorySection>

                <StorySection title="A Gift for Your Wardrobe">
                    <ClothingChoice />
                </StorySection>

            </main>
            <PageFooter />
        </div>
    );
}
