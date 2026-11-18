import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'AI Employee Alternatives (Nov 2026): Compare Top Tools',
    description: 'Compare AI employee & agent alternatives (Sintra, Marblism, Lindy, Profound, CrewAI) on real pricing and limits—plus Dooza Crew (free to try, no card).',
    keywords: ['Sintra AI alternative', 'Marblism alternative', 'Motion App alternative', 'AI employees comparison', 'AI automation comparison'],
    alternates: {
        canonical: `${SITE_URL}/alternatives`,
    },
    openGraph: {
        title: 'AI Employee Alternatives (Nov 2026): Compare Top Tools',
        description: 'Compare AI employee & agent alternatives (Sintra, Marblism, Lindy, Profound, CrewAI) on real pricing and limits—plus Dooza Crew (free to try, no card).',
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
        title: 'AI Employee Alternatives (Nov 2026): Compare Top Tools',
        description: 'Compare AI employee & agent alternatives (Sintra, Marblism, Lindy, Profound, CrewAI) on real pricing and limits—plus Dooza Crew (free to try, no card).',
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
                "name": "Alternatives",
                "item": `${SITE_URL}/alternatives`
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
