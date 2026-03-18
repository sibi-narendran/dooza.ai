import Link from 'next/link';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import InternalLinks from '../../../components/InternalLinks';
import { TocSidebar, ContentClickHandler } from './DynamicBlogInteractive';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

// Format ISO date to display format
const formatBlogDate = (isoDate) => {
    if (!isoDate) return '';
    try {
        const datePart = isoDate.split('T')[0];
        const [year, month, day] = datePart.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch {
        return isoDate;
    }
};

export default function DynamicBlogContent({ post }) {
    const tocData = post.tocData || [];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section — server-rendered for SEO */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: post.title }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <span>{post.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatBlogDate(post.date)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    {/* Sidebar */}
                    {tocData.length > 0 && (
                        <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                                <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                                <TocSidebar tocData={tocData} />

                                <div className="mt-8 pt-6 border-t border-slate-200">
                                    <p className="text-sm text-slate-600 mb-4">Automate your business with AI</p>
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                        Try Dooza Free
                                    </a>
                                </div>

                                <div className="mt-6">
                                    <InternalLinks currentSlug={post.slug} />
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Blog Image — server-rendered with alt text for SEO */}
                        {post.image && (
                            <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.imageAlt || post.title}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </div>
                        )}

                        {/* HTML Content — rendered server-side for SEO/AEO crawlers */}
                        <ContentClickHandler html={post.content} />

                        {/* FAQ Section — server-rendered for AEO/Answer Engines */}
                        {post.faqData && post.faqData.length > 0 && (
                            <section id="faq" className="scroll-mt-28">
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {post.faqData.map((item, idx) => (
                                        <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                            <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                            <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* CTA Block */}
                        <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                Automate your business with AI employees that work 24/7.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                >
                                    Try Dooza Free <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href={CAL_BOOKING_URL}
                                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all"
                                >
                                    <Calendar className="w-4 h-4" /> Book a Demo
                                </a>
                            </div>
                        </div>

                        <RelatedPosts
                            currentSlug={post.slug}
                            category={post.category}
                            tags={post.tags || []}
                        />
                    </div>

                    {/* Right spacer to balance sidebar */}
                    {tocData.length > 0 && (
                        <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                    )}
                </div>
            </div>

            <BottomCTA />
            <Footer />
        </div>
    );
}
