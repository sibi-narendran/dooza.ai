// Homepage FAQ data
export const homeFaqData = [
    {
        question: "What are AI employees?",
        answer: "AI employees are intelligent virtual assistants that handle specific business tasks 24/7. Unlike chatbots, they're purpose-built for business operations like managing email, posting to social media, generating leads, and answering phone calls—all autonomously."
    },
    {
        question: "Do I need technical skills to use Dooza?",
        answer: "Not at all! Our AI employees are pre-trained and ready to work. Just talk to them like you would a real employee. Plus, our free concierge onboarding means our team sets everything up for you."
    },
    {
        question: "Is there a money-back guarantee?",
        answer: "Yes! If you're not happy within 7 days, we'll give you a full refund, no questions asked. We're confident you'll love having AI employees."
    },
    {
        question: "How is Dooza different from ChatGPT or other AI tools?",
        answer: "ChatGPT is a general assistant you have to prompt. Dooza's AI employees are specialists that work autonomously—Eva manages your inbox without you asking, Somi posts to social media daily, Rachel answers your business calls 24/7. They're employees, not tools.",
        links: [{ text: "Learn more about AI agents", url: "https://openai.com/index/introducing-gpts" }]
    },
    {
        question: "Can I integrate Dooza with my existing tools?",
        answer: "Absolutely! Dooza integrates with Gmail, Outlook, social media platforms, CRMs, and 1000+ apps through Zapier. Our onboarding team handles all integrations for you."
    }
];

// FAQ structured data
export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
    }))
};

// AI Employee data — icons stored as string names, resolved in components via iconMap
export const aiEmployees = [
    {
        name: "Eva",
        role: "Email Manager",
        iconName: "Mail",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        accentColor: "text-blue-600",
        borderHover: "hover:border-blue-200",
        quote: "I sort, prioritize, and draft replies to every email—so nothing slips through your inbox.",
        description: "Manages your inbox, drafts replies, and sends emails. Never miss an important message again.",
        tasks: ["Sorts & prioritizes emails", "Drafts professional replies", "Schedules follow-ups"]
    },
    {
        name: "Somi",
        role: "Social Media Manager",
        iconName: "MessageSquare",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50",
        accentColor: "text-pink-600",
        borderHover: "hover:border-pink-200",
        quote: "I write posts, schedule content, and engage your audience across every platform—daily.",
        description: "Creates and posts engaging content daily. Grows your audience while you focus on business.",
        tasks: ["Creates daily content", "Posts across platforms", "Engages with followers"]
    },
    {
        name: "Seomi",
        role: "SEO Specialist",
        iconName: "Search",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        accentColor: "text-green-600",
        borderHover: "hover:border-green-200",
        quote: "I write blog posts, optimize your pages, and climb your Google rankings automatically.",
        description: "Writes blog posts, optimizes your site, and improves your Google rankings automatically.",
        tasks: ["Writes SEO content", "Optimizes pages", "Manages Google Business"]
    },
    {
        name: "Rachel",
        role: "AI Receptionist",
        iconName: "Phone",
        color: "from-purple-500 to-violet-500",
        bgColor: "bg-purple-50",
        accentColor: "text-purple-600",
        borderHover: "hover:border-purple-200",
        quote: "I answer every call 24/7, book appointments, and never put a customer on hold.",
        description: "Answers calls 24/7, books appointments, and never puts a customer on hold.",
        tasks: ["Answers all calls", "Books appointments", "Qualifies leads"]
    },
    {
        name: "Stan",
        role: "Lead Generator",
        iconName: "TrendingUp",
        color: "from-orange-500 to-amber-500",
        bgColor: "bg-orange-50",
        accentColor: "text-orange-600",
        borderHover: "hover:border-orange-200",
        quote: "I find prospects, qualify them, and nurture leads—so your pipeline is always full.",
        description: "Finds, qualifies, and nurtures leads. Fills your pipeline while you sleep.",
        tasks: ["Finds prospects", "Qualifies leads", "Nurtures contacts"]
    },
    {
        name: "Linda",
        role: "Legal Assistant",
        iconName: "FileText",
        color: "from-slate-500 to-gray-600",
        bgColor: "bg-slate-100",
        accentColor: "text-slate-600",
        borderHover: "hover:border-slate-300",
        quote: "I review contracts and legal documents, flagging risks before they become problems.",
        description: "Reviews contracts and legal documents. Catches issues before they become problems.",
        tasks: ["Reviews contracts", "Flags risks", "Summarizes terms"]
    }
];

// Problem cards
export const problemCards = [
    { iconName: 'Mail', iconBg: 'bg-gradient-to-br from-red-50 to-rose-100 shadow-sm shadow-red-100', iconColor: 'text-red-500', title: 'Inbox Overload', desc: "You start every day with 100+ emails demanding attention. By noon, you're behind." },
    { iconName: 'MessageSquare', iconBg: 'bg-gradient-to-br from-orange-50 to-amber-100 shadow-sm shadow-orange-100', iconColor: 'text-orange-500', title: 'Social Silence', desc: "Your last post was 3 weeks ago. Your competitors post daily. You know you should too." },
    { iconName: 'Calendar', iconBg: 'bg-gradient-to-br from-slate-50 to-slate-100 shadow-sm shadow-slate-200', iconColor: 'text-slate-500', title: 'Never Enough Time', desc: "Marketing, sales, admin—everything keeps getting pushed to 'next week.'" }
];

// How it works steps
export const howItWorksSteps = [
    { num: '1', iconName: 'Users', title: 'Sign up free', desc: 'Create your account in 2 minutes. No credit card required to start.' },
    { num: '2', iconName: 'Zap', title: 'We set it up for you', desc: 'Book a free call. Our team configures your AI employees for your workflow.' },
    { num: '3', iconName: 'BarChart3', title: 'They work 24/7', desc: 'Your AI employees start working immediately. Track progress in your dashboard.' }
];

// Comparison rows
export const comparisonRows = [
    { label: "Time Spent Daily", iconName: 'Clock', diy: "3-5 hours on repetitive tasks", ai: "0 hours — runs autonomously" },
    { label: "Availability", iconName: 'Zap', diy: "Limited to your working hours", ai: "24/7/365 — never stops" },
    { label: "Email Management", iconName: 'Mail', diy: "Inbox overload, missed emails", ai: "Sorted, prioritized, responded" },
    { label: "Social Media", iconName: 'MessageSquare', diy: "Inconsistent, forgotten posts", ai: "Daily content, auto-posted" },
    { label: "Lead Follow-up", iconName: 'TrendingUp', diy: "Leads slip through the cracks", ai: "Every lead nurtured instantly" },
    { label: "Mental Load", iconName: 'Brain', diy: "Constant stress & overwhelm", ai: "Peace of mind, it's handled" },
    { label: "Focus on Growth", iconName: 'Rocket', diy: "Stuck in busywork", ai: "Free to scale your business" }
];

// Testimonials
export const testimonials = [
    { quote: "My AI receptionist answers every call while I'm on site. Haven't missed a lead in months.", author: "Interio Square", role: "Interior Design", initials: "IS" },
    { quote: "Our social pages used to be dead. Now Seomi posts daily updates and we're actually growing our following.", author: "Suresh Timbers", role: "Retail", initials: "ST" },
    { quote: "I hired the Legal Assistant to review contracts. Saved me thousands in lawyer fees this year alone.", author: "Adam Labs", role: "Tech Startup", initials: "AL" }
];

// Pricing features
export const pricingFeatures = [
    "All 6 AI employees included",
    "Unlimited tasks & automations",
    "Free concierge onboarding",
    "24/7 autonomous operation",
    "1000+ app integrations",
    "7-day money-back guarantee"
];

// Competitor alternatives
export const competitorAlternatives = [
    { name: "Sintra AI", slug: "better-than-sintra-ai", benefits: ["5-min setup", "70% cheaper"] },
    { name: "Marblism", slug: "better-than-marblism", benefits: ["Free onboarding", "We build for you"] },
    { name: "Motion", slug: "better-than-motion", benefits: ["6 AI employees", "Better value"] }
];

// Solution cards
export const solutionCards = [
    { id: 'ai-lead-generation', iconName: 'TrendingUp', iconBg: 'bg-gradient-to-br from-orange-50 to-amber-100 shadow-sm shadow-orange-100', iconColor: 'text-orange-500', borderHover: 'hover:border-orange-200', title: 'AI for Lead Generation', desc: 'Stan finds, qualifies, and nurtures leads around the clock so your pipeline never runs dry.' },
    { id: 'ai-customer-support', iconName: 'Phone', iconBg: 'bg-gradient-to-br from-purple-50 to-violet-100 shadow-sm shadow-purple-100', iconColor: 'text-purple-500', borderHover: 'hover:border-purple-200', title: 'AI for Customer Support', desc: 'Rachel answers every call 24/7, books appointments, and never puts a customer on hold.' },
    { id: 'ai-social-media-management', iconName: 'MessageSquare', iconBg: 'bg-gradient-to-br from-pink-50 to-rose-100 shadow-sm shadow-pink-100', iconColor: 'text-pink-500', borderHover: 'hover:border-pink-200', title: 'AI for Social Media Management', desc: 'Somi creates and posts engaging content daily across all your social platforms.' },
    { id: 'ai-inbox-management', iconName: 'Mail', iconBg: 'bg-gradient-to-br from-blue-50 to-cyan-100 shadow-sm shadow-blue-100', iconColor: 'text-blue-500', borderHover: 'hover:border-blue-200', title: 'AI for Inbox Management', desc: 'Eva sorts, prioritizes, and responds to emails automatically so nothing slips through.' }
];
