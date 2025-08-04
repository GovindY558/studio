"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  isInitialized: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedIsPlaying = localStorage.getItem('musicIsPlaying');
      if (storedIsPlaying !== null) {
        setIsPlaying(JSON.parse(storedIsPlaying));
      }
    } catch (error) {
        console.error("Could not parse music state from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  const togglePlay = useCallback(() => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
     try {
        localStorage.setItem('musicIsPlaying', JSON.stringify(newIsPlaying));
     } catch(error) {
         console.error("Could not save music state to localStorage", error);
     }
  }, [isPlaying]);

  const value = { isPlaying, togglePlay, isInitialized };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
