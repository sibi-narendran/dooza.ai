import { SITE_URL } from '@/lib/site';
import GrowContent from './GrowContent';

const pageUrl = `${SITE_URL}/grow`;
const pageTitle = 'Dooza Grow | AI Growth Agents for SEO, Ads, Website & Leads';
const pageDescription =
    'Dooza Grow is a done-for-you growth engine for small businesses: four AI agents for SEO & GEO, paid ads, your website and lead conversion, set up by Dooza engineers. Start with a refundable pilot — 100% refund within 14 days.';

export const metadata = {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: [
        'AI marketing agents',
        'AI growth agency',
        'AI SEO agent',
        'AI paid ads agent',
        'AI website builder for small business',
        'AI lead conversion',
        'done-for-you marketing for small business',
        'Mega AI alternative',
        'gomega alternative',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'Dooza Grow | Four AI agents. One growth engine.',
        description: 'SEO & GEO, paid ads, website and lead conversion agents working together for your business. Start with a refundable pilot — 100% refund within 14 days.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/grow/hero.jpg`, width: 933, height: 1400, alt: 'Dooza Grow AI growth agents' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Grow | Four AI agents. One growth engine.',
        description: 'SEO & GEO, paid ads, website and conversion agents for small businesses. Refundable pilot — 100% refund within 14 days.',
        images: [`${SITE_URL}/grow/hero.jpg`],
    },
};

const faqData = [
    {
        question: 'What is Dooza Grow?',
        answer:
            'Dooza Grow is a done-for-you growth engine for small and mid-sized businesses. Four AI agents handle SEO & GEO, paid ads, your website and lead conversion as one connected system. A Dooza engineer sets it up, connects your accounts and sets the approval rules.',
    },
    {
        question: 'Which agents are included?',
        answer:
            'The SEO & GEO Agent (powered by Ranky) publishes content, fixes technical issues and improves how you show up on Google and in AI answers. The Paid Ads Agent builds and tunes campaigns. The Website Agent designs and improves the pages that convert. The Conversion Agent answers every call, chat and form, qualifies the lead and books it onto your calendar.',
    },
    {
        question: 'How much does Dooza Grow cost?',
        answer:
            'Pricing depends on the plan (Starter, Grow or Grow Faster) and your ad spend. Every plan starts with a refundable pilot — 100% refund within 14 days. A Dooza engineer scopes your pilot on a free 30-minute call, and current plans are listed at dooza.ai/pricing.',
    },
    {
        question: 'Do I keep control of my ad budget and brand?',
        answer:
            'Yes. Ads run in your own Google and Meta accounts, with a budget cap you set. Anything sensitive, such as new ad spend, a page going live or a message to a customer, can require your approval first.',
    },
    {
        question: 'How fast can it start?',
        answer:
            'We scope it on a free call, build in the following days, and the agents are usually live within the first week. Search and AI visibility builds over weeks and months; ads and conversion can move sooner.',
    },
    {
        question: 'Can you guarantee results?',
        answer:
            'No one can honestly guarantee rankings, citations or lead counts. What we guarantee is the pilot: if Dooza Grow is not right for you, ask within 14 days for a 100% refund.',
    },
    {
        question: 'Does it work with my current website and tools?',
        answer:
            'Yes. Dooza Grow works with WordPress, Shopify, Wix, Webflow and custom sites, Google Ads, Meta Ads, Google Business Profile, your calendar and your CRM, with 1,000+ app integrations.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Grow',
        serviceType: 'AI marketing and lead generation',
        url: pageUrl,
        description: pageDescription,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL, logo: `${SITE_URL}/logo.png` },
        areaServed: 'Worldwide',
        audience: { '@type': 'BusinessAudience', name: 'Small and mid-sized businesses' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SITE_URL}/ai-solutions-for-business` },
            { '@type': 'ListItem', position: 3, name: 'Dooza Grow', item: pageUrl },
        ],
    },
];

export default function GrowPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <GrowContent faqData={faqData} />
        </>
    );
}
