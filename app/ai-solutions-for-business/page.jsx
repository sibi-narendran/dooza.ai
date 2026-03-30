import { SITE_URL } from '../../lib/site';
import AISolutionsContent from './AISolutionsContent';

export const metadata = {
    title: 'AI Solutions for Business in 2026: Complete Guide (Tools, Strategy & Cost)',
    description: 'The complete guide to AI solutions for business in 2026. 12 categories, real pricing, ROI stats, and a step-by-step implementation plan. Find the right AI tools for your business.',
    keywords: [
        'AI solutions for business', 'AI tools for business', 'AI for small business',
        'best AI tools for small business 2026', 'AI business solutions',
        'AI automation for business', 'AI tools for business growth',
        'affordable AI tools for small business', 'AI for business operations',
        'AI implementation for small business', 'AI tools by business function',
        'AI employee platform', 'business automation tools 2026',
        'AI marketing tools for business', 'AI customer service for small business',
    ],
    alternates: { canonical: `${SITE_URL}/ai-solutions-for-business` },
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
        title: 'AI Solutions for Business in 2026: Complete Guide',
        description: '12 categories of AI tools, real pricing, ROI data, and implementation steps. Everything you need to bring AI into your business.',
        url: `${SITE_URL}/ai-solutions-for-business`,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-03-30T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'AI Solutions for Business — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'AI Solutions for Business in 2026: Complete Guide',
        description: '12 categories, real pricing, ROI stats, and a step-by-step plan. The only AI guide your business needs.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What are AI solutions for business?',
        answer: 'AI solutions for business are software tools and platforms that use artificial intelligence to automate specific business functions — email management, social media posting, SEO content, customer support, lead generation, accounting, HR, and more. They range from single-function tools like Mailchimp (email) to all-in-one platforms like Dooza (5 AI employees covering multiple functions).',
    },
    {
        question: 'How much does AI cost for a small business?',
        answer: 'Individual AI tools range from $20-140/month each. Buying separate tools for email, social, SEO, support, and leads costs $200-450/month total. All-in-one platforms like Dooza bundle multiple AI employees for $49/month (Starter), making them 4-9x cheaper than building a tool stack.',
    },
    {
        question: 'What is the best AI tool for business in 2026?',
        answer: 'It depends on your needs. For all-in-one AI employees: Dooza ($49/mo). For email marketing: Mailchimp or Klaviyo. For SEO: Semrush ($139/mo). For customer support: Intercom. For project management: ClickUp with AI. For the best value across multiple functions, an all-in-one platform eliminates the cost and complexity of managing separate tools.',
    },
    {
        question: 'Is AI worth it for small businesses?',
        answer: 'Businesses using AI report 5.8x average ROI within 14 months and 25% faster task completion (McKinsey, Harvard Business School). However, 57% of small businesses see no value — usually because of poor implementation, not the technology. The key is starting with one high-impact area and using guided onboarding.',
    },
    {
        question: 'How do I start using AI in my business?',
        answer: 'Step 1: Audit which tasks consume the most time (email, social media, content, support). Step 2: Trial one AI tool for your biggest time sink. Step 3: Measure results after 2-4 weeks. Step 4: Expand to other areas. Platforms like Dooza offer free concierge onboarding where the founder sets everything up in ~20 minutes.',
    },
    {
        question: 'Will AI replace my employees?',
        answer: 'Only 12% of small businesses plan staff reductions due to AI (Business.com 2026). Most businesses use AI to augment existing teams — handling repetitive tasks so humans can focus on strategy, creativity, and relationships. AI employees handle the execution; your team handles the thinking.',
    },
    {
        question: 'What business functions can AI automate?',
        answer: 'AI can automate email management, social media posting and scheduling, SEO content writing, customer support ticketing, lead generation and outreach, legal contract review, bookkeeping and invoicing, HR recruiting, project management, marketing campaigns, and design. Most businesses start with email or social media automation.',
    },
    {
        question: 'How long does it take to implement AI?',
        answer: 'Simple tools (chatbots, email automation) take hours to set up. Complex enterprise implementations take weeks or months. All-in-one platforms like Dooza offer free concierge setup — the founder personally configures your AI employees in a 20-minute call.',
    },
    {
        question: 'What are the risks of using AI in business?',
        answer: 'Key risks include data privacy concerns, output accuracy (AI can hallucinate), over-reliance on automation, and regulatory compliance (EU AI Act). Mitigate by starting small, always reviewing AI outputs before they go live, using platforms with enterprise-grade security, and keeping humans in the loop for critical decisions.',
    },
    {
        question: 'What is the difference between AI tools and AI employees?',
        answer: 'AI tools require you to prompt them each time — you ask, they respond. AI employees work autonomously around the clock — posting to social media on schedule, answering emails as they arrive, writing blog posts weekly — without constant supervision. Dooza, Sintra AI, and Marblism offer AI employees; most other platforms offer AI tools.',
    },
    {
        question: 'Can AI help with marketing for small businesses?',
        answer: 'Yes. AI handles email campaigns, social media scheduling, SEO content creation, ad optimization, and lead nurturing. Active AI users report saving 15-20 hours per week on marketing tasks. For small businesses, AI levels the playing field against larger competitors with bigger marketing teams.',
    },
    {
        question: 'How do I measure AI ROI?',
        answer: 'Track four metrics: (1) time saved per week on automated tasks, (2) cost reduction vs. previous tools or hires, (3) output volume (more posts, more emails, more content), and (4) revenue impact from improved speed and reach (more leads, faster response times, better SEO rankings). Most businesses see measurable results within 2-4 weeks.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
        url: `${SITE_URL}/ai-solutions-for-business`,
        dateModified: '2026-03-30',
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
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
            { '@type': 'ListItem', position: 2, name: 'AI Solutions for Business', item: `${SITE_URL}/ai-solutions-for-business` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '12 Categories of AI Solutions for Business',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'AI Email Management' },
            { '@type': 'ListItem', position: 2, name: 'AI Social Media Management' },
            { '@type': 'ListItem', position: 3, name: 'AI SEO & Content' },
            { '@type': 'ListItem', position: 4, name: 'AI Customer Support' },
            { '@type': 'ListItem', position: 5, name: 'AI Sales & Lead Generation' },
            { '@type': 'ListItem', position: 6, name: 'AI Legal & Compliance' },
            { '@type': 'ListItem', position: 7, name: 'AI Accounting & Finance' },
            { '@type': 'ListItem', position: 8, name: 'AI HR & Recruiting' },
            { '@type': 'ListItem', position: 9, name: 'AI Project Management' },
            { '@type': 'ListItem', position: 10, name: 'AI Marketing Automation' },
            { '@type': 'ListItem', position: 11, name: 'AI Design & Visual Content' },
            { '@type': 'ListItem', position: 12, name: 'AI Coding & Development' },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Implement AI in Your Business',
        description: 'A 4-step guide to bringing AI into your business operations, from audit to scale.',
        totalTime: 'PT4W',
        step: [
            { '@type': 'HowToStep', position: 1, name: 'Audit Your Workflows', text: 'Identify which tasks consume the most time — email, social media, content creation, customer support, or lead generation.' },
            { '@type': 'HowToStep', position: 2, name: 'Trial One AI Tool', text: 'Start with a single AI solution for your biggest time sink. Use free trials or low-cost entry points to test before committing.' },
            { '@type': 'HowToStep', position: 3, name: 'Implement and Integrate', text: 'Connect the AI tool to your existing workflows. Set up automations, review initial outputs, and refine configurations.' },
            { '@type': 'HowToStep', position: 4, name: 'Measure and Expand', text: 'Track time saved, cost reduction, and output quality after 2-4 weeks. Once validated, expand AI to additional business functions.' },
        ],
    },
];

export default function AISolutionsPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <AISolutionsContent faqData={faqData} />
        </>
    );
}
