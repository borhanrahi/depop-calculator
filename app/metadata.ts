export const siteConfig = {
  url: 'https://depopcalculator.top',
  name: "Depop Calculator",
  description: "Free Depop calculator to estimate fees, profits, and shipping costs. Updated for 2024 with accurate fee calculations, multi-currency support, and detailed profit breakdowns for Depop sellers worldwide.",
  keywords: [
    "depop calculator",
    "depop fee calculator 2025",
    "depop fee calculator 2024",
    "Depop Profit Calculator",
    "Depop Fees Calculator",
    "Depop Shipping Costs",
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
    "description": "Free Depop Calculator helps sellers maximize earnings. Use our updated Depop Fee Calculator and Depop Profit Calculator to instantly estimate fees, profits, and costs for 2025.",
    "keywords": "depop calculator, depop fee calculator 2025, Depop Profit Calculator, Depop Fees Calculator, Depop Shipping Costs",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "headline": "Depop Calculator FAQ - Fees & Profit Calculations",
    "description": "Comprehensive answers about Depop fees, profit calculations, shipping costs, and payment processing for sellers in 2024.",
    "dateModified": "2024-09-01",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate Depop fees in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depop charges a 10% platform fee on the total amount (including shipping) plus payment processing fees of 3.3% + $0.45 when using Depop Payments. Our calculator automatically factors in all these fees to show your exact earnings."
        }
      },
      {
        "@type": "Question",
        "name": "What is the profit margin calculation for Depop sales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Profit margin is calculated by subtracting all costs (item cost, shipping, platform fees, and payment fees) from your sale price, then dividing by the sale price and multiplying by 100. Our calculator shows this automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Is Depop free to sell?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Listing on Depop is free, but there's a 10% fee on sales plus payment processing fees."
        }
      },
      {
        "@type": "Question",
        "name": "What are Depop's payment processing fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depop charges 3.3% + $0.45 for payment processing on each transaction when using Depop Payments."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate profit on Depop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate profit, subtract all fees (10% platform fee + 3.3% + $0.45 payment processing) and your costs (item cost + shipping) from the sale price."
        }
      },
      {
        "@type": "Question",
        "name": "Does Depop charge fees on shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Depop's 10% fee applies to both the item price and shipping cost."
        }
      }
    ]
  }
};
