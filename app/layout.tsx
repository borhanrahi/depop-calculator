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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Depop Calculator | Free Fee & Profit Calculator 2024",
    template: "%s | Depop Calculator"
  },
  description: siteConfig.description,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Depop Calculator - Most Accurate Fee Calculator 2024",
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: "Depop Calculator - Free Fee Calculator 2024",
    description: siteConfig.description
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
