import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
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
    }
  },
  optimizeFonts: true,
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
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'unload=()',
          },
        ],
      },
    ];
  },
  // Add webpack optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 10000,
          maxSize: 200000,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 20
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module: { context: string }) {
                const match = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                );
                return `vendors/${match?.[1]?.replace('@', '').replace(/[\\/]/, '_') || 'unknown'}`;
              },
              priority: 10,
              minChunks: 1,
              reuseExistingChunk: true
            }
          }
        },
        moduleIds: 'deterministic'
      };
    }
    return config;
  }
};

export default nextConfig;
