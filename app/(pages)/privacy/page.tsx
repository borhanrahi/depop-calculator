import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Last Updated: {new Date().toLocaleDateString()}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>At Depop Fee Calculator, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
            <p>We do not collect any personal information through the Depop Fee Calculator. All calculations are performed client-side, and no data is stored or transmitted to our servers.</p>
            <p>However, we may collect anonymous usage data to improve our service, including:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and features used</li>
              <li>Time and date of visits</li>
            </ul>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Cookies</h2>
            <p>We use first-party cookies to enhance your experience on our website. These cookies are used to:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Remember your preferences</li>
              <li>Provide analytics about site usage</li>
              <li>Improve the overall user experience</li>
            </ul>
            <p>You can control cookie preferences through your browser settings. For more information about cookies, visit aboutcookies.org.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Third-Party Services</h2>
            <p>We may use third-party services, such as Google Analytics, to help us understand how our calculator is used. These services may collect information sent by your browser as part of a web page request, such as cookies or your IP address.</p>
            <p>We do not have control over how these third parties use your information. We encourage you to review their privacy policies.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
            <p>We implement reasonable security measures to protect against unauthorized access or alteration of any information we might inadvertently collect. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Children&apos;s Privacy</h2>
            <p>Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to remove such information.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;last updated&rdquo; date at the top of this page.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes.</p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@depopcalculator.com or through our Contact page.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}