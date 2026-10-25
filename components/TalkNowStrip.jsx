import { Phone, MessageSquare, Mail, Calendar } from 'lucide-react';
import { MANAGED_PAY_URL, supportPay, ICP1_A_PAY_URL, NOTARY_RENEWAL_PAY_URL, NEWBIZ_CT_PAY_URL, CERT_PACK_PAY_URL, LAW_WARN_CA_PAY_URL, tagPay } from '@/lib/offers';
import { crewSignupUrl } from '@/lib/crewUrl';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_CALL_DISPLAY, CONTACT_CALL_E164, CONTACT_EMAIL, REPLY_EMAIL } from '@/lib/contact';

// "Talk to Dooza now": every way to reach us in one block (Sibi 2026-10-14: "I need people to ask ChatGPT and directly contact us").
// Clicks on tel:/sms:/mailto: are tracked by ContactClickTracker (app/layout.jsx).
// offer: 'crew' by default (Sibi 10-22: every CTA → Crew; was 'managed' until 2026-10-23); 'crew' on general blog posts (homepage = Dooza Crew since Sibi 10-22 15:56; 2026-10-23 evolve); ICP pages pass their own offer (Sibi 10-15: never mix ICP offers and prices with common pages).
export default function TalkNowStrip({ source = 'unknown', offer = 'crew' }) {
    // Reply-stage offers: email lands in Close, where Orion answers (2026-10-16).
    const email = ['notary-renewal', 'cpa-1099', 'newbiz-ct', 'law-warn-ca'].includes(offer) ? REPLY_EMAIL : CONTACT_EMAIL;
    const link = 'inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 font-semibold text-primary-800 hover:border-primary-400 hover:bg-primary-50';
    return (
        <section aria-label="Contact Dooza" data-talk-now={source} className="mx-auto my-10 max-w-4xl px-4">
            <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-slate-900">Talk to Dooza now</h2>
                <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                    {offer === 'support' ? <>Dooza AI customer support: AI drafts every customer reply, a Dooza team checks it, and you approve before anything sends.</> : offer === 'receptionist' ? <>Dooza Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.</> : <>Dooza builds AI products and services for small businesses. Custom Dooza agents start with a refundable pilot: 100% refund within 14 days.</>}
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
                    <a href={`tel:${CONTACT_CALL_E164}`} className={link}><Phone className="h-4 w-4" aria-hidden="true" />Call {CONTACT_CALL_DISPLAY} (24/7)</a>
                    <a href={`sms:${CONTACT_PHONE_E164}`} className={link}><MessageSquare className="h-4 w-4" aria-hidden="true" />Text {CONTACT_PHONE_DISPLAY}</a>
                    <a href={`mailto:${email}`} className={link}><Mail className="h-4 w-4" aria-hidden="true" />{email}</a>
                    <a href={`/book?utm_source=website&utm_medium=talk_now&utm_content=${source}`} className={link}><Calendar className="h-4 w-4" aria-hidden="true" />Book a free 30-min call</a>
                </div>
                <p className="mt-5 text-sm text-slate-600">
                    {offer === 'receptionist' ? (
                        <>Or start now: <a href={crewSignupUrl(`strip-${source}`)} data-offer="crew" data-source={source} className="font-semibold text-primary-700 underline">Dooza Crew</a>, $49 per organization per month after a 7-day free trial (card required).</>
                    ) : offer === 'support' ? (
                        <>Or start now: <a href={supportPay(source)} data-offer="support" data-source={source} className="font-semibold text-primary-700 underline">Dooza AI customer support</a>, 14-day free trial (card at signup), then $300/month for up to 250 customer messages. <a href="/customer-support-automation-agency" className="underline">How it works</a>.</>
                    ) : offer === 'notary-renewal' ? (
                        <>Or start now: email your name and commission expiry date to <a href={`mailto:${email}?subject=Free%20notary%20renewal`} data-offer="notary-renewal" data-source={source} className="font-semibold text-primary-700 underline">{email}</a>. First renewal free, then <a href={tagPay(NOTARY_RENEWAL_PAY_URL, source)} data-offer="notary-renewal" data-source={source} className="underline">$20 per renewal</a>.</>
                    ) : offer === 'cpa-1099' ? (
                        <>Or start now: email one client&rsquo;s two QuickBooks reports to <a href={`mailto:${email}?subject=Free%201099%20client`} data-offer="cpa-1099" data-source={source} className="font-semibold text-primary-700 underline">{email}</a>. First client free, then $99 per client.</>
                    ) : offer === 'newbiz-ct' ? (
                        <>Or start now: the <a href={tagPay(NEWBIZ_CT_PAY_URL, source)} data-offer="newbiz-ct" data-source={source} className="font-semibold text-primary-700 underline">weekly Connecticut new-business list</a>: 5 sample rows, then $129 every 4 weeks.</>
                    ) : offer === 'law-warn-ca' ? (
                        <>Or start now: the <a href={tagPay(LAW_WARN_CA_PAY_URL, source)} data-offer="law-warn-ca" data-source={source} className="font-semibold text-primary-700 underline">weekly California WARN sheet</a>, $299 a month, paid first.</>
                    ) : offer === 'cert-agencies' ? (
                        <>Or start now: a <a href={tagPay(CERT_PACK_PAY_URL, source)} data-offer="cert-agencies" data-source={source} className="font-semibold text-primary-700 underline">pack of 10 certificates for $50</a>.</>
                    ) : offer === 'crew' ? (
                        <>Or start now: <a href={crewSignupUrl(`strip-${source}`)} data-offer="crew" data-source={source} className="font-semibold text-primary-700 underline">Dooza Crew</a>, AI employees you chat with from web or phone, watching every step live in chat: free for 7 days, then $49 a month for your whole organization (unlimited users and agents, no per-seat fee) with AI usage included and a hard spending cap. Want it done for you instead? <a href={tagPay(MANAGED_PAY_URL, source)} data-offer="managed" data-source={source} className="underline">Dooza Managed</a>, $200/month.</>
                    ) : offer === 'trucker-feed' ? (
                        <>Or start now: the <a href={`${ICP1_A_PAY_URL}?client_reference_id=feed-talknow`} data-offer="trucker-feed" data-source={source} className="font-semibold text-primary-700 underline">Monday Trucker Feed</a>, $129 every 4 weeks, paid first.</>
                    ) : (
                        <>Or start now: <a href={tagPay(MANAGED_PAY_URL, source)} data-offer="managed" data-source={source} className="font-semibold text-primary-700 underline">Dooza Managed</a>, an admin assistant checked by a real person. Start free for 7 days. Card now, first charge $200 on day 8; cancel before then and pay nothing. Within 1 business day we email you how to send your first task; each task is done by the next business day. <a href="/pricing" className="underline">See pricing</a>.</>
                    )}
                </p>
            </div>
        </section>
    );
}
