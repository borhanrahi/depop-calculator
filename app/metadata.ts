export const siteConfig = {
  url: 'https://depop-calculator.vercel.app',
  name: "Depop Calculator",
  description: "Free Depop calculator to estimate fees, profits, and shipping costs. Updated for 2024 with accurate fee calculations, multi-currency support, and detailed profit breakdowns for Depop sellers worldwide.",
  keywords: [
    "depop calculator",
    "depop fee calculator 2024",
    "depop fees calculator",
    "depop profit calculator",
    "depop shipping calculator",
    "depop seller calculator",
    "depop payment calculator",
    "depop sales calculator"
  ]
};

export const jsonLd = {
  calculator: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Depop Calculator",
    "applicationCategory": "BusinessApplication",
    "description": "Free Depop calculator to estimate fees, profits, and shipping costs. Most accurate Depop fee calculator updated for 2024.",
    "keywords": "depop calculator, depop fee calculator 2024, depop fees calculator, depop profit calculator",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate Depop fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses Depop's standard fees: 10% platform fee plus payment processing fees (3.3% + $0.45 for Depop Payments)."
        }
      },
      {
        "@type": "Question",
        "name": "Is Depop free to sell?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Listing on Depop is free, but there's a 10% fee on sales plus payment processing fees."
        }
      }
    ]
  }
};
