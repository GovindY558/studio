
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
    id: 'zara_1',
    name: 'TRF WIDE-LEG HIGH-WAIST FULL-LENGTH JEANS',
    images: ['/gifts/wardrobe/jeansone-1.jpg', '/gifts/wardrobe/jeansone-2.jpg'],
    hint: 'WIDE-LEG HIGH-WAIST FULL-LENGTH JEANS',
    message: "Jeans that stay great even after a thousand washes—thought these wide‑legs would be a forever staple for you.",
    link: 'https://www.zara.com/in/en/trf-wide-leg-high-waist-full-length-jeans-p06045224.html?v1=480810171'
  },
  {
    id: 'zara_2',
    name: 'TRF MID-WAIST WIDE-LEG JEANS',
    images: ['/gifts/wardrobe/jeanstwo-1.jpg', '/gifts/wardrobe/jeanstwo-2.jpg'],
    hint: 'TRF MID-WAIST WIDE-LEG JEANS',
    message: "The mid‑waist, wide‑leg style is so you—classic, comfy, and looks newer than ever even after a wash.",
    link: 'https://www.zara.com/in/en/trf-mid-waist-wide-leg-jeans-p05359024.html?v1=480810175'
  },
  {
    id: 'zara_3',
    name: 'TRF WIDE-LEG HIGH-WAIST JEANS',
    images: ['/gifts/wardrobe/jeansthree-1.jpg', '/gifts/wardrobe/jeansthree-2.jpg'],
    hint: 'TRF WIDE-LEG HIGH-WAIST JEANS',
    message: "This style felt so artistic—thought it&apos;d match your creative vibe, even day‑to‑day styling.",
    link: 'https://www.zara.com/in/en/trf-wide-leg-high-waist-jeans-p05575029.html?v1=463549555'
  },
  {
    id: 'zara_4',
    name: 'RUSTIC COTTON T-SHIRT',
    images: ['/gifts/wardrobe/tshirtone-1.jpg'],
    hint: 'RUSTIC COTTON T-SHIRT',
    message: "I remembered you choosing some cute T‑shirts at Westside; thought this had your style written all over it.",
    link: 'https://www.zara.com/in/en/rustic-cotton-t-shirt-p01165444.html?v1=454393254'
  },
  {
    id: 'zara_5',
    name: 'TPLEATED ZIP T-SHIRT',
    images: ['/gifts/wardrobe/tshirttwo-1.jpg', '/gifts/wardrobe/tshirttwo-2.jpg'],
    hint: 'TPLEATED ZIP T-SHIRT',
    message: "This T‑shirt felt like the vibe from Westside—the colors and cut reminded me of what you'd pick.",
    link: 'https://www.zara.com/in/en/pleated-zip-t-shirt-p03253802.html?v1=455203389'
  },
  {
    id: 'zara_6',
    name: 'RUFFLE SKORT',
    images: ['/gifts/wardrobe/skirtone-1.jpg'],
    hint: 'RUFFLE SKORT',
    message: "This skort made me think of your playful side—hope you'd love the choice I made for you.",
    link: 'https://www.zara.com/in/en/ruffle-skort-p04764500.html?v1=468888628'
  },
  {
    id: 'zara_7',
    name: 'HIGH-WAIST CURVED DENIM SHORTS',
    images: ['/gifts/wardrobe/shortsone-1.jpg', '/gifts/wardrobe/shortsone-2.jpg'],
    hint: 'HIGH-WAIST CURVED DENIM SHORTS',
    message: "I know you&apos;ve been on the lookout for good shorts—these caught my eye and seemed just right for you.",
    link: 'https://www.zara.com/in/en/high-waist-curved-denim-shorts-p03607002.html?v1=466558679'
  },
  {
    id: 'zara_8',
    name: 'HIGH-WAIST CROSSOVER WAIST TRF MOM FIT DENIM BERMUDA SHORTS',
    images: ['/gifts/wardrobe/shortstwo-1.jpg', '/gifts/wardrobe/shortstwo-2.jpg'],
    hint: 'HIGH-WAIST CROSSOVER WAIST TRF MOM FIT DENIM BERMUDA SHORTS',
    message: "Since you&apos;ve been needing shorts for so long, I thought these could be your next favorite pair—it felt like they were meant for you.",
    link: 'https://www.zara.com/in/en/high-waist-crossover-waist-trf-mom-fit-denim-bermuda-shorts-p04060006.html?v1=452696927'
  },
  {
    id: 'zara_9',
    name: 'HALTER GORED SHORT DRESS',
    images: ['/gifts/wardrobe/dressone-1.jpg', '/gifts/wardrobe/dressone-2.jpg'],
    hint: 'HALTER GORED SHORT DRESS',
    message: "This pink dress made me think of how beautiful you&apos;d look in it—just had to show you.",
    link: 'https://www.zara.com/in/en/halter-gored-short-dress-p04661379.html?v1=456207856'
  },
  {
    id: 'zara_10',
    name: 'TRF MID-WAIST WIDE-LEG JEANS',
    images: ['/gifts/wardrobe/topone-1.jpg', '/gifts/wardrobe/topone-2.jpg'],
    hint: 'TRF MID-WAIST WIDE-LEG JEANS',
    message: "This linen blend top feels like your taste—I just thought you'd love what I picked out for you.",
    link: 'https://www.zara.com/in/en/crossover-linen-blend-top-p08026709.html?v1=466813843'
  }
]
;

type ClothingItem = typeof clothingItems[0];

export function ClothingSharer() {
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const { toast } = useToast();

  const handleShare = async (item: ClothingItem) => {
    // Use the current window's location for the base URL.
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}/gifts/wardrobe?choice=${item.id}`;
    const shareText = `Hey Yashraj! I really like this: ${item.name}. ${item.link}`;
    
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
          <p className="text-muted-foreground font-body mt-2">I've picked out a few things I thought you might love. Click on any item to see it closer, and if you find one that steals your heart, share it with me; because whatever you fall for, is yours.</p>
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
