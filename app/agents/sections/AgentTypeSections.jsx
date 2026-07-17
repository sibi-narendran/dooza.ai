import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_SIGNUP_URL } from '@/lib/links';

function CheckBullet({ children, cardClass = 'bg-white' }) {
    return (
        <div className={`reveal-child flex items-start gap-3 rounded-2xl border border-slate-100 p-4 shadow-sm transition duration-300 hover:border-primary-200 ${cardClass}`}>
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
            <span className="text-sm font-semibold leading-relaxed text-slate-700">{children}</span>
        </div>
    );
}

function PrimaryCta() {
    return (
        <div className="mt-8">
            <a
                href={WORKFLOW_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-xl"
            >
                Get started free <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-sm font-semibold text-slate-500">
                Free pilot: a Dooza engineer builds your first agent. Pay only if you keep it.
            </p>
        </div>
    );
}

function FrameChrome({ title, dark = false }) {
    return (
        <div className={`flex items-center gap-1.5 border-b px-5 py-3 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-100 bg-slate-50/80'}`}>
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className={`ml-3 text-xs font-semibold ${dark ? 'text-slate-400' : 'text-slate-400'}`}>{title}</span>
        </div>
    );
}

function WhiteImageCard({ src, width, height, alt, title = 'Dooza Agents', imageClassName = 'h-auto w-full rounded-2xl' }) {
    return (
        <div className="scroll-reveal">
            <div className="animate-float group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 transition duration-300 hover:shadow-2xl hover:shadow-primary-100/50">
                <FrameChrome title={title} />
                <div className="p-4">
                    <div className="relative overflow-hidden rounded-2xl">
                        <div
                            className="workflow-code-scan pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-transparent via-primary-200/40 to-transparent"
                            aria-hidden="true"
                        />
                        <Image src={src} width={width} height={height} alt={alt} className={`${imageClassName} transition-transform duration-700 ease-out group-hover:scale-[1.03]`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DarkImageCard({ src, width, height, alt, title = 'Agent flow', imageClassName = 'h-auto w-full rounded-2xl' }) {
    return (
        <div className="scroll-reveal">
            <div className="animate-float group overflow-hidden rounded-[28px] bg-slate-950 shadow-xl shadow-slate-300/50 transition duration-300 hover:shadow-2xl hover:shadow-primary-100/60" style={{ animationDelay: '1.5s' }}>
                <FrameChrome title={title} dark />
                <div className="p-4">
                    <div className="relative overflow-hidden rounded-2xl">
                        <div
                            className="workflow-code-scan pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-transparent via-primary-400/25 to-transparent"
                            aria-hidden="true"
                            style={{ animationDelay: '2s' }}
                        />
                        <Image src={src} width={width} height={height} alt={alt} className={`${imageClassName} transition-transform duration-700 ease-out group-hover:scale-[1.03]`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AgentTypeSection({ label, heading, bullets, bgClass, bulletCardClass, reverse = false, children }) {
    return (
        <section className={`px-4 py-20 md:px-8 md:py-24 ${bgClass}`}>
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div className={reverse ? 'order-2 lg:order-1' : ''}>{children}</div>
                <div className={`scroll-reveal ${reverse ? 'order-1 lg:order-2' : ''}`}>
                    <span className="section-label mb-4 block">{label}</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        {heading}
                    </h2>
                    <div className="scroll-stagger mt-8 grid gap-3">
                        {bullets.map((bullet) => (
                            <CheckBullet key={bullet} cardClass={bulletCardClass}>
                                {bullet}
                            </CheckBullet>
                        ))}
                    </div>
                    <PrimaryCta />
                </div>
            </div>
        </section>
    );
}

export default function AgentTypeSections() {
    return (
        <>
            <AgentTypeSection
                label="Marketing"
                heading="Marketing AI agent"
                bgClass="bg-white"
                bulletCardClass="bg-warm"
                bullets={[
                    'Collect data implicitly and enrich it using conversational intelligence — all via chat interface.',
                    'Agent flow: automate all your marketing tasks, such as creating similar audiences, SEO site audits, and hundreds of other marketing tasks.',
                ]}
            >
                <WhiteImageCard
                    src="/agents/deepagent/agent-marketing.png"
                    width={2454}
                    height={1830}
                    alt="Marketing AI agent collecting data via chat"
                    title="Marketing agent"
                />
            </AgentTypeSection>

            <AgentTypeSection
                label="Sales"
                heading="Sales AI agent"
                bgClass="bg-warm"
                bulletCardClass="bg-white"
                reverse
                bullets={[
                    'Automatically identifies warm and hot leads and targets them via chat interface.',
                    'Agent flow: automate all your sales tasks, such as similar audience generation, sales rep allocation, and hundreds of other sales tasks.',
                ]}
            >
                <div className="grid gap-6">
                    <WhiteImageCard
                        src="/agents/deepagent/agent-sales-2.png"
                        width={1857}
                        height={1474}
                        alt="Sales agent lead follow-up flow"
                        title="Lead follow-up"
                    />
                    <DarkImageCard
                        src="/agents/deepagent/agent-sales.png"
                        width={1200}
                        height={1988}
                        alt="Similar audience generation flow"
                        title="Audience generation"
                        imageClassName="mx-auto h-auto w-full max-w-sm rounded-2xl"
                    />
                </div>
            </AgentTypeSection>

            <AgentTypeSection
                label="Customer support"
                heading="Customer support AI agent"
                bgClass="bg-white"
                bulletCardClass="bg-warm"
                bullets={[
                    'Bot building: deploy and train the bot with your own private and public data in seconds. Then use it as a live chat interface or AI chatbot support.',
                    'Agent flow: automate all your customer support tasks, such as support ticket creation, sales coaching, and hundreds of other support tasks.',
                ]}
            >
                <div className="grid gap-6">
                    <WhiteImageCard
                        src="/agents/deepagent/agent-support-2.png"
                        width={2503}
                        height={1771}
                        alt="Support bot trained on your data"
                        title="Support bot"
                    />
                    <DarkImageCard
                        src="/agents/deepagent/agent-support.png"
                        width={1736}
                        height={2392}
                        alt="Support ticket automation flow"
                        title="Ticket automation"
                        imageClassName="mx-auto h-auto w-full max-w-sm rounded-2xl"
                    />
                </div>
            </AgentTypeSection>

            <AgentTypeSection
                label="Live chat"
                heading="Live chat and AI chatbot"
                bgClass="bg-warm"
                bulletCardClass="bg-white"
                reverse
                bullets={[
                    'Live chat: seamlessly connect customers with human agents for instant, personalized assistance.',
                    'AI chatbot: automate your support with an AI chatbot that provides contextually responsive and accurate responses — no room for hallucinations and fabricated responses.',
                ]}
            >
                <WhiteImageCard
                    src="/agents/deepagent/agent-livechat.png"
                    width={2580}
                    height={1544}
                    alt="Live chat and AI chatbot inbox"
                    title="Shared inbox"
                />
            </AgentTypeSection>

            <AgentTypeSection
                label="WhatsApp"
                heading="WhatsApp AI agent"
                bgClass="bg-white"
                bulletCardClass="bg-warm"
                bullets={[
                    'WhatsApp broadcast automation for all stages of purchases: pre-purchase, purchase, and post-purchase.',
                    'Unified inbox to manage customer conversations, automate replies, and boost sales.',
                ]}
            >
                <WhiteImageCard
                    src="/agents/deepagent/agent-whatsapp.png"
                    width={2263}
                    height={1435}
                    alt="WhatsApp broadcast automation"
                    title="WhatsApp automation"
                />
            </AgentTypeSection>
        </>
    );
}
