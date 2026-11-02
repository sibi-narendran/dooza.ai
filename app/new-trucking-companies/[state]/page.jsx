import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// DEALER1 reply-stage pages (Odysseus 2026-10-18 09:22 4f8mumzz): new trucking companies per state, every Monday, for used-truck and
// trailer dealers. Pay link = Monday Trucker Feed, one state, 7-day trial.
// Rows: FMCSA new authorities (applied in the last 7 days, no liability filed yet), Argus feed files:
// Weekly (Argus standing Monday job, /home/argus/data/feeds/achilles/<ST>_new_authority_<date>.csv): 2026-11-02 pull = TX 250, FL 147,
// CA 176, IN 46, OH 81 (applied Oct 26-Nov 1). Sample rows = newest with city + power units. No phones/officers/emails on the page (Argus 10-18 09:43).
const PRICE = '$129 every 4 weeks, paid first, month to month, cancel any time.';
const STATES = {
    tx: {
        name: 'Texas',
        total: 250,
        week: 'October 26 to November 1',
        rows: [
            ['Fleet Pro Logistics LLC', 'Houston', '1', 'Oct 31, 2026'],
            ['Mcj Services L.l.c', 'Houston', '6', 'Oct 31, 2026'],
            ['Connect Tourism LLC', 'San Antonio', '4', 'Oct 31, 2026'],
            ['Brandon Guardian Trucking LLC', 'Midland', '3', 'Oct 31, 2026'],
            ['Clearwater Resources LLC', 'Odessa', '14', 'Oct 30, 2026'],
            ['Momand Trucking INC', 'Converse', '1', 'Oct 30, 2026'],
            ['West Land Enterprise Llp', 'Odessa', '2', 'Oct 30, 2026'],
        ],
    },
    fl: {
        name: 'Florida',
        total: 147,
        week: 'October 26 to 31',
        rows: [
            ['Oracle Audio Visual & Design INC', 'Kissimmee', '1', 'Oct 31, 2026'],
            ['Dpwayllc', 'Wesley Chapel', '4', 'Oct 30, 2026'],
            ['Rdy Cargo LLC', 'Mascotte', '1', 'Oct 30, 2026'],
            ['Xtreme Xr Moving & Delivery LLC', 'Winter Haven', '1', 'Oct 30, 2026'],
            ['Velocity Lab Services/ Velocity Logistics & Compliance', 'Jacksonville', '14', 'Oct 30, 2026'],
            ['Ktcarex LLC', 'Lake Butler', '1', 'Oct 30, 2026'],
            ['Regnox Logistics LLC', 'Parkland', '1', 'Oct 30, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 176,
        week: 'October 26 to 31',
        rows: [
            ['Border Express INC', 'Fresno', '1', 'Oct 31, 2026'],
            ['Sunni Trading INC', 'Irvine', '1', 'Oct 30, 2026'],
            ['Eddie Arceo Garcia', 'Delano', '1', 'Oct 30, 2026'],
            ['Bodla Freight INC', 'Riverside', '1', 'Oct 30, 2026'],
            ['Bns Express INC', 'San Jose', '2', 'Oct 30, 2026'],
            ['Busy Enterprises LLC', 'Victorville', '1', 'Oct 30, 2026'],
            ['Aviasa Transport LLC', 'San Diego', '1', 'Oct 30, 2026'],
        ],
    },
    in: {
        name: 'Indiana',
        total: 46,
        week: 'October 26 to 31',
        rows: [
            ['Yg Cargo INC', 'Fishers', '1', 'Oct 30, 2026'],
            ['Truvex Transport LLC', 'Anderson', '5', 'Oct 30, 2026'],
            ['Quisqueya Transport & Logistics LLC', 'Avon', '1', 'Oct 30, 2026'],
            ['Rj Logistic LLC', 'Indianapolis', '6', 'Oct 30, 2026'],
            ['Crossroads Transit Group INC', 'Indianapolis', '1', 'Oct 30, 2026'],
            ['Jot Sales And Merchandise LLC', 'Madison', '2', 'Oct 30, 2026'],
            ['Gb3 Transport LLC', 'Indianapolis', '1', 'Oct 30, 2026'],
        ],
    },
    oh: {
        name: 'Ohio',
        total: 81,
        week: 'October 26 to November 1',
        rows: [
            ['Myles Away LLC', 'Dayton', '2', 'Oct 31, 2026'],
            ['Bff Freight LLC', 'Columbus', '1', 'Oct 31, 2026'],
            ['Todays Mail', 'Cincinnati', '2', 'Oct 31, 2026'],
            ['Joshika Express LLC', 'Cuyahoga Falls', '1', 'Oct 31, 2026'],
            ['Gz Express LLC', 'Powell', '1', 'Oct 30, 2026'],
            ['Ironstead Transport LLC', 'Stow', '1', 'Oct 30, 2026'],
            ['Gr8 Transportation LTD', 'Solon', '1', 'Oct 30, 2026'],
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
