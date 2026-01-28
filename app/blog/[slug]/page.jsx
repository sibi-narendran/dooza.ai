import { notFound } from 'next/navigation';
import { SITE_URL } from '../../../lib/site';
import { blogPosts, generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../../../lib/blogData';

// Import all blog post components
import BetterThanSintraAIContent from './BetterThanSintraAIContent';
import BetterThanMarblismContent from './BetterThanMarblismContent';
import AIEmployeesTransformingBusinessContent from './AIEmployeesTransformingBusinessContent';
import AiAgentsVsAgenticAiContent from './AiAgentsVsAgenticAiContent';
import SurferSeoVsAhrefsContent from './SurferSeoVsAhrefsContent';
import BetterThanMotionContent from './BetterThanMotionContent';
import SeoForDoctorsDentistsContent from './SeoForDoctorsDentistsContent';
import AiForRealEstateAgentsContent from './AiForRealEstateAgentsContent';
import AiCopywritingToolsContent from './AiCopywritingToolsContent';
import SmallBusinessMarketingToolsContent from './SmallBusinessMarketingToolsContent';
import SeoToolsSmallBusinessContent from './SeoToolsSmallBusinessContent';
import MarketingAutomationToolsContent from './MarketingAutomationToolsContent';
import ContentMarketingToolsContent from './ContentMarketingToolsContent';
import WhatIsClawdbotContent from './WhatIsClawdbotContent';
import WhatIsMoltbotContent from './WhatIsMoltbotContent';
import MoltbotAlternativesContent from './MoltbotAlternativesContent';
import LindyAiAlternativeContent from './LindyAiAlternativeContent';
import AiEmployeesVsVirtualAssistantsContent from './AiEmployeesVsVirtualAssistantsContent';
import AiToolsForSolopreneursContent from './AiToolsForSolopreneursContent';

// Map slugs to components
const BLOG_COMPONENTS = {
    'better-than-sintra-ai': BetterThanSintraAIContent,
    'better-than-marblism': BetterThanMarblismContent,
    'ai-employees-transforming-small-business': AIEmployeesTransformingBusinessContent,
    'ai-agents-vs-agentic-ai': AiAgentsVsAgenticAiContent,
    'surfer-seo-vs-ahrefs': SurferSeoVsAhrefsContent,
    'better-than-motion': BetterThanMotionContent,
    'seo-for-doctors-dentists': SeoForDoctorsDentistsContent,
    'ai-for-real-estate-agents': AiForRealEstateAgentsContent,
    'ai-copywriting-tools': AiCopywritingToolsContent,
    'small-business-marketing-tools': SmallBusinessMarketingToolsContent,
    'seo-tools-small-business': SeoToolsSmallBusinessContent,
    'marketing-automation-tools': MarketingAutomationToolsContent,
    'content-marketing-tools': ContentMarketingToolsContent,
    'what-is-clawdbot': WhatIsClawdbotContent,
    'what-is-moltbot': WhatIsMoltbotContent,
    'moltbot-alternatives': MoltbotAlternativesContent,
    'lindy-ai-alternative': LindyAiAlternativeContent,
    'ai-employees-vs-virtual-assistants': AiEmployeesVsVirtualAssistantsContent,
    'ai-tools-for-solopreneurs': AiToolsForSolopreneursContent,
};

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags?.join(', '),
        alternates: {
            canonical: `${SITE_URL}/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `${SITE_URL}/blog/${slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: ['Dooza Team'],
            images: post.image ? [
                {
                    url: `${SITE_URL}${post.image}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: post.image ? [`${SITE_URL}${post.image}`] : [],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    const BlogComponent = BLOG_COMPONENTS[slug];
    
    if (!post || !BlogComponent) {
        notFound();
    }

    // Generate structured data
    const articleSchema = generateArticleSchema(post, SITE_URL);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
        { name: post.title }
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
            />
            <BlogComponent post={post} />
        </>
    );
}
