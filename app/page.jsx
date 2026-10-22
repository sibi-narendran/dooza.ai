import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// Dooza Crew homepage (Sibi 2026-10-22). Previous homepage: components/home/HomeLanding.jsx (rollback = swap this import).
import HomeCrew, { homeFaq } from '@/components/home/HomeCrew';
import { SITE_URL } from '@/lib/site';

export const metadata = {
    title: { absolute: 'Dooza Crew | Your Own AI Team, Each Agent With Its Own Computer' },
    description:
        'Whatever you can do on a computer, your AI crew can do. Your own team of AI agents, each with a real computer and browser, in one chat. $50 trial, fully refundable within 7 days.',
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
        title: 'Dooza Crew | Your Own AI Team, Each Agent With Its Own Computer',
        description:
            'Your own team of AI agents, each with a real computer and browser, in one chat. A master agent builds the rest of your team. $50 trial, fully refundable within 7 days.',
        url: SITE_URL,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'Dooza Crew | Your Own AI Team, Each Agent With Its Own Computer',
        description:
            'Your own team of AI agents, each with a real computer and browser, in one chat. A master agent builds the rest of your team. $50 trial, fully refundable within 7 days.',
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
        'Dooza is an AI-native company. Its main product is Dooza Crew: your own team of AI agents, each with a real computer and browser, in one chat. Dooza also offers Dooza Managed, an AI admin assistant whose work is checked by a real person (first 7 days free), and custom AI agents built and maintained by Dooza engineers, scoped on a free 30-minute call and started as a refundable pilot.',
    email: 'support@dooza.ai',
    telephone: '+1-424-365-8980',
    foundingDate: '2025',
    founder: {
        '@type': 'Person',
        name: 'Sibi Narendran',
        url: 'https://twitter.com/sibinarendran',
    },
    sameAs: [
        'https://www.linkedin.com/company/110144933/',
        'https://www.crunchbase.com/organization/dooza', 'https://www.youtube.com/channel/UCWpF_BoN_rxwAQT32Cfra3g', 'https://www.youtube.com/@thedooza',
        'https://maps.google.com/?cid=13601979139100286495',
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'support@dooza.ai',
            telephone: '+1-424-365-8980',
            availableLanguage: ['English'],
        },
        {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'support@dooza.ai',
            telephone: '+1-424-365-8980',
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
    description: 'Dooza Crew: your own team of AI agents, each with a real computer and browser, in one chat.',
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

// Product schema for Dooza Crew (prices from the Crew brief, Sibi 2026-10-22)
const agentsServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Dooza Crew',
    url: `${SITE_URL}/crew`,
    description: 'Your own team of AI agents, each with a real computer and browser, in one chat. A master agent builds the rest of your team.',
    brand: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    offers: { '@type': 'Offer', price: '50', priceCurrency: 'USD', url: 'https://crew.dooza.ai/', description: 'Trial, fully refundable within 7 days, then $49 a month including $20 of AI usage.' },
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
            <Navbar showLogin={false} ctaType="demo" ctaSource="home_nav" />
            <main id="main-content" className="bg-warm text-slate-900">
                <HomeCrew />
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
