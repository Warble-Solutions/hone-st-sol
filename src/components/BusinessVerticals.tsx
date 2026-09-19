'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Handshake, Award, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BusinessVerticals() {
  const verticals = [
    {
      id: "bhagavad-gita",
      title: "Bhagavad Gita",
      tagline: "Timeless Wisdom & Mental Clarity",
      icon: BookOpen,
      iconColor: "text-[#e16922]",
      iconBg: "bg-[#fef4ee] border-[#e16922]/30",
      description: "The Bhagavad Gita is a 5000+ year-old dialogue between seeker and guru, providing a practical manual for leading a holistic, balanced life with decisive clarity",
      bullets: [
        "Chapter 18 Decoded for Decision Making",
        "Free Weekly Chanting for Children and Adults",
        "Authentic Sanskrit Uccharan and Practical Meaning"
      ],
      link: "/bhagavad-gita",
      cta: "Learn More"
    },
    {
      id: "business-consulting",
      title: "Business Consulting",
      tagline: "Strategy, Scale & India Expansion",
      icon: Handshake,
      iconColor: "text-[#0284c7]",
      iconBg: "bg-[#eefaff] border-[#28c2ff]/30",
      description: "We offer comprehensive business consultancy from startups to established organizations of various genres looking to invest, expand, or restructure operations in India",
      bullets: [
        "Strategic Boardroom Advisory & Execution",
        "SOP, Process Re-engineering & Systems Design",
        "Investing in India Mentorship & Turnaround Support"
      ],
      link: "/business-solutions",
      cta: "Learn More"
    },
    {
      id: "corporate-training",
      title: "Corporate Training",
      tagline: "Experiential Boardroom Workshops",
      icon: Award,
      iconColor: "text-[#e16922]",
      iconBg: "bg-[#fef4ee] border-[#e16922]/30",
      description: "We conduct experiential trainings based on the Bhagavad Gita and our signature programme 'Discover the Arjuna in You' celebrated at prestigious institutions like AMA",
      bullets: [
        "Training Need Identification (TNI) Based Curriculums",
        "Overcoming Workplace Hesitation & Building Cohesive Teams",
        "Delivered at Ahmedabad Centre or On-Site"
      ],
      link: "/about",
      cta: "Learn More"
    },
    {
      id: "digital-solutions",
      title: "Digital Solutions",
      tagline: "Modern Web, AI & Search Intelligence",
      icon: Target,
      iconColor: "text-[#0284c7]",
      iconBg: "bg-[#eefaff] border-[#28c2ff]/30",
      description: "Digital Solutions utilizing internet and online digital technologies to promote products and services, including modern Next.js platforms, AI agents and search dominance",
      bullets: [
        "Autonomous AI Agents & Enterprise Workflow Automation",
        "Next.js Web Applications & Custom Mobile Apps",
        "Generative Engine Optimization (GEO/AEO) & Technical SEO"
      ],
      link: "/digital",
      cta: "Learn More"
    }
  ];

  return (
    <section id="verticals" className="py-20 sm:py-28 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1 rounded-full border border-[#e16922]/30">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Our Business Verticals
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Providing one stop solutions for organizations and individuals across strategy, experiential training, digital technology and timeless wisdom
          </p>
        </div>

        {/* 4 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {verticals.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div className="space-y-5">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.iconBg} ${item.iconColor} shadow-inner group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {item.tagline}
                    </span>
                    <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={item.link}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-50 group-hover:bg-[#fef4ee] text-slate-800 group-hover:text-[#e16922] font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 group-hover:border-[#e16922]/40"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
