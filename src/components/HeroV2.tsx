'use client';

import React, { useState, useEffect } from 'react';
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
  Play, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface HeroPillar {
  id: string;
  tag: string;
  title: string;
  accent: string;
  description: string;
  badge: string;
  image: string;
  stats: { label: string; value: string }[];
  highlight: string;
  link: string;
  ctaText: string;
}

const heroPillars: HeroPillar[] = [
  {
    id: 'gita',
    tag: 'Wisdom & Leadership',
    title: 'Transform Boardroom Decision-Making with Chapter 18 Decoded',
    accent: '#e16922',
    description: 'Our signature "Discover the Arjuna in You" program translates timeless Bhagavad Gita principles into unshakeable executive clarity, emotional poise, and decisive action under corporate pressure.',
    badge: 'AMA Signature Landmark Program',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: 'Sunday Chanting', value: '100% Free' },
      { label: 'Curriculum Base', value: 'Chapter 18' },
      { label: 'Book Royalties', value: '50% to Girls' },
    ],
    highlight: 'Designed by mentor Mr. Prasun Kundu — author of "The Corporate Bhagavad Gita".',
    link: '/#bhagavad-gita',
    ctaText: 'Explore Arjuna Program',
  },
  {
    id: 'business',
    tag: 'Executive Advisory',
    title: 'Boardroom-Level Strategy & Operational Scaling',
    accent: '#e16922',
    description: 'We partner side-by-side with promoters, founders, and C-suites to dismantle bottlenecks, design autonomous SOPs, and build high-margin enterprise value from start-up to scale-up.',
    badge: '50+ Years C-Suite Execution',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: 'Client Growth', value: '3.4x Avg' },
      { label: 'SOP Autonomy', value: '90 Days' },
      { label: 'Engagements', value: '75+ Cos' },
    ],
    highlight: 'Zero slide decks left collecting dust — only hands-on operational turnaround.',
    link: '/#business-solutions',
    ctaText: 'Book Strategy Diagnostic',
  },
  {
    id: 'training',
    tag: 'Human Capital',
    title: 'Experiential TNI Training That Drives Permanent Habits',
    accent: '#1e92bf',
    description: 'Training Need Identification (TNI) grounded curriculums. From frontline sales mastery and assertive negotiation to C-Suite executive presence delivered at our Ahmedabad State-of-the-Art Hub.',
    badge: 'Ahmedabad State-of-the-Art Training Centre',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: 'Faculty Experience', value: '100+ Yrs' },
      { label: 'TNI Customization', value: '100%' },
      { label: 'Format', value: 'Hub & On-Site' },
    ],
    highlight: 'Action-learning simulations designed around real enterprise KPIs.',
    link: '/#services',
    ctaText: 'View Training Modules',
  },
  {
    id: 'digital',
    tag: 'Engineering & AI',
    title: 'Autonomous AI Agents, Next.js Platforms & Generative Search',
    accent: '#1e92bf',
    description: 'Modern digital agency built for the AI era. We deploy autonomous workflow agents, custom high-speed web apps, and Generative Engine Optimization (GEO/AEO) for modern search dominance.',
    badge: 'Next-Gen AI & Web Engineering',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: 'Stack', value: 'Next.js & AI' },
      { label: 'Workflow Agents', value: 'Custom' },
      { label: 'Optimization', value: 'AEO / GEO' },
    ],
    highlight: 'Autonomous systems that cut operational overhead while accelerating revenue.',
    link: '/digital',
    ctaText: 'Explore Digital Hub',
  },
];

export default function HeroV2() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const active = heroPillars[activeIdx];

  // Auto-rotation timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroPillars.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="relative pt-6 pb-20 sm:pb-28 overflow-hidden">
      
      {/* Delicate Ambient Background Gradients (Light Theme Only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#edf7fb]/60 via-orange-50/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#e16922]/8 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#1e92bf]/12 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-[#1e92bf] animate-pulse" />
            <span className="font-bold text-[#e16922]">HoneST Solutions</span>
            <span className="text-slate-300">•</span>
            <span>Est. 2018 in Ahmedabad, India</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#e16922]" /> AMA Leadership Partner
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#1e92bf]" /> 50% Royalties to Girls Education
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 tracking-tight leading-[1.08]">
            Where Timeless Wisdom Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e16922] via-amber-600 to-[#1e92bf]">
              Boardroom Precision
            </span>{' '}
            & Modern Tech.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl">
            We bridge 50+ years of high-stakes corporate execution, deep-rooted Bhagavad Gita leadership science, and autonomous digital engineering to scale forward-looking enterprises.
          </p>
        </div>

        {/* Interactive Capability Switcher Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 w-fit shadow-2xs">
          {heroPillars.map((pillar, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  setActiveIdx(idx);
                  setIsAutoPlaying(false);
                }}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-[#e16922]' : 'bg-slate-300'
                  }`}
                />
                <span>{pillar.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Bento Showcase Card */}
        <div 
          onMouseEnter={() => setIsAutoPlaying(false)}
          className="rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl shadow-slate-900/5 overflow-hidden transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Interactive Narrative & Metrics */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-[#e16922]/20 text-[#e16922] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{active.badge}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 leading-tight">
                  {active.title}
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {active.description}
                </p>

                {/* Highlight banner */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#e16922] shrink-0" />
                  <span>{active.highlight}</span>
                </div>
              </div>

              {/* Live Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {active.stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                    <p className="text-lg sm:text-2xl font-display font-extrabold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wide mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5 border-t border-slate-100">
                <Link
                  href={active.link}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-sm shadow-md shadow-[#e16922]/20 transition-transform hover:scale-102"
                >
                  <span>{active.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#diagnostic"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors shadow-2xs"
                >
                  <span>Interactive Diagnostic</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

            </div>

            {/* Right Column: Visual Stage with Floating Badges */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-slate-100">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#e16922] uppercase tracking-wider">
                    {active.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    HoneST Solutions
                  </span>
                </div>
                <p className="text-xs text-slate-800 font-semibold truncate">
                  {active.highlight}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Progress Bar for Active Tab */}
          <div className="grid grid-cols-4 h-1 bg-slate-100">
            {heroPillars.map((_, idx) => (
              <div
                key={idx}
                className={`h-full transition-all duration-500 ${
                  activeIdx === idx ? 'bg-[#e16922]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
