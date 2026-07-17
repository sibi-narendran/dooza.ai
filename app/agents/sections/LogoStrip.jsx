import Image from 'next/image';

const logos = [
    {
        name: 'TMRG Voice Solutions',
        src: '/testimonials/golan.png',
        width: 595,
        height: 595,
    },
    {
        name: 'Hatrio AI',
        src: '/testimonials/hatrio-ai.svg',
        width: 500,
        height: 500,
    },
    {
        name: 'Interio Square',
        src: '/testimonials/interio-square.png',
        width: 320,
        height: 101,
    },
    {
        name: 'Flixaro',
        src: '/testimonials/flixaro.png',
        width: 201,
        height: 102,
    },
    {
        name: 'ACE Dreamers Motive',
        src: '/testimonials/ace-dreamers-motive.png',
        width: 560,
        height: 560,
    },
    {
        name: 'HubSpot',
        src: '/logos/hubspot.svg',
        width: 120,
        height: 120,
    },
    {
        name: 'Slack',
        src: '/logos/slack.svg',
        width: 120,
        height: 120,
    },
    {
        name: 'Zendesk',
        src: '/logos/zendesk.svg',
        width: 120,
        height: 120,
    },
];

export default function LogoStrip() {
    return (
        <section className="border-y border-slate-200 bg-white px-4 py-10 md:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    40+ countries served. 50,000+ Businesses trust us
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                className="h-7 w-auto md:h-8"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
