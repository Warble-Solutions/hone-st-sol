'use client';

import React from 'react';
import { Sparkles, Building2, Users, Award, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FoundationIntro() {
  const stats = [
    {
      value: "75+",
      label: "Organizations Served",
      desc: "Adding value to organizations across industries with boardroom strategies executed on the ground",
      pill: "Track Record",
      color: "text-[#e16922]",
      bg: "bg-[#fef4ee] border-[#e16922]/30"
    },
    {
      value: "25,000+",
      label: "Individuals Impacted",
      desc: "Training, mentoring and upskilling individuals to build highly productive teams",
      pill: "People Impact",
      color: "text-[#0284c7]",
      bg: "bg-[#eefaff] border-[#28c2ff]/30"
    },
    {
      value: "100+ Yrs",
      label: "Collective Experience",
      desc: "Experience, expertise, empathy and exuberance resulting in great places to work",
      pill: "Faculty Authority",
      color: "text-slate-900",
      bg: "bg-slate-100 border-slate-200"
    },
    {
      value: "2018",
      label: "Founded in Ahmedabad",
      desc: "State-of-the-Art Training Centre providing a professional learning environment",
      pill: "Est. 2018",
      color: "text-[#e16922]",
      bg: "bg-[#fef4ee] border-[#e16922]/30"
    }
  ];

  const honestPillars = [
    { letter: "H", word: "Harmonizing", meaning: "Opportunities across markets and organizations" },
    { letter: "O", word: "Opportunities", meaning: "Unlocking growth levers for enterprises and individuals" },
    { letter: "N", word: "Nurturing", meaning: "Continuous talent development and experiential mentoring" },
    { letter: "E", word: "Enhancing", meaning: "Workforce productivity, operational clarity and execution" },
    { letter: "S", word: "Synergies", meaning: "Aligning boardroom vision with frontline teams" },
    { letter: "T", word: "Transforming", meaning: "Organizations and individuals into industry leaders" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef4ee] text-[#e16922] text-xs font-bold uppercase tracking-wider border border-[#e16922]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Hone ST Foundation &bull; Together We Can Make a Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
            &ldquo;What Mind Can Conceive Man Can Achieve&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Germination of an idea in the year 2018 has resulted in adding value to 75+ organizations and 25,000+ individuals. This has been made possible by countless boardroom strategies executed on the ground, training and mentoring of the workforce spanning over 100 years resulting in experience, expertise, empathy and exuberance which results in building highly productive teams and great places to work! Guided by our foundational belief that <strong className="text-slate-900 font-semibold">&ldquo;Together We Can Make a Difference&rdquo;</strong>.
          </p>
        </div>

        {/* Stat Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${stat.bg}`}>
                  {stat.pill}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#e16922] transition-colors" />
              </div>
              <div className={`text-4xl sm:text-5xl font-display font-black tracking-tight ${stat.color}`}>
                {stat.value}
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 tracking-tight">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The HONE ST Acronym Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e16922] block mb-1">
              Our Core Philosophy &bull; Together We Can Make a Difference
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
              The Hone ST Philosophy in Action
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Our Business Verticals provide a One Stop Solution to organizations and individuals by Harmonizing Opportunities to Enhance productivity by Nurturing Synergies to Transform organizations and individuals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {honestPillars.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-slate-50 hover:bg-[#fef4ee] border border-slate-200/80 hover:border-[#e16922]/40 transition-colors text-center group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#e16922] text-[#e16922] group-hover:text-white font-black text-lg flex items-center justify-center mx-auto shadow-xs border border-slate-200/60 transition-colors mb-2">
                  {item.letter}
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-[#e16922] transition-colors">
                  {item.word}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
