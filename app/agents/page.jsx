import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WORKFLOW_SIGNIN_URL, WORKFLOW_SIGNUP_URL } from '@/lib/links';
import { SITE_URL } from '@/lib/site';
import HeroSection from './sections/HeroSection';
import LogoStrip from './sections/LogoStrip';
import PrebuiltAgents from './sections/PrebuiltAgents';
import AgentBuilder from './sections/AgentBuilder';
import PlatformTabs from './sections/PlatformTabs';
import AgentTypeSections from './sections/AgentTypeSections';
import FaqSection from './sections/FaqSection';
import PricingCta from './sections/PricingCta';

const pageUrl = `${SITE_URL}/agents`;
const workflowSignupUrl = WORKFLOW_SIGNUP_URL;
const workflowSigninUrl = WORKFLOW_SIGNIN_URL;

export const metadata = {
    title: {
        absolute: 'Dooza Agents | AI Agent Builder for Marketing, Sales & Support',
    },
    description:
        'Describe the agent you want and Dooza Agents builds it — AI agents that automate your marketing, sales, and support with approvals, traces, and governance controls.',
    keywords: [
        'Dooza Agents',
        'AI agent builder',
        'AI agents for marketing',
        'AI sales agent',
        'AI customer support agent',
        'WhatsApp AI agent',
        'AI chatbot',
        'text to agent',
        'human in the loop AI',
        'business process automation',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Dooza Agents | AI Agent Builder for Marketing, Sales & Support',
        description:
            'Describe the agent you want in plain language. Dooza builds it with you — connected to your tools, with approvals on everything sensitive.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Agents' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Agents | AI Agent Builder for Marketing, Sales & Support',
        description:
            'AI agents for marketing, sales, and support — built from a plain-language brief, with approvals on everything sensitive.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is Dooza Agents?',
        answer:
            'Dooza Agents is an AI-powered agent builder designed to automate inbound sales, support, and marketing processes. It can fully automate workflows, handling tasks end-to-end without manual input.',
    },
    {
        question: 'Is Dooza Agents an AI chatbot?',
        answer:
            'Dooza Agents is an agent builder that can be used as customer support software. It can be used as a live support bot as well as an AI chatbot — and agents also run multi-step work across your tools beyond chat.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza Agents',
        url: pageUrl,
        description: metadata.description,
        isPartOf: {
            '@type': 'WebSite',
            name: 'Dooza',
            url: SITE_URL,
        },
        about: [
            { '@type': 'Thing', name: 'AI agent builder' },
            { '@type': 'Thing', name: 'Dooza Agents' },
            { '@type': 'Thing', name: 'Marketing AI agent' },
            { '@type': 'Thing', name: 'Sales AI agent' },
            { '@type': 'Thing', name: 'Customer support AI agent' },
            { '@type': 'Thing', name: 'Live chat and AI chatbot' },
            { '@type': 'Thing', name: 'WhatsApp AI agent' },
        ],
        publisher: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Dooza Agents', item: pageUrl },
        ],
    },
];

export default function AgentsPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar
                signupUrl={workflowSignupUrl}
                loginUrl={workflowSigninUrl}
                showIndustry
                ctaType="demo"
                ctaSource="agents_nav"
                signupLabel="Book a Meeting"
            />
            <main id="main-content" className="bg-warm text-slate-900">
                <HeroSection />
                <LogoStrip />
                <PrebuiltAgents />
                <AgentBuilder />
                <PlatformTabs />
                <AgentTypeSections />
                <FaqSection items={faqData} />
                <PricingCta />
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
