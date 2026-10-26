import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// DEALER1 reply-stage pages (Odysseus 2026-10-18 09:22 4f8mumzz): new trucking companies per state, every Monday, for used-truck and
// trailer dealers. Pay link = Monday Trucker Feed, one state, 7-day trial.
// Rows: FMCSA new authorities (applied in the last 7 days, no liability filed yet), Argus feed files:
// Weekly (Argus standing Monday job, /home/argus/data/feeds/achilles/<ST>_new_authority_<date>.csv): 2026-10-26 pull = TX 191, FL 140,
// CA 150, IN 37, OH 79 (applied Oct 19-25). Sample rows = newest with city + power units. No phones/officers/emails on the page (Argus 10-18 09:43).
const PRICE = '$129 every 4 weeks, paid first, month to month, cancel any time.';
const STATES = {
    tx: {
        name: 'Texas',
        total: 191,
        week: 'October 19 to 24',
        rows: [
            ['Rapido Hauling LLC', 'Penitas', '3', 'Oct 23, 2026'],
            ['B & R Transportation', 'Houston', '1', 'Oct 23, 2026'],
            ['Homeline Trucking LLC', 'Houston', '1', 'Oct 23, 2026'],
            ['Fv Logistics LLC', 'Bryan', '1', 'Oct 23, 2026'],
            ['Longhorn Textruck Logistics LLC', 'Garland', '2', 'Oct 23, 2026'],
            ['Cpc Movers LLC', 'Southlake', '8', 'Oct 23, 2026'],
            ['Trustline Transit LLC', 'Houston', '1', 'Oct 23, 2026'],
        ],
    },
    fl: {
        name: 'Florida',
        total: 140,
        week: 'October 19 to 25',
        rows: [
            ['Express Eagle Company LLC', 'Lake Worth', '1', 'Oct 24, 2026'],
            ['Leverock Logistics LLC', 'Glen Saint Mary', '2', 'Oct 23, 2026'],
            ['Ashbourne Global Enterprises Corp', 'Greenacres', '1', 'Oct 23, 2026'],
            ['Arthur Logistics LLC', 'Miami', '3', 'Oct 23, 2026'],
            ['Jyg Transport LLC', 'Seffner', '1', 'Oct 23, 2026'],
            ['Semi Cool LLC', 'High Springs', '6', 'Oct 23, 2026'],
            ['Caridad Xpress Corp', 'Miami Springs', '1', 'Oct 23, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 150,
        week: 'October 19 to 24',
        rows: [
            ['J A Rosales Trucking LLC', 'Oroville', '1', 'Oct 23, 2026'],
            ['Premier Trucking LLC', 'Colton', '1', 'Oct 23, 2026'],
            ['Ocean Transline Inc', 'Fresno', '1', 'Oct 23, 2026'],
            ['Montey Logistics LLC', 'Oakland', '1', 'Oct 23, 2026'],
            ['Kabal Express Inc', 'Sacramento', '1', 'Oct 23, 2026'],
            ['Jgm Logistic Services LLC', 'Rialto', '1', 'Oct 23, 2026'],
            ['Lux In Via Transport LLC', 'El Monte', '1', 'Oct 23, 2026'],
        ],
    },
    in: {
        name: 'Indiana',
        total: 37,
        week: 'October 19 to 24',
        rows: [
            ['Sak Enterprises LLC', 'Columbus', '2', 'Oct 24, 2026'],
            ['Kdk Transport LLC', 'Franklin', '1', 'Oct 23, 2026'],
            ['Hayes Limitless Loads LLC', 'Gary', '1', 'Oct 23, 2026'],
            ['Sonny Exp Inc', 'Evansville', '1', 'Oct 23, 2026'],
            ['Pb02 Trans LLC', 'Indianapolis', '1', 'Oct 23, 2026'],
            ['The Next 1ne Trucking LLC', 'Indianapolis', '10', 'Oct 23, 2026'],
            ['Maurice Transportation LLC', 'Monrovia', '1', 'Oct 23, 2026'],
        ],
    },
    oh: {
        name: 'Ohio',
        total: 79,
        week: 'October 19 to 25',
        rows: [
            ['Viggy Express LLC', 'Cincinnati', '1', 'Oct 25, 2026'],
            ['Diggers Towing & Auto Repair LLC', 'Canton', '4', 'Oct 23, 2026'],
            ['Prime Logistics Air LLC', 'Columbus', '1', 'Oct 23, 2026'],
            ['Jr Legacy Logistics LLC', 'Reynoldsburg', '1', 'Oct 23, 2026'],
            ['Lapas Cargo Inc', 'Maineville', '1', 'Oct 23, 2026'],
            ['Safeline Transport LLC', 'Dublin', '1', 'Oct 23, 2026'],
            ['Bts Express LLC', 'Springdale', '1', 'Oct 23, 2026'],
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
