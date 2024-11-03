import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from './metadata';
import Footer from "@/components/Footer";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',  // Add font-display swap
  preload: true,    // Preload the font
  adjustFontFallback: true  // Automatically adjust the font fallback
});

export const metadata: Metadata = {
  title: "Depop Calculator | Free Fee & Profit Calculator 2024",
  description: "Calculate Depop fees, profits, and shipping costs instantly with our free calculator. Updated for 2024 with multi-currency support.",
  openGraph: {
    title: "Depop Calculator 2024",
    description: "Free calculator for Depop sellers to calculate fees and profits",
    url: siteConfig.url,
    siteName: "Depop Calculator",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Depop Calculator Preview"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Depop Calculator 2024",
    description: "Free calculator for Depop sellers to calculate fees and profits",
    images: ["/opengraph-image"],
  },
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords,
  icons: {
    icon: '/favicon.png'
  },
  // Add preconnect and dns-prefetch
  other: {
    link: [
      'preconnect https://fonts.googleapis.com',
      'dns-prefetch https://fonts.googleapis.com'
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    nocache: false,
    notranslate: false,
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Add preload for critical resources */}
        <link 
          rel="preload" 
          href="/favicon.png" 
          as="image"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
