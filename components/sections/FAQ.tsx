"use client";

import { jsonLd } from '@/app/metadata'
import { JsonLd } from '@/components/JsonLd'

export default function FAQ() {
  const faqs = jsonLd.faq.mainEntity;
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "headline": "Depop Calculator FAQ - Fees & Profit Calculations",
    "description": "Comprehensive answers about Depop fees, profit calculations, shipping costs, and payment processing for sellers in 2024.",
    "dateModified": new Date().toISOString(),
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.name,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.acceptedAnswer.text
      }
    }))
  };

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto"
      aria-labelledby="faq-heading"
    >
      <JsonLd data={faqSchema} />
      
      <div className="text-center mb-12">
        <h2 
          id="faq-heading"
          className="text-3xl font-bold mb-4 text-foreground"
        >
          Depop Calculator FAQ
        </h2>
        
        <p className="text-foreground/80 max-w-2xl mx-auto">
          Get answers to common questions about Depop fees, profit calculations, 
          and selling costs. Updated for 2024 with the latest fee structures and rates.
        </p>
      </div>

      <div 
        className="space-y-6"
        itemScope 
        itemType="https://schema.org/FAQPage"
      >
        {faqs.map((faq, index) => (
          <article 
            key={index}
            className="rounded-lg border bg-card text-card-foreground p-6 hover:shadow-md transition-shadow"
            itemScope 
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 
              className="text-lg font-semibold mb-3 text-foreground"
              itemProp="name"
            >
              {faq.name}
            </h3>
            <div 
              itemScope 
              itemProp="acceptedAnswer" 
              itemType="https://schema.org/Answer"
              className="prose prose-sm max-w-none"
            >
              <div 
                className="text-foreground/80 leading-relaxed"
                itemProp="text"
              >
                {faq.acceptedAnswer.text}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          About Our Depop Fee Calculator
        </h3>
        <p className="text-foreground/80 mb-4">
          Our calculator helps Depop sellers accurately estimate their profits and fees. 
          Whether you&apos;re selling clothes, accessories, or other items, understanding your 
          costs is crucial for a successful Depop business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-medium mb-2 text-foreground">Key Features:</h4>
            <ul className="list-disc list-inside text-foreground/80 space-y-1">
              <li>Real-time fee calculations</li>
              <li>Multi-currency support</li>
              <li>Shipping cost calculator</li>
              <li>Profit margin analysis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-foreground">Why Use Our Calculator:</h4>
            <ul className="list-disc list-inside text-foreground/80 space-y-1">
              <li>Updated for 2024</li>
              <li>Accurate fee structures</li>
              <li>Easy to use interface</li>
              <li>Free for all sellers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
