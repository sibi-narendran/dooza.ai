import Image from 'next/image';
import Link from 'next/link';
import { Sora } from 'next/font/google';
import { ArrowRight, Check } from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import GuideCta from './GuideCta';
import { AUTHOR, OFFER, SUPPORT_PAGE, buildGuideSchemas } from '@/lib/supportGuides/shared';

const sora = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600'], display: 'swap' });

// Long-form body copy is authored as HTML in lib/supportGuides/*.js.
const PROSE = [
    'prose prose-slate max-w-none',
    'prose-headings:font-semibold prose-headings:text-[#1a1a1a] prose-headings:tracking-tight',
    'prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-0 prose-h3:text-xl',
    'prose-p:leading-relaxed prose-li:my-1',
    'prose-a:text-[#7C1B5A] prose-a:font-medium prose-a:underline-offset-2',
    'prose-strong:text-[#1a1a1a]',
    'prose-table:text-sm prose-th:bg-[#7C1B5A]/5 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-td:align-top',
].join(' ');

function formatDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function OfferCard({ source }) {
    return (
        <div className="rounded-2xl bg-[#7C1B5A] p-6 text-white md:p-8">
            <p className="text-xs uppercase tracking-[0.5px] text-[#E3F770]">Dooza AI customer support</p>
            <p className="mt-3 text-xl font-medium leading-snug md:text-2xl">AI answers first, a Dooza specialist checks it, and you approve before anything sends.</p>
            <ul className="mt-5 space-y-2 text-sm text-white/85">
                {OFFER.points.map((point) => (
                    <li key={point} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E3F770]" />{point}</li>
                ))}
            </ul>
            <p className="mt-5 text-sm text-white/75">{OFFER.line}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <GuideCta source={source} tone="lime">{OFFER.cta}</GuideCta>
                <Link href={SUPPORT_PAGE} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-base text-white hover:bg-white/10">
                    {OFFER.secondary} <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}

export default function SupportGuidePage({ page }) {
    const schemas = buildGuideSchemas(page);
    const source = `guide_${page.slug}`;
    const crumbs = [
        ...(page.breadcrumbParent ? [page.breadcrumbParent] : []),
        { label: page.breadcrumb },
    ];

    return (
        <BookingModalProvider>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <Navbar showLogin={false} ctaType="demo" ctaSource={`${source}_nav`} ctaLabel={OFFER.ctaShort} />
            <main id="main-content" className={`${sora.className} sg-root bg-white pt-[68px] text-[#1a1a1a]`}>
                <style>{'.sg-root :is(h1,h2,h3,h4), .sg-root .font-serif { font-family: inherit; }'}</style>
                {/* Hero */}
                <section className="border-b border-[#7C1B5A]/10 bg-[#FBF7F9]">
                    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6 md:py-16">
                        <div>
                            <Breadcrumbs items={crumbs} />
                            <p className="inline-block rounded-lg border border-[#9E4418] px-3 py-1.5 text-xs uppercase tracking-[0.5px] text-[#9E4418]">{page.eyebrow}</p>
                            <h1 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl">{page.h1}</h1>
                            <div className="mt-5 text-lg leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: page.lede }} />
                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <GuideCta source={`${source}_hero`}>{OFFER.cta}</GuideCta>
                                <a href="#guide" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#7C1B5A]/30 px-6 py-3 text-base text-[#7C1B5A] hover:bg-[#7C1B5A]/5">
                                    Read the guide <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                            <p className="mt-6 text-sm text-slate-500">
                                By <Link href="/about" className="underline underline-offset-2">{AUTHOR.name}</Link>, {AUTHOR.role} · Updated <time dateTime={page.updated}>{formatDate(page.updated)}</time>
                            </p>
                        </div>
                        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl">
                            <Image src={page.hero.src} alt={page.hero.alt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* Quick answer */}
                <section className="mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-14">
                    <div className="rounded-2xl border border-[#7C1B5A]/15 bg-white p-6 shadow-sm md:p-8">
                        <h2 className="text-lg font-semibold text-[#7C1B5A]">{page.quickAnswer.title}</h2>
                        <ul className="mt-4 space-y-3">
                            {page.quickAnswer.bullets.map((b) => (
                                <li key={b} className="flex gap-3 leading-relaxed text-slate-700">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9E4418]" />
                                    <span dangerouslySetInnerHTML={{ __html: b }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Body + TOC */}
                <div id="guide" className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:px-6 md:py-14 lg:grid-cols-[220px_1fr]">
                    <aside className="hidden lg:block">
                        <nav aria-label="On this page" className="sticky top-24">
                            <p className="text-xs uppercase tracking-[0.5px] text-slate-500">On this page</p>
                            <ol className="mt-3 space-y-2 border-l border-slate-200 text-sm">
                                {page.sections.map((s) => (
                                    <li key={s.id}><a href={`#${s.id}`} className="-ml-px block border-l border-transparent pl-3 text-slate-600 hover:border-[#7C1B5A] hover:text-[#7C1B5A]">{s.nav || s.heading}</a></li>
                                ))}
                                <li><a href="#faq" className="-ml-px block border-l border-transparent pl-3 text-slate-600 hover:border-[#7C1B5A] hover:text-[#7C1B5A]">FAQ</a></li>
                            </ol>
                        </nav>
                    </aside>

                    <div className="min-w-0 space-y-14">
                        {page.sections.map((s, i) => (
                            <section key={s.id} id={s.id} className="scroll-mt-24">
                                <div className={PROSE}>
                                    <h2>{s.heading}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: s.html }} />
                                </div>
                                {s.image && (
                                    <figure className="mt-8">
                                        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                                            <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" />
                                        </div>
                                        {s.image.caption && <figcaption className="mt-2 text-sm text-slate-500">{s.image.caption}</figcaption>}
                                    </figure>
                                )}
                                {s.video && (
                                    <figure className="mt-8">
                                        <YouTubeEmbed videoId={s.video.id} title={s.video.title} />
                                        <figcaption className="mt-3 text-sm text-slate-500">
                                            <strong className="font-medium text-slate-700">Watch:</strong> {s.video.caption} Video by {s.video.channel} on YouTube.
                                        </figcaption>
                                    </figure>
                                )}
                                {s.afterHtml && <div className={`${PROSE} mt-8`} dangerouslySetInnerHTML={{ __html: s.afterHtml }} />}
                                {page.offerAfter === i && <div className="mt-12"><OfferCard source={`${source}_mid`} /></div>}
                            </section>
                        ))}

                        <section id="faq" className="scroll-mt-24">
                            <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Frequently asked questions</h2>
                            <FAQAccordion items={page.faqs} />
                        </section>

                        {page.related?.length > 0 && (
                            <section>
                                <h2 className="mb-5 text-xl font-semibold tracking-tight">Related guides</h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {page.related.map((r) => (
                                        <Link key={r.href} href={r.href} className="group rounded-xl border border-slate-200 p-5 transition-colors hover:border-[#7C1B5A]/40 hover:bg-[#FBF7F9]">
                                            <p className="font-medium text-[#1a1a1a] group-hover:text-[#7C1B5A]">{r.label}</p>
                                            <p className="mt-1 text-sm text-slate-600">{r.desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        <OfferCard source={`${source}_end`} />
                    </div>
                </div>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
