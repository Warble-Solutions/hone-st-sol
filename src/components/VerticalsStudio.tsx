'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Handshake, Award, Target, ArrowRight, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

interface VerticalItem {
  id: string;
  name: string;
  subtitle: string;
  headline: string;
  description: string;
  deliverables: string[];
  image: string;
  link: string;
  ctaText: string;
  icon: React.ElementType;
}

const verticalsData: VerticalItem[] = [
  {
    id: 'bhagavad-gita',
    name: 'Bhagavad Gita',
    subtitle: 'Timeless Wisdom & Mental Clarity',
    headline: 'Ancient Wisdom for Decisive Corporate Leadership',
    description: 'The Bhagavad Gita is a 5000+ year-old dialogue between seeker and guru, providing a practical manual for leading a holistic, balanced life. We decode timeless shlokas to eliminate decision fatigue, conquer boardroom anxiety and build unshakeable inner equipoise',
    deliverables: [
      'Chapter 18 Decoded for Executive Decision Making',
      'Free Weekly Chanting Sessions for Children and Adults',
      'Authentic Sanskrit Uccharan and Practical Management Meaning'
    ],
    image: '/images/slider/bhagavad-gita.png',
    link: '/bhagavad-gita',
    ctaText: 'Explore Gita Programs',
    icon: BookOpen
  },
  {
    id: 'business-consulting',
    name: 'Business Consulting',
    subtitle: 'Strategy, Scale & India Expansion',
    headline: 'Strategic Advisory from Start-Up to Enterprise Scale',
    description: 'We offer comprehensive business consultancy from startups to established organizations of various genres. Specialized in process re-engineering, financial modeling, and operational turnaround for enterprises investing and scaling across India',
    deliverables: [
      'Strategic Boardroom Advisory & Practical Ground Execution',
      'SOP, Process Re-engineering & Scalable Systems Design',
      'Investing in India Mentorship & Turnaround Support'
    ],
    image: '/images/slider/consulting.png',
    link: '/business-solutions',
    ctaText: 'Explore Consulting Solutions',
    icon: Handshake
  },
  {
    id: 'corporate-training',
    name: 'Corporate Training',
    subtitle: 'Experiential Boardroom Workshops',
    headline: 'Experiential Workshops That Build High-Performing Teams',
    description: 'We conduct high-impact trainings based on the Bhagavad Gita and our signature programme "Discover the Arjuna in You" celebrated at premier institutions like the Ahmedabad Management Association (AMA). Custom TNI-based curriculums tailored to workforce needs',
    deliverables: [
      'Training Need Identification (TNI) Based Curriculums',
      'Overcoming Workplace Hesitation & Building Cohesive Teams',
      'Delivered at Ahmedabad State-of-the-Art Centre or On-Site'
    ],
    image: '/images/slider/training.png',
    link: '/about',
    ctaText: 'Explore Training Modules',
    icon: Award
  },
  {
    id: 'digital-solutions',
    name: 'Digital Solutions',
    subtitle: 'Modern Web, AI & Search Intelligence',
    headline: 'Autonomous AI Agents & Next-Gen Web Platforms',
    description: 'Digital Solutions utilizing modern web technologies and internet systems to promote products and services. Engineering intelligent autonomous AI agents, modern Next.js web applications, and Generative Engine Optimization (GEO/AEO) for modern search dominance',
    deliverables: [
      'Autonomous AI Agents & Enterprise Workflow Automation',
      'Next.js Web Applications & Custom Mobile Apps',
      'Generative Engine Optimization (GEO/AEO) & Technical SEO'
    ],
    image: '/images/slider/digital.png',
    link: '/digital',
    ctaText: 'Explore Digital Suite',
    icon: Target
  }
];

export default function VerticalsStudio() {
  const [selectedId, setSelectedId] = useState('bhagavad-gita');
  const activeVertical = verticalsData.find((v) => v.id === selectedId) || verticalsData[0];
  const ActiveIcon = activeVertical.icon;

  return (
    <section id="verticals-studio" className="py-20 sm:py-28 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1 rounded-full border border-[#e16922]/30">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Our Business Verticals
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Select a vertical to explore our frameworks, proven methodologies and direct engagement paths
          </p>
        </div>

        {/* Split Studio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Vertical Selector Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            {verticalsData.map((item) => {
              const isSelected = item.id === selectedId;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full p-5 rounded-2xl border transition-all text-left flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-[#fef4ee] border-[#e16922] shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#e16922] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-base font-display font-bold tracking-tight ${
                        isSelected ? 'text-[#e16922]' : 'text-slate-900'
                      }`}>
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isSelected ? 'text-[#e16922] translate-x-1' : 'text-slate-300 group-hover:text-slate-500'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Fluid Stage Panel */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-3xl bg-slate-50/70 border border-slate-200/90 overflow-hidden shadow-sm flex flex-col justify-between">
              
              {/* Graphic Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={activeVertical.image}
                  alt={activeVertical.headline}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#28c2ff] block mb-1">
                    {activeVertical.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white leading-snug">
                    {activeVertical.headline}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-7 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {activeVertical.description}
                  </p>

                  <div className="pt-2 border-t border-slate-200/80 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Core Framework &amp; Deliverables
                    </span>
                    {activeVertical.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Available for corporate teams and individual leaders
                  </span>

                  <Link
                    href={activeVertical.link}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.02] shrink-0 w-full sm:w-auto"
                  >
                    <span>{activeVertical.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
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
