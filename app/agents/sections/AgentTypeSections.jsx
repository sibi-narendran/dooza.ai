import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_SIGNUP_URL } from '@/lib/links';

function CheckBullet({ children, cardClass = 'bg-white' }) {
    return (
        <div className={`flex items-start gap-3 rounded-2xl border border-slate-100 p-4 shadow-sm ${cardClass}`}>
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
            <span className="text-sm font-semibold leading-relaxed text-slate-700">{children}</span>
        </div>
    );
}

function PrimaryCta() {
    return (
        <a
            href={WORKFLOW_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
        >
            Get started free <ArrowRight className="h-4 w-4" />
        </a>
    );
}

function WhiteImageCard({ src, width, height, alt, imageClassName = 'h-auto w-full rounded-2xl' }) {
    return (
        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">
            <Image src={src} width={width} height={height} alt={alt} className={imageClassName} />
        </div>
    );
}

function DarkImageCard({ src, width, height, alt, imageClassName = 'h-auto w-full rounded-2xl' }) {
    return (
        <div className="rounded-[28px] bg-slate-950 p-4 shadow-xl shadow-slate-300/50">
            <Image src={src} width={width} height={height} alt={alt} className={imageClassName} />
        </div>
    );
}

function AgentTypeSection({ label, heading, bullets, bgClass, bulletCardClass, reverse = false, children }) {
    return (
        <section className={`px-4 py-20 md:px-8 md:py-24 ${bgClass}`}>
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div className={reverse ? 'order-2 lg:order-1' : ''}>{children}</div>
                <div className={reverse ? 'order-1 lg:order-2' : ''}>
                    <span className="section-label mb-4 block">{label}</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        {heading}
                    </h2>
                    <div className="mt-8 grid gap-3">
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
                label="Marketing AI agent"
                heading="Marketing AI agent"
                bgClass="bg-white"
                bulletCardClass="bg-warm"
                bullets={[
                    'Collect data implicitly and enrich it using conversational intelligence — all via chat interface.',
                    'Agent flow: automate all your marketing tasks, such as creating similar audiences, SEO site audits, and hundreds of other marketing tasks.',
                ]}
            >
                <div className="grid gap-6">
                    <WhiteImageCard
                        src="/agents/deepagent/agent-marketing.png"
                        width={2454}
                        height={1830}
                        alt="Marketing AI agent collecting data via chat"
                    />
                    <DarkImageCard
                        src="/agents/deepagent/agent-marketing-2.png"
                        width={2064}
                        height={1404}
                        alt="Marketing agent SEO audit flow"
                    />
                </div>
            </AgentTypeSection>

            <AgentTypeSection
                label="Sales AI agent"
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
                    />
                    <DarkImageCard
                        src="/agents/deepagent/agent-sales.png"
                        width={1200}
                        height={1988}
                        alt="Similar audience generation flow"
                        imageClassName="mx-auto h-auto w-full max-w-sm rounded-2xl"
                    />
                </div>
            </AgentTypeSection>

            <AgentTypeSection
                label="Customer support AI agent"
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
                    />
                    <DarkImageCard
                        src="/agents/deepagent/agent-support.png"
                        width={1736}
                        height={2392}
                        alt="Support ticket automation flow"
                        imageClassName="mx-auto h-auto w-full max-w-sm rounded-2xl"
                    />
                </div>
            </AgentTypeSection>

            <AgentTypeSection
                label="Live chat and AI chatbot"
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
                />
            </AgentTypeSection>

            <AgentTypeSection
                label="WhatsApp AI agent"
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
                />
            </AgentTypeSection>
        </>
    );
}
