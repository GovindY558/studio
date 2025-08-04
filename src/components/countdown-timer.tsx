
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
}

const timeUnitVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
};

function TimeUnit({ value, label }: { value: string, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-20 h-24 bg-primary/10 rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
                <motion.div
                    key={value}
                    variants={timeUnitVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute text-5xl font-headline text-primary"
                >
                    {value}
                </motion.div>
            </div>
            <span className="mt-2 font-body text-sm text-muted-foreground tracking-widest uppercase">{label}</span>
        </div>
    )
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00', hours: '00', minutes: '00', seconds: '00'
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
        };
      }
      
      return newTimeLeft;
    };
    
    // Set initial value
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
