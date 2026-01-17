import PartnersContent from './PartnersContent';
import { SITE_URL } from '../../lib/site';
import { generateFAQSchema } from '../../lib/blogData';

export const metadata = {
    title: 'Partner Program | Earn 30% Recurring Commission',
    description: 'Join the Dooza Partner Program and earn 30% lifetime recurring commission. Partner with the leading AI workforce platform. Free to join, no minimums.',
    keywords: ['affiliate program', 'partner program', 'SaaS affiliate', 'recurring commission', 'software partner', 'AI affiliate program', 'referral program'],
    alternates: {
        canonical: `${SITE_URL}/partners`,
    },
    openGraph: {
        title: 'Partner Program | Earn 30% Recurring Commission',
        description: 'Join the Dooza Partner Program and earn 30% lifetime recurring commission.',
        url: `${SITE_URL}/partners`,
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Dooza Partner Program' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Partner Program | Earn 30% Recurring Commission',
        description: 'Join the Dooza Partner Program and earn 30% lifetime recurring commission.',
        images: [`${SITE_URL}/og-image.png`],
    },
};

// FAQ data for structured data
const partnerFaqs = [
    {
        question: "How do I become a Dooza partner?",
        answer: "Click 'Join Now', fill the form, and we'll review it within 24-48 hours."
    },
    {
        question: "How do commissions work?",
        answer: "Earn 30% recurring commission for the lifetime of every customer. Payouts via PayPal or Stripe (min $50)."
    },
    {
        question: "Is there a cost to join?",
        answer: "No, it's completely free. No monthly fees or minimums."
    },
    {
        question: "What resources do I get?",
        answer: "Access to a partner portal with assets, sales decks, and a dedicated manager."
    },
    {
        question: "How long is the cookie duration?",
        answer: "90 days. If they convert within 90 days of clicking your link, you get credit."
    }
];

export default function PartnersPage() {
    const faqSchema = generateFAQSchema(partnerFaqs);
    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <PartnersContent />
        </>
    );
}
