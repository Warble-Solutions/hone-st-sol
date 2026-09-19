'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MapPin, Calendar, Phone, Maximize2, X, Sparkles } from 'lucide-react';

interface Program {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  mentors: string;
  desc: string;
  schedule: string;
  eligibility: string;
  venue: string;
  phone: string;
  benefits: string[];
  image: string;
  cta: string;
}

export default function ProgramsSection() {
  const [selectedPoster, setSelectedPoster] = useState<Program | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPoster(null);
      }
    };
    if (selectedPoster) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPoster]);

  const programs: Program[] = [
    {
      id: "adult-chanting",
      badge: "100% Free Program",
      badgeColor: "bg-[#fef4ee] text-[#e16922] border-[#e16922]/30",
      title: "Gita Chanting Is Enchanting",
      tagline: "A 5-Day Weekday Inner Transformation Program",
      mentors: "Guided by Prasun Kundu & Sandhya Kundu",
      desc: "Chant. Reflect. Transform. Weekly interactive chanting and reflective sessions designed to build mental clarity, inner peace, emotional resilience and better decision-making under modern life pressures",
      schedule: "Every Monday to Friday, 3:00 PM to 4:00 PM",
      eligibility: "Open to All 18+",
      venue: "A-814, Titanium Business Park, Off Corporate Road, Makarba, Ahmedabad",
      phone: "+91 98240 04696",
      benefits: [
        "Mental Clarity & Focus",
        "Inner Peace & Positivity",
        "Timeless Wisdom for Daily Life",
        "Emotional Balance & Better Decisions"
      ],
      image: "/images/programs/gita-adults.jpg",
      cta: "Register Free for Adult Chanting"
    },
    {
      id: "children-chanting",
      badge: "100% Free Program",
      badgeColor: "bg-[#eefaff] text-[#0284c7] border-[#28c2ff]/30",
      title: "Gita Chanting Is Enchanting for Children",
      tagline: "A Joyful Step Towards Building Values & Confidence",
      mentors: "Inspiring Young Minds from a Young Age",
      desc: "Nurturing children through authentic Sanskrit pronunciation, rhythmic shloka recitation and timeless moral lessons that enhance memory, focus and self-discipline in a joyous environment",
      schedule: "Happening Every Sunday, 11:00 AM to 12:00 PM",
      eligibility: "For School Students & Children",
      venue: "A-814, Titanium Business Park, Off Corporate Road, Makarba, Ahmedabad",
      phone: "+91 98240 04696",
      benefits: [
        "Improves Focus & Concentration",
        "Instills Timeless Ethical Values",
        "Boosts Communication & Confidence",
        "Promotes Peace & Character Building"
      ],
      image: "/images/programs/gita-children.jpg",
      cta: "Register Free for Children Chanting"
    }
  ];

  return (
    <section id="programs" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1 rounded-full border border-[#e16922]/30">
            Community &amp; Wisdom Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Programs
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Conducted at our Ahmedabad State-of-the-Art Training Centre and 100% free of charge for all participants
          </p>
        </div>

        {/* 2 Programs Side by Side with Full Uncropped Posters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Full Uncropped Poster Display */}
                <div 
                  onClick={() => setSelectedPoster(prog)}
                  className="relative w-full aspect-[1236/1600] bg-slate-100 overflow-hidden cursor-pointer group/poster border-b border-slate-200"
                  title="Click to view full poster"
                >
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover/poster:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Subtle hover overlay with expand prompt */}
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/poster:bg-slate-950/10 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover/poster:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#28c2ff]" />
                      Click to expand poster
                    </span>
                  </div>

                  {/* Badge floating in top corner */}
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-sm backdrop-blur-sm ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-7 sm:p-8 space-y-6">
                  
                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] block">
                      {prog.mentors}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-snug">
                      {prog.title}
                    </h3>
                    <span className="text-xs font-bold text-[#e16922] uppercase tracking-wider block">
                      {prog.tagline}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal pt-1">
                      {prog.desc}
                    </p>
                  </div>

                  {/* Key Highlights / Benefits */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Benefits &amp; Experience
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prog.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Venue & Schedule Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Calendar className="w-4 h-4 text-[#e16922] shrink-0" />
                      <span>{prog.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>{prog.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Contact: {prog.phone}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-7 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact-help"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#e16922]/20 hover:scale-[1.01]"
                >
                  <span>{prog.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedPoster(prog)}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Poster</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal for Uncropped Poster Viewing */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-12 right-0 sm:-right-10 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close poster view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Poster Image Container */}
            <div className="relative w-full aspect-[1236/1600] max-h-[82vh] bg-black/40 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={selectedPoster.image}
                alt={selectedPoster.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Modal Footer with Register Link */}
            <div className="mt-4 flex items-center justify-between w-full text-white text-xs px-2">
              <span className="font-semibold text-slate-200">
                {selectedPoster.title}
              </span>
              <Link
                href="/#contact-help"
                onClick={() => setSelectedPoster(null)}
                className="inline-flex items-center gap-1.5 text-[#28c2ff] hover:underline font-bold"
              >
                <span>Register Free Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
