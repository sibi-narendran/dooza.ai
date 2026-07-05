import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = ({ variant = 'light' }) => {
    const isDark = variant === 'dark';

    return (
        <footer className={`pt-16 pb-8 ${isDark
                ? 'bg-[#0a0a0f] border-t border-white/5'
                : 'bg-white border-t border-slate-100'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Dooza" className="rounded-lg" width={32} height={32} />
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-primary-600'}`}>
                            Dooza
                        </span>
                    </Link>
                    <p className={`text-sm max-w-xs text-center md:text-left ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                        Build, grow, and scale your business with AI-powered solutions.
                    </p>
                </div>

                {/* Links */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-8 border-y ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                    <div>
                        <p className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Products</p>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Dooza
                                </Link>
                            </li>
                            <li>
                                <Link href="/workflow" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Dooza Workflow
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Dooza Studio
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Services</p>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/deployment" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Dooza Deployment Company
                                </Link>
                            </li>
                            <li>
                                <Link href="/automated-customer-support" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Automated Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer-support-automation-agency" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Customer Support Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer-service-automation-software" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Customer Service Software
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-automation-services" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Automation Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/workflow-automation" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Workflow Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-customer-support" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer-support-ai" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Support Workflow
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Solutions · AI Employees</p>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/agents/outbound-pro" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Outbound Pro
                                </Link>
                            </li>
                            <li>
                                <Link href="/agents/lead-gen-pro" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Lead Gen Pro
                                </Link>
                            </li>
                            <li>
                                <Link href="/agents/ugc-reel-creator" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    UGC Reel Creator
                                </Link>
                            </li>
                            <li>
                                <Link href="/agents/voice-pro" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Voice Pro
                                </Link>
                            </li>
                            <li>
                                <Link href="/agents/ranky" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Ranky
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Company</p>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/partners" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Resources</p>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/blog" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/ai-employees-transforming-small-business" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Employees Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/dooza-vs-sintra" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Dooza vs Sintra AI
                                </Link>
                            </li>
                            <li>
                                <Link href="/dooza-vs-marblism" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Dooza vs Marblism
                                </Link>
                            </li>
                            <li>
                                <Link href="/sintra-alternatives" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Sintra AI Alternatives
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-solutions-for-business" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Solutions for Business
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-automation-examples" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Automation Examples
                                </Link>
                            </li>
                            <li>
                                <Link href="/best-customer-service-automation-software" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Support Automation Calculator
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer-service-automation-solutions" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Support Automation Planner
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-content-automation" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Content Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-blog-automation" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Blog Automation
                                </Link>
                            </li>
                            <li>
                                <Link href="/start-ai-automation-agency" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Start AI Automation Agency
                                </Link>
                            </li>
                            <li>
                                <Link href="/marblism-alternatives" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Marblism Alternatives
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Legal</p>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className={`text-sm py-1 inline-block transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className={`text-center text-sm md:text-left ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                        © {new Date().getFullYear()} Adam Laboratory Inc. All rights reserved.
                    </p>
                    <p className={`text-center text-xs md:text-left ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        Dooza.ai is a product of Adam Laboratory Inc., a Delaware corporation.
                    </p>
                    <div className={`flex gap-2 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
                        <a
                            href="https://twitter.com/sibinarendran"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on Twitter"
                            className={`tap-target rounded-full transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary-600'}`}
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/110144933/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Follow us on LinkedIn"
                            className={`tap-target rounded-full transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary-600'}`}
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
