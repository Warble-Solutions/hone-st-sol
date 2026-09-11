'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  BookOpen, 
  Compass, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  MapPin,
  Calendar,
  Heart,
  ChevronRight,
  Cpu,
  Zap,
  Activity,
  Scroll,
  Sun,
  Star,
  Plus,
  Minus
} from 'lucide-react';

// Left Navigation Chapters
const studioChapters = [
  { id: 'hero-intro', num: '00', label: 'Executive Manifesto', subtitle: 'Overview & Ethos' },
  { id: 'bhagavad-gita', num: '01', label: 'Bhagavad Gita Leadership', subtitle: 'Discover the Arjuna in You' },
  { id: 'business-solutions', num: '02', label: 'Business Solutions & SOPs', subtitle: 'Start-Up to Scale-Up' },
  { id: 'corporate-training', num: '03', label: 'Corporate Training (TNI)', subtitle: 'Experiential Workshops' },
  { id: 'digital-solutions', num: '04', label: 'Autonomous AI & Digital', subtitle: 'Next.js & Generative Search' },
  { id: 'books-impact', num: '05', label: 'Publications & CSR', subtitle: '50% Royalties to Girls' },
  { id: 'diagnostic-tool', num: '06', label: 'Growth Diagnostic', subtitle: 'Interactive 30-Sec Assessment' },
  { id: 'client-impact', num: '07', label: 'Executive Endorsements', subtitle: 'Verified AMA & C-Suite Feedback' },
];

export default function StudioSplitLayout() {
  const [activeChapter, setActiveChapter] = useState('hero-intro');
  const [activeGitaTab, setActiveGitaTab] = useState<'moha' | 'karma' | 'nishchay'>('moha');
  const [activeArch, setActiveArch] = useState<'agent' | 'geo' | 'ssr'>('agent');
  const [diagnosticBottleneck, setDiagnosticBottleneck] = useState('decision-paralysis');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scroll Spy for Sticky Left Panel
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const chapterElements = studioChapters.map((c) => ({
        id: c.id,
        el: document.getElementById(c.id),
      }));

      for (let i = chapterElements.length - 1; i >= 0; i--) {
        const item = chapterElements[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= 260) {
            setActiveChapter(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      
      {/* 2-Column Split Studio Grid */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: FIXED / STICKY STUDIO COMMAND NAVIGATOR */}
          {/* ========================================================= */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
            <div className="sticky top-24 pt-4 pb-8 space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3">
              
              {/* Top Studio Label */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#1e92bf] uppercase bg-[#1e92bf]/10 px-2.5 py-0.5 rounded">
                    STUDIO // V2.0
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">EST. 2018</span>
                </div>
                <h2 className="font-display font-black text-xl text-slate-950 tracking-tight leading-snug">
                  HoneST Solutions
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  50+ Years C-Suite Execution &bull; Shrimad Bhagavad Gita Leadership Science &bull; Autonomous AI & Digital Engineering.
                </p>
              </div>

              {/* Real-Time Interactive Chapter Timeline */}
              <div className="space-y-1 bg-white rounded-2xl border border-slate-200 p-2.5 shadow-2xs">
                <p className="px-3 pt-2 pb-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Interactive Practice Chapters:
                </p>

                {studioChapters.map((ch) => {
                  const isActive = activeChapter === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => scrollToChapter(ch.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? 'bg-[#1e92bf] text-white shadow-sm font-bold'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-[11px] ${isActive ? 'text-cyan-200 font-bold' : 'text-slate-400'}`}>
                          {ch.num}
                        </span>
                        <div className="text-left">
                          <p className="font-display leading-tight">{ch.label}</p>
                          <p className={`text-[10px] ${isActive ? 'text-cyan-100 font-normal' : 'text-slate-400 font-normal'}`}>
                            {ch.subtitle}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'text-white translate-x-1' : 'text-slate-300 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Left Panel Live Stat Widget */}
              <div className="p-4 rounded-2xl bg-[#edf7fb]/70 border border-[#1e92bf]/25 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1e92bf] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1e92bf] animate-ping" />
                    Ahmedabad Active Hub
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">Every Sunday</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  100% Free Weekly Sanskrit Chanting for children, youth, and corporate executives.
                </p>
                <Link
                  href="/#bhagavad-gita"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e16922] hover:underline"
                >
                  <span>View Chanting Immersion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Fast Booking Trigger */}
              <div className="pt-1">
                <Link
                  href="/#contact-cta"
                  className="w-full py-3 px-4 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-[#e16922]/20 hover:scale-102"
                >
                  <span>Book Executive Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT SIDE: FLUID INTERACTIVE STUDIO CANVAS */}
          {/* ========================================================= */}
          <main className="lg:col-span-8 xl:col-span-8 py-8 space-y-20 lg:space-y-28">

            {/* ----------------------------------------------------- */}
            {/* 00 // EXECUTIVE MANIFESTO HERO */}
            {/* ----------------------------------------------------- */}
            <section id="hero-intro" className="scroll-mt-24 space-y-8 pt-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e92bf]/10 border border-[#1e92bf]/25 text-[#1e92bf] text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CHAPTER 00 // EXECUTIVE MANIFESTO</span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-black text-slate-950 tracking-tight leading-[1.05]">
                  Where Ancient Wisdom Meets{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e16922] to-amber-600">
                    Boardroom Precision
                  </span>{' '}
                  &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e92bf] to-cyan-600">
                    AI Automation.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  HoneST Solutions bridges three distinct worlds: the timeless decision science of the <strong>Shrimad Bhagavad Gita</strong>, <strong>50+ years of high-stakes C-Suite boardroom execution</strong>, and <strong>autonomous digital engineering</strong>.
                </p>
              </div>

              {/* Studio Key Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { value: '50+ Yrs', label: 'C-Suite Executive Advisory', accent: 'text-[#e16922]' },
                  { value: '100% Free', label: 'Sunday Gita Chanting', accent: 'text-[#1e92bf]' },
                  { value: '75+ Cos', label: 'Transformed & Scaled', accent: 'text-[#e16922]' },
                  { value: '50% Proceeds', label: 'Donated to Girls’ Education', accent: 'text-rose-600' },
                ].map((m, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <p className={`text-xl sm:text-2xl font-display font-black ${m.accent}`}>
                      {m.value}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mt-1">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Featured Image with Studio Overlay */}
              <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
                  alt="HoneST Solutions Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1e92bf]">
                      Ahmedabad Management Association (AMA)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight mt-1">
                      "Discover the Arjuna in You" by Prasun Kundu
                    </h3>
                  </div>
                  <button
                    onClick={() => scrollToChapter('bhagavad-gita')}
                    className="px-5 py-2.5 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    Enter Chapter 01
                  </button>
                </div>
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 01 // BHAGAVAD GITA LEADERSHIP */}
            {/* ----------------------------------------------------- */}
            <section id="bhagavad-gita" className="scroll-mt-24 space-y-8 border-t border-slate-200 pt-16">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e16922] bg-orange-50 border border-[#e16922]/20 px-3 py-1 rounded-full">
                  CHAPTER 01 // LEADERSHIP SCIENCE
                </span>
                <span className="text-xs font-mono text-slate-400">AMA SIGNATURE PROGRAM</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  Discover the <span className="text-[#e16922]">Arjuna</span> in You.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Decodes Chapter 18 of the Shrimad Bhagavad Gita to solve corporate hesitation, executive anxiety, and moral ambiguity during high-stakes boardroom warfare.
                </p>
              </div>

              {/* Interactive 3-Pillar Switcher */}
              <div className="p-6 rounded-3xl border-2 border-[#e16922]/25 bg-gradient-to-br from-[#fffbf7] via-white to-orange-50/20 space-y-6 shadow-md">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'moha', label: '1. Moha-Nash', sub: 'Conquer Hesitation' },
                    { id: 'karma', label: '2. Nishkama Karma', sub: 'Action Without Burnout' },
                    { id: 'nishchay', label: '3. Nishchay', sub: 'Moral Conviction' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveGitaTab(t.id as any)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeGitaTab === t.id
                          ? 'bg-[#e16922] text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span>{t.label}</span>
                      <span className="opacity-70 ml-1.5 text-[10px]">({t.sub})</span>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#e16922]/20 space-y-3">
                  {activeGitaTab === 'moha' && (
                    <>
                      <blockquote className="text-sm font-semibold text-slate-900 italic border-l-3 border-[#e16922] pl-3 py-0.5">
                        &ldquo;नष्टो मोहः स्मृतिर्लब्धा &mdash; Delusion is destroyed; clarity is restored.&rdquo;
                      </blockquote>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Executives often face decision paralysis when corporate restructuring or market warfare creates emotional fatigue. This module teaches leaders how to strip away cognitive noise and execute with cold objectivity.
                      </p>
                    </>
                  )}
                  {activeGitaTab === 'karma' && (
                    <>
                      <blockquote className="text-sm font-semibold text-slate-900 italic border-l-3 border-[#e16922] pl-3 py-0.5">
                        &ldquo;कर्मण्येवाधिकारस्ते मा फलेषु कदाचन &mdash; You have a right only to action, never to anxiety of results.&rdquo;
                      </blockquote>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        High performance teams burn out when outcome-fixation causes chronic anxiety. Nishkama Karma instills intense focus on execution precision while maintaining complete emotional poise.
                      </p>
                    </>
                  )}
                  {activeGitaTab === 'nishchay' && (
                    <>
                      <blockquote className="text-sm font-semibold text-slate-900 italic border-l-3 border-[#e16922] pl-3 py-0.5">
                        &ldquo;करिष्ये वचनं तव &mdash; I stand resolved; I shall execute without fear.&rdquo;
                      </blockquote>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Authentic leadership requires alignment between ethical values and boardroom directives. This module establishes unwavering moral courage so executives inspire loyalty across all ranks.
                      </p>
                    </>
                  )}
                </div>

                {/* Free Sunday Chanting Card */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#e16922] shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        100% Free Sunday Chanting in Ahmedabad
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Every Sunday, 9:00 AM at our State-of-the-Art Training Centre. Children & adults welcome.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/about#centre"
                    className="px-4 py-2 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white text-xs font-bold transition-colors shadow-xs shrink-0 text-center"
                  >
                    View Centre Location
                  </Link>
                </div>
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 02 // BUSINESS SOLUTIONS & SOPS */}
            {/* ----------------------------------------------------- */}
            <section id="business-solutions" className="scroll-mt-24 space-y-8 border-t border-slate-200 pt-16">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e16922] bg-orange-50 border border-[#e16922]/20 px-3 py-1 rounded-full">
                  CHAPTER 02 // EXECUTIVE ADVISORY
                </span>
                <span className="text-xs font-mono text-slate-400">50+ YRS C-SUITE EXPERTISE</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  From Start-Up to Scale-Up:{' '}
                  <span className="text-[#e16922]">Operational Turnaround.</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  We work side-by-side with promoters, founders, and boards in Ahmedabad and across India to eliminate founder-dependency, design autonomous SOPs, and accelerate profitability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Boardroom Governance',
                    desc: 'C-Suite mentoring and hands-on operational restructuring — zero theoretical decks.',
                  },
                  {
                    title: '90-Day SOP Autonomy',
                    desc: 'Standardizing daily operations so businesses run smoothly without founder micromanagement.',
                  },
                  {
                    title: 'Profit Levers & Margins',
                    desc: 'Unit-economics remodeling that has driven an average 3.4x margin expansion across 75+ firms.',
                  },
                ].map((col, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <span className="text-xs font-mono font-bold text-[#e16922]">0{idx + 1}.</span>
                    <h3 className="font-display font-bold text-base text-slate-950">{col.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{col.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Ready to diagnose your operational bottlenecks?
                </span>
                <Link
                  href="/#contact-cta"
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  Book 45-Min Strategy Session
                </Link>
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 03 // CORPORATE TRAINING (TNI) */}
            {/* ----------------------------------------------------- */}
            <section id="corporate-training" className="scroll-mt-24 space-y-8 border-t border-slate-200 pt-16">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1e92bf] bg-[#1e92bf]/10 border border-[#1e92bf]/25 px-3 py-1 rounded-full">
                  CHAPTER 03 // HUMAN CAPITAL
                </span>
                <span className="text-xs font-mono text-slate-400">100+ YEARS COLLECTIVE FACULTY</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  Experiential TNI Workshops That{' '}
                  <span className="text-[#1e92bf]">Transform Habits.</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Training Need Identification (TNI) based modules tailored to your workforce. Delivered at our Ahmedabad State-of-the-Art Hub or on-site at client corporate headquarters.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Sales Mastery & Assertive Negotiation', audience: 'Frontline & Commercial Teams' },
                  { title: 'Cross-Functional Synergy & Alignment', audience: 'Mid-Management & Department Heads' },
                  { title: 'Executive Presence & Composure', audience: 'VPs, Directors & C-Suite' },
                  { title: 'SOP Compliance & Accountability', audience: 'Operations & Quality Teams' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.audience}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#1e92bf] shrink-0" />
                  </div>
                ))}
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 04 // AUTONOMOUS AI & DIGITAL SOLUTIONS */}
            {/* ----------------------------------------------------- */}
            <section id="digital-solutions" className="scroll-mt-24 space-y-8 border-t border-slate-200 pt-16">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1e92bf] bg-[#1e92bf]/10 border border-[#1e92bf]/25 px-3 py-1 rounded-full">
                  CHAPTER 04 // AI & DIGITAL ENGINEERING
                </span>
                <span className="text-xs font-mono text-slate-400">NEXT-GEN STACK</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  Autonomous AI Agents &{' '}
                  <span className="text-[#1e92bf]">Generative Search (GEO/AEO).</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Our dedicated agency engineers high-speed Next.js platforms, autonomous multi-agent LLM systems, and Generative Engine Optimization for ChatGPT and Perplexity citations.
                </p>
              </div>

              {/* Interactive Architecture Simulator */}
              <div className="rounded-3xl border-2 border-[#1e92bf]/30 bg-gradient-to-br from-[#edf7fb]/40 via-white to-white p-6 sm:p-8 space-y-6 shadow-md">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'agent', label: '1. Autonomous Inbound Agent' },
                    { id: 'geo', label: '2. GEO / AEO Search Engine' },
                    { id: 'ssr', label: '3. Next.js 16 Edge Stack' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveArch(m.id as any)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeArch === m.id
                          ? 'bg-[#1e92bf] text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 font-mono text-xs space-y-2 shadow-inner">
                  {activeArch === 'agent' && (
                    <>
                      <p className="text-emerald-400">&gt; TRIGGER: Inbound client RFP email received</p>
                      <p className="text-slate-300">&gt; AGENT_1: Parsing PDF specifications & requirements</p>
                      <p className="text-slate-300">&gt; AGENT_2: Vector search against internal pgvector knowledge base</p>
                      <p className="text-[#1e92bf]">&gt; ACTION: Draft proposal prepared + deal stage updated in CRM</p>
                      <p className="text-[11px] text-cyan-300 pt-1">✓ Saved 18 hours of manual employee busywork</p>
                    </>
                  )}
                  {activeArch === 'geo' && (
                    <>
                      <p className="text-emerald-400">&gt; INDEX: Schema.org entity graph deployed</p>
                      <p className="text-slate-300">&gt; ENGINE: Perplexity, Claude & ChatGPT citation graphs verified</p>
                      <p className="text-[#1e92bf]">&gt; GOOGLE_AI: Sourced as primary authority in AI Overviews</p>
                      <p className="text-[11px] text-cyan-300 pt-1">✓ +240% qualified organic commercial inquiries</p>
                    </>
                  )}
                  {activeArch === 'ssr' && (
                    <>
                      <p className="text-emerald-400">&gt; FRAMEWORK: Next.js App Router + Turbopack SSR</p>
                      <p className="text-slate-300">&gt; SPEED: Sub-0.4s First Contentful Paint globally</p>
                      <p className="text-[#1e92bf]">&gt; LIGHTHOUSE: 100 Performance &bull; 100 Accessibility &bull; 100 SEO</p>
                      <p className="text-[11px] text-cyan-300 pt-1">✓ Enterprise-grade conversion architecture</p>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <span className="text-xs font-semibold text-slate-600">
                    Need a custom enterprise architecture blueprint?
                  </span>
                  <Link
                    href="/digital"
                    className="px-5 py-2 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    Open Full Digital Hub
                  </Link>
                </div>
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 05 // PUBLICATIONS & CSR IMPACT */}
            {/* ----------------------------------------------------- */}
            <section id="books-impact" className="scroll-mt-24 space-y-8 border-t border-slate-200 pt-16">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                  CHAPTER 05 // PHILANTHROPY & CSR
                </span>
                <span className="text-xs font-mono text-slate-400">50% ROYALTIES TO GIRLS</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  The Corporate Bhagavad Gita &bull;{' '}
                  <span className="text-[#e16922]">Social Purpose.</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Authored by founder Mr. Prasun Kundu. In line with our founding ethics, 50% of all royalties directly support the education and welfare of underprivileged girls in India.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-36 h-48 rounded-xl overflow-hidden bg-slate-200 shadow-md shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop"
                    alt="The Corporate Bhagavad Gita"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e16922] bg-orange-100 px-2.5 py-0.5 rounded-full">
                    Published Work
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-950">
                    The Corporate Bhagavad Gita &mdash; Discover the Arjuna in You
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    18 practical leadership modules translating 700 Sanskrit shlokas into boardroom execution manuals. Also includes illustrated children&apos;s storybooks to impart timeless values early in life.
                  </p>
                  <Link
                    href="/about#csr"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e16922] hover:underline pt-2"
                  >
                    <span>Read About Social Impact Mission</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 06 // INTERACTIVE GROWTH DIAGNOSTIC */}
            {/* ----------------------------------------------------- */}
            <section id="diagnostic-tool" className="scroll-mt-24 space-y-8 border-t border-slate-200 pt-16">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1e92bf] bg-[#1e92bf]/10 border border-[#1e92bf]/25 px-3 py-1 rounded-full">
                  CHAPTER 06 // 30-SEC SELF DIAGNOSTIC
                </span>
                <span className="text-xs font-mono text-slate-400">INSTANT ROADMAP</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  Identify Your Next Growth Milestone.
                </h2>
                <p className="text-slate-600 text-base">
                  Select your primary challenge below to view the customized 90-day execution framework.
                </p>
              </div>

              {/* Interactive Bottleneck Selector */}
              <div className="space-y-3">
                {[
                  {
                    id: 'decision-paralysis',
                    title: 'Executive Hesitation & Cognitive Fatigue',
                    rec: 'Bhagavad Gita Leadership — "Discover the Arjuna in You"',
                    accent: 'border-[#e16922] text-[#e16922]',
                    btnColor: 'bg-[#e16922]',
                    roadmap: ['Chapter 18 Decision Framework', 'Executive Delusion Elimination', 'Sunday Ahmedabad Chanting Immersion'],
                  },
                  {
                    id: 'founder-bottleneck',
                    title: 'Founder-Dependency & Missing SOPs',
                    rec: 'Business Solutions — Strategy & SOP Standardization',
                    accent: 'border-[#1e92bf] text-[#1e92bf]',
                    btnColor: 'bg-[#1e92bf]',
                    roadmap: ['360° Operational Audit', '90-Day Departmental SOP Design', 'Autonomous Handover to Core Leads'],
                  },
                  {
                    id: 'sales-stagnation',
                    title: 'Sales Stagnation & Workforce Silos',
                    rec: 'Corporate Training — TNI-Grounded Workshops',
                    accent: 'border-[#e16922] text-[#e16922]',
                    btnColor: 'bg-[#e16922]',
                    roadmap: ['Rigorous Training Need Identification (TNI)', 'Experiential Simulation at Ahmedabad Centre', 'Post-Training KPI Reinforcement'],
                  },
                  {
                    id: 'digital-ai',
                    title: 'Outdated Legacy Tech & Invisible AI Search',
                    rec: 'Digital Solutions — Autonomous AI & Generative Search',
                    accent: 'border-[#1e92bf] text-[#1e92bf]',
                    btnColor: 'bg-[#1e92bf]',
                    roadmap: ['Autonomous Inbound AI Agent Deployment', 'Next.js 16 Platform Migration', 'Generative Engine Optimization (GEO/AEO)'],
                  },
                ].map((b) => {
                  const isSelected = diagnosticBottleneck === b.id;
                  return (
                    <div
                      key={b.id}
                      onClick={() => setDiagnosticBottleneck(b.id)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? `bg-white ${b.accent} shadow-md ring-2 ring-[#1e92bf]/20`
                          : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                          {b.title}
                        </h3>
                        <span className={`w-3 h-3 rounded-full ${isSelected ? 'bg-[#1e92bf]' : 'bg-slate-300'}`} />
                      </div>

                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                          <p className="text-xs font-bold text-slate-900">
                            Recommended Practice: <span className="text-[#1e92bf]">{b.rec}</span>
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {b.roadmap.map((step, i) => (
                              <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700">
                                ✓ {step}
                              </span>
                            ))}
                          </div>
                          <Link
                            href="/#contact-cta"
                            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${b.btnColor} text-white text-xs font-bold transition-all shadow-xs`}
                          >
                            <span>Schedule Consultation</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 07 // VERIFIED EXECUTIVE ENDORSEMENTS */}
            {/* ----------------------------------------------------- */}
            <section id="client-impact" className="scroll-mt-24 space-y-8 border-t border-slate-200 pt-16">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e16922] bg-orange-50 border border-[#e16922]/20 px-3 py-1 rounded-full">
                  CHAPTER 07 // EXECUTIVE ENDORSEMENTS
                </span>
                <span className="text-xs font-mono text-slate-400">AHMEDABAD & GUJARAT</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  Verified Executive Voices.
                </h2>
                <p className="text-slate-600 text-base">
                  Real feedback from CEOs, Managing Directors, and HR leaders who engaged with HoneST Solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Rajesh Shah',
                    role: 'Managing Director, Industrial Engineering',
                    quote: 'The "Discover the Arjuna in You" program completely recalibrated how our executive board navigates crisis. Mr. Prasun Kundu decodes Chapter 18 as actionable corporate strategy.',
                  },
                  {
                    name: 'Anand Patel',
                    role: 'Co-Founder & CEO, Chemical Manufacturing Corp',
                    quote: 'We were trapped in founder-dependency for 8 years. HoneST Solutions redesigned our departmental SOPs in 90 days. Operational throughput jumped 42%.',
                  },
                ].map((t, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs font-bold text-slate-900">{t.name}</p>
                      <p className="text-[11px] text-slate-500">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* 08 // FAQ ACCORDION */}
            {/* ----------------------------------------------------- */}
            <section className="scroll-mt-24 space-y-6 border-t border-slate-200 pt-16">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  KNOWLEDGE BASE
                </span>
                <h3 className="text-2xl font-display font-black text-slate-950 mt-1">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: 'What makes HoneST Solutions unique compared to typical consulting agencies?',
                    a: 'We combine 50+ years of collective boardroom execution with deep-rooted philosophical wisdom and cutting-edge autonomous AI engineering. We sit in your boardroom, restructure operational SOPs, and establish autonomous systems within 90 days.',
                  },
                  {
                    q: 'How does the "Discover the Arjuna in You" program work?',
                    a: 'Rooted in Chapter 18 of the Shrimad Bhagavad Gita and designed by author Mr. Prasun Kundu, this program addresses executive delusion, hesitation, and cognitive burnout, providing a scientific framework for decisive action under pressure.',
                  },
                  {
                    q: 'Are the Sunday Bhagavad Gita chanting sessions free?',
                    a: 'Yes, 100% free of charge for children, students, youth, and corporate executives at our State-of-the-Art Training Centre in Ahmedabad.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400">{openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </main>

        </div>
      </div>

    </div>
  );
}
