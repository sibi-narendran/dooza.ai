'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';

// Define related post mappings for better internal linking
const relatedPostMappings = {
    'claude-opus-5-5': ['claude-sonnet-5-5', 'gpt-6-1-sol', 'anthropic-2-trillion-valuation-vs-samsung'],
    'claude-sonnet-5-5': ['claude-opus-5-5', 'gpt-6-1-sol', 'claude-code-creator-prompting-tips-video'],
    'gpt-6-1-sol': ['claude-sonnet-5-5', 'claude-opus-5-5', 'ai-agents-vs-agentic-ai'],
    'claude-made-video-western-civilization': ['claude-opus-5-5', 'claude-code-universal-modder-game-mods', 'claude-code-creator-prompting-tips-video'],
    'claude-code-universal-modder-game-mods': ['claude-code-creator-prompting-tips-video', 'claude-made-video-western-civilization', 'automate-business-processes'],
    'claude-code-creator-prompting-tips-video': ['claude-code-universal-modder-game-mods', 'claude-sonnet-5-5', 'claude-cowork-vs-dooza'],
    'google-tpus-in-space-project-suncatcher': ['gpt-6-1-sol', 'anthropic-2-trillion-valuation-vs-samsung', 'dyna-2-1-robot-laundry-physical-agent'],
    'dyna-2-1-robot-laundry-physical-agent': ['ai-agents-vs-agentic-ai', 'google-tpus-in-space-project-suncatcher', 'automate-business-processes'],
    'x-cashtag-trading': ['anthropic-2-trillion-valuation-vs-samsung', 'small-business-marketing-tools', 'marketing-automation-tools'],
    'anthropic-2-trillion-valuation-vs-samsung': ['claude-opus-5-5', 'gpt-6-1-sol', 'google-tpus-in-space-project-suncatcher'],
    'n8n-alternatives': ['automate-business-processes', 'openclaw-alternatives', 'marketing-automation-tools'],
    'ringcentral-ai-receptionist': ['after-hours-answering-service', 'best-ai-receptionist', 'virtual-receptionist-for-small-business'],
    'after-hours-answering-service': ['ringcentral-ai-receptionist', 'best-ai-receptionist', 'ai-voice-agent-missed-calls'],
    'hermes-agent-vs-openclaw': ['openclaw-alternatives', 'what-is-openclaw', 'openclaw-vs-dooza'],
    'openclaw-alternatives': ['hermes-agent-vs-openclaw', 'openclaw-vs-dooza', 'what-is-openclaw'],
    'gorgias-pricing': ['gorgias-ai', 'best-ai-chatbot-shopify', 'customer-service-outsourcing-cost'],
    'gorgias-ai': ['gorgias-pricing', 'best-ai-chatbot-shopify', 'ai-for-shopify-store'],
    'customer-service-outsourcing-cost': ['best-customer-service-outsourcing-companies', 'gorgias-pricing', 'replace-va-with-ai'],
    'best-customer-service-outsourcing-companies': ['customer-service-outsourcing-cost', 'ai-employees-vs-virtual-assistants', 'gorgias-ai'],
    'profound-ai-alternative': ['profound-vs-peec-ai', 'profound-ai-pricing', 'ai-visibility-tools'],
    'profound-vs-peec-ai': ['profound-ai-alternative', 'ai-visibility-tools', 'profound-ai-pricing'],
    'ai-visibility-tools': ['profound-ai-alternative', 'ai-overviews-tracking', 'ai-citations'],
    'answer-engine-optimization': ['llm-seo', 'ai-citations', 'geo-vs-seo'],
    'aeo-agency': ['answer-engine-optimization', 'ai-visibility-tools', 'profound-ai-alternative'],
    'ai-overviews-tracking': ['ai-citations', 'ai-visibility-tools', 'answer-engine-optimization'],
    'ai-citations': ['llm-seo', 'ai-overviews-tracking', 'how-to-rank-in-chatgpt'],
    'gptbot-claudebot-ai-crawlers': ['llm-seo', 'ai-citations', 'answer-engine-optimization'],
    'chatgpt-shopping': ['ai-citations', 'ai-for-shopify-store', 'llm-seo'],
    'llm-seo': ['answer-engine-optimization', 'gptbot-claudebot-ai-crawlers', 'how-to-rank-in-chatgpt'],
    'profound-ai-pricing': ['profound-ai-alternative', 'profound-vs-peec-ai', 'ai-visibility-tools'],
    'best-geo-tools': ['ai-visibility-tools', 'profound-ai-alternative', 'profound-vs-peec-ai'],
    'geo-vs-seo': ['answer-engine-optimization', 'llm-seo', 'what-is-generative-engine-optimization'],
    'how-to-rank-in-chatgpt': ['ai-citations', 'llm-seo', 'chatgpt-shopping'],
    'what-is-generative-engine-optimization': ['answer-engine-optimization', 'ai-visibility-tools', 'geo-vs-seo'],
    'ai-employees-transforming-small-business': ['automate-business-processes', 'ai-staffing', 'marketing-automation-tools'],
    'ai-agents-vs-agentic-ai': ['ai-copywriting-tools', 'marketing-automation-tools', 'ai-employees-transforming-small-business'],
    'surfer-seo-vs-ahrefs': ['seo-tools-small-business', 'seo-for-doctors-dentists', 'content-marketing-tools'],
    'better-than-motion': ['accio-work-vs-dooza', 'lindy-ai-alternative', 'marketing-automation-tools'],
    'seo-for-doctors-dentists': ['seo-tools-small-business', 'small-business-marketing-tools', 'content-marketing-tools'],
    'ai-for-real-estate-agents': ['small-business-marketing-tools', 'marketing-automation-tools', 'ai-copywriting-tools'],
    'ai-copywriting-tools': ['content-marketing-tools', 'small-business-marketing-tools', 'ai-employees-transforming-small-business'],
    'small-business-marketing-tools': ['seo-tools-small-business', 'marketing-automation-tools', 'content-marketing-tools'],
    'seo-tools-small-business': ['surfer-seo-vs-ahrefs', 'seo-for-doctors-dentists', 'small-business-marketing-tools'],
    'marketing-automation-tools': ['automate-business-processes', 'ai-employees-transforming-small-business', 'small-business-marketing-tools'],
    'content-marketing-tools': ['ai-copywriting-tools', 'marketing-automation-tools', 'small-business-marketing-tools'],
    'what-is-openclaw': ['openclaw-alternatives', 'hermes-agent-vs-openclaw', 'moltbot-alternatives'],
    'what-is-clawdbot': ['what-is-openclaw', 'what-is-moltbot', 'moltbot-alternatives'],
    'what-is-moltbot': ['what-is-openclaw', 'what-is-clawdbot', 'moltbot-alternatives'],
    'moltbot-alternatives': ['openclaw-alternatives', 'what-is-openclaw', 'hermes-agent-vs-openclaw'],
    'ai-employees-openclaw-business': ['what-is-openclaw', 'ai-employees-transforming-small-business', 'ai-employees-vs-virtual-assistants'],
    'lindy-ai-alternative': ['better-than-motion', 'accio-work-vs-dooza', 'ai-employees-transforming-small-business'],
    'ai-employees-vs-virtual-assistants': ['ai-staffing', 'ai-employees-transforming-small-business', 'ai-tools-for-solopreneurs'],
    'ai-tools-for-solopreneurs': ['best-ai-sales-tools-for-startups', 'automate-business-processes', 'ai-employees-vs-virtual-assistants'],
    'automate-business-processes': ['n8n-alternatives', 'best-ai-receptionist', 'marketing-automation-tools'],
    'best-ai-receptionist': ['after-hours-answering-service', 'ringcentral-ai-receptionist', 'virtual-receptionist-for-small-business'],
    'ai-staffing': ['automate-business-processes', 'best-ai-receptionist', 'ai-employees-vs-virtual-assistants'],
    'virtual-receptionist-for-small-business': ['best-ai-receptionist', 'after-hours-answering-service', 'ringcentral-ai-receptionist'],
    'build-a-20x-company': ['what-is-openclaw', 'ai-staffing', 'automate-business-processes'],
    'openclaw-vs-dooza': ['openclaw-alternatives', 'hermes-agent-vs-openclaw', 'what-is-openclaw'],
    'ai-sales-agent-guide': ['best-ai-sales-tools-for-startups', 'ai-agent-linkedin-lead-generation', 'automate-business-processes'],
    'her-entire-team-was-ai': ['ai-staffing', 'ai-employees-transforming-small-business', 'automate-business-processes'],
    'ai-receptionist-for-salons': ['best-ai-receptionist', 'virtual-receptionist-for-small-business', 'automate-business-processes'],
    'ai-appointment-setter': ['ai-sales-agent-guide', 'best-ai-receptionist', 'ai-employees-vs-virtual-assistants'],
    'ai-receptionist-for-dental-office': ['seo-for-doctors-dentists', 'best-ai-receptionist', 'virtual-receptionist-for-small-business'],
    'ai-agent-linkedin-lead-generation': ['ai-for-real-estate-agents', 'small-business-marketing-tools', 'automate-business-processes'],
    'ai-voice-agent-missed-calls': ['after-hours-answering-service', 'best-ai-receptionist', 'ringcentral-ai-receptionist'],
    'automate-employee-performance-reviews': ['ai-staffing', 'automate-business-processes', 'ai-employees-vs-virtual-assistants'],
    'ai-legal-assistant': ['best-ai-receptionist', 'ai-appointment-setter', 'ai-sales-agent-guide'],
    'reddit-agent-dooza-workspace-guide': ['ai-employees-transforming-small-business', 'ai-agents-vs-agentic-ai', 'automate-business-processes'],
    'claude-cowork-vs-dooza': ['ai-employees-vs-virtual-assistants', 'automate-business-processes', 'ai-employees-transforming-small-business'],
    'perplexity-computer-vs-dooza': ['claude-cowork-vs-dooza', 'openclaw-vs-dooza', 'ai-employees-transforming-small-business'],
    'dooza-vs-fondo': ['automate-business-processes', 'ai-employees-transforming-small-business', 'ai-employees-vs-virtual-assistants'],
    'hatrio-ai-canada-partnership': ['content-marketing-tools', 'ai-copywriting-tools', 'outrank-vs-dooza-ranky'],
    'how-we-automate-seo-at-dooza': ['seo-tools-small-business', 'content-marketing-tools', 'automate-business-processes'],
    'satya-reverse-information-paradox': ['ai-employees-vs-virtual-assistants', 'ai-employees-transforming-small-business', 'automate-business-processes'],
    'karpathy-loop-graph-engineering': ['ai-agents-vs-agentic-ai', 'ai-employees-transforming-small-business', 'build-a-20x-company'],
    'ai-agent-comparison': ['ai-agents-vs-agentic-ai', 'automate-business-processes', 'ai-sales-agent-guide'],
    'ai-social-media-management-tools': ['small-business-marketing-tools', 'marketing-automation-tools', 'content-marketing-tools'],
    'no-code-ai-agent-builder': ['ai-agent-comparison', 'automate-business-processes', 'ai-agents-vs-agentic-ai'],
    'best-ai-sales-tools-for-startups': ['ai-sales-agent-guide', 'ai-agent-linkedin-lead-generation', 'automate-business-processes']
};

const dynamicPostLabels = {
    'ai-agent-comparison': 'AI Agent Comparison: How to Evaluate Platforms',
    'ai-social-media-management-tools': 'AI Social Media Management Tools Compared',
};

const InternalLinks = ({ currentSlug, position = 'sidebar' }) => {
    const relatedSlugs = relatedPostMappings[currentSlug] || [];
    const relatedPosts = relatedSlugs
        .map(slug => blogPosts.find(p => p.slug === slug) || (dynamicPostLabels[slug]
            ? { id: slug, slug, title: dynamicPostLabels[slug] }
            : null))
        .filter((post) => post && !post.noindex)
        .slice(0, 3);

    if (relatedPosts.length === 0) return null;

    if (position === 'inline') {
        return (
            <div className="my-8 bg-slate-50 border border-slate-200 p-6 rounded-xl">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                    You Might Also Like
                </h4>
                <ul className="space-y-3">
                    {relatedPosts.map(post => (
                        <li key={post.id}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                <span className="line-clamp-1">{post.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // Sidebar style
    return (
        <div className="bg-primary-50 border border-primary-100 p-4 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Related Reads</h4>
            <ul className="space-y-2">
                {relatedPosts.map(post => (
                    <li key={post.id}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm text-primary-600 hover:text-primary-700 font-medium line-clamp-2 block"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InternalLinks;

// Export mapping for use in other components
export { relatedPostMappings };
