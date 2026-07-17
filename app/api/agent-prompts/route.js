import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const MAX_PROMPT_LENGTH = 2000;
const MAX_EMAIL_LENGTH = 320;

// Agent briefs must land in the ACCOUNTS Supabase project (agent_prompts table),
// which is a different project from the one this site's supabaseServer/blog uses.
const accountsUrl = process.env.ACCOUNTS_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const accountsServiceKey = process.env.ACCOUNTS_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
const accountsDb = accountsUrl && accountsServiceKey ? createClient(accountsUrl, accountsServiceKey) : null;

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const prompt = typeof body?.prompt === 'string' ? body.prompt.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : null;

    if (prompt.length < 3) {
        return NextResponse.json({ error: 'Tell us a bit more about the agent you want.' }, { status: 400 });
    }
    if (prompt.length > MAX_PROMPT_LENGTH) {
        return NextResponse.json({ error: `Please keep it under ${MAX_PROMPT_LENGTH} characters.` }, { status: 400 });
    }
    if (email && (email.length > MAX_EMAIL_LENGTH || !email.includes('@'))) {
        return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 });
    }

    if (!accountsDb) {
        console.error('agent_prompts insert skipped: accounts Supabase env not configured');
        return NextResponse.json({ error: 'Could not save right now. Please try again.', code: 'no_env' }, { status: 500 });
    }

    try {
        const { data, error } = await accountsDb
            .from('agent_prompts')
            .insert({
                prompt,
                email: email || null,
                source: 'dooza.ai/agents',
                user_agent: request.headers.get('user-agent')?.slice(0, 500) ?? null,
            })
            .select('id')
            .single();

        if (error) {
            console.error('agent_prompts insert failed', { code: error.code, message: error.message });
            return NextResponse.json({ error: 'Could not save right now. Please try again.', code: error.code ?? null }, { status: 500 });
        }

        return NextResponse.json({ id: data.id }, { status: 201 });
    } catch (err) {
        console.error('agent_prompts insert crashed', { message: err instanceof Error ? err.message : String(err) });
        return NextResponse.json({ error: 'Could not save right now. Please try again.', code: 'crash' }, { status: 500 });
    }
}
