import CutCostsFunnel from './CutCostsFunnel';
import { SITE_URL } from '@/lib/site';

// Facebook ad landing page ("AI can cut your costs"). Paid mobile traffic only:
// one full-screen lead form, no navigation, kept out of the index.
export const metadata = {
    title: { absolute: 'Cut your costs with AI | Dooza' },
    description:
        'Get a free plan by text for cutting your costs with AI. Every pilot is refundable: 100% refund within 14 days.',
    alternates: { canonical: `${SITE_URL}/cut-costs` },
    robots: { index: false, follow: false },
};

export const viewport = {
    themeColor: '#faf9f7',
};

export default function CutCostsPage() {
    return <CutCostsFunnel />;
}
