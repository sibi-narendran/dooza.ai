import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AdsFooter, AdsHeader, isAdsVisit } from '@/components/ai-receptionist/AdsChrome';
import { SITE_URL } from '@/lib/site';
import { crewSignupUrl } from '@/lib/crewUrl';
import { PILOT_PROMISE } from '@/lib/aiReceptionistData';

const pageUrl = `${SITE_URL}/ai-receptionist/book`;

export const metadata = {
    title: { absolute: 'Start Dooza Crew: Phone Calls Included | Dooza' },
    description:
        'Phone calls are part of Dooza Crew. $49 per organization per month after a 7-day free trial (no card needed).',
    alternates: { canonical: pageUrl },
    robots: { index: false, follow: true },
    openGraph: {
        title: 'Start Dooza Crew: Phone Calls Included | Dooza',
        description: 'Crew agents take phone calls too, included in your Crew plan.',
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
    },
};

export default async function AiReceptionistBookPage(props) {
    const searchParams = await props.searchParams;
    const adsMode = isAdsVisit(searchParams);

    return (
        <>
            {adsMode ? <AdsHeader /> : <Navbar variant="light" />}

            <main id="main-content" className="bg-slate-50 text-slate-900">
                <section className={`px-4 pb-20 sm:px-6 ${adsMode ? 'pt-10 sm:pt-14' : 'pt-28 sm:pt-32'}`}>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Dooza Crew</p>
                        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                            Phone calls are part of Dooza Crew.
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                            Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.
                        </p>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">{PILOT_PROMISE}</p>
                        <div className="mt-8">
                            <a
                                href={crewSignupUrl('ai-receptionist-book-cta')}
                                data-offer="crew"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-800 sm:w-auto"
                            >
                                Try Dooza Crew free for 7 days
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {adsMode ? <AdsFooter /> : <Footer variant="light" />}
        </>
    );
}
