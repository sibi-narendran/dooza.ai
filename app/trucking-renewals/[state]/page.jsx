import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// BET7 step 2 reply-stage pages, one per state (Odysseus 2026-10-17 21:01 k49dpid5): sample with no card, checkout right below it
// (clone of TruckerDB; learnings/research/2026-10-17-list-sellers-free-to-paid.md in Odysseus's home).
// Rows: real incorporated fleets from /home/odysseus/data/feeds/<ST>_bet7_2026-10-12.csv (FMCSA open data); phone, email, officer, DOT/MC hidden.
// Counts = rows in each state's latest list (listDate); samples re-picked 2026-11-01 from each state's newest feed (Dec 3-11 dates, 2-60 power units). Renewal dates are estimates (anniversary of the current BMC-91X filing).
const STATES = {
    fl: {
        name: 'Florida',
        total: 209,
        listDate: 'October 19',
        rows: [
            ['US Carriers LLC', 'Ocala', '10', 'Progressive Express Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['E M 1 Transport LLC', 'Jacksonville', '5', 'Canal Insurance Co.', '$750,000', 'Dec 8, 2026'],
            ['M & N Transport Express LLC', 'Miami', '5', 'Progressive Casualty Lines Co', '$1,000,000', 'Dec 8, 2026'],
            ['Xtreme Property Services Inc', 'Okeechobee', '6', 'Progressive Express Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['US Advance Transportation Inc', 'Coral Springs', '27', 'Texas Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Michael Lessard Inc', 'Ocala', '15', 'Imperium Insurance Company', '$1,000,000', 'Dec 11, 2026'],
            ['Professional Logistics Inc', 'Miami', '9', 'Trisura Specialty Insurance Company', '$750,000', 'Dec 11, 2026'],
            ['E2e Logistics Inc', 'Miami', '8', 'Clear Blue Insurance Company', '$1,000,000', 'Dec 11, 2026'],
        ],
    },
    tx: {
        name: 'Texas',
        total: 451,
        listDate: 'October 22',
        rows: [
            ['Red Diamond Energy Services Inc', 'Abilene', '60', 'Bitco General Insurance Corporation', '$750,000', 'Dec 8, 2026'],
            ['Spartan Roar LLC', 'Kermit', '19', 'Guideone Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Eagle Express Inc', 'Dallas', '17', 'Worth Insurance Co', '$1,000,000', 'Dec 8, 2026'],
            ['Wm Shipping Services Inc', 'Crosby', '13', 'Clear Blue Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Sas Towing And Recovery Inc', 'Liberty Hill', '10', 'Trisura Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['R&R Hotshot Services LLC', 'Lubbock', '5', 'Geico County Mutual Insurance Co.', '$750,000', 'Dec 8, 2026'],
            ['West Texas Oilfield Services LLC', 'Midland', '24', 'Navigators Specialty Insurance Company', '$750,000', 'Dec 9, 2026'],
            ['Jya Transport Inc', 'Fresno', '13', 'Geico County Mutual Insurance Co.', '$1,000,000', 'Dec 9, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 548,
        listDate: 'October 12',
        rows: [
            ['Ram Ram Inc', 'Eastvale', '8', 'Southlake Specialty Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Can Trail Transportation LLC', 'Riverside', '6', 'Sutton Specialty Insurance Co', '$750,000', 'Dec 8, 2026'],
            ['On Point Logistic Solutions Inc', 'San Mateo', '28', 'Old Republic Insurance Company', '$1,000,000', 'Dec 9, 2026'],
            ['Pico Boys Logistics Inc', 'Moreno Valley', '15', 'United Financial Casualty Company', '$750,000', 'Dec 9, 2026'],
            ['Jg Trucking1 LLC', 'Hacienda Hts', '14', 'Db Insurance Co., Ltd (u.s.branch)', '$750,000', 'Dec 9, 2026'],
            ['Maria Guadalupe Torres', 'Calexico', '10', 'Qualitas Insurance Company', '$1,000,000', 'Dec 9, 2026'],
        ],
    },
    ny: {
        name: 'New York',
        total: 136,
        listDate: 'October 10',
        rows: [
            ['Rozell Energy Company Inc', 'Whitehall', '8', 'Federated Mutual Insurance Co.', '$5,000,000', 'Dec 8, 2026'],
            ['Morgan And Brother Manhattan Storage Company Inc', 'Armonk', '5', 'Milford Casualty Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['All County Hook Up Towing Inc', 'Freeport', '4', 'Erie Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['K One Service Inc', 'Brooklyn', '3', 'Country-wide Insurance Co.', '$1,000,000', 'Dec 8, 2026'],
            ['Mmi Trucking LLC', 'Cheektowaga', '3', 'Progressive Preferred Insurance Co.', '$750,000', 'Dec 8, 2026'],
            ['American Airfreight Trucking Corp', 'Farmingdale', '17', 'National Liability & Fire Ins Co.', '$750,000', 'Dec 9, 2026'],
            ['Enp Environmental Inc', 'Long Beach', '3', 'Great Divide Insurance Company', '$1,000,000', 'Dec 9, 2026'],
        ],
    },
    il: {
        name: 'Illinois',
        total: 540,
        listDate: 'October 21',
        rows: [
            ['Iron Way Transportation Inc', 'Oak Brook', '57', 'Ms Transverse Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Bione Truck Service Inc', 'Christopher', '11', 'Erie Insurance Exchange', '$1,000,000', 'Dec 8, 2026'],
            ['Mja Express Inc', 'Huntley', '8', 'Northland Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Famo Freight LLC', 'Silvis', '5', 'Trisura Specialty Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Terrazas Trucking Inc', 'Calumet City', '5', 'Geico Marine Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Bm Trans Inc', 'West Chicago', '17', 'Canal Insurance Co.', '$750,000', 'Dec 9, 2026'],
            ['Kgz Pro Inc', 'Hoffman Estates', '9', 'Universal Casualty Risk Retention Group, Inc', '$750,000', 'Dec 9, 2026'],
            ['Map Transportation Inc', 'Bensenville', '6', 'Geico Marine Insurance Company', '$750,000', 'Dec 9, 2026'],
        ],
    },
    ok: {
        name: 'Oklahoma',
        total: 69,
        listDate: 'October 10',
        rows: [
            ['Bruner’s Towing & Recovery LLC', 'Stillwell', '16', 'Progressive Northern Insurance Company', '$1,000,000', 'Dec 3, 2026'],
            ['Dacoma Farmers Cooperative Inc', 'Dacoma', '18', 'Triangle Insurance Company Inc.', '$1,000,000', 'Dec 4, 2026'],
            ['Mustang Heavy Haul LLC', 'Tulsa', '6', 'Zurich American Insurance Company', '$1,000,000', 'Dec 4, 2026'],
            ['Adams Farms LLC', 'Baker', '5', 'American National Property And Casualty Co.', '$1,000,000', 'Dec 4, 2026'],
            ['Taz Trucking LLC', 'Poteau', '32', 'National Interstate Insurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['H2o Transports LLC', 'Reydon', '22', 'New York Marine & General Ins. Co.', '$1,000,000', 'Dec 8, 2026'],
        ],
    },
    ks: {
        name: 'Kansas',
        total: 105,
        listDate: 'October 13',
        rows: [
            ['Jsc Trucking Inc', 'Olathe', '8', 'Northland Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Tri-state Carriers Inc', 'Goodland', '8', 'Great West Casualty Co.', '$750,000', 'Dec 8, 2026'],
            ['T&D Twin Trucking LLC', 'Olathe', '5', 'Great West Casualty Co.', '$1,000,000', 'Dec 9, 2026'],
            ['A Arnold Of Kansas City LLC', 'Olathe', '14', 'Southern Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Kc Hauling LLC', 'Kansas City', '14', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Leon Harrison', 'Topeka', '7', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Manuel Correa Montoya', 'Ulysses', '5', 'Berkley Casualty Company', '$750,000', 'Dec 10, 2026'],
            ['Lucas Towing Of Kansas LLC', 'Salina', '5', 'Amguard Insurance Company', '$1,000,000', 'Dec 11, 2026'],
        ],
    },
    ma: {
        name: 'Massachusetts',
        total: 124,
        listDate: 'October 22',
        rows: [
            ['Kahm Transportation LLC', 'Palmer', '11', 'American Automobile Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Totman Enterprises Inc', 'Marshfield', '28', 'National Interstate Insurance Company', '$5,000,000', 'Dec 9, 2026'],
            ['Stipp Industries Inc', 'Andover', '17', 'Central Mutual Insurance Company', '$750,000', 'Dec 9, 2026'],
            ['Raymond Breton Inc', 'Ludlow', '7', 'Middlesex Insurance Co.', '$750,000', 'Dec 9, 2026'],
            ['Raul Lopez', 'Ftichburg', '8', 'Arbella Protection Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Coach America LLC', 'Pittsfield', '7', 'Safety Insurance Co.', '$5,000,000', 'Dec 10, 2026'],
            ['Gregory Everson', 'Granby', '7', 'Selective Insurance Company Of The Southeast', '$750,000', 'Dec 10, 2026'],
            ['Royal Coach II LLC', 'Ludlow', '6', 'Arbella Protection Insurance Company', '$1,500,000', 'Dec 11, 2026'],
        ],
    },
    ky: {
        name: 'Kentucky',
        total: 82,
        listDate: 'October 22',
        rows: [
            ['Doug Cobb Trucking LLC', 'Barbourville', '12', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Arrow Transport LLC', 'Louisville', '10', 'United Financial Casualty Company', '$750,000', 'Dec 8, 2026'],
            ['Madna LLC', 'Florence', '20', 'Canal Insurance Co.', '$750,000', 'Dec 9, 2026'],
            ['Elite Trucking Services LLC', 'Mayfield', '18', 'Sentry Select Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Double A Hauling LLC', 'Morningview', '8', 'Erie Insurance Exchange', '$750,000', 'Dec 10, 2026'],
            ['R And K Contracting LLC', 'Louisville', '6', 'Secura Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['David L Bowling', 'Rush', '5', 'Sentry Select Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Denali Towing LLC', 'Nicholasville', '6', 'Accelerant National Insurance Company', '$1,000,000', 'Dec 11, 2026'],
        ],
    },
    oh: {
        name: 'Ohio',
        total: 402,
        listDate: 'October 21',
        rows: [
            ['Karmi Oil LLC', 'Dublin', '17', 'Greenwich Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Firefly Express LLC', 'Columbus', '10', 'Great West Casualty Co.', '$1,000,000', 'Dec 8, 2026'],
            ['Leoxpress Logistics LLC', 'Galloway', '6', 'Progressive Preferred Insurance Co.', '$750,000', 'Dec 8, 2026'],
            ['Seb Transport Inc', 'Cincinnati', '5', 'Canal Insurance Co.', '$750,000', 'Dec 8, 2026'],
            ['Thermo Trans Inc', 'Miamisburg', '5', 'Berkley Casualty Company', '$750,000', 'Dec 8, 2026'],
            ['Jerry Ritter Trucking Inc', 'Goshen', '55', 'The Cincinnati Insurance Co.', '$750,000', 'Dec 9, 2026'],
            ['Mufasa LLC', 'Galloway', '48', 'Great West Casualty Co.', '$1,000,000', 'Dec 9, 2026'],
            ['Uzbek Truck World Inc', 'Mason', '31', 'Trisura Insurance Company', '$1,000,000', 'Dec 9, 2026'],
        ],
    },
    pa: {
        name: 'Pennsylvania',
        total: 367,
        listDate: 'October 21',
        rows: [
            ['Casilli Corporation', 'Mcmurray', '18', 'Zurich American Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Hawks Towing And Recovery LLC', 'Gilbertsville', '10', 'Employers Mutual Casualty Co.', '$1,000,000', 'Dec 8, 2026'],
            ['Mjb Trucking LLC', 'Derry', '7', 'Acuity, A Mutual Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Mmad Trucking LLC', 'Ulster', '6', 'United Financial Casualty Company', '$750,000', 'Dec 8, 2026'],
            ['Emilie Auto Repair & Towing LLC', 'Levittown', '5', 'Selective Way Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Jim Goodban & Dan Goodban', 'Norht East', '5', 'The Peninsula Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Ali Uz Trans Inc', 'Morrisville', '49', 'Sentry Select Insurance Company', '$750,000', 'Dec 9, 2026'],
            ['Holcombe Energy Resource LLC', 'Factoryville', '27', 'Imperium Insurance Company', '$1,000,000', 'Dec 9, 2026'],
        ],
    },
    in: {
        name: 'Indiana',
        total: 177,
        listDate: 'October 22',
        rows: [
            ['5gen Transportation LLC', 'Tell City', '6', 'Progressive Southeastern Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Fal Trucking Inc', 'East Chicago', '5', 'Db Insurance Co., Ltd (u.s.branch)', '$750,000', 'Dec 9, 2026'],
            ['State Link Inc', 'Greenwood', '5', 'Berkley Casualty Company', '$750,000', 'Dec 9, 2026'],
            ['Cater Transport LLC', 'Hammond', '56', 'Secura Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Pfi Trucking LLC', 'Geneva', '36', 'Sentry Select Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Desert Caravan Inc', 'Plainfield', '16', 'Trisura Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Pious Trans Inc', 'Greenwood', '6', 'Geico Marine Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Nirvair Trucking Inc', 'Mccordsville', '12', 'Geico Marine Insurance Company', '$750,000', 'Dec 11, 2026'],
        ],
    },
    ga: {
        name: 'Georgia',
        total: 218,
        listDate: 'October 21',
        rows: [
            ['Straight Path Logistics LLC', 'Dacula', '5', 'Bricktown Specialty Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Dobbs Equipment Southeast LLC', 'Albany', '43', 'Sentry Select Insurance Company', '$750,000', 'Dec 9, 2026'],
            ['Time Transportation & Leasing Inc', 'Augusta', '12', 'Starstone National Insurance Company', '$750,000', 'Dec 9, 2026'],
            ['Flst Logistics LLC', 'Pooler', '8', 'Great West Casualty Co.', '$1,000,000', 'Dec 9, 2026'],
            ['Bolt LLC', 'Carrollton', '6', 'Progressive Mountain Insurance Company Of Ohi', '$1,500,000', 'Dec 9, 2026'],
            ['L&M Truck Lines LLC', 'Stockbridge', '6', 'Canal Insurance Co.', '$750,000', 'Dec 9, 2026'],
            ['Sunshine Logistics LLC', 'Stone Mountain', '6', 'Great West Casualty Co.', '$1,000,000', 'Dec 9, 2026'],
            ['Corner Lot Inc', 'Jackson', '20', 'Incline Americas Insurance Company', '$750,000', 'Dec 10, 2026'],
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
