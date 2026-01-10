import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = ({ variant = 'light' }) => {
    const isDark = variant === 'dark';

    return (
        <footer className={`pt-16 pb-8 ${
            isDark 
                ? 'bg-[#0a0a0f] border-t border-white/5' 
                : 'bg-white border-t border-slate-100'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Dooza" className="w-8 h-8 rounded-lg" />
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-primary-600'}`}>
                            Dooza
                        </span>
                    </div>
                    <p className={`text-sm max-w-xs text-center md:text-left ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                        Build, grow, and scale your business with AI-powered solutions.
                    </p>
                </div>

                {/* Links */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Sidekick
                                </a>
                            </li>
                            <li>
                                <a href="/agent-builder" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Agent Builder
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/partners" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Partners
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/blog" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/blog/ai-employees-transforming-small-business" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    AI Employees Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>
                        © {new Date().getFullYear()} Dooza. All rights reserved.
                    </p>
                    <div className={`flex space-x-6 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
                        <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary-600'}`}>
                            <Twitter size={20} />
                        </a>
                        <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary-600'}`}>
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary-600'}`}>
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
