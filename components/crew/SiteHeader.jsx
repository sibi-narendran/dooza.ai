import Link from 'next/link';
import Image from 'next/image';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import CrewNav from '@/components/crew/CrewNav';
import { crewSignupUrl } from '@/lib/crewUrl';

// One header for every page (Sibi 2026-10-25 09:06: "check all nav bar changes in blogs and other pages, change all").
// Same bar as the homepage: logo | AI Employees menu, Pricing, About, Blog, Log in | Try it free.
// fixed, not sticky: iOS Safari drops sticky under body overflow-x (Sibi 10-22 17:57 bar left on scroll).
const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

export default function SiteHeader({ tagline, bookSource, source = 'site-header', spacer = true }) {
    return (
        <>
            <div className={`${body.className} fixed inset-x-0 top-0 z-50 border-b border-[#14213D]/10 bg-white/95 text-[#14213D] backdrop-blur`}>
                <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Dooza" width={30} height={30} className="rounded" />
                        <span className={`${display.className} text-lg font-bold tracking-[-0.02em]`}>Dooza</span>
                        {tagline && <span className="hidden text-sm text-[#4B5567] sm:inline">{tagline}</span>}
                    </Link>
                    <div className="flex items-center gap-4 md:gap-8">
                        <CrewNav />
                        {bookSource && <Link href="/book" data-source={bookSource} className="hidden text-sm font-semibold text-[#14213D] underline decoration-2 underline-offset-4 hover:text-[#0F766E] lg:inline">Questions? Book a call</Link>}
                        <a href={crewSignupUrl(source)} data-offer="crew" data-source={source} className="whitespace-nowrap rounded-full bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]">
                            Try it free
                        </a>
                    </div>
                </header>
            </div>
            {spacer && <div aria-hidden="true" className="h-[65px] md:h-[73px]" />}
        </>
    );
}
