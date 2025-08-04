
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Gift, Lock } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import { RevealCard } from '@/components/reveal-card';
import { ClothingChoice } from '@/components/clothing-choice';
import { CountdownTimer } from '@/components/countdown-timer';

// NOTE: The month is 0-indexed in JavaScript (0=Jan, 1=Feb, etc.), so August is 7.
const giftRevealTimes = [
  { 
    id: 'tripod', 
    title: "For Your Creative Soul", 
    unlockTime: new Date('2024-08-06T00:00:00') 
  },
  { 
    id: 'surprise', 
    title: "And One Last Tiny Surprise", 
    unlockTime: new Date('2024-08-06T07:00:00') 
  },
  { 
    id: 'clothing', 
    title: "A Gift for Your Wardrobe", 
    unlockTime: new Date('2024-08-06T14:00:00') 
  },
];

const GiftSection = ({ gift, isUnlocked }) => {
  return (
    <AnimatePresence mode="wait">
      {isUnlocked ? (
        <motion.div
          key="unlocked"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {gift.id === 'tripod' && (
             <RevealCard isLocked={!isUnlocked} coverContent={<p className="text-lg">A little something to help your inner director shine...</p>}>
                <div className="relative w-full max-w-lg">
                    <Image src="https://placehold.co/600x600" alt="Tripod" width={600} height={600} className="rounded-lg shadow-lg" data-ai-hint="camera tripod" />
                </div>
                <p className="mt-4 text-center font-body text-lg max-w-prose">I know how much you love creating beautiful videos. This is to help you capture every perfect angle. Can't wait to see what you create!</p>
            </RevealCard>
          )}
          {gift.id === 'surprise' && (
            <RevealCard isLocked={!isUnlocked} coverContent={<p className="text-lg">What could it be?</p>}>
                <div className="relative w-full max-w-sm">
                    <Image src="https://placehold.co/400x400" alt="Earrings or Bracelet" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="earrings bracelet" />
                </div>
                <p className="mt-4 text-center font-body text-lg">A little sparkle for the brightest person I know.</p>
            </RevealCard>
          )}
          {gift.id === 'clothing' && <ClothingChoice />}
        </motion.div>
      ) : (
        <motion.div
          key="locked"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center justify-center bg-card/50 p-8 rounded-lg shadow-inner border border-dashed"
        >
          <Lock className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="font-headline text-2xl text-muted-foreground mb-2">The next surprise is waiting...</p>
          <p className="font-body text-lg text-muted-foreground mb-6">It will be revealed at {gift.unlockTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.</p>
          <CountdownTimer targetDate={gift.unlockTime} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default function GiftPage() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        // Set the state to the current date on mount to avoid hydration mismatch
        setNow(new Date());

        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-dvh bg-background text-foreground">
            <PageHeader />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
                    </Link>
                </div>
                
                {giftRevealTimes.map((gift) => {
                    const isUnlocked = now >= gift.unlockTime;
                    return (
                        <StorySection key={gift.id} title={gift.title}>
                            <GiftSection gift={gift} isUnlocked={isUnlocked} />
                        </StorySection>
                    )
                })}

            </main>
            <PageFooter />
        </div>
    );
}
