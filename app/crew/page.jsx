// /crew: Dooza Crew, the hosted AI agent team (built by @daedalus, Sibi 2026-10-22). Copy and claim limits from
// Daedalus's spec (/home/daedalus/work/drafts/product_page_spec.md). DRAFT on branch crew-draft: ship only on Daedalus's
// "live" (needs Sibi's yes on live Stripe), and then drop the noindex below and add /crew to app/sitemap.js.
// Do not claim: SOC2/compliance, unlimited usage, model names, uptime, user counts; no monthly price until Sibi sets one.
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const PATH = '/crew';
const TITLE = 'Dooza Crew: Your Own AI Team on Its Own Computer';
const DESCRIPTION = 'Sign up and get a master agent that works for you in a team chat. Ask it to create more agents; each gets a real browser and files. $50 trial, fully refundable within 7 days.';
const SIGNUP = 'https://crew.dooza.ai/?utm_source=website&utm_medium=page&utm_content=crew';

const faqItems = [
    {
        question: 'What is Dooza Crew?',
        answer: 'A hosted AI agent team. You sign up and get a master agent that works for you in a private team chat. Ask it to create more agents; each one gets a real browser and files on your own isolated computer.',
    },
    {
        question: 'How much does Dooza Crew cost?',
        answer: 'You start with a $50 trial, fully refundable within 7 days of paying, no questions asked.',
    },
    {
        question: 'How do I get a refund?',
        answer: 'Email support within 7 days of paying and you get a full refund.',
    },
    {
        question: 'Can anyone sign up?',
        answer: 'Seats are limited. When they are full, you can join the waitlist.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Dooza Crew',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        brand: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '50', priceCurrency: 'USD', url: SIGNUP, description: 'Trial, fully refundable within 7 days.' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    robots: { index: false, follow: true }, // DRAFT: remove on live
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website' },
    twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

export default function CrewPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-warm text-slate-900 font-sans">
                <Navbar />
                <main>
                    <section className="pt-32 pb-10 md:pt-40">
                        <div className="mx-auto max-w-3xl px-4">
                            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">Your own AI team, on its own computer.</h1>
                            <p className="mt-6 text-lg leading-relaxed text-slate-700">
                                <strong>Sign up and get a master agent that works for you in a team chat. Ask it to create more agents. Each gets a real browser and files.</strong>
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a href={SIGNUP} data-offer="crew" data-source="crew-hero" className="rounded-full bg-primary-700 px-7 py-3 text-center font-bold text-white hover:bg-primary-800">Start your $50 trial</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">Fully refundable within 7 days, no questions. Seats are limited; waitlist when full.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">What you get</h2>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                <li>A master agent on day one; create as many agents as you need.</li>
                                <li>Your own isolated computer and browser: nobody else’s agents touch your files.</li>
                                <li>Talk to your team in a private chat app (web and phone).</li>
                            </ul>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">Price</h2>
                            <p className="mt-4 text-slate-700">A $50 trial, fully refundable within 7 days of paying, no questions asked.</p>
                            <a href={SIGNUP} data-offer="crew" data-source="crew-price" className="mt-6 inline-block rounded-full bg-primary-700 px-7 py-3 text-center font-bold text-white hover:bg-primary-800">Start your $50 trial</a>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="mb-6 font-serif text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
