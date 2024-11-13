import DepopCalculator from "@/components/DepopCalculator";
import AboutSection from "@/components/sections/AboutSection";
import FeeStructure from "@/components/sections/FeeStructure";
import FAQ from "@/components/sections/FAQ";
import AdBanner from "@/components/ads/AdBanner";
import CalculatorIntro from "@/components/sections/CalculatorIntro";
import { jsonLd } from './metadata';
import { Metadata } from 'next';
import { mainPageFaqs } from './data/faq-data';

export const metadata: Metadata = {
  other: {
    'application/ld+json': [
      JSON.stringify(jsonLd.calculator),
      JSON.stringify(jsonLd.faq)
    ]
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Free Depop Calculator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Free calculator to estimate Depop fees, profits, and shipping costs instantly across multiple currencies
        </p>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <DepopCalculator />

      </section>

      {/* Ad Banner */}
      <AdBanner className="py-6" />

      {/* About Section */}
      <AboutSection />
      
      {/* Fee Structure */}
      <FeeStructure />

      {/* Second Ad Banner */}
      <AdBanner className="py-6" />

      {/* FAQ Section */}
      <FAQ 
        title={mainPageFaqs.title}
        description={mainPageFaqs.description}
        faqs={mainPageFaqs.faqs}
      />
      <CalculatorIntro/>
    </main>
  );
}
