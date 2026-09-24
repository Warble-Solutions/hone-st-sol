'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Pillar {
  letter: string;
  word: string;
  summary: string;
  impact: string;
  focus: string;
}

const pillars: Pillar[] = [
  {
    letter: 'H',
    word: 'Harmonizing',
    summary: 'Harmonizing opportunities across markets and organizational tiers',
    impact: 'Bridges strategic boardroom goals with everyday frontline operations to remove friction and misalignment',
    focus: 'Strategic Alignment'
  },
  {
    letter: 'O',
    word: 'Opportunities',
    summary: 'Unlocking hidden growth levers for enterprises and individuals',
    impact: 'Identifies untapped potential in team capabilities, market positioning, and process standardization',
    focus: 'Growth Enablement'
  },
  {
    letter: 'N',
    word: 'Nurturing',
    summary: 'Continuous talent development and experiential mentorship',
    impact: 'Replaces passive slide-deck training with interactive roleplays, experiential labs, and behavioral coaching',
    focus: 'Capability Building'
  },
  {
    letter: 'E',
    word: 'Enhancing',
    summary: 'Enhancing workforce productivity and executive composure',
    impact: 'Applies time-tested Bhagavad Gita decision frameworks to eliminate hesitation and executive burnout',
    focus: 'Workforce Efficiency'
  },
  {
    letter: 'S',
    word: 'Synergies',
    summary: 'Aligning leadership vision with operational reality',
    impact: 'Fosters cross-functional teamwork so multidisciplinary teams execute with shared rhythm and purpose',
    focus: 'Cross-Team Synergy'
  },
  {
    letter: 'T',
    word: 'Transforming',
    summary: 'Transforming organizations and individuals into industry leaders',
    impact: 'Delivers measurable turnaround in corporate culture, customer retention, and sustainable expansion',
    focus: 'Lasting Transformation'
  }
];

export default function PhilosophyMatrix() {
  const [activeLetter, setActiveLetter] = useState('H');
  const currentPillar = pillars.find((p) => p.letter === activeLetter) || pillars[0];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef4ee] text-[#e16922] text-xs font-bold uppercase tracking-wider border border-[#e16922]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Hone ST Foundation &bull; Together We Can Make a Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
            &ldquo;What Mind Can Conceive Man Can Achieve&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Germination of an idea in the year 2018 has resulted in adding value to 75+ organizations and 25,000+ individuals. This has been made possible by countless boardroom strategies executed on the ground, training and mentoring of the workforce spanning over 100 years resulting in experience, expertise, empathy and exuberance which results in building highly productive teams and great places to work! Guided by our principle that <strong className="text-slate-900 font-semibold">&ldquo;Together We Can Make a Difference&rdquo;</strong>.
          </p>
        </div>

        {/* Asymmetric 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Acronym Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e16922]">
                Interactive Blueprint
              </span>
              <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">
                Explore the H-O-N-E-S-T Acronym
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Click any letter to reveal how our operational philosophy transforms corporate teams and individual leaders
              </p>
            </div>

            {/* Vertical Selector List */}
            <div className="space-y-2 pt-2">
              {pillars.map((item) => {
                const isActive = item.letter === activeLetter;
                return (
                  <button
                    key={item.letter}
                    onClick={() => setActiveLetter(item.letter)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#e16922] shadow-md shadow-orange-500/5'
                        : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl font-display font-black text-base flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#e16922] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.letter}
                      </div>
                      <div>
                        <span className={`text-sm font-display font-bold block ${
                          isActive ? 'text-[#e16922]' : 'text-slate-900'
                        }`}>
                          {item.word}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                          {item.focus}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#e16922] translate-x-0.5' : 'text-slate-300'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Pillar Spotlight Stage */}
          <div className="lg:col-span-7 flex">
            <div className="w-full p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-5">
                {/* Pillar Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-display font-black text-[#e16922]">
                      {currentPillar.letter}
                    </span>
                    <div>
                      <h4 className="text-xl font-display font-black text-slate-900">
                        {currentPillar.word}
                      </h4>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Operational Pillar
                      </span>
                    </div>
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-[#fef4ee] text-[#e16922] text-xs font-bold border border-[#e16922]/30">
                    {currentPillar.focus}
                  </span>
                </div>

                {/* Narrative Description */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Foundational Purpose
                    </span>
                    <p className="text-lg text-slate-800 font-semibold leading-relaxed">
                      {currentPillar.summary}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Practical Boardroom &amp; Individual Impact
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {currentPillar.impact}
                    </p>
                  </div>
                </div>

                {/* Direct Proof Points */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>Tested across 75+ corporate organizations and startups in India</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>Backed by 100+ years of collective boardroom leadership experience</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>Continuous mentoring delivered at Ahmedabad Training Hub and on-site</span>
                  </div>
                </div>
              </div>

              {/* Bottom Jump Link */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Ready to transform your organizational trajectory?
                </span>
                <Link
                  href="/#contact-help"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#e16922] hover:text-[#c95919] uppercase tracking-wider"
                >
                  <span>Connect With Advisors</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
