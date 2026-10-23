import TruckingAltPage, { altMetadata } from '@/components/TruckingAltPage';

const c = {
    slug: 'carrieriq-alternative',
    key: 'carrieriq',
    vendor: 'Carrier IQ',
    vendorUrl: 'https://carrieriq.io/pricing',
    checked: 'October 23, 2026',
    title: 'Carrier IQ Alternative: $129 Monday Trucking Renewals',
    description: 'Carrier IQ is a full platform for trucking insurance agencies, $149 to $249 a month by state count. If you only need the renewal list, compare the Monday Trucker Feed at $129 per 4 weeks.',
    h1: 'Carrier IQ alternative for trucking insurance agents',
    lead: 'Carrier IQ is an all-in-one platform for agencies that write motor carriers: carrier data, renewals, new ventures, mid-term cancellations, a CRM, quote applications and book management, priced by how many states you cover. If you already have a CRM and only want the list of who to call, the Monday Trucker Feed is a lighter, cheaper option.',
    rows: [
        ['Built for', 'Insurance agencies, producers and factoring teams', 'Insurance agencies that write commercial trucking'],
        ['What you get', 'Software: Data Explorer (carriers, policy renewals, new ventures, mid-term cancellations), CRM, quote applications, portfolio and certificates, AgencyZoom and NowCerts integrations', 'A Monday spreadsheet: trucking companies (3+ power units) estimated to renew in 30 to 60 days, current insurer and limit named, plus new authorities from the past week'],
        ['Price', '$149 a month for 1 state, $199 for up to 5, $249 for up to 10 (about 20% less billed yearly). Extra users $19 a month.', '$129 every 4 weeks, flat'],
        ['Trial', 'None published', '5 free rows from your state by email, no card'],
        ['Contract', 'Month to month, cancel any time; payments non-refundable', 'Paid first, month to month, cancel any time'],
        ['Data', 'Says “real-time carrier and policy intelligence”; source and refresh not published', 'Public FMCSA filings, rebuilt every Monday'],
    ],
    theyWin: [
        'You want one tool for the whole job: find, quote and manage trucking accounts, with a CRM and certificates in the same place.',
        'You want lead types beyond renewals, such as mid-term cancellations, and integrations with AgencyZoom or NowCerts.',
        'You cover many states and want to search and filter yourself rather than get a fixed weekly list.',
    ],
    weWin: [
        'You already have a CRM or AMS and only need who to call: a spreadsheet each Monday, no new software to learn.',
        'You want a lower flat price: $129 every 4 weeks against $149 a month for one state.',
        'You want to see real rows before you pay: 5 free rows from your state, no card.',
    ],
    faq: [
        { question: 'How much does Carrier IQ cost?', answer: 'Its pricing page lists $149 a month for 1 state, $199 for up to 5 states and $249 for up to 10, or $119, $159 and $199 a month billed yearly. Extra users are $19 a month. Check its site for current prices.' },
        { question: 'Is Carrier IQ worth it for a small agency?', answer: 'If you want leads, quoting and book management in one platform, it can be. If you only need trucking renewals to call each week and already have a CRM, a list such as the Monday Trucker Feed costs less: $129 every 4 weeks.' },
        { question: 'What is in the Monday Trucker Feed?', answer: 'Trucking companies in your state with 3 or more power units whose liability filing (BMC-91X) is estimated to renew in 30 to 60 days, with the current insurer and limit named, plus the past week’s new trucking authorities. It arrives as a spreadsheet every Monday.' },
        { question: 'Is the renewal date exact?', answer: 'No. FMCSA does not publish policy expiry dates, so the list uses the next anniversary of the liability filing’s effective date. Confirm it on the call.' },
    ],
};

export const metadata = altMetadata(c);

export default function Page() {
    return <TruckingAltPage c={c} />;
}
