import Link from 'next/link';

// Nav = two sections only (Sibi 2026-10-25 08:26): "AI employees" and "Dooza for industries".
// CSS-only dropdown (hover/focus on desktop, <details> on mobile) so the Crew pages stay server-rendered.
const INDUSTRIES = [
    { name: 'Insurance Agents', detail: 'Portals, inbox, renewals', href: '/insurance-agents' },
    { name: 'Truck Dispatchers', detail: 'Load boards, brokers, billing', href: '/truck-dispatchers' },
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

export default function CrewNav() {
    return (
        <>
            <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium text-[#4B5567] md:flex">
                <Link href="/" className="hover:text-[#14213D]">AI employees</Link>
                <div className="group relative">
                    <button type="button" aria-haspopup="true" className="flex items-center gap-1 hover:text-[#14213D] focus-visible:text-[#14213D]">
                        Dooza for industries
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" /></svg>
                    </button>
                    <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <div className="rounded-xl border border-[#14213D]/10 bg-white p-2 shadow-lg">
                            <IndustryLinks />
                        </div>
                    </div>
                </div>
            </nav>
            <details className="relative md:hidden">
                <summary className="cursor-pointer list-none text-sm font-semibold text-[#14213D] [&::-webkit-details-marker]:hidden">Menu</summary>
                <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-xl border border-[#14213D]/10 bg-white p-2 shadow-lg">
                    <Link href="/" className={`${ITEM} text-[15px] font-semibold text-[#14213D]`}>AI employees</Link>
                    <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-[#4B5567]">Dooza for industries</p>
                    <IndustryLinks />
                </div>
            </details>
        </>
    );
}
