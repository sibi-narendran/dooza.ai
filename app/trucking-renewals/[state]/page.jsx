import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// BET7 step 2 reply-stage pages, one per state (Odysseus 2026-10-17 21:01 k49dpid5): sample with no card, checkout right below it
// (clone of TruckerDB; learnings/research/2026-10-17-list-sellers-free-to-paid.md in Odysseus's home).
// Rows: real incorporated fleets from /home/odysseus/data/feeds/<ST>_bet7_2026-10-12.csv (FMCSA open data); phone, email, officer, DOT/MC hidden.
// Counts = rows in each state's latest list (listDate); samples re-picked 10-18 (Dec 1-9 dates, 8-60 power units). Renewal dates are estimates (anniversary of the current BMC-91X filing).
const STATES = {
    fl: {
        name: 'Florida',
        total: 209,
        listDate: 'October 19',
        rows: [
            ['Royal Trucking Express Inc', 'Orlando', '50', 'Prime Property & Casualty Insurance Inc', '$750,000', 'Dec 1, 2026'],
            ['Aloha Freightways Inc', 'Miami', '29', 'Sentry Select Insurance Company', '$1,000,000', 'Dec 1, 2026'],
            ['B & J Transport Inc', 'Auburndale', '10', 'Canal Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Leal Family Trucking LLC', 'Hialeah', '8', 'Professional Transportation RRG Inc', '$750,000', 'Dec 3, 2026'],
            ['Perez Ceballo Services Corp', 'Sarasota', '6', 'GEICO Marine Insurance Company', '$750,000', 'Dec 3, 2026'],
            ['Elite Transportation LLC', 'Fort Pierce', '5', 'Progressive Casualty Insurance Company', '$750,000', 'Dec 3, 2026'],
            ['Blue Road International LLC', 'Punta Gorda', '14', 'Universal Casualty Risk Retention Group, Inc', '$750,000', 'Dec 4, 2026'],
            ['Asian Auto Sales LLC', 'Orlando', '5', 'GEICO Marine Insurance Company', '$750,000', 'Dec 4, 2026'],
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
            ['Ballard Capital LLC', 'Weatherford', '12', 'Worth Insurance Co', '$750,000', 'Dec 1, 2026'],
            ['Strata Scout Drilling LLC', 'Cisco', '12', 'Arch Insurance Company', '$1,000,000', 'Dec 1, 2026'],
            ['Textreme Logistics LLC', 'Odessa', '8', 'Highlander Specialty Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Hero Farms LLC', 'Mount Vernon', '17', 'Incline Americas Insurance Company', '$750,000', 'Dec 2, 2026'],
            ['Araiza Trucking Company LLC', 'Baytown', '11', 'Trisura Specialty Insurance Company', '$750,000', 'Dec 2, 2026'],
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
            ['Elite Charter LLC', 'Santa Ana', '23', 'Philadelphia Indemnity Insurance Company', '$5,000,000', 'Dec 1, 2026'],
            ['Perry’s Custom Trucking LLC', 'Hilmar', '9', 'Sentry Select Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Motion City Transportation LLC', 'Maywood', '10', 'Starstone National Insurance Company', '$750,000', 'Dec 7, 2026'],
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
            ['Aces Custom Automotive LLC', 'Poughkeepsie', '12', 'Michigan Millers Mutual Insurance Co', '$1,000,000', 'Dec 2, 2026'],
            ['Woodvalley Contractors Corp', 'E Patchogue', '6', 'Ohio Security Insurance Company', '$750,000', 'Dec 4, 2026'],
            ['Last Chance Trucking LLC', 'Penn Yan', '6', 'Progressive Casualty Insurance Company', '$1,000,000', 'Dec 5, 2026'],
            ['Carmel Trucking LLC', 'Bloomfield', '5', 'Sentry Select Insurance Company', '$750,000', 'Dec 6, 2026'],
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
            ['Wise Wheeler LLC', 'Burr Ridge', '50', 'Sentry Select Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Fidelitone Order Fulfillment LLC', 'Wauconda', '25', 'Sentry Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Fidelitone Last Mile LLC', 'Wauconda', '18', 'Sentry Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Deppe Trucking LLC', 'Mt Pulaski', '17', 'Incline Casualty Company', '$750,000', 'Dec 1, 2026'],
            ['Wilken Farms LLC', 'Rantoul', '9', 'Northland Insurance Company', '$750,000', 'Dec 1, 2026'],
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
            ['Arrowhead Earthworks LLC', 'Hugo', '5', 'Progressive Northern Insurance Company', '$1,000,000', 'Dec 2, 2026'],
            ['Bruner’s Towing & Recovery LLC', 'Stillwell', '16', 'Progressive Northern Insurance Company', '$1,000,000', 'Dec 3, 2026'],
            ['Mustang Heavy Haul LLC', 'Tulsa', '6', 'Zurich American Insurance Company', '$1,000,000', 'Dec 4, 2026'],
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
            ['CFMI LLC', 'Plainville', '7', 'National American Insurance Company', '$1,000,000', 'Dec 1, 2026'],
            ['Thomas and Sons Trucking LLC', 'Downs', '5', 'National Indemnity Company', '$750,000', 'Dec 2, 2026'],
            ['Sodicco Transport LLC', 'Abilene', '12', 'Sentry Select Insurance Company', '$750,000', 'Dec 4, 2026'],
            ['Wilson Bulk LLC', 'Abilene', '53', 'Sentry Select Insurance Company', '$750,000', 'Dec 5, 2026'],
            ['Lucas Towing of Kansas LLC', 'Salina', '5', 'Amguard Insurance Company', '$1,000,000', 'Dec 11, 2026'],
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
            ['Quirk Excavating & Trucking LLC', 'South Dennis', '9', 'Progressive Casualty Insurance Company', '$750,000', 'Dec 3, 2026'],
            ['Amina Trans LLC', 'West Springfield', '6', 'Arbella Protection Insurance Company', '$750,000', 'Dec 3, 2026'],
            ['Boston Green Fuel Company LLC', 'East Freetown', '35', 'The Commerce Insurance Company', '$1,000,000', 'Dec 4, 2026'],
            ['Thunderstealers LLC', 'Foxborough', '9', 'Old Republic Insurance Company', '$1,000,000', 'Dec 5, 2026'],
            ['Rinn Corp', 'Burlington', '8', 'Arbella Protection Insurance Company', '$1,000,000', 'Dec 7, 2026'],
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
            ['Himes Trucking LLC', 'Flemingsburg', '6', 'Acuity, a Mutual Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Bustale Express LLC', 'Louisville', '5', 'Northland Insurance Company', '$750,000', 'Dec 1, 2026'],
            ['Yassmine Trans LLC', 'Louisville', '5', 'United Financial Casualty Company', '$750,000', 'Dec 6, 2026'],
            ['Doug Cobb Trucking LLC', 'Barbourville', '12', 'Acuity, a Mutual Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Arrow Transport LLC', 'Louisville', '10', 'United Financial Casualty Company', '$750,000', 'Dec 8, 2026'],
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
        description: `${s.name} trucking companies renewing their insurance in 30-60 days, with current insurer and fleet size. ${s.total} fleets in the ${s.listDate} list. ${s.rows.length} shown free; $129 every 4 weeks, paid first, cancel any time.`,
        updated: 'October 18, 2026',
        eyebrow: `For agencies that write trucking in ${s.name}`,
        h1: `${s.name} fleets due to renew in 30-60 days, every Monday`,
        leadStrong: `Each Monday: every ${s.name} trucking company with 3 or more power units whose liability filing comes up for renewal in 30 to 60 days, with its current insurer.`,
        leadRest: `${s.rows.length} real rows from the ${s.listDate} list are below (download them as CSV, no card). ${more} more ${s.name} fleets are in that list.`,
        sample: {
            heading: `${s.rows.length} real ${s.name} fleets from the ${s.listDate} list`,
            csv: { href: `/samples/trucking-renewals-${code}.csv`, label: `Download these ${s.rows.length} rows (CSV, no card, no signup)` },
            columns: ['Company', 'City', 'Power units', 'Current insurer', 'Liability limit', 'Est. renewal'],
            rows: s.rows,
            note: `Here we hide owner, phone, email, DOT and MC number; your list has them. ${more} more ${s.name} fleets in the same list.`,
        },
        pay: { href: `${ICP1_A_PAY_URL}?client_reference_id=feed-renewals-${code}`, label: 'Get the list ($129)' },
        startSubject: `Trucking renewals: ${s.name}`,
        startBody: 'My agency:\nCounties or cities I write:\n',
        startLabel: 'Ask a question first',
        priceNote: '$129 every 4 weeks, paid first, month to month, cancel any time.',
        overPay: [
            '$129 every 4 weeks (about $32 a week) · paid first · cancel any time',
            `Source: FMCSA open data (data.transportation.gov) · ${s.listDate} list: ${s.total} ${s.name} fleets renewing in 30-60 days`,
            'Run by Sibi Narendran, founder of Dooza.',
        ],
        sendHeading: 'What is in each Monday list',
        sendIntro: `Built from FMCSA open data (data.transportation.gov): carrier registrations plus the federal liability filings insurers make (BMC-91X). The ${s.listDate} ${s.name} list had ${s.total} fleets.`,
        send: [
            ['Company, DOT and MC number', 'From the FMCSA registration.'],
            ['Owner or officer name', 'As filed with FMCSA.'],
            ['Phone and email', 'Emails checked with NeverBounce; phones as filed with FMCSA. Rows with no phone are left out.'],
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
            { text: '$129 every 4 weeks, paid first, month to month, cancel any time.', linkText: 'Get the list', href: `${ICP1_A_PAY_URL}?client_reference_id=feed-renewals-${code}` },
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
                answer: '$129 every 4 weeks, paid first, month to month, cancel any time.',
            },
        ],
        service: {
            name: `${s.name} trucking renewals list`,
            serviceType: 'Trucking insurance renewal list',
            audienceType: 'Commercial insurance agencies that write trucking',
            offers: [{ price: '129', description: 'Every 4 weeks, paid first.' }],
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
