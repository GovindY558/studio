
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import { RevealCard } from '@/components/reveal-card';
import { ClothingChoice } from '@/components/clothing-choice';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function GiftPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background text-foreground">
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
                    </Link>
                </div>

                <div className="w-full flex justify-center">
                    <Carousel className="w-full max-w-4xl">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="p-1">
                                    <Card className="bg-card/50">
                                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                                            <h2 className="text-4xl sm:text-5xl font-headline text-primary text-center">For Your Creative Soul</h2>
                                            <RevealCard coverContent={<p className="text-lg">A little something to help your inner director shine...</p>}>
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="relative w-full max-w-lg">
                                                        <Image src="https://placehold.co/600x600" alt="Tripod" width={600} height={600} className="rounded-lg shadow-lg" data-ai-hint="camera tripod" />
                                                    </div>
                                                    <p className="mt-4 font-body text-lg max-w-prose">I know how much you love creating beautiful videos. This is to help you capture every perfect angle. Can't wait to see what you create!</p>
                                                </div>
                                            </RevealCard>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="p-1">
                                    <Card className="bg-card/50">
                                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                                            <h2 className="text-4xl sm:text-5xl font-headline text-primary text-center">A Gift for Your Wardrobe</h2>
                                             <ClothingChoice />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="p-1">
                                    <Card className="bg-card/50">
                                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                                             <h2 className="text-4xl sm:text-5xl font-headline text-primary text-center">And One Last Tiny Surprise</h2>
                                             <RevealCard coverContent={<p className="text-lg">What could it be?</p>}>
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="relative w-full max-w-sm">
                                                        <Image src="https://placehold.co/400x400" alt="Earrings or Bracelet" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="earrings bracelet" />
                                                    </div>
                                                    <p className="mt-4 font-body text-lg">A little sparkle for the brightest person I know.</p>
                                                </div>
                                            </RevealCard>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </div>

            </main>
            <PageFooter />
        </div>
    );
}
