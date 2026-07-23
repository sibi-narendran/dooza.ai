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
    title: { absolute: 'Dooza Agents | AI Agents Built & Maintained for Your Business' },
    description:
        'Describe the agent you need. Dooza builds it, connects it to your tools, and keeps it working — live in days, with approvals on everything sensitive. Free setup, no contracts.',
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
        title: 'Dooza Agents | AI Agents Built & Maintained for Your Business',
        description:
            'Describe the agent you want in plain language. Dooza builds it, runs it, and keeps it working — live in days, free setup, no contracts.',
        url: SITE_URL,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Agents' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: 'Dooza Agents | AI Agents Built & Maintained for Your Business',
        description:
            'Describe the agent you want in plain language. Dooza builds it, runs it, and keeps it working — live in days, free setup, no contracts.',
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
            'Dooza Agents is a product-led service: you describe the agent you need in plain language, and Dooza builds it, connects it to your tools, and keeps it working — automating your marketing, sales, and support end-to-end.',
    },
    {
        question: 'Who builds and maintains my agent?',
        answer:
            'Dooza engineers do. They build your agent on your real work, monitor it, and keep improving it over time. You approve anything sensitive before it happens.',
    },
    {
        question: 'Is the setup really free?',
        answer:
            'Yes. A Dooza engineer builds your first agent for free and puts it live on your real work. You pay only if you want to keep using it.',
    },
    {
        question: 'How fast is my agent live?',
        answer:
            'Your first agent usually runs within days — day 2 to day 4 in most cases.',
    },
    {
        question: 'Is Dooza Agents an AI chatbot?',
        answer:
            'Dooza Agents is an agent builder that can be used as customer support software. It can be used as a live support bot as well as an AI chatbot — and agents also run multi-step work across your tools beyond chat.',
    },
    {
        question: 'What if we do not want to continue?',
        answer:
            'We switch it off. No bill, no contract, no hard feelings.',
    },
];

// Organization Schema for brand recognition
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dooza',
    legalName: 'Dooza AI',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
        'Dooza Agents — AI agents built and maintained for small businesses. Describe the agent you need and Dooza builds it, runs it, and keeps it working.',
    foundingDate: '2024',
    founder: {
        '@type': 'Person',
        name: 'Sibi Narendran',
        url: 'https://twitter.com/sibinarendran',
    },
    sameAs: [
        'https://twitter.com/sibinarendran',
        'https://www.linkedin.com/company/110144933/',
        'https://www.crunchbase.com/organization/dooza',
        'https://www.g2.com/products/dooza',
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
    description: 'AI agents built and maintained for small businesses',
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
    serviceType: 'Managed AI agents',
    url: SITE_URL,
    description:
        'Describe the agent you need and Dooza builds it, connects it to your tools, and keeps it working — live in days, with approvals on everything sensitive. Pay only to keep it. No contracts.',
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
            'Agent design from a plain-language brief',
            'Agent build and tool connection',
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
                showIndustry
                ctaType="demo"
                ctaSource="home_nav"
                signupLabel="Get Your Agent Built"
            />
            <main id="main-content" className="bg-warm text-slate-900">
                <HeroSection />
                <LogoStrip />

                <section className="border-y border-slate-100 bg-white px-4 py-10">
                    <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
                        <span className="section-label block">Things our agents do</span>
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
                    ctaLabel="Get Your Agent Built"
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
