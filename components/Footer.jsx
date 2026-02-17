import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = ({ variant = 'light' }) => {
    const isDark = variant === 'dark';

    return (
        <footer className={`pt-16 pb-8 ${isDark
                ? 'bg-[#0a0a0f] border-t border-white/5'
                : 'bg-[#f5f4f1] border-t border-slate-100'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Dooza" className="w-8 h-8 rounded-lg" width="32" height="32" />
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-primary-600'}`}>
                            Dooza
                        </span>
                    </Link>
                    <p className={`text-sm max-w-xs text-center md:text-left ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                        Build, grow, and scale your business with AI-powered solutions.
                    </p>
                </div>

                {/* Links */}
                <div className={`grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-y ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Workforce
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Studio
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Solutions</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#ai-lead-generation" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI for Lead Generation
                                </Link>
                            </li>
                            <li>
                                <Link href="/#ai-customer-support" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI for Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/#ai-social-media-management" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI for Social Media
                                </Link>
                            </li>
                            <li>
                                <Link href="/#ai-inbox-management" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI for Inbox Management
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/partners" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/ai-employees-transforming-small-business" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Employees Guide
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                        © 2025 Adam Laboratory Inc. All rights reserved.
                    </p>
                    <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-slate-400'}`}>
                        Dooza.ai is a product of Adam Laboratory Inc., a Delaware corporation.
                    </p>
                    <div className={`flex space-x-6 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
                        <a 
                            href="https://twitter.com/sibinarendran" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Follow us on Twitter"
                            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary-600'}`}
                        >
                            <Twitter size={20} />
                        </a>
                        <a 
                            href="https://linkedin.com/company/dooza" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Follow us on LinkedIn"
                            className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary-600'}`}
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
