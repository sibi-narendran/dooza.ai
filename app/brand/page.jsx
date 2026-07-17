import Image from 'next/image';
import Link from 'next/link';
import { Download, Mail, Globe, MapPin, Building2 } from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';

const pageUrl = `${SITE_URL}/brand`;

export const metadata = {
    title: 'Brand Resources — Logos, Colors & Company Details',
    description: 'Official Dooza logos, brand colors, boilerplate copy, and company details for proposals, decks, press, and partner materials.',
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Dooza Brand Resources',
        description: 'Official Dooza logos, brand colors, boilerplate copy, and company details.',
        url: pageUrl,
        type: 'website',
        images: [{ url: `${SITE_URL}/brand/dooza-wordmark-light.png`, width: 949, height: 352, alt: 'Dooza wordmark' }],
    },
};

const logos = [
    {
        name: 'Icon',
        file: '/brand/dooza-icon.png',
        desc: 'The Dooza mark on its own. For favicons, avatars, and tight spaces.',
        bg: 'bg-white',
        img: { src: '/brand/dooza-icon.png', width: 427, height: 411, className: 'h-24 w-auto' },
    },
    {
        name: 'Wordmark — light backgrounds',
        file: '/brand/dooza-wordmark-light.png',
        desc: 'The full lockup for documents, proposals, and slides on white.',
        bg: 'bg-white',
        img: { src: '/brand/dooza-wordmark-light.png', width: 949, height: 352, className: 'h-20 w-auto' },
    },
    {
        name: 'Wordmark — dark backgrounds',
        file: '/brand/dooza-wordmark-dark.png',
        desc: 'The full lockup for dark slides and dark UI.',
        bg: 'bg-slate-950',
        img: { src: '/brand/dooza-wordmark-dark.png', width: 949, height: 352, className: 'h-20 w-auto' },
    },
];

const colors = [
    { name: 'Dooza Teal', hex: '#0F766E', note: 'Primary brand color', swatch: 'bg-primary-700', light: false },
    { name: 'Teal Bright', hex: '#0D9488', note: 'Accents and highlights', swatch: 'bg-primary-600', light: false },
    { name: 'Ink', hex: '#0F172A', note: 'Headlines and body text', swatch: 'bg-slate-900', light: false },
    { name: 'Warm White', hex: '#FAF9F7', note: 'Page backgrounds', swatch: 'bg-warm border border-slate-200', light: true },
    { name: 'Signal Amber', hex: '#F59E0B', note: 'Urgency and attention', swatch: 'bg-amber-500', light: false },
];

const boilerplate = {
    oneLiner: 'Dooza provides forward deployed AI engineers who set up AI employees for small businesses — free to start, pay only to keep it.',
    paragraph: 'Dooza is a forward deployed AI engineering company. A Dooza engineer embeds with your business, finds the work that repeats, and deploys AI that handles it — built on Dooza’s own platform: Dooza Workforce (AI employees for email, social, SEO, leads, and calls) and Dooza Agents (approvals, traces, and tests that keep automation under control). Setup is free; businesses pay only to keep what works. Dooza.ai is a product of Adam Laboratory Inc., a Delaware C-Corporation.',
};

function SectionTitle({ children, sub }) {
    return (
        <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">{children}</h2>
            {sub && <p className="mt-2 max-w-2xl text-slate-600">{sub}</p>}
        </div>
    );
}

export default function BrandPage() {
    return (
        <BookingModalProvider>
            <Navbar ctaSource="brand_nav" />
            <main id="main-content" className="bg-warm text-slate-900 font-sans">

                <section className="px-4 pt-32 pb-12 md:px-8 md:pt-40">
                    <div className="mx-auto max-w-5xl">
                        <span className="section-label mb-4 block">Brand resources</span>
                        <h1 className="mb-5 font-serif text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                            Everything you need to present Dooza
                        </h1>
                        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                            Logos, colors, boilerplate copy, and company details — for proposals, decks, invoices, press, and partner materials. All assets on this page are approved for use as-is.
                        </p>
                    </div>
                </section>

                {/* LOGOS */}
                <section className="px-4 py-12 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <SectionTitle sub="Two logo types: the icon and the full wordmark. Don't stretch, recolor, rotate, or add effects.">
                            Logos
                        </SectionTitle>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {logos.map((logo) => (
                                <div key={logo.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                                    <div className={`flex h-44 items-center justify-center ${logo.bg} p-6`}>
                                        <Image
                                            src={logo.img.src}
                                            alt={`Dooza ${logo.name}`}
                                            width={logo.img.width}
                                            height={logo.img.height}
                                            className={logo.img.className}
                                        />
                                    </div>
                                    <div className="border-t border-slate-100 p-5">
                                        <h3 className="font-sans text-sm font-extrabold text-slate-950">{logo.name}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{logo.desc}</p>
                                        <a
                                            href={logo.file}
                                            download
                                            className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-bold text-primary-800 transition hover:border-primary-300 hover:bg-primary-100"
                                        >
                                            <Download className="h-4 w-4" /> Download PNG
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COLORS */}
                <section className="px-4 py-12 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <SectionTitle sub="Use teal for actions and emphasis, ink for text, warm white for backgrounds. Amber is reserved for urgency.">
                            Colors
                        </SectionTitle>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                            {colors.map((c) => (
                                <div key={c.hex} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                    <div className={`h-20 ${c.swatch}`} />
                                    <div className="p-3">
                                        <div className="text-sm font-extrabold text-slate-950">{c.name}</div>
                                        <div className="font-mono text-xs font-semibold text-primary-700">{c.hex}</div>
                                        <div className="mt-1 text-xs text-slate-500">{c.note}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BOILERPLATE */}
                <section className="px-4 py-12 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <SectionTitle sub="Copy-paste descriptions for proposals and press. Please use them verbatim where possible.">
                            Boilerplate
                        </SectionTitle>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-2 text-xs font-extrabold uppercase tracking-[2px] text-primary-700">One-liner</div>
                                <p className="select-all text-lg leading-relaxed text-slate-800">{boilerplate.oneLiner}</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-2 text-xs font-extrabold uppercase tracking-[2px] text-primary-700">About Dooza</div>
                                <p className="select-all leading-relaxed text-slate-800">{boilerplate.paragraph}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRODUCTS */}
                <section className="px-4 py-12 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <SectionTitle sub="Always written as two words with Dooza first.">
                            Product names
                        </SectionTitle>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-sans text-lg font-extrabold text-slate-950">Dooza Workforce</h3>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600">AI employees for email, social, SEO, leads, and calls. From $49/mo.</p>
                                <Link href="/workforce" className="mt-3 inline-block text-sm font-bold text-primary-700 hover:text-primary-900">dooza.ai/workforce →</Link>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="font-sans text-lg font-extrabold text-slate-950">Dooza Agents</h3>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600">Approvals and logs that keep every automation under control.</p>
                                <Link href="/agents" className="mt-3 inline-block text-sm font-bold text-primary-700 hover:text-primary-900">dooza.ai/workflow →</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPANY DETAILS */}
                <section className="px-4 py-12 pb-24 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <SectionTitle sub="For contracts, invoices, and legal blocks in proposals.">
                            Company details
                        </SectionTitle>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.2fr_0.8fr]">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <dl className="grid gap-5">
                                    <div className="flex gap-3">
                                        <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <div>
                                            <dt className="text-xs font-extrabold uppercase tracking-[2px] text-slate-500">Legal entity</dt>
                                            <dd className="select-all text-slate-800">Adam Laboratory Inc., a Delaware C-Corporation<br /><span className="text-sm text-slate-500">Dooza.ai is a product of Adam Laboratory Inc.</span></dd>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <div>
                                            <dt className="text-xs font-extrabold uppercase tracking-[2px] text-slate-500">Registered address</dt>
                                            <dd className="select-all text-slate-800">131 Continental Dr, Suite 305<br />Newark, DE 19713, United States</dd>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <div>
                                            <dt className="text-xs font-extrabold uppercase tracking-[2px] text-slate-500">Contact</dt>
                                            <dd className="select-all text-slate-800">support@dooza.ai</dd>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Globe className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                        <div>
                                            <dt className="text-xs font-extrabold uppercase tracking-[2px] text-slate-500">Web</dt>
                                            <dd className="text-slate-800">
                                                www.dooza.ai · <a href="https://twitter.com/sibinarendran" className="text-primary-700 hover:text-primary-900">Twitter/X</a> · <a href="https://www.linkedin.com/company/110144933/" className="text-primary-700 hover:text-primary-900">LinkedIn</a>
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                                <Image
                                    src="/founder-sibi.jpeg"
                                    alt="Sibi Narendran, founder of Dooza"
                                    width={96}
                                    height={96}
                                    className="mx-auto mb-4 rounded-full border-2 border-white shadow-md"
                                />
                                <h3 className="font-sans text-lg font-extrabold text-slate-950">Sibi Narendran</h3>
                                <p className="text-sm text-slate-600">Founder</p>
                                <a
                                    href="/founder-sibi.jpeg"
                                    download="sibi-narendran.jpeg"
                                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-bold text-primary-800 transition hover:border-primary-300 hover:bg-primary-100"
                                >
                                    <Download className="h-4 w-4" /> Founder photo
                                </a>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-slate-500">
                            Need something that isn't here — vector files, screenshots, a quote? Email <a href="mailto:support@dooza.ai" className="font-semibold text-primary-700">support@dooza.ai</a> and we'll send it over.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
