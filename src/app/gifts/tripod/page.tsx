"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import { RevealCard } from '@/components/reveal-card';
import { Card, CardContent } from '@/components/ui/card';
import { BackgroundMusic } from '@/components/background-music';
import { StorySection } from '@/components/story-section';

export default function TripodGiftPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background text-foreground transition-colors duration-500"
             style={{ backgroundColor: "hsl(330, 80%, 96%)" }}
        >
            <BackgroundMusic src="/music-placeholder-2.mp3" />
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/gifts" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to All Gifts</Button>
                    </Link>
                </div>
                
                <StorySection title="For the Creative Soul">
                    <div className="w-full flex flex-col items-center justify-center space-y-4">
                        <Card className="bg-card/50 w-full max-w-4xl">
                            <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                                <RevealCard coverContent={<p className="text-lg">A little something to help your inner artist shine...</p>}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative w-full max-w-lg">
                                            <Image src="https://picsum.photos/seed/gift1/600/600.png" alt="A creative gift" width={600} height={600} className="rounded-lg shadow-lg" data-ai-hint="camera accessory" />
                                        </div>
                                        <p className="mt-4 font-body text-lg max-w-prose">We know how much you love creating beautiful things. This is to help you capture every perfect angle. We can't wait to see what you create!</p>
                                    </div>
                                </RevealCard>
                            </CardContent>
                        </Card>
                    </div>
                </StorySection>

            </main>
            <PageFooter />
        </div>
    );
}
