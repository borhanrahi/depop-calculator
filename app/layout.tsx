import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from './metadata';
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/NavBar";
import { ThemeProvider } from "@/components/providers/theme-provider"

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',  // Add font-display swap
  preload: true,    // Preload the font
  adjustFontFallback: true  // Automatically adjust the font fallback
});

export const metadata: Metadata = {
  title: "Depop Calculator | Free Depop Profit Calculator 2025",
  description: "Calculate Depop fees, profits, and shipping costs instantly with our free calculator. Updated for 2025 with accurate fee calculations and multi-currency support for sellers.",
  openGraph: {
    title: "Depop Calculator 2025",
    description: "Calculate Depop fees, profits, and shipping costs instantly with our free calculator. Updated for 2025 with accurate fee calculations and multi-currency support for sellers.",
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
    title: "Depop Calculator 2025",
    description: "Calculate Depop fees, profits, and shipping costs instantly with our free calculator. Updated for 2025 with accurate fee calculations and multi-currency support for sellers.",
    images: ["/opengraph-image"],
  },
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords,
  icons: {
    icon: '/favicon.png'
  },
  other: {
    'google-adsense-account': 'ca-pub-1047850381013366',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1047850381013366"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
