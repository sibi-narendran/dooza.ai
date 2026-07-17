import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WORKFLOW_SIGNUP_URL } from '@/lib/links';

const cards = [
    {
        title: 'Recover abandoned carts',
        tags: ['Outbound', 'eCommerce'],
        icons: [
            { src: '/agents/deepagent/icon-shopify.webp', width: 97, height: 97, alt: 'Shopify' },
            { src: '/agents/deepagent/icon-subtract.webp', width: 97, height: 97, alt: 'Email' },
            { src: '/agents/deepagent/icon-globe.webp', width: 129, height: 129, alt: 'Web' },
        ],
        description:
            'Use Dooza Agents to send a discount email when a cart is abandoned and the cart value is over $100.',
    },
    {
        title: 'Sales team automation — HubSpot',
        tags: ['Inbound', 'eCommerce'],
        icons: [
            { src: '/agents/deepagent/icon-slack.webp', width: 129, height: 129, alt: 'Slack' },
            { src: '/agents/deepagent/icon-hubspot.webp', width: 129, height: 129, alt: 'HubSpot' },
            { src: '/agents/deepagent/icon-openai.webp', width: 137, height: 137, alt: 'OpenAI' },
            { src: '/agents/deepagent/icon-gmail.webp', width: 142, height: 150, alt: 'Gmail' },
        ],
        description:
            'When a visitor submits a demo request, the agent automatically assigns a sales representative and sends a notification to the appropriate team member.',
    },
    {
        title: 'YouTube to LinkedIn content generator',
        tags: ['General', 'Outbound'],
        icons: [
            { src: '/agents/deepagent/icon-slack.webp', width: 129, height: 129, alt: 'Slack' },
            { src: '/agents/deepagent/icon-openai.webp', width: 137, height: 137, alt: 'OpenAI' },
        ],
        description:
            'This agent transforms YouTube videos into engaging LinkedIn posts by extracting key insights, summarizing content, and optimizing for professional audiences.',
    },
];

export default function PrebuiltAgents() {
    return (
        <section className="bg-warm px-4 py-20 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="scroll-reveal mb-12 max-w-3xl">
                    <span className="section-label mb-4 block">Pre-built agents</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        Pre-built agents hub for you
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        We did the tedious task of building an agent. Let them work for you.
                    </p>
                </div>
                <div className="scroll-stagger grid gap-6 md:grid-cols-3">
                    {cards.map((card) => (
                        <div key={card.title} className="reveal-child">
                        <div
                            className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50"
                        >
                            <div className="mb-5 flex items-center">
                                {card.icons.map((icon) => (
                                    <span
                                        key={icon.src}
                                        className="-ml-2 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm first:ml-0"
                                    >
                                        <Image
                                            src={icon.src}
                                            alt={icon.alt}
                                            width={icon.width}
                                            height={icon.height}
                                            className="h-5 w-5 object-contain"
                                        />
                                    </span>
                                ))}
                            </div>
                            <div className="mb-4 flex flex-wrap gap-2">
                                {card.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="mb-3 font-sans text-xl font-extrabold text-slate-950">{card.title}</h3>
                            <p className="mb-6 text-sm leading-relaxed text-slate-600">{card.description}</p>
                            <a
                                href={WORKFLOW_SIGNUP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary-700 transition hover:text-primary-800"
                            >
                                Use this agent <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href={WORKFLOW_SIGNUP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                    >
                        Explore agents for free <ArrowRight className="h-4 w-4" />
                    </a>
                    <p className="mt-4 text-sm font-semibold text-slate-500">
                        Free pilot: your first agent is set up free by a Dooza engineer — live in days.
                    </p>
                </div>
            </div>
        </section>
    );
}
