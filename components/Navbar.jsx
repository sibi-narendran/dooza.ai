'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Calendar, ChevronDown, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { getProductSignupUrl, getProductSigninUrl } from '@/lib/links';
import { trackDemoClick, trackSignupClick } from '@/lib/analytics';
import { useBookingModal } from '@/components/BookingModalProvider';

const PRODUCT_ROUTES = ['/', '/workforce'];

const isProductRoute = (pathname) => (
    PRODUCT_ROUTES.includes(pathname)
    || pathname?.startsWith('/agents/')
);

const Navbar = ({ variant = 'light', loginUrl, signupUrl, signupLabel, showLogin = true, showIndustry = true, ctaType = 'signup', ctaSource = 'navbar' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const dropdownRef = useRef(null);
    const industriesDropdownRef = useRef(null);
    const industryScrollerRef = useRef(null);
    const { openModal } = useBookingModal();
    const pathname = usePathname();

    const isDark = variant === 'dark';
    const solidNav = scrolled || isOpen;
    const productPage = isProductRoute(pathname);
    const isDemoCta = productPage ? ctaType === 'demo' : true;
    const ctaLabel = productPage
        ? signupLabel || (isDemoCta ? 'Speak to Founder' : 'Get Started')
        : 'Book a Demo';

    const handleDemoClick = () => {
        openModal();
        trackDemoClick(ctaSource);
    };

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
            if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
                setIndustriesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside, { passive: true });
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    const products = [
        { name: 'Dooza Workforce', href: '/workforce' },
        { name: 'Dooza Agents', href: '/' },
    ];

    const industries = [
        { name: 'Salons & Beauty', detail: 'Bookings and calls', href: '/industries/salons', image: '/blog/ai-receptionist-for-salons.png' },
        { name: 'Trades', detail: 'Calls, leads and scheduling', href: '/industries/trades', image: '/industries/home-services-ai-automation.png' },
        { name: 'Real Estate', detail: 'Lead follow-up', href: '/industries/real-estate', image: '/blog/ai-for-real-estate-agents.png' },
        { name: 'Truck Dispatchers', detail: 'Calls and operations', href: '/industries/dispatchers', image: '/industries/truck-dispatch-ai-employee.png' },
        { name: 'Insurance', detail: 'Quotes and renewals', href: '/industries/insurance-agents', image: '/blog/liberate-alternative-insurance-agencies.png' },
        { name: 'Law Firms', detail: 'Intake and follow-up', href: '/industries/law-firms', image: '/blog/ai-legal-assistant.png' },
        { name: 'Customer Support', detail: 'Support at scale', href: '/industries/customer-support', image: '/industries/customer-support-ai-employee.png' },
    ];

    const scrollIndustries = (direction) => {
        industryScrollerRef.current?.scrollBy({
            left: direction * 420,
            behavior: 'smooth',
        });
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${solidNav
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
                                    onClick={() => {
                                        setProductsOpen(!productsOpen);
                                        setIndustriesOpen(false);
                                    }}
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

                            {showIndustry && (
                                <div className="relative" ref={industriesDropdownRef}>
                                    <button
                                        onClick={() => {
                                            setIndustriesOpen(!industriesOpen);
                                            setProductsOpen(false);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Escape') setIndustriesOpen(false);
                                        }}
                                        aria-expanded={industriesOpen}
                                        aria-haspopup="true"
                                        aria-controls="industries-dropdown"
                                        aria-label="Industry menu"
                                        className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${isDark
                                            ? 'text-gray-300 hover:text-white'
                                            : 'text-slate-600 hover:text-primary-600'
                                            }`}
                                    >
                                        Industry
                                        <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {industriesOpen && (
                                        <div
                                            id="industries-dropdown"
                                            role="menu"
                                            className={`fixed left-1/2 top-[4.25rem] w-[min(900px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border p-4 shadow-2xl md:p-5 ${isDark
                                                ? 'bg-[#12121a] border-white/10'
                                                : 'bg-white border-slate-100'
                                            }`}
                                        >
                                            <div className="mb-4 flex items-start justify-between gap-4">
                                                <div>
                                                    <p className={`text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                                        Built for your industry
                                                    </p>
                                                    <p className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                                                        See how an AI employee fits the way your business works.
                                                    </p>
                                                </div>
                                                <div className="flex shrink-0 gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => scrollIndustries(-1)}
                                                        aria-label="Scroll industries left"
                                                        className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${isDark
                                                            ? 'border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                                                            : 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                                            }`}
                                                    >
                                                        <ChevronLeft className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => scrollIndustries(1)}
                                                        aria-label="Scroll industries right"
                                                        className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${isDark
                                                            ? 'border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                                                            : 'border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                                            }`}
                                                    >
                                                        <ChevronRight className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                ref={industryScrollerRef}
                                                className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                                            >
                                                {industries.map((industry) => (
                                                    <Link
                                                        key={industry.name}
                                                        href={industry.href}
                                                        role="menuitem"
                                                        onClick={() => setIndustriesOpen(false)}
                                                        className={`group relative h-44 w-48 shrink-0 snap-start overflow-hidden rounded-xl border ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                                                    >
                                                        <Image
                                                            src={industry.image}
                                                            alt=""
                                                            fill
                                                            sizes="192px"
                                                            className="object-cover transition duration-500 group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                                                        <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                                                            <p className="text-sm font-semibold leading-tight">{industry.name}</p>
                                                            <p className="mt-1 text-xs text-white/70">{industry.detail}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            <div className={`mt-3 flex items-center justify-between gap-3 border-t pt-3 ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                                                <div className="flex items-center gap-4">
                                                    <Link
                                                        href="/ai-receptionist"
                                                        onClick={() => setIndustriesOpen(false)}
                                                        className={`text-sm font-semibold transition-colors ${isDark ? 'text-primary-300 hover:text-white' : 'text-primary-700 hover:text-primary-900'}`}
                                                    >
                                                        AI Receptionist
                                                    </Link>
                                                    <Link
                                                        href="/generative-engine-optimization"
                                                        onClick={() => setIndustriesOpen(false)}
                                                        className={`text-sm font-semibold transition-colors ${isDark ? 'text-primary-300 hover:text-white' : 'text-primary-700 hover:text-primary-900'}`}
                                                    >
                                                        GEO Services
                                                    </Link>
                                                    <Link
                                                        href="/ai-solutions-for-business"
                                                        onClick={() => setIndustriesOpen(false)}
                                                        className={`text-sm font-semibold transition-colors ${isDark ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                                                    >
                                                        Other solutions
                                                    </Link>
                                                </div>
                                                <Link
                                                    href="/industries"
                                                    onClick={() => setIndustriesOpen(false)}
                                                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isDark
                                                        ? 'bg-white text-black hover:bg-gray-100'
                                                        : 'bg-primary-700 text-white hover:bg-primary-800'
                                                        }`}
                                                >
                                                    View all industries
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

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
                        {showLogin && (
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
                        )}
                        {isDemoCta ? (
                            <button
                                type="button"
                                onClick={handleDemoClick}
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 ${isDark
                                    ? 'bg-white text-black hover:bg-gray-100'
                                    : 'bg-primary-700 text-white hover:bg-primary-800'
                                    }`}
                            >
                                <Calendar className="h-4 w-4" />
                                {ctaLabel}
                            </button>
                        ) : (
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
                                {ctaLabel}
                            </a>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
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
                <div
                    id="mobile-menu"
                    className={`md:hidden absolute left-0 right-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain shadow-xl ${isDark
                    ? 'bg-[#12121a] border-t border-white/10'
                    : 'bg-white border-t border-slate-100'
                    }`}
                >
                    <div className="px-4 pt-2 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] space-y-2">
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

                        {showIndustry && (
                            <>
                                <div className="flex items-center justify-between px-3 py-2">
                                    <div className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-slate-400'}`}>
                                        Industry
                                    </div>
                                    <Link
                                        href="/industries"
                                        onClick={() => setIsOpen(false)}
                                        className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-primary-700'}`}
                                    >
                                        View all
                                    </Link>
                                </div>
                                <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    {industries.map((industry) => (
                                        <Link
                                            key={industry.name}
                                            href={industry.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`relative h-36 w-40 shrink-0 snap-start overflow-hidden rounded-xl border ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                                        >
                                            <Image
                                                src={industry.image}
                                                alt=""
                                                fill
                                                sizes="160px"
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                                                <p className="text-sm font-semibold leading-tight">{industry.name}</p>
                                                <p className="mt-1 text-[11px] text-white/70">{industry.detail}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/ai-receptionist"
                                    onClick={() => setIsOpen(false)}
                                    className={`mx-3 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold ${isDark
                                        ? 'bg-primary-500/15 text-white'
                                        : 'bg-primary-50 text-primary-800'
                                        }`}
                                >
                                    AI Receptionist
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/generative-engine-optimization"
                                    onClick={() => setIsOpen(false)}
                                    className={`mx-3 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold ${isDark
                                        ? 'bg-primary-500/15 text-white'
                                        : 'bg-primary-50 text-primary-800'
                                        }`}
                                >
                                    GEO Services
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/ai-solutions-for-business"
                                    onClick={() => setIsOpen(false)}
                                    className={`mx-3 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold ${isDark
                                        ? 'bg-white/5 text-white'
                                        : 'bg-slate-100 text-slate-900'
                                        }`}
                                >
                                    Other solutions
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </>
                        )}

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
                        {showLogin && (
                            <a
                                href={loginUrl || getProductSigninUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className={`block w-full text-center px-3 py-3 text-base font-medium rounded-lg ${isDark
                                    ? 'text-gray-300 hover:bg-white/5'
                                    : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                Login
                            </a>
                        )}
                        {isDemoCta ? (
                            <button
                                type="button"
                                onClick={() => {
                                    setIsOpen(false);
                                    handleDemoClick();
                                }}
                                className={`flex w-full items-center justify-center gap-2 px-3 py-3 rounded-lg text-base font-medium ${isDark
                                    ? 'bg-white text-black'
                                    : 'bg-primary-600 text-white'
                                    }`}
                            >
                                <Calendar className="h-4 w-4" />
                                {ctaLabel}
                            </button>
                        ) : (
                            <a
                                href={signupUrl || getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    setIsOpen(false);
                                    trackSignupClick('navbar_mobile');
                                }}
                                className={`block w-full text-center px-3 py-3 rounded-lg text-base font-medium ${isDark
                                    ? 'bg-white text-black'
                                    : 'bg-primary-600 text-white'
                                    }`}
                            >
                                {ctaLabel}
                            </a>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
