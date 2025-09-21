"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from './ui/card';

// INSTRUCTIONS FOR YOU:
// To add your clothing items:
// 1. Update the `clothingItems` array below.
// 2. For each item, provide an `id`, `name`, and a `message`.
// 3. Add one or more images for each item in the `public/placeholder` folder.
//    - The `images` array should contain the paths to these images, e.g., "/placeholder/jeans-1.png".
const clothingItems = [
  {
    id: 'item_1',
    name: 'Classic Denim Jeans',
    images: ['https://picsum.photos/seed/clothing1a/400/500.png', 'https://picsum.photos/seed/clothing1b/400/500.png'],
    hint: 'denim jeans',
    message: "A timeless classic. These jeans are versatile and perfect for any occasion. What do you think?",
    link: '#'
  },
  {
    id: 'item_2',
    name: 'Summer Floral Dress',
    images: ['https://picsum.photos/seed/clothing2a/400/500.png'],
    hint: 'floral dress',
    message: "This dress feels perfect for sunny days and garden parties. A beautiful choice for a beautiful person.",
    link: '#'
  },
  {
    id: 'item_3',
    name: 'Cozy Knit Sweater',
    images: ['https://picsum.photos/seed/clothing3a/400/500.png', 'https://picsum.photos/seed/clothing3b/400/500.png'],
    hint: 'knit sweater',
    message: "For those cooler evenings, a cozy sweater is a must-have. This one looks incredibly comfortable.",
    link: '#'
  },
  {
    id: 'item_4',
    name: 'Elegant Evening Top',
    images: ['https://picsum.photos/seed/clothing4a/400/500.png'],
    hint: 'evening top',
    message: "This top has such an elegant and sophisticated vibe. It would look stunning on you for a night out.",
    link: '#'
  },
];

type ClothingItem = typeof clothingItems[0];

export function ClothingSharer() {
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const { toast } = useToast();

  const handleShare = async (item: ClothingItem) => {
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}/gifts/wardrobe?choice=${item.id}`;
    const shareText = `Hey! I really like this one: ${item.name}. What do you think?`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Clothing Choice!',
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
        // Fallback to clipboard if sharing fails (e.g., permission denied)
        navigator.clipboard.writeText(shareText + `\nSee it here: ${shareUrl}`);
        toast({
          title: "Copied to Clipboard!",
          description: "Sharing failed, so I've copied the message for you to paste.",
        });
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareText + `\nSee it here: ${shareUrl}`);
      toast({
        title: "Copied to Clipboard!",
        description: "The message has been copied. Just paste it in your chat!",
      });
    }
    setSelectedItem(null);
  };

  return (
    <>
      <div className="w-full">
        <div className="p-6 text-center">
          <h3 className="text-2xl font-headline">Your Style, Your Choice</h3>
          <p className="text-muted-foreground font-body mt-2">A few things I thought you might love. Click on any item to see it closer, and if you find one that steals your heart, share it! Because whatever you fall for, is yours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {clothingItems.map(item => (
            <Card 
              key={item.id} 
              className="overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:scale-105"
              onClick={() => setSelectedItem(item)}
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {item.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-0 aspect-[4/5] relative">
                        <Image src={src} alt={`${item.name} - view ${index + 1}`} fill className="object-cover" data-ai-hint={item.hint} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {item.images.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute left-4" />
                    <CarouselNext className="absolute right-4" />
                  </>
                )}
              </Carousel>
              <div className="p-4 text-center text-md font-body justify-center items-center">
                <p className="font-headline text-xl">{item.name}</p>
                 <p className="text-sm text-muted-foreground mt-1">Click to see more & share!</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(isOpen) => !isOpen && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{selectedItem.name}</DialogTitle>
                <DialogDescription>
                  {selectedItem.message}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                 <p className="text-sm text-center text-muted-foreground">Click the button below to share this with someone special!</p>
              </div>
              <DialogFooter className="sm:justify-center">
                 <Button type="button" size="lg" onClick={() => handleShare(selectedItem)}>
                    <Share2 className="mr-2 h-4 w-4" /> Share Your Favorite
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
