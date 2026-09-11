'use client';

import React from 'react';
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const comparisonPoints = [
  {
    category: 'Consulting Methodology',
    traditional: 'Theoretical slide decks and generic framework templates that leave internal teams confused.',
    honest: 'Hands-on boardroom execution. We work side-by-side with promoters until SOPs run autonomously.',
  },
  {
    category: 'Leadership Grounding',
    traditional: 'Faddish western management buzzwords with zero philosophical durability or emotional balance.',
    honest: 'Grounded in Chapter 18 of the Shrimad Bhagavad Gita ("Discover the Arjuna in You") for unshakeable poise.',
  },
  {
    category: 'Digital & AI Technology',
    traditional: 'Outsourced junior development teams delivering bloated legacy CMS templates and slow sites.',
    honest: 'Dedicated AI & Next.js agency engineering autonomous AI agents and Generative Engine Optimization (GEO/AEO).',
  },
  {
    category: 'Training Architecture',
    traditional: 'Boring classroom lectures that fail to change frontline corporate habits or generate sales.',
    honest: 'Rigorous Training Need Identification (TNI) paired with experiential simulations at our Ahmedabad Hub.',
  },
  {
    category: 'Social Impact & Purpose',
    traditional: 'Performative corporate social responsibility with little tangible community empowerment.',
    honest: '100% Free weekly Sanskrit chanting for all ages + 50% book royalties directly funding girls\u2019 education.',
  },
];

export default function ComparisonMatrixV2() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#e16922] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The HoneST Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Why Forward-Thinking Enterprises Choose Us.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            See how our integrated approach delivers measurable business turnaround where traditional consulting firms fail.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-100/80 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 p-4 sm:px-8">
            <div className="md:col-span-3 text-slate-700">Strategic Dimension</div>
            <div className="md:col-span-4 text-slate-500 hidden md:block">Traditional Consulting Firms</div>
            <div className="md:col-span-5 text-[#e16922] hidden md:block">The HoneST Method</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonPoints.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:px-8 items-center hover:bg-slate-50/60 transition-colors"
              >
                {/* Category */}
                <div className="md:col-span-3">
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900">
                    {item.category}
                  </h4>
                </div>

                {/* Traditional */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                {/* HoneST */}
                <div className="md:col-span-5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium bg-orange-50/50 md:bg-transparent p-3 md:p-0 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#e16922] shrink-0 mt-0.5" />
                  <span>{item.honest}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner inside Card */}
          <div className="p-6 sm:px-8 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-display font-bold text-slate-900 text-base">
                Ready to experience hands-on executive turnaround?
              </h5>
              <p className="text-xs text-slate-500 mt-0.5">
                Schedule a confidential 45-minute diagnostic session with our senior practice partners.
              </p>
            </div>

            <Link
              href="/#contact-cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider transition-transform hover:scale-102 shadow-sm shrink-0"
            >
              <span>Book Strategy Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
