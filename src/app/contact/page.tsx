import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Phone, MessageCircle, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="Contact Me">
            <div className="max-w-3xl mx-auto text-center font-body text-lg mb-12">
                <p>Need to reach me? Here are the best ways to get a guaranteed, instant reply.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                        <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                            <Heart className="w-10 h-10 text-primary"/>
                        </div>
                        <CardTitle className="font-headline text-2xl pt-4">A Simple "I Miss You"</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>The most effective method. Guaranteed to make my heart skip a beat. Service available 24/7.</CardDescription>
                    </CardContent>
                </Card>
                 <Card className="text-center bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                        <div className="mx-auto bg-secondary/20 p-4 rounded-full w-fit">
                            <MessageCircle className="w-10 h-10 text-secondary"/>
                        </div>
                        <CardTitle className="font-headline text-2xl pt-4">A Random Funny Meme</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>Send a meme that reminds you of us. Response will be delivered in the form of excessive laugh emojis.</CardDescription>
                    </CardContent>
                </Card>
                 <Card className="text-center bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                        <div className="mx-auto bg-accent/20 p-4 rounded-full w-fit">
                            <Phone className="w-10 h-10 text-accent"/>
                        </div>
                        <CardTitle className="font-headline text-2xl pt-4">An Unprompted Phone Call</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>Just to hear your voice. The perfect way to brighten my day, with no agenda required.</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
