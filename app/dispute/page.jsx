import BookingModalProvider from '@/components/BookingModalProvider';
import Footer from '@/components/Footer';
import DisputeLanding, { disputeFaq } from '@/components/dispute/DisputeLanding';
import { SITE_URL } from '@/lib/site';

const URL = `${SITE_URL}/dispute`;
const TITLE = 'Chief Dispute Officer — Fight Denied Claims & Bills | Dooza';
const DESC = 'Voice and browser agents fight denied health/auto claims, inflated hospital bills, flight delays, property tax assessments, and ISP rate hikes. Text +1 (855) 594-6841. Pay $0 unless we recover cash (20–30% fee).';

export const metadata = {
    title: { absolute: TITLE },
    description: DESC,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESC,
        url: URL,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Chief Dispute Officer' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [`${SITE_URL}/logo.png`] },
};

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Chief Dispute Officer (Autonomous Bill & Claim Fighter)',
        serviceType: 'Automated medical bill negotiation, insurance claim appeals, and consumer dispute resolution',
        url: URL,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Zero upfront cost. 20–30% of cash recovered or shaved off your annual bill; $0 if unsuccessful.',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: disputeFaq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    },
];

export default function DisputePage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <DisputeLanding />
            <Footer />
        </BookingModalProvider>
    );
}
