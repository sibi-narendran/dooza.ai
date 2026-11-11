// /listing: $99 listing coordinator for solo agents (Apollo's test; Sibi OK'd the test 2026-11-11 19:20, approves the page).
// DRAFT: noindex, unlinked, not in the sitemap. No reviews or logos until real.
import ListingForm from '@/components/listing/ListingForm';

export const metadata = {
    title: 'Listing Coordinator, $99 per Listing',
    description: 'MLS input, disclosures, listing copy, photos and showing setup for solo agents. A human checks every listing.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://www.dooza.ai/listing' },
};

const POINTS = ['$99 per listing, no contract', 'First listing free, no card', 'Pair with our $99 TC: listing to close'];

export default function ListingPage() {
    return (
        <main className="min-h-screen bg-[#F7F5F0] text-[#14213D]">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0F766E]">For solo real estate agents</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Listing coordinator, $99 per listing</h1>
                <p className="mt-4 text-lg text-[#4B5567]">MLS input, disclosures, listing copy, photos and showing setup for solo agents. A human checks every listing.</p>
                <ul className="mt-6 space-y-2 text-[16px] text-[#334155]">{POINTS.map((d) => <li key={d} className="flex gap-2"><span aria-hidden="true" className="text-[#0F766E]">✓</span>{d}</li>)}</ul>
                <a href="#start" className="mt-6 inline-block rounded-xl bg-[#0F766E] px-6 py-4 text-lg font-semibold text-white hover:bg-[#0B5D57]">Start my free listing</a>
                <div className="mt-10"><ListingForm /></div>
                <p className="mt-16 text-[13px] text-[#64748B]">Dooza (Adam Laboratory Inc.) / <a href="/privacy" className="underline">Privacy</a> / <a href="/terms" className="underline">Terms</a> / support@dooza.ai</p>
            </div>
        </main>
    );
}
