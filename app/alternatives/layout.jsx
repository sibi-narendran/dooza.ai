import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'AI Employee Tools Compared [2026]: Sintra, Marblism & More',
    description: 'Side-by-side comparisons of AI employee platforms — Sintra AI, Marblism, Motion, Accio Work, and more. Real pricing, honest pros and cons.',
    keywords: ['Sintra AI alternative', 'Marblism alternative', 'Motion App alternative', 'AI employees comparison', 'AI automation comparison'],
    alternates: {
        canonical: `${SITE_URL}/alternatives`,
    },
    openGraph: {
        title: 'AI Employee Tools Compared [2026]: Sintra, Marblism & More',
        description: 'Side-by-side comparisons of AI employee platforms. Real pricing, features, and limitations revealed.',
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
        title: 'AI Employee Tools Compared [2026]: Sintra, Marblism & More',
        description: 'Side-by-side comparisons of AI employee platforms. Real pricing, features, and limitations revealed.',
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
