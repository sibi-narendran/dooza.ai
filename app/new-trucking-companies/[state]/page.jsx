import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { ICP1_A_PAY_URL } from '@/lib/offers';

// DEALER1 reply-stage pages (Odysseus 2026-10-18 09:22 4f8mumzz): new trucking companies per state, every Monday, for used-truck and
// trailer dealers. Pay link = Monday Trucker Feed, one state, 7-day trial.
// Rows: FMCSA new authorities (applied in the last 7 days, no liability filed yet), Argus feed files:
// Weekly (Argus standing Monday job, /home/argus/data/feeds/achilles/<ST>_new_authority_<date>.csv): 2026-10-19 pull = TX 219, FL 170,
// CA 152, IN 57, OH 97 (applied Oct 12-19). Sample rows = newest with city + power units. No phones/officers/emails on the page (Argus 10-18 09:43).
const PRICE = '$129 every 4 weeks, paid first, month to month, cancel any time.';
const STATES = {
    tx: {
        name: 'Texas',
        total: 219,
        week: 'October 12 to 19',
        rows: [
            ['A9 Truck Line LLC', 'Haslet', '1', 'Oct 19, 2026'],
            ['Lilyb Trucking LLC', 'Houston', '1', 'Oct 18, 2026'],
            ['The 4 Pillars Transportation Inc', 'San Antonio', '2', 'Oct 17, 2026'],
            ['ETL Holdings', 'Houston', '2', 'Oct 16, 2026'],
            ['Vallejo Iv Properties LLC', 'El Campo', '2', 'Oct 16, 2026'],
            ['All County Trucking LLC', 'Webster', '1', 'Oct 16, 2026'],
            ['Corner of Christ LLC', 'Austin', '1', 'Oct 16, 2026'],
        ],
    },
    fl: {
        name: 'Florida',
        total: 170,
        week: 'October 12 to 19',
        rows: [
            ['Royalty Advisors LLC', 'Hialeah', '3', 'Oct 17, 2026'],
            ['Zohan Transport LLC', 'Tampa', '1', 'Oct 17, 2026'],
            ['Diamond Trip Services Corp', 'Titusville', '3', 'Oct 16, 2026'],
            ['Top Team Hauling LLC', 'Melbourne', '2', 'Oct 16, 2026'],
            ['Omdd Family LLC', 'Kissimmee', '2', 'Oct 16, 2026'],
            ['E Team Freight LLC', 'Miami', '2', 'Oct 16, 2026'],
            ['Great Things Logistics Group LLC', 'Port Charlotte', '2', 'Oct 16, 2026'],
        ],
    },
    ca: {
        name: 'California',
        total: 152,
        week: 'October 12 to 18',
        rows: [
            ['Verka Transportation Inc', 'Manteca', '1', 'Oct 18, 2026'],
            ['Naaj Transport Inc', 'Stockton', '1', 'Oct 17, 2026'],
            ['Benji Carriers LLC', 'Sacramento', '2', 'Oct 16, 2026'],
            ['T-Pro XP Inc', 'Vacaville', '1', 'Oct 16, 2026'],
            ['Japp Logisitics LLC', 'Hollister', '1', 'Oct 16, 2026'],
            ['Altaris Crane & Rigging LLC', 'Planada', '1', 'Oct 16, 2026'],
            ['Glx Solutions LLC', 'El Centro', '1', 'Oct 16, 2026'],
        ],
    },
    in: {
        name: 'Indiana',
        total: 57,
        week: 'October 12 to 19',
        rows: [
            ['Chosen Membres Transportation LLC', 'Indianapolis', '1', 'Oct 19, 2026'],
            ['Mangoya Express LLC', 'Fishers', '2', 'Oct 17, 2026'],
            ['Rm Trucks LLC', 'Indianapolis', '1', 'Oct 16, 2026'],
            ['Marks Logistics LLC', 'Indianapolis', '1', 'Oct 16, 2026'],
            ['Nc Truck Rental Inc', 'Greenwood', '4', 'Oct 15, 2026'],
            ['White Horse Freight Inc', 'Greenwood', '2', 'Oct 15, 2026'],
            ['On The Geaux Logistics LLC', 'Charlestown', '2', 'Oct 15, 2026'],
        ],
    },
    oh: {
        name: 'Ohio',
        total: 97,
        week: 'October 12 to 19',
        rows: [
            ['Hadid Logistics Inc', 'Mayfield Heights', '1', 'Oct 17, 2026'],
            ['Centris LLC', 'Mason', '2', 'Oct 16, 2026'],
            ['Jetline Logistics Incorporated', 'Galloway', '1', 'Oct 16, 2026'],
            ['F.O.T.Y. 90 LLC', 'Columbus', '1', 'Oct 16, 2026'],
            ['Yodha Transport LLC', 'Fairfield Township', '1', 'Oct 16, 2026'],
            ['Singhtech Solutions LLC', 'Northfield', '12', 'Oct 15, 2026'],
            ['Barley\'s Trucking LLC', 'Mansfield', '4', 'Oct 15, 2026'],
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
