import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ChevronsRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BackgroundMusic } from '@/components/background-music';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <BackgroundMusic src="/music-placeholder-7.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="The Terms & Conditions of This Gift">
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-center font-body text-muted-foreground">A Binding Agreement for the Recipient</CardTitle>
                </CardHeader>
                <CardContent className="p-8 font-body text-lg space-y-6 max-w-3xl mx-auto">
                    <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 1: On Being Fabulous.</strong> The recipient hereby agrees to continue being their amazing, wonderful, and brilliant self. This clause is non-negotiable and strictly enforced.</p>
                    </div>
                     <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 2: The Right to Gifts.</strong> The recipient has an inalienable right to all gifts presented herein. It has been determined by the highest authority (the heart) that they unequivocally deserve them.</p>
                    </div>
                     <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 3: Delivery & Fulfillment.</strong> All physical items mentioned shall be officially and ceremoniously handed over at a time and place of maximum joy and convenience.</p>
                    </div>
                     <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 4: The Smile Mandate.</strong> The recipient is contractually obligated to smile, feel appreciated, and have the happiest of celebrations. Failure to comply will result in an immediate surplus of compliments and favorite-food offerings.</p>
                    </div>
                     <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 5: Agreement Term.</strong> This agreement is effective immediately and shall remain in full force for a term no less than 'forever and always'.</p>
                    </div>
                </CardContent>
            </Card>
        </StorySection>

      </main>
      <PageFooter />
    </div>
  );
}
