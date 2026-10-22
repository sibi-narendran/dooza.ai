// AI employees per industry (Sibi 2026-10-22 15:59: "AI employees for each ICP with their need, with their tools and
// access, knowledge etc with chatbox so they can start"). Advertised, not pre-built: the master agent creates them on
// request (Daedalus brief: "Your master agent sets up this crew for you on day one"). Keep claims to what a crew can
// do on its own computer with the customer's accounts; anything sent or paid waits for a person's approval.
export const icpCrews = {
    'real-estate': {
        industry: 'real estate',
        employees: [
            { role: 'Lead follow-up', job: 'Calls and texts every new lead from your business number within minutes, asks budget, area and timeline, and books the showing.', tools: 'Phone number, voice calls, your CRM in its browser', knows: 'Your listings and your follow-up script' },
            { role: 'Listing writer', job: 'Writes the listing description, the email blast and the social posts from your notes and photos.', tools: 'Its computer and browser', knows: 'Your past listings and how you write' },
            { role: 'Showing coordinator', job: 'Confirms showings with buyers and sellers, reschedules, and sends the day-before reminder.', tools: 'Your calendar, email, phone number', knows: 'Your availability and showing rules' },
        ],
        examples: ['Call back every new lead within 5 minutes', 'Write a listing for 12 Oak St from my notes', 'Confirm tomorrow’s showings by text', 'Follow up with last month’s open house visitors'],
    },
    dispatchers: {
        industry: 'dispatch',
        employees: [
            { role: 'Load researcher', job: 'Checks the load boards for lanes that fit your trucks and lists the best-paying loads for you to book.', tools: 'Its browser, logged in to your load boards', knows: 'Your lanes, equipment and minimum rate' },
            { role: 'Broker follow-up', job: 'Calls and emails brokers about rates, check calls and missing paperwork.', tools: 'Phone number, voice calls, email', knows: 'Your brokers and your rate floor' },
            { role: 'Paperwork clerk', job: 'Matches rate confirmations, BOLs and invoices, and chases invoices that are past due.', tools: 'Its computer, files, email', knows: 'Your factoring and invoicing rules' },
        ],
        examples: ['Find loads Dallas to Atlanta over $2.50 a mile', 'Chase invoices older than 30 days', 'Match this week’s rate cons to invoices', 'Email brokers for check calls every 4 hours'],
    },
    'insurance-agents': {
        industry: 'insurance agency',
        employees: [
            { role: 'Renewal desk', job: 'Reaches out 60, 30 and 7 days before each renewal and books the review call.', tools: 'Phone number, email, your calendar', knows: 'Your book of business export' },
            { role: 'Quote intake', job: 'Collects quote details by chat or phone and fills in the carrier forms for you to review.', tools: 'Its browser, your carrier portal logins', knows: 'Your intake questions and appetite' },
            { role: 'Certificate requests', job: 'Answers certificate of insurance requests and drafts each one for your approval.', tools: 'Email, its computer and files', knows: 'Your policies and holder details' },
        ],
        examples: ['Remind clients renewing in the next 60 days', 'Collect details for a commercial auto quote', 'Draft COIs for this week’s requests', 'Call back leads from yesterday'],
    },
    'law-firms': {
        industry: 'law firm',
        employees: [
            { role: 'Intake', job: 'Answers new inquiries day and night, asks your intake questions, gathers names for your conflict check, and books the consult.', tools: 'Phone number, web chat, email, your calendar', knows: 'Your practice areas and intake form' },
            { role: 'Document drafts', job: 'Drafts engagement letters and standard documents from your templates for attorney review.', tools: 'Its computer and files', knows: 'Your templates and style' },
            { role: 'Client updates', job: 'Sends status updates you approve and answers “where is my case” questions.', tools: 'Email, phone number', knows: 'Your matter notes' },
        ],
        examples: ['Answer new inquiries and book consults', 'Draft an engagement letter from our template', 'Send this week’s case updates for my approval', 'Collect missing documents from clients'],
    },
    'customer-support': {
        industry: 'support',
        employees: [
            { role: 'Inbox replies', job: 'Drafts replies to every support email from your own docs and sends the ones you approve.', tools: 'Your support inbox in its browser', knows: 'Your help docs, policies and past replies' },
            { role: 'Chat and messaging', job: 'Answers on the chat on your website, WhatsApp and Telegram, and hands hard cases to your team.', tools: 'Web chat, WhatsApp, Telegram, set up by your crew', knows: 'Your products and order rules' },
            { role: 'Ticket review', job: 'Tags tickets and sends a weekly summary of the top issues and what to fix.', tools: 'Its computer, your helpdesk login', knows: 'Your ticket history' },
        ],
        examples: ['Draft replies to today’s support emails', 'Answer chat on our website from our docs', 'Summarize this week’s top ticket issues', 'Reply to WhatsApp questions about orders'],
    },
};
