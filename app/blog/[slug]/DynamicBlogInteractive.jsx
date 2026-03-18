'use client';

import { useState, useEffect } from 'react';
import BookingModal from '../../../components/BookingModal';

export function TocSidebar({ tocData, children }) {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (tocData.length === 0) return;

        const handleScroll = () => {
            const sectionIds = tocData.map(t => t.id);
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [tocData]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <nav className="space-y-1">
            {tocData.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === item.id
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
}

export function ContentClickHandler({ html }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleContentClick = (e) => {
        const anchor = e.target.closest('a');
        if (anchor && anchor.href && anchor.href.includes('cal.com')) {
            e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    return (
        <>
            <div
                className="prose prose-lg max-w-none
                    prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-28
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-slate-900
                    prose-ul:text-slate-600 prose-ol:text-slate-600
                    prose-li:leading-relaxed
                    prose-blockquote:border-primary-500 prose-blockquote:text-slate-700
                    prose-table:text-slate-600
                    prose-th:text-slate-900 prose-th:font-semibold
                    prose-img:rounded-xl prose-img:shadow-lg"
                onClick={handleContentClick}
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </>
    );
}
