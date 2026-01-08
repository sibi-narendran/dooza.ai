import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Dooza" className="w-8 h-8 rounded-lg" />
                        <span className="text-2xl font-bold text-primary-600">Dooza</span>
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                        AI Employees That Never Sleep. Build, grow, and scale your business with a team of AI employees.
                    </p>
                </div>
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Dooza. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-slate-400">
                        <a href="#" className="hover:text-primary-600"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-primary-600"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-primary-600"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
