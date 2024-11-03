"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/JsonLd";

const faqs = [
  {
    question: "How do you calculate Depop fees?",
    answer: "Our calculator uses Depop's standard fees to give accurate results. Depop charges a 10% fee on the sale price of each item. Additionally, if you use Depop Payments, there's a processing fee of 3.3% + $0.45. Simply input your sale price, and our Depop Fee Calculator will handle the calculations for you."
  },
  {
    question: "How much does Depop take from $100?",
    answer: "If you sell an item for $100 on Depop, the platform will take a 10% Depop fee ($10). If you use Depop Payments, there will also be a processing fee of 3.3% ($3.30) + $0.45. So, from a $100 sale, Depop's total fees would amount to $13.75 if Depop Payments is used."
  },
  {
    question: "Is Depop free to sell?",
    answer: "Listing on Depop is free, but Depop charges a 10% fee on each sale. There's also a payment processing fee if you use Depop Payments, which varies depending on the currency and transaction method."
  },
  {
    question: "Do Depop still take 10%?",
    answer: "Yes, Depop's 10% fee on sales is still active as of 2024. This fee is applied to the total sale price of each item, excluding shipping."
  },
  {
    question: "Is Depop shipping free?",
    answer: "Shipping on Depop is not free by default. You can choose to offer free shipping to buyers, but you'll cover the shipping cost. Depop offers an option to use their shipping service, with rates depending on the package size and weight."
  },
  {
    question: "Does Depop have hidden fees?",
    answer: "No, Depop's fees are transparent. The main fees include the 10% Depop fee and, if using Depop Payments, the 3.3% + $0.45 processing fee. Additional optional costs, like boosted listings, will be displayed in our calculator to give you a clear picture of your earnings."
  }
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      
      <section 
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto"
        aria-labelledby="faq-heading"
      >
        <h2 
          id="faq-heading" 
          className="text-3xl font-bold text-center mb-4"
        >
          Depop Seller Fees and Charges FAQ
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Comprehensive guide about Depop fees, PayPal charges, shipping costs, and selling expenses for Depop sellers
        </p>

        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={`depop-faq-${index}`} 
                value={`item-${index}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-medium py-4">
                  <h3 className="text-lg">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  <p className="leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
