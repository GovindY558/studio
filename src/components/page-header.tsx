import { Heart } from 'lucide-react';

export function PageHeader() {
  return (
    <header className="py-6 bg-primary/20 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline text-primary-foreground/90 flex items-center justify-center gap-4">
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary fill-primary animate-pulse" />
          For Someone g
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary fill-primary animate-pulse" />
        </h1>
        <p className="mt-2 text-lg font-body text-primary-foreground/70">A celebration story just for you.</p>
      </div>
    </header>
  );
}
