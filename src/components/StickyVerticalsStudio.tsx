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
  MapPin,
  Calendar,
  Heart,
  ChevronRight,
  Cpu,
  Smartphone,
  Globe,
  Search,
  Share2,
  GraduationCap
} from 'lucide-react';

const studioPractices = [
  {
    id: 'practice-gita',
    num: '01',
    navLabel: 'Bhagavad Gita Leadership',
    navSub: 'AMA Landmark Program',
    title: 'Discover the Arjuna in You: Ancient Wisdom for Modern Boards',
    badge: 'Leadership Science',
    desc: 'Our signature curriculum translates Chapter 18 into unshakeable boardroom composure, moral clarity, and decisive execution under high-stakes corporate pressure. Designed by mentor Mr. Prasun Kundu.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Overcome cognitive paralysis and executive hesitation using Chapter 18 principles',
      '100% Free weekly Sunday Sanskrit chanting for children, youth, and corporate executives',
      'High-impact executive offsites celebrated at Ahmedabad Management Association (AMA)',
    ],
    ctaLink: '/#bhagavad-gita',
    ctaText: 'Explore Arjuna Program',
    accentColor: '#e16922',
  },
  {
    id: 'practice-business',
    num: '02',
    navLabel: 'Business Solutions & SOPs',
    navSub: 'Start-Up to Scale-Up',
    title: 'Operational Restructuring & 90-Day SOP Autonomy',
    badge: 'Executive Advisory',
    desc: 'We partner side-by-side with promoters, founders, and boards in Ahmedabad and across India to eliminate founder-dependency, design autonomous SOPs, and accelerate profitability.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Boardroom Strategy & Governance: Hands-on implementation, not theoretical slide decks',
      'SOP Standardization: Transforming founder-dependent businesses into autonomous enterprises',
      'Financial unit-economics optimization with an average 3.4x margin expansion',
    ],
    ctaLink: '/#contact-cta',
    ctaText: 'Book Strategy Diagnostic',
    accentColor: '#e16922',
  },
  {
    id: 'practice-training',
    num: '03',
    navLabel: 'Corporate Training (TNI)',
    navSub: 'Experiential Workshops',
    title: 'Training Need Identification That Transforms Habits',
    badge: 'Human Capital',
    desc: 'Training Need Identification (TNI) grounded curriculums tailored to organizational goals. Sales mastery, assertive negotiation, cross-functional synergy, and executive presence delivered by senior industry veterans.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      '100+ years of collective faculty executive experience leading experiential offsites',
      'TNI-based custom curriculums mapped to sales and operational productivity KPIs',
      'Delivered at our Ahmedabad State-of-the-Art Training Centre or on-site at client headquarters',
    ],
    ctaLink: '/#contact-cta',
    ctaText: 'See Training Modules',
    accentColor: '#1e92bf',
  },
  {
    id: 'practice-digital',
    num: '04',
    navLabel: 'Autonomous AI & Digital',
    navSub: 'Next.js & Generative Search',
    title: 'Autonomous AI Agents, Next.js Platforms & Generative Search (GEO/AEO)',
    badge: 'AI & Engineering',
    desc: 'A modern digital engineering and generative intelligence agency. We engineer custom autonomous AI workflows, high-performance Next.js web applications, and Generative Engine Optimization (GEO/AEO) for modern search visibility.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Multi-agent LLM systems automating back-office document processing & CRM workflows',
      'High-velocity Next.js 16 platforms with sub-second performance (Top 5% Lighthouse)',
      'Generative Engine Optimization (GEO/AEO) for citations in ChatGPT, Perplexity & AI Overviews',
    ],
    ctaLink: '/digital',
    ctaText: 'Explore Digital Hub',
    accentColor: '#1e92bf',
  },
  {
    id: 'practice-books',
    num: '05',
    navLabel: 'Publications & CSR',
    navSub: '50% Royalties to Girls',
    title: 'The Corporate Bhagavad Gita: Wisdom in Print & Social Mission',
    badge: 'Social Impact',
    desc: 'Authored by founder Mr. Prasun Kundu, "The Corporate Bhagavad Gita" decodes Chapter 18 into 18 actionable leadership modules. In alignment with our foundational ethics, 50% of all royalties directly support the education of underprivileged girls in India.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'The Corporate Bhagavad Gita: Practical corporate leadership manual for entrepreneurs',
      'Illustrated children’s spiritual storybooks instilling timeless values early in life',
      'Direct social impact: 50% of all book royalties fund schooling for underprivileged girls',
    ],
    ctaLink: '/about#csr',
    ctaText: 'Learn About Books & Mission',
    accentColor: '#e16922',
  },
];

export default function StickyVerticalsStudio() {
  const [activeId, setActiveId] = useState('practice-gita');

  // Local scroll-spy within this section
  useEffect(() => {
    const handleScroll = () => {
      const items = studioPractices.map((p) => ({
        id: p.id,
        el: document.getElementById(p.id),
      }));

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= 300) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPractice = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80 relative scroll-mt-20">
      {/* Anchor for business-solutions */}
      <div id="business-solutions" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#1e92bf] text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1e92bf]" />
            <span>Integrated Studio Practices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
            Five Verticals. One Accountable Partner.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Use the sticky sidebar to navigate our 5 core disciplines &mdash; each engineered to deliver boardroom clarity, operational autonomy, and modern AI acceleration.
          </p>
        </div>

        {/* Studio Layout with Sticky Sidebar on Left & Scrolling Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* STICKY SIDEBAR (LEFT) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 space-y-2">
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                PRACTICE INDEX // 01–05
              </p>

              <div className="space-y-1.5 pt-1">
                {studioPractices.map((p) => {
                  const isActive = activeId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => scrollToPractice(p.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                        isActive
                          ? 'bg-[#1e92bf] text-white shadow-xs font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`font-mono text-xs ${isActive ? 'text-cyan-200 font-bold' : 'text-slate-400'}`}>
                          {p.num}
                        </span>
                        <div>
                          <p className="font-display text-xs sm:text-[13px] leading-tight">
                            {p.navLabel}
                          </p>
                          <p className={`text-[10px] ${isActive ? 'text-cyan-100' : 'text-slate-400'}`}>
                            {p.navSub}
                          </p>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'text-white translate-x-0.5' : 'text-slate-300 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Diagnostic Callout in Sidebar */}
            <div className="p-4 rounded-2xl bg-[#edf7fb]/70 border border-[#1e92bf]/25 text-xs space-y-2">
              <p className="font-bold text-slate-900">
                Not sure which practice fits your stage?
              </p>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Take our 30-second self-assessment to generate an immediate 90-day execution framework.
              </p>
              <a
                href="#diagnostic"
                className="inline-flex items-center gap-1.5 font-bold text-[#1e92bf] hover:underline"
              >
                <span>Launch 30-Sec Diagnostic</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SCROLLING CANVAS (RIGHT) */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 space-y-10">
            {studioPractices.map((p) => {
              const isActive = activeId === p.id;
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className={`rounded-3xl border transition-all duration-300 bg-white p-6 sm:p-10 shadow-lg scroll-mt-28 space-y-6 ${
                    isActive
                      ? 'border-[#1e92bf] shadow-xl shadow-[#1e92bf]/10 ring-2 ring-[#1e92bf]/20'
                      : 'border-slate-200/90 shadow-slate-900/5'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono font-bold text-[#1e92bf] bg-[#1e92bf]/10 px-3 py-1 rounded-full">
                      PRACTICE {p.num} // {p.badge}
                    </span>

                    <span className="text-xs font-mono font-semibold text-slate-400">
                      HoneST Solutions
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Image Banner */}
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-cyan-200">
                        {p.navLabel}
                      </span>
                      <span className="text-xs font-mono font-bold bg-[#e16922] px-2.5 py-0.5 rounded">
                        Pillar {p.num}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Core Strategic Outcomes:
                    </p>
                    <ul className="space-y-2">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#1e92bf] shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={p.ctaLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#1e92bf]/20 transition-all hover:scale-102"
                    >
                      <span>{p.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/#contact-cta"
                      className="text-xs font-semibold text-slate-600 hover:text-slate-950 hover:underline"
                    >
                      Speak with practice lead &rarr;
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
