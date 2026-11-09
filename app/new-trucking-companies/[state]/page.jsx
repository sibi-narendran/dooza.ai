import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// DEALER1 reply-stage pages (Odysseus 2026-10-18 09:22 4f8mumzz): new trucking companies per state, every Monday, for used-truck and
// trailer dealers. Pay link = Monday Trucker Feed, one state, 7-day trial.
// Rows: FMCSA new authorities (applied in the last 7 days, no liability filed yet), Argus feed files:
// Weekly (Argus standing Monday job, /home/argus/data/feeds/achilles/<ST>_new_authority_<date>.csv): 2026-11-09 pull = TX 213, FL 144,
// CA 185, IN 53, OH 88 (applied Nov 2-8). Sample rows = newest with city + power units. No phones/officers/emails on the page (Argus 10-18 09:43).
const PRICE = '$129 every 4 weeks, paid first, month to month, cancel any time.';
const STATES = {
    tx: {
        name: 'Texas',
        total: 213,
        week: 'November 2 to 8',
        rows: [
            ['Rutiny & Lv Transportation LLC', 'Houston', '2', 'Nov 7, 2026'],
            ['Onestop Trucking LLC', 'Mission', '1', 'Nov 7, 2026'],
            ['Oversize LLC', 'Highlands', '1', 'Nov 6, 2026'],
            ['Pegasus Air And Marine Services LLC', 'Harker Heights', '3', 'Nov 6, 2026'],
            ['Gto Transport Logistics LLC', 'Irving', '1', 'Nov 6, 2026'],
            ['Kargo Express LLC', 'Laredo', '1', 'Nov 6, 2026'],
            ['Kayone Express LLC', 'Arlington', '1', 'Nov 6, 2026'],
        ],
    },
    fl: {
        name: 'Florida',
        total: 144,
        week: 'November 2 to 8',
        rows: [
            ['Ameg Logistics LLC', 'Doral', '1', 'Nov 7, 2026'],
            ['United Star Transport LLC', 'Hialeah', '1', 'Nov 6, 2026'],
            ['Road Raven Trucking LLC', 'Pembroke Pines', '2', 'Nov 6, 2026'],
            ['Ct Express Freight LLC', 'St Petersburg', '1', 'Nov 6, 2026'],
            ['Mrs Morisset Shipping LLC', 'Pompano Beach', '1', 'Nov 6, 2026'],
            ['Ebenezer Prime Logistics LLC', 'Lehigh Acres', '1', 'Nov 6, 2026'],
            ['J&betty Import LLC', 'St Petersburg', '1', 'Nov 6, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 185,
        week: 'November 2 to 8',
        rows: [
            ['Armfield Logistics LLC', 'Bakersfield', '1', 'Nov 7, 2026'],
            ['Naranca Fulfillment LLC', 'National City', '1', 'Nov 7, 2026'],
            ['Pabnawa Translines INC', 'Ceres', '1', 'Nov 7, 2026'],
            ['U.s. Fruit & Veg INC', 'Monterey', '1', 'Nov 7, 2026'],
            ['Henry Reis', 'North Highlands', '7', 'Nov 6, 2026'],
            ['The Sowell Company', 'Grass Valley', '11', 'Nov 6, 2026'],
            ['Robert Almaraz Jr', 'Whittier', '1', 'Nov 6, 2026'],
        ],
    },
    in: {
        name: 'Indiana',
        total: 53,
        week: 'November 2 to 8',
        rows: [
            ['Mamba Mentality Trucking LLC', 'Indianapolis', '1', 'Nov 7, 2026'],
            ['Business & Trucking Services LLC', 'Indianapolis', '1', 'Nov 7, 2026'],
            ['Blackshadow INC', 'Auburn', '7', 'Nov 6, 2026'],
            ['Rtc Transport LLC', 'Wabash', '1', 'Nov 6, 2026'],
            ['United Towing & Transportation Services LLC', 'Avon', '2', 'Nov 6, 2026'],
            ['Cargo Flow Trucking LLC', 'Indianapolis', '1', 'Nov 6, 2026'],
            ['Td Transportation INC', 'Noblesville', '2', 'Nov 6, 2026'],
        ],
    },
    oh: {
        name: 'Ohio',
        total: 88,
        week: 'November 2 to 8',
        rows: [
            ['Green Star Uz INC', 'Cincinnati', '1', 'Nov 7, 2026'],
            ['Eagle Eye Excavating And Construction LLC', 'Mansfield', '9', 'Nov 6, 2026'],
            ['Marokand Logistics LLC', 'West Chester', '1', 'Nov 6, 2026'],
            ['Joat Logistics LLC', 'Cleveland', '1', 'Nov 6, 2026'],
            ['Frakes & Miller Transport LLC', 'Cincinnati', '1', 'Nov 6, 2026'],
            ['Wann&wudd LLC', 'Cleveland', '2', 'Nov 6, 2026'],
            ['Goodwell Cargo INC', 'Loveland', '1', 'Nov 6, 2026'],
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
        path: `/new-trucking-companies/${code}`,
        slug: `new-trucking-companies-${code}`,
        offer: 'dealer-feed',
        title: `New ${s.name} Trucking Companies, Every Monday`,
        description: `Every new trucking company in ${s.name} each Monday, with owner name and phone, from FMCSA open data. ${s.total} new ${s.name} carriers applied ${s.week}. ${PRICE}`,
        updated: 'October 19, 2026',
        eyebrow: `For truck and trailer dealers in ${s.name}`,
        h1: `Every new trucking company in ${s.name}, each Monday, with owner and phone`,
        leadStrong: `Each Monday: every ${s.name} company that applied for federal trucking authority the week before, with owner name, phone and fleet size. New fleets need trucks and trailers.`,
        leadRest: `${s.week}, 2026: ${s.total} new ${s.name} carriers. ${s.rows.length} real rows are below (download them as CSV, no card); ${more} more are in that list.`,
        sample: {
            heading: `${s.rows.length} real new ${s.name} trucking companies, ${s.week}`,
            columns: ['Company', 'City', 'Power units', 'Applied'],
            rows: s.rows,
            csv: { href: `/samples/new-trucking-companies-${code}.csv`, label: `Download these ${s.rows.length} rows (CSV, no card, no signup)` },
            note: `Here we hide owner, phone, email and DOT number; your list has them. ${more} more new ${s.name} carriers in the same week.`,
        },
        pay: { href: `${ICP1_A_PAY_URL}?client_reference_id=feed-newco-${code}`, label: 'Get the list ($129)' },
        startSubject: `New trucking companies: ${s.name}`,
        startBody: 'My dealership:\nCities I sell in:\n',
        startLabel: 'Ask a question first',
        priceNote: PRICE,
        overPay: [
            '$129 every 4 weeks (about $32 a week) · paid first · cancel any time',
            `Source: FMCSA open data (data.transportation.gov) · ${s.week}: ${s.total} new ${s.name} carriers`,
            'Run by Sibi Narendran, founder of Dooza.',
        ],
        sendHeading: 'What is in each Monday list',
        sendIntro: `Built from FMCSA open data (data.transportation.gov): carriers that applied for operating authority in the last 7 days, joined with their registration. ${s.week}, 2026: ${s.total} new ${s.name} carriers.`,
        send: [
            ['Company, DOT and MC number', 'From the FMCSA registration.'],
            ['Owner or officer name', 'As filed with FMCSA.'],
            ['Phone and email', 'Emails checked with NeverBounce; phones as filed with FMCSA. Rows with no phone are left out.'],
            ['City and power units', 'As filed. Most new carriers start with 1 to 5 trucks.'],
            ['Date applied', 'The day the carrier applied for operating authority.'],
        ],
        never: [
            'Call or email the carriers for you. You get the list; the selling is yours.',
            'Call the list exclusive. It is public record; we save you the pulling, matching and sorting each week.',
            'Promise a carrier is buying. A new authority is a reason to call, not a purchase order.',
        ],
        costs: [
            { text: PRICE, linkText: 'Get the list', href: `${ICP1_A_PAY_URL}?client_reference_id=feed-newco-${code}` },
            'To stop, cancel before the next 4 weeks start.',
        ],
        faq: [
            {
                question: 'What do I get?',
                answer: `Each Monday, every ${s.name} company that applied for FMCSA operating authority the week before: company, DOT and MC number, owner or officer, phone, email, city, power units and the date applied.`,
            },
            {
                question: 'Where does the data come from?',
                answer: 'FMCSA open data on data.transportation.gov: operating-authority applications joined with the carrier registration. It is public record; we match and sort it each week.',
            },
            {
                question: `How many new ${s.name} trucking companies is that?`,
                answer: `${s.week}, 2026: ${s.total} new ${s.name} carriers. The number changes each week.`,
            },
            {
                question: 'How much does it cost?',
                answer: PRICE,
            },
        ],
        service: {
            name: `New ${s.name} trucking companies list`,
            serviceType: 'New trucking company lead list',
            audienceType: 'Truck and trailer dealers',
            offers: [{ price: '129', description: 'Every 4 weeks, paid first.' }],
        },
        areaServed: { '@type': 'State', name: s.name },
        crumb: `New ${s.name} Trucking Companies`,
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
