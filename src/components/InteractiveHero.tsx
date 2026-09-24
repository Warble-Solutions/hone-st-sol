'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, BookOpen, Handshake, Award, Target } from 'lucide-react';

interface VerticalPreview {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  desc: string;
  image: string;
  link: string;
  badge: string;
  icon: React.ElementType;
}

const verticals: VerticalPreview[] = [
  {
    id: 'gita',
    name: 'Bhagavad Gita',
    tagline: 'Ancient Wisdom for Modern Clarity',
    headline: 'Timeless Wisdom for Decisive Leadership',
    desc: 'Decoding Chapter 18 of the Shrimad Bhagavad Gita to conquer corporate hesitation, restore inner equipoise and lead life by conscious design',
    image: '/images/slider/bhagavad-gita.png',
    link: '/bhagavad-gita',
    badge: '100% Free Chanting Available',
    icon: BookOpen
  },
  {
    id: 'consulting',
    name: 'Business Consulting',
    tagline: 'Strategy, Scale & Turnarounds',
    headline: 'Strategic Guidance from Start-Up to Scale-Up',
    desc: 'Battle-tested boardroom advisory, SOP standardization and process re-engineering to turn operational friction into predictable enterprise growth',
    image: '/images/slider/consulting.png',
    link: '/business-solutions',
    badge: 'India Investment & Scale',
    icon: Handshake
  },
  {
    id: 'training',
    name: 'Corporate Training',
    tagline: 'Experiential Boardroom Workshops',
    headline: 'Workshops That Build High-Performing Teams',
    desc: 'Training Need Identification (TNI) based modules connecting leadership philosophy with frontline performance, sales mastery and negotiation',
    image: '/images/slider/training.png',
    link: '/about',
    badge: '100+ Yrs Faculty Pedigree',
    icon: Award
  },
  {
    id: 'digital',
    name: 'Digital Solutions',
    tagline: 'Modern Web, AI & Search Growth',
    headline: 'Autonomous AI Agents & Modern Web Platforms',
    desc: 'High-performance Next.js web applications, intelligent automation agents, and Generative Engine Optimization (GEO/AEO) for market dominance',
    image: '/images/slider/digital.png',
    link: '/digital',
    badge: 'Next-Gen Engineering',
    icon: Target
  }
];

export default function InteractiveHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = verticals[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section className="relative bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-slate-200/80 overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#28c2ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#e16922]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Narrative + Right Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef4ee] border border-[#e16922]/30 text-[#e16922] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hone ST Solutions &bull; Together We Can Make a Difference</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 leading-[1.08] tracking-tight">
              Decisive Leadership, Predictable Growth &amp;{' '}
              <span className="text-[#e16922] relative inline-block">
                Next-Gen Tech
                <span className="absolute left-0 bottom-1.5 w-full h-1 bg-[#28c2ff]/40 rounded-full" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
              Our Business Verticals help in providing a One Stop Solution to organizations and individuals by <strong className="text-slate-900 font-semibold">H</strong>armonizing <strong className="text-slate-900 font-semibold">O</strong>pportunities to <strong className="text-slate-900 font-semibold">N</strong>urture and <strong className="text-slate-900 font-semibold">E</strong>nhance productivity by creating <strong className="text-slate-900 font-semibold">S</strong>ynergies to <strong className="text-slate-900 font-semibold">T</strong>ransform organizations and individuals.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/#verticals-studio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-sm text-white bg-[#e16922] hover:bg-[#c95919] shadow-lg shadow-[#e16922]/20 transition-all hover:scale-[1.02]"
              >
                <span>Explore Verticals</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#programs"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-display font-bold text-sm text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0284c7] transition-all shadow-xs"
              >
                <span>Free Gita Chanting</span>
                <ArrowUpRight className="w-4 h-4 text-[#0284c7]" />
              </Link>
            </div>

            {/* Minimalist Horizontal Stat Ribbon */}
            <div className="pt-8 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-950">
                  75+
                </div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Organizations
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-[#e16922]">
                  25,000+
                </div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Individuals
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-[#0284c7]">
                  100+ Yrs
                </div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Experience
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-display font-black text-slate-950">
                  Since 2018
                </div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Ahmedabad, India
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Verticals Showcase Stage */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 4 Interactive Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              {verticals.map((item, idx) => {
                const isSelected = idx === activeIdx;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#e16922] shadow-sm border border-slate-200/80'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Stage Display Card */}
            <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden group transition-all duration-300">
              
              {/* Image Preview Container */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={active.image}
                  alt={active.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm border border-slate-100">
                    {active.badge}
                  </span>
                </div>

                {/* Tagline Overlay on Bottom of Image */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#28c2ff] block mb-1">
                    {active.tagline}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-black text-white leading-snug">
                    {active.headline}
                  </h3>
                </div>
              </div>

              {/* Lower Details Bar */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {active.desc}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <ActiveIcon className="w-4 h-4 text-[#e16922]" />
                    <span>Focus Vertical</span>
                  </div>

                  <Link
                    href={active.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e16922] hover:text-[#c95919] uppercase tracking-wider group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Full Vertical</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
