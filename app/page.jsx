import HomePage from './HomeContent';

export const metadata = {
    title: 'AI Employees That Never Sleep',
    description: 'Build, grow, and scale your business with AI employees. Automate inbox, social media, SEO, sales calls 24/7. Free setup, transparent pricing from $29/mo.',
    keywords: ['AI employees', 'AI agents', 'business automation', 'Sintra AI alternative', 'Marblism alternative', 'AI for small business', 'AI automation platform', 'virtual employees'],
    alternates: {
        canonical: 'https://dooza.ai',
    },
    openGraph: {
        title: 'AI Employees That Never Sleep | Dooza',
        description: 'Build, grow, and scale your business with AI employees. Automate inbox, social media, SEO, sales calls 24/7.',
        url: 'https://dooza.ai',
        images: [{ url: 'https://dooza.ai/og-image.png', width: 1200, height: 630, alt: 'Dooza - AI Employees Platform' }],
    },
};

// Organization Schema for brand recognition
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dooza",
    "url": "https://dooza.ai",
    "logo": "https://dooza.ai/logo.png",
    "description": "AI employees that automate your business operations 24/7",
    "foundingDate": "2024",
    "sameAs": [
        "https://twitter.com/sibinarendran",
        "https://linkedin.com/company/dooza"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "support@dooza.ai"
    }
};

// WebSite Schema with SearchAction for site links
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dooza",
    "url": "https://dooza.ai",
    "description": "AI Employees That Never Sleep - Build, grow, and scale your business with AI automation",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://dooza.ai/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// SoftwareApplication Schema for product visibility
const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dooza AI Employees",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "29",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "150",
        "bestRating": "5",
        "worstRating": "1"
    }
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ 
                    __html: JSON.stringify([organizationSchema, websiteSchema, softwareSchema]) 
                }}
            />
            <HomePage />
        </>
    );
}
