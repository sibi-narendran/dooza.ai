'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQItem({ item, index }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentId = `faq-content-${index}`;

    return (
        <div className="bg-white rounded-2xl border border-violet-50 hover:border-violet-100 transition-all card-shadow overflow-hidden">
            <button
                id={`faq-btn-${index}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <h3 className="font-bold text-slate-900 text-lg font-serif pr-4">{item.question}</h3>
                <div className={`shrink-0 faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                </div>
            </button>
            <div id={contentId} role="region" aria-labelledby={`faq-btn-${index}`} className={`faq-content ${isOpen ? 'open' : ''}`}>
                <div>
                    <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed">
                            {item.answer}
                            {item.links && item.links.map((link, i) => (
                                <span key={i}> <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">{link.text}</a>.</span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FAQAccordion({ items }) {
    return (
        <div className="space-y-4">
            {items.map((item, idx) => (
                <FAQItem key={idx} item={item} index={idx} />
            ))}
        </div>
    );
}
