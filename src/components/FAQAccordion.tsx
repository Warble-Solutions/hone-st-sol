'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about our engagement models, timelines, and deliverables." 
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" /> Got Questions?
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-950 tracking-tight">
            {title}
          </h2>
          <p className="text-base text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-300 bg-blue-50/20 shadow-md shadow-blue-500/5' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-900 text-base sm:text-lg cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.q}</span>
                  <div className={`p-2 rounded-full bg-slate-100 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-blue-100/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
