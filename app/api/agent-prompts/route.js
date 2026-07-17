import { NextResponse } from 'next/server';
import { supabaseServer } from '../../../lib/supabaseServer';

const MAX_PROMPT_LENGTH = 2000;
const MAX_EMAIL_LENGTH = 320;

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

    try {
        const { data, error } = await supabaseServer
            .from('agent_prompts')
            .insert({
                prompt,
                email: email || null,
                source: 'dooza.ai/workflow',
                user_agent: request.headers.get('user-agent')?.slice(0, 500) ?? null,
            })
            .select('id')
            .single();

        if (error) {
            console.error('agent_prompts insert failed', { message: error.message });
            return NextResponse.json({ error: 'Could not save right now. Please try again.' }, { status: 500 });
        }

        return NextResponse.json({ id: data.id }, { status: 201 });
    } catch (err) {
        console.error('agent_prompts insert crashed', { message: err instanceof Error ? err.message : String(err) });
        return NextResponse.json({ error: 'Could not save right now. Please try again.' }, { status: 500 });
    }
}
