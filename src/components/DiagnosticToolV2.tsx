'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Compass, 
  TrendingUp, 
  Users, 
  Bot, 
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface ChallengeOption {
  id: string;
  title: string;
  desc: string;
  recommendedVertical: string;
  verticalTag: string;
  roadmap: string[];
  ctaLink: string;
  ctaText: string;
}

const challengeOptions: ChallengeOption[] = [
  {
    id: 'leadership',
    title: 'Executive Hesitation & Boardroom Delusion',
    desc: 'High-stakes decisions are delayed, leadership teams suffer from cognitive fatigue or conflicting ethical directions.',
    recommendedVertical: 'Bhagavad Gita Leadership — "Discover the Arjuna in You"',
    verticalTag: 'Leadership Science',
    roadmap: [
      'Decode Chapter 18 framework for executive decision certainty',
      'Eliminate hesitation and cognitive fatigue in leadership teams',
      'Free in-person Sanskrit chanting immersion at Ahmedabad Centre',
    ],
    ctaLink: '/#bhagavad-gita',
    ctaText: 'Enroll in Arjuna Program',
  },
  {
    id: 'sops',
    title: 'Founder-Dependency & Operational Chaos',
    desc: 'The business cannot scale because daily decisions depend 100% on promoters, causing bottlenecks and missed revenue.',
    recommendedVertical: 'Business Solutions — Strategy & SOP Standardization',
    verticalTag: 'Executive Advisory',
    roadmap: [
      'Comprehensive 360-degree operational diagnosis',
      'Design autonomous departmental SOPs within 90 days',
      'C-Suite board advisory and unit-economics optimization',
    ],
    ctaLink: '/#business-solutions',
    ctaText: 'Book Strategy Diagnostic',
  },
  {
    id: 'training',
    title: 'Sales Stagnation & Team Misalignment',
    desc: 'Sales teams struggle with objection handling, frontline staff lack accountability, and cross-functional silos persist.',
    recommendedVertical: 'Corporate Training — TNI-Grounded Experiential Workshops',
    verticalTag: 'Human Capital',
    roadmap: [
      'Conduct rigorous Training Need Identification (TNI)',
      'Deliver experiential simulation offsite at Ahmedabad Hub',
      'Post-training KPI tracking and habit reinforcement',
    ],
    ctaLink: '/#contact-cta',
    ctaText: 'Request TNI Assessment',
  },
  {
    id: 'ai-digital',
    title: 'Outdated Systems & Invisible AI Search Presence',
    desc: 'Manual repetitive workflows, slow legacy websites, and zero visibility on modern AI search engines (ChatGPT, Perplexity, Gemini).',
    recommendedVertical: 'Digital Solutions — Autonomous AI & Generative Search',
    verticalTag: 'AI & Engineering',
    roadmap: [
      'Deploy autonomous AI agents to automate operational workflows',
      'Engineer high-speed Next.js web platforms with rich conversion',
      'Generative Engine Optimization (GEO/AEO) for AI search dominance',
    ],
    ctaLink: '/digital',
    ctaText: 'Explore Digital Hub',
  },
];

const organizationSizes = [
  { id: 'startup', label: 'Start-Up / Emerging', desc: '10–50 Employees' },
  { id: 'midmarket', label: 'Mid-Market / Promoter-Led', desc: '50–500 Employees' },
  { id: 'enterprise', label: 'Enterprise / Corporate', desc: '500+ Employees' },
];

export default function DiagnosticToolV2() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>('leadership');
  const [selectedSize, setSelectedSize] = useState<string>('midmarket');
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  const currentResult = challengeOptions.find((c) => c.id === selectedChallenge) || challengeOptions[0];

  return (
    <section id="diagnostic" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-[#e16922]/20 text-[#e16922] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Growth Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Find Your Strategic Solution in 30 Seconds.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Select your organization&apos;s current bottleneck to generate an immediate executive recommendation and 90-day execution framework.
          </p>
        </div>

        {/* Diagnostic Canvas */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Selectors */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Challenge Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Step 1: Identify Your Primary Operational Bottleneck
                </label>
                <div className="space-y-2.5">
                  {challengeOptions.map((opt) => {
                    const isSelected = selectedChallenge === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedChallenge(opt.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#e16922] shadow-md shadow-[#e16922]/10 ring-2 ring-[#e16922]/20'
                            : 'bg-white/80 hover:bg-white border-slate-200/90 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-sm font-bold ${isSelected ? 'text-slate-950' : 'text-slate-800'}`}>
                            {opt.title}
                          </h4>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-[#e16922] bg-[#e16922]' : 'border-slate-300'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {opt.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Org Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Step 2: Organization Scale
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {organizationSizes.map((size) => {
                    const isSelected = selectedSize === size.id;
                    return (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#e16922] shadow-xs text-slate-950 font-bold'
                            : 'bg-white/70 hover:bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        <p className="text-xs font-bold">{size.label}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{size.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Instant Computed Solution Card */}
            <div className={`lg:col-span-5 bg-white rounded-2xl border-2 ${selectedChallenge === 'ai-digital' ? 'border-[#1e92bf]/50 shadow-[#1e92bf]/10' : 'border-[#e16922]/30 shadow-orange-950/5'} p-6 sm:p-8 shadow-lg space-y-6 transition-all`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${selectedChallenge === 'ai-digital' ? 'bg-[#1e92bf]/10 text-[#1e92bf]' : 'bg-orange-100/80 text-[#e16922]'}`}>
                    Recommended Practice
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    HoneST Result
                  </span>
                </div>

                <h3 className="text-xl font-display font-extrabold text-slate-950 leading-snug">
                  {currentResult.recommendedVertical}
                </h3>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Tailored 90-Day Execution Framework:
                </p>
                <ul className="space-y-2">
                  {currentResult.roadmap.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${selectedChallenge === 'ai-digital' ? 'text-[#1e92bf]' : 'text-[#e16922]'} shrink-0 mt-0.5`} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-800">
                  Ahmedabad Direct Consultation:
                </p>
                <p className="text-[11px] text-slate-500">
                  Discuss this roadmap directly with Mr. Prasun Kundu and senior practice leaders.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href={currentResult.ctaLink}
                  className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full ${selectedChallenge === 'ai-digital' ? 'bg-[#1e92bf] hover:bg-[#177ba3] shadow-[#1e92bf]/20' : 'bg-[#e16922] hover:bg-[#c95919] shadow-[#e16922]/20'} text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-102`}
                >
                  <span>{currentResult.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/#contact-cta"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
                >
                  <span>Request Full Diagnostic Call</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
