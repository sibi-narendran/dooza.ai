import { SITE_URL } from '@/lib/site';
import GeoServicesContent from './GeoServicesContent';

const pageUrl = `${SITE_URL}/generative-engine-optimization`;
const pageTitle = 'Generative Engine Optimization (GEO) Services | Get Cited by AI | Dooza';
const pageDescription =
    'Dooza GEO services get your business cited by ChatGPT, Perplexity, Gemini and Google AI Overviews. Ranky, the AI Visibility employee, does the work daily from $49/mo. Engineers set it up free.';

export const metadata = {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: [
        'generative engine optimization services',
        'generative engine optimization',
        'GEO services',
        'GEO agency',
        'GEO tools',
        'LLM SEO',
        'answer engine optimization',
        'AEO',
        'AI visibility',
        'AI search visibility',
        'ChatGPT SEO',
        'Perplexity SEO',
        'Google AI Overviews optimization',
        'Profound alternative',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'Generative Engine Optimization (GEO) Services | Dooza',
        description:
            'Get cited by ChatGPT, Perplexity and Google AI. Ranky publishes citable content, fixes schema and builds your presence daily. First AI employee set up free.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Generative Engine Optimization services' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Generative Engine Optimization (GEO) Services | Dooza',
        description: 'Dashboards show where you are invisible in AI search. Dooza does the work to fix it. From $49/mo, setup free.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is generative engine optimization (GEO)?',
        answer:
            'Generative engine optimization (GEO) is the practice of making your business easy for AI answer engines such as ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews to find, understand, trust and cite. It focuses on citable content, structured data, consistent brand facts and third-party mentions rather than only on ranking blue links.',
    },
    {
        question: 'What do Dooza GEO services include?',
        answer:
            'Dooza GEO services pair Ranky, Dooza\'s AI Visibility employee, with a Dooza engineer. Ranky researches topics with real search data, publishes citable blog content on your cadence, adds schema and internal links, builds presence on Reddit, LinkedIn and YouTube, keeps your name, address and phone consistent, monitors who is mentioning you, and sends a nightly recap. The engineer sets it up and checks that AI crawlers can reach your site.',
    },
    {
        question: 'How much do GEO services from Dooza cost?',
        answer:
            'Ranky is part of Dooza Workforce, which starts at $49/month (a $79/month growth plan is also available) with a 7-day money-back guarantee. Through Dooza Agents, a Dooza engineer sets up your first AI employee for free, and you pay only if you want to keep it. There are no long-term contracts.',
    },
    {
        question: 'Is GEO different from SEO?',
        answer:
            'Yes, but they overlap. SEO aims to rank pages in search results and win clicks. GEO aims to get your brand mentioned and cited inside AI-generated answers. Good SEO foundations such as crawlable pages, schema and helpful content support GEO, which is why Ranky handles Google SEO and GEO in one employee.',
    },
    {
        question: 'Can you guarantee my business will be cited by ChatGPT?',
        answer:
            'No. Nobody can honestly guarantee a citation, because answer engines decide what to cite and change often. Dooza focuses on the signals research and practice associate with being cited: specific claims, sources, statistics, quotations, structured data and third-party mentions, published consistently.',
    },
    {
        question: 'How long does GEO take to show results?',
        answer:
            'Setup is fast: Day 1 we map your business, Day 2 we build, and by Day 4 Ranky is usually live and publishing. Visibility in AI answers builds over weeks and months as new content is indexed and third-party mentions accumulate, so treat GEO as ongoing work rather than a one-time project.',
    },
    {
        question: 'Is Dooza a Profound alternative?',
        answer:
            'For many small and mid-sized businesses, yes. Profound is an AI visibility analytics platform that tracks share of voice and citations across answer engines, and it is strong for large brands with analytics teams. Dooza is an execution service: it publishes content, fixes schema and builds mentions. Teams that want deep dashboards can pair Ranky with a tracker such as Profound, Otterly or Peec AI.',
    },
    {
        question: 'Does Dooza track my brand across every AI answer engine?',
        answer:
            'Dooza is not an enterprise analytics suite and does not provide prompt-volume data or Profound-scale dashboards. Ranky monitors who is mentioning you and where, including social and community conversations, and reports back in a nightly recap. If you need prompt-level tracking across many engines, use a dedicated GEO tool alongside Ranky.',
    },
    {
        question: 'What is llms.txt and do I need it for GEO?',
        answer:
            'llms.txt is a plain-text file at the root of your site that gives AI systems a curated map of your most important pages. It is an emerging convention, not a guaranteed ranking factor. During setup, your Dooza engineer checks that AI crawlers are not blocked in robots.txt and can help add an llms.txt so your key pages are easy to find.',
    },
    {
        question: 'Which platforms can Ranky publish to?',
        answer:
            'Ranky publishes to Shopify, WordPress, Wix and custom sites via API or Zapier. It connects to 1,000+ apps through Zapier and can use context from Close CRM, Notion and Google Drive to write in your brand voice.',
    },
    {
        question: 'Why do Reddit, LinkedIn and YouTube matter for AI visibility?',
        answer:
            'Answer engines often draw on community discussions, videos and third-party pages, not just your own website. Ranky finds relevant posts on Reddit, LinkedIn and YouTube and drafts brand-voice comments that you can approve or auto-send, so your business shows up in the places AI systems read.',
    },
    {
        question: 'Who are Dooza GEO services for?',
        answer:
            'Dooza GEO services suit small and mid-sized businesses, local businesses, SaaS companies, ecommerce stores, founders, lean marketing teams and agencies that need AI search visibility work done, not another dashboard to read.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Generative Engine Optimization (GEO) Services',
        serviceType: 'Generative Engine Optimization',
        alternateName: ['GEO services', 'Answer engine optimization', 'LLM SEO', 'AI search visibility'],
        url: pageUrl,
        description: pageDescription,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL, logo: `${SITE_URL}/logo.png` },
        areaServed: 'Worldwide',
        audience: { '@type': 'BusinessAudience', name: 'Small and mid-sized businesses, local businesses, SaaS, ecommerce and agencies' },
        offers: {
            '@type': 'Offer',
            name: 'Ranky — AI Visibility Employee (Dooza Workforce)',
            price: '49',
            priceCurrency: 'USD',
            url: `${SITE_URL}/pricing`,
            availability: 'https://schema.org/InStock',
        },
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
            { '@type': 'ListItem', position: 3, name: 'GEO Services', item: pageUrl },
        ],
    },
];

export default function GenerativeEngineOptimizationPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <GeoServicesContent faqData={faqData} />
        </>
    );
}
