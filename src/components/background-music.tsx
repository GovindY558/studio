
"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Music, Music2 } from 'lucide-react';

export function BackgroundMusic({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to play audio, handling browser autoplay policies
  const playAudio = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay was prevented.
        console.log("Autoplay prevented. User interaction needed.");
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      playAudio();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set a default volume
    }

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };


  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <div className="fixed bottom-4 right-4 z-50">
          <Button onClick={togglePlayPause} variant="outline" size="icon" className="rounded-full shadow-lg">
            {isPlaying ? <Music /> : <Music2 />}
            <span className="sr-only">Toggle Music</span>
          </Button>
      </div>
    </>
  );
}
