import { SITE_URL } from '../../lib/site';
import DoozaVsProfoundContent from './DoozaVsProfoundContent';

const PAGE_URL = `${SITE_URL}/dooza-vs-profound`;

export const metadata = {
    title: 'Dooza vs Profound: Best Profound AI Alternative [2026]',
    description: 'Dooza vs Profound (tryprofound.com): Profound shows where your brand is invisible in AI answers. Dooza fixes it. Compare features, pricing, and GEO execution.',
    keywords: [
        'profound ai', 'tryprofound', 'profound pricing', 'profound alternative',
        'profound ai alternative', 'dooza vs profound', 'profound vs dooza',
        'AI visibility', 'AI visibility tool', 'generative engine optimization',
        'answer engine optimization', 'GEO tools', 'AEO tools', 'AI search visibility',
        'profound ai review', 'profound ai pricing 2026',
    ],
    alternates: { canonical: PAGE_URL },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
        },
    },
    openGraph: {
        title: 'Profound AI Alternative — Dooza vs Profound Compared [2026]',
        description: 'Profound shows you where you are invisible in AI answers. Dooza fixes it — Ranky does the GEO work, engineers set it up with you, and it starts with a refundable pilot.',
        url: PAGE_URL,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-09-25T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza vs Profound AI comparison' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'Dooza vs Profound AI [2026] — Monitoring vs Execution',
        description: 'Profound measures your AI visibility. Dooza does the GEO work that moves it. Honest comparison of features, pricing, and fit.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is Profound AI?',
        answer: 'Profound (tryprofound.com) is an AI visibility and answer engine optimization (AEO) analytics platform. It tracks how answer engines like ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, and Google AI Overviews mention and cite your brand, with features such as Answer Engine Insights, share of voice, citation tracking, Prompt Volumes, and Agent Analytics.',
    },
    {
        question: 'How much does Profound cost in 2026?',
        answer: 'As of September 2026, Profound\'s pricing page lists a 7-day free Trial (50 prompts, 3 answer engines) and an Enterprise plan with custom pricing that requires a demo. Third-party reviews from early-to-mid 2026 reported earlier self-serve tiers of about $99/mo (Starter) and $399/mo (Growth), and enterprise deployments of roughly $2,000 to $5,000+ per month. Check tryprofound.com/pricing for current rates.',
    },
    {
        question: 'Is Dooza a Profound alternative?',
        answer: 'Yes, for teams that need GEO work done, not just measured. Profound is an enterprise monitoring and analytics platform. Dooza measures and executes: Ranky, Dooza\'s AI SEO & visibility employee, tracks your core prompts, researches topics, fixes on-page SEO and schema, publishes GEO-ready content, and monitors brand mentions, and Dooza engineers set it up with you. Every Dooza product starts with a refundable pilot — 100% refund within 14 days.',
    },
    {
        question: 'What is the difference between Dooza and Profound?',
        answer: 'Profound shows you where you are invisible in AI answers. Dooza fixes it. Profound specializes in tracking share of voice, citations, and prompt volumes across up to 9 answer engines. Dooza focuses on doing the work that earns citations: content, schema, internal links, Reddit and Quora presence, and consistent business listings.',
    },
    {
        question: 'Does Dooza track as many AI engines as Profound?',
        answer: 'Not at the same scale. Profound Enterprise tracks up to 9 answer engines across many regions and offers prompt-volume data, which Dooza does not replicate. Ranky tracks your core prompt set across ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews, with share of voice and citation maps, then does the fixes: it writes content built to be cited and monitors who is mentioning you and where.',
    },
    {
        question: 'Is Profound worth it for a small business?',
        answer: 'Usually not as a first purchase. Profound\'s current plans are a 7-day trial and custom-priced Enterprise, built for large brands and agencies with analytics teams. A small business typically gets more from paying for execution first — content, schema, and citations — and adding monitoring later.',
    },
    {
        question: 'Can I use Dooza and Profound together?',
        answer: 'Yes. Profound can identify which prompts and answer engines you are missing from, and Ranky can do the work to close those gaps: publish content targeting those topics, add schema, build internal links, and show up on Reddit and Quora threads that answer engines cite.',
    },
    {
        question: 'What does Ranky do for generative engine optimization (GEO)?',
        answer: 'Ranky combines Google SEO and GEO in one AI employee. It does keyword and topic research with real search data, on-page SEO (titles, meta, schema, internal links), writes content with specific citable claims and third-party citations, builds Reddit and Quora presence, keeps your name, address, and phone consistent across the web, and publishes to Shopify, WordPress, Wix, or custom sites.',
    },
    {
        question: 'How much does Dooza cost?',
        answer: 'Pricing depends on the product; every Dooza product starts with a refundable pilot — 100% refund within 14 days. Ranky is part of Dooza Workforce, and if you want engineers to build a custom agent with you, that runs on Dooza Agents. Current plans are listed at dooza.ai/pricing, and a free 30-minute call scopes your pilot.',
    },
    {
        question: 'Does Dooza have SOC 2 like Profound?',
        answer: 'Profound Enterprise lists SSO/SAML and SOC 2. Dooza is not SOC 2 certified; it uses encrypted connections and asks for your approval on anything sensitive. If a formal SOC 2 report is a procurement requirement, Profound is the better fit.',
    },
    {
        question: 'Can Dooza guarantee my brand gets cited in ChatGPT?',
        answer: 'No one can guarantee citations in ChatGPT, Perplexity, or any answer engine. What Dooza does is the work research links to higher visibility: the Princeton GEO study found adding citations, quotations, and statistics can boost visibility in generative engine responses by up to roughly 40%.',
    },
    {
        question: 'How fast can I get started with Dooza?',
        answer: 'Book a free 30-minute call and a Dooza engineer scopes your refundable pilot. Workforce employees like Ranky can start working the same day, and custom agents on Dooza Agents are live in days. Profound Enterprise requires a sales demo before pricing is shared.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza vs Profound AI Comparison',
        description: metadata.description,
        url: PAGE_URL,
        dateModified: '2026-09-25',
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        about: [
            { '@type': 'SoftwareApplication', name: 'Profound', url: 'https://www.tryprofound.com', applicationCategory: 'BusinessApplication' },
            { '@type': 'SoftwareApplication', name: 'Dooza', url: SITE_URL, applicationCategory: 'BusinessApplication' },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(faq => ({
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
            { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${SITE_URL}/alternatives` },
            { '@type': 'ListItem', position: 3, name: 'Dooza vs Profound', item: PAGE_URL },
        ],
    },
];

export default function DoozaVsProfoundPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <DoozaVsProfoundContent faqData={faqData} />
        </>
    );
}
