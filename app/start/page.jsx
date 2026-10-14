// /start: self-serve checkout for people who already got our free sample (Orion's email replies link here).
// Terms ONLY from /home/odysseus/work/OFFERS.md (L1 Feed, L2 Managed). noindex: a landing page for replies, /pricing is the indexed page.
import Navbar from '@/components/Navbar';
import TalkNowStrip from '@/components/TalkNowStrip';
import OfferCards from '@/components/OfferCards';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Start Today Without a Call | Dooza',
    description: 'Start the Monday Trucker Feed ($129 every 4 weeks, first week free) or Dooza Managed ($200/month, first 7 days free) by card, no call needed.',
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
                        <OfferCards source="start" />
                    </div>
                    <div className="mx-auto mt-8 max-w-3xl px-4 text-center text-slate-600">
                        <p>Need two states on the Trucker Feed? It is $199 every 4 weeks: reply to our email and we will set it up.</p>
                    </div>
                </section>
                <TalkNowStrip source="start" />
            </main>
            <Footer />
        </div>
    );
}
