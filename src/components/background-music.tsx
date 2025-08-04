
"use client";

import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Music, Music2 } from 'lucide-react';
import { useMusic } from '@/context/MusicContext';

export function BackgroundMusic({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, togglePlay, isInitialized } = useMusic();

  // Effect to control play/pause based on global state
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement || !isInitialized) return;

    if (isPlaying) {
      audioElement.play().catch(error => {
        // This can happen if the user hasn't interacted with the page yet.
        console.log("Audio play prevented: ", error);
      });
    } else {
      audioElement.pause();
    }
  }, [isPlaying, isInitialized, src]);
  
  // Effect to handle the initial user interaction for autoplay
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.volume = 0.3; // Set a default volume

    const handleFirstInteraction = () => {
        if(isPlaying && audioElement.paused) {
            audioElement.play().catch(e => console.error("Could not play audio on interaction", e));
        }
    };
    
    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [isPlaying]);


  if (!isInitialized) {
    return null; // Don't render the button until the state is loaded from localStorage
  }

  return (
    <>
      {/* The key ensures React replaces the audio element when the src changes */}
      <audio ref={audioRef} src={src} loop key={src} />
      <div className="fixed bottom-4 right-4 z-50">
          <Button onClick={togglePlay} variant="outline" size="icon" className="rounded-full shadow-lg">
            {isPlaying ? <Music /> : <Music2 />}
            <span className="sr-only">Toggle Music</span>
          </Button>
      </div>
    </>
  );
}
