"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const memories = [
  {
    src: "https://placehold.co/600x800",
    alt: "Our first date",
    caption: "Our First Date",
    date: "A day to remember",
    hint: "couple selfie"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Trip to the mountains",
    caption: "The Mountain Adventure",
    date: "The view was almost as beautiful as you",
    hint: "mountain landscape"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Her graduation day",
    caption: "Your Graduation!",
    date: "So incredibly proud of you",
    hint: "graduation photo"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "A silly selfie",
    caption: "Just Being Silly",
    date: "My favorite pastime",
    hint: "couple goofy"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Holiday celebration",
    caption: "Holiday Magic",
    date: "That amazing dinner we made",
    hint: "holiday dinner"
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Beach vacation",
    caption: "Soaking Up The Sun",
    date: "Best trip ever",
    hint: "beach couple"
  },
];

const TimelineItem = ({ memory, index }: { memory: typeof memories[0], index: number }) => {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isEven ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.4 } }
  }

  return (
    <motion.div 
        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex items-center justify-center w-10 md:w-12">
        <div className="hidden md:block w-px h-full bg-border -translate-x-px" />
        <motion.div variants={dotVariants} className="w-6 h-6 rounded-full bg-primary/80 border-4 border-card z-10" />
        <div className="hidden md:block w-px h-full bg-border translate-x-px" />
      </div>

      <motion.div variants={cardVariants} className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)]">
        <div className="bg-card p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="aspect-[4/3] rounded-md overflow-hidden relative">
            <Image
              src={memory.src}
              alt={memory.alt}
              fill
              className="object-cover grayscale hover:grayscale-0 filter saturate-50 hover:saturate-100 transition-all duration-500"
              data-ai-hint={memory.hint}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-3 text-left">
            <p className="font-headline text-xl text-foreground">{memory.caption}</p>
            <p className="font-body text-sm text-muted-foreground">{memory.date}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function MemoryLane() {
  return (
    <div className="relative w-full max-w-sm md:max-w-4xl mx-auto py-8">
      <div className="absolute top-0 bottom-0 left-5 md:left-1/2 w-1.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="space-y-12">
        {memories.map((memory, index) => (
          <TimelineItem key={index} memory={memory} index={index} />
        ))}
      </div>
    </div>
  );
}