'use client';

import { useState } from 'react';

const BOOK_SF = '/book?utm_source=website&utm_medium=page&utm_content=software_factory';
const inputCls = 'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-700 focus:outline-none';

export default function SoftwareFactoryBox({ placement = 'sf-hero' }) {
    const [step, setStep] = useState(1);
    const [idea, setIdea] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [purpose, setPurpose] = useState('');
    const [error, setError] = useState('');
    const [busy, setBusy] = useState(false);

    function start(e) {
        e.preventDefault();
        if (idea.trim().length < 3) return setError('Tell us a little about the app you want.');
        setError('');
        setStep(2);
    }

    async function submit(e) {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError('Enter a valid email.');
        if (phone.replace(/\D/g, '').length < 8) return setError('Enter a valid phone number.');
        if (purpose.trim().length < 3) return setError('Add a one-line purpose.');
        setError('');
        setBusy(true);
        try {
            const res = await fetch('/api/software-leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    idea: idea.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    purpose: purpose.trim(),
                    page: typeof window !== 'undefined' ? window.location.pathname : '/software-factory',
                    placement,
                    ts: new Date().toISOString(),
                }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || 'Something went wrong. Please try again.');
            } else {
                setStep(3);
            }
        } catch {
            setError('Something went wrong. Please try again.');
        }
        setBusy(false);
    }

    return (
        <div data-source="software_factory" data-placement={placement} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            {step === 1 && (
                <form onSubmit={start}>
                    <label htmlFor="sf-idea" className="sr-only">Describe the app you want</label>
                    <textarea id="sf-idea" rows={4} value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="Describe the app you want…" className={inputCls} />
                    <button type="submit" className="mt-3 rounded-full bg-primary-700 px-7 py-3 font-bold text-white hover:bg-primary-800">Start</button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={submit} className="space-y-3">
                    <p className="text-slate-700">Almost there. Where should we send your free working demo?</p>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-label="Email" className={inputCls} />
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" aria-label="Phone" className={inputCls} />
                    <input type="text" required value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="What is the app for? One line" aria-label="Purpose" className={inputCls} />
                    <button type="submit" disabled={busy} className="rounded-full bg-primary-700 px-7 py-3 font-bold text-white hover:bg-primary-800 disabled:opacity-60">{busy ? 'Sending…' : 'Send'}</button>
                </form>
            )}
            {step === 3 && (
                <div>
                    <p className="font-serif text-xl font-bold text-slate-900">Thanks. Our team will email and call you shortly.</p>
                    <a href={BOOK_SF} data-source="software_factory" className="mt-4 inline-block rounded-full bg-primary-700 px-8 py-4 text-lg font-bold text-white hover:bg-primary-800">Book a call with Sibi</a>
                </div>
            )}
            {error && <p role="alert" className="mt-3 text-sm font-semibold text-red-700">{error}</p>}
        </div>
    );
}
