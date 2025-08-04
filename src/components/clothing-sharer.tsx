
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
// 3. Add one or more images for each item in the `public` folder.
//    - The `images` array should contain the paths to these images, e.g., "/gifts/wardrobe/dress-1.png".
//    - Make sure the folder structure matches, e.g., public/gifts/wardrobe/
const clothingItems = [
  { 
    id: 'zara_dress', 
    name: 'Zara Floral Dress', 
    images: ['/gifts/wardrobe/dress-1.png', '/gifts/wardrobe/dress-2.png'], 
    hint: 'floral dress',
    message: "I saw this and immediately thought of you. I can just imagine how beautiful you'd look in it on one of our cafe dates. What do you think?"
  },
  { 
    id: 'hm_jeans', 
    name: 'H&M Mom Jeans', 
    images: ['/gifts/wardrobe/jeans-1.png'], 
    hint: 'mom jeans',
    message: "Something cute and comfy for our casual movie nights or just strolling through the park. Would this be your style?"
  },
  { 
    id: 'zara_tshirt', 
    name: 'Zara Graphic T-Shirt', 
    images: ['/gifts/wardrobe/tshirt-1.png'], 
    hint: 'graphic t-shirt',
    message: "This looked so cool and reminded me of your amazing artistic side. Let me know if you like it!"
   },
  { 
    id: 'hm_skirt', 
    name: 'H&M Pleated Skirt', 
    images: ['/gifts/wardrobe/skirt-1.png', '/gifts/wardrobe/skirt-2.png'], 
    hint: 'pleated skirt',
    message: "This one is just pure elegance, just like you. I think it would be perfect for a special dinner out. Send this to me if you agree!"
  },
];

type ClothingItem = typeof clothingItems[0];

export function ClothingSharer() {
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const { toast } = useToast();

  const handleShare = async (item: ClothingItem) => {
    // Use the current window's location for the base URL.
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}/gifts/wardrobe?choice=${item.id}`;
    const shareText = `Hey Yashraj! I really like this: ${item.name}. ${item.message}`;
    
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
          description: "Sharing failed, so I've copied the message. Just paste it in our chat!",
        });
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareText + `\nSee it here: ${shareUrl}`);
      toast({
        title: "Copied to Clipboard!",
        description: "The message has been copied. Just paste it in our chat!",
      });
    }
    setSelectedItem(null);
  };

  return (
    <>
      <div className="w-full">
        <div className="p-6 text-center">
          <h3 className="text-2xl font-headline">Your Style, Your Choice</h3>
          <p className="text-muted-foreground font-body mt-2">I've picked out a few things I thought you might love. Click on any item to see it closer, and if you adore it, share it with me! Any two you send me are yours.</p>
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
                 <p className="text-sm text-center text-muted-foreground">Click the button below to share this with me in our chat!</p>
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
