
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
            <BackgroundMusic src="/music-gifts-3.mp3" />
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/gifts" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to All Gifts</Button>
                    </Link>
                </div>
                
                <StorySection title="And One Last Tiny Surprise">
                    <div className="w-full flex flex-col items-center justify-center space-y-4">
                        <Card className="bg-card/50 w-full max-w-4xl">
                            <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                                <RevealCard coverContent={<p className="text-lg">A little piece of everyday magic, just for you...</p>}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative w-full max-w-sm">
                                            {/* To add your image, place it in /public/gifts/bag-charm.png */}
                                            <Image src="/gifts/surprise.png" alt="Pearl Whimsy Tassel Bag Charm" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="pearl bag charm" />
                                        </div>
                                        <p className="mt-4 font-body text-lg max-w-prose">I saw this and it instantly reminded me of your classic style and playful heart. It’s a little charm to add a touch of whimsy to your day, a reminder of the little things and the big love we share. Carry it with you and let it be a sparkle of our connection.</p>
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
