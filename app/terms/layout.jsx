import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'Terms of Service - Dooza',
    description: 'Terms of Service for Dooza, an AI-powered social media copilot by Adam Laboratory Inc. Read the terms governing your use of our platform and services.',
    keywords: ['terms of service', 'user agreement', 'Dooza terms', 'Adam Laboratory Inc', 'social media terms'],
    alternates: {
        canonical: `${SITE_URL}/terms`,
    },
    openGraph: {
        title: 'Terms of Service - Dooza',
        description: 'Terms of Service for Dooza, an AI-powered social media copilot by Adam Laboratory Inc.',
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
        description: 'Terms of Service for Dooza, an AI-powered social media copilot by Adam Laboratory Inc.',
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
                "name": "Terms of Service"
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
