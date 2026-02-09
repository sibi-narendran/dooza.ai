import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'About Us - Dooza | Adam Laboratory Inc.',
    description: 'Dooza.ai is built by Adam Laboratory Inc., a Delaware C-Corporation. Learn about our mission to empower businesses with AI-powered social media tools.',
    keywords: ['about Dooza', 'Adam Laboratory Inc', 'AI company', 'social media AI', 'Delaware corporation'],
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: 'About Us - Dooza | Adam Laboratory Inc.',
        description: 'Dooza.ai is built by Adam Laboratory Inc., a Delaware C-Corporation. Learn about our mission to empower businesses with AI-powered tools.',
        url: `${SITE_URL}/about`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza - About Us',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'About Us - Dooza | Adam Laboratory Inc.',
        description: 'Dooza.ai is built by Adam Laboratory Inc., a Delaware C-Corporation. Learn about our mission.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function AboutLayout({ children }) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About"
            }
        ]
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Adam Laboratory Inc.",
        "legalName": "Adam Laboratory Inc.",
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "description": "Adam Laboratory Inc. is a Delaware C-Corporation that builds AI-powered products for businesses. Dooza.ai is its flagship product.",
        "foundingDate": "2025",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "131 Continental Dr, Suite 305",
            "addressLocality": "Newark",
            "addressRegion": "DE",
            "postalCode": "19713",
            "addressCountry": "US"
        },
        "sameAs": [
            "https://twitter.com/sibinarendran",
            "https://www.linkedin.com/company/dooza"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, orgSchema]) }}
            />
            {children}
        </>
    );
}
