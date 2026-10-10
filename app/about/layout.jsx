import { SITE_URL, SITE_NAME } from '../../lib/site';

export const metadata = {
    title: 'About Us - Dooza | Adam Laboratory Inc.',
    description: 'Dooza is an AI-native company, built by Adam Laboratory Inc. (Delaware C-Corp), making AI products and services for small businesses: Dooza Workforce and Dooza Agents.',
    keywords: ['about Dooza', 'Adam Laboratory Inc', 'AI company', 'AI-native company', 'Delaware corporation'],
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: 'About Us - Dooza | Adam Laboratory Inc.',
        description: 'Dooza is an AI-native company, built by Adam Laboratory Inc., that makes AI products and services for small businesses. Every product starts with a refundable pilot.',
        url: `${SITE_URL}/about`,
        siteName: SITE_NAME,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
                alt: 'Dooza - About Us',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'About Us - Dooza | Adam Laboratory Inc.',
        description: 'Dooza is an AI-native company, built by Adam Laboratory Inc. Every product starts with a refundable pilot.',
        images: [`${SITE_URL}/logo.png`],
    },
};

export default function AboutLayout({ children }) {
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
                "name": "About",
                "item": `${SITE_URL}/about`
            }
        ]
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Dooza",
        "legalName": "Adam Laboratory Inc.",
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "description": "Adam Laboratory Inc. is a Delaware C-Corporation and the company behind Dooza. Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days.",
        "foundingDate": "2025",
        "founder": { "@type": "Person", "name": "Sibi Narendran", "url": "https://twitter.com/sibinarendran" },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "131 Continental Dr, Suite 305",
            "addressLocality": "Newark",
            "addressRegion": "DE",
            "postalCode": "19713",
            "addressCountry": "US"
        },
        "sameAs": [
            "https://www.linkedin.com/company/110144933/",
            "https://www.crunchbase.com/organization/dooza",
            "https://www.youtube.com/channel/UCWpF_BoN_rxwAQT32Cfra3g", "https://www.youtube.com/@thedooza", "https://maps.google.com/?cid=8595948669186443072"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, orgSchema]) }}
            />
            {children}
        </>
    );
}
