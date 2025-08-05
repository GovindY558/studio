
"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BackgroundMusic } from '@/components/background-music';
import { ClothingSharer } from '@/components/clothing-sharer';
import { StorySection } from '@/components/story-section';

export default function WardrobeGiftPage() {
    return (
        <div className="flex flex-col min-h-dvh text-foreground transition-colors duration-500"
             style={{ backgroundColor: "hsl(340, 85%, 96%)" }}
        >
            <BackgroundMusic src="/music-gifts-2.mp3" />
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/gifts" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to All Gifts</Button>
                    </Link>
                </div>
                
                <StorySection title="A Gift For Your Wardrobe">
                    <div className="w-full flex flex-col items-center justify-center space-y-4">
                        <Card className="bg-card/50 w-full max-w-6xl">
                            <CardContent className="p-6">
                                <ClothingSharer />
                            </CardContent>
                        </Card>
                    </div>
                </StorySection>

            </main>
            <PageFooter />
        </div>
    );
}
