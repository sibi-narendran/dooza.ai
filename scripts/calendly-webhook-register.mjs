#!/usr/bin/env node
// Register, list or delete the Calendly webhook that feeds AI receptionist
// pilot bookings into Close (app/api/calendly-webhook/route.js).
//
//   node scripts/calendly-webhook-register.mjs list
//   node scripts/calendly-webhook-register.mjs register [https://www.dooza.ai/api/calendly-webhook]
//   node scripts/calendly-webhook-register.mjs delete <webhook_subscription_uri>
//
// Needs CALENDLY_TOKEN (personal access token from calendly.com/integrations/api_webhooks)
// and CALENDLY_WEBHOOK_SIGNING_KEY (same value as the Vercel env var) in .env.local or the shell.

import fs from 'node:fs';
import path from 'node:path';

const API = 'https://api.calendly.com';
const DEFAULT_URL = 'https://www.dooza.ai/api/calendly-webhook';
const EVENTS = ['invitee.created', 'invitee.canceled'];

function loadEnv() {
    for (const file of ['.env.local', '.env']) {
        const full = path.resolve(process.cwd(), file);
        if (!fs.existsSync(full)) continue;
        for (const line of fs.readFileSync(full, 'utf8').split('\n')) {
            const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
            if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
        }
    }
}

async function calendly(token, endpoint, init = {}) {
    const response = await fetch(`${API}${endpoint}`, {
        ...init,
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
    });
    const text = await response.text();
    const data = text ? JSON.parse(text) : null;
    if (!response.ok) {
        throw new Error(`${init.method || 'GET'} ${endpoint} -> ${response.status}: ${JSON.stringify(data)}`);
    }
    return data;
}

async function main() {
    loadEnv();
    const [command = 'list', argument] = process.argv.slice(2);
    const token = process.env.CALENDLY_TOKEN;
    if (!token) {
        console.error('CALENDLY_TOKEN is missing. Create a personal access token at calendly.com/integrations/api_webhooks and add it to .env.local.');
        process.exit(1);
    }

    const me = await calendly(token, '/users/me');
    const user = me.resource.uri;
    const organization = me.resource.current_organization;
    console.log(`Calendly user: ${me.resource.name} <${me.resource.email}>`);

    if (command === 'list') {
        const list = await calendly(token, `/webhook_subscriptions?organization=${encodeURIComponent(organization)}&scope=user&user=${encodeURIComponent(user)}`);
        if (!list.collection.length) console.log('No webhook subscriptions.');
        for (const hook of list.collection) {
            console.log(`${hook.state}  ${hook.callback_url}  events=${hook.events.join(',')}  uri=${hook.uri}`);
        }
        return;
    }

    if (command === 'register') {
        const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
        if (!signingKey) {
            console.error('CALENDLY_WEBHOOK_SIGNING_KEY is missing. It must match the Vercel env var.');
            process.exit(1);
        }
        const url = argument || DEFAULT_URL;
        const created = await calendly(token, '/webhook_subscriptions', {
            method: 'POST',
            body: JSON.stringify({ url, events: EVENTS, organization, user, scope: 'user', signing_key: signingKey }),
        });
        console.log(`Registered ${created.resource.state} webhook -> ${created.resource.callback_url}`);
        console.log(`uri: ${created.resource.uri}`);
        return;
    }

    if (command === 'delete') {
        if (!argument) throw new Error('Pass the webhook_subscription uri to delete.');
        const id = argument.split('/').pop();
        await calendly(token, `/webhook_subscriptions/${id}`, { method: 'DELETE' });
        console.log(`Deleted ${argument}`);
        return;
    }

    throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
