import { Sora } from 'next/font/google';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';
import SupportLanding from './SupportLanding';

const sora = Sora({ subsets: ['latin'], weight: ['300', '400', '500'], display: 'swap' });

const pageUrl = `${SITE_URL}/customer-support-automation-agency`;

export const metadata = {
    title: {
        absolute: 'AI Customer Support for Online Stores, Live in 48 Hours | Dooza',
    },
    description:
        'AI answers your customers first, a Dooza team handles the rest, and you approve before anything sends. Works inside Gmail, Shopify Inbox or Gorgias. Free 20-message sample, then 14 days free, then $300/month. No setup fee, month-to-month.',
    keywords: [
        'customer support automation agency',
        'customer support outsourcing for small business',
        'AI customer support service',
        'outsourced ecommerce customer support',
        'AI plus human customer support',
        'ecommerce customer support service',
        'Shopify customer support outsourcing',
    ],
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
    openGraph: {
        title: 'AI Customer Support for Small Businesses | Dooza',
        description: 'AI answers first, our team handles the rest, you approve before it sends. Live in 48 hours.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/support/hero-blue.jpg`, width: 1536, height: 1024, alt: 'Dooza AI customer support' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Customer Support for Small Businesses | Dooza',
        description: 'AI answers first, our team handles the rest, you approve before it sends.',
        images: [`${SITE_URL}/support/hero-blue.jpg`],
    },
};

const faqData = [
    {
        question: 'What does Dooza customer support actually do?',
        answer:
            'Dooza AI drafts answers to your store\'s customer emails and chats from your policies, products and past replies. A Dooza specialist checks anything the AI is unsure about, and anything sensitive, like refunds or complaints, goes to you. It works inside the inbox you already use.',
    },
    {
        question: 'What is the free 20-message sample?',
        answer:
            'Send us 20 recent customer messages and we write the answers in your voice, free, before you decide anything. You see exactly how your own customers would be answered.',
    },
    {
        question: 'Will AI send replies without my approval?',
        answer:
            'Not at first. During the 14-day free trial every reply waits for you to approve it, usually with one tap in a shared WhatsApp group. Once you trust the answers, common questions can send automatically while refunds and complaints still come to you.',
    },
    {
        question: 'Which inbox does it work with?',
        answer:
            'We launch in one channel: Gmail, Shopify Inbox or Gorgias. There is nothing to migrate, and if you leave, your inbox stays exactly as it was.',
    },
    {
        question: 'How much does it cost, and for how many messages?',
        answer:
            'The 20-message sample and the 14-day trial are free. After that it is $300 a month for up to 250 customer messages, month-to-month, with no setup fee. If your store is busier, we agree the price with you before you pay any more.',
    },
    {
        question: 'Why not hire a VA or use the AI in Shopify Inbox or Gorgias?',
        answer:
            'A VA needs hiring, training and checking, and only works their hours. Built-in inbox AI suggests drafts but you still read and send every message. Dooza drafts, has a person check, and lets you approve with one tap, day and night.',
    },
    {
        question: 'Who is behind Dooza?',
        answer:
            'Dooza is built by Adam Laboratory Inc., a Delaware C-Corporation at 131 Continental Dr, Suite 305, Newark, DE 19713. The founder, Sibi Narendran, sets up every new store personally.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza AI Customer Support',
        serviceType: 'Customer support outsourcing with AI and human review',
        url: pageUrl,
        description: metadata.description,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL, logo: `${SITE_URL}/logo.png` },
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        audience: { '@type': 'BusinessAudience', name: 'Small businesses and ecommerce brands' },
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
            { '@type': 'ListItem', position: 2, name: 'AI Customer Support', item: pageUrl },
        ],
    },
];

export default function CustomerSupportAutomationAgencyPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <Navbar showLogin={false} ctaType="demo" ctaSource="support_automation_nav" ctaLabel="Get my free sample" />
            <main id="main-content" className={`${sora.className} cs-root bg-white pt-[68px] font-normal text-[#1a1a1a]`}>
                <SupportLanding faqs={faqData} />
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
