import { SITE_URL } from '@/lib/site';
import GrowPricingContent from './GrowPricingContent';

const pageUrl = `${SITE_URL}/grow/pricing`;
const pageTitle = 'Dooza Grow Pricing | Starter, Grow and Grow Faster Plans';
const pageDescription =
    'Dooza Grow plans: Starter (Website + SEO & GEO), Grow (adds Conversion) and Grow Faster (all four agents with Paid Ads). Scoped on a free 30-minute call. Every plan starts with a refundable pilot — 100% refund within 14 days.';

export const metadata = {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
        title: 'Dooza Grow Pricing | How fast do you want to grow?',
        description: pageDescription,
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/grow/hero.jpg`, width: 933, height: 1400, alt: 'Dooza Grow pricing' }],
    },
};

const faqData = [
    {
        question: 'Why is there no price on the plans?',
        answer:
            'Dooza Grow is done for you, so the price depends on the plan, how many locations or services you cover and your ad spend. A Dooza engineer scopes it on a free 30-minute call and gives you a fixed monthly price before you pay anything.',
    },
    {
        question: 'What does the refundable pilot mean?',
        answer: 'You pay for the pilot. If Dooza Grow is not right for you, ask within 14 days and you get a 100% refund.',
    },
    {
        question: 'Is ad spend included?',
        answer: 'No. Ad spend is paid directly to Google and Meta from your own ad accounts, inside a budget cap you set. The Grow Faster plan covers the Paid Ads Agent that runs and tunes those campaigns.',
    },
    {
        question: 'Can I switch plans later?',
        answer: 'Yes. Most businesses start on Starter or Grow and add agents as they see results. There are no long-term contracts.',
    },
    {
        question: 'How do I get started?',
        answer: 'Book a free pilot call. We look at your website, search presence and lead flow, recommend a plan and have your agents live within the first week.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Dooza Grow', item: `${SITE_URL}/grow` },
            { '@type': 'ListItem', position: 3, name: 'Pricing', item: pageUrl },
        ],
    },
];

export default function GrowPricingPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <GrowPricingContent faqData={faqData} />
        </>
    );
}
