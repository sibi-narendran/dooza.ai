import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'AI Employees by Industry',
    description: 'Discover how AI employees help businesses in healthcare, real estate, e-commerce, legal services, and more. Industry-specific AI automation solutions.',
    keywords: ['AI for healthcare', 'AI for real estate', 'AI for small business', 'AI for e-commerce', 'industry AI automation'],
    alternates: {
        canonical: `${SITE_URL}/industries`,
    },
    openGraph: {
        title: 'AI Employees by Industry | Dooza',
        description: 'Discover how AI employees help businesses in healthcare, real estate, e-commerce, legal services, and more.',
        url: `${SITE_URL}/industries`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza AI Employees for Industries',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Employees by Industry | Dooza',
        description: 'Discover how AI employees help businesses in healthcare, real estate, e-commerce, legal services, and more.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function IndustriesLayout({ children }) {
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
                "name": "Industries"
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
