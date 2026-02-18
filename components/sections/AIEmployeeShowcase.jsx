'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Mail, MessageSquare, Search, Phone, TrendingUp, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { getProductSignupUrl } from '@/lib/links';
import { aiEmployees } from '@/lib/homeData';

const ROTATION_INTERVAL = 4000;
const RESUME_DELAY = 10000;
const iconMap = { Mail, MessageSquare, Search, Phone, TrendingUp, FileText };

export default function AIEmployeeShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const resumeTimerRef = useRef(null);
    const intervalRef = useRef(null);

    const active = aiEmployees[activeIndex];
    const Icon = iconMap[active.iconName];

    // Auto-rotation
    useEffect(() => {
        if (isPaused) return;
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % aiEmployees.length);
        }, ROTATION_INTERVAL);
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const handleSelect = useCallback((index) => {
        setActiveIndex(index);
        setIsPaused(true);
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => setIsPaused(false), RESUME_DELAY);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setIsPaused(true);
        clearTimeout(resumeTimerRef.current);
    }, []);

    const handleMouseLeave = useCallback(() => {
        resumeTimerRef.current = setTimeout(() => setIsPaused(false), RESUME_DELAY);
    }, []);

    // Cleanup
    useEffect(() => {
        return () => {
            clearTimeout(resumeTimerRef.current);
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/30 to-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="section-label block mb-4">MEET YOUR TEAM</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Meet your new AI employees</h2>
                        <p className="text-xl text-slate-600">6 specialists. 24/7 availability. One subscription.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Tab buttons */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="AI Employees">
                            {aiEmployees.map((emp, idx) => {
                                const TabIcon = iconMap[emp.iconName];
                                const isActive = idx === activeIndex;
                                return (
                                    <button
                                        key={idx}
                                        role="tab"
                                        aria-selected={isActive}
                                        aria-label={emp.name}
                                        onClick={() => handleSelect(idx)}
                                        onFocus={handleMouseEnter}
                                        onBlur={handleMouseLeave}
                                        className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-sm font-semibold transition-all duration-300 ${
                                            isActive
                                                ? `bg-gradient-to-r ${emp.color} text-white shadow-lg scale-105`
                                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                                        }`}
                                    >
                                        <TabIcon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{emp.name}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Detail card */}
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Main card */}
                                <div className="md:col-span-2 bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden">
                                    <div className={`h-2 bg-gradient-to-r ${active.color}`} />
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${active.color} flex items-center justify-center text-white shadow-lg`}>
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 font-serif">{active.name}</h3>
                                                <p className="text-slate-500 font-medium">{active.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">{active.description}</p>

                                        <ul className="space-y-3 mb-6">
                                            {active.tasks.map((task, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href={getProductSignupUrl('workforce')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${active.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]`}
                                        >
                                            Hire {active.name} <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Status card — desktop only */}
                                <div className="hidden md:block">
                                    <div className={`${active.bgColor} rounded-2xl p-6 h-full border border-slate-100`}>
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                            </span>
                                            <span className="text-sm font-semibold text-emerald-700">Working now</span>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-white/70 rounded-xl p-4">
                                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Tasks completed</p>
                                                <p className="text-2xl font-bold text-slate-900">12</p>
                                            </div>
                                            <div className="bg-white/70 rounded-xl p-4">
                                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Time saved</p>
                                                <p className="text-2xl font-bold text-slate-900">2.5 hrs</p>
                                            </div>
                                            <div className="bg-white/70 rounded-xl p-4">
                                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status</p>
                                                <p className="text-sm font-medium text-slate-700">Currently processing...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progress dots */}
                        <div className="flex justify-center gap-1 mt-6">
                            {aiEmployees.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSelect(idx)}
                                    className={`p-2 rounded-full transition-all duration-300`}
                                    aria-label={`Show ${aiEmployees[idx].name}`}
                                >
                                    <span className={`block rounded-full transition-all duration-300 ${
                                        idx === activeIndex
                                            ? `w-8 h-2.5 bg-gradient-to-r ${active.color}`
                                            : 'w-2.5 h-2.5 bg-slate-300'
                                    }`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
