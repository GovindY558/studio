
"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { VideoPlayer } from '@/components/video-player';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import Image from 'next/image';



const videos = [
  {
    id: '2025',
    title: "This Year's Special",
    thumbnail: 'https://img.youtube.com/vi/s-JFXacky5k/maxresdefault.jpg',
    hint: 'love story',
    src: 'https://www.youtube.com/embed/s-JFXacky5k?autoplay=1',
  },
  {
    id: '2024',
    title: 'A Look Back',
    thumbnail: 'https://img.youtube.com/vi/6_HbCHvYwxY/maxresdefault.jpg',
    hint: ' montage',
    src: 'https://www.youtube.com/embed/6_HbCHvYwxY?autoplay=1',
  },
];

export default function VideoPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlay = (src: string) => {
    setActiveVideo(src);
  };

  const handleClose = () => {
    setActiveVideo(null);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">

      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Link href="/" passHref>
            <Button variant="outline">
              <ArrowLeft className="mr-2" /> Back to Main Page
            </Button>
          </Link>
        </div>

        <StorySection title="A Moving Picture Show">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 w-full">
            {videos.map((video, index) => (
              <div key={video.id} className="flex flex-col items-center">
                <h3 className="text-3xl font-headline text-center mb-4 text-primary-foreground/90">
                  {video.title}
                </h3>
                <div 
                  className="relative group w-full max-w-2xl aspect-video rounded-lg shadow-xl cursor-pointer overflow-hidden border-4 border-card"
                  onClick={() => handlePlay(video.src)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={`Thumbnail for ${video.title}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={video.hint}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </StorySection>
      </main>
      <PageFooter />

      {activeVideo && <VideoPlayer src={activeVideo} onClose={handleClose} />}
    </div>
  );
}
