"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useMusic } from "@/context/MusicContext"
import { Volume2, VolumeX } from "lucide-react";

export function EnableMusicDialog() {
  const { showEnableDialog, handleEnableMusic, handleDismissDialog, isInitialized } = useMusic();

  if (!isInitialized) {
    return null;
  }

  return (
    <AlertDialog open={showEnableDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Volume2 className="w-6 h-6"/>
            Enhance Your Experience
          </AlertDialogTitle>
          <AlertDialogDescription>
            This website has custom background music for each page to make it special. Would you like to enable it for the best experience?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleDismissDialog}>
            <VolumeX className="mr-2"/>
            Maybe Later
            </AlertDialogCancel>
          <AlertDialogAction onClick={handleEnableMusic}>
            <Volume2 className="mr-2"/>
            Yes, play music!
            </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
