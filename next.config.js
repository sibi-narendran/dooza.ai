/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect trailing slashes
  trailingSlash: false,

  // Allow external image domains (dynamic blog images)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.outrank.so',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },

  // Security headers
  async headers() {
    // Content Security Policy - allows necessary external resources
    const cspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://analytics.ahrefs.com https://www.youtube.com https://s.ytimg.com https://platform.twitter.com https://cdn.syndication.twimg.com https://app.cal.com https://cal.com https://*.clarity.ms",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://cal.com https://app.cal.com https://platform.twitter.com https://syndication.twitter.com https://www.facebook.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.ahrefs.com https://www.facebook.com https://connect.facebook.net https://*.supabase.co https://syndication.twitter.com https://accounts.dooza.ai https://app.cal.com https://cal.com https://*.clarity.ms",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://www.facebook.com",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
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
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/agent-builder',
        destination: '/studio',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
