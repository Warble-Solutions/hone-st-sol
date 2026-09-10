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
  Sun,
  Compass,
  BookOpen,
  Heart,
  CheckCircle2,
  Award,
  Briefcase
} from 'lucide-react';

interface Vertical {
  id: string;
  numeral: string;
  sanskritName: string;
  label: string;
  shloka: string;
  shlokaTranslation: string;
  chapterRef: string;
  headline: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  highlights: string[];
  subServices?: { name: string; icon: React.ComponentType<{ className?: string }> }[];
}

const verticals: Vertical[] = [
  {
    id: 'gita',
    numeral: '०१',
    sanskritName: 'ज्ञान योग · Jñāna Yoga',
    label: 'Bhagavad Gita',
    chapterRef: 'Chapter 18 Decoded',
    shloka: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    shlokaTranslation: 'You have a right only to perform your duty, never to the fruits thereof. (BG 2.47)',
    headline: 'Ancient Wisdom for Modern Executive Leadership',
    description: 'Our signature "Discover the Arjuna in You" program decodes the 18th chapter of the Shrimad Bhagavad Gita for modern boardrooms, executives, and individuals. Designed by author & mentor Mr. Prasun Kundu to overcome decision paralysis and lead with unshakeable poise.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    href: '/#bhagavad-gita',
    cta: 'Explore Gita Programs',
    highlights: [
      'Signature Arjuna Program celebrated at Ahmedabad Management Association (AMA)',
      '100% Free weekly Sanskrit chanting sessions for children & adults at our Ahmedabad Centre',
      'High-impact corporate Gita retreats addressing executive stress & moral dilemmas',
    ],
  },
  {
    id: 'consulting',
    numeral: '०२',
    sanskritName: 'कर्म योग · Karma Yoga',
    label: 'Business Solutions',
    chapterRef: 'Selfless Action & Execution',
    shloka: 'योगः कर्मसु कौशलम् ॥',
    shlokaTranslation: 'Yoga is supreme skill, excellence, and equanimity in all corporate action. (BG 2.50)',
    headline: 'Operational Clarity from Start-Up to Scale-Up',
    description: 'Boardroom-level strategy, governance, and SOP standardization built on 50+ years of high-stakes executive leadership. We work side-by-side with promoters and founders in Ahmedabad and across India to establish sustainable profitability.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    href: '/#contact-cta',
    cta: 'Book a Strategy Diagnostic',
    highlights: [
      'Boardroom Strategy & Execution with C-Suite mentoring and governance',
      'SOP Standardization: transforming promoter-dependent setups into autonomous enterprises',
      'Financial Modeling, unit economics optimization, and profit-lever acceleration',
    ],
  },
  {
    id: 'training',
    numeral: '०३',
    sanskritName: 'अभ्यास योग · Abhyāsa',
    label: 'Corporate Training',
    chapterRef: 'Continuous Discipline & Focus',
    shloka: 'अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥',
    shlokaTranslation: 'Through disciplined practice and detachment, the mind achieves true mastery. (BG 6.35)',
    headline: 'Experiential Workshops That Transform Corporate Habits',
    description: 'Training Need Identification (TNI) based curriculums designed to solve real operational bottlenecks. Sales mastery, assertive negotiation, cross-functional harmony, and executive presence delivered by veteran industry leaders.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    href: '/#contact-cta',
    cta: 'See Training Modules',
    highlights: [
      '100+ years of collective executive faculty experience driving experiential modules',
      'TNI-based custom curriculums mapped directly to organizational key performance metrics',
      'Immersive training delivered at our State-of-the-Art Ahmedabad Centre or on-site',
    ],
  },
  {
    id: 'digital',
    numeral: '०४',
    sanskritName: 'विज्ञान · Vijñāna',
    label: 'Digital Solutions',
    chapterRef: 'Applied Knowledge & Intelligence',
    shloka: 'ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः ॥',
    shlokaTranslation: 'I shall reveal this wisdom along with its direct practical execution. (BG 7.2)',
    headline: 'Autonomous AI Agents, Web Platforms & Search Intelligence',
    description: 'A modern digital engineering and generative intelligence agency. We engineer custom autonomous AI workflows, Next.js web platforms, and Generative Engine Optimization (GEO/AEO) to secure market dominance in the AI era.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    href: '/digital',
    cta: 'Explore Digital Hub',
    highlights: [],
    subServices: [
      { name: 'AI Agents & Automation', icon: Bot },
      { name: 'Custom Mobile & Web Apps', icon: Smartphone },
      { name: 'Modern Next.js Websites', icon: Globe },
      { name: 'SEO / GEO / AEO Intelligence', icon: Search },
      { name: 'Social Media Strategy & Marketing', icon: Share2 },
      { name: 'Course Design & LMS Platforms', icon: GraduationCap },
    ],
  },
  {
    id: 'books',
    numeral: '०५',
    sanskritName: 'स्वाध्याय व दान · Svādhyāya & Dāna',
    label: 'Books & Publications',
    chapterRef: 'Wisdom in Print & Philanthropy',
    shloka: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ॥',
    shlokaTranslation: 'Truly, there is nothing in this world as purifying as sacred knowledge. (BG 4.38)',
    headline: 'The Corporate Bhagavad Gita — 50% Royalties to Girls\u2019 Welfare',
    description: 'Authored by founder Prasun Kundu, "The Corporate Bhagavad Gita" translates timeless 700-shloka teachings into 18 pragmatic corporate leadership modules. In alignment with our foundational ethics, 50% of all book royalties are donated to the education of underprivileged girls.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    href: '/about#csr',
    cta: 'Learn About the Books & Mission',
    highlights: [
      'The Corporate Bhagavad Gita: A practical manual for modern leaders and entrepreneurs',
      'Illustrated children\u2019s spiritual storybooks nurturing cultural grounding early in life',
      'Direct social impact: 50% royalties allocated to underprivileged girls\u2019 schooling',
    ],
  },
];

export default function ServicesGrid() {
  const [active, setActive] = useState('gita');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#business-solutions' || hash === '#consulting') {
        setActive('consulting');
      } else if (hash === '#bhagavad-gita' || hash === '#gita') {
        setActive('gita');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const current = verticals.find((v) => v.id === active)!;

  return (
    <section id="services" className="py-24 sm:py-32 bg-white relative scroll-mt-20 overflow-hidden">
      {/* Target anchor for Business Solutions hash */}
      <div id="business-solutions" className="absolute -top-20" />

      {/* Subtle Vedic watermark background motif */}
      <div className="absolute top-12 right-0 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#e16922]/5 to-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -translate-x-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#28c2ff]/5 to-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Section Header with Vedic subtitle */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fef4ee] border border-[#e16922]/20 text-[#e16922] text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e16922]" />
            <span>पञ्च स्तम्भाः · The Five Pillars of HoneST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Where Bhagavad Gita Wisdom Meets Modern Enterprise.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Each of our five verticals is anchored in timeless philosophical principles from the Shrimad Bhagavad Gita — engineered to deliver clarity, ethical governance, and exponential modern growth.
          </p>
        </div>

        {/* Bhagavad Gita Themed Tab Navigation Deck */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {verticals.map((v) => {
            const isActive = active === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-[#fff8f1] via-white to-[#fef4ee] border-[#e16922] shadow-lg shadow-[#e16922]/10 ring-2 ring-[#e16922]/20'
                    : 'bg-[#fafafa] hover:bg-[#fffaf5] border-slate-200/80 hover:border-orange-200 shadow-2xs'
                }`}
              >
                {/* Top Row: Sanskrit Numeral + Vedic Icon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-xl font-display font-bold text-sm transition-colors ${
                      isActive
                        ? 'bg-[#e16922] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 group-hover:border-[#e16922]/30 group-hover:text-[#e16922]'
                    }`}
                  >
                    {v.numeral}
                  </span>

                  {isActive && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e16922] bg-orange-100/70 px-2 py-0.5 rounded-full">
                      <Sun className="w-3 h-3 text-[#e16922] animate-spin-slow" />
                      Active
                    </span>
                  )}
                </div>

                {/* Middle: Sanskrit Principle Tag */}
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#e16922] mb-1 truncate">
                  {v.sanskritName}
                </p>

                {/* Bottom: Main Vertical Title */}
                <h4
                  className={`text-sm sm:text-base font-display font-bold leading-snug transition-colors ${
                    isActive ? 'text-slate-950' : 'text-slate-700 group-hover:text-slate-950'
                  }`}
                >
                  {v.label}
                </h4>

                {/* Active Underline Glow */}
                {isActive && (
                  <div className="absolute -bottom-[2px] left-6 right-6 h-[3px] bg-[#e16922] rounded-full shadow-xs shadow-[#e16922]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Vertical Showcase Card (Vedic Manuscript / Royal Frame Style) */}
        <div className="rounded-3xl border-2 border-[#e16922]/25 bg-gradient-to-br from-[#fffdfa] via-white to-[#fff8f0] shadow-xl shadow-orange-950/5 overflow-hidden transition-all duration-300">
          
          {/* Sanskrit Shloka Ribbon Banner */}
          <div className="bg-gradient-to-r from-[#fef4ee] via-[#fff8f0] to-[#fef4ee] border-b border-[#e16922]/15 px-6 sm:px-10 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e16922]/15 flex items-center justify-center shrink-0 text-[#e16922]">
                <Scroll className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-display font-bold text-[#b84e11] tracking-wide">
                  {current.shloka}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 italic mt-0.5">
                  &ldquo;{current.shlokaTranslation}&rdquo;
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 self-start md:self-auto">
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#e16922] px-3 py-1 rounded-full bg-white border border-[#e16922]/30 shadow-2xs">
                {current.chapterRef}
              </span>
            </div>
          </div>

          {/* Split Content Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Image with Vedic Framing */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto min-h-[360px] overflow-hidden bg-slate-100">
              <Image
                src={current.image}
                alt={current.label}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-black/50" />
              
              {/* Floating Pill on Image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e16922]" />
                  <span>{current.sanskritName}</span>
                </div>
                <span className="text-xs font-display font-bold px-2.5 py-1 rounded-md bg-[#e16922] text-white">
                  Pillar {current.numeral}
                </span>
              </div>
            </div>

            {/* Right Column: Narrative, Gita Wisdom & Service Offerings */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e16922] mb-2">
                  <span>{current.label}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-medium">{current.sanskritName}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 leading-snug mb-4">
                  {current.headline}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Sub-services for Digital OR Highlights with Gita Touch for others */}
                {current.subServices ? (
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#28c2ff]" />
                      Core Digital Capabilities
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.subServices.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <div
                            key={sub.name}
                            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/90 hover:border-[#28c2ff]/40 text-slate-700 shadow-2xs transition-colors"
                          >
                            <div className="w-6 h-6 rounded-lg bg-[#eefaff] flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5 text-[#0284c7]" />
                            </div>
                            <span className="font-semibold text-xs sm:text-sm text-slate-800">{sub.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-[#e16922]" />
                      Key Pillars & Outcomes
                    </p>
                    <ul className="space-y-2.5">
                      {current.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-[#fef4ee] flex items-center justify-center shrink-0 mt-0.5 border border-[#e16922]/20">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#e16922]" />
                          </div>
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4 border-t border-slate-200/60 mt-4">
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-[#e16922] hover:bg-[#c95919] rounded-full transition-all shadow-md shadow-[#e16922]/20 hover:scale-[1.02]"
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#contact-cta"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-colors"
                >
                  <span>Consult With Our Experts</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
