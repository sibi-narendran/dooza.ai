import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';

// AGENTFEED reply-stage page (Odysseus 2026-10-18 09:22 4f8mumzz): new Texas bars, restaurants, stores and trucking companies per county,
// for P&C agencies. Pay link = New Business Monday (county list, 7-day trial).
// Rows: TABC /home/odysseus/data/feeds/tabc_2026-10-17.csv (licence types MB/BG/P/Q/BQ; 85 rows Oct 12-15) and FMCSA new authorities
// /home/argus/data/feeds/for-hercules/TX_2026-10-16_verified.csv (173 rows Oct 9-15). TABC rows have no phone (0/85), so the page promises none.
const PAY_URL = '/api/pay/4gM8wP80rdIFa9e1EF3AY12';
const PRICE = '$129 every 4 weeks, first week free, cancel any time.';

const cfg = {
    path: '/texas-new-business-list',
    slug: 'texas-new-business-list',
    offer: 'agentfeed-tx',
    title: 'New Texas Businesses by County, Every Monday',
    description: 'Each Monday: every new bar, restaurant, store and trucking company in your Texas county, from TABC licences and FMCSA new authorities. 8 real rows free. $129 every 4 weeks, first week free.',
    updated: 'October 18, 2026',
    eyebrow: 'For Texas P&C insurance agencies',
    h1: 'Every new bar, restaurant, store and trucking company in your Texas county, each Monday',
    leadStrong: 'Each Monday: new Texas liquor licences (bars, restaurants, liquor and beer-and-wine stores) and new trucking companies that applied for federal operating authority, sorted by county.',
    leadRest: 'Last week that was 85 new liquor licences (October 12 to 15) and 173 new Texas trucking authorities (October 9 to 15). 8 real rows are below; download them as CSV, no card.',
    sample: {
        heading: '8 real new Texas businesses from last week',
        columns: ['Business', 'Type', 'City', 'County', 'Date'],
        rows: [
            ['RECESS', 'Bar or restaurant (TABC licence)', 'Edinburg', 'Hidalgo', 'Oct 15, 2026'],
            ['The Chefs Grind', 'Bar or restaurant (TABC licence)', 'The Colony', 'Denton', 'Oct 15, 2026'],
            ['Liquor Time', 'Liquor store (TABC licence)', 'Houston', 'Harris', 'Oct 15, 2026'],
            ['QuikTrip #1893', 'Beer and wine store (TABC licence)', 'Dallas', 'Dallas', 'Oct 15, 2026'],
            ['Sip & Smoke Liquor', 'Liquor store (TABC licence)', 'Corpus Christi', 'Nueces', 'Oct 15, 2026'],
            ['Hydrotech Innovative Solutions LTD', 'New trucking company, 10 power units (FMCSA)', 'Midland', 'Midland', 'Oct 14, 2026'],
            ['Delgado Industrial Group LLC', 'New trucking company, 1 power unit (FMCSA)', 'Georgetown', 'Williamson', 'Oct 14, 2026'],
            ['Kym Enterprises LLC', 'New trucking company, 1 power unit (FMCSA)', 'Wylie', 'Collin', 'Oct 15, 2026'],
        ],
        csv: { href: '/samples/texas-new-business-list.csv', label: 'Download these 8 rows (CSV, no card, no signup)' },
        note: 'Here we hide owner names, addresses, phone numbers and DOT numbers; your list has them.',
    },
    pay: { href: PAY_URL, label: 'Start the free week' },
    startSubject: 'New Texas businesses: my county',
    startBody: 'My agency:\nCounties I write:\n',
    startLabel: 'Ask a question first',
    priceNote: PRICE,
    overPay: [
        '$129 every 4 weeks (about $32 a week) · first week free · cancel any time',
        'Sources: Texas Alcoholic Beverage Commission licence data and FMCSA open data (data.transportation.gov) · last week: 85 new liquor licences, 173 new trucking authorities',
        'Run by Sibi Narendran, founder of Dooza.',
    ],
    sendHeading: 'What is in each Monday list',
    sendIntro: 'Two public sources, matched and sorted by county each week: new licences from the Texas Alcoholic Beverage Commission, and carriers that applied for federal operating authority with FMCSA.',
    send: [
        ['Business name and type', 'Bar or restaurant, liquor store, beer and wine store (TABC licence type), or new trucking company.'],
        ['Owner name', 'The licence holder (TABC) or the officer filed with FMCSA.'],
        ['Address, city and county', 'As filed. Sorted by county.'],
        ['Phone', 'For trucking companies, as filed with FMCSA. TABC does not publish phone numbers, so bar, restaurant and store rows come without one.'],
        ['Date', 'Licence date (TABC) or the day the carrier applied for authority (FMCSA).'],
    ],
    never: [
        'Call or email the businesses for you. You get the list; the selling is yours.',
        'Call the list exclusive. It is public record; we save you the pulling, matching and sorting each week.',
        'Promise a business has no insurance yet. A new licence or authority is a reason to call, not a fact about their cover.',
    ],
    costs: [
        { text: PRICE, linkText: 'Start the free week', href: PAY_URL },
        'To stop, cancel before the next 4 weeks start.',
    ],
    faq: [
        {
            question: 'What do I get?',
            answer: 'Each Monday, the new bars, restaurants, liquor and beer-and-wine stores licensed by TABC and the new trucking companies that applied for FMCSA operating authority in your Texas counties the week before: business name, type, owner, address, city, county, date, and phone for the trucking companies.',
        },
        {
            question: 'Where does the data come from?',
            answer: 'The Texas Alcoholic Beverage Commission licence data and FMCSA open data on data.transportation.gov. Both are public record; we match and sort them by county each week.',
        },
        {
            question: 'How many new businesses is that?',
            answer: 'Last week: 85 new TABC liquor licences (October 12 to 15, 2026) and 173 new Texas trucking authorities (October 9 to 15, 2026). The numbers change each week.',
        },
        {
            question: 'Do bar and restaurant rows have a phone number?',
            answer: 'No. TABC does not publish one. Those rows have the owner name and address; trucking rows have the phone filed with FMCSA.',
        },
        {
            question: 'How much does it cost?',
            answer: PRICE,
        },
    ],
    service: {
        name: 'New Texas businesses by county',
        serviceType: 'New business lead list',
        audienceType: 'Property and casualty insurance agencies in Texas',
        offers: [{ price: '129', description: 'Every 4 weeks after a free first week.' }],
    },
    areaServed: { '@type': 'State', name: 'Texas' },
    crumb: 'New Texas Businesses',
};

export const metadata = replyStageMetadata(cfg);

export default function Page() {
    return <ReplyStagePage cfg={cfg} />;
}
