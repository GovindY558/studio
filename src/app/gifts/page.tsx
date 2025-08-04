
import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Gift, Shirt, Sparkles } from 'lucide-react';
import { BackgroundMusic } from '@/components/background-music';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function GiftsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <BackgroundMusic src="/music-gifts.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" passHref>
            <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
          </Link>
        </div>

        <StorySection title="A Few Gifts For You">
            <div className="text-center font-body text-lg max-w-2xl mx-auto mb-12">
                <p>I wanted to give you a few things to show you just how much you mean to me. Each one was picked with you in mind. Click on a box to unwrap your surprise.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <motion.div initial="hidden" animate="visible" custom={0} variants={cardVariants}>
                    <Link href="/gifts/tripod" passHref>
                        <Card className="text-center bg-card/80 backdrop-blur-sm h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <CardHeader>
                                <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                                    <Gift className="w-10 h-10 text-primary"/>
                                </div>
                                <CardTitle className="font-headline text-2xl pt-4">For Your Creative Soul</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>A little something to help your inner director shine...</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                </motion.div>
                 <motion.div initial="hidden" animate="visible" custom={1} variants={cardVariants}>
                    <Link href="/gifts/wardrobe" passHref>
                         <Card className="text-center bg-card/80 backdrop-blur-sm h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <CardHeader>
                                <div className="mx-auto bg-secondary/20 p-4 rounded-full w-fit">
                                    <Shirt className="w-10 h-10 text-secondary"/>
                                </div>
                                <CardTitle className="font-headline text-2xl pt-4">A Gift for Your Wardrobe</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Your style, your choice. See what I've picked out for you!</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                </motion.div>
                 <motion.div initial="hidden" animate="visible" custom={2} variants={cardVariants}>
                    <Link href="/gifts/surprise" passHref>
                        <Card className="text-center bg-card/80 backdrop-blur-sm h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            <CardHeader>
                                <div className="mx-auto bg-accent/20 p-4 rounded-full w-fit">
                                    <Sparkles className="w-10 h-10 text-accent"/>
                                </div>
                                <CardTitle className="font-headline text-2xl pt-4">One Last Tiny Surprise</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>A little sparkle for the brightest person I know...</CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                </motion.div>
            </div>
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
