
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { EmblaCarouselType } from 'embla-carousel-react'
import { motion, useMotionValue, useTransform } from 'framer-motion';

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
import { cn } from '@/lib/utils';
import { BackgroundMusic } from '@/components/background-music';

const giftColors = [
    "hsl(var(--background))",
    "hsl(340, 60%, 94%)",
    "hsl(269, 60%, 94%)",
]

export default function GiftPage() {
    const [api, setApi] = useState<EmblaCarouselType | undefined>()
    const [current, setCurrent] = useState(0)
    
    const progress = useMotionValue(0);
    const backgroundColor = useTransform(
        progress,
        [0, 1, 2],
        giftColors
    );

    useEffect(() => {
        if (!api) {
            return
        }

        const onSelect = (api: EmblaCarouselType) => {
            setCurrent(api.selectedScrollSnap());
        }

        const onScroll = (api: EmblaCarouselType) => {
            progress.set(api.scrollProgress() * (api.scrollSnapList().length - 1))
        }

        api.on("select", onSelect)
        api.on("scroll", onScroll)

        // Set initial values
        onSelect(api);
        onScroll(api);


        return () => {
            api.off("select", onSelect)
            api.off("scroll", onScroll)
        }
    }, [api, progress])


    return (
        <motion.div 
            className="flex flex-col min-h-dvh text-foreground transition-colors duration-500"
            style={{ backgroundColor }}
        >
            <BackgroundMusic src="/music-gifts.mp3" />
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
                    </Link>
                </div>
                
                <div className="w-full flex flex-col items-center justify-center space-y-4">
                     <p className="text-muted-foreground font-body">Use the arrows to navigate through your gifts</p>
                    <Carousel setApi={setApi} className="w-full max-w-4xl">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="p-1">
                                    <Card className="bg-card/50">
                                        <CardContent className="flex flex-col items-center justify-center p-6 space-y-8 min-h-[500px]">
                                            <h2 className="text-4xl sm:text-5xl font-headline text-primary text-center">For Your Creative Soul</h2>
                                            <RevealCard coverContent={<p className="text-lg">A little something to help your inner director shine...</p>}>
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="relative w-full max-w-lg">
                                                        <Image src="https://placehold.co/600x600.png" alt="Tripod" width={600} height={600} className="rounded-lg shadow-lg" data-ai-hint="camera tripod" />
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
                                                        <Image src="https://placehold.co/400x400.png" alt="Earrings or Bracelet" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="earrings bracelet" />
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
                    <div className="flex gap-2">
                        {giftColors.map((_, i) => (
                            <div key={i} className={cn("h-2 w-2 rounded-full transition-colors", i === current ? 'bg-primary' : 'bg-muted')}/>
                        ))}
                    </div>
                </div>

            </main>
            <PageFooter />
        </motion.div>
    );
}
