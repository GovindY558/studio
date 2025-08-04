
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkle } from 'lucide-react';

const SparkleInstance = ({ x, y, id }) => {
  // Random values for more dynamic animations
  const duration = Math.random() * 0.6 + 0.4;
  const initialScale = Math.random() * 0.5 + 0.5;
  const finalY = y - (Math.random() * 30 + 20);
  const finalX = x + (Math.random() * 40 - 20);
  const rotation = Math.random() * 360;
  
  return (
    <motion.div
      key={id}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      initial={{ scale: 0, opacity: 1, rotate: 0 }}
      animate={{ 
          x: finalX, 
          y: finalY, 
          scale: initialScale,
          rotate: rotation,
          opacity: [1, 0.8, 0] 
      }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration, ease: 'easeOut' }}
    >
        <Sparkle 
            className="w-5 h-5 text-primary fill-primary/70"
            style={{
                filter: `blur(1px)`
            }}
        />
    </motion.div>
  );
};


export function SparkleCursor() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e) => {
      // Limit sparkle generation to avoid performance issues
      if (sparkleId % 3 !== 0) {
        sparkleId++;
        return;
      }
      
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setSparkles((prevSparkles) => {
        const newSparkles = [...prevSparkles, newSparkle];
        // Remove the oldest sparkle if the array gets too long
        if (newSparkles.length > 20) {
          return newSparkles.slice(newSparkles.length - 20);
        }
        return newSparkles;
      });
      sparkleId++;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence>
      {sparkles.map(({ id, x, y }) => (
        <SparkleInstance key={id} id={id} x={x} y={y} />
      ))}
    </AnimatePresence>
  );
}
