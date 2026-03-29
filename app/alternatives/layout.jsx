import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'Dooza vs Competitors — Honest Comparisons [2026]',
    description: 'Side-by-side comparisons of Dooza vs Sintra AI, Marblism, and Motion App. Real pricing, features, and limitations revealed. See which platform wins for your business.',
    keywords: ['Sintra AI alternative', 'Marblism alternative', 'Motion App alternative', 'AI employees comparison', 'AI automation comparison'],
    alternates: {
        canonical: `${SITE_URL}/alternatives`,
    },
    openGraph: {
        title: 'Dooza vs Competitors — Honest Comparisons [2026]',
        description: 'Side-by-side comparisons of Dooza vs Sintra AI, Marblism, and Motion App. Real pricing, features, and limitations revealed.',
        url: `${SITE_URL}/alternatives`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza AI Employees Comparison',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza vs Competitors — Honest Comparisons [2026]',
        description: 'Side-by-side comparisons of Dooza vs Sintra AI, Marblism, and Motion App. Real pricing, features, and limitations revealed.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function AlternativesLayout({ children }) {
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
                "name": "Alternatives"
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
