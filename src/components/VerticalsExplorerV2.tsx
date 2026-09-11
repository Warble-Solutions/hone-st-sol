'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Bot, 
  Globe, 
  Search, 
  Share2, 
  Smartphone, 
  GraduationCap, 
  Sparkles, 
  Scroll, 
  BookOpen, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface VerticalItem {
  id: string;
  num: string;
  label: string;
  subtitle: string;
  headline: string;
  description: string;
  image: string;
  href: string;
  ctaText: string;
  badge: string;
  features: string[];
  subCapabilities?: { name: string; icon: React.ComponentType<{ className?: string }> }[];
}

const verticals: VerticalItem[] = [
  {
    id: 'gita',
    num: '01',
    label: 'Bhagavad Gita',
    subtitle: 'Leadership Science',
    headline: 'Ancient Wisdom for High-Stakes Modern Leadership',
    description: 'Our signature "Discover the Arjuna in You" curriculum translates Chapter 18 into unshakeable boardroom composure, moral clarity, and decisive action. Founded by mentor Mr. Prasun Kundu and celebrated at the Ahmedabad Management Association (AMA).',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    href: '/#bhagavad-gita',
    ctaText: 'Explore Gita Programs',
    badge: 'AMA Signature Landmark Program',
    features: [
      '100% Free Weekly In-Person Chanting at our Ahmedabad Centre (All Ages)',
      'Chapter 18 Framework: Overcoming executive delusion and decision paralysis',
      'High-impact corporate workshops for founders, CEOs, and senior management',
    ],
  },
  {
    id: 'consulting',
    num: '02',
    label: 'Business Solutions',
    subtitle: 'Executive Advisory',
    headline: 'From Start-Up to Scale-Up: Operational Turnaround',
    description: 'Boardroom-level strategy, governance, and SOP standardization built on 50+ years of high-stakes corporate execution. We work side-by-side with promoters and founders in Ahmedabad and across India to establish sustainable profitability.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    href: '/#contact-cta',
    ctaText: 'Book a Strategy Diagnostic',
    badge: '50+ Years C-Suite Leadership',
    features: [
      'Boardroom Strategy & Governance: Hands-on implementation, not theoretical slide decks',
      'SOP Standardization: Transforming founder-dependent businesses into autonomous scale-ups',
      'Financial unit-economics optimization and profit-lever acceleration',
    ],
  },
  {
    id: 'training',
    num: '03',
    label: 'Corporate Training',
    subtitle: 'Human Capital',
    headline: 'Experiential TNI Workshops That Transform Habits',
    description: 'Training Need Identification (TNI) grounded curriculums tailored to organizational goals. Sales mastery, assertive negotiation, cross-functional synergy, and executive presence delivered by senior industry veterans.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    href: '/#contact-cta',
    ctaText: 'See Training Modules',
    badge: 'State-of-the-Art Training Hub',
    features: [
      '100+ years of collective faculty executive experience leading experiential modules',
      'TNI-based custom curriculums mapped to sales and operational productivity KPIs',
      'Immersive training delivered at our Ahmedabad Centre or on-site at client headquarters',
    ],
  },
  {
    id: 'digital',
    num: '04',
    label: 'Digital Solutions',
    subtitle: 'AI & Engineering',
    headline: 'Autonomous AI Agents, Next.js Platforms & Search Intelligence',
    description: 'A modern digital engineering and generative intelligence agency. We engineer custom autonomous AI workflows, high-performance Next.js web applications, and Generative Engine Optimization (GEO/AEO) for modern search visibility.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    href: '/digital',
    ctaText: 'Explore Digital Hub',
    badge: 'Full-Service Digital Agency',
    features: [],
    subCapabilities: [
      { name: 'Autonomous AI Agents & Workflows', icon: Bot },
      { name: 'Custom Mobile & Web Applications', icon: Smartphone },
      { name: 'Modern Next.js Platforms', icon: Globe },
      { name: 'Generative Search (GEO / AEO)', icon: Search },
      { name: 'Growth Marketing & Social Media', icon: Share2 },
      { name: 'Course Design & LMS Engineering', icon: GraduationCap },
    ],
  },
  {
    id: 'books',
    num: '05',
    label: 'Books & Publications',
    subtitle: 'Social Impact',
    headline: 'The Corporate Bhagavad Gita — 50% to Girls\u2019 Education',
    description: 'Authored by founder Mr. Prasun Kundu, "The Corporate Bhagavad Gita" decodes Chapter 18 into 18 actionable leadership modules. In alignment with our foundational ethics, 50% of all book royalties are donated to underprivileged girls\u2019 education.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    href: '/about#csr',
    ctaText: 'Learn About the Books & Mission',
    badge: 'Philanthropic Commitment',
    features: [
      'The Corporate Bhagavad Gita: Practical corporate leadership manual for entrepreneurs',
      'Illustrated children\u2019s spiritual storybooks instilling cultural values early',
      'Direct social impact: 50% of all book proceeds support underprivileged girls\u2019 schooling',
    ],
  },
];

export default function VerticalsExplorerV2() {
  const [activeId, setActiveId] = useState('gita');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#business-solutions' || hash === '#consulting') {
        setActiveId('consulting');
      } else if (hash === '#bhagavad-gita' || hash === '#gita') {
        setActiveId('gita');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const current = verticals.find((v) => v.id === activeId) || verticals[0];

  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80 relative scroll-mt-20">
      <div id="business-solutions" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#e16922] mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#e16922]" />
              <span>Integrated Practice Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
              Five Verticals. One Strategic Partner.
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Click any vertical below to explore how ancient clarity, executive advisory, and AI automation converge to transform your enterprise.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Select to interact</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Interactive Vertical Card Deck (Modern 5-Column Selector) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {verticals.map((v) => {
            const isActive = activeId === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveId(v.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isActive
                    ? 'bg-white border-[#e16922] shadow-lg shadow-[#e16922]/10 ring-2 ring-[#e16922]/20'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-[#e16922] text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      {v.num}
                    </span>

                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? 'bg-[#e16922]' : 'bg-transparent'
                      }`}
                    />
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {v.subtitle}
                  </p>

                  <h3
                    className={`font-display font-bold text-sm sm:text-base leading-snug transition-colors ${
                      isActive ? 'text-slate-950' : 'text-slate-700 group-hover:text-slate-950'
                    }`}
                  >
                    {v.label}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isActive ? 'text-[#e16922]' : 'text-slate-400 group-hover:text-slate-700'}>
                    {isActive ? 'Active View' : 'Explore'}
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'text-[#e16922] translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Showcase Display */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Stage */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] bg-slate-100 overflow-hidden">
              <Image
                src={current.image}
                alt={current.label}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold">
                  {current.badge}
                </div>
                <span className="text-xs font-mono font-bold bg-[#e16922] px-2.5 py-1 rounded-md">
                  Pillar {current.num}
                </span>
              </div>
            </div>

            {/* Content Stage */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e16922] mb-2">
                  <span>{current.label}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-medium">{current.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 leading-snug mb-4">
                  {current.headline}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Sub-capabilities for Digital OR Highlight features for others */}
                {current.subCapabilities ? (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Core Digital Capabilities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.subCapabilities.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <div
                            key={sub.name}
                            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800 hover:border-[#1e92bf]/50 hover:bg-[#edf7fb]/40 transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#1e92bf]/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-[#1e92bf]" />
                            </div>
                            <span>{sub.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Key Deliverables & Outcomes:
                    </p>
                    <ul className="space-y-2.5">
                      {current.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center shrink-0 mt-0.5 border border-[#e16922]/30">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#e16922]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-sm shadow-md shadow-[#e16922]/20 transition-transform hover:scale-102"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#contact-cta"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors shadow-2xs"
                >
                  <span>Speak With a Practice Lead</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
