import BookingModalProvider from '@/components/BookingModalProvider';
import Footer from '@/components/Footer';
import InsuranceCrew, { insuranceFaq } from '@/components/insurance/InsuranceCrew';
import { SITE_URL } from '@/lib/site';

const URL = `${SITE_URL}/insurance-agents`;
const TITLE = 'AI Employees for Independent Insurance Agents | Dooza';
const DESC = 'AI employees for independent insurance agencies: carrier portals, inbox, certificates, renewals and lead follow-up, 24/7, with your approval. Start for $5.';

export const metadata = {
    title: { absolute: TITLE },
    description: DESC,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESC, url: URL, siteName: 'Dooza', type: 'website', images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [`${SITE_URL}/logo.png`] },
};

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Crew for independent insurance agents',
        serviceType: 'AI employees for insurance agency operations',
        url: URL,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        audience: { '@type': 'BusinessAudience', audienceType: 'Independent insurance agencies' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Start for $5. Unlimited users and agents.' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: insuranceFaq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
];

export default function InsuranceAgentsPage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <InsuranceCrew />
            <Footer />
        </BookingModalProvider>
    );
}
