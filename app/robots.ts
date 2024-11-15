import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/calculator',
          '/blog',
          '/about',
          '/privacy',
          '/terms',
          '/contact'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/*.js$'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 2
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2
      }
    ],
    sitemap: 'https://depopcalculator.top/sitemap.xml',
    host: 'https://depopcalculator.top'
  }
} 