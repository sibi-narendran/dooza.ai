import { notFound } from 'next/navigation';
import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';
import { TRUCKER_FEED_PAY_URL } from '@/lib/offers';

// DEALER1 reply-stage pages (Odysseus 2026-10-18 09:22 4f8mumzz): new trucking companies per state, every Monday, for used-truck and
// trailer dealers. Pay link = Monday Trucker Feed, one state, 7-day trial.
// Rows: FMCSA new authorities (applied in the last 7 days, no liability filed yet), Argus feed files:
// TX = /home/argus/data/feeds/for-hercules/TX_2026-10-16_verified.csv (173 new_authority rows, applied Oct 9-15).
// FL = /home/argus/data/feeds/dealer1/FL_2026-10-18_full.csv (160 new_authority rows, Oct 11-17). More states when Argus's files land.
const PRICE = '$129 every 4 weeks, first week free, cancel any time.';
const STATES = {
    tx: {
        name: 'Texas',
        total: 173,
        week: 'October 9 to 15',
        rows: [
            ['Hydrotech Innovative Solutions LTD', 'Midland', '10', 'Oct 14, 2026'],
            ['Delgado Industrial Group LLC', 'Georgetown', '1', 'Oct 14, 2026'],
            ['Crobonni LLC', 'Houston', '1', 'Oct 14, 2026'],
            ['Hawk Family Movers Inc', 'Midlothian', '1', 'Oct 14, 2026'],
            ['Legendx Transport Inc', 'Bryan', '5', 'Oct 13, 2026'],
            ['Xline LLC', 'Fate', '5', 'Oct 13, 2026'],
            ['Conerstone Transit LLC', 'Friendswood', '4', 'Oct 13, 2026'],
        ],
    },
    fl: {
        name: 'Florida',
        total: 160,
        week: 'October 11 to 17',
        rows: [
            ['Diamond Trip Services Corp', 'Titusville', '3', 'Oct 16, 2026'],
            ['Top Team Hauling LLC', 'Melbourne', '2', 'Oct 16, 2026'],
            ['Omdd Family LLC', 'Kissimmee', '2', 'Oct 16, 2026'],
            ['E Team Freight LLC', 'Miami', '2', 'Oct 16, 2026'],
            ['Great Things Logistics Group LLC', 'Port Charlotte', '2', 'Oct 16, 2026'],
            ['Mackey Trucking LLC', 'Daytona Beach', '1', 'Oct 16, 2026'],
            ['Vbird Logistics LLC', 'Fort Myers', '1', 'Oct 16, 2026'],
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
        updated: 'October 18, 2026',
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
        pay: { href: TRUCKER_FEED_PAY_URL, label: 'Start the free week' },
        startSubject: `New trucking companies: ${s.name}`,
        startBody: 'My dealership:\nCities I sell in:\n',
        startLabel: 'Ask a question first',
        priceNote: PRICE,
        overPay: [
            '$129 every 4 weeks (about $32 a week) · first week free · cancel any time',
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
            { text: PRICE, linkText: 'Start the free week', href: TRUCKER_FEED_PAY_URL },
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
            offers: [{ price: '129', description: 'Every 4 weeks after a free first week.' }],
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
