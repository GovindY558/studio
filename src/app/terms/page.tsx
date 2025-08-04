import { PageHeader } from '@/components/page-header';
import { PageFooter } from '@/components/page-footer';
import { StorySection } from '@/components/story-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ChevronsRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="Terms & Conditions of Love">
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-center font-body text-muted-foreground">Binding Agreement for Ayushi</CardTitle>
                </CardHeader>
                <CardContent className="p-8 font-body text-lg space-y-6 max-w-3xl mx-auto">
                    <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 1: On Being Fabulous.</strong> The recipient, Ayushi, hereby agrees to continue being her amazing, wonderful, and brilliant self. This clause is non-negotiable.</p>
                    </div>
                     <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 2: The Right to Gifts.</strong> The recipient has an inalienable right to all gifts presented herein. It has been determined by the highest authority (my heart) that she unequivocally deserves them.</p>
                    </div>
                     <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 3: Delivery & Fulfillment.</strong> All physical items mentioned shall be officially and ceremoniously handed over upon the recipient's arrival in Pune. This is to ensure maximum joy and a mandatory welcome hug.</p>
                    </div>
                     <div className="flex items-start gap-4">
                        <ChevronsRight className="w-8 h-8 text-primary mt-1 shrink-0"/>
                        <p><strong className="font-semibold text-foreground">Clause 4: The Smile Mandate.</strong> The recipient is contractually obligated to smile, feel loved, and have the happiest of birthdays. Failure to comply will result in an immediate surplus of cuddles and favorite-food offerings.</p>
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
