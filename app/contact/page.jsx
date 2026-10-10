import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_CALL_DISPLAY, CONTACT_CALL_E164, CONTACT_EMAIL } from '@/lib/contact';

export const metadata = {
    title: 'Contact Dooza: Call, Text or Email',
    description: `Talk to Dooza: call ${CONTACT_CALL_DISPLAY}, text ${CONTACT_PHONE_DISPLAY}, email ${CONTACT_EMAIL}, or book a free 30-minute pilot call.`,
    alternates: { canonical: `${SITE_URL}/contact` },
};

const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}/contact`,
    mainEntity: {
        '@type': 'Organization',
        name: 'Dooza',
        legalName: 'Adam Laboratory Inc.',
        url: SITE_URL,
        email: CONTACT_EMAIL,
        telephone: '+1-213-719-2533',
        contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', telephone: '+1-213-719-2533', email: CONTACT_EMAIL, availableLanguage: ['English'] }],
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />
            <main className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
                <h1 className="text-4xl font-bold tracking-tight">Contact Dooza</h1>
                <p className="mt-4 text-lg text-slate-600">Talk to a person about your business. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.</p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    <a href={`tel:${CONTACT_CALL_E164}`} className="rounded-2xl border border-slate-200 p-6 hover:border-primary-300">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Call</p>
                        <p className="mt-2 text-lg font-bold">{CONTACT_CALL_DISPLAY}</p>
                        <p className="mt-1 text-sm text-slate-500">Answered 24/7 by Maya, our AI receptionist</p>
                    </a>
                    <a href={`sms:${CONTACT_PHONE_E164}`} className="rounded-2xl border border-slate-200 p-6 hover:border-primary-300">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Text</p>
                        <p className="mt-2 text-lg font-bold">{CONTACT_PHONE_DISPLAY}</p>
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-2xl border border-slate-200 p-6 hover:border-primary-300">
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Email</p>
                        <p className="mt-2 text-lg font-bold break-all">{CONTACT_EMAIL}</p>
                    </a>
                </div>
                <div className="mt-10 rounded-2xl bg-slate-50 p-6">
                    <h2 className="text-xl font-bold">Prefer a scheduled call?</h2>
                    <p className="mt-2 text-slate-600">Book a free 30-minute call: a Dooza engineer looks at your workflow and scopes a pilot.</p>
                    <Link href="/book" className="mt-4 inline-block rounded-full bg-primary-600 px-6 py-3 font-bold text-white hover:bg-primary-700">Book a free pilot call</Link>
                </div>
                <p className="mt-10 text-sm text-slate-500">Press, guest posts or comparison corrections: <a href="mailto:achilles@dooza.org" className="underline">achilles@dooza.org</a>. Dooza is a product of Adam Laboratory Inc., a Delaware corporation.</p>
            </main>
            <Footer />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
        </div>
    );
}
