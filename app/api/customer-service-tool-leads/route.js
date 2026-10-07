import { NextResponse } from 'next/server';
import { calculateCustomerServiceReport } from '../../../lib/customerServiceAutomation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Report requests from the customer service automation tool pages
// (/best-customer-service-automation-software, /customer-service-automation-solutions).
// Until 2026-10-07 this proxied to accounts.dooza.co, which no longer resolves,
// so every submit failed. Now each request becomes a Close lead with the
// computed report in a note, plus a task to email the report (the page
// promises a manual report).

const CLOSE_BASE = 'https://api.close.com/api/v1';
const STATUS_POTENTIAL = 'stat_nkpN4inzaYIfOaao3HfnSSCbl5hfQL7CjwR9KhzKFZ2';

function clean(value, max = 200) {
    if (value === undefined || value === null) return '';
    return String(value).replace(/\p{Cc}/gu, ' ').trim().slice(0, max);
}

async function closeFetch(apiKey, path, init = {}) {
    const response = await fetch(`${CLOSE_BASE}${path}`, {
        ...init,
        headers: {
            Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    const text = await response.text();
    let data = null;
    try {
        data = text ? JSON.parse(text) : null;
    } catch {
        data = { raw: text };
    }
    if (!response.ok) {
        const error = new Error(`Close ${init.method || 'GET'} ${path} failed: ${response.status}`);
        error.status = response.status;
        error.body = data;
        throw error;
    }
    return data;
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const contact = body.contact || {};
    const name = clean(contact.name, 120);
    const email = clean(contact.email, 200).toLowerCase();
    const company = clean(contact.company, 160);
    const website = clean(contact.website, 250);
    const phone = clean(contact.phone, 40);
    if (!name || !company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: 'Enter your name, work email and company.' }, { status: 400 });
    }

    let report;
    try {
        report = calculateCustomerServiceReport(clean(body.slug, 120), body.inputs || {});
    } catch {
        return NextResponse.json({ error: 'Unknown tool page.' }, { status: 400 });
    }

    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) {
        console.error('customer-service-tool-leads: CLOSE_API_KEY not set');
        return NextResponse.json({ error: 'Lead capture is temporarily unavailable.' }, { status: 503 });
    }

    const utm = Object.entries(body.utm || {})
        .slice(0, 12)
        .map(([key, value]) => `${clean(key, 40)}: ${clean(value, 250)}`);
    const s = report.inputSummary;

    try {
        const lead = {
            name: company,
            url: website || undefined,
            status_id: STATUS_POTENTIAL,
            description: `Website tool: ${report.keyword} report request (/${report.pageSlug})`,
            contacts: [{
                name,
                emails: [{ email, type: 'office' }],
                ...(phone ? { phones: [{ phone, type: 'office' }] } : {}),
            }],
            custom: { 'Lead Source': 'website-tool', 'Landing Page': `/${report.pageSlug}` },
        };
        let created;
        try {
            created = await closeFetch(apiKey, '/lead/', { method: 'POST', body: JSON.stringify(lead) });
        } catch (error) {
            if (error.status !== 400) throw error;
            console.error('customer-service-tool-leads: create with custom fields failed, retrying without', error.body);
            delete lead.custom;
            created = await closeFetch(apiKey, '/lead/', { method: 'POST', body: JSON.stringify(lead) });
        }

        const note = [
            `Customer service automation report requested on /${report.pageSlug}`,
            `Page: ${clean(body.pageUrl, 500)}`,
            '',
            `Business: ${s.businessType} · stack: ${s.currentStack} · channels: ${s.channels.join(', ')}`,
            `Tickets/month: ${s.monthlyTickets} · min/ticket: ${s.avgMinutesPerTicket} · $/hour: ${s.hourlySupportCost} · team: ${s.teamSize} · urgent: ${s.urgentPercent}%`,
            `Main pain: ${s.mainPain}`,
            '',
            `Recommended workflow: ${report.recommendedWorkflow}`,
            `Manual hours/month: ${report.manualHours} · hours saved at ${s.automationCoverage}% coverage: ${report.estimatedHoursSaved}`,
            `Time value: $${report.monthlyTimeValue}/month · $${report.annualTimeValue}/year`,
            ...(utm.length ? ['', ...utm] : []),
            `User agent: ${clean(request.headers.get('user-agent'), 250)}`,
        ].join('\n');
        await closeFetch(apiKey, '/activity/note/', {
            method: 'POST',
            body: JSON.stringify({ lead_id: created.id, note }),
        }).catch((error) => console.error('customer-service-tool-leads: note failed', error.body || error.message));
        await closeFetch(apiKey, '/task/', {
            method: 'POST',
            body: JSON.stringify({
                lead_id: created.id,
                text: `Email ${email} their customer service automation report (numbers in the note) and offer a pilot call.`,
                date: new Date().toISOString().slice(0, 10),
                is_complete: false,
            }),
        }).catch((error) => console.error('customer-service-tool-leads: task failed', error.body || error.message));

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('customer-service-tool-leads: Close failed', error.body || error.message);
        return NextResponse.json({ error: 'Lead capture is temporarily unavailable.' }, { status: 503 });
    }
}
