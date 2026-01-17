import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://dooza.ai'),
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
    url: 'https://dooza.ai',
    siteName: 'Dooza',
    title: 'Dooza | AI Employees That Never Sleep',
    description: 'Build, grow, and scale your business with a team of AI employees. Automate email, social media, lead generation, calls, and more.',
    images: [
      {
        url: 'https://dooza.ai/og-image.png',
        width: 1200,
        height: 630,
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
    images: ['https://dooza.ai/og-image.png'],
  },
  alternates: {
    canonical: 'https://dooza.ai',
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    'theme-color': '#0d9488',
    'msapplication-TileColor': '#0d9488',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10872232955"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10872232955');
          `}
        </Script>
        
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ExUFJSiq7qufMJ0WMEpL+A"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
