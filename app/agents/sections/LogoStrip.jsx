import Image from 'next/image';

const logos = [
    {
        name: 'TMRG Voice Solutions',
        src: '/testimonials/golan.png',
        width: 595,
        height: 595,
        href: 'https://www.linkedin.com/in/golanmanor',
    },
    {
        name: 'Hatrio AI',
        src: '/testimonials/hatrio-ai.svg',
        width: 500,
        height: 500,
        href: 'https://app.hatrio.ai/blog/ai-employees-changing-teams-dooza-ai',
    },
    {
        name: 'Interio Square',
        src: '/testimonials/interio-square.png',
        width: 320,
        height: 101,
        href: 'https://interio-square.com/',
    },
    {
        name: 'Flixaro',
        src: '/testimonials/flixaro.png',
        width: 201,
        height: 102,
        href: 'https://flixaro.com/',
    },
    {
        name: 'ACE Dreamers Motive',
        src: '/testimonials/ace-dreamers-motive.png',
        width: 560,
        height: 560,
        href: 'https://acedreamersmotive.com/',
    },
    {
        name: 'United Nations',
        src: '/logos/un.svg',
        width: 470,
        height: 400,
        href: 'https://www.un.org/',
    },
    {
        name: 'Harvard University',
        src: '/logos/harvard.svg',
        width: 600,
        height: 165,
        href: 'https://www.harvard.edu/',
    },
    {
        name: 'HubSpot',
        src: '/logos/hubspot.svg',
        width: 120,
        height: 120,
        href: 'https://www.hubspot.com/',
    },
    {
        name: 'Slack',
        src: '/logos/slack.svg',
        width: 120,
        height: 120,
        href: 'https://slack.com/',
    },
    {
        name: 'Zendesk',
        src: '/logos/zendesk.svg',
        width: 120,
        height: 120,
        href: 'https://www.zendesk.com/',
    },
];

export default function LogoStrip() {
    const marqueeLogos = [...logos, ...logos];

    return (
        <section className="border-y border-slate-200 bg-white px-4 py-12 md:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    40+ countries served. 50,000+ Businesses trust us
                </h2>
                <div className="logo-marquee overflow-hidden">
                    <div className="workflow-marquee-track flex w-max items-start gap-x-14 hover:[animation-play-state:paused]">
                        {marqueeLogos.map((logo, index) => (
                            <a
                                key={`${logo.name}-${index}`}
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex shrink-0 flex-col items-center gap-3 transition duration-300 hover:-translate-y-1"
                            >
                                <span className="flex h-12 items-center md:h-14">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={logo.width}
                                        height={logo.height}
                                        className="h-10 w-auto max-w-[180px] object-contain md:h-12"
                                    />
                                </span>
                                <span className="text-xs font-bold text-slate-500 transition duration-300 group-hover:text-primary-700">
                                    {logo.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
