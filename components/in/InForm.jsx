'use client';
import { useEffect, useRef, useState } from 'react';

// Dooza Compliance India form (brief 11-13). Events in_form_start / in_form_submit (primary) for Google Ads AW-10872232955 (loaded in layout).
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const ev = (name, p) => { try { if (window.gtag) window.gtag('event', name, p || {}); } catch (e) {} };

export default function InForm({ service = 'general' }) {
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const [svc, setSvc] = useState(service);
    const hidden = useRef({});
    const started = useRef(false);
    useEffect(() => { try { const q = new URLSearchParams(window.location.search); HIDDEN.forEach((k) => { const v = q.get(k); if (v) hidden.current[k] = v; }); } catch (e) {} }, []);
    const start = () => { if (!started.current) { started.current = true; ev('in_form_start', { service: svc }); } };
    const submit = async (e) => {
        e.preventDefault(); setState('sending'); setError('');
        const fd = new FormData(e.currentTarget);
        fd.set('service', svc); fd.set('page', window.location.pathname);
        HIDDEN.forEach((k) => { if (hidden.current[k]) fd.set(k, hidden.current[k]); });
        try {
            const r = await fetch('/api/in-lead', { method: 'POST', body: fd });
            const d = await r.json().catch(() => ({}));
            if (!r.ok || !d.ok) throw new Error(d.error || 'Could not save right now. Please try again.');
            ev('in_form_submit', { service: svc });
            setState('done');
        } catch (err) { setError(err.message); setState('idle'); }
    };
    const input = 'mt-1 block w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[16px] text-[#14213D] focus:border-[#14213D] focus:outline-none';
    if (state === 'done') {
        return (
            <div id="start" className="rounded-2xl border border-[#0F766E] bg-white p-6">
                <p className="text-lg font-semibold text-[#14213D]">Thank you. We&apos;ll WhatsApp you within 15 minutes (9am-9pm IST).</p>
                <p className="mt-2 text-[15px] text-[#4B5567]">Outside those hours, first thing the next morning.</p>
            </div>
        );
    }
    return (
        <form id="start" onSubmit={submit} onFocus={start} className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
            <p className="text-lg font-semibold text-[#14213D]">Get started</p>
            {service === 'general' && (
                <label className="mt-3 block text-[14px] font-medium text-[#14213D]">Service
                    <select value={svc} onChange={(e) => setSvc(e.target.value)} className={input}>
                        <option value="general">Not sure yet</option><option value="epr">EPR registration</option><option value="fcra">FCRA registration</option><option value="bis">BIS CRS registration</option><option value="gst">GST yearly plan</option>
                    </select>
                </label>
            )}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="text-[14px] font-medium text-[#14213D]">Name<input name="name" required autoComplete="name" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Company / NGO name<input name="company" autoComplete="organization" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">WhatsApp number<input name="whatsapp" type="tel" required autoComplete="tel" placeholder="+91" className={input} /></label>
                <label className="text-[14px] font-medium text-[#14213D]">Email<input name="email" type="email" required autoComplete="email" className={input} /></label>
            </div>
            <label className="mt-3 block text-[14px] font-medium text-[#14213D]">Anything we should know? (optional)<textarea name="message" rows={3} className={input} /></label>
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p role="alert" className="mt-3 text-[14px] text-[#B91C1C]">{error}</p>}
            <button type="submit" disabled={state === 'sending'} className="mt-4 w-full rounded-xl bg-[#0F766E] px-5 py-4 text-[17px] font-semibold text-white hover:bg-[#0B5D57] disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'Get started'}</button>
            <p className="mt-2 text-center text-[13px] text-[#64748B]">We WhatsApp you within 15 minutes, 9am-9pm IST.</p>
        </form>
    );
}
