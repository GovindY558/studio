"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const memories = [
  {
    src: "https://picsum.photos/seed/memory1/600/400.png",
    alt: "A cherished memory",
    caption: "The Day We First Met",
    date: "A beautiful spring afternoon",
    hint: "couple smiling"
  },
  {
    src: "https://picsum.photos/seed/memory2/600/400.png",
    alt: "A special moment",
    caption: "Our First Adventure",
    date: "A memorable summer day",
    hint: "mountain landscape"
  },
  {
    src: "https://picsum.photos/seed/memory3/600/400.png",
    alt: "A happy occasion",
    caption: "A Birthday Celebration",
    date: "A cozy winter evening",
    hint: "birthday cake"
  },
  {
    src: "https://picsum.photos/seed/memory4/600/400.png",
    alt: "A fun trip",
    caption: "Spontaneous Road Trip",
    date: "An unforgettable autumn weekend",
    hint: "car road"
  },
  {
    src: "https://picsum.photos/seed/memory5/600/400.png",
    alt: "A quiet moment together",
    caption: "Watching the Sunset",
    date: "Countless perfect evenings",
    hint: "beach sunset"
  },
  {
    src: "https://picsum.photos/seed/memory6/600/400.png",
    alt: "A celebration of love",
    caption: "A Toast to the Future",
    date: "Here's to many more memories",
    hint: "celebration toast"
  },
];

const TimelineItem = ({ memory, index }: { memory: typeof memories[0], index: number }) => {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isEven ? -100 : 100, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { duration: 0.4, delay: 0.3, ease: "easeOut" } 
    }
  }

  return (
    <motion.div 
        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
    >
      <div className="flex items-center justify-center w-10 md:w-12">
        <div className="hidden md:block w-px h-full bg-border -translate-x-px" />
        <motion.div variants={dotVariants} className="w-6 h-6 rounded-full bg-primary/80 border-4 border-card z-10" />
        <div className="hidden md:block w-px h-full bg-border translate-x-px" />
      </div>

      <motion.div variants={cardVariants} className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)]">
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="aspect-[4/3] rounded-md overflow-hidden relative">
            <Image
              src={memory.src}
              alt={memory.alt}
              fill
              className="object-cover grayscale hover:grayscale-0 filter saturate-50 hover:saturate-100 transition-all duration-500 ease-in-out"
              data-ai-hint={memory.hint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
