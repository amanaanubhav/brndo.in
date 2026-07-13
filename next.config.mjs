/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow external images (Unsplash used in Reviews component)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn-uicons.flaticon.com",
              "font-src 'self' https://fonts.gstatic.com https://cdn-uicons.flaticon.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://*.google.com https://*.googleapis.com",
              "frame-src 'self' https://maps.google.com https://www.google.com https://www.youtube.com",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
