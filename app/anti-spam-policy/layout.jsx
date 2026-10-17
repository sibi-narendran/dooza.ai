import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'Anti-Spam Policy - Dooza',
    description: 'How Dooza sends email: business-to-business only, an opt-out in every message, and removal requests honoured within 48 hours.',
    alternates: {
        canonical: `${SITE_URL}/anti-spam-policy`,
    },
    openGraph: {
        title: 'Anti-Spam Policy - Dooza',
        description: 'How Dooza sends email: business-to-business only, an opt-out in every message, and removal requests honoured within 48 hours.',
        url: `${SITE_URL}/anti-spam-policy`,
        siteName: SITE_NAME,
        type: 'website',
    },
};

export default function AntiSpamLayout({ children }) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Anti-Spam Policy", "item": `${SITE_URL}/anti-spam-policy` }
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
