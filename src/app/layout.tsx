import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { MusicProvider } from '@/context/MusicContext';
import { EnableMusicDialog } from '@/components/enable-music-dialog';
import { SparkleCursor } from '@/components/sparkle-cursor';

export const metadata: Metadata = {
  title: 'Celebration Theme',
  description: 'A special theme for a special occasion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <MusicProvider>
          <SparkleCursor />
          {children}
          <EnableMusicDialog />
        </MusicProvider>
        <Toaster />
      </body>
    </html>
  );
}
