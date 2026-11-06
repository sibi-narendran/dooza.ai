// /software-factory: Dooza Software Factory, custom software built with AI agents. Separate page requested by Sibi 2026-11-05.
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import SoftwareFactoryBox from '@/components/SoftwareFactoryBox';
import { SITE_URL } from '@/lib/site';

const PATH = '/software-factory';
const TITLE = 'Custom Software, Way Cheaper and Way Faster | Dooza';
const DESCRIPTION = 'Custom software, way cheaper and way faster than a traditional build: Dooza Software Factory builds it with AI agents and a human engineer. Get a free working demo of your app before you pay. Maintained by Dooza.';
const BOOK = '/book?utm_source=website&utm_medium=page&utm_content=software_factory';
const A = 'font-semibold text-primary-700 underline';

const faqItems = [
    {
        question: 'What is Dooza Software Factory?',
        answer: 'Dooza Software Factory builds custom software for your business with AI agents, with a human engineer in the loop. The app is highly customised to how your business works, and Dooza maintains it after launch.',
    },
    {
        question: 'How can custom software be so much cheaper and faster than a traditional build?',
        answer: 'AI agents do the bulk of the build and an engineer reviews it. You pay for far fewer engineer hours than a traditional custom development project, and you get a working demo and your app far sooner.',
    },
    {
        question: 'Is it secure? Do you offer SOC 2?',
        answer: 'Built secure. SOC 2 available if you need it. A human engineer checks the AI agents\' work, and your data stays yours.',
    },
    {
        question: 'Do I get a demo before I pay?',
        answer: 'Yes. Get a free working demo of your app before you pay.',
    },
    {
        question: 'Who maintains the software after launch?',
        answer: 'We do. Dooza maintains your app after launch, so you do not need your own developers on call.',
    },
    {
        question: 'Can I talk to a person?',
        answer: 'Yes. Book a call with Sibi, Dooza\'s founder, at dooza.ai/book.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Software Factory',
        serviceType: 'Custom software development with AI agents and a human engineer in the loop',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Dooza Software Factory', item: `${SITE_URL}${PATH}` },
        ],
    },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website' },
    twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const BUILDS = [
    { name: 'Internal tools', text: 'The admin screens and trackers your team runs the business on.' },
    { name: 'Customer portals', text: 'A place where your customers log in, see their status and send requests.' },
    { name: 'Booking and quoting apps', text: 'Let people book a time or get a quote without a phone call.' },
    { name: 'Dashboards', text: 'One view of the numbers that matter, pulled from your own data.' },
    { name: 'Automations around your tools', text: 'Software that connects the tools you already use and does the repeat work.' },
];

const STEPS = [
    { name: 'Tell us the app', text: 'Describe the app you want in the box above.' },
    { name: 'We scope it with you', text: 'Our team will email and call you to scope it.' },
    { name: 'Get a free working demo', text: 'You get a free working demo of your app before you pay.' },
    { name: 'We build, launch and maintain it', text: 'AI agents do the bulk of the work and a human engineer checks it. We launch the app and keep it running.' },
];

export default function SoftwareFactoryPage() {
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
                            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Dooza Software Factory</p>
                            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">Custom software. Way cheaper. Way faster.</h1>
                            <p className="mt-6 text-lg leading-relaxed text-slate-700">
                                We build your app with AI agents and a human engineer in the loop. It is highly customised to how your business works, costs far less than traditional custom development and ships far sooner. We maintain it for you after launch.
                            </p>
                            <p className="mt-4 font-semibold text-slate-900">Get a free working demo of your app before you pay.</p>
                            <div className="mt-6">
                                <SoftwareFactoryBox placement="sf-hero" />
                            </div>
                            <p className="mt-4 text-slate-700">
                                Prefer to talk it through? <a href={BOOK} data-source="software_factory-hero" className={A}>Book a call with Sibi</a>.
                            </p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">What we build</h2>
                            <p className="mt-3 text-slate-700">Examples of the software we can build for you:</p>
                            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                                {BUILDS.map((b) => (
                                    <li key={b.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                                        <h3 className="font-serif text-lg font-bold text-slate-900">{b.name}</h3>
                                        <p className="mt-1 text-slate-700">{b.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">How it works</h2>
                            <ol className="mt-4 space-y-4">
                                {STEPS.map((s, i) => (
                                    <li key={s.name} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 font-bold text-white">{i + 1}</span>
                                        <div>
                                            <h3 className="font-serif text-lg font-bold text-slate-900">{s.name}</h3>
                                            <p className="mt-1 text-slate-700">{s.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                                <h2 className="font-serif text-3xl font-bold text-slate-900">Built secure</h2>
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                    <li>Humans in the loop: an engineer checks the AI agents&rsquo; work.</li>
                                    <li>Your data stays yours.</li>
                                    <li>SOC 2 available if you need it.</li>
                                </ul>
                                <p className="mt-4 font-semibold text-slate-900">Built secure. SOC 2 available if you need it.</p>
                            </div>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">Why it is way cheaper and way faster</h2>
                            <p className="mt-3 text-lg leading-relaxed text-slate-700">
                                AI agents do the bulk of the build and an engineer reviews it. You pay for far fewer engineer hours than a traditional custom build, and you still get software made for the way your business works. Because agents write and test the code while the engineer reviews it, you see a working demo first and get your app far sooner than a traditional project.
                            </p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-3xl font-bold text-slate-900">Questions</h2>
                            <div className="mt-4">
                                <FAQAccordion items={faqItems} />
                            </div>
                        </div>
                    </section>

                    <section className="pb-20">
                        <div className="mx-auto max-w-3xl px-4">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                                <h2 className="font-serif text-3xl font-bold text-slate-900">Tell us the app you want</h2>
                                <p className="mt-3 font-semibold text-slate-900">Get a free working demo of your app before you pay.</p>
                                <div className="mt-5">
                                    <SoftwareFactoryBox placement="sf-bottom" />
                                </div>
                                <p className="mt-4 text-slate-700">
                                    Or <a href={BOOK} data-source="software_factory-bottom" className={A}>Book a call with Sibi</a>, Dooza&rsquo;s founder.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
