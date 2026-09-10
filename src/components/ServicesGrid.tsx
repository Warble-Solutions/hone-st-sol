'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, Globe, Search, Share2, Smartphone, GraduationCap } from 'lucide-react';

const verticals = [
  {
    id: 'gita',
    label: 'Bhagavad Gita',
    headline: 'Ancient Wisdom for Modern Leadership',
    description: 'Our signature "Discover the Arjuna in You" program decodes Chapter 18 of the Shrimad Bhagavad Gita for corporate executives and individuals. Free weekly chanting sessions for children and adults at our Ahmedabad centre.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    href: '/#arjuna-program',
    cta: 'Explore Gita Programs',
    highlights: ['Signature Arjuna Program at AMA', 'Free Chanting Sessions (All Ages)', 'Corporate Gita Workshops'],
  },
  {
    id: 'consulting',
    label: 'Business Consulting',
    headline: 'From Start-Up to Scale-Up',
    description: 'Boardroom-level strategy, organizational restructuring, and systems standardization. We work side-by-side with leadership to implement operational clarity and unlock sustainable growth.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    href: '/#contact-cta',
    cta: 'Book a Diagnostic',
    highlights: ['Boardroom Strategy Execution', 'SOP & Systems Design', 'Financial Modeling & Profit Levers'],
  },
  {
    id: 'training',
    label: 'Corporate Training',
    headline: 'Experiential Workshops That Stick',
    description: 'Training Need Identification (TNI) based programs tailored to your workforce. Sales mastery, negotiation, executive presence, and team alignment — delivered at our Ahmedabad centre or on-site.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    href: '/#contact-cta',
    cta: 'See Training Modules',
    highlights: ['100+ Years Faculty Experience', 'TNI-Based Custom Curriculums', 'On-Site & Centre Delivery'],
  },
  {
    id: 'digital',
    label: 'Digital Solutions',
    headline: 'AI, Apps, Websites & Search Intelligence',
    description: 'A full-service digital engineering arm covering everything from autonomous AI agents to modern web platforms and next-gen search optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    href: '/digital',
    cta: 'Explore Digital Hub',
    subServices: [
      { name: 'AI Agents & Automation', icon: Bot },
      { name: 'Custom Apps', icon: Smartphone },
      { name: 'Modern Websites', icon: Globe },
      { name: 'SEO / GEO / AEO', icon: Search },
      { name: 'Social Media & Growth', icon: Share2 },
      { name: 'Course Design & LMS', icon: GraduationCap },
    ],
  },
  {
    id: 'books',
    label: 'Books & Publications',
    headline: 'Wisdom in Print — 50% to Charity',
    description: 'Authored by founder Prasun Kundu, "The Corporate Bhagavad Gita" illuminates Chapter 18 for modern executives. Half of all royalties are donated directly to the education of underprivileged girls.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    href: '/about#csr',
    cta: 'Learn About the Books',
    highlights: ['The Corporate Bhagavad Gita', 'Illustrated Children\u2019s Storybooks', '50% Royalties \u2192 Girls\u2019 Education'],
  },
];

export default function ServicesGrid() {
  const [active, setActive] = useState('gita');
  const current = verticals.find((v) => v.id === active)!;

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#e16922] tracking-wide uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            Five verticals, one partner.
          </h2>
        </div>

        {/* Vertical Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {verticals.map((v) => (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer ${
                active === v.id
                  ? 'bg-[#e16922] text-white border-[#e16922] shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Active Vertical Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 shadow-sm">

          {/* Image Side */}
          <div className="relative h-72 sm:h-80 lg:h-auto lg:min-h-[420px] w-full overflow-hidden">
            <Image
              src={current.image}
              alt={current.label}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
          </div>

          {/* Content Side */}
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#e16922] mb-2">
              {current.label}
            </p>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-snug mb-4">
              {current.headline}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {current.description}
            </p>

            {/* Sub-services for Digital, or highlights for others */}
            {current.subServices ? (
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {current.subServices.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <div
                      key={sub.name}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white border border-slate-200/80 text-sm text-slate-700"
                    >
                      <Icon className="w-4 h-4 text-[#28c2ff] shrink-0" />
                      <span className="font-medium text-xs sm:text-sm">{sub.name}</span>
                    </div>
                  );
                })}
              </div>
            ) : current.highlights ? (
              <ul className="space-y-2 mb-8">
                {current.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e16922] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}

            <Link
              href={current.href}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#e16922] hover:bg-[#d05a18] rounded-full transition-colors shadow-sm w-fit"
            >
              {current.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
