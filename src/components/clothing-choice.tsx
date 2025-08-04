"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { RevealCard } from './reveal-card';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const clothingItems = [
  { id: 'zara_tshirt', name: 'Zara Graphic T-Shirt', src: 'https://placehold.co/400x500', hint: 'graphic t-shirt' },
  { id: 'hm_skirt', name: 'H&M Pleated Skirt', src: 'https://placehold.co/400x500', hint: 'pleated skirt' },
  { id: 'zara_dress', name: 'Zara Floral Dress', src: 'https://placehold.co/400x500', hint: 'floral dress' },
  { id: 'hm_jeans', name: 'H&M Mom Jeans', src: 'https://placehold.co/400x500', hint: 'mom jeans' },
];

export function ClothingChoice() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSelect = (itemId: string) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      }
      if (prev.length < 2) {
        return [...prev, itemId];
      }
      toast({
        title: "Limit Reached",
        description: "You can only choose up to two items, my love!",
        variant: "destructive",
      });
      return prev;
    });
  };

  const handleSubmit = () => {
     toast({
        title: "Choices Sent!",
        description: "I've got your preferences. Can't wait to see you in them!",
      });
  }

  return (
    <RevealCard
      coverContent={<p className="text-lg">Something stylish, just for you. Pick any two you love!</p>}
      contentClassName="!p-0"
    >
      <div className="w-full">
        <div className="p-6 text-center">
          <h3 className="text-2xl font-headline">Your Style, Your Choice</h3>
          <p className="text-muted-foreground font-body mt-2">Pick any two, and they're yours!</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {clothingItems.map(item => (
            <Card 
              key={item.id} 
              className={cn(
                "overflow-hidden transition-all duration-300 cursor-pointer",
                selectedItems.includes(item.id) ? 'ring-2 ring-primary scale-105 shadow-2xl' : 'ring-0 hover:scale-105 hover:shadow-xl'
              )}
              onClick={() => handleSelect(item.id)}
            >
              <CardContent className="p-0 aspect-[4/5] relative">
                <Image src={item.src} alt={item.name} fill className="object-cover" data-ai-hint={item.hint} />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full">
                  <Checkbox
                    id={item.id}
                    checked={selectedItems.includes(item.id)}
                    aria-label={`Select ${item.name}`}
                    disabled={selectedItems.length >= 2 && !selectedItems.includes(item.id)}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-3 text-center text-sm font-body justify-center h-16 items-center">
                <label htmlFor={item.id}>{item.name}</label>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="p-6 text-center">
          <Button onClick={handleSubmit} disabled={selectedItems.length === 0} size="lg">
            Confirm My Choices ({selectedItems.length}/2)
          </Button>
        </div>
      </div>
    </RevealCard>
  );
}
