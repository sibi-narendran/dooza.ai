// Dooza Crew, Dooza's main product (Sibi 2026-10-22 15:29 via @daedalus; brief in work/ORDERS.md).
// Every Crew CTA on dooza.ai goes to crew.dooza.ai with utm_content=<page> so sign-ups can be traced to the page.
// Don't claim: user counts, uptime, SOC2/compliance, model names, "built-in" integrations, a monthly price without the trial.
export const CREW_TRIAL = '$50 trial, fully refundable within 7 days';
export const CREW_PRICE = 'then $49 a month, including $20 of AI usage';

export function crewUrl(content) {
    return `https://crew.dooza.ai/?utm_source=dooza&utm_content=${encodeURIComponent(content)}`;
}

// Ready crews advertised on solution pages (Sibi: advertise them, build per industry once clients show demand).
// Honest line for every one: the master agent creates these agents when the customer asks.
export const CREW_INDUSTRIES = {
    'real-estate': { name: 'Real estate', href: '/industries/real-estate', agents: ['Lead follow-up agent', 'Listing writer', 'Showing scheduler'] },
    dispatchers: { name: 'Trucking and dispatch', href: '/industries/dispatchers', agents: ['Load board researcher', 'Broker follow-up agent', 'Paperwork agent for rate confirmations and invoices'] },
    'insurance-agents': { name: 'Insurance agencies', href: '/industries/insurance-agents', agents: ['Renewal reminder agent', 'Quote intake agent', 'Certificate request agent'] },
    'law-firms': { name: 'Law firms', href: '/industries/law-firms', agents: ['Client intake agent', 'Document drafter (for attorney review)', 'Case update agent'] },
    'customer-support': { name: 'Customer support', href: '/industries/customer-support', agents: ['Inbox reply agent that drafts from your docs', 'Website chat agent', 'Ticket summary agent'] },
};
export const CREW_SETUP_LINE = 'Your master agent sets up this crew for you on day one.';
