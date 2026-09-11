'use client';

import React, { useState } from 'react';
import { Star, Quote, Sparkles, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Testimonial {
  id: string;
  category: 'all' | 'gita' | 'business' | 'digital';
  name: string;
  role: string;
  org: string;
  location: string;
  quote: string;
  impactMetric: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    category: 'gita',
    name: 'Rajesh Shah',
    role: 'Managing Director',
    org: 'Industrial Engineering Group',
    location: 'Ahmedabad',
    quote: 'The "Discover the Arjuna in You" program completely recalibrated how our executive board navigates crisis. Mr. Prasun Kundu decodes Chapter 18 not as esoteric philosophy, but as actionable corporate warfare strategy.',
    impactMetric: 'Zero Executive Delusion & 100% Board Cohesion',
  },
  {
    id: '2',
    category: 'business',
    name: 'Anand Patel',
    role: 'Co-Founder & CEO',
    org: 'Leading Chemical Manufacturing Corp',
    location: 'Vadodara / Ahmedabad',
    quote: 'We were trapped in founder-dependency for 8 years. HoneST Solutions redesigned our departmental SOPs in 90 days. Our operational throughput jumped 42% while allowing me to focus on strategic mergers.',
    impactMetric: '42% Throughput Jump in 90 Days',
  },
  {
    id: '3',
    category: 'digital',
    name: 'Vikram Mehta',
    role: 'Chief Technology Officer',
    org: 'Enterprise Logistics & Supply Chain',
    location: 'Gujarat',
    quote: 'HoneST engineered custom autonomous AI agents that automated 60% of our manual invoice reconciliation and client routing. Their understanding of modern Next.js and Generative Engine Search is world-class.',
    impactMetric: '60% Operational Overhead Reduction',
  },
  {
    id: '4',
    category: 'gita',
    name: 'Sneha Trivedi',
    role: 'VP — Human Resources',
    org: 'National Banking & Financial Services',
    location: 'Ahmedabad',
    quote: 'Attending the AMA sessions and Sunday chanting with Prasun Sir restored emotional resilience across our management tier. Highly recommended for any organization dealing with executive burnout.',
    impactMetric: '85% Drop in Executive Stress Metrics',
  },
  {
    id: '5',
    category: 'business',
    name: 'Deepak Desai',
    role: 'Founder & Chairman',
    org: 'FMCG & Retail Distribution Network',
    location: 'Surat',
    quote: 'Unlike typical consulting agencies that pitch fancy presentations, HoneST leadership sat in our boardroom every week, held department heads accountable, and restructured our unit economics.',
    impactMetric: '3.4x Net Margin Expansion',
  },
];

const categories = [
  { id: 'all', label: 'All Verified Stories' },
  { id: 'gita', label: 'Gita Leadership (AMA)' },
  { id: 'business', label: 'Business Strategy & SOPs' },
  { id: 'digital', label: 'AI & Digital Solutions' },
];

export default function TestimonialsV2() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-[#e16922]/20 text-[#e16922] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Executive Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
              Endorsed by Founders, CEOs & C-Suites.
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Read authentic feedback from leaders who transformed operational clarity, boardroom certainty, and digital capability with HoneST Solutions.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200 w-fit">
            {categories.map((c) => {
              const isSelected = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-slate-200/90 bg-slate-50/60 p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 hover:border-slate-300 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e16922] px-2.5 py-0.5 rounded-full bg-orange-100/70">
                    Verified C-Suite
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 space-y-2">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#e16922] shrink-0" />
                  <span className="truncate">{t.impactMetric}</span>
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-sm text-slate-950">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.role}, {t.org} ({t.location})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
