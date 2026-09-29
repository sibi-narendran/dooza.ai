import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'Terms of Service - Dooza',
    description: 'Terms of Service for Dooza, an AI-native company by Adam Laboratory Inc. that builds AI products and services for small businesses. Read the terms governing our platform and services.',
    keywords: ['terms of service', 'user agreement', 'Dooza terms', 'Adam Laboratory Inc', 'social media terms'],
    alternates: {
        canonical: `${SITE_URL}/terms`,
    },
    openGraph: {
        title: 'Terms of Service - Dooza',
        description: 'Terms of Service for Dooza, an AI-native company by Adam Laboratory Inc. building AI products and services for small businesses.',
        url: `${SITE_URL}/terms`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza Terms of Service',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Terms of Service - Dooza',
        description: 'Terms of Service for Dooza, an AI-native company by Adam Laboratory Inc. building AI products and services for small businesses.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function TermsLayout({ children }) {
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
                "name": "Terms of Service",
                "item": `${SITE_URL}/terms`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
