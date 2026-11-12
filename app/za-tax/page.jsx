// /za-tax staging (Apollo brief /home/apollo/learned/knowledge/campaigns/za-ie-landing-briefs.md, Sibi GO on ZA ads 2026-11-12 22:08).
// Unsourced competitor comparisons from the brief left out. Partner PR# slot stays a bracketed placeholder until countersigned.
import IntlPage, { intlMeta } from '@/components/intl/IntlPage';

export const metadata = intlMeta('Red SARS Tax Pin to Green in 48 Hours · CIPC AFS R2,450', 'CIPC annual financial statements + SARS ITR14 for R2,450 flat. Pay R0 upfront: review your draft before you pay.', 'za-tax');

const P = {
    slug: 'za-tax',
    book: true,
    h1: 'Red SARS Tax Pin Back to Green in 48 Hours — Or CIPC Annual Financial Statements for R2,450 Flat.',
    subLead: 'Pay R0 upfront.',
    sub: 'Review your completed draft AFS & ITR14 before you pay a single rand.',
    bullets: [
        ['R2,450 flat fee', '— full CIPC AFS (IFRS for SMEs) + SARS ITR14 corporate return, or overdue return catch-up.'],
        ['48-hour draft turnaround', '— built for Pty Ltd suppliers & contractors with tenders or payouts stuck on a red tax compliance pin.'],
        ['Pay only after you review', '— you see the full draft first, then pay.'],
    ],
    fields: [['name', 'Your name'], ['contact', 'WhatsApp / mobile number (or work email)'], ['company', 'Company name (or CIPC reg number)']],
    cta: 'Get My 48h SARS Pin & AFS Check — Pay R0 Now',
    done: "Got it. We'll WhatsApp or email you shortly to start your 48-hour check.",
    prices: [
        ['Once-off catch-up / annual filing', 'R2,450 flat', 'CIPC AFS + SARS ITR14 + red tax pin diagnostic. 48h draft, pay on draft review.'],
        ['Optional monthly bookkeeping', 'R1,490/pm', 'Monthly bank recon + bi-monthly VAT201 + EMP201 PAYE. Cancel anytime.'],
    ],
};
export default function Page() { return <IntlPage p={P} />; }
