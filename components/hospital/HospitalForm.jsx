'use client';
import { useEffect, useRef, useState } from 'react';

// /hospital form: 4 fields + hidden gclid/utm. gtag events per Apollo's brief (2026-11-11).
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const ev = (name) => { try { if (window.gtag) window.gtag('event', name); } catch (e) {} };
// WhatsApp number not decided yet (Apollo 18:57). Set it here; until then the button is a placeholder.
const WA_NUMBER = '';

export function WhatsAppButton() {
    const cls = 'inline-block rounded-xl border-2 border-[#16A34A] px-6 py-4 text-lg font-semibold text-[#15803D]';
    if (!WA_NUMBER) return <span className={`${cls} cursor-not-allowed opacity-60`} data-placeholder="whatsapp" onClick={() => ev('whatsapp_click')}>WhatsApp us</span>;
    return <a href={`https://wa.me/${WA_NUMBER}`} onClick={() => ev('whatsapp_click')} className={`${cls} hover:bg-[#F0FDF4]`}>WhatsApp us</a>;
}

export default function HospitalForm() {
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const hidden = useRef({});
    const started = useRef(false);
    useEffect(() => {
        try {
            const q = new URLSearchParams(window.location.search);
            HIDDEN.forEach((k) => { const v = q.get(k); if (v) hidden.current[k] = v; });
        } catch (e) {}
    }, []);
    const onFocus = () => { if (!started.current) { started.current = true; ev('hospital_form_start'); } };
    const submit = async (e) => {
        e.preventDefault();
        setState('sending'); setError('');
        const body = { ...hidden.current, ...Object.fromEntries(new FormData(e.currentTarget).entries()) };
        try {
            const r = await fetch('/api/hospital-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
            const d = await r.json().catch(() => ({}));
            if (!r.ok || !d.ok) throw new Error(d.error || 'Could not save right now. Please try again.');
            ev('hospital_form_submit');
            setState('done');
        } catch (err) { setError(err.message); setState('idle'); }
    };
    if (state === 'done') {
        return (
            <div className="rounded-2xl border border-[#0F766E] bg-white p-6">
                <p className="text-lg font-semibold text-[#14213D]">Thank you. We'll call you to fix a demo time.</p>
                <p className="mt-2 text-[15px] text-[#4B5567]">Expect a call or WhatsApp message within one working day.</p>
            </div>
        );
    }
    const input = 'mt-1 block w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[16px] text-[#14213D] focus:border-[#14213D] focus:outline-none';
    const label = 'text-[14px] font-medium text-[#14213D]';
    return (
        <form id="start" onSubmit={submit} onFocus={onFocus} className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
            <p className="text-lg font-semibold text-[#14213D]">Book a free demo</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className={label}>Your name<input name="name" required autoComplete="name" className={input} /></label>
                <label className={label}>Hospital / clinic name<input name="hospital" required autoComplete="organization" className={input} /></label>
                <label className={label}>City<input name="city" required autoComplete="address-level2" className={input} /></label>
                <label className={label}>Mobile (WhatsApp)<input name="phone" type="tel" required autoComplete="tel" className={input} /></label>
            </div>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p role="alert" className="mt-3 text-[14px] text-[#B91C1C]">{error}</p>}
            <button type="submit" disabled={state === 'sending'} className="mt-4 w-full rounded-xl bg-[#0F766E] px-5 py-4 text-[17px] font-semibold text-white hover:bg-[#0B5D57] disabled:opacity-60">
                {state === 'sending' ? 'Sending…' : 'Book a free demo'}
            </button>
        </form>
    );
}
