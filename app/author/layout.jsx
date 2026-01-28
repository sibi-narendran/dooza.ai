import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'Dooza Team - Authors & Contributors',
    description: 'Meet the Dooza content team. We write actionable guides on AI automation, small business marketing, and scaling with AI employees.',
    keywords: ['Dooza team', 'AI experts', 'business automation authors', 'AI content creators'],
    alternates: {
        canonical: `${SITE_URL}/author`,
    },
    openGraph: {
        title: 'Dooza Team - Authors & Contributors',
        description: 'Meet the Dooza content team. We write actionable guides on AI automation and small business marketing.',
        url: `${SITE_URL}/author`,
        siteName: SITE_NAME,
        type: 'profile',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza Team',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Dooza Team - Authors & Contributors',
        description: 'Meet the Dooza content team. We write actionable guides on AI automation and small business marketing.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function AuthorLayout({ children }) {
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
                "name": "Author"
            }
        ]
    };

    const profileSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Dooza Team",
            "description": "Content & Research Team at Dooza",
            "url": `${SITE_URL}/author`,
            "sameAs": [
                "https://twitter.com/sibinarendran",
                "https://www.linkedin.com/company/dooza"
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, profileSchema]) }}
            />
            {children}
        </>
    );
}
