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
  accent: string;
}

const verticalsData: VerticalItem[] = [
  {
    id: 'bhagavad-gita',
    name: 'Bhagavad Gita',
    subtitle: 'Timeless Wisdom & Mental Clarity',
    headline: 'Ancient Wisdom for Decisive Corporate Leadership',
    description: 'Organizations are benefitting from our Training Programs on The Bhagavad Gita which are designed to increase productivity of individuals leading to incremental organizational productivity. All the foregoing blended effectively with The Bhagavad Gita makes for a learning which has stood the test of time and is more than relevant currently',
    deliverables: [
      'Signature Program – Discover the Arjuna in You',
      'Free Weekly Chanting Sessions for Children and Adults at Our Training Centre',
      'Alternatively learn Bhagavad Gita Chanting from Our YouTube Channel'
    ],
    image: '/images/slider/bhagavad-gita.png',
    link: '/bhagavad-gita',
    ctaText: 'Explore Gita Programs',
    icon: BookOpen,
    accent: '#e16922'
  },
  {
    id: 'business-consulting',
    name: 'Business Consulting',
    subtitle: 'Strategy, Scale & India Expansion',
    headline: 'Strategic Advisory from Start-Up to Enterprise Scale',
    description: 'Professional approach and systems/processes are often required to scale up businesses. From Start Up to Scale Up, we have been mentoring organizations to help them grow by implementing the required systems and processes. Businesses doing sales turnover of INR 50Cr. to INR 500Cr. benefit from our vast experience and expertise',
    deliverables: [
      'Strategic Planning Based on Research Data and Current Position',
      'Marketing & Sales with Robust RTM/GTM Plan Executed to the Last Mile',
      'Operations Excellence & Organizational Development with High Focus on Goals'
    ],
    image: '/images/slider/consulting.png',
    link: '/business-solutions',
    ctaText: 'Explore Consulting Solutions',
    icon: Handshake,
    accent: '#0284c7'
  },
  {
    id: 'corporate-training',
    name: 'Corporate Training',
    subtitle: 'Experiential Boardroom Workshops',
    headline: 'Experiential Workshops That Build High-Performing Teams',
    description: 'More than 75 organizations have benefitted from our programs with customized offerings based on Training Need Identification (TNI). Our highly professional faculties bring in a vast experience of 100+ years from corporate environment which makes the trainings experiential',
    deliverables: [
      'Sales & Marketing, Leadership Communication, Negotiation & More',
      'Behavioural Skills, Public Speaking for All Age Groups',
      'Conducted at State-of-the-Art Training Centre or On-Site'
    ],
    image: '/images/slider/training.png',
    link: '/corporate-training',
    ctaText: 'Explore Training Modules',
    icon: Award,
    accent: '#059669'
  },
  {
    id: 'digital-solutions',
    name: 'Digital Solutions',
    subtitle: 'Websites, Apps, AI & Marketing',
    headline: 'Digital Presence & Growth for Modern Businesses',
    description: 'In the current context, businesses without digital presence are non-existent. Our digital solutions on Website Development and maintenance, App Development, Social Media Management and growth, SEO, Google Ads and content digitalization are serving organizations in varied industries across the globe',
    deliverables: [
      'Website Development & App Development',
      'Social Media Management, SEO & Google Ads',
      'Video Solutions, Graphic Design & Content Digitalization'
    ],
    image: '/images/slider/digital.png',
    link: '/digital',
    ctaText: 'Explore Digital Suite',
    icon: Target,
    accent: '#7c3aed'
  }
];

export default function VerticalsStudio() {
  const [selectedId, setSelectedId] = useState('bhagavad-gita');
  const activeVertical = verticalsData.find((v) => v.id === selectedId) || verticalsData[0];
  const activeIndex = verticalsData.findIndex((v) => v.id === selectedId);
  const ActiveIcon = activeVertical.icon;

  return (
    <section id="verticals-studio" className="py-20 sm:py-28 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1.5 rounded-full border border-[#e16922]/30">
            <Sparkles className="w-3.5 h-3.5" />
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Vertical Selector Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {verticalsData.map((item, idx) => {
              const isSelected = item.id === selectedId;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-4 cursor-pointer group relative overflow-hidden ${
                    isSelected
                      ? 'bg-white shadow-lg border-[color:var(--accent)]'
                      : 'bg-white border-transparent hover:border-slate-200 hover:shadow-sm'
                  }`}
                  style={{ '--accent': item.accent } as React.CSSProperties}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'text-white shadow-md'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}
                    style={isSelected ? { backgroundColor: item.accent } : undefined}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-[15px] font-display font-bold tracking-tight transition-colors duration-300 ${
                        isSelected ? 'text-slate-950' : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Chevron */}
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      isSelected
                        ? 'translate-x-0.5 text-slate-400'
                        : 'text-slate-300 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}

            {/* Bottom stat strip */}
            <div className="mt-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-display font-black text-slate-900">75+</div>
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Orgs</div>
                </div>
                <div>
                  <div className="text-lg font-display font-black text-[#e16922]">25K+</div>
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">People</div>
                </div>
                <div>
                  <div className="text-lg font-display font-black text-slate-900">100+</div>
                  <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Yrs Exp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Detail Panel */}
          <div className="lg:col-span-8">
            <div
              className="h-full rounded-[1.75rem] overflow-hidden border-2 transition-colors duration-500 grid grid-cols-1 lg:grid-cols-2"
              style={{ borderColor: `${activeVertical.accent}20` }}
            >
              
              {/* Left Half — Image */}
              <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden bg-slate-900">
                {verticalsData.map((item) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      item.id === selectedId ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ))}

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/30 hidden lg:block" />

                {/* Step Indicator */}
                <div className="absolute top-5 left-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-white backdrop-blur-md border border-white/20"
                    style={{ backgroundColor: `${activeVertical.accent}90` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {String(activeIndex + 1).padStart(2, '0')} / {String(verticalsData.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="text-[11px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: activeVertical.accent }}
                  >
                    {activeVertical.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white leading-snug tracking-tight">
                    {activeVertical.headline}
                  </h3>
                </div>
              </div>

              {/* Right Half — Content */}
              <div className="bg-white p-6 sm:p-7 flex flex-col justify-between">
                <div className="space-y-4">

                  {/* Description */}
                  <p className="text-[13px] sm:text-sm text-slate-700 leading-relaxed">
                    {activeVertical.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                      Core Deliverables
                    </span>
                    {activeVertical.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <div
                          className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                          style={{ backgroundColor: `${activeVertical.accent}15` }}
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5"
                            style={{ color: activeVertical.accent }}
                          />
                        </div>
                        <span className="text-[12px] sm:text-[13px] text-slate-800 font-medium leading-snug">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={activeVertical.link}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl w-full"
                    style={{
                      backgroundColor: activeVertical.accent,
                      boxShadow: `0 8px 20px ${activeVertical.accent}30`,
                    }}
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
