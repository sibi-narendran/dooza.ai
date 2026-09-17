import { CalendarClock, CreditCard, Timer } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AdsFooter, AdsHeader, isAdsVisit } from '@/components/ai-receptionist/AdsChrome';
import FounderNote from '@/components/ai-receptionist/FounderNote';
import ReceptionistBooking from '@/components/ai-receptionist/ReceptionistBooking';
import TextPilotLink from '@/components/ai-receptionist/TextPilotLink';
import { SITE_URL } from '@/lib/site';
import { CALLBACK_NUMBER_DISPLAY, PILOT_PROMISE, getReceptionistVariant } from '@/lib/aiReceptionistData';

const pageUrl = `${SITE_URL}/ai-receptionist/book`;

export const metadata = {
    title: { absolute: 'Book Your Free AI Receptionist Pilot | Dooza' },
    description:
        'Book a 15-minute meeting. Your AI receptionist is set up and live on your line within 48 hours, then you run it free for two weeks. Only pay if you find it useful.',
    alternates: { canonical: pageUrl },
    robots: { index: false, follow: true },
    openGraph: {
        title: 'Book Your Free AI Receptionist Pilot | Dooza',
        description: 'A 15-minute meeting, then a free two-week pilot on your real calls. Only pay if you find it useful.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
    },
};

const PROMISES = [
    { icon: Timer, text: '15-minute meeting to collect your questions, hours, and calendar.' },
    { icon: CalendarClock, text: 'Set up and live on your line within 48 hours. Works with any phone.' },
    { icon: CreditCard, text: 'No card. Two weeks free. Only pay if you find it useful.' },
];

export default function AiReceptionistBookPage({ searchParams }) {
    const variant = getReceptionistVariant(searchParams?.v);
    const adsMode = isAdsVisit(searchParams);

    return (
        <>
            {adsMode ? <AdsHeader /> : <Navbar variant="light" />}

            <main id="main-content" className="bg-slate-50 text-slate-900">
                <section className={`px-4 pb-20 sm:px-6 ${adsMode ? 'pt-10 sm:pt-14' : 'pt-28 sm:pt-32'}`}>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Free two-week pilot</p>
                        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                            Book a meeting here.
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                            {PILOT_PROMISE}
                        </p>
                        <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
                            {PROMISES.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700">
                                    <Icon className="h-5 w-5 shrink-0 text-primary-700" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mx-auto mt-8 max-w-3xl">
                        <FounderNote lead="You will meet" />
                    </div>

                    <div className="mx-auto mt-6 max-w-3xl">
                        <ReceptionistBooking variantKey={variant.key} callbackNumber={CALLBACK_NUMBER_DISPLAY} />
                    </div>

                    <div className="mx-auto mt-6 max-w-3xl text-center">
                        <TextPilotLink source="booking_page" />
                    </div>
                </section>
            </main>

            {adsMode ? <AdsFooter /> : <Footer variant="light" />}
        </>
    );
}
