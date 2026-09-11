'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'Consulting',
    q: 'What makes HoneST Solutions different from conventional consulting agencies?',
    a: 'We combine 50+ years of collective boardroom C-Suite execution with deep-rooted philosophical wisdom and cutting-edge autonomous AI engineering. We do not leave theoretical slide decks behind — our partners sit in your boardroom, restructure operational SOPs, and establish autonomous systems within 90 days.',
  },
  {
    category: 'Gita Leadership',
    q: 'How does the "Discover the Arjuna in You" program transform corporate decision-making?',
    a: 'Rooted in Chapter 18 of the Shrimad Bhagavad Gita and designed by author Mr. Prasun Kundu, this acclaimed program addresses the root causes of executive delusion, hesitation, and cognitive burnout. It gives leaders a 700-shloka scientific framework for emotional equanimity and decisive boardroom action under intense pressure.',
  },
  {
    category: 'Gita Leadership',
    q: 'Are the Sunday Bhagavad Gita chanting sessions truly 100% free of charge?',
    a: 'Yes, absolutely. In accordance with our founding philosophy and ethical mission, all Sunday in-person Gita chanting sessions held at our Ahmedabad State-of-the-Art Training Centre are completely free of charge for children, students, youth, and corporate executives.',
  },
  {
    category: 'Digital & AI',
    q: 'Can our company engage HoneST Solutions strictly for Autonomous AI Agents and Digital Platforms?',
    a: 'Yes! Our Digital Solutions vertical operates as an agile modern agency. We engineer custom autonomous workflow agents, high-speed Next.js web applications, and spearhead Generative Engine Optimization (GEO/AEO) for modern search visibility on ChatGPT, Perplexity, and Google AI Overviews.',
  },
  {
    category: 'Training',
    q: 'How does your Training Need Identification (TNI) corporate methodology work?',
    a: 'Before any workshop is scheduled, our faculty conducts diagnostic interviews with department heads to identify exact behavioral and operational bottlenecks. We then construct experiential simulation curriculums tailored specifically to your company’s sales, negotiation, and teamwork KPIs.',
  },
  {
    category: 'Social Impact',
    q: 'Where do book royalties and charitable contributions go?',
    a: '50% of all royalties from "The Corporate Bhagavad Gita — Discover the Arjuna in You" and related publications are donated directly to trusted charities funding the education and welfare of underprivileged girls in India.',
  },
];

export default function FAQSectionV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#e16922] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Everything You Need to Know.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Direct answers regarding our executive consulting, Gita leadership programs, training hub, and digital engineering.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#e16922]/40 shadow-md shadow-orange-950/5 ring-1 ring-[#e16922]/20'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#e16922] bg-orange-50 px-2.5 py-0.5 rounded-full shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-950">
                      {faq.q}
                    </h3>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#e16922] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pre-Footer Quick Jump Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-slate-900 text-lg">
              Have a specific institutional or corporate query?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Reach out directly to our Ahmedabad headquarters for customized program proposals.
            </p>
          </div>

          <Link
            href="/#contact-cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider transition-transform hover:scale-102 shadow-sm shrink-0"
          >
            <span>Ask Our Partners</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
