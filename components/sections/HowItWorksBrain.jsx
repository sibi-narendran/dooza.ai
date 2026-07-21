'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Brain } from 'lucide-react';
import BookDemoButton from '@/components/buttons/BookDemoButton';

function useLottieJson(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        let alive = true;
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                if (alive) setData(json);
            })
            .catch(() => {});
        return () => {
            alive = false;
        };
    }, [url]);
    return data;
}

const steps = [
    {
        animationUrl: '/lottie/plug.json',
        title: 'We plug in',
        desc: 'Our engineers connect to your existing tools and platforms. No disruption to your current workflow.',
        credit: { label: 'Plug Outlet', author: 'f50amecktp' },
    },
    {
        animationUrl: '/lottie/brain.json',
        title: 'We build your brain',
        desc: "All your business data, history, and context unified in one place — your company's central intelligence hub.",
        credit: { label: 'Artificial Intelligence', author: 'cyjz76jqe2szfc3k' },
    },
    {
        animationUrl: '/lottie/rocket.json',
        title: 'We deploy your agents',
        desc: 'Custom agents trained on your business, your voice, and your goals. Built for your specific problems, they automate real tasks that push outcomes.',
        credit: { label: 'Rocket', author: 'vnv48a61a4jmmq13' },
    },
    {
        animationUrl: '/lottie/growth.json',
        title: 'You grow faster',
        desc: 'More campaigns. More content. More pipeline. Without adding headcount or waiting on an agency.',
        credit: { label: 'Growth', author: '43cr1dtx19piidou' },
    },
];

const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

function StepIcon({ url }) {
    const data = useLottieJson(url);
    if (!data) return null;
    return (
        <Lottie
            animationData={data}
            loop
            autoplay
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            style={{ width: '150%', height: '150%' }}
        />
    );
}

export default function HowItWorksBrain({
    className = 'bg-warm',
    ctaSource = 'how_it_works',
    ctaLabel = 'Start My Free Setup',
}) {
    const reduceMotion = useReducedMotion();

    const rise = (delay = 0) =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-60px' },
                  transition: { duration: 0.55, ease: 'easeOut', delay },
              };

    return (
        <section className={`relative overflow-hidden px-4 py-20 text-slate-900 md:py-28 ${className}`}>
            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <motion.div {...rise()}>
                    <span className="section-label mb-5 block">How it works</span>
                    <h2 className="mb-7 max-w-xl font-serif text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
                        We plug in. You grow faster.
                    </h2>
                    <p className="mb-9 max-w-lg text-lg leading-relaxed text-slate-600">
                        Our engineers do the heavy lifting — your agents plug into your tools, learn your business, and start executing in days.
                    </p>
                    <BookDemoButton source={ctaSource} variant="primary">
                        {ctaLabel}
                    </BookDemoButton>
                </motion.div>

                <motion.div {...rise(0.1)} className="workflow-tree-surface rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 md:p-6">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                                <Brain className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-950">From your tools to your AI team</div>
                                <div className="text-xs text-slate-500">four steps, zero disruption</div>
                            </div>
                        </div>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                            Days
                        </span>
                    </div>

                    <motion.div
                        className="relative grid gap-4"
                        variants={list}
                        initial={reduceMotion ? false : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <div className="absolute bottom-12 left-5 top-6 hidden w-px bg-primary-100 sm:block" />
                        <span className="deployment-vertical-flow absolute left-[17px] top-6 hidden h-16 w-2 rounded-full bg-primary-600 sm:block" />

                        {steps.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={{
                                    hidden: { opacity: 0, y: 28 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                                }}
                                whileHover={reduceMotion ? undefined : { y: -4 }}
                                className="relative flex gap-4 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm md:p-5"
                            >
                                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary-50">
                                    <StepIcon url={item.animationUrl} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="mb-1 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-bold text-primary-700">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="font-sans text-base font-extrabold leading-snug text-slate-950">{item.title}</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <p className="mt-5 text-[11px] leading-relaxed text-slate-400">
                        Step icons via{' '}
                        <a href="https://lottiefiles.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-slate-500">
                            LottieFiles
                        </a>
                        :{' '}
                        {steps.map((item, i) => (
                            <span key={item.credit.author}>
                                {i > 0 && ' · '}
                                <a
                                    href={`https://lottiefiles.com/${item.credit.author}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-2 hover:text-slate-500"
                                >
                                    {item.credit.label}
                                </a>
                            </span>
                        ))}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
