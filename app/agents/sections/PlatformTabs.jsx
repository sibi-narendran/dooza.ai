'use client';

import { useState } from 'react';
import Image from 'next/image';

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
        agent: 'SEO site audit agent',
        icon: '/agents/deepagent/tab-marketing.png',
        image: '/agents/deepagent/hub-1.png',
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
                <div className="mb-12 mx-auto max-w-3xl text-center">
                    <span className="section-label mb-4 block">Use cases</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        One agentic platform, endless possibilities
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Pick a team — there is an agent flow already working for it.
                    </p>
                </div>

                <div role="tablist" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {tabs.map((tab) => {
                        const isActive = tab.id === activeId;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setActiveId(tab.id)}
                                className={`flex flex-col items-start gap-3 rounded-2xl border p-5 text-left transition ${
                                    isActive
                                        ? 'border-primary-600 bg-white shadow-lg shadow-primary-100 ring-2 ring-primary-100'
                                        : 'border-slate-200 bg-white/60 hover:border-primary-200 hover:bg-white'
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
                        );
                    })}
                </div>

                <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 md:p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-950">{activeTab.agent}</span>
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                            {activeTab.team}
                        </span>
                    </div>
                    <Image
                        src={activeTab.image}
                        alt={activeTab.agent}
                        width={5281}
                        height={2000}
                        className="h-auto w-full rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
