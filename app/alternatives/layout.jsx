import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'AI Employee Alternatives & Comparisons',
    description: 'Compare Dooza with Sintra AI, Marblism, Motion App, and other AI automation platforms. See why businesses choose Dooza for AI employees.',
    keywords: ['Sintra AI alternative', 'Marblism alternative', 'Motion App alternative', 'AI employees comparison', 'AI automation comparison'],
    alternates: {
        canonical: `${SITE_URL}/alternatives`,
    },
    openGraph: {
        title: 'AI Employee Alternatives & Comparisons | Dooza',
        description: 'Compare Dooza with Sintra AI, Marblism, Motion App, and other AI automation platforms. See why businesses choose Dooza.',
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
        title: 'AI Employee Alternatives & Comparisons | Dooza',
        description: 'Compare Dooza with Sintra AI, Marblism, Motion App, and other AI automation platforms.',
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
