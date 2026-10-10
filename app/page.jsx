import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeLanding, { homeFaq } from '@/components/home/HomeLanding';
import { SITE_URL } from '@/lib/site';

export const metadata = {
    title: { absolute: 'Dooza | AI Employees Built, Run and Improved for Your Business' },
    description:
        'Dooza builds AI employees for small businesses, runs them in your tools and improves them every month. Refundable pilot: 100% refund within 14 days.',
    keywords: [
        'Dooza Agents',
        'AI agent builder',
        'AI agents for marketing',
        'AI sales agent',
        'AI customer support agent',
        'AI agents for small business',
        'done for you AI agents',
        'managed AI agents',
        'human in the loop AI',
        'business process automation',
    ],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: 'Dooza | AI Employees Built, Run and Improved for Your Business',
        description:
            'Tell us the work that eats your week. Dooza builds an AI employee that does it, watches it every day and makes it better every month.',
        url: SITE_URL,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'Dooza | AI Employees Built, Run and Improved for Your Business',
        description:
            'Tell us the work that eats your week. Dooza builds an AI employee that does it, watches it every day and makes it better every month.',
        images: [`${SITE_URL}/logo.png`],
    },
};

// Organization Schema for brand recognition
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dooza',
    legalName: 'Adam Laboratory Inc.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
        'Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days.',
    email: 'support@dooza.ai',
    telephone: '+1-213-719-2533',
    foundingDate: '2025',
    founder: {
        '@type': 'Person',
        name: 'Sibi Narendran',
        url: 'https://twitter.com/sibinarendran',
    },
    sameAs: [
        'https://www.linkedin.com/company/110144933/',
        'https://www.crunchbase.com/organization/dooza', 'https://www.youtube.com/channel/UCWpF_BoN_rxwAQT32Cfra3g', 'https://www.youtube.com/@thedooza',
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'support@dooza.ai',
            telephone: '+1-213-719-2533',
            availableLanguage: ['English'],
        },
        {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'support@dooza.ai',
            telephone: '+1-213-719-2533',
            availableLanguage: ['English'],
        },
    ],
    knowsAbout: [
        'Artificial Intelligence',
        'AI Agents',
        'Business Automation',
        'AI Employees',
        'Email Automation',
        'Social Media Management',
        'SEO Optimization',
        'Customer Support Automation',
        'Sales Automation',
    ],
};

// WebSite Schema with SearchAction for site links
const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dooza',
    alternateName: 'Dooza AI',
    url: SITE_URL,
    description: 'Dooza builds, runs and improves AI employees for small businesses.',
    publisher: {
        '@type': 'Organization',
        name: 'Dooza',
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
};

// Service Schema for the build-and-maintain offering
const agentsServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dooza AI employees',
    serviceType: 'Done-for-you AI employees: custom AI agents built, monitored and improved by Dooza engineers',
    url: SITE_URL,
    description:
        'Dooza builds AI employees for small businesses: custom AI agents that do a real job inside your tools. Dooza engineers build them, monitor them daily and improve them every month, with your approval on anything sensitive. Start with a refundable pilot: 100% refund within 14 days.',
    provider: {
        '@type': 'Organization',
        name: 'Dooza',
        url: SITE_URL,
    },
    areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
    },
    audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Founders, small businesses, and operations teams',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dooza AI employee services',
        itemListElement: [
            'AI employee design from a plain-language brief',
            'AI employee build and tool connection',
            'Company context and knowledge setup',
            'Human approval workflow setup',
            'Ongoing monitoring, maintenance, and improvement',
        ].map((service, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
                '@type': 'Service',
                name: service,
            },
        })),
    },
};

// FAQ Schema generated from the on-page FAQ
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaq.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

const schemas = [organizationSchema, websiteSchema, agentsServiceSchema, faqSchema];

export default function Home() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar variant="dark" showLogin={false} ctaType="demo" ctaSource="home_nav" />
            <main id="main-content" className="bg-warm text-slate-900">
                <HomeLanding />
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
