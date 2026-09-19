'use client';

import React from 'react';
import { Compass, Target, Heart, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VisionMission() {
  const values = [
    {
      title: "Timeless Wisdom",
      desc: "Rooting contemporary management practices in the eternal psychological and moral clarity of the Bhagavad Gita",
      icon: Compass,
      color: "text-[#e16922]",
      bg: "bg-[#fef4ee] border-[#e16922]/30"
    },
    {
      title: "Boardroom Execution",
      desc: "Bridging strategic vision with frontline execution through 100+ years of collective high-level leadership",
      icon: Target,
      color: "text-[#0284c7]",
      bg: "bg-[#eefaff] border-[#28c2ff]/30"
    },
    {
      title: "Social Responsibility",
      desc: "Donating 50% of proceeds from our books directly to charities supporting the education and welfare of girls",
      icon: Heart,
      color: "text-rose-600",
      bg: "bg-rose-50 border-rose-200"
    },
    {
      title: "Absolute Integrity",
      desc: "Delivering honest, unbiased counsel and tangible value to every enterprise and individual we mentor",
      icon: Shield,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/60 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1 rounded-full border border-[#28c2ff]/30">
            Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Our Vision &amp; Mission
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Grounded in boardroom integrity, driven by transformative results and timeless wisdom since 2018
          </p>
        </div>

        {/* Dual Cards: Vision and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#fef4ee] text-[#e16922] border border-[#e16922]/30 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e16922]">Aspiration</span>
                <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">
                  Our Vision
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              To be the premier catalyst for personal and organizational transformation through timeless wisdom and modern innovation, empowering enterprises to build high-performance, ethical and resilient work cultures across India
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#e16922] shrink-0 mt-0.5" />
                <span>Transforming workplace culture by conquering hesitation and anxiety</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#e16922] shrink-0 mt-0.5" />
                <span>Empowering 100,000+ individuals through accessible wisdom and skills</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#e16922] shrink-0 mt-0.5" />
                <span>Promoting ethical boardroom governance and sustainable enterprise scale</span>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#eefaff] text-[#0284c7] border border-[#28c2ff]/30 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">Execution</span>
                <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">
                  Our Mission
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              To provide a comprehensive One Stop Solution to organizations and individuals by Harmonizing Opportunities to Enhance productivity by Nurturing Synergies to Transform operations, people, and digital capabilities
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <span>Hands-on boardroom consulting grounded in operational reality</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <span>Experiential corporate workshops tailored to precise workforce needs</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <span>Free community Gita chanting sessions for children and seekers</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const IconComponent = v.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${v.bg} ${v.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-display font-bold text-slate-900 tracking-tight">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
