import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// BET7 step 2 reply-stage pages, one per state (Odysseus 2026-10-17 21:01 k49dpid5): sample with no card, checkout right below it
// (clone of TruckerDB; learnings/research/2026-10-17-list-sellers-free-to-paid.md in Odysseus's home).
// Rows: real incorporated fleets from /home/odysseus/data/feeds/<ST>_bet7_2026-10-12.csv (FMCSA open data); phone, email, officer, DOT/MC hidden.
// Counts = rows in each state's latest list (listDate); samples re-picked 2026-11-03 from each state's newest feed (Dec 6-14 dates, 2-60 power units). Renewal dates are estimates (anniversary of the current BMC-91X filing).
const STATES = {
    fl: {
        name: 'Florida',
        total: 209,
        listDate: 'October 19',
        rows: [
            ['Xtreme Property Services Inc', 'Okeechobee', '6', 'Progressive Express Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['US Advance Transportation Inc', 'Coral Springs', '27', 'Texas Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Michael Lessard Inc', 'Ocala', '15', 'Imperium Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Professional Logistics Inc', 'Miami', '9', 'Trisura Specialty Insurance Company', '$750,000', 'Dec 11, 2026'],
            ['E2e Logistics Inc', 'Miami', '8', 'Clear Blue Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Clever Truck Services LLC', 'Medley', '25', 'County Hall Insurance Company, Inc A Rr Group', '$750,000', 'Dec 12, 2026'],
            ['Kudzue 3 Trucking Inc', 'Jacksonville', '9', 'Clear Blue Insurance Company', '$750,000', 'Dec 13, 2026'],
            ['B & E Logistics Of Macclenny LLC', 'Macclenny', '11', 'Lancer Insurance Company', '$750,000', 'Dec 14, 2026'],
        ],
    },
    tx: {
        name: 'Texas',
        total: 451,
        listDate: 'October 22',
        rows: [
            ['H T Bar Inc', 'Aledo', '47', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
            ['Brammer Pipe & Steel Inc', 'Gainesville', '33', 'Everest Denali Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Hybrid Logistics LLC', 'Irving', '16', 'Canal Insurance Co.', '$750,000', 'Dec 10, 2026'],
            ['Afro Transport LLC', 'Rosenberg', '5', 'Accredited Surety And Casualty Company, Inc.', '$750,000', 'Dec 10, 2026'],
            ['Jose Moya', 'Meadow', '5', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
            ['Rubio’s Trucking LLC', 'Horizon City', '5', 'Progressive County Mutual', '$750,000', 'Dec 10, 2026'],
            ['Bl Transport Inc', 'Greenville', '40', 'Great West Casualty Co.', '$1,000,000', 'Dec 11, 2026'],
            ['Galveston Transportation LLC', 'Texas City', '33', 'Trisura Specialty Insurance Company', '$4,000,000', 'Dec 11, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 548,
        listDate: 'October 12',
        rows: [
            ['First Class Charter Inc', 'Hayward', '21', 'Trisura Specialty Insurance Company', '$4,000,000', 'Dec 10, 2026'],
            ['Gli Logistics', 'Santa Fe Springs', '20', 'Msig Specialty Insurance USA Inc', '$1,000,000', 'Dec 10, 2026'],
            ['Lion Heart Carriers Inc', 'Bakersfield', '12', 'Northland Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Goblirsch Trucking Inc', 'Ceres', '11', 'Northland Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Mpx Trans Inc', 'Stockton', '8', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
            ['Pacific Cargo Inc', 'San Francisco', '8', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
        ],
    },
    ny: {
        name: 'New York',
        total: 136,
        listDate: 'October 10',
        rows: [
            ['Trucking Alliance LLC', 'Rochester', '20', 'Canal Insurance Co.', '$750,000', 'Dec 6, 2026'],
            ['Leo Boice & Sons Inc', 'Kingston', '8', 'The Phoenix Insurance Co', '$1,000,000', 'Dec 6, 2026'],
            ['Zafar Produce Inc', 'New Windsor', '8', 'Selective Insurance Company Of America', '$750,000', 'Dec 6, 2026'],
            ['Carmel Trucking LLC', 'Bloomfield', '5', 'Sentry Select Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Buckley Auto Transport II Inc', 'Antwerp', '5', 'Northland Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['We’re Pretty Darn Quick Delivery Service Inc', 'Rochester', '5', 'Progressive Casualty Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['Rozell Energy Company Inc', 'Whitehall', '8', 'Federated Mutual Insurance Co.', '$5,000,000', 'Dec 8, 2026'],
        ],
    },
    il: {
        name: 'Illinois',
        total: 540,
        listDate: 'October 21',
        rows: [
            ['Likya Logistic Services Inc', 'Willow Springs', '20', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
            ['Load Monster Inc', 'Rolling Meadows', '17', 'Sentry Select Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['We Transport Inc', 'Gurnee', '17', 'Northland Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Gba Group LLC', 'Burr Ridge', '10', 'Sentry Select Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Mejer Corp', 'Willowbrook', '10', 'Artisan & Truckers Casualty Company', '$750,000', 'Dec 10, 2026'],
            ['Blue Dots LLC', 'Palatine', '8', 'Starstone National Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['US Hauling Inc', 'Oak Lawn', '7', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Dennel Cartage Inc', 'Hainesville', '6', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
        ],
    },
    ok: {
        name: 'Oklahoma',
        total: 69,
        listDate: 'October 10',
        rows: [
            ['Taz Trucking LLC', 'Poteau', '32', 'National Interstate Insurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['H2o Transports LLC', 'Reydon', '22', 'New York Marine & General Ins. Co.', '$1,000,000', 'Dec 8, 2026'],
            ['Enviromental Remediation Specialists Inc', 'Tulsa', '8', 'Ace American Insurance Company', '$1,000,000', 'Dec 9, 2026'],
        ],
    },
    ks: {
        name: 'Kansas',
        total: 105,
        listDate: 'October 13',
        rows: [
            ['A Arnold Of Kansas City LLC', 'Olathe', '14', 'Southern Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Kc Hauling LLC', 'Kansas City', '14', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Leon Harrison', 'Topeka', '7', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Manuel Correa Montoya', 'Ulysses', '5', 'Berkley Casualty Company', '$750,000', 'Dec 10, 2026'],
            ['Asap Transport And Excavating LLC', 'Humboldt', '3', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
            ['Lucas Towing Of Kansas LLC', 'Salina', '5', 'Amguard Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Billmans Mobile Home Moving LLC', 'Parsons', '5', 'United Financial Casualty Company', '$750,000', 'Dec 12, 2026'],
            ['Pb Trucking & Sons LLC', 'Council Grove', '4', 'Great West Casualty Co.', '$1,000,000', 'Dec 12, 2026'],
        ],
    },
    ma: {
        name: 'Massachusetts',
        total: 124,
        listDate: 'October 22',
        rows: [
            ['Raul Lopez', 'Ftichburg', '8', 'Arbella Protection Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Coach America LLC', 'Pittsfield', '7', 'Safety Insurance Co.', '$5,000,000', 'Dec 10, 2026'],
            ['Gregory Everson', 'Granby', '7', 'Selective Insurance Company Of The Southeast', '$750,000', 'Dec 10, 2026'],
            ['Royal Coach II LLC', 'Ludlow', '6', 'Arbella Protection Insurance Company', '$1,500,000', 'Dec 11, 2026'],
            ['Mid Transport Inc', 'Holyoke', '20', 'Safety Insurance Co.', '$750,000', 'Dec 12, 2026'],
            ['C & B Snow Removal Services Inc', 'Springfield', '6', 'Ngm Insurance Company', '$1,000,000', 'Dec 12, 2026'],
            ['Robert Childs Inc', 'South Dennis', '53', 'Acadia Insurance Company', '$1,000,000', 'Dec 13, 2026'],
            ['John Perry', 'Carver', '17', 'Safety Insurance Co.', '$750,000', 'Dec 13, 2026'],
        ],
    },
    ky: {
        name: 'Kentucky',
        total: 82,
        listDate: 'October 22',
        rows: [
            ['Elite Trucking Services LLC', 'Mayfield', '18', 'Sentry Select Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Double A Hauling LLC', 'Morningview', '8', 'Erie Insurance Exchange', '$750,000', 'Dec 10, 2026'],
            ['R And K Contracting LLC', 'Louisville', '6', 'Secura Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['David L Bowling', 'Rush', '5', 'Sentry Select Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Denali Towing LLC', 'Nicholasville', '6', 'Accelerant National Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['A&E Trucking LLC', 'Bowling Green', '31', 'West Bend Insurance Company', '$750,000', 'Dec 12, 2026'],
            ['Bobby Bentley', 'Jenkins', '7', 'The Travelers Indemnity Co. Of Connecticut', '$750,000', 'Dec 12, 2026'],
            ['T & L Commodity Transport LLC', 'Paris', '5', 'Southern States Insurance Exchange', '$1,000,000', 'Dec 12, 2026'],
        ],
    },
    oh: {
        name: 'Ohio',
        total: 402,
        listDate: 'October 21',
        rows: [
            ['Bonnie Speed Delivery Incorporated', 'Cleveland', '35', 'Concert Specialty Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Jade Shank Trucking LLC', 'Napoleon', '19', 'Erie Insurance Exchange', '$750,000', 'Dec 10, 2026'],
            ['Mjm Express LLC', 'Greenfield', '18', 'Sentry Select Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Reeds Inc', 'Massillon', '17', 'United Ohio Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Bonnie Speed Of Columbus LLC', 'Plain City', '15', 'Concert Specialty Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['1 Team Trucking LLC', 'Sunbury', '11', 'Geico Marine Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Myriam K-d Transportation LLC', 'Lockland', '7', 'Universal Casualty Risk Retention Group, Inc', '$750,000', 'Dec 10, 2026'],
            ['Inspyre Logistics Inc', 'Avon Lake', '6', 'Motor Transport Mutual RRG Inc', '$750,000', 'Dec 10, 2026'],
        ],
    },
    pa: {
        name: 'Pennsylvania',
        total: 367,
        listDate: 'October 21',
        rows: [
            ['Takata Trans Inc', 'Delaware Water Gap', '57', 'Ms Transverse Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Noerr Trucking LLC', 'Lewistown', '21', 'Acuity, A Mutual Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Carl R Smith Inc', 'Butler', '20', 'Acuity, A Mutual Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['USA Cargo Express Inc', 'Furlong', '17', 'Mitsui Sumitomo Insurance USA Inc.', '$1,000,000', 'Dec 10, 2026'],
            ['Videotek Construction LLC', 'Waynesburg', '11', 'The Cincinnati Insurance Co.', '$1,000,000', 'Dec 10, 2026'],
            ['Aurora Freight Lines Inc', 'Philadelphia', '10', 'Northland Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Dimex Trans Inc', 'Morrisville', '9', 'Starstone National Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Ag Equipment Specialties LLC', 'Mercersburg', '8', 'Southern States Insurance Exchange', '$1,000,000', 'Dec 10, 2026'],
        ],
    },
    in: {
        name: 'Indiana',
        total: 177,
        listDate: 'October 22',
        rows: [
            ['Cater Transport LLC', 'Hammond', '56', 'Secura Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Pfi Trucking LLC', 'Geneva', '36', 'Sentry Select Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Desert Caravan Inc', 'Plainfield', '16', 'Trisura Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Pious Trans Inc', 'Greenwood', '6', 'Geico Marine Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Nirvair Trucking Inc', 'Mccordsville', '12', 'Geico Marine Insurance Company', '$750,000', 'Dec 11, 2026'],
            ['Sahib Xpress Line Inc', 'Indianapolis', '7', 'Canal Insurance Co.', '$750,000', 'Dec 11, 2026'],
            ['Doc’s Crane & Rigging Inc', 'Roanoke', '5', 'Addison Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Hanibal Gmh Trucking LLC', 'Indianapolis', '30', 'Geico Marine Insurance Company', '$750,000', 'Dec 12, 2026'],
        ],
    },
    ga: {
        name: 'Georgia',
        total: 218,
        listDate: 'October 21',
        rows: [
            ['Corner Lot Inc', 'Jackson', '20', 'Incline Americas Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Reeves Wrecker Service Inc', 'Appling', '13', 'Clear Spring Property And Casualty Company', '$1,000,000', 'Dec 10, 2026'],
            ['Ocean Truckers Inc', 'Smyrna', '7', 'Great West Casualty Co.', '$1,000,000', 'Dec 10, 2026'],
            ['J W Shuman Services Inc', 'Athens', '11', 'Central Mutual Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Derek F Landon', 'Jesup', '7', 'Acadia Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['K Peterson LLC', 'Fairburn', '5', 'Canal Insurance Co.', '$750,000', 'Dec 12, 2026'],
            ['Imex US LLC', 'Atlanta', '20', 'Concert Specialty Insurance Company', '$750,000', 'Dec 13, 2026'],
            ['Midnight Coach LLC', 'Woodstock', '12', 'Rli Insurance Company', '$1,500,000', 'Dec 13, 2026'],
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
        title: `${s.name} Trucking Insurance X-Dates, Every Monday`,
        description: `${s.name} trucking insurance x-dates: fleets renewing in 30-60 days (estimated), with current insurer and fleet size. ${s.total} fleets in the ${s.listDate} list. ${s.rows.length} shown free; $129 every 4 weeks, paid first, cancel any time.`,
        updated: 'October 18, 2026',
        eyebrow: `For agencies that write trucking in ${s.name}`,
        h1: `${s.name} trucking insurance x-dates: fleets due to renew in 30-60 days, every Monday`,
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
                question: 'What is an x-date in trucking insurance?',
                answer: `The x-date (expiration date) is when a fleet’s current policy ends, the day an agency wants to be quoting by. Here it is estimated from the federal liability filing: each ${s.name} fleet in the list has an estimated x-date 30 to 60 days out, with its current insurer and liability limit.`,
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
