import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import CalEmbedLoader from '../components/CalEmbedLoader';
import ColdAdSignupLinkRewriter from '../components/ColdAdSignupLinkRewriter';

// Resource hints for external services - improves Core Web Vitals
const resourceHints = [
    { rel: 'preconnect', href: 'https://assets.calendly.com' },
    { rel: 'preconnect', href: 'https://calendly.com' },
    { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
    { rel: 'preconnect', href: 'https://connect.facebook.net' },
    { rel: 'preconnect', href: 'https://analytics.ahrefs.com' },
    { rel: 'preconnect', href: 'https://www.clarity.ms' },
    { rel: 'dns-prefetch', href: 'https://www.facebook.com' },
    { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
];

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://www.dooza.ai'),
  title: {
    default: 'Dooza | AI Employees That Never Sleep',
    template: '%s | Dooza',
  },
  description: 'Build, grow, and scale your business with a team of AI employees. Automate email, social media, lead generation, calls, and more.',
  keywords: ['AI employees', 'AI agents', 'business automation', 'AI for small business', 'email automation', 'social media AI', 'Sintra AI alternative', 'Marblism alternative'],
  authors: [{ name: 'Dooza Team' }],
  creator: 'Dooza',
  publisher: 'Dooza',
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
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dooza.ai',
    siteName: 'Dooza',
    title: 'Dooza | AI Employees That Never Sleep',
    description: 'Build, grow, and scale your business with a team of AI employees. Automate email, social media, lead generation, calls, and more.',
    images: [
      {
        url: 'https://www.dooza.ai/logo.png',
        width: 512,
        height: 512,
        alt: 'Dooza - AI Employees That Never Sleep',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sibinarendran',
    creator: '@sibinarendran',
    title: 'Dooza | AI Employees That Never Sleep',
    description: 'Build, grow, and scale your business with a team of AI employees.',
    images: ['https://www.dooza.ai/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dooza.ai',
    languages: {
      'en-US': 'https://www.dooza.ai',
      'x-default': 'https://www.dooza.ai',
    },
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#0d9488',
    'msapplication-TileColor': '#0d9488',
  },
};

// Analytics IDs from environment variables
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '777622852092389';
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-10872232955';
const AHREFS_KEY = process.env.NEXT_PUBLIC_AHREFS_KEY;
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta
          name="ahrefs-site-verification"
          content="d24e36e2dc624015052db7f13470711f13cf0638849a33c13e6498d800e1c07e"
        />
        {/* Resource hints for faster external resource loading */}
        {resourceHints.map((hint, index) => (
          <link key={index} rel={hint.rel} href={hint.href} />
        ))}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js-loaded')` }} />
        {/* Calendly widget — loads async, used by BookingModal and /book page */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            if (document.getElementById('calendly-widget-js')) return;
            var s = document.createElement('script');
            s.id = 'calendly-widget-js';
            s.src = 'https://assets.calendly.com/assets/external/widget.js';
            s.async = true;
            document.head.appendChild(s);
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = 'https://assets.calendly.com/assets/external/widget.css';
            document.head.appendChild(l);
          })();
        ` }} />
        {/* Critical inline CSS — loads instantly in HTML bytes, before any external file.
            Forces ALL content visible on mobile. Zero blank page possible. */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media(max-width:1023px){
            .hero-entrance,.hero-entrance-right{opacity:1!important;transform:none!important;animation:none!important}
            .scroll-reveal,.scroll-stagger,.reveal-child,.comparison-row{opacity:1!important;transform:none!important;animation:none!important}
          }
        `}} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        <ColdAdSignupLinkRewriter />
        <CalEmbedLoader />

        {/* Facebook Pixel */}
        {FB_PIXEL_ID && (
          <>
            <Script id="facebook-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* Google Analytics */}
        {GOOGLE_ADS_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('set', 'linker', {
                  domains: ['dooza.ai', 'www.dooza.ai', 'workforce.dooza.ai']
                });
                gtag('config', '${GOOGLE_ADS_ID}');
              `}
            </Script>
          </>
        )}

        {/* Ahrefs Analytics */}
        {AHREFS_KEY && (
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key={AHREFS_KEY}
            strategy="afterInteractive"
          />
        )}

        {/* Microsoft Clarity */}
        {CLARITY_PROJECT_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}

        {/* Apollo Website Visitor Tracking */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"6a280b8f5b4466000cc27d1f"})},
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
      </body>
    </html>
  );
}
