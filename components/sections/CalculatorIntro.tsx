import { JsonLd } from "@/components/JsonLd";

export default function CalculatorIntro() {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Depop Fee Calculator 2024",
    "applicationCategory": "BusinessApplication",
    "description": "Free Depop calculator to estimate fees, profits, and expenses. Updated for 2024 with latest Depop fees and charges.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "keywords": "depop calculator, depop fee calculator 2024, depop fees calculator, depop profit calculator"
  };

  return (
    <>
      <JsonLd data={calculatorSchema} />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
        <div className="space-y-8">
          {/* Main Calculator Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Depop Fee Calculator 2024
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Looking to understand your profits and fees on Depop? Our <strong>Depop Fee Calculator</strong> is the perfect tool to quickly estimate your earnings after fees, shipping, and other costs. Whether you`&apos;re a regular Depop seller or just getting started, this calculator will help you maximize profits on each sale by clearly showing all associated costs.
            </p>
          </div>

          {/* How to Use Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              How to Use the Depop Fees Calculator
            </h3>
            <ul className="space-y-3 list-none">
              {[
                "Enter Sale Price: Input the price you plan to sell your item for.",
                "Select Shipping Options: Choose whether you're shipping with Depop or on your own.",
                "Add Item Cost: Include the original cost of your item to see your net profit.",
                "Check for Additional Fees: Select boosted listings or add taxes if applicable.",
                "View Results: Instantly see your revenue, net profit, and profit margin."
              ].map((step, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Profit Calculator Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Depop Profit Calculator
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For anyone aiming to make a profit on Depop, knowing your costs and fees is crucial. Use our <strong>Depop Profit Calculator</strong> to see your net earnings, profit margins, and item markup. Enter your sale price, shipping costs, and any additional fees to get a detailed breakdown of your earnings after all Depop fees are deducted.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our <strong>Depop Calculator</strong> is tailored for 2024, ensuring that the latest Depop fees and options are accounted for. Plan your sales better and increase your profits by knowing exactly what you`&apos;ll earn with each sale.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Why Use Our Depop Calculator?
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">✓ Updated with 2024 Depop fees</li>
              <li className="text-muted-foreground">✓ Accurate profit calculations</li>
              <li className="text-muted-foreground">✓ Includes all Depop and payment processing fees</li>
              <li className="text-muted-foreground">✓ Free to use</li>
              <li className="text-muted-foreground">✓ Instant results</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
