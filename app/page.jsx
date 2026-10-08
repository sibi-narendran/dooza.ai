import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorksBrain from '@/components/sections/HowItWorksBrain';
import CompanyContextSection from '@/components/sections/CompanyContextSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import HeroSection from './agents/sections/HeroSection';
import LogoStrip from './agents/sections/LogoStrip';
import PrebuiltAgents from './agents/sections/PrebuiltAgents';
import AgentBuilder from './agents/sections/AgentBuilder';
import PlatformTabs from './agents/sections/PlatformTabs';
import AgentTypeSections from './agents/sections/AgentTypeSections';
import FaqSection from './agents/sections/FaqSection';
import PricingCta from './agents/sections/PricingCta';
import { WORKFLOW_SIGNIN_URL, WORKFLOW_SIGNUP_URL } from '@/lib/links';
import { SITE_URL } from '@/lib/site';

export const metadata = {
    title: { absolute: 'Dooza Agents | AI Agentic Platform: Custom AI Agents Built & Maintained for You' },
    description:
        'Dooza Agents is the AI agentic platform from Dooza, an AI-native company. Describe the AI agents you need and Dooza engineers build, connect, and maintain them — live in days, with approvals on everything sensitive. Start with a refundable pilot: 100% refund within 14 days.',
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
        title: 'Dooza Agents | AI Agentic Platform: Custom AI Agents Built & Maintained for You',
        description:
            'Describe the AI agents you want in plain language. Dooza engineers build, run, and maintain them — live in days. Start with a refundable pilot: 100% refund within 14 days.',
        url: SITE_URL,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Agents' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'Dooza Agents | AI Agentic Platform: Custom AI Agents Built & Maintained for You',
        description:
            'Describe the AI agents you want in plain language. Dooza engineers build, run, and maintain them — live in days. Start with a refundable pilot: 100% refund within 14 days.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const automationExamples = [
    'Emails',
    'Voice calls',
    'Support inbox drafts',
    'Missed-call follow-ups',
    'Invoice chasing',
    'Review replies',
    'Daily social posts',
    'Lead follow-ups',
];

const faqData = [
    {
        question: 'What is Dooza Agents?',
        answer:
            'Dooza Agents is the AI agentic platform from Dooza, an AI-native company. You describe the AI agents you need in plain language, and Dooza engineers build them, connect them to your tools, and keep them working across your marketing, sales, and support.',
    },
    {
        question: 'Who builds and maintains my AI employee?',
        answer:
            'Dooza engineers do. They build your AI employee on your real work, monitor it, and keep improving it over time. You approve anything sensitive before it happens.',
    },
    {
        question: 'How does the refundable pilot work?',
        answer:
            'Every Dooza product starts with a refundable pilot. A Dooza engineer scopes it with you on a free 30-minute call, then builds your first AI agent and puts it live on your real work. The pilot is paid, and if you ask within 14 days you get a 100% refund. Pricing depends on the product; see dooza.ai/pricing.',
    },
    {
        question: 'How fast is my AI employee live?',
        answer:
            'Custom agents are live in days, usually within your pilot’s first week.',
    },
    {
        question: 'Is Dooza Agents an AI chatbot?',
        answer:
            'Dooza Agents is an AI employee builder that can be used as customer support software. It can be used as a live support bot as well as an AI chatbot — and AI employees also run multi-step work across your tools beyond chat.',
    },
    {
        question: 'What if we do not want to continue?',
        answer:
            'Ask within 14 days of starting your pilot and you get a 100% refund. There is no long-term contract, so you can also switch it off later.',
    },
];

// Organization Schema for brand recognition
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dooza',
    legalName: 'Adam Laboratory Inc.',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
        'Dooza is an AI-native company that builds AI products and services for small businesses, from the Dooza Workforce app to the Dooza Agents platform. Every product starts with a refundable pilot: 100% refund within 14 days.',
    foundingDate: '2025',
    founder: {
        '@type': 'Person',
        name: 'Sibi Narendran',
        url: 'https://twitter.com/sibinarendran',
    },
    sameAs: [
        'https://www.linkedin.com/company/110144933/',
        'https://www.crunchbase.com/organization/dooza', 'https://www.youtube.com/channel/UCWpF_BoN_rxwAQT32Cfra3g',
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'support@dooza.ai',
            availableLanguage: ['English'],
        },
        {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'support@dooza.ai',
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
    description: 'Dooza is an AI-native company building AI products and services for small businesses: Dooza Workforce (AI workforce app) and Dooza Agents (AI agentic platform).',
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
    name: 'Dooza Agents',
    serviceType: 'AI agentic platform with custom AI agents built and maintained by Dooza engineers',
    url: SITE_URL,
    description:
        'Dooza Agents is an AI agentic platform: describe the AI agents you need and Dooza engineers build them, connect them to your tools, and keep them working — live in days, with approvals on everything sensitive. Start with a refundable pilot: 100% refund within 14 days.',
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
        name: 'Dooza Agents Service Areas',
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
    mainEntity: faqData.map((faq) => ({
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
            <Navbar
                signupUrl={WORKFLOW_SIGNUP_URL}
                loginUrl={WORKFLOW_SIGNIN_URL}
                ctaType="demo"
                ctaSource="home_nav"
                signupLabel="Get Your AI Employee Built"
            />
            <main id="main-content" className="bg-warm text-slate-900">
                <HeroSection />
                <LogoStrip />

                <section className="border-y border-slate-100 bg-white px-4 py-10">
                    <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
                        <span className="section-label block">Things our AI employees do</span>
                        <div className="flex flex-wrap justify-center gap-3">
                            {automationExamples.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-slate-200 bg-warm px-4 py-2 text-sm font-semibold text-slate-700"
                                >
                                    {item}
                                </span>
                            ))}
                            <span className="rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                                + whatever eats your week
                            </span>
                        </div>
                    </div>
                </section>

                <PrebuiltAgents />
                <HowItWorksBrain
                    ctaSource="home_how_it_works"
                    ctaLabel="Get Your AI Employee Built"
                    className="border-y border-slate-100 bg-white"
                />
                <CompanyContextSection className="bg-warm" />
                <AgentBuilder />
                <PlatformTabs />
                <AgentTypeSections />
                <TestimonialsSection />
                <FaqSection items={faqData} />
                <PricingCta />
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
