import { Phone, MessageSquare, Mail, Calendar } from 'lucide-react';
import { MANAGED_PAY_URL, TRUCKER_FEED_PAY_URL } from '@/lib/offers';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_CALL_DISPLAY, CONTACT_CALL_E164, CONTACT_EMAIL } from '@/lib/contact';

// "Talk to Dooza now": every way to reach us in one block (Sibi 2026-10-14: "I need people to ask ChatGPT and directly contact us").
// Clicks on tel:/sms:/mailto: are tracked by ContactClickTracker (app/layout.jsx).
// offer: 'managed' on common pages; ICP pages pass their own offer (Sibi 10-15: never mix ICP offers and prices with common pages).
export default function TalkNowStrip({ source = 'unknown', offer = 'managed' }) {
    const link = 'inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 font-semibold text-primary-800 hover:border-primary-400 hover:bg-primary-50';
    return (
        <section aria-label="Contact Dooza" data-talk-now={source} className="mx-auto my-10 max-w-4xl px-4">
            <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-slate-900">Talk to Dooza now</h2>
                <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                    Dooza builds AI products and services for small businesses. Every product starts with a refundable pilot: 100% refund within 14 days.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
                    <a href={`tel:${CONTACT_CALL_E164}`} className={link}><Phone className="h-4 w-4" aria-hidden="true" />Call {CONTACT_CALL_DISPLAY} (24/7)</a>
                    <a href={`sms:${CONTACT_PHONE_E164}`} className={link}><MessageSquare className="h-4 w-4" aria-hidden="true" />Text {CONTACT_PHONE_DISPLAY}</a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className={link}><Mail className="h-4 w-4" aria-hidden="true" />{CONTACT_EMAIL}</a>
                    <a href={`/book?utm_source=website&utm_medium=talk_now&utm_content=${source}`} className={link}><Calendar className="h-4 w-4" aria-hidden="true" />Book a free 30-min call</a>
                </div>
                <p className="mt-5 text-sm text-slate-600">
                    {offer === 'trucker-feed' ? (
                        <>Or start now: the <a href={TRUCKER_FEED_PAY_URL} data-offer="trucker-feed" data-source={source} className="font-semibold text-primary-700 underline">Monday Trucker Feed</a>, first week free, then $129 every 4 weeks.</>
                    ) : (
                        <>Or start now: <a href={MANAGED_PAY_URL} data-offer="managed" data-source={source} className="font-semibold text-primary-700 underline">Dooza Managed</a>, an admin assistant checked by a real person, first 7 days free, then $200/month. <a href="/pricing" className="underline">See pricing</a>.</>
                    )}
                </p>
            </div>
        </section>
    );
}
