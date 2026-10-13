'use client';

import { useState } from 'react';

// "Get 5 free rows for your state": a lighter first step than a 30-minute call.
export default function TruckingSampleForm({ states, claimed = [] }) {
    const [form, setForm] = useState({ name: '', email: '', agency: '', phone: '', state: '', website: '' });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    async function submit(e) {
        e.preventDefault();
        setStatus('sending');
        setError('');
        const params = new URLSearchParams(window.location.search);
        const attribution = { ref: document.referrer || '' };
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
            if (params.get(k)) attribution[k] = params.get(k);
        });
        try {
            const res = await fetch('/api/trucking-sample', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, attribution }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || 'Something went wrong. Please book a call instead.');
            setStatus('done');
            if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: 'trucking-sample' });
            if (typeof window.clarity === 'function') window.clarity('event', 'trucking_sample_submit');
        } catch (err) {
            setStatus('idle');
            setError(err.message);
        }
    }

    if (status === 'done') {
        const s = states.find((x) => x.code === form.state);
        if (claimed.includes(form.state)) {
            return (
                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-6" aria-live="polite">
                    <p className="text-lg font-semibold text-slate-900">Thanks. {s ? s.name : 'Your state'} is on the waitlist.</p>
                    <p className="mt-2 text-slate-700">Another agency has that list right now. We email {form.email} if it opens up, or if you&rsquo;d like a neighbouring state.</p>
                </div>
            );
        }
        return (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6" aria-live="polite">
                <p className="text-lg font-semibold text-slate-900">Got it. Your {s ? s.name : ''} sample is on its way.</p>
                <p className="mt-2 text-slate-700">We email 5 rows from this week&rsquo;s list to {form.email} within 1 working day. Check your spam folder if you don&rsquo;t see it.</p>
            </div>
        );
    }

    const input = 'mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900';
    return (
        <form onSubmit={submit} className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-lg font-semibold text-slate-900">Get 5 free rows from your state</p>
            <p className="mt-1 text-sm text-slate-600">Real companies from this week&rsquo;s list, with names, phone numbers and current insurer. No call needed, no card.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-900">
                    State
                    <select required value={form.state} onChange={set('state')} className={input}>
                        <option value="">Pick your state</option>
                        {states.map((x) => (
                            <option key={x.code} value={x.code}>{x.name}</option>
                        ))}
                    </select>
                    {claimed.includes(form.state) && (
                        <span className="mt-1 block text-xs font-normal text-amber-700">This state is taken by another agency. Send the form to join the waitlist.</span>
                    )}
                </label>
                <label className="block text-sm font-semibold text-slate-900">
                    Agency name
                    <input required value={form.agency} onChange={set('agency')} className={input} autoComplete="organization" />
                </label>
                <label className="block text-sm font-semibold text-slate-900">
                    Your name
                    <input value={form.name} onChange={set('name')} className={input} autoComplete="name" />
                </label>
                <label className="block text-sm font-semibold text-slate-900">
                    Work email
                    <input required type="email" value={form.email} onChange={set('email')} className={input} autoComplete="email" />
                </label>
                <label className="block text-sm font-semibold text-slate-900">
                    Phone (optional)
                    <input type="tel" value={form.phone} onChange={set('phone')} className={input} autoComplete="tel" />
                </label>
                <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} className="hidden" aria-hidden="true" />
            </div>
            {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
            <button type="submit" disabled={status === 'sending'} className="mt-5 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send me 5 free rows'}
            </button>
            <p className="mt-2 text-xs text-slate-500">We email the sample within 1 working day. For insurance agencies only.</p>
        </form>
    );
}
