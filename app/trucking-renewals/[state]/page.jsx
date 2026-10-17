import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { TRUCKER_FEED_PAY_URL } from '@/lib/offers';

// BET7 step 2 reply-stage pages, one per state (Odysseus 2026-10-17 21:01 k49dpid5): sample with no card, checkout right below it
// (clone of TruckerDB; learnings/research/2026-10-17-list-sellers-free-to-paid.md in Odysseus's home).
// Rows: real incorporated fleets from /home/odysseus/data/feeds/<ST>_bet7_2026-10-12.csv (FMCSA open data); phone, email, officer, DOT/MC hidden.
// Counts = rows in each state's October 12 list. Renewal dates are estimates (anniversary of the current BMC-91X filing).
const STATES = {
    fl: {
        name: 'Florida',
        total: 203,
        rows: [
            ['Atlantic Truck Lines Inc', 'Jacksonville', '19', 'Northland Insurance Company', '$750,000', 'Nov 18, 2026'],
            ['M&M Transport Inc', 'Ocoee', '18', 'CorePointe Insurance Company', '$750,000', 'Nov 18, 2026'],
            ['Camacho Logistics Corp', 'Cape Coral', '28', 'Sentry Select Insurance Company', '$750,000', 'Nov 20, 2026'],
        ],
    },
    tx: {
        name: 'Texas',
        total: 582,
        rows: [
            ['4J Express LLC', 'Anthony', '16', 'MS Transverse Insurance Company', '$750,000', 'Nov 18, 2026'],
            ['Ironhorse Unlimited Inc', 'Malakoff', '9', 'Berkley Regional Insurance Company', '$1,000,000', 'Nov 18, 2026'],
            ['AGD Trucking LLC', 'San Antonio', '9', 'Cimarron Insurance Company', '$750,000', 'Nov 18, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 548,
        rows: [
            ['Comandos Transport Inc', 'Calexico', '11', 'Incline Americas Insurance Company', '$750,000', 'Nov 18, 2026'],
            ['ACX Intermodal Inc', 'Wilmington', '7', 'Travelers Indemnity Company', '$1,000,000', 'Nov 19, 2026'],
            ['BMD Trans Inc', 'Yuba City', '14', 'Technology Insurance Company, Inc', '$750,000', 'Nov 19, 2026'],
        ],
    },
};

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(STATES).map((state) => ({ state }));
}

function cfgFor(code) {
    const s = STATES[code];
    if (!s) return null;
    const more = s.total - s.rows.length;
    return {
        path: `/trucking-renewals/${code}`,
        slug: `trucking-renewals-${code}`,
        offer: 'trucker-feed',
        title: `${s.name} Trucking Renewals List, Every Monday`,
        description: `${s.name} trucking companies renewing their insurance in 30-60 days, with current insurer and fleet size. ${s.total} fleets in the October 12 list. 3 shown free; 7-day trial, then $129 per 4 weeks.`,
        updated: 'October 17, 2026',
        eyebrow: `For agencies that write trucking in ${s.name}`,
        h1: `${s.name} fleets due to renew in 30-60 days, every Monday`,
        leadStrong: `Each Monday: every ${s.name} trucking company with 3 or more power units whose liability filing comes up for renewal in 30 to 60 days, with its current insurer.`,
        leadRest: `Three real rows from the October 12 list are below. ${more} more ${s.name} fleets are in that list.`,
        sample: {
            heading: `3 real ${s.name} fleets from the October 12 list`,
            columns: ['Company', 'City', 'Power units', 'Current insurer', 'Liability limit', 'Est. renewal'],
            rows: s.rows,
            note: `Here we hide owner, phone, email, DOT and MC number; your list has them. ${more} more ${s.name} fleets in the same list.`,
        },
        pay: { href: TRUCKER_FEED_PAY_URL, label: 'Start the 7-day trial' },
        startSubject: `Trucking renewals: ${s.name}`,
        startBody: 'My agency:\nCounties or cities I write:\n',
        startLabel: 'Ask a question first',
        priceNote: '7-day trial, then $129 every 4 weeks. Cancel any time.',
        sendHeading: 'What is in each Monday list',
        sendIntro: `Built from FMCSA open data (data.transportation.gov): carrier registrations plus the federal liability filings insurers make (BMC-91X). The October 12 ${s.name} list had ${s.total} fleets.`,
        send: [
            ['Company, DOT and MC number', 'From the FMCSA registration.'],
            ['Owner or officer name', 'As filed with FMCSA.'],
            ['Phone and email', 'As filed with FMCSA. Rows with no phone are left out.'],
            ['City and power units', 'Only fleets with 3 or more power units.'],
            ['Current insurer and liability limit', 'From the insurer’s federal liability filing (BMC-91X).'],
            ['Estimated renewal date', 'The next anniversary of the current filing’s effective date. Confirm it on the call.'],
        ],
        never: [
            'Call or email the fleets for you. You get the list; the selling is yours.',
            'Call the list exclusive. It is public record; we save you the pulling, matching and sorting each week.',
            'Promise the renewal date. It is an estimate from the filing date; policies can change mid-term.',
        ],
        costs: [
            { text: '7-day trial, then $129 every 4 weeks.', linkText: 'Start the trial', href: TRUCKER_FEED_PAY_URL },
            'Cancel any time before the next 4 weeks start.',
        ],
        faq: [
            {
                question: 'What do I get?',
                answer: `Each Monday, a list of ${s.name} trucking companies with 3 or more power units whose liability filing renews in 30 to 60 days: company, DOT and MC number, owner or officer, phone, email, city, power units, current insurer, liability limit and estimated renewal date.`,
            },
            {
                question: 'Where does the data come from?',
                answer: 'FMCSA open data on data.transportation.gov: the carrier census (registration, contacts, power units) and the insurance filings insurers send to FMCSA (BMC-91X). It is public record; we match and sort it each week.',
            },
            {
                question: 'How sure is the renewal date?',
                answer: 'It is an estimate: the next anniversary of the current filing’s effective date. Most trucking policies run 12 months, but some change mid-term. Confirm it when you call.',
            },
            {
                question: `How many ${s.name} fleets are in a list?`,
                answer: `The October 12 ${s.name} list had ${s.total} fleets. The number changes each week.`,
            },
            {
                question: 'How much does it cost?',
                answer: 'A 7-day trial, then $129 every 4 weeks. Cancel any time.',
            },
        ],
        service: {
            name: `${s.name} trucking renewals list`,
            serviceType: 'Trucking insurance renewal list',
            audienceType: 'Commercial insurance agencies that write trucking',
            offers: [{ price: '129', description: 'Every 4 weeks after a 7-day trial.' }],
        },
        areaServed: { '@type': 'State', name: s.name },
        crumb: `${s.name} Trucking Renewals`,
    };
}

export async function generateMetadata({ params }) {
    const { state } = await params;
    const cfg = cfgFor(state);
    return cfg ? replyStageMetadata(cfg) : {};
}

export default async function Page({ params }) {
    const { state } = await params;
    const cfg = cfgFor(state);
    if (!cfg) notFound();
    return <ReplyStagePage cfg={cfg} />;
}
