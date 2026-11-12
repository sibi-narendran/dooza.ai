// /ie-accounts staging (Apollo brief za-ie-landing-briefs.md). Unsourced competitor comparisons left out; partner cert slot = placeholder.
import IntlPage, { intlMeta } from '@/components/intl/IntlPage';

export const metadata = intlMeta('Irish Ltd Year-End Accounts, CRO B1 & CT1 · €595 Fixed', 'Abridged accounts + CRO B1 + Revenue CT1 for €595 fixed. Pay €0 upfront: review the draft first.', 'ie-accounts');

const P = {
    slug: 'ie-accounts',
    h1: 'Irish Ltd Year-End Accounts, CRO Form B1 & Revenue CT1 — €595 Fixed. Ready to Review in 48 Hours.',
    subLead: 'Pay €0 upfront.',
    sub: 'Review your completed abridged financial statements and CT1 draft before you pay — and we handle the clearance letter from your old accountant at no extra charge.',
    bullets: [
        ['€595 fixed annual fee', '— abridged financial statements + CRO B1 + Revenue ROS CT1 for active Irish private Ltd companies.'],
        ['Zero-awkwardness switch', '— we write to your previous accountant for professional clearance and prior-year trial balances.'],
        ['Signed off in Ireland', '— [Partner Review Desk — Irish CAI/ACCA/CPA Cert # inserted upon partner countersignature before ad launch]'],
    ],
    fields: [['name', 'Director name'], ['contact', 'Work email or Irish mobile'], ['company', 'Company name (or CRO number)']],
    cta: 'Start My 48h Ltd Accounts Draft — Pay €0 Upfront',
    done: "Got it. We'll email or call you shortly to start your draft.",
    prices: [
        ['Annual statutory pack', '€595 fixed', 'Abridged year-end accounts + CRO B1 + Revenue CT1. 48h draft, pay after reviewing the draft.'],
        ['Optional ongoing bookkeeping', '€119/month', 'Monthly bookkeeping + bi-monthly VAT3 + PAYE payroll.'],
    ],
};
export default function Page() { return <IntlPage p={P} />; }
