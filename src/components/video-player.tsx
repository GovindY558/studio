"use client";

import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  onClose: () => void;
}

export function VideoPlayer({ src, onClose }: VideoPlayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.button
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close video player"
      >
        <X className="w-10 h-10" />
      </motion.button>
      
      <motion.div
        initial={{ y: 50, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="aspect-video w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the video itself
      >
        <iframe
          src={src}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}
