import ReplyStagePage, { replyStageMetadata } from '@/components/ReplyStagePage';

// LAW-WARN1 reply-stage page (Odysseus 2026-10-17 18:18 da3zgq3p; card /home/odysseus/work/drafts/law_leads_arm_card_2026-10-17.md).
// Sibi 17:27 leads-only: B2B list from the public Cal-WARN file. Shows only what the email promises (first sheet free, then $299/mo).
// Counts checked 2026-10-17 on EDD warn_report1.xlsx (processed 09-17..10-14, effective minus notice date < 60 days).
// Never: violation, owes, liable, we are lawyers, we recommend lawyers, fee split, exclusive.
const cfg = {
    path: '/california-warn-notices-list',
    slug: 'california-warn-notices-list',
    offer: 'law-warn-ca',
    title: 'California WARN Notices With Under 60 Days Notice, Weekly',
    description: 'Weekly sheet of California WARN notices that gave workers under 60 days notice. 49 such notices, 1,805 workers, Sep 17 to Oct 14, 2026. First sheet free.',
    updated: 'October 17, 2026',
    eyebrow: 'For California employment law firms',
    h1: 'Every California WARN notice that gave under 60 days notice, each week',
    leadStrong: 'Each week you get a sheet of the California WARN notices that gave workers less than the 60 days the Cal-WARN Act asks for: company, site, county, workers, notice date, layoff date and days short.',
    leadRest: 'From September 17 to October 14, 2026, the state processed 138 WARN notices; 49 of them gave under 60 days notice, covering 1,805 workers. First sheet free, then $299 a month.',
    startSubject: 'Free sheet: California short-notice WARN notices',
    startBody: 'Firm:\nCounties you cover:\nAnything you want flagged (industry, size):',
    startLabel: 'Get this week’s sheet free',
    priceNote: 'First sheet free, then $299 a month.',
    sendHeading: 'What is in each weekly sheet',
    sendIntro: 'The source is the WARN report the California Employment Development Department (EDD) publishes and updates every Tuesday and Thursday. September 17 to October 14, 2026: 138 notices processed, 49 with under 60 days between the notice date and the layoff date (1,805 workers), 31 of them in Los Angeles County. In 3, the notice was dated after the layoff date. A short notice is not by itself a violation: Cal-WARN has exceptions, so you check each one.',
    send: [
        ['Company and site', 'Employer name and the site address as filed with EDD.'],
        ['County and industry', 'County of the site and the industry the employer gave.'],
        ['Workers', 'Number of employees affected at that site.'],
        ['Notice date, layoff date, days short', 'Both dates from the notice, and how many days under 60 the gap is.'],
        ['Layoff or closure, permanent or temporary', 'As stated on the notice, so you can drop temporary closures fast.'],
        ['Per-company rollup', 'Notices from the same employer across sites, added up.'],
    ],
    never: [
        'Say a company broke the law or owes anything. The sheet shows dates; whether there is a claim is your call.',
        'Contact employers or workers. You get the sheet; any outreach is yours, under your own bar rules.',
        'Refer cases, recommend a lawyer or take any part of a fee.',
        'Claim the list is yours alone. It is public record; we save you the pulling, checking and sorting each week.',
    ],
    costs: [
        'This week’s sheet, free.',
        'Then $299 a month for the weekly California sheet.',
    ],
    faq: [
        {
            question: 'What do I get?',
            answer: 'Each week, a sheet of the California WARN notices that gave workers under 60 days notice: company, site address, county, industry, workers affected, notice date, layoff date, days short, layoff or closure, and a rollup of notices per company.',
        },
        {
            question: 'Where does the data come from?',
            answer: 'The WARN report published by the California Employment Development Department (EDD), updated every Tuesday and Thursday. It is public record. We pull it, work out the days between notice and layoff, and sort it.',
        },
        {
            question: 'How many short-notice notices are there?',
            answer: 'From September 17 to October 14, 2026, EDD processed 138 WARN notices. 49 gave under 60 days notice, covering 1,805 workers; 31 were in Los Angeles County, and in 3 the notice was dated after the layoff date.',
        },
        {
            question: 'Does a short notice mean the employer violated Cal-WARN?',
            answer: 'Not by itself. Cal-WARN has exceptions, for example a physical calamity, a company seeking capital to stay open, or seasonal or temporary work, and it applies only to sites that had 75 or more employees in the prior 12 months. The sheet gives you the dates; you decide which ones are worth a look.',
        },
        {
            question: 'How much does it cost?',
            answer: 'This week’s sheet is free. After that, $299 a month for the weekly California sheet.',
        },
        {
            question: 'Do you contact workers or refer cases?',
            answer: 'No. We send you the sheet only. We do not contact anyone, refer cases or take any part of a fee.',
        },
        {
            question: 'Do you cover other states?',
            answer: 'California only for now. Ask if you need another state.',
        },
    ],
    service: {
        name: 'Weekly California short-notice WARN sheet',
        serviceType: 'WARN notice data list',
        audienceType: 'Employment law firms',
        offers: [{ price: '299', description: 'Per month, after a free first sheet.' }],
    },
    areaServed: { '@type': 'State', name: 'California' },
    crumb: 'California WARN Notices List',
};

export const metadata = replyStageMetadata(cfg);

export default function CaliforniaWarnNoticesListPage() {
    return <ReplyStagePage cfg={cfg} />;
}
