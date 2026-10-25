import Link from 'next/link';
import MobileMenu from './MobileMenu';

// Standard nav (Sibi 2026-10-25 08:44-08:48): AI Employees menu (Crew + industries + custom agents) | Pricing | About | Blog. Log in is a button in SiteHeader.
// CSS-only dropdown (hover/focus on desktop, <details> via MobileMenu on mobile) so the Crew pages stay server-rendered.
// Mobile panel spans the bar's width (it hung 15px off-screen at 390px, Sibi 10-25 09:07).
const LINKS = [
    { name: 'Pricing', href: '/#price' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
];

const INDUSTRIES = [
    { name: 'Insurance Agents', detail: 'Portals, inbox, renewals', href: '/insurance-agents' },
    { name: 'Truck Dispatchers', detail: 'Load boards, brokers, billing', href: '/truck-dispatchers' },
    { name: 'Accountants', detail: 'Client documents, statements, deadlines', href: '/ai-agents-for-accountants' },
];

const ITEM = 'block rounded-lg px-3 py-2.5 hover:bg-[#EEF3F1] focus-visible:bg-[#EEF3F1] focus-visible:outline-none';

function IndustryLinks() {
    return INDUSTRIES.map((i) => (
        <Link key={i.href} href={i.href} data-source="crew-nav-industry" className={ITEM}>
            <span className="block text-[15px] font-semibold text-[#14213D]">{i.name}</span>
            <span className="block text-sm text-[#4B5567]">{i.detail}</span>
        </Link>
    ));
}

function CrewMenu() {
    return (
        <>
            <Link href="/" data-source="crew-nav-crew" className={ITEM}>
                <span className="block text-[15px] font-semibold text-[#14213D]">Dooza Crew</span>
                <span className="block text-sm text-[#4B5567]">Build your team of AI employees</span>
            </Link>
            <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-[#4B5567]">By industry</p>
            <IndustryLinks />
            <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-[#4B5567]">Done for you</p>
            <Link href="/done-for-you-ai-agents" data-source="crew-nav-custom" className={ITEM}>
                <span className="block text-[15px] font-semibold text-[#14213D]">Custom AI agents</span>
                <span className="block text-sm text-[#4B5567]">We build and run an agent for one job</span>
            </Link>
        </>
    );
}

export default function CrewNav() {
    return (
        <>
            <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium text-[#4B5567] md:flex">
                <div className="group relative">
                    <button type="button" aria-haspopup="true" className="flex items-center gap-1 hover:text-[#14213D] focus-visible:text-[#14213D]">
                        AI Employees
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" /></svg>
                    </button>
                    <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <div className="rounded-xl border border-[#14213D]/10 bg-white p-2 shadow-lg">
                            <CrewMenu />
                        </div>
                    </div>
                </div>
                {LINKS.map((l) => <Link key={l.href} href={l.href} className="hover:text-[#14213D]">{l.name}</Link>)}
            </nav>
            <MobileMenu>
                <summary className="cursor-pointer list-none text-sm font-semibold text-[#14213D] [&::-webkit-details-marker]:hidden">Menu</summary>
                <div className="absolute inset-x-4 top-full z-50 mt-2 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-xl border border-[#14213D]/10 bg-white p-2 shadow-lg">
                    <p className="px-3 pb-1 pt-1 text-xs font-semibold uppercase tracking-wide text-[#4B5567]">AI Employees</p>
                    <CrewMenu />
                    <div className="my-2 border-t border-[#14213D]/10" />
                    {LINKS.map((l) => <Link key={l.href} href={l.href} className={`${ITEM} text-[15px] font-semibold text-[#14213D]`}>{l.name}</Link>)}
                </div>
            </MobileMenu>
        </>
    );
}
