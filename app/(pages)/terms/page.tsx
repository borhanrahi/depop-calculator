import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Last Updated: {new Date().toLocaleDateString()}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>Welcome to Depop Fee Calculator. By using our service, you agree to these Terms & Conditions. Please read them carefully.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Depop Fee Calculator, you agree to be bound by these Terms & Conditions. If you disagree with any part of the terms, you may not use our service.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of the Calculator</h2>
            <p>The Depop Fee Calculator is provided for informational purposes only. While we strive for accuracy, we cannot guarantee that the calculations are error-free or up-to-date with Depo&apos;s latest fee structure. Users should verify all information independently.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. No Warranty</h2>
            <p>The calculator is provided &ldquo;as is&rdquo; without any warranties, expressed or implied. We do not warrant that the calculator will be error-free, uninterrupted, or free from harmful components.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
            <p>We shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from your use of the calculator or any decisions made based on its calculations.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms & Conditions at any time without prior notice. Your continued use of the calculator after changes are posted constitutes your acceptance of the modified terms.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Intellectual Property</h2>
            <p>All content and functionality on this website, including text, graphics, logos, and software, is the property of Depop Fee Calculator and is protected by international copyright laws.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Governing Law</h2>
            <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
            <p>If you have any questions about these Terms & Conditions, please contact us through our Contact page or at legal@depopcalculator.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}