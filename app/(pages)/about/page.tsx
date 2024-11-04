import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Depop Fee Calculator</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Empowering Depop Sellers Since 2023</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>Welcome to Depop Fee Calculator, your trusted companion in navigating the world of online selling on Depop. Our mission is to empower sellers with accurate, up-to-date information to maximize their profits and grow their businesses.</p>

            <div className="my-8 flex justify-center">
              <Image 
                src="/calculator-preview.png" 
                alt="Depop Fee Calculator interface showing profit calculations" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg" 
              />
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Story</h2>
            <p>Founded in 2023, Depop Fee Calculator was born out of a need for a reliable, easy-to-use tool for Depop sellers. As sellers ourselves, we understood the challenges of calculating fees, shipping costs, and potential profits. We created this calculator to simplify the process and help sellers make informed decisions.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">What We Offer</h2>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Accurate Calculations:</strong> Our calculator takes into account all variables affecting your bottom line, including Depop&apos;s commission, payment processing fees, shipping costs, and more.</li>
              <li><strong>Multiple Currencies:</strong> We support calculations in USD, EUR, and GBP, making it easy for sellers across different regions to accurately estimate their profits.</li>
              <li><strong>Up-to-Date Information:</strong> We stay on top of Depop&apos;s fee changes and policy updates to ensure our calculator always provides the most current information.</li>
              <li><strong>User-Friendly Interface:</strong> Our intuitive design makes it easy for both new and experienced sellers to use our calculator effectively.</li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Commitment</h2>
            <p>At Depop Fee Calculator, we are committed to:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Providing accurate and reliable calculations</li>
              <li>Continuously improving our tool based on user feedback</li>
              <li>Offering free, accessible resources for all Depop sellers</li>
              <li>Maintaining transparency in our operations and updates</li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">Join Our Community</h2>
            <p>We believe in the power of community. Join thousands of other Depop sellers who use our calculator to boost their business. Follow us on social media for tips, updates, and to connect with fellow sellers:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Twitter: @DepopCalculator</li>
              <li>Instagram: @DepopCalculator</li>
              <li>Facebook: /DepopFeeCalculator</li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p>We&apos;re always here to help. If you have any questions, suggestions, or just want to say hello, don&apos;t hesitate to reach out to us at support@depopcalculator.com or through our Contact page.</p>

            <p className="mt-8 text-center font-semibold">Thank you for choosing Depop Fee Calculator. Here&apos;s to your success on Depop!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}