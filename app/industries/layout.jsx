import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'AI Automation by Industry | Dooza',
    description: 'Explore industry-specific Dooza Agent automation for stores, law firms, salons, contractors, real estate teams, healthcare practices, and other SMBs.',
    keywords: ['AI for healthcare', 'AI for real estate', 'AI for small business', 'AI for e-commerce', 'industry AI automation'],
    alternates: {
        canonical: `${SITE_URL}/industries`,
    },
    openGraph: {
        title: 'AI Automation by Industry | Dooza',
        description: 'Explore managed AI workflow automation for stores, law firms, salons, contractors, real estate teams, healthcare practices, and other SMBs.',
        url: `${SITE_URL}/industries`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza AI automation for industries',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Automation by Industry | Dooza',
        description: 'Explore managed AI workflow automation for stores, law firms, salons, contractors, real estate teams, healthcare practices, and other SMBs.',
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
                "name": "Industries",
                "item": `${SITE_URL}/industries`
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
