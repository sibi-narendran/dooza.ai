import BookingModalProvider from '@/components/BookingModalProvider';
import Footer from '@/components/Footer';
import DispatchCrew, { dispatchFaq } from '@/components/dispatch/DispatchCrew';
import { SITE_URL } from '@/lib/site';

const URL = `${SITE_URL}/truck-dispatchers`;
const TITLE = 'AI Employees for Truck Dispatchers | Dooza';
const DESC = 'AI employees for truck dispatchers: load boards, broker inbox, invoices, new brokers and carrier compliance, 24/7, with your approval. Free 7 days.';

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
        name: 'Dooza Crew for truck dispatchers',
        serviceType: 'AI employees for truck dispatch operations',
        url: URL,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        audience: { '@type': 'BusinessAudience', audienceType: 'Truck dispatchers and dispatch services' },
        offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD', description: 'Per organization per month after a 7-day free trial; unlimited users and agents; $20 of AI usage included.' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: dispatchFaq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
];

export default function TruckDispatchersPage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <DispatchCrew />
            <Footer />
        </BookingModalProvider>
    );
}
