/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect trailing slashes
  trailingSlash: false,

  // Security headers
  async headers() {
    // Content Security Policy - allows necessary external resources
    const cspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://analytics.ahrefs.com https://www.youtube.com https://s.ytimg.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://cal.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.ahrefs.com https://www.facebook.com https://connect.facebook.net https://*.supabase.co",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
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
