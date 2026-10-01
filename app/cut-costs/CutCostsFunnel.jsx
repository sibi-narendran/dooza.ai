'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/sibi-dooza/book-a-meeting-and-walk-away-with-clarity';

// One question per screen. Visitors only ever see the next one, never the
// full list, so the form feels short.
const QUESTIONS = {
    role: {
        title: 'Your role?',
        options: [
            { id: 'owner', emoji: '👑', label: 'Owner / founder' },
            { id: 'decider', emoji: '🧭', label: 'I help make the call' },
            { id: 'other', emoji: '👀', label: 'Just exploring' },
        ],
    },
    budget: {
        title: 'Monthly budget for AI?',
        options: [
            { id: 'under100', emoji: '🌱', label: 'Under $100' },
            { id: '100to1k', emoji: '💵', label: '$100 – $1,000' },
            { id: '1kplus', emoji: '🚀', label: '$1,000+' },
        ],
    },
};

// Progress meter fill per screen. It starts part-filled so the first tap
// already feels like progress.
const METER = { phone: 12, role: 45, budget: 78, done: 100 };

// Same rule as /api/cost-leads. Kept here so the pixel fires without waiting
// on the CRM round trip.
// Qualified = decides on spend AND has a budget of $100 a month or more.
const isQualified = (role, budget) => ['owner', 'decider'].includes(role) && budget !== 'under100';

const ATTRIBUTION_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'ad_id', 'adset_id'];

const CONFETTI_COLORS = ['#14b8a6', '#f59e0b', '#ec4899', '#6366f1', '#22c55e', '#f97316'];

function readCookie(name) {
    if (typeof document === 'undefined') return '';
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : '';
}

// US numbers only: "+1" is shown as a fixed prefix. Handles typing and
// browser autofill, which may hand over "+1 512…", "15125550147" or
// "(512) 555-0147".
function formatPhone(raw) {
    let digits = raw.replace(/\D/g, '');
    if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
    const d = digits.slice(0, 10);
    if (d.length < 4) return d;
    if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function phoneIsValid(raw) {
    return raw.replace(/\D/g, '').length === 10;
}

function toE164(raw) {
    return `+1${raw.replace(/\D/g, '')}`;
}

function fbq(...args) {
    if (typeof window !== 'undefined' && window.fbq) window.fbq(...args);
}

function gtagEvent(name, params) {
    if (typeof window !== 'undefined' && window.gtag) window.gtag('event', name, params);
}

function buzz() {
    try {
        navigator.vibrate?.(12);
    } catch {
        // Not supported (iOS). Fine.
    }
}

export default function CutCostsFunnel() {
    const [step, setStep] = useState('phone');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('');
    const [picked, setPicked] = useState('');
    const [cheer, setCheer] = useState(null);
    const [qualified, setQualified] = useState(null);
    const lead = useRef(Promise.resolve({ leadId: null, token: null }));
    const attribution = useRef({});
    const inputRef = useRef(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const found = {};
        ATTRIBUTION_KEYS.forEach((key) => {
            const value = params.get(key);
            if (value) found[key] = value;
        });
        attribution.current = found;
    }, []);

    function showCheer(text) {
        setCheer({ text, key: Date.now() });
        setTimeout(() => setCheer(null), 1400);
    }

    function submitPhone(event) {
        event.preventDefault();
        if (!phoneIsValid(phone)) {
            setError('Check your number 🙂');
            inputRef.current?.focus();
            return;
        }
        setError('');
        buzz();
        inputRef.current?.blur();
        const e164 = toE164(phone);

        // Nothing goes to Meta here. Every number is a lead for Close, but
        // Meta only hears about qualified ones (see chooseBudget).
        gtagEvent('cut_costs_phone', { event_category: 'cut_costs' });

        // Save in the background. The visitor moves on instantly; the
        // qualify step waits on this promise for the lead id.
        lead.current = fetch('/api/cost-leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            keepalive: true,
            body: JSON.stringify({ step: 'phone', phone: e164, attribution: attribution.current }),
        })
            .then((res) => res.json())
            .then((data) => ({ leadId: data.leadId || null, token: data.token || null }))
            .catch(() => ({ leadId: null, token: null }));

        showCheer('Nice! 🙌');
        setStep('role');
    }

    function chooseRole(id) {
        buzz();
        setPicked(id);
        setRole(id);
        gtagEvent('cut_costs_role', { event_category: 'cut_costs', role: id });
        setTimeout(() => {
            setPicked('');
            showCheer('Last one 🔥');
            setStep('budget');
        }, 260);
    }

    function chooseBudget(budget) {
        buzz();
        setPicked(budget);
        const ok = isQualified(role, budget);
        const eventId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `cc-${Date.now()}`;

        // Meta gets a Lead only for qualified visitors, so it optimizes toward
        // them. Unqualified numbers stay in Close and never reach Meta.
        if (ok) {
            const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '777622852092389';
            fbq('init', pixelId, { ph: toE164(phone).replace(/\D/g, '') });
            fbq('track', 'Lead', { content_name: 'cut_costs_qualified', lead_type: role, budget }, { eventID: eventId });
            gtagEvent('generate_lead', { event_category: 'cut_costs', role, budget });
        }

        let fbc = readCookie('_fbc');
        if (!fbc && attribution.current.fbclid) fbc = `fb.1.${Date.now()}.${attribution.current.fbclid}`;

        const qualifyBody = {
            phone: toE164(phone),
            role,
            budget,
            eventId,
            fbp: readCookie('_fbp'),
            fbc,
            pageUrl: window.location.href.split('?')[0],
        };
        lead.current.then((ids) =>
            fetch('/api/cost-leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                keepalive: true,
                body: JSON.stringify({ step: 'qualify', ...ids, ...qualifyBody }),
            }).catch(() => {}),
        );

        setTimeout(() => {
            setPicked('');
            setQualified(ok);
            setStep('done');
        }, 260);
    }

    const bookingUrl = `${CALENDLY_URL}?utm_source=facebook&utm_medium=cut-costs&utm_campaign=${encodeURIComponent(
        attribution.current.utm_campaign || 'cut-costs',
    )}`;

    // Calendly is not loaded with the page (speed). Fetch it once the visitor
    // reaches the last question so the popup is ready by the result screen.
    useEffect(() => {
        if (step !== 'budget' || document.getElementById('calendly-widget-js')) return;
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'https://assets.calendly.com/assets/external/widget.css';
        document.head.appendChild(css);
        const js = document.createElement('script');
        js.id = 'calendly-widget-js';
        js.src = 'https://assets.calendly.com/assets/external/widget.js';
        js.async = true;
        document.head.appendChild(js);
    }, [step]);

    function openBooking() {
        gtagEvent('cut_costs_book_click', { event_category: 'cut_costs' });
        if (window.Calendly?.initPopupWidget) {
            window.Calendly.initPopupWidget({ url: bookingUrl });
        } else {
            window.open(bookingUrl, '_blank', 'noopener');
        }
    }

    const question = QUESTIONS[step];

    return (
        <div className="cc-bg relative flex min-h-[100svh] flex-col overflow-hidden">
            {step === 'done' && qualified && <Confetti />}

            <div className="relative mx-auto flex w-full max-w-md flex-1 flex-col px-5 pb-5 pt-4">
                {/* Top bar: logo + meter */}
                <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Dooza" width={28} height={28} className="h-7 w-7 shrink-0 rounded-md" priority />
                    <div className="relative h-3 flex-1 rounded-full bg-slate-200/70" aria-hidden>
                        <div
                            className="cc-meter h-full rounded-full bg-gradient-to-r from-primary-400 to-emerald-500 transition-[width] duration-700 ease-out"
                            style={{ width: `${METER[step]}%` }}
                        />
                        <span
                            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg transition-[left] duration-700 ease-out"
                            style={{ left: `${METER[step]}%` }}
                        >
                            {step === 'done' ? '🏆' : '🚀'}
                        </span>
                    </div>
                </div>

                {/* Cheer toast */}
                <div className="pointer-events-none fixed inset-x-0 bottom-8 z-10">
                    {cheer && (
                        <div key={cheer.key} className="cc-cheer flex justify-center">
                            <span className="rounded-full bg-slate-900 px-5 py-2.5 text-base font-semibold text-white shadow-xl">
                                {cheer.text}
                            </span>
                        </div>
                    )}
                </div>

                <div key={step} className="cc-step flex flex-1 flex-col pt-10">
                    {step === 'phone' && (
                        <form onSubmit={submitPhone} noValidate name="cut-costs" className="flex flex-1 flex-col">
                            <h1 className="text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-slate-900">
                                Cut your costs
                                <br />
                                <span className="bg-gradient-to-r from-primary-600 via-emerald-500 to-primary-600 bg-clip-text text-transparent">
                                    with AI
                                </span>
                            </h1>
                            <p className="mt-2 text-lg text-slate-600">Get a free plan by text.</p>

                            <label htmlFor="cc-phone" className="sr-only">Mobile number</label>
                            <div
                                className={`mt-8 flex items-center rounded-2xl border-2 bg-white shadow-sm transition-colors focus-within:border-primary-500 ${
                                    error ? 'cc-shake border-red-400' : 'border-slate-200'
                                }`}
                            >
                                <span className="flex items-center self-stretch rounded-l-[14px] border-r-2 border-slate-100 bg-slate-50 px-4 text-xl font-semibold text-slate-500" aria-hidden>
                                    +1
                                </span>
                                <input
                                    ref={inputRef}
                                    id="cc-phone"
                                    name="phone"
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    enterKeyHint="go"
                                    placeholder="(555) 123-4567"
                                    value={phone}
                                    onChange={(e) => {
                                        setPhone(formatPhone(e.target.value));
                                        if (error) setError('');
                                    }}
                                    className="w-full min-w-0 rounded-r-2xl bg-transparent px-3 py-4 text-xl font-semibold tracking-wide text-slate-900 placeholder:font-normal placeholder:text-slate-300 focus:outline-none"
                                />
                                {phoneIsValid(phone) && <span className="cc-pop pr-4 text-xl" aria-hidden>✅</span>}
                            </div>
                            {error && <p className="mt-2 text-sm font-medium text-red-600" role="alert">{error}</p>}

                            <button
                                type="submit"
                                className="cc-cta mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-6 py-[1.1rem] text-xl font-bold text-white shadow-lg shadow-primary-600/30 transition active:scale-[0.97]"
                            >
                                Get my free plan <ArrowRight className="h-6 w-6" />
                            </button>
                            <div className="mt-5 flex items-center justify-center gap-2.5">
                                <Image
                                    src="/founder-sibi.jpeg"
                                    alt="Sibi Narendran"
                                    width={36}
                                    height={36}
                                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                                />
                                <p className="text-sm text-slate-600">
                                    Texts come from <span className="font-semibold text-slate-800">Sibi, founder</span>
                                </p>
                            </div>

                            <p className="mt-auto pt-8 text-[11px] leading-snug text-slate-400">
                                By tapping Get my free plan, you agree Dooza may call or text this number about your request,
                                including by automated means. Consent is not a condition of purchase. Msg &amp; data rates may
                                apply. Reply STOP to opt out. <Link href="/privacy" className="underline">Privacy</Link> ·{' '}
                                <Link href="/terms" className="underline">Terms</Link>
                            </p>
                        </form>
                    )}

                    {question && (
                        <div>
                            <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-slate-900">
                                {question.title}
                            </h2>
                            <div className={`mt-6 grid gap-3 grid-cols-1`}>
                                {question.options.map((option, i) => {
                                    const active = picked === option.id;
                                    return (
                                        <button
                                            key={option.id}
                                            type="button"
                                            disabled={Boolean(picked)}
                                            onClick={() => (step === 'role' ? chooseRole(option.id) : chooseBudget(option.id))}
                                            className={`cc-rise flex items-center rounded-2xl border-2 bg-white text-left font-bold shadow-sm transition active:scale-[0.96] ${
                                                'gap-3 px-5 py-[1.05rem] text-lg'
                                            } ${active ? 'cc-picked border-primary-500 bg-primary-50 text-primary-800' : 'border-slate-200 text-slate-800'}`}
                                            style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                                        >
                                            <span className="text-2xl">{option.emoji}</span>
                                            {option.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {step === 'done' && qualified && (
                        <div className="text-center">
                            <div className="cc-pop text-6xl">🎉</div>
                            <h2 className="mt-4 text-[1.9rem] font-extrabold leading-tight text-slate-900">You&apos;re a fit!</h2>
                            <p className="mt-2 text-lg text-slate-600">Book your free call.</p>
                            <button
                                type="button"
                                onClick={openBooking}
                                className="cc-cta mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-6 py-[1.1rem] text-xl font-bold text-white shadow-lg shadow-primary-600/30 transition active:scale-[0.97]"
                            >
                                Pick a time <ArrowRight className="h-6 w-6" />
                            </button>
                            <p className="mt-6 text-xs text-slate-500">Refundable pilot: 100% refund within 14 days.</p>
                        </div>
                    )}

                    {step === 'done' && qualified === false && (
                        <div className="text-center">
                            <div className="cc-pop text-6xl">🙌</div>
                            <h2 className="mt-4 text-[1.9rem] font-extrabold leading-tight text-slate-900">Thanks!</h2>
                            <p className="mt-2 text-lg text-slate-600">We&apos;ll text you soon.</p>
                            <Link
                                href="/workforce"
                                className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-primary-600 bg-white px-6 py-4 text-lg font-bold text-primary-700 transition active:scale-[0.97]"
                            >
                                Meet your AI team <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <style jsx global>{`
                @keyframes cc-rise {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: none; }
                }
                @keyframes cc-step {
                    from { opacity: 0; transform: translateX(28px); }
                    to { opacity: 1; transform: none; }
                }
                @keyframes cc-pop {
                    0% { transform: scale(0.3); opacity: 0; }
                    60% { transform: scale(1.18); opacity: 1; }
                    100% { transform: scale(1); }
                }
                @keyframes cc-shake {
                    10%, 90% { transform: translateX(-2px); }
                    30%, 70% { transform: translateX(5px); }
                    50% { transform: translateX(-5px); }
                }
                @keyframes cc-pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.12, 1.4); opacity: 0; }
                }
                @keyframes cc-cheer {
                    0% { opacity: 0; transform: translateY(16px) scale(0.9); }
                    15%, 80% { opacity: 1; transform: none; }
                    100% { opacity: 0; transform: translateY(8px); }
                }
                @keyframes cc-picked {
                    0% { transform: scale(1); }
                    40% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                @keyframes cc-confetti {
                    0% { transform: translate3d(0, -10vh, 0) rotate(0); opacity: 1; }
                    100% { transform: translate3d(var(--x), 105vh, 0) rotate(var(--r)); opacity: 0.9; }
                }
                .cc-rise { animation: cc-rise 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
                .cc-step { animation: cc-step 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
                .cc-pop { animation: cc-pop 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
                .cc-shake { animation: cc-shake 0.4s both; }
                .cc-cta { position: relative; isolation: isolate; }
                .cc-cta::after {
                    content: ''; position: absolute; inset: 0; border-radius: inherit; background: #0d9488;
                    z-index: -1; animation: cc-pulse 2s ease-out 1.5s infinite; will-change: transform, opacity;
                }
                .cc-cheer { animation: cc-cheer 1.4s ease-out both; }
                .cc-picked { animation: cc-picked 0.26s ease-out; }
                .cc-confetti {
                    position: absolute; top: 0; width: 9px; height: 14px; border-radius: 2px; z-index: 20;
                    pointer-events: none; animation: cc-confetti var(--t) cubic-bezier(0.25, 0.5, 0.5, 1) var(--d) both;
                }
                .cc-bg {
                    background-color: #faf9f7;
                    background-image: radial-gradient(circle at 0% 0%, #ccfbf1 0, transparent 55%),
                        radial-gradient(circle at 100% 100%, #d1fae5 0, transparent 50%);
                }
                @media (prefers-reduced-motion: reduce) {
                    .cc-rise, .cc-step, .cc-pop, .cc-shake, .cc-picked, .cc-cta::after { animation: none; }
                    .cc-confetti { display: none; }
                }
            `}</style>
        </div>
    );
}

function Confetti() {
    const [pieces] = useState(() =>
        Array.from({ length: 36 }, (_, i) => ({
            left: Math.random() * 100,
            x: `${(Math.random() - 0.5) * 120}px`,
            r: `${Math.random() * 720 - 360}deg`,
            t: `${1.6 + Math.random() * 1.4}s`,
            d: `${Math.random() * 0.4}s`,
            color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        })),
    );
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {pieces.map((p, i) => (
                <span
                    key={i}
                    className="cc-confetti"
                    style={{ left: `${p.left}%`, background: p.color, '--x': p.x, '--r': p.r, '--t': p.t, '--d': p.d }}
                />
            ))}
        </div>
    );
}
