'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import InternalLinks from '../../../components/InternalLinks';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import BlogHeroImage from '../../../components/BlogHeroImage';
import {
    CheckCircle2,
    Clock,
    Calendar,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    Bot,
    GitBranch,
    Brain,
    Users,
    Cpu,
    Repeat,
    Database,
    Network,
    FlaskConical,
    MessageSquare,
    ShieldCheck,
    TrendingUp,
    Layers,
    Search
} from 'lucide-react';

const faqData = [
    {
        question: "What is the Karpathy loop?",
        answer: "The Karpathy loop is the autonomous experimentation pattern behind Andrej Karpathy's autoresearch project. An AI agent edits a small training program, runs a 5-minute experiment, measures a fixed metric (val_bpb), keeps the change if the number improves, and reverts it if not. Over two days it ran about 700 experiments and kept roughly 20 real optimizations, with no human in the loop."
    },
    {
        question: "What is autoresearch?",
        answer: "Autoresearch is Karpathy's open-source project from March 2026: roughly 630 lines of Python where an AI coding agent runs ML experiments overnight on a single GPU. It gained over 86,000 GitHub stars because the pattern is simple and reproducible: a verifiable metric, reversible Git commits, short feedback cycles, and a bounded environment."
    },
    {
        question: "What is AgentHub?",
        answer: "AgentHub was Karpathy's follow-up experiment, described as \"GitHub is for humans. AgentHub is for agents.\" It replaced branches, pull requests, and merges with a sprawling commit DAG plus a message board so swarms of AI agents could coordinate research. It was explicitly a sketch, and Karpathy later took the repository private."
    },
    {
        question: "What are Anthropic's dynamic workflows?",
        answer: "Dynamic workflows are a Claude Code feature (launched May 2026) where Claude writes a JavaScript orchestration script that spawns fresh-context sub-agents in parallel - up to 16 concurrent and 1,000 per run. Jarred Sumner used them to port Bun's 535,496 lines of Zig to Rust in 11 days with 99.8% of tests passing."
    },
    {
        question: "What is graph engineering?",
        answer: "Graph engineering is the idea that multi-agent systems need durable shared memory: agents read and write typed entities, claims, and relations with provenance in a knowledge graph instead of stuffing every transcript into a context window. The context window forgets; the graph does not."
    },
    {
        question: "Does my small business need agent swarms and knowledge graphs?",
        answer: "Probably not yet. The practical takeaway is the underlying discipline: give AI a verifiable goal, keep actions reversible, and store results outside the chat. A managed AI employee platform like Dooza applies exactly this - measurable tasks, human oversight, and persistent memory - without you building any infrastructure."
    }
];

export default function GraphEngineeringContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['introduction', 'what-happened', 'the-loop', 'agenthub', 'anthropic-playbook', 'graph-memory', 'business-takeaway', 'decision-guide', 'conclusion', 'faq'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'The Karpathy Loop' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Education</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            The <span className="text-primary-600">Karpathy Loop</span>: How AI Agents Learned to Improve Themselves
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            700 experiments in 2 days. Zero humans involved. Here's what autoresearch, AgentHub, and Anthropic's swarm playbook actually mean - and why "graph engineering" is the next phase of AI automation.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>July 30, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/karpathy-loop-graph-engineering.png"
                                alt="The Karpathy loop diagram showing an AI agent running autonomous experiments in a keep-or-revert cycle"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'what-happened', label: 'What Actually Happened' },
                                    { id: 'the-loop', label: 'How the Loop Works' },
                                    { id: 'agenthub', label: 'AgentHub: GitHub for Agents' },
                                    { id: 'anthropic-playbook', label: 'Anthropic\u2019s Playbook' },
                                    { id: 'graph-memory', label: 'Graphs as Shared Memory' },
                                    { id: 'business-takeaway', label: 'What It Means for You' },
                                    { id: 'decision-guide', label: 'When to Use What' },
                                    { id: 'conclusion', label: 'Conclusion' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        type="button"
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === item.id
                                            ? 'bg-primary-50 text-primary-700 font-medium'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Want AI employees without the infrastructure?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="karpathy-loop-graph-engineering" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    On the night of March 7, 2026, Andrej Karpathy pushed a small project to GitHub and went to sleep. By morning, an AI agent had run dozens of machine learning experiments on its own - proposing changes, testing them, keeping the wins, discarding the losses, and committing everything to Git. No human touched the keyboard in between.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That project, <strong>autoresearch</strong>, went on to collect over <strong>86,000 GitHub stars</strong>. Within days, Karpathy followed it with <strong>AgentHub</strong> - "GitHub for agents" - and within two months Anthropic shipped <strong>dynamic workflows</strong> that let Claude orchestrate up to 1,000 sub-agents at once. A widely-shared synthesis note now calls the whole progression <strong>"graph engineering."</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    We read the paper, verified every reference in it, and in this post we'll walk you through exactly what happened, what actually matters, and what it means for businesses that just want AI to <em>do the work</em>.
                                </p>
                            </div>
                        </section>

                        {/* What Actually Happened */}
                        <section id="what-happened" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Actually Happened: A 5-Month Timeline</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Between December 2024 and July 2026, the way professionals work with AI went through three distinct phases. Here's the sequence of real events:
                                </p>
                            </div>
                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        date: "December 2024",
                                        title: "Anthropic publishes \"Building Effective Agents\"",
                                        desc: "Erik Schluntz and Barry Zhang lay out five simple, composable workflow patterns - prompt chaining, routing, parallelization, orchestrator-workers, and evaluator-optimizer. The core advice: start simple, add complexity only when a simpler shape fails."
                                    },
                                    {
                                        date: "December 2025",
                                        title: "The agentic inflection point",
                                        desc: "Karpathy (and many others) report a step change: coding agents stopped being helpful autocomplete and started producing large, correct chunks of work. Karpathy's own ratio flipped from writing ~80% of his code to delegating ~80% of it. He calls the disciplined version of this \"agentic engineering.\""
                                    },
                                    {
                                        date: "March 2026",
                                        title: "autoresearch launches - and breaks the internet",
                                        desc: "Karpathy releases a ~630-line autonomous research loop. An agent edits train.py, runs 5-minute experiments, and keeps or reverts changes based on a fixed metric. Roughly 700 experiments in two days produced ~20 retained optimizations and an ~11% training speedup - on a model Karpathy had hand-tuned for years. Shopify CEO Tobi Lütke reported 19% on an internal model."
                                    },
                                    {
                                        date: "March 2026",
                                        title: "AgentHub: \"GitHub is for humans. AgentHub is for agents.\"",
                                        desc: "Days later, Karpathy sketches the collaboration layer: one Go server, one SQLite database, one bare Git repo, and a message board. No main branch, no PRs, no merges - just a sprawling commit DAG that agent swarms traverse. He later took the repo private; it survives through community forks."
                                    },
                                    {
                                        date: "April 2026",
                                        title: "Sequoia AI Ascent: vibe coding vs agentic engineering",
                                        desc: "Karpathy declares vibe coding already obsolete as a professional standard. Vibe coding raises the floor (anyone can build). Agentic engineering raises the ceiling (specs, diff review, eval loops, guardrails)."
                                    },
                                    {
                                        date: "May 2026",
                                        title: "Anthropic ships dynamic workflows",
                                        desc: "Claude Code can now write its own JavaScript orchestration scripts and spawn fresh-context sub-agents in parallel - up to 16 concurrent, 1,000 per run. The same month, Jarred Sumner uses them to port Bun's 535,496 lines of Zig to Rust in 11 days, passing 99.8% of the test suite."
                                    },
                                    {
                                        date: "July 2026",
                                        title: "\"Graph engineering\" gets a name",
                                        desc: "An independently compiled synthesis note (not affiliated with Karpathy or Anthropic) ties it all together: loops → swarms → DAGs → knowledge graphs, arguing that the real bottleneck isn't the model - it's where memory and evaluation live."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 shrink-0"></div>
                                        <div className="bg-white border border-slate-200 p-5 rounded-xl flex-1">
                                            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{item.date}</span>
                                            <h4 className="font-bold text-slate-900 mt-1 mb-1">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Bot className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-2">The Pattern in One Line</h4>
                                        <p className="text-blue-800 text-sm">
                                            Each step removed a human bottleneck: first the human <em>writing the code</em>, then the human <em>running the experiments</em>, then the human <em>coordinating the agents</em>. What never got removed: the human defining what "good" means.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* YouTube Video Embed */}
                            <div className="w-full mt-8">
                                <YouTubeEmbed
                                    videoId="96jN2OCOfLs"
                                    title="Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan"
                                />
                                <p className="text-sm text-slate-500 mt-3 text-center">
                                    Karpathy's Sequoia AI Ascent 2026 talk - the "agentic engineering" moment this post is built on.
                                </p>
                            </div>
                        </section>

                        {/* The Loop */}
                        <section id="the-loop" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How the Karpathy Loop Works (And Why It Works)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Autoresearch is almost offensively simple. Three files, one loop, no human:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: FlaskConical, title: "prepare.py (locked)", desc: "Fixed data preparation and evaluation. The agent is not allowed to touch it - so it can't cheat by making the test easier." },
                                    { icon: Cpu, title: "train.py (editable)", desc: "The ~630-line experimental surface: model, optimizer, hyperparameters. This is the only thing the agent changes." },
                                    { icon: MessageSquare, title: "program.md (the boss)", desc: "Plain-English instructions: the metric, the rules, crash handling, commit/revert policy, when to escalate. Karpathy calls this \"programming the program.\"" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-900 text-slate-100 p-6 rounded-xl mb-8 font-mono text-sm leading-relaxed overflow-x-auto">
                                <div className="text-slate-400 mb-2"># The ratchet loop</div>
                                <div>LOOP FOREVER:</div>
                                <div>&nbsp;&nbsp;1. Read current train.py + recent history</div>
                                <div>&nbsp;&nbsp;2. Propose ONE motivated change</div>
                                <div>&nbsp;&nbsp;3. Commit the candidate</div>
                                <div>&nbsp;&nbsp;4. Train for ~5 minutes</div>
                                <div>&nbsp;&nbsp;5. Measure val_bpb</div>
                                <div>&nbsp;&nbsp;6. Crash? Inspect, fix, or revert</div>
                                <div>&nbsp;&nbsp;7. Improved? <span className="text-green-400">Keep.</span> Worse? <span className="text-red-400">Git reset.</span></div>
                                <div>&nbsp;&nbsp;8. Record result. Never ask a human.</div>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    The model's intelligence is almost beside the point. The loop works because the <strong>environment was engineered for autonomy</strong>. Four conditions, and they're a checklist you can steal:
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: "The output is verifiable", desc: "A number either improves or it doesn't. No taste, no debate, no \"looks good to me.\"" },
                                    { title: "Every action is reversible", desc: "Git reset returns to the last known-good state. Failed experiments cost nothing but time." },
                                    { title: "The feedback cycle is short", desc: "Five-minute runs mean hundreds of learning cycles per day instead of three." },
                                    { title: "The action space is bounded", desc: "One editable file. The agent can't wander off and break the world." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* AgentHub */}
                        <section id="agenthub" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AgentHub: GitHub for Agents, Not Humans</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    One agent emulates one PhD student. Karpathy's next post said the goal is to emulate <strong>a research community</strong> - "asynchronously massively collaborative for agents, think SETI@home style." AgentHub was his sketch of that layer.
                                </p>
                                <p>
                                    The design is radical because of what it <em>deletes</em>. Human Git assumes a few contributors, a canonical main branch, and that merging is the goal. Agent research inverts all of it: thousands of agents explore simultaneously, most results are never merged, and a <strong>failed experiment is still valuable evidence</strong>. So AgentHub has no main branch, no pull requests, no merge queue. The primary operation isn't "merge this into main" - it's "traverse the search graph."
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><GitBranch className="w-5 h-5 text-primary-600" /> The CLI is a graph interface</h4>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                    {[
                                        { cmd: "ah push", desc: "Push HEAD as a new node in the DAG" },
                                        { cmd: "ah children <hash>", desc: "What was tried on top of this result?" },
                                        { cmd: "ah leaves", desc: "Show the unexplored frontier" },
                                        { cmd: "ah lineage <hash>", desc: "Trace the path that produced this outcome" },
                                        { cmd: "ah diff <a> <b>", desc: "Compare any two experiments" },
                                        { cmd: "ah log -agent X", desc: "What has this agent been doing?" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3">
                                            <code className="text-primary-700 font-semibold">{item.cmd}</code>
                                            <p className="text-slate-600 mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Here's the insight the paper makes literal: <strong>the commit DAG is a knowledge graph</strong>. Commits are nodes. Parent links are edges. Each node carries the hypothesis, the code diff, the metric, the agent's identity, and the keep-or-discard verdict. Suddenly you can ask questions that are awkward in normal Git: <em>Which retained result has the best metric under a memory limit? Which experiments descend from the batch-size change? Which leaves have no evaluation yet?</em>
                                </p>
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <p className="text-amber-800 text-sm">
                                        <strong>Reality check:</strong> AgentHub's own README warned "Work in progress. Just a sketch." Karpathy took the repo private within days of launch. The lesson is architectural, not a product you can download: when agents become numerous, single-main-branch thinking, human-paced review, and transcript-based memory are the first things that break.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Anthropic Playbook */}
                        <section id="anthropic-playbook" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Anthropic's Production Playbook</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    While Karpathy sketched the future, Anthropic shipped the hardened version in three layers:
                                </p>
                            </div>
                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        icon: Layers,
                                        title: "1. Five workflow patterns (Dec 2024)",
                                        desc: "Prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer. The enduring advice from \"Building Effective Agents\": find the simplest pattern that works, and only add structure when a simpler shape demonstrably fails."
                                    },
                                    {
                                        icon: Users,
                                        title: "2. Dynamic workflows (May 2026)",
                                        desc: "Instead of you writing the orchestration, Claude writes a JavaScript script for your task: spawn fresh-context sub-agents in parallel (16 concurrent, 1,000 cap), filter findings, have reviewer agents try to refute them, then synthesize one cited report. Real-world proof: Bun's 535,496 lines of Zig ported to Rust in 11 days, 99.8% of tests passing."
                                    },
                                    {
                                        icon: Network,
                                        title: "3. Knowledge graph cookbook",
                                        desc: "Turn unstructured documents into a queryable graph with nothing but prompts: Haiku extracts typed entities and relations against a Pydantic schema, Sonnet resolves duplicates by reasoning over descriptions (\"Edwin Aldrin\" = \"Buzz Aldrin\" - zero character overlap, caught anyway), NetworkX assembles the graph, and answers cite the exact edges used."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Notice the shift: the 2024 guide said <em>you</em> build the workflow. The 2026 feature says <strong>Claude builds the workflow</strong>. What didn't change is what the human still owns: the objective, the scope, the permissions, the verification policy, the budget, and the rollback rule.
                                </p>
                            </div>
                        </section>

                        {/* Graph Memory */}
                        <section id="graph-memory" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Paper's Big Idea: Graphs as Shared Memory</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The synthesis note's central claim is worth quoting in spirit: <strong>the bottleneck is usually not the next model call - it's the placement of memory and evaluation.</strong> Each architecture in this story externalizes a different kind of memory:
                                </p>
                            </div>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Architecture</th>
                                            <th className="p-4 border-b font-bold">What it remembers</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium flex items-center gap-2"><Repeat className="w-4 h-4 text-primary-600" /> A loop</td>
                                            <td className="p-4 border-b">Iteration & evaluation - what was tried, what scored what</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">A chain</td>
                                            <td className="p-4 border-b">Task order - what happens after what</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">A swarm</td>
                                            <td className="p-4 border-b">Parallel search - many independent contexts at once</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">A commit DAG</td>
                                            <td className="p-4 border-b">Experiment lineage - what descends from what</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium flex items-center gap-2"><Database className="w-4 h-4 text-primary-600" /> A knowledge graph</td>
                                            <td className="p-4 border-b">Shared facts & provenance - what's known, from which source</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The catchphrase: <strong>"The agent forgets; the graph does not."</strong> A swarm of agents that each rebuild the world from scratch in every context window wastes everything they learn. Agents that read and write a shared, typed, provenance-tracked graph compound each other's work across sessions. That's the jump from <em>agentic engineering</em> (humans orchestrating agents) to <em>graph engineering</em> (agents sharing durable state).
                                </p>
                                <p>
                                    The paper is equally clear about the dangers: metrics get gamed (a ratchet optimizes what it can see), entity resolution can catastrophically merge the wrong things, 1,000-agent runs burn money fast, and a knowledge graph is only as honest as its sources. Their closing test for any such system: <em>every important output can be traced to an objective, a plan, an artifact, a source, a graph path, an evaluator decision, and a bounded execution record.</em>
                                </p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Search className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-2">A Note on the Paper Itself</h4>
                                        <p className="text-blue-800 text-sm">
                                            The document making these claims is an independently compiled study note - not by Karpathy or Anthropic. We verified its 12 references: the events are real and accurately described, with minor errors (it says Bun was ~750K lines; the actual figure is 535,496). The "graph engineering" framing is the compiler's synthesis - a good one, but an editorial conclusion, not gospel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Business Takeaway */}
                        <section id="business-takeaway" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What This Means for Your Business</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You don't need a GPU cluster or a commit DAG. But the discipline that made autoresearch work is <strong>exactly</strong> the discipline that separates businesses getting real ROI from AI from businesses getting demos. Strip it down and it's four rules:
                                </p>
                            </div>
                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        icon: TrendingUp,
                                        title: "Give AI a verifiable goal, not a vague wish",
                                        desc: "\"Improve our SEO\" is a wish. \"Publish one optimized post per day and grow organic clicks month over month\" is verifiable. Autoresearch worked because success was a number. Your AI initiatives need one too."
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: "Keep actions reversible and supervised",
                                        desc: "Karpathy's agent could run wild because Git reset made every mistake free. Your AI employees should draft, stage, and log - with humans approving anything irreversible like sending money or publishing under your name."
                                    },
                                    {
                                        icon: Repeat,
                                        title: "Shorten the feedback cycle",
                                        desc: "Five-minute experiments beat monthly reviews. Daily reports, weekly metric checks, fast corrections - the businesses winning with AI iterate like the loop does."
                                    },
                                    {
                                        icon: Brain,
                                        title: "Put memory outside the chat",
                                        desc: "If everything your AI knows lives in a conversation thread, you restart from zero every session. Persistent instructions, stored results, and a real knowledge base are the small-business version of the knowledge graph."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is precisely how we build <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline">AI employees at Dooza</Link>: each one has a defined role with measurable outcomes (posts published, calls answered, leads followed up), operates inside bounded permissions, keeps a durable memory of your business, and reports what it did so you can verify it. It's the Karpathy loop philosophy - verifiable, reversible, bounded, recorded - packaged so you never touch a Git repo. See it in action on the <Link href="/workforce" className="text-primary-600 hover:underline">Dooza Workforce platform</Link>, or read our guide on how to <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline">automate business processes</Link> with the same principles.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Get AI Employees That Actually Do the Work</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Dooza gives you pre-built AI employees for email, social media, SEO, content, sales, and support - with measurable outcomes, human oversight, and persistent memory built in. From $49/month.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a Demo
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Decision Guide */}
                        <section id="decision-guide" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Use What: A Practical Decision Guide</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The paper ends with a decision framework we've adapted for non-research teams. The golden rule: <strong>use the least architecture that solves the problem.</strong>
                                </p>
                            </div>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Your situation</th>
                                            <th className="p-4 border-b font-bold">Start with</th>
                                            <th className="p-4 border-b font-bold">Why</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Simple, low-risk question</td>
                                            <td className="p-4 border-b">A single AI call</td>
                                            <td className="p-4 border-b">Lowest cost and latency; no system needed</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Output can be checked objectively</td>
                                            <td className="p-4 border-b">A loop (generate → evaluate → revise)</td>
                                            <td className="p-4 border-b">Repeated feedback measurably improves the artifact</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Stable, predictable steps</td>
                                            <td className="p-4 border-b">A chain / fixed workflow</td>
                                            <td className="p-4 border-b">Testable, boring, reliable - boring is good</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Many independent units of work</td>
                                            <td className="p-4 border-b">Parallel agents</td>
                                            <td className="p-4 border-b">Cuts wall-clock time; keep a clear reducer</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Variable, decomposable tasks</td>
                                            <td className="p-4 border-b">Orchestrator + workers</td>
                                            <td className="p-4 border-b">Dynamic specialization per subtask</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Facts must survive across sessions</td>
                                            <td className="p-4 border-b">Persistent memory / knowledge graph</td>
                                            <td className="p-4 border-b">Transcripts forget; stored state doesn't</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">You run a business, not a lab</td>
                                            <td className="p-4 border-b text-primary-700 font-semibold">Managed AI employees (Dooza)</td>
                                            <td className="p-4 border-b">All of the above, productized - no infrastructure to build or secure</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    And three questions to ask before adding <em>any</em> complexity: Can success be verified? Can the actions be undone? Can the business afford the cost and latency? If any answer is no, fix that first - more agents will only scale the problem.
                                </p>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion: The Path From Loops to Graphs</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    In five months, the field went from "a human prompts an agent" to "an agent runs 700 unattended experiments overnight" to "swarms of agents coordinating through shared graphs." Karpathy's README ends with a deliberately cinematic vision of autonomous swarms running across compute megastructures. The near-term reality is less cinematic and more useful.
                                </p>
                                <p>
                                    The durable lesson isn't "use more agents." It's that <strong>progress came from engineering the environment</strong>: verifiable metrics, reversible actions, short feedback loops, bounded permissions, and memory that lives outside the context window. Loops, swarms, DAGs, and knowledge graphs are just increasingly sophisticated ways of placing that memory and evaluation.
                                </p>
                                <p>
                                    For most businesses, the winning move is to skip the infrastructure and apply the philosophy directly: pick work with measurable outcomes, give it to <Link href="/workforce" className="text-primary-600 hover:underline">AI employees</Link> that operate inside guardrails, and verify results on a short cycle. That's the Karpathy loop, productized - and it's available today, no GPU required.
                                </p>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqData.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="karpathy-loop-graph-engineering" category="AI Education" tags={['AI Agents', 'Agentic Engineering', 'AI Automation', 'Knowledge Graph']} />
                    </div>

                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
