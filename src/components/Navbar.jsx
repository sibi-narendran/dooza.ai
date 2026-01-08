import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { getProductSignupUrl, getProductSigninUrl } from '../constants/links';

const Navbar = ({ openModal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <a href="/" className="flex-shrink-0 flex items-center gap-2">
                            <img src="/logo.png" alt="Dooza" className="w-8 h-8 rounded-lg" />
                            <span className="text-xl font-bold text-slate-900 tracking-tight">Dooza</span>
                        </a>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="/partners" className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Partners</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a href={getProductSigninUrl('intern')} className="text-[15px] font-medium text-slate-600 hover:text-primary-600 transition-colors">Login</a>
                        <a href={getProductSignupUrl('intern')} className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                            Create free account
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-4">
                        <a href="/partners" className="block w-full text-center px-3 py-3 text-base font-medium text-slate-600">Partners</a>
                        <a href={getProductSigninUrl('intern')} className="block w-full text-center px-3 py-3 text-base font-medium text-slate-600">Login</a>
                        <a href={getProductSignupUrl('intern')} className="block w-full text-center bg-primary-600 text-white px-3 py-3 rounded-lg text-base font-medium">
                            Create free account
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
