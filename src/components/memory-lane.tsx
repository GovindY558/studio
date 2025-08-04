"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const memories = [
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754337228441-rlv177.PNG",
    alt: "alt caption",
    caption: "Tumhe Jo Maine Dekha Moment",
    date: "3 May 2023",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339028431-jn1bih.jpeg",
    alt: "alt caption",
    caption: "First Flower of My Life",
    date: "5 May 2023 ~ First Date",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339118094-5q9yhh.PNG",
    alt: "alt caption",
    caption: "The Hardest Bye of my Life",
    date: "7 May 2023 ~ I am so gratefull for the universe tum mujhe mili",
    hint: ""
  },
  {
    src: " https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339140135-or8pgi.jpeg",
    alt: "alt caption",
    caption: "Kind of Unforgettable Night.. ",
    date: "1 Aug 2023 ",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339254508-6299n.jpeg",
    alt: "alt caption",
    caption: "Can't Belive now we are celebrating 3rd",
    date: "Tumhara Pehla Bday Sath main ",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339213214-hd8wj.png",
    alt: "alt caption",
    caption: "That Night ",
    date: "6 Aug 2023 ",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339182053-6t1a2c.jpeg",
    alt: "alt caption",
    caption: "Our Fav Place in Hostel ",
    date: "14 Aug 2023 ",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339280203-vqn5ut.JPG",
    alt: "alt caption",
    caption: "First Official Date ",
    date: "15 Aug 2023 ",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339298241-12ip9.jpg",
    alt: "alt caption",
    caption: "I Love You Ayushii",
    date: "27 Aug 2023",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339324836-26yei.jpeg",
    alt: "alt caption",
    caption: "Saree madhe tu khup God Distest..",
    date: "December ",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339335039-cvu91q.jpeg",
    alt: "alt caption",
    caption: "Months of Dates",
    date: "Favourite Fabreury ",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339750886-mjgudg.JPG",
    alt: "alt caption",
    caption: "You are So Hot and Gorges",
    date: "Forever",
    hint: ""
  },
  {
    src: "https://dc42isc7oti09.cloudfront.net/media/2025/08/1754339760881-2q0i0c.jpeg",
    alt: "alt caption",
    caption: "Happiest Birthday Ayushi",
    date: "i wish to see you soon...",
    hint: ""
  },
];

const TimelineItem = ({ memory, index }: { memory: typeof memories[0], index: number }) => {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isEven ? -100 : 100, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { duration: 0.4, delay: 0.3, ease: "easeOut" } 
    }
  }

  return (
    <motion.div 
        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
    >
      <div className="flex items-center justify-center w-10 md:w-12">
        <div className="hidden md:block w-px h-full bg-border -translate-x-px" />
        <motion.div variants={dotVariants} className="w-6 h-6 rounded-full bg-primary/80 border-4 border-card z-10" />
        <div className="hidden md:block w-px h-full bg-border translate-x-px" />
      </div>

      <motion.div variants={cardVariants} className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)]">
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="aspect-[4/3] rounded-md overflow-hidden relative">
            <Image
              src={memory.src}
              alt={memory.alt}
              fill
              className="object-cover grayscale hover:grayscale-0 filter saturate-50 hover:saturate-100 transition-all duration-500 ease-in-out"
              data-ai-hint={memory.hint}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-3 text-left">
            <p className="font-headline text-xl text-foreground">{memory.caption}</p>
            <p className="font-body text-sm text-muted-foreground">{memory.date}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function MemoryLane() {
  return (
    <div className="relative w-full max-w-sm md:max-w-4xl mx-auto py-8">
      <div className="absolute top-0 bottom-0 left-5 md:left-1/2 w-1.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="space-y-12">
        {memories.map((memory, index) => (
          <TimelineItem key={index} memory={memory} index={index} />
        ))}
      </div>
    </div>
  );
}
