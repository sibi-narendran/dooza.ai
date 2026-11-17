import BookingModalProvider from '@/components/BookingModalProvider';
import Footer from '@/components/Footer';
import SalesCrew, { salesFaq } from '@/components/sales/SalesCrew';
import { SITE_URL } from '@/lib/site';

const URL = `${SITE_URL}/sales`;
const TITLE = 'Dooza for Sales — AI Sales Crew for LinkedIn & Email | Dooza';
const DESC = 'AI sales employees that operate LinkedIn, email, lead research, and follow-ups on their own computer and browser, asking your approval before every send. Text +1 (855) 594-6841 (no sign-up).';

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
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza for Sales' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [`${SITE_URL}/logo.png`] },
};

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza for Sales (AI Sales Crew)',
        serviceType: 'AI sales employees for LinkedIn, email outreach, lead research, and follow-ups',
        url: URL,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free to try (text +1 855-594-6841 or install app). Paid plans $49/month per organization for unlimited users and agents.',
        },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: salesFaq.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    },
];

export default function SalesPage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <SalesCrew />
            <Footer />
        </BookingModalProvider>
    );
}
