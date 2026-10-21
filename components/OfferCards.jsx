import { Check } from 'lucide-react';
import { MANAGED_PAY_URL, ICP1_A_PAY_URL } from '@/lib/offers';

const OFFERS = [
    {
        id: 'managed',
        name: 'Dooza Managed',
        tagline: 'An admin assistant for your business: AI does the work, a real person checks it.',
        price: '$200',
        per: '/month',
        terms: '$0 today. $200 after 7 days, only if you don\'t cancel first.',
        points: [
            'Email drafts and follow-up sequences',
            'Documents and forms',
            'Spreadsheets and data entry',
            'Research',
            'Send tasks by email; done by the next business day',
            'Weekly report of what got done',
        ],
        note: 'Limited to 3 new businesses this month.',
        pay: MANAGED_PAY_URL,
    },
    {
        id: 'trucker-feed',
        name: 'Monday Trucker Feed',
        tagline: 'For insurance agencies that write trucking.',
        price: '$129',
        per: '/4 weeks',
        terms: 'Paid first, month to month, cancel any time.',
        cta: 'Get the list ($129)',
        points: [
            'Every Monday: trucking companies in your state whose insurance looks due in 30-60 days',
            'Company, owner name and phone, trucks, current insurer',
            'From public FMCSA filings',
        ],
        note: 'Want your state to yourself? Exclusive states: dooza.ai/exclusive-trucking-insurance-leads',
        more: { href: '/trucking-insurance-leads', label: 'See a sample' },
        pay: `${ICP1_A_PAY_URL}?client_reference_id=feed-offercard`,
    },
];

export default function OfferCards({ source = 'unknown', only }) {
    const offers = only ? OFFERS.filter((o) => o.id === only) : OFFERS;
    return (
        <div className={`mx-auto grid max-w-5xl gap-6 ${offers.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {offers.map((o) => (
                <div key={o.id} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">{o.name}</h3>
                    <p className="mt-2 text-slate-600">{o.tagline}</p>
                    <p className="mt-5"><span className="text-4xl font-bold text-slate-900">{o.price}</span><span className="text-slate-600">{o.per}</span></p>
                    <p className="mt-1 text-sm font-semibold text-primary-700">{o.terms}</p>
                    <ul className="mt-5 space-y-2 text-slate-700">
                        {o.points.map((p) => (
                            <li key={p} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />{p}</li>
                        ))}
                    </ul>
                    <div className="mt-auto pt-6">
                        <a href={o.pay} data-offer={o.id} data-source={source} className="block rounded-full bg-primary-700 px-6 py-3 text-center font-bold text-white hover:bg-primary-800">{o.cta || 'Start 7 days free'}</a>
                        <a href={`/book?utm_source=website&utm_medium=offer&utm_content=${o.id}_${source}`} className="mt-3 block text-center text-sm font-semibold text-primary-700 underline">Or book a 15-min call first</a>
                        {o.more && <a href={o.more.href} className="mt-2 block text-center text-sm text-slate-600 underline">{o.more.label}</a>}
                        <p className="mt-3 text-center text-xs text-slate-500">{o.note}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
