import Image from 'next/image';

const logos = [
    {
        name: 'Starbucks',
        src: '/agents/deepagent/countries-strip.webp',
        width: 648,
        height: 104,
    },
    {
        name: 'Tesla',
        src: '/agents/deepagent/logo-frame1.webp',
        width: 667,
        height: 69,
    },
    {
        name: 'Walmart',
        src: '/agents/deepagent/logo-clip.webp',
        width: 432,
        height: 104,
    },
    {
        name: 'Adobe',
        src: '/agents/deepagent/logo-adobe.webp',
        width: 288,
        height: 104,
    },
    {
        name: 'Visa',
        src: '/agents/deepagent/logo-visa.webp',
        width: 281,
        height: 92,
    },
    {
        name: 'Zapier',
        src: '/agents/deepagent/logo-zapier.webp',
        width: 226,
        height: 104,
    },
    {
        name: 'Stanford University',
        src: '/agents/deepagent/logo-image134.webp',
        width: 333,
        height: 129,
    },
    {
        name: 'Shopify',
        src: '/agents/deepagent/icon-shopify.webp',
        width: 97,
        height: 97,
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
