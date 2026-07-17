'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Megaphone } from 'lucide-react';

const marketingRunItems = [
    ['New blog post detected', 'completed'],
    ['3 LinkedIn posts drafted', 'completed'],
    ['5 X posts drafted', 'completed'],
    ['Newsletter section drafted', 'running'],
    ['Scheduled after your approval', 'queued'],
];

function MarketingRunPanel() {
    return (
        <div className="rounded-2xl border border-slate-100 bg-warm p-5">
            <div className="mb-5 flex items-center justify-between border-b border-slate-200/70 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Megaphone className="h-6 w-6" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-950">Content repurposing run</div>
                        <div className="text-xs text-slate-500">one blog post, every channel</div>
                    </div>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Running
                </span>
            </div>
            <div className="grid gap-3">
                {marketingRunItems.map(([label, state], index) => (
                    <div
                        key={label}
                        className="workflow-rise flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                        style={{ animationDelay: `${index * 0.18}s` }}
                    >
                        <span className={`h-3 w-3 rounded-full ${state === 'running' ? 'bg-amber-500' : state === 'queued' ? 'bg-slate-300' : 'bg-primary-600'}`} />
                        <span className="flex-1 text-sm font-semibold text-slate-700">{label}</span>
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-400">{state}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const tabs = [
    {
        id: 'support',
        team: 'Customer Support',
        agent: 'Call analyzer agent',
        icon: '/agents/deepagent/tab-support.png',
        image: '/agents/deepagent/hub-2.png',
    },
    {
        id: 'sales',
        team: 'Sales',
        agent: 'Similar audience generator agent',
        icon: '/agents/deepagent/tab-sales.png',
        image: '/agents/deepagent/hub-3.png',
    },
    {
        id: 'marketing',
        team: 'Marketing',
        agent: 'Content repurposing agent',
        icon: '/agents/deepagent/tab-marketing.png',
        image: null,
    },
    {
        id: 'ecommerce',
        team: 'eCommerce',
        agent: 'WhatsApp automation agent',
        icon: '/agents/deepagent/tab-ecommerce.png',
        image: '/agents/deepagent/tab-extra.png',
    },
];

export default function PlatformTabs() {
    const [activeId, setActiveId] = useState(tabs[0].id);
    const activeTab = tabs.find((tab) => tab.id === activeId);

    return (
        <section className="bg-warm px-4 py-20 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="scroll-reveal mb-12 mx-auto max-w-3xl text-center">
                    <span className="section-label mb-4 block">Use cases</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        One agentic platform, endless possibilities
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Pick a team — there is an agent flow already working for it.
                    </p>
                </div>

                <div role="tablist" className="scroll-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {tabs.map((tab) => {
                        const isActive = tab.id === activeId;
                        return (
                            <div key={tab.id} className="reveal-child">
                            <button
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveId(tab.id)}
                                className={`flex h-full w-full flex-col items-start gap-3 rounded-2xl border p-5 text-left transition duration-300 ${
                                    isActive
                                        ? 'border-primary-600 bg-white shadow-lg shadow-primary-100 ring-2 ring-primary-100'
                                        : 'border-slate-200 bg-white/60 hover:-translate-y-0.5 hover:border-primary-200 hover:bg-white hover:shadow-md'
                                }`}
                            >
                                <span className="rounded-lg bg-primary-50 p-1">
                                    <Image
                                        src={tab.icon}
                                        alt=""
                                        width={257}
                                        height={256}
                                        className="h-9 w-9"
                                    />
                                </span>
                                <span className="text-sm font-extrabold text-slate-950">
                                    {tab.team}
                                </span>
                                <span className="text-xs font-semibold text-slate-500">
                                    {tab.agent}
                                </span>
                            </button>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 md:p-6">
                    <div key={activeTab.id} className="tab-panel-enter">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-950">{activeTab.agent}</span>
                            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                                {activeTab.team}
                            </span>
                        </div>
                        {activeTab.image ? (
                            <div className="group overflow-hidden rounded-2xl">
                                <Image
                                    src={activeTab.image}
                                    alt={activeTab.agent}
                                    width={5281}
                                    height={2000}
                                    className="h-auto w-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                                />
                            </div>
                        ) : (
                            <MarketingRunPanel />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
