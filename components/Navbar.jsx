'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getProductSignupUrl, getProductSigninUrl } from '@/lib/links';
import { trackSignupClick } from '@/lib/analytics';

const Navbar = ({ variant = 'light', loginUrl, signupUrl, signupLabel }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [agentsOpen, setAgentsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const agentsDropdownRef = useRef(null);

    const isDark = variant === 'dark';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProductsOpen(false);
            }
            if (agentsDropdownRef.current && !agentsDropdownRef.current.contains(event.target)) {
                setAgentsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside, { passive: true });
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const products = [
        { name: 'Workforce', href: '/' },
        { name: 'Studio', href: '/studio', comingSoon: true },
    ];

    const agents = [
        { name: 'Ranky — AI Visibility', href: '/agents/ranky' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? isDark
                ? 'bg-[#0a0a0f] md:bg-[#0a0a0f]/90 md:backdrop-blur-md shadow-lg shadow-black/20 py-3'
                : 'bg-white md:bg-white/90 md:backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
            }`}>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
            >
                Skip to main content
            </a>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <Image src="/logo.png" alt="Dooza" className="rounded-lg" width={32} height={32} />
                            <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Dooza
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center space-x-8">
                            {/* Products Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setProductsOpen(!productsOpen)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Escape') setProductsOpen(false);
                                    }}
                                    aria-expanded={productsOpen}
                                    aria-haspopup="true"
                                    aria-controls="products-dropdown"
                                    aria-label="Products menu"
                                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${isDark
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-slate-600 hover:text-primary-600'
                                        }`}
                                >
                                    Products
                                    <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {productsOpen && (
                                    <div
                                        id="products-dropdown"
                                        role="menu"
                                        className={`absolute top-full left-0 mt-2 min-w-[180px] rounded-xl shadow-xl border overflow-hidden ${isDark
                                            ? 'bg-[#12121a] border-white/10'
                                            : 'bg-white border-slate-100'
                                        }`}
                                    >
                                        <div className="py-2">
                                            {products.map((product) => (
                                                <Link
                                                    key={product.name}
                                                    href={product.href}
                                                    role="menuitem"
                                                    onClick={() => setProductsOpen(false)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Escape') setProductsOpen(false);
                                                    }}
                                                    className={`block px-4 py-2.5 text-[15px] font-medium transition-colors ${isDark
                                                        ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                                        }`}
                                                >
                                                    {product.name}
                                                    {product.comingSoon && (
                                                        <span className="ml-2 text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-primary-100 text-primary-600">
                                                            Soon
                                                        </span>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Agents Dropdown */}
                            <div className="relative" ref={agentsDropdownRef}>
                                <button
                                    onClick={() => setAgentsOpen(!agentsOpen)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Escape') setAgentsOpen(false);
                                    }}
                                    aria-expanded={agentsOpen}
                                    aria-haspopup="true"
                                    aria-controls="agents-dropdown"
                                    aria-label="Agents menu"
                                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${isDark
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-slate-600 hover:text-primary-600'
                                        }`}
                                >
                                    Agents
                                    <ChevronDown className={`w-4 h-4 transition-transform ${agentsOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {agentsOpen && (
                                    <div
                                        id="agents-dropdown"
                                        role="menu"
                                        className={`absolute top-full left-0 mt-2 min-w-[200px] rounded-xl shadow-xl border overflow-hidden ${isDark
                                            ? 'bg-[#12121a] border-white/10'
                                            : 'bg-white border-slate-100'
                                        }`}
                                    >
                                        <div className="py-2">
                                            {agents.map((agent) => (
                                                <Link
                                                    key={agent.name}
                                                    href={agent.href}
                                                    role="menuitem"
                                                    onClick={() => setAgentsOpen(false)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Escape') setAgentsOpen(false);
                                                    }}
                                                    className={`block px-4 py-2.5 text-[15px] font-medium transition-colors ${isDark
                                                        ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                                        }`}
                                                >
                                                    {agent.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/pricing"
                                className={`text-[15px] font-medium transition-colors ${isDark
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-slate-600 hover:text-primary-600'
                                    }`}
                            >
                                Pricing
                            </Link>

                            <Link
                                href="/partners"
                                className={`text-[15px] font-medium transition-colors ${isDark
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-slate-600 hover:text-primary-600'
                                    }`}
                            >
                                Partners
                            </Link>

                            <Link
                                href="/blog"
                                className={`text-[15px] font-medium transition-colors ${isDark
                                    ? 'text-gray-300 hover:text-white'
                                    : 'text-slate-600 hover:text-primary-600'
                                    }`}
                            >
                                Blog
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href={loginUrl || getProductSigninUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-[15px] font-medium transition-colors ${isDark
                                ? 'text-gray-300 hover:text-white'
                                : 'text-slate-600 hover:text-primary-600'
                                }`}
                        >
                            Login
                        </a>
                        <a
                            href={signupUrl || getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackSignupClick('navbar')}
                            className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 ${isDark
                                ? 'bg-white text-black hover:bg-gray-100'
                                : 'bg-slate-900 text-white hover:bg-slate-800'
                                }`}
                        >
                            {signupLabel || 'Get Started'}
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            className={`tap-target -mr-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden absolute w-full shadow-xl ${isDark
                    ? 'bg-[#12121a] border-t border-white/10'
                    : 'bg-white border-t border-slate-100'
                    }`}>
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {/* Mobile Products Section */}
                        <div className={`px-3 py-2 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-slate-400'}`}>
                            Products
                        </div>
                        {products.map((product) => (
                            <Link
                                key={product.name}
                                href={product.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-lg font-medium ${isDark
                                    ? 'text-gray-300 hover:bg-white/5'
                                    : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {product.name}
                                {product.comingSoon && (
                                    <span className="ml-2 text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-primary-100 text-primary-600">
                                        Soon
                                    </span>
                                )}
                            </Link>
                        ))}

                        <div className={`my-2 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}></div>

                        {/* Mobile Agents Section */}
                        <div className={`px-3 py-2 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-slate-400'}`}>
                            Agents
                        </div>
                        {agents.map((agent) => (
                            <Link
                                key={agent.name}
                                href={agent.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-lg font-medium ${isDark
                                    ? 'text-gray-300 hover:bg-white/5'
                                    : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {agent.name}
                            </Link>
                        ))}

                        <div className={`my-2 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}></div>

                        <Link
                            href="/pricing"
                            onClick={() => setIsOpen(false)}
                            className={`block w-full text-center px-3 py-3 text-base font-medium rounded-lg ${isDark
                                ? 'text-gray-300 hover:bg-white/5'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/partners"
                            onClick={() => setIsOpen(false)}
                            className={`block w-full text-center px-3 py-3 text-base font-medium rounded-lg ${isDark
                                ? 'text-gray-300 hover:bg-white/5'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Partners
                        </Link>
                        <Link
                            href="/blog"
                            onClick={() => setIsOpen(false)}
                            className={`block w-full text-center px-3 py-3 text-base font-medium rounded-lg ${isDark
                                ? 'text-gray-300 hover:bg-white/5'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Blog
                        </Link>
                        <a
                            href={loginUrl || getProductSigninUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block w-full text-center px-3 py-3 text-base font-medium rounded-lg ${isDark
                                ? 'text-gray-300 hover:bg-white/5'
                                : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Login
                        </a>
                        <a
                            href={signupUrl || getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackSignupClick('navbar_mobile')}
                            className={`block w-full text-center px-3 py-3 rounded-lg text-base font-medium ${isDark
                                ? 'bg-white text-black'
                                : 'bg-primary-600 text-white'
                                }`}
                        >
                            {signupLabel || 'Get Started'}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
