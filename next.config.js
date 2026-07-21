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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://connect.facebook.net https://analytics.ahrefs.com https://www.youtube.com https://s.ytimg.com https://platform.twitter.com https://cdn.syndication.twimg.com https://assets.calendly.com https://assets.apollo.io https://*.clarity.ms https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://calendly.com https://platform.twitter.com https://syndication.twitter.com https://www.facebook.com",
      "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://ad.doubleclick.net https://googleads.g.doubleclick.net https://analytics.ahrefs.com https://www.facebook.com https://connect.facebook.net https://*.supabase.co https://syndication.twitter.com https://accounts.dooza.ai https://calendly.com https://assets.apollo.io https://*.apollo.io https://*.clarity.ms https://cloudflareinsights.com",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://www.facebook.com",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');

    // Relaxed CSP for /voice/* demo pages only: the embedded voice widget
    // loads its script from unpkg and streams audio over the ElevenLabs
    // websocket, and needs microphone access. Kept off the rest of the site.
    const voiceCspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' blob: https://unpkg.com https://*.elevenlabs.io",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.elevenlabs.io wss://*.elevenlabs.io",
      "media-src 'self' blob: https://*.elevenlabs.io",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ');

    return [
      {
        // Everything except /voice/* keeps the strict site-wide policy
        source: '/:path((?!voice).*)',
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
      {
        source: '/voice/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: voiceCspHeader,
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
            value: 'camera=(), microphone=(self), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // Clean URLs for the static voice demo pages in public/voice
  async rewrites() {
    return [
      {
        source: '/voice/:slug',
        destination: '/voice/:slug/index.html',
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/workflow',
        destination: '/agents',
        permanent: true,
      },
      {
        source: '/studio',
        destination: '/workforce',
        permanent: true,
      },
      {
        source: '/agent-builder',
        destination: '/workforce',
        permanent: true,
      },
      {
        source: '/deployment',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/better-than-marblism',
        destination: '/marblism-alternatives',
        permanent: true,
      },
      {
        source: '/blog/better-than-sintra-ai',
        destination: '/sintra-alternatives',
        permanent: true,
      },
      {
        source: '/blog/better-than-sintra-ai-agents',
        destination: '/sintra-alternatives',
        permanent: true,
      },
      {
        source: '/blog/how-to-automate-your-business-with-ai',
        destination: '/blog/automate-business-processes',
        permanent: true,
      },
      {
        source: '/blog/how-much-does-an-ai-employee-cost',
        destination: '/blog/ai-staffing',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
