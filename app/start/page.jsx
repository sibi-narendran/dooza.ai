// /start: self-serve checkout for people who already got our free sample (Orion's email replies link here).
// ICP page (Sibi 10-15: never mix ICP offers with common pages/pricing): Trucker Feed only. Terms ONLY from /home/odysseus/work/OFFERS.md (L1 Feed, L2 Managed). noindex: a landing page for replies, /pricing is the indexed page.
import Navbar from '@/components/Navbar';
import TalkNowStrip from '@/components/TalkNowStrip';
import OfferCards from '@/components/OfferCards';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Start Today Without a Call',
    description: 'Start the Monday Trucker Feed by card, no call needed: first week free, then $129 every 4 weeks.',
    alternates: { canonical: 'https://www.dooza.ai/start' },
    robots: { index: false, follow: true },
};

export default function StartPage() {
    return (
        <div className="min-h-screen bg-warm text-slate-900 font-sans">
            <Navbar />
            <main>
                <section className="pt-32 pb-12 md:pt-40">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h1 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">Start today, no call needed</h1>
                        <p className="mt-5 text-lg text-slate-600">
                            Liked the free sample? Start by card below. The first week is free and you can cancel anytime.
                        </p>
                    </div>
                    <div className="mt-10 px-4">
                        <OfferCards source="start" only="trucker-feed" />
                    </div>
                    <div className="mx-auto mt-8 max-w-3xl px-4 text-center text-slate-600">
                        <p>Need two states on the Trucker Feed? It is $199 every 4 weeks: reply to our email and we will set it up.</p>
                    </div>
                </section>
                <TalkNowStrip source="start" offer="trucker-feed" />
            </main>
            <Footer />
        </div>
    );
}
