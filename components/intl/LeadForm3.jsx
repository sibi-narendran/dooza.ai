'use client';
import { useEffect, useRef, useState } from 'react';

// 3-field lead form for /za-tax and /ie-accounts (Apollo brief za-ie-landing-briefs.md). Hidden gclid/utm + page_slug.
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const ev = (n) => { try { if (window.gtag) window.gtag('event', n); } catch (e) {} };

export default function LeadForm3({ slug, fields, cta, done }) {
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const hidden = useRef({});
    const started = useRef(false);
    useEffect(() => { try { const q = new URLSearchParams(window.location.search); HIDDEN.forEach((k) => { const v = q.get(k); if (v) hidden.current[k] = v; }); } catch (e) {} }, []);
    const submit = async (e) => {
        e.preventDefault(); setState('sending'); setError('');
        const body = { ...hidden.current, ...Object.fromEntries(new FormData(e.currentTarget).entries()), page_slug: slug };
        try {
            const r = await fetch('/api/intl-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
            const d = await r.json().catch(() => ({}));
            if (!r.ok || !d.ok) throw new Error(d.error || 'Could not save right now. Please try again.');
            ev(`${slug.replace('-', '_')}_form_submit`);
            try { if (window.gtag) window.gtag('event', 'conversion', { send_to: 'AW-10872232955/fRlFCMryu7YdEPu3pMAo' }); } catch (e) {}
            setState('done');
        } catch (err) { setError(err.message); setState('idle'); }
    };
    if (state === 'done') return <div className="rounded-2xl border border-[#0F766E] bg-white p-6"><p className="text-lg font-semibold text-[#14213D]">{done}</p></div>;
    const input = 'mt-1 block w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[16px] text-[#14213D] focus:border-[#14213D] focus:outline-none';
    return (
        <form onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; ev(`${slug.replace('-', '_')}_form_start`); } }} className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
            <div className="grid gap-3">
                {fields.map(([name, label, type]) => <label key={name} className="text-[14px] font-medium text-[#14213D]">{label}<input name={name} type={type || 'text'} required className={input} /></label>)}
            </div>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p role="alert" className="mt-3 text-[14px] text-[#B91C1C]">{error}</p>}
            <button type="submit" disabled={state === 'sending'} className="mt-4 w-full rounded-xl bg-[#0F766E] px-5 py-4 text-[17px] font-semibold text-white hover:bg-[#0B5D57] disabled:opacity-60">{state === 'sending' ? 'Sending…' : cta}</button>
        </form>
    );
}
