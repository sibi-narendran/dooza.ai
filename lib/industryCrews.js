// Config for the /ai-agents-for-* industry Crew pages (components/industry/IndustryCrew.jsx). Sibi 2026-10-25 19:41:
// "Create a new industries page ... for accountants", "Ai agents for *", "Do again for law". Same build as /insurance-agents:
// one agent per pain, agents hand work to each other, a meeting link for doubts. Research: content/research/accountants-pains-2026-10-25.md,
// law-firms-pains-2026-10-25.md (Achilles brain repo). Product facts: Edison 10-25 08:08 (portals and webmail in its own browser after
// the user signs in once, hourly wake-ups, Files, approval before sending; NO phone calls or SMS) and 10:38 (fillable PDF, Excel and
// Word filling YES); $49 per organization, AI usage included (hard spending cap), hard cap (Edison 08:04). No accounting or practice-management
// software is named as tested: say "web tools you log in to" and point to the free trial.
import { SITE_URL } from '@/lib/site';

export const PRICE_LINE = 'Free for 7 days. Then $49 a month for your whole organization (unlimited users and agents, no per-seat fee), with AI usage included and a hard spending cap. Cancel during the trial and you pay nothing.';

const PHONES_FAQ = 'Not yet. Crew agents work in browsers, email and files. For calls, the Dooza AI phone agent picks up and emails you each message with the transcript ($149 a month for 500 minutes).';
const SAFE_FAQ = 'Every account runs in its own isolated sandbox with its own browser and files. You type your passwords and 2FA codes yourself, and nothing is sent without your approval.';

export const industryCrews = {
    accountants: {
        slug: 'accountants',
        path: '/ai-agents-for-accountants',
        prefix: 'acc',
        title: 'AI Agents for Accountants and CPA Firms | Dooza',
        description: 'AI agents for accounting firms: client document chasing, inbox triage, bank and portal downloads, deadlines and engagement letters, 24/7, with your approval. Free 7 days.',
        serviceName: 'Dooza Crew for accountants',
        serviceType: 'AI agents for accounting and bookkeeping firm operations',
        audience: 'Accounting, CPA, tax and bookkeeping firms',
        tagline: 'for accountants',
        eyebrow: 'AI agents for accountants',
        h1: 'We know the firm grind. Our AI agents do it.',
        lede: 'Dooza for accountants, CPAs and bookkeepers: one AI agent for each job that buries your staff. Chasing client documents, the inbox, bank and portal downloads, deadlines, engagement letters. Each one sets itself up like a new hire, works around the clock, and passes work to the others like a real team.',
        examples: [
            'Email every client still missing their 1099s and W-2s',
            'Sort my inbox and draft replies to client questions',
            'Download last month’s statements from these bank portals',
            'Every Monday, list every return due or on extension in 30 days',
            'Send engagement letters to every returning client',
        ],
        handoffs: 'Hire one or all six. Each has its own computer, its own browser and its own job. And they work with each other: the Inbox agent hands every uploaded document to the Documents agent, the Documents agent tells the Deadlines agent when a client’s file is complete, the Portal agent drops statements where your staff start the reconciliation, the Onboarding agent hands every signed letter back to Documents to open the checklist, and you see every handoff in your chat.',
        agents: [
            {
                name: 'Documents agent',
                pain: 'Half your season is chasing clients for paperwork.',
                job: 'Keeps a checklist per client, checks what has come in, and drafts a polite reminder to everyone still missing a W-2, 1099, bank statement or receipt, then follows up on a schedule until the file is complete. Nothing goes out until you tap Approve.',
                task: 'Every morning, check which clients are still missing documents on their checklist and draft a reminder email to each for my approval; follow up every 3 days until the file is complete.',
            },
            {
                name: 'Inbox agent',
                pain: 'The inbox fills up while you are heads-down in a return.',
                job: 'Reads your firm’s webmail, sorts client questions, “where is my return?” emails, uploaded documents and notices, saves attachments to the right client folder in Files and drafts each reply. Nothing goes out until you tap Approve.',
                task: 'Read my firm inbox every hour, sort client questions, documents and notices, save attachments to each client’s folder in Files, and draft replies for my approval.',
            },
            {
                name: 'Portal agent',
                pain: 'Logging in to ten portals to download one month of statements.',
                job: 'Logs in to the bank, card, payroll and bookkeeping web portals you use, in its own browser, and downloads the statements and reports your staff need into Files, named and sorted by client and month. You sign in once and type the 2FA code yourself; then it keeps working.',
                task: 'On the 3rd of every month, log in to these bank and card portals, download last month’s statements for each client and save them to Files by client and month.',
            },
            {
                name: 'Deadlines agent',
                pain: 'A pile of extensions, and half the files are still empty.',
                job: 'Wakes up every morning on its own, checks your deadline sheet for returns, extensions and estimated payments coming due, flags whose file is still incomplete, and drafts the heads-up email to each client.',
                task: 'Every Monday, check my deadline sheet, list every return, extension and estimated payment due in the next 30 days, flag files still missing documents and draft a heads-up email to each client.',
            },
            {
                name: 'Onboarding agent',
                pain: 'Engagement letters and organizers, one client at a time.',
                job: 'Fills your engagement letter and organizer templates for each new or returning client from your client list, saves them to Files, and drafts the email that sends them out, then follows up until they come back signed. It fills fillable PDF, Word and Excel files you upload. Nothing goes out until you tap Approve.',
                task: 'For each client on my list, fill our engagement letter template and organizer, save them to Files and draft the email sending them, for my approval; follow up every 5 days until they are returned.',
            },
            {
                name: 'Sales agent',
                pain: 'No time to grow the firm while you serve it.',
                job: 'Finds businesses that fit the clients you want in public sources you point it to, like new business filings in your state, builds the list with their websites and public contact details in Files, and drafts a personal first email to each. Nothing goes out until you tap Approve; then it follows up until they reply.',
                task: 'Find 25 new small businesses in my city that fit our ideal client, list them in Files with their website and public contact details, and draft a first email to each for my approval.',
            },
        ],
        phonesPain: 'Clients call while you are in a return.',
        night: [
            { time: '6:10 pm', who: 'Inbox agent', text: 'Sorted 31 emails. 9 documents filed to client folders, 5 replies waiting for your OK.' },
            { time: '9:15 pm', who: 'Documents agent', text: '12 clients still missing paperwork. Reminders drafted.' },
            { time: '1:00 am', who: 'Portal agent', text: 'Downloaded last month’s statements for 18 clients into Files.' },
            { time: '6:00 am', who: 'Deadlines agent', text: '7 extensions due in 30 days, 2 files incomplete. Client emails drafted.' },
            { time: '7:30 am', who: 'Onboarding agent', text: '5 engagement letters filled and saved to Files, emails drafted.' },
            { time: '7:58 am', who: 'You', text: 'Approved 21 drafts from your phone before the office opened.', human: true },
        ],
        howTitle: 'Hire it like a new staff accountant. Minus the busy-season training.',
        steps: [
            { title: 'Tell it the job', text: 'Type the job in plain words, the way you would brief a new hire on day one.' },
            { title: 'It sets itself up', text: 'Your master agent creates the agent, with its own computer and browser. You sign in to your portals and webmail once.' },
            { title: 'Add your team', text: 'Invite your staff and partners to the same chat. Anyone can hand out a job and see the work.' },
        ],
        guardTitle: 'Your license, your clients, your sign-off.',
        guardLede: 'A firm runs on trust. So the agents do the legwork and you keep every decision.',
        guardrails: [
            { name: 'Never sends without you', text: 'Before it sends an email or clicks Send or Pay, it asks you: Approve, Edit or Reject in chat.' },
            { name: 'No tax or audit opinions', text: 'It gathers, sorts and drafts. Review, sign-off, filing and advice stay with you and your licensed staff.' },
            { name: 'Keeps your systems', text: 'No migration. It works in the web tools you already log in to, in its own private browser.' },
            { name: 'No surprise bill', text: 'A hard cap on AI spend. At the cap it pauses and tells you.' },
        ],
        priceTitle: 'Less than a day of a staff accountant’s pay. For the month.',
        faqTitle: 'Questions accountants ask',
        faq: [
            { question: 'What is Dooza Crew for accountants?', answer: 'Dooza Crew gives an accounting, tax or bookkeeping firm AI agents: one to chase client documents, one for the inbox, one for bank and portal downloads, one for deadlines, one for engagement letters and organizers, and one for finding new clients. Each has its own computer and browser, works around the clock, and works with your staff in one chat. Before it sends anything, it asks you to approve.' },
            { question: 'Does it work with QuickBooks Online, Xero, TaxDome or Karbon?', answer: 'It works in web-based tools you can log in to with a browser: bank and card portals, webmail, online bookkeeping and practice-management tools. We have not certified any specific accounting or tax software yet, so try it on yours during the 7-day free trial.' },
            { question: 'Does it prepare or file tax returns?', answer: 'No. It gathers documents, downloads statements, sorts the inbox, tracks deadlines and drafts emails. Preparing, reviewing, signing and filing returns, and any tax advice, stay with you and your staff.' },
            { question: 'Can it fill forms and spreadsheets?', answer: 'Yes. It fills fillable PDF forms, Excel and Word files you upload, such as an organizer or an engagement letter template, and saves them to Files for you to check. Scanned PDFs without form fields cannot be filled.' },
            { question: 'Can it answer our phones?', answer: PHONES_FAQ },
            { question: 'Is our client data safe?', answer: SAFE_FAQ },
            { question: 'How much does it cost?', answer: PRICE_LINE },
            { question: 'Can my whole team use it?', answer: 'Yes. Users are unlimited. Add your staff and partners to the same chat and everyone can hand out jobs and see the work.' },
        ],
        room: {
            title: 'Firm back office',
            label: 'Example chat between a firm owner and three AI agents',
            dayFrom: 5,
            people: {
                you: { name: 'You', kind: 'human', initials: 'Y' },
                inbox: { name: 'Inbox agent', kind: 'agent', initials: 'I' },
                docs: { name: 'Documents agent', kind: 'agent', initials: 'D' },
                dead: { name: 'Deadlines agent', kind: 'agent', initials: 'L' },
            },
            url: 'bank-portal.example/statements',
            fields: [
                ['Client', 'Rivera Landscaping LLC'],
                ['Account', 'Operating ••4410'],
                ['Statement', 'September 2026'],
            ],
            script: [
                { who: 'inbox', time: '9:47 pm', text: 'Rivera Landscaping sent their 1099s. Filed to their folder. Passing to Documents.' },
                { who: 'docs', time: '9:49 pm', text: 'Still missing September bank statement. Getting it from the portal.', event: 'browser' },
                { who: 'docs', time: '9:53 pm', text: 'File complete.', event: 'file', file: 'rivera-sep-2026-statement.pdf', meta: 'Rivera Landscaping / 2026' },
                { who: 'docs', time: '9:54 pm', text: 'Thank-you note drafted: “We have everything, we will start this week.” Send it?', event: 'approve' },
                { who: 'you', time: '7:58 am', text: 'Approve.' },
                { who: 'dead', time: '8:00 am', text: 'Morning check done. 7 extensions due in 30 days, 2 files still incomplete.', event: 'file', file: 'deadlines-30-days.xlsx', meta: 'with missing-docs flags' },
            ],
            demoTask: 'Every morning, check which clients are still missing documents and draft a reminder email to each for my approval.',
            demoLabel: 'Hire your Documents agent, free for 7 days',
            caption: 'An example night at an accounting firm: the Inbox agent files a client’s 1099s at 9:47 pm, the Documents agent downloads the missing bank statement from a web portal and drafts a thank-you note, which waits for the owner, who approves it at 7:58 am; the Deadlines agent then reports extensions due in the next 30 days. Names are made up.',
        },
    },
    'law-firms': {
        slug: 'law-firms',
        path: '/ai-agents-for-law-firms',
        prefix: 'law',
        title: 'AI Agents for Law Firms and Solo Attorneys | Dooza',
        description: 'AI agents for small law firms: new-lead intake, client update emails, document and signature chasing, records requests, court docket checks and billing follow-up, 24/7, with your approval. Free 7 days.',
        serviceName: 'Dooza Crew for law firms',
        serviceType: 'AI agents for law firm operations',
        audience: 'Small law firms and solo attorneys',
        tagline: 'for law firms',
        eyebrow: 'AI agents for law firms',
        h1: 'We know the practice grind. Our AI agents do it.',
        lede: 'Dooza for small law firms and solo attorneys: one AI agent for each job that eats your non-billable hours. New-lead intake, client update emails, documents and signatures, records requests, docket checks, billing. Each one sets itself up like a new hire, works around the clock, and passes work to the others like a real team.',
        examples: [
            'Reply to every new web inquiry within the hour',
            'Draft a status update to every client who asked this week',
            'Email every client still missing documents for their case',
            'Every morning, check the court portal for new docket entries',
            'Follow up on every invoice more than 30 days late',
        ],
        handoffs: 'Hire one or all six. Each has its own computer, its own browser and its own job. And they work with each other: the Intake agent hands a signed client to the Documents agent to open the checklist, the Records agent drops every record that arrives into the matter folder, the Docket agent tells the Updates agent when something new is filed, and you see every handoff in your chat.',
        agents: [
            {
                name: 'Intake agent',
                pain: 'The lead who emailed at 9 pm hired the firm that answered first.',
                job: 'Watches your web forms and intake inbox, drafts a reply to each new inquiry within the hour with your intake questions and your booking link, saves the answers to Files and follows up on a schedule until they book or say no. Nothing goes out until you tap Approve.',
                task: 'Check my intake inbox every hour, draft a reply to each new inquiry with our intake questions and booking link for my approval, and follow up every 2 days until they book.',
            },
            {
                name: 'Updates agent',
                pain: '“Any update on my case?” Again.',
                job: 'Spots every “any update?” email in your inbox, reads that matter’s notes and recent filings, and drafts a short, plain-English status update for the client, plus a regular check-in for the ones who did not ask. A lawyer approves every word before it goes.',
                task: 'Every Friday, draft a short status update for each active client from the matter notes in Files, for my approval.',
            },
            {
                name: 'Documents agent',
                pain: 'The case waits on one missing document.',
                job: 'Keeps a checklist per matter, checks what has come in, and drafts a reminder to every client still missing a document or a signature, then follows up until the file is complete. It files what arrives in the right matter folder.',
                task: 'Every morning, check which clients are still missing documents or signatures on their matter checklist and draft a reminder to each for my approval; follow up every 3 days.',
            },
            {
                name: 'Records agent',
                pain: 'Records requests that sit for weeks.',
                job: 'Fills your records request letters and authorization forms from the client file, saves them to Files, drafts the cover email to the provider or agency, and follows up on a schedule until the records arrive. It fills fillable PDF, Word and Excel files you upload.',
                task: 'For each new matter, fill our records request letter and authorization from the client file, save them to Files, draft the email to each provider for my approval, and follow up every 7 days.',
            },
            {
                name: 'Docket agent',
                pain: 'Checking the court portal, case by case.',
                job: 'Logs in to the court and agency web portals you use, in its own browser, checks your cases for new docket entries every morning, saves new filings to the matter folder and flags dates for an attorney to confirm and calendar. You sign in once and type the 2FA code yourself.',
                task: 'Every morning, log in to the court portal, check my open cases for new docket entries, save new filings to each matter folder in Files and list any dates for me to confirm.',
            },
            {
                name: 'Billing agent',
                pain: 'The work is billed. The money is not.',
                job: 'Checks your billing tool or sheet for unpaid invoices, drafts a polite reminder with the amount and the payment link, and follows up on a schedule until it is paid. Nothing goes out until you tap Approve.',
                task: 'Every Friday, list invoices more than 30 days overdue and draft a polite reminder to each client with the amount and payment link, for my approval.',
            },
        ],
        phonesPain: 'Prospects call while you are in court.',
        night: [
            { time: '6:10 pm', who: 'Updates agent', text: '6 “any update?” emails today. Answers drafted from the matter notes.' },
            { time: '9:05 pm', who: 'Intake agent', text: '3 new web inquiries. Replies with intake questions and your booking link drafted.' },
            { time: '1:00 am', who: 'Records agent', text: '4 records requests filled and saved to Files, cover emails drafted.' },
            { time: '6:00 am', who: 'Docket agent', text: '2 new docket entries on your open cases. Filings saved, 1 date to confirm.' },
            { time: '7:30 am', who: 'Documents agent', text: '4 clients still missing documents. Reminders drafted.' },
            { time: '7:58 am', who: 'You', text: 'Approved 13 drafts from your phone before your first hearing.', human: true },
        ],
        howTitle: 'Hire it like a new legal assistant. Minus the months of training.',
        steps: [
            { title: 'Tell it the job', text: 'Type the job in plain words, the way you would brief a new assistant on day one.' },
            { title: 'It sets itself up', text: 'Your master agent creates the agent, with its own computer and browser. You sign in to your portals and webmail once.' },
            { title: 'Add your team', text: 'Invite your attorneys and paralegals to the same chat. Anyone can hand out a job and see the work.' },
        ],
        guardTitle: 'Your bar card, your clients, your judgment.',
        guardLede: 'Your duties of confidentiality and supervision do not change. So the agents do the legwork and a lawyer keeps every decision.',
        guardrails: [
            { name: 'Never sends without you', text: 'Before it sends an email or clicks Send, Submit or Pay, it asks you: Approve, Edit or Reject in chat.' },
            { name: 'No legal advice', text: 'It gathers, sorts, tracks and drafts. Advice, strategy, signatures and anything filed with a court stay with your attorneys.' },
            { name: 'Keeps your systems', text: 'No migration. It works in the web tools you already log in to, in its own private browser.' },
            { name: 'No surprise bill', text: 'A hard cap on AI spend. At the cap it pauses and tells you.' },
        ],
        priceTitle: 'Less than one billable hour. For the month.',
        faqTitle: 'Questions lawyers ask',
        faq: [
            { question: 'What is Dooza Crew for law firms?', answer: 'Dooza Crew gives a small law firm AI agents: one for new-lead intake, one for client status updates, one to chase documents and signatures, one for records requests, one to check court portals and one for billing follow-up. Each has its own computer and browser, works around the clock, and works with your staff in one chat. Before it sends anything, it asks a person to approve.' },
            { question: 'Does it give legal advice or file with the court?', answer: 'No. It gathers, sorts, tracks and drafts. Legal advice, strategy, signatures and anything filed with a court stay with your attorneys, and a person approves every message before it goes out.' },
            { question: 'Does it work with Clio, MyCase or PracticePanther?', answer: 'It works in web-based tools you can log in to with a browser: webmail, court and agency portals, and online practice-management and billing tools. We have not certified any specific practice-management software yet, so try it on yours during the 7-day free trial.' },
            { question: 'How does it fit our ethics duties?', answer: 'You stay in charge. You decide what it can access, you type your own passwords and 2FA codes, every account runs in its own isolated sandbox, and nothing goes out without a person approving it. Review your bar’s guidance on AI, such as ABA Formal Opinion 512, and supervise it the way you would a new assistant.' },
            { question: 'Can it fill forms?', answer: 'Yes. It fills fillable PDF forms, Word and Excel files you upload, such as records request letters, authorizations and intake forms, and saves them to Files for you to check. Scanned PDFs without form fields cannot be filled.' },
            { question: 'Can it answer our phones?', answer: PHONES_FAQ },
            { question: 'How much does it cost?', answer: PRICE_LINE },
            { question: 'Can my whole team use it?', answer: 'Yes. Users are unlimited. Add your attorneys, paralegals and staff to the same chat and everyone can hand out jobs and see the work.' },
        ],
        room: {
            title: 'Firm front desk',
            label: 'Example chat between an attorney and three AI agents',
            dayFrom: 6,
            people: {
                you: { name: 'You', kind: 'human', initials: 'Y' },
                intake: { name: 'Intake agent', kind: 'agent', initials: 'I' },
                docs: { name: 'Documents agent', kind: 'agent', initials: 'D' },
                docket: { name: 'Docket agent', kind: 'agent', initials: 'K' },
            },
            url: 'intake-form.example/new-inquiry',
            fields: [
                ['Name', 'Dana Whitfield'],
                ['Matter', 'Car accident, Sept 30'],
                ['Prefers', 'Email, evenings'],
            ],
            script: [
                { who: 'intake', time: '9:02 pm', text: 'New inquiry from the website form. Reading it now.', event: 'browser' },
                { who: 'intake', time: '9:04 pm', text: 'Reply drafted with our intake questions and your consult link. Send it?', event: 'approve' },
                { who: 'you', time: '9:20 pm', text: 'Approve.' },
                { who: 'intake', time: '10:41 pm', text: 'Dana booked Thursday 10:00. Intake answers saved. Passing to Documents.', event: 'file', file: 'whitfield-intake.pdf', meta: 'new matter folder' },
                { who: 'docs', time: '10:43 pm', text: 'Checklist opened: police report, photos, insurance card. Request drafted for your OK.' },
                { who: 'docket', time: '7:00 am', text: 'Morning check done. 2 new docket entries on open cases, 1 date for you to confirm.', event: 'file', file: 'docket-check.xlsx', meta: 'new entries + dates' },
            ],
            demoTask: 'Check my intake inbox every hour and draft a reply to each new inquiry with our intake questions and booking link, for my approval.',
            demoLabel: 'Hire your Intake agent, free for 7 days',
            caption: 'An example evening at a small law firm: the Intake agent reads a new web inquiry at 9:02 pm and drafts a reply, the attorney approves it from their phone, the prospect books a consult, the Documents agent opens the matter checklist, and the next morning the Docket agent reports new docket entries. Names are made up.',
        },
    },
};

export function industryMetadata(c) {
    const url = `${SITE_URL}${c.path}`;
    return {
        title: { absolute: c.title },
        description: c.description,
        alternates: { canonical: url },
        openGraph: { title: c.title, description: c.description, url, siteName: 'Dooza', type: 'website', images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza' }] },
        twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: [`${SITE_URL}/logo.png`] },
    };
}

export function industrySchemas(c) {
    const url = `${SITE_URL}${c.path}`;
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: c.serviceName,
            serviceType: c.serviceType,
            url,
            provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
            audience: { '@type': 'BusinessAudience', audienceType: c.audience },
            offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD', description: 'Per organization per month after a 7-day free trial; unlimited users and agents; AI usage included with a hard spending cap.' },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        },
    ];
}
