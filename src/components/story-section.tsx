import type { ReactNode } from 'react';

interface StorySectionProps {
  title: string;
  children: ReactNode;
}

export function StorySection({ title, children }: StorySectionProps) {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-headline text-primary mb-8 text-center">{title}</h2>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
