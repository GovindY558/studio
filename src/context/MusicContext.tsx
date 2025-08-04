"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  isInitialized: boolean;
  showEnableDialog: boolean;
  handleEnableMusic: () => void;
  handleDismissDialog: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showEnableDialog, setShowEnableDialog] = useState(false);

  useEffect(() => {
    try {
      const storedIsPlaying = localStorage.getItem('musicIsPlaying');
      if (storedIsPlaying !== null) {
        setIsPlaying(JSON.parse(storedIsPlaying));
      } else {
        // Only show the dialog if the setting has never been stored
        setShowEnableDialog(true);
      }
    } catch (error) {
        console.error("Could not access localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  const persistState = (newIsPlaying: boolean) => {
    setIsPlaying(newIsPlaying);
    try {
       localStorage.setItem('musicIsPlaying', JSON.stringify(newIsPlaying));
    } catch(error) {
        console.error("Could not save music state to localStorage", error);
    }
  }

  const togglePlay = useCallback(() => {
    persistState(!isPlaying);
  }, [isPlaying]);

  const handleEnableMusic = () => {
    persistState(true);
    setShowEnableDialog(false);
  };
  
  const handleDismissDialog = () => {
    // We still set a value in localStorage so we don't ask again.
    persistState(false);
    setShowEnableDialog(false);
  };


  const value = { 
    isPlaying, 
    togglePlay, 
    isInitialized, 
    showEnableDialog, 
    handleEnableMusic,
    handleDismissDialog
  };

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
