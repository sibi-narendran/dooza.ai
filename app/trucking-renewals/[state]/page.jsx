import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { TRUCKER_FEED_PAY_URL } from '@/lib/offers';

// BET7 step 2 reply-stage pages, one per state (Odysseus 2026-10-17 21:01 k49dpid5): sample with no card, checkout right below it
// (clone of TruckerDB; learnings/research/2026-10-17-list-sellers-free-to-paid.md in Odysseus's home).
// Rows: real incorporated fleets from /home/odysseus/data/feeds/<ST>_bet7_2026-10-12.csv (FMCSA open data); phone, email, officer, DOT/MC hidden.
// Counts = rows in each state's latest list (listDate); samples re-picked 10-18 (Dec 1-9 dates, 8-60 power units). Renewal dates are estimates (anniversary of the current BMC-91X filing).
const STATES = {
    fl: {
        name: 'Florida',
        total: 203,
        listDate: 'October 12',
        rows: [
            ['Royal Trucking Express Inc', 'Orlando', '50', 'Prime Property & Casualty Insurance Inc', '$750,000', 'Dec 1, 2026'],
            ['Aloha Freightways Inc', 'Miami', '29', 'Sentry Select Insurance Company', '$1,000,000', 'Dec 1, 2026'],
            ['B & J Transport Inc', 'Auburndale', '10', 'Canal Insurance Company', '$750,000', 'Dec 1, 2026'],
        ],
    },
    tx: {
        name: 'Texas',
        total: 582,
        listDate: 'October 12',
        rows: [
            ['Bee-Line Transportation Inc', 'Houston', '57', 'Great West Casualty Company', '$1,000,000', 'Dec 1, 2026'],
            ['Arrow Freight Management Inc', 'El Paso', '27', 'Northland Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Rocking 8 Transportation Inc', 'Houston', '27', 'Zurich American Insurance Company', '$1,000,000', 'Dec 1, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 548,
        listDate: 'October 12',
        rows: [
            ['Rust & Sons Trucking Inc', 'El Cajon', '55', 'Hartford Fire Insurance Company', '$1,000,000', 'Dec 1, 2026'],
            ['Henean Trucking Inc', 'Santa Ana', '45', 'Great West Casualty Company', '$1,000,000', 'Dec 1, 2026'],
            ['Last Piece Logistics LLC', 'Clovis', '22', 'Old Republic Insurance Company', '$1,000,000', 'Dec 1, 2026'],
        ],
    },
    ny: {
        name: 'New York',
        total: 136,
        listDate: 'October 10',
        rows: [
            ['DNT Express LLC', 'Menands', '49', 'Zurich American Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Lanpher’s Transport Inc', 'Syracuse', '42', 'Lancer Insurance Company', '$5,000,000', 'Dec 1, 2026'],
            ['Serafini Transportation Corp', 'Binghamton', '30', 'National Interstate Insurance Company', '$1,500,000', 'Dec 1, 2026'],
        ],
    },
    il: {
        name: 'Illinois',
        total: 471,
        listDate: 'October 10',
        rows: [
            ['STA Express Inc', 'Oswego', '60', 'MS Transverse Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Chicago Suburban Express Inc', 'Forest View', '33', 'Selective Insurance Company of South Carolina', '$750,000', 'Dec 1, 2026'],
            ['Hetzels Overland Transport Inc', 'Effingham', '33', 'Great West Casualty Company', '$1,000,000', 'Dec 1, 2026'],
        ],
    },
    ok: {
        name: 'Oklahoma',
        total: 69,
        listDate: 'October 10',
        rows: [
            ['Roll-Offs Trucking Inc', 'Mead', '20', 'Canal Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Bronco Haulers LLC', 'Chickasha', '12', 'Great West Casualty Company', '$1,000,000', 'Dec 1, 2026'],
            ['Taz Trucking LLC', 'Poteau', '32', 'National Interstate Insurance Company', '$1,000,000', 'Dec 6, 2026'],
        ],
    },
    ks: {
        name: 'Kansas',
        total: 105,
        listDate: 'October 13',
        rows: [
            ['RC Trucking Inc', 'Gridley', '38', 'National Interstate Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['5AB Carrier LLC', 'Olathe', '16', 'MS Transverse Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['G & L Transport LLC', 'Garden City', '10', 'Northland Insurance Company', '$750,000', 'Dec 3, 2026'],
        ],
    },
    ma: {
        name: 'Massachusetts',
        total: 111,
        listDate: 'October 13',
        rows: [
            ['Falcon Express Logistics LLC', 'Beverly', '30', 'Greenwich Insurance Company', '$1,000,000', 'Dec 1, 2026'],
            ['Nichols Trucking Company Inc', 'Middleboro', '17', 'Union Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Lajoie Brothers Transport Company LLC', 'Charlton', '10', 'Acadia Insurance Company', '$750,000', 'Dec 1, 2026'],
        ],
    },
    ky: {
        name: 'Kentucky',
        total: 88,
        listDate: 'October 10',
        rows: [
            ['Hayes Brothers Trucking Inc', 'Benton', '12', 'Sentry Select Insurance Company', '$1,000,000', 'Dec 1, 2026'],
            ['Dedicated Trucking Service LLC', 'Louisville', '11', 'Canal Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['AGP Transport LLC', 'Shepherdsville', '46', 'Navigators Insurance Company', '$750,000', 'Dec 2, 2026'],
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
        description: `${s.name} trucking companies renewing their insurance in 30-60 days, with current insurer and fleet size. ${s.total} fleets in the ${s.listDate} list. 3 shown free; $129 every 4 weeks, 7-day free trial, cancel any time.`,
        updated: 'October 18, 2026',
        eyebrow: `For agencies that write trucking in ${s.name}`,
        h1: `${s.name} fleets due to renew in 30-60 days, every Monday`,
        leadStrong: `Each Monday: every ${s.name} trucking company with 3 or more power units whose liability filing comes up for renewal in 30 to 60 days, with its current insurer.`,
        leadRest: `Three real rows from the ${s.listDate} list are below. ${more} more ${s.name} fleets are in that list.`,
        sample: {
            heading: `3 real ${s.name} fleets from the ${s.listDate} list`,
            columns: ['Company', 'City', 'Power units', 'Current insurer', 'Liability limit', 'Est. renewal'],
            rows: s.rows,
            note: `Here we hide owner, phone, email, DOT and MC number; your list has them. ${more} more ${s.name} fleets in the same list.`,
        },
        pay: { href: TRUCKER_FEED_PAY_URL, label: 'Start the 7-day free trial' },
        startSubject: `Trucking renewals: ${s.name}`,
        startBody: 'My agency:\nCounties or cities I write:\n',
        startLabel: 'Ask a question first',
        priceNote: '$129 every 4 weeks, 7-day free trial, cancel any time.',
        sendHeading: 'What is in each Monday list',
        sendIntro: `Built from FMCSA open data (data.transportation.gov): carrier registrations plus the federal liability filings insurers make (BMC-91X). The ${s.listDate} ${s.name} list had ${s.total} fleets.`,
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
            { text: '$129 every 4 weeks, 7-day free trial, cancel any time.', linkText: 'Start the trial', href: TRUCKER_FEED_PAY_URL },
            'To stop, cancel before the next 4 weeks start.',
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
                answer: `The ${s.listDate} ${s.name} list had ${s.total} fleets. The number changes each week.`,
            },
            {
                question: 'How much does it cost?',
                answer: '$129 every 4 weeks, 7-day free trial, cancel any time.',
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
