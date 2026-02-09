import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'Privacy Policy - Dooza',
    description: 'Learn how Dooza collects, uses, and protects your data when using our AI-powered social media copilot for Facebook, Instagram, and LinkedIn.',
    keywords: ['privacy policy', 'data protection', 'Dooza privacy', 'social media data', 'Facebook API', 'Instagram API', 'LinkedIn API'],
    alternates: {
        canonical: `${SITE_URL}/privacy`,
    },
    openGraph: {
        title: 'Privacy Policy - Dooza',
        description: 'Learn how Dooza collects, uses, and protects your data when using our AI-powered social media copilot.',
        url: `${SITE_URL}/privacy`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza Privacy Policy',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Privacy Policy - Dooza',
        description: 'Learn how Dooza collects, uses, and protects your data when using our AI-powered social media copilot.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function PrivacyLayout({ children }) {
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
                "name": "Privacy Policy"
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
