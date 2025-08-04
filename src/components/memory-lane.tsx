"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const memories = [
  {
    src: "https://placehold.co/600x800",
    alt: "Our first date",
    caption: "Our First Date - Remember how nervous we were?",
    hint: "couple selfie"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Trip to the mountains",
    caption: "The Mountain Adventure - I'll never forget that view.",
    hint: "mountain landscape"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Her graduation day",
    caption: "Your Graduation! So proud of you.",
    hint: "graduation photo"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "A silly selfie",
    caption: "Just being silly together.",
    hint: "couple goofy"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Holiday celebration",
    caption: "That amazing holiday dinner.",
    hint: "holiday dinner"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Beach vacation",
    caption: "Soaking up the sun together.",
    hint: "beach couple"
  },
];

export function MemoryLane() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {memories.map((memory, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <CardContent className="flex aspect-[3/4] items-center justify-center p-0 relative">
                  <Image
                    src={memory.src}
                    alt={memory.alt}
                    fill
                    className="object-cover"
                    data-ai-hint={memory.hint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8 text-white text-center flex items-end justify-center h-1/3">
                    <p className="font-body text-sm leading-tight">{memory.caption}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-foreground bg-background/50 hover:bg-background" />
      <CarouselNext className="text-foreground bg-background/50 hover:bg-background" />
    </Carousel>
  );
}
