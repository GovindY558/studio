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

export default function SurpriseGiftPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background text-foreground transition-colors duration-500"
             style={{ backgroundColor: "hsl(275, 70%, 96%)" }}
        >
            <BackgroundMusic src="/music-placeholder-4.mp3" />
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/gifts" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to All Gifts</Button>
                    </Link>
                </div>
                
                <StorySection title="A Special Surprise">
                    <div className="w-full flex flex-col items-center justify-center space-y-4">
                        <Card className="bg-card/50 w-full max-w-4xl">
                            <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                                <RevealCard coverContent={<p className="text-lg">A little piece of everyday magic, just for you...</p>}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative w-full max-w-sm">
                                            <Image src="/watch_bag.jpg" alt="A surprise gift" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="elegant charm" />
                                        </div>
                                        <p className="mt-4 font-body text-lg max-w-prose">I wanted to give you something that you can carry everywhere, a small token to remind you of this special day. I hope you love it #Babu.If  Yes, Please go Ahead Dear ☺.</p>
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
