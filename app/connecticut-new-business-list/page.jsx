import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';

// NEWBIZ-CT1 reply-stage page (Odysseus 2026-10-17 18:18 da3zgq3p; card work/drafts/arm_card_newbiz_ct1_2026-10-17.md).
// Sibi 17:27 leads-only: B2B list from public CT registry data. Shows only what the email promises ($129/4wk, 7 days free, sample rows).
// Counts checked 2026-10-17 on data.ct.gov n7gp-d28j (Socrata count, status != Rejected) + tools/ct_newbiz_feed.py --days 7. Never: exclusive, verified emails, customer counts.
const cfg = {
    path: '/connecticut-new-business-list',
    slug: 'connecticut-new-business-list',
    offer: 'newbiz-ct',
    title: 'New Connecticut Businesses List, Weekly With Email',
    description: 'Each Monday: every business registered in your Connecticut county last week, with filing email. 971 new CT registrations Oct 10-16, 2026. 5 rows free.',
    updated: 'October 17, 2026',
    eyebrow: 'For Connecticut insurance agents, CPAs, payroll and IT firms',
    h1: 'Every new Connecticut business in your county, each Monday, with email',
    leadStrong: 'Each Monday you get a file of every business registered in your county the week before: name, type, date, town, mailing address and the email the owner gave the state.',
    leadRest: 'Last week (October 10 to 16, 2026) that was 971 new businesses registered with the State. First 5 from your own town are free; then a 7-day trial (card at start) and $129 every 4 weeks.',
    startSubject: 'Free sample: new businesses in my town',
    startBody: 'My town:\nMy county:\nWhat I sell to new businesses:',
    startLabel: 'Get 5 free rows',
    priceNote: '5 sample rows now, 7-day trial with card, then $129 every 4 weeks.',
    sendHeading: 'What is in each Monday file',
    sendIntro: 'The source is the Connecticut business registry, published as open data on data.ct.gov and updated daily. New registrations October 10 to 16, 2026, not counting rejected filings: 971, including Fairfield County 255, Hartford County 215 and New Haven County 171. In the 30 days to October 16: 4,893.',
    send: [
        ['Business name', 'As registered with the State of Connecticut.'],
        ['Type and industry', 'LLC, corporation or other form, plus the industry (NAICS) the owner chose, when given.'],
        ['Registration date', 'The day the business was registered.'],
        ['Town, county, address', 'Mailing address and town as filed, sorted by county.'],
        ['Email', 'The business email given at filing. If it belongs to a filing service rather than the owner, we flag it.'],
    ],
    never: [
        'Email or call the businesses for you. You get the file; the selling is yours.',
        'Call the list exclusive. It is public record; we save you the pulling, cleaning and sorting each week.',
        'Promise the emails work. They are what the owner gave the state; we don’t verify them.',
        'Tell you a business needs your service.',
    ],
    costs: [
        '5 rows from your own town, free.',
        'Then a 7-day free trial; card at start, cancel before it ends and you pay nothing.',
        'Then $129 every 4 weeks.',
    ],
    faq: [
        {
            question: 'What do I get?',
            answer: 'Each Monday, a file of every business registered in your Connecticut county the week before: business name, type, industry when given, registration date, town, county, mailing address and the business email given at filing.',
        },
        {
            question: 'Where does the data come from?',
            answer: 'The Connecticut business registry, which the state publishes as open data on data.ct.gov and updates daily. It is public record. We pull it, sort it by county and flag emails that belong to filing services.',
        },
        {
            question: 'How many new businesses is that?',
            answer: 'From October 10 to 16, 2026: 971 new registrations with the State of Connecticut (rejected filings not counted), including 255 in Fairfield County, 215 in Hartford County and 171 in New Haven County. Some have an out-of-state address. In the 30 days to October 16: 4,893.',
        },
        {
            question: 'Are the emails verified?',
            answer: 'No. They are the business email the owner gave the state at filing. Some belong to a filing service instead of the owner; we flag those so you can skip them.',
        },
        {
            question: 'How much does it cost?',
            answer: 'The first 5 rows from your own town are free. Then a 7-day trial (you add a card at the start; cancel within 7 days and you pay nothing), then $129 every 4 weeks.',
        },
        {
            question: 'Do you contact the businesses for me?',
            answer: 'No. We send you the file only. Who you contact and how is up to you.',
        },
        {
            question: 'Do you cover other states?',
            answer: 'Connecticut only for now.',
        },
    ],
    service: {
        name: 'Weekly new Connecticut business list',
        serviceType: 'New business registration list',
        audienceType: 'Insurance agents, CPAs, bookkeepers, payroll and IT firms',
        offers: [{ price: '129', description: 'Every 4 weeks after a 7-day trial (card at start). First 5 rows from your town free.' }],
    },
    areaServed: { '@type': 'State', name: 'Connecticut' },
    crumb: 'Connecticut New Business List',
};

export const metadata = replyStageMetadata(cfg);

export default function ConnecticutNewBusinessListPage() {
    return <ReplyStagePage cfg={cfg} />;
}
