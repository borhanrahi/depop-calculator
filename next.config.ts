import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    domains: ['depopcalculator.top'],
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: 'inline',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },
  // Add compression
  compress: true,
  // Add HTTP/2 Server Push
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]  // Or specify your allowed origins
    },
  },
  // Optimize third-party scripts
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
    ];
  },
  // Add webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize chunks
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: false,
          vendors: false,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          shared: {
            name: 'shared',
            enforce: true,
            reuseExistingChunk: true,
          }
        }
      };
    }
    return config;
  }
};

export default nextConfig;
