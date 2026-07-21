'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const apps = [
    {
        name: 'Instagram',
        detail: '@yourbusiness',
        icon: { src: '/logos/instagram.svg' },
        pos: 'md:col-start-1 md:row-start-1',
    },
    {
        name: 'Meta Ads',
        detail: 'admin@yourcompany.com',
        icon: { src: '/logos/meta.svg' },
        pos: 'md:col-start-2 md:row-start-1',
    },
    {
        name: 'Google Drive',
        detail: '137 files',
        icon: { src: '/logos/google-drive.svg' },
        pos: 'md:col-start-3 md:row-start-1',
    },
    {
        name: 'Gmail',
        detail: 'inbox connected',
        icon: { src: '/logos/gmail.svg' },
        pos: 'md:col-start-1 md:row-start-2',
    },
    {
        name: 'Slack',
        detail: '#your-team',
        icon: { src: '/logos/slack.svg' },
        pos: 'md:col-start-3 md:row-start-2',
    },
    {
        name: 'HubSpot',
        detail: 'CRM synced',
        icon: { src: '/logos/hubspot.svg' },
        pos: 'md:col-start-2 md:row-start-3',
    },
];

// Spokes from the hub (300,300) to each app card centre, matching the md+ 3x3 grid above.
const spokes = [
    'M300 300 L100 100',
    'M300 300 L300 100',
    'M300 300 L500 100',
    'M300 300 L100 300',
    'M300 300 L500 300',
    'M300 300 L300 500',
];

const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
};

function AppIcon({ icon }) {
    return <Image src={icon.src} alt="" width={20} height={20} className="h-5 w-5 object-contain" />;
}

export default function CompanyContextSection({ className = 'bg-white' }) {
    const reduceMotion = useReducedMotion();

    return (
        <section className={`relative overflow-hidden px-4 py-20 text-slate-900 md:py-28 ${className}`}>
            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <motion.div
                    className="min-w-0"
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                    <span className="section-label mb-5 block">Company context</span>
                    <h2 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                        Custom AI agents built around your company context
                    </h2>
                    <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
                        Each agent is purpose-built for a specific job — from writing and publishing SEO blogs to monitoring your ad spend, answering support tickets, and finding new customers. They don't just generate content. They execute.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Marketing', 'Sales', 'Support', 'Operations'].map((dept) => (
                            <span key={dept} className="rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                                {dept}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="workflow-tree-surface relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 md:p-8"
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                >
                    <svg
                        className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
                        viewBox="0 0 600 600"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        {spokes.map((d, index) => (
                            <motion.path
                                key={d}
                                d={d}
                                className="workflow-tree-line"
                                initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.3 + index * 0.12 }}
                            />
                        ))}
                    </svg>

                    <motion.div
                        className="relative grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-3"
                        variants={list}
                        initial={reduceMotion ? false : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <motion.div
                            className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-2"
                            variants={{
                                hidden: { opacity: 0, scale: 0.85 },
                                show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 220, damping: 18 } },
                            }}
                        >
                            <motion.div
                                className="flex h-full flex-col items-center justify-center gap-2 rounded-3xl border border-primary-100 bg-primary-50 p-5 text-center"
                                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                            >
                                <Image
                                    src="/brand/dooza-icon.png"
                                    alt="Dooza"
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 object-contain"
                                />
                                <div>
                                    <div className="text-sm font-extrabold text-slate-950">Your business brain</div>
                                    <div className="text-xs font-semibold text-primary-700">every tool, one context</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {apps.map((app, index) => (
                            <motion.div
                                key={app.name}
                                className={app.pos}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.85, y: 16 },
                                    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 18 } },
                                }}
                            >
                                <motion.div
                                    className="flex h-full items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: index * 0.4 }}
                                    whileHover={reduceMotion ? undefined : { y: -4 }}
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-warm">
                                        <AppIcon icon={app.icon} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm font-extrabold text-slate-950">{app.name}</span>
                                        <span className="block truncate text-xs text-slate-500">{app.detail}</span>
                                    </span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
