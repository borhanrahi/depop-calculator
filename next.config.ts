import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
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
};

export default nextConfig;
