import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'AI Employees for Your Industry — Instant Setup [2026]',
    description: 'See how 10+ industries use AI employees to save 20+ hours/week. Healthcare, real estate, salons, legal, contractors, and more. Proven results from $29/mo.',
    keywords: ['AI for healthcare', 'AI for real estate', 'AI for small business', 'AI for e-commerce', 'industry AI automation'],
    alternates: {
        canonical: `${SITE_URL}/industries`,
    },
    openGraph: {
        title: 'AI Employees for Your Industry — Instant Setup [2026]',
        description: 'See how 10+ industries use AI employees to save 20+ hours/week. Healthcare, real estate, salons, legal, and more.',
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
        title: 'AI Employees for Your Industry — Instant Setup [2026]',
        description: 'See how 10+ industries use AI employees to save 20+ hours/week. Healthcare, real estate, salons, legal, and more.',
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
