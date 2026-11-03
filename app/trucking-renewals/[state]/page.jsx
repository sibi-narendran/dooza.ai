import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// BET7 step 2 reply-stage pages, one per state (Odysseus 2026-10-17 21:01 k49dpid5): sample with no card, checkout right below it
// (clone of TruckerDB; learnings/research/2026-10-17-list-sellers-free-to-paid.md in Odysseus's home).
// Rows: real incorporated fleets from /home/odysseus/data/feeds/<ST>_bet7_2026-10-12.csv (FMCSA open data); phone, email, officer, DOT/MC hidden.
// Counts = rows in each state's latest list (listDate); samples re-picked 2026-11-03 from each state's newest feed (Dec 6-10 dates, 2-60 power units; Argus renew5 feeds 2026-11-03). Renewal dates are estimates (anniversary of the current BMC-91X filing).
const STATES = {
    fl: {
        name: 'Florida',
        total: 216,
        listDate: 'November 3',
        rows: [
            ['Jampac Transportation Inc', 'Groveland', '31', 'Canal Insurance Co.', '$750,000', 'Dec 6, 2026'],
            ['Ravan Moving & Storage Inc', 'Saint Augustine', '7', 'Southern Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Destin Moving And Storage LLC', 'Santa Rosa Beach', '5', 'Transguard Insurance Company Of America Inc.', '$750,000', 'Dec 6, 2026'],
            ['D&A Cargo LLC', 'Wellington', '13', 'County Hall Insurance Company, Inc A Rr Group', '$750,000', 'Dec 7, 2026'],
            ['Jp Services Of Sarasota LLC', 'Sarasota', '11', 'Clear Blue Insurance Company', '$1,000,000', 'Dec 7, 2026'],
            ['Dardi Logistics Inc', 'Lutz', '7', 'Southwind Risk Retention Group Inc', '$750,000', 'Dec 7, 2026'],
            ['Go-gettas Transport LLC', 'Fleming Island', '6', 'Geico Marine Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['US Carriers LLC', 'Ocala', '10', 'Progressive Express Insurance Company', '$1,000,000', 'Dec 8, 2026'],
        ],
    },
    tx: {
        name: 'Texas',
        total: 515,
        listDate: 'November 3',
        rows: [
            ['Jgl Transportation LLC', 'Dallas', '19', 'Trisura Specialty Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Durans Trucking LLC', 'Haslet', '12', 'National Union Fire Insurance Company Of Pittsburgh, Pa.', '$750,000', 'Dec 6, 2026'],
            ['Ec & Sons Transport LLC', 'Hereford', '11', 'Worth Insurance Co', '$750,000', 'Dec 6, 2026'],
            ['Right 1 Transport LLC', 'Sugar Land', '11', 'Universal Casualty Risk Retention Group, Inc', '$1,000,000', 'Dec 6, 2026'],
            ['Iag Trucking LLC', 'Rosharon', '10', 'Geico General Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Axis Transportation And Logistics LLC', 'Riesel', '9', 'Sentry Select Insurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['Almas Transport Inc', 'Dallas', '6', 'Highlander Specialty Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Laee LLC', 'Georgetown', '5', 'Great West Casualty Co.', '$1,000,000', 'Dec 6, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 621,
        listDate: 'November 3',
        rows: [
            ['360 New Way Inc', 'Gardena', '45', 'Db Insurance Co., Ltd (u.s.branch)', '$750,000', 'Dec 6, 2026'],
            ['R Preet Trucking Inc', 'Fresno', '45', 'Great West Casualty Co.', '$1,000,000', 'Dec 6, 2026'],
            ['Pattar Trans Inc', 'Turlock', '25', 'Clear Blue Specialty Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Hjm International Logistics LLC', 'San Diego', '24', 'New Horizon Insurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['Turkuaz LLC', 'Santa Monica', '12', 'National Transportation Insurance Co RRG, LLC', '$750,000', 'Dec 6, 2026'],
            ['Ksn Trans Inc', 'Turlock', '10', 'Accredited Specialty Insurance Company', '$750,000', 'Dec 6, 2026'],
        ],
    },
    ny: {
        name: 'New York',
        total: 228,
        listDate: 'November 3',
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
        total: 635,
        listDate: 'November 3',
        rows: [
            ['Prime Wheels', 'Genoa', '33', 'Geico Marine Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Mgl Auto Transport Inc', 'Schaumburg', '15', 'National Union Fire Ins. Co. Of Pitsbgh. Pa', '$1,000,000', 'Dec 6, 2026'],
            ['Dolce Transportation Company', 'Joliet', '12', 'Northland Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Gochi Express LLC', 'Naperville', '12', 'Geico Marine Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Lighten The Load Inc', 'Itasca', '11', 'Selective Insurance Company Of The Southeast', '$750,000', 'Dec 6, 2026'],
            ['Smoking Wheels Inc', 'Chicago', '10', 'Trisura Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Donnell Trucking LLC', 'Humboldt', '8', 'Northland Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Pankaster Incorporated', 'Elk Grove Vlg', '7', 'Geico Marine Insurance Company', '$750,000', 'Dec 6, 2026'],
        ],
    },
    ok: {
        name: 'Oklahoma',
        total: 87,
        listDate: 'November 3',
        rows: [
            ['Taz Trucking LLC', 'Poteau', '32', 'National Interstate Insurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['H2o Transports LLC', 'Reydon', '22', 'New York Marine & General Ins. Co.', '$1,000,000', 'Dec 8, 2026'],
            ['Enviromental Remediation Specialists Inc', 'Tulsa', '8', 'Ace American Insurance Company', '$1,000,000', 'Dec 9, 2026'],
        ],
    },
    ks: {
        name: 'Kansas',
        total: 163,
        listDate: 'November 3',
        rows: [
            ['J & S Trucking Inc', 'Prairie View', '10', 'Great West Casualty Co.', '$1,000,000', 'Dec 6, 2026'],
            ['Sebes Hay LLC', 'Larned', '10', 'Acadia Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Harrod’s Inc', 'Howard', '15', 'National American Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Jsc Trucking Inc', 'Olathe', '8', 'Northland Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Tri-state Carriers Inc', 'Goodland', '8', 'Great West Casualty Co.', '$750,000', 'Dec 8, 2026'],
            ['T&D Twin Trucking LLC', 'Olathe', '5', 'Great West Casualty Co.', '$1,000,000', 'Dec 9, 2026'],
            ['Kc Hauling LLC', 'Kansas City', '14', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 10, 2026'],
            ['Leon Harrison', 'Topeka', '7', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 10, 2026'],
        ],
    },
    ma: {
        name: 'Massachusetts',
        total: 168,
        listDate: 'November 3',
        rows: [
            ['Bursaw Gas & Oil Inc', 'Acton', '12', 'Houston Specialty Insurance Company', '$4,000,000', 'Dec 6, 2026'],
            ['Foco Inc', 'Framingham', '11', 'Arbella Protection Insurance Company', '$5,000,000', 'Dec 6, 2026'],
            ['Express Towing Inc', 'Weymouth', '29', 'Arbella Protection Insurance Company', '$1,000,000', 'Dec 7, 2026'],
            ['Rinn Corp', 'Burlington', '8', 'Arbella Protection Insurance Company', '$1,000,000', 'Dec 7, 2026'],
            ['A & D Services Inc', 'Waltham', '7', 'Employers Mutual Casualty Co.', '$750,000', 'Dec 7, 2026'],
            ['Mass Trucking Services Inc', 'Hyde Park', '7', 'Safety Insurance Co.', '$750,000', 'Dec 7, 2026'],
            ['Kahm Transportation LLC', 'Palmer', '11', 'American Automobile Insurance Company', '$1,000,000', 'Dec 8, 2026'],
            ['Ozod LLC', 'Mansfield', '8', 'Pilgrim Insurance Company', '$750,000', 'Dec 8, 2026'],
        ],
    },
    ky: {
        name: 'Kentucky',
        total: 119,
        listDate: 'November 3',
        rows: [
            ['Ada LLC', 'Waddy', '6', 'Central Mutual Insurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['Yassmine Trans LLC', 'Louisville', '5', 'United Financial Casualty Company', '$750,000', 'Dec 6, 2026'],
            ['All About Your Delivery LLC', 'Lexington', '7', 'Progressive Preferred Insurance Co.', '$750,000', 'Dec 7, 2026'],
            ['Doug Cobb Trucking LLC', 'Barbourville', '12', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Arrow Transport LLC', 'Louisville', '10', 'United Financial Casualty Company', '$750,000', 'Dec 8, 2026'],
            ['Madna LLC', 'Florence', '20', 'Canal Insurance Co.', '$750,000', 'Dec 9, 2026'],
            ['Elite Trucking Services LLC', 'Mayfield', '18', 'Sentry Select Insurance Company', '$1,000,000', 'Dec 10, 2026'],
            ['Double A Hauling LLC', 'Morningview', '8', 'Erie Insurance Exchange', '$750,000', 'Dec 10, 2026'],
        ],
    },
    oh: {
        name: 'Ohio',
        total: 454,
        listDate: 'November 3',
        rows: [
            ['Brabham Family Enterprises Inc', 'Bidwell', '11', 'Donegal Mutual Insurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['Ben-ars Logistics LLC', 'Chesterland', '5', 'Geico Marine Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Mow Carriers Inc', 'Westerville', '5', 'Canal Insurance Co.', '$750,000', 'Dec 6, 2026'],
            ['Mid-east Truck & Tractor Service Inc', 'East Canton', '48', 'Imperium Insurance Company', '$1,000,000', 'Dec 7, 2026'],
            ['Space Line LLC', 'Cleveland Heights', '40', 'Geico Marine Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['G & B Anderson Inc', 'Wooster', '14', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['Blust Sales And Service Inc', 'Cincinnati', '10', 'The Cincinnati Insurance Co.', '$1,000,000', 'Dec 7, 2026'],
            ['Bombay Trans Inc', 'Monroe', '10', 'Db Insurance Co., Ltd (u.s.branch)', '$750,000', 'Dec 7, 2026'],
        ],
    },
    pa: {
        name: 'Pennsylvania',
        total: 432,
        listDate: 'November 3',
        rows: [
            ['Mainstreet Leasing Inc', 'Allentown', '38', 'Trisura Specialty Insurance Company', '$4,000,000', 'Dec 6, 2026'],
            ['Lna Trucking LLC', 'Philadelphia', '36', 'Universal Casualty Risk Retention Group, Inc', '$750,000', 'Dec 6, 2026'],
            ['Dsa Transportation LLC', 'Trevose', '28', 'Trisura Specialty Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Wyalusing Transport Inc', 'Rome', '28', 'National Union Fire Ins. Co. Of Pitsbgh. Pa', '$750,000', 'Dec 6, 2026'],
            ['Newday Lines LLC', 'Chalfont', '25', 'Geico Marine Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Tse Transport LLC', 'Ashland', '12', 'Great American Assurance Company', '$1,000,000', 'Dec 6, 2026'],
            ['G & R Mechanical Inc', 'Hatfield', '52', 'Donegal Mutual Insurance Company', '$1,000,000', 'Dec 7, 2026'],
            ['Frantz Brothers Inc', 'Northampton', '19', 'The Travelers Indemnity Co. Of Connecticut', '$750,000', 'Dec 7, 2026'],
        ],
    },
    in: {
        name: 'Indiana',
        total: 263,
        listDate: 'November 3',
        rows: [
            ['I & O Trucking LLC', 'Lagrange', '19', 'Acuity, A Mutual Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Nick Bohanon LLC', 'Jeffersonville', '10', 'Great West Casualty Co.', '$1,000,000', 'Dec 6, 2026'],
            ['Speedy Transportation LLC', 'Indianapolis', '9', 'Geico Marine Insurance Company', '$750,000', 'Dec 6, 2026'],
            ['Freedom Cargo Inc', 'Westville', '15', 'Geico Marine Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['Mgn Transportation Inc', 'Michigan City', '10', 'Siriuspoint America Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['Sky Transport Inc', 'Lake Station', '10', 'Great West Casualty Co.', '$1,000,000', 'Dec 7, 2026'],
            ['Goodin’s Inc', 'Scottsburg', '8', 'Donegal Mutual Insurance Company', '$1,000,000', 'Dec 7, 2026'],
            ['Rosedale Farms Trucking LLC', 'Montgomery', '7', 'Indiana Farmers Mutual Insurance', '$1,000,000', 'Dec 7, 2026'],
        ],
    },
    ga: {
        name: 'Georgia',
        total: 222,
        listDate: 'November 3',
        rows: [
            ['Express Towing Inc', 'Richmond Hill', '13', 'Trisura Insurance Company', '$1,000,000', 'Dec 7, 2026'],
            ['The Rizin Sun Trucking LLC', 'Griffin', '6', 'Auto Owners Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['Bad Wolf Trucking LLC', 'Mcdonough', '5', 'Auto Owners Insurance Company', '$750,000', 'Dec 7, 2026'],
            ['Straight Path Logistics LLC', 'Dacula', '5', 'Bricktown Specialty Insurance Company', '$750,000', 'Dec 8, 2026'],
            ['Dobbs Equipment Southeast LLC', 'Albany', '43', 'Sentry Select Insurance Company', '$750,000', 'Dec 9, 2026'],
            ['Time Transportation & Leasing Inc', 'Augusta', '12', 'Starstone National Insurance Company', '$750,000', 'Dec 9, 2026'],
            ['Bolt LLC', 'Carrollton', '8', 'Progressive Mountain Insurance Company Of Ohi', '$1,500,000', 'Dec 9, 2026'],
            ['Flst Logistics LLC', 'Pooler', '8', 'Great West Casualty Co.', '$1,000,000', 'Dec 9, 2026'],
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
