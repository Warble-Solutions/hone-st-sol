'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2
} from 'lucide-react';

interface Slide {
  id: number;
  tagline: string;
  title: string;
  highlightText: string;
  subtext: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  features: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    tagline: "Signature Bhagavad Gita Program",
    title: "Discover the Arjuna",
    highlightText: "in You",
    subtext: "A landmark program decoded from Chapter 18 of the Shrimad Bhagavad Gita by Mr Prasun Kundu. Conquering decision fatigue, hesitation and anxiety to lead life by DESIGN, not DEFAULT",
    image: "/images/slider/bhagavad-gita.png",
    ctaText: "Explore the Program",
    ctaLink: "/#arjuna-program",
    ctaSecondaryText: "Free Chanting Sessions",
    ctaSecondaryLink: "/about#centre",
    features: ["Chapter 18 Leadership Framework", "Free Weekly Chanting for All Ages", "Celebrated at AMA Ahmedabad"],
  },
  {
    id: 2,
    tagline: "Business Consulting",
    title: "Strategic Advisory:",
    highlightText: "From Start-Up to Scale-Up",
    subtext: "Mentoring enterprises with battle-tested systems, process re-engineering and operational clarity. Turning hesitation into predictable, sustainable growth",
    image: "/images/slider/consulting.png",
    ctaText: "Our Consulting Framework",
    ctaLink: "/#verticals",
    ctaSecondaryText: "Book Free Diagnostic",
    ctaSecondaryLink: "/#contact-help",
    features: ["Process & SOP Standardization", "Executive Decision Systems", "Financial Modelling & Profit Levers"],
  },
  {
    id: 3,
    tagline: "Corporate Training",
    title: "Experiential Workshops:",
    highlightText: "Training Need Identification",
    subtext: "Tailored boardroom workshops that connect theoretical management with experiential on-the-ground performance. Transforming sales, negotiations and workplace culture",
    image: "/images/slider/training.png",
    ctaText: "Explore Training Modules",
    ctaLink: "/#verticals",
    ctaSecondaryText: "Request TNI Proposal",
    ctaSecondaryLink: "/#contact-help",
    features: ["TNI-Based Custom Curriculums", "Boardroom Roleplay Labs", "State-of-the-Art Training Centre"],
  },
  {
    id: 4,
    tagline: "Digital Solutions",
    title: "Innovative Solutions for a",
    highlightText: "Connected World",
    subtext: "Digital solutions are the components of marketing that utilise internet and online-based digital technologies to promote products and services",
    image: "/images/slider/digital.png",
    ctaText: "Explore Digital Suite",
    ctaLink: "/digital",
    ctaSecondaryText: "Get in Touch",
    ctaSecondaryLink: "/#contact-help",
    features: ["AI Agents & Automation", "Modern Websites & Apps", "SEO / GEO / AEO"],
  },
];

export default function HeroRollingBanner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[current];

  return (
    <section 
      className="relative w-full h-[620px] sm:h-[680px] lg:h-[750px] overflow-hidden flex items-center bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Photographic Slides with Ken Burns transition */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={idx === 0}
            className={`object-cover ${idx === current ? 'animate-ken-burns' : ''}`}
            sizes="100vw"
          />

          {/* Clean gradient overlay: strong white on left for text legibility, transparent on right to show graphic */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/75 to-transparent w-full lg:w-3/5" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
      ))}

      {/* Decorative Brand Color Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#28c2ff]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#e16922]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Foreground Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[3px] bg-[#e16922] inline-block rounded-full shrink-0" />
              <span className="text-[#e16922] font-display font-extrabold uppercase tracking-widest text-xs sm:text-sm">
                {slide.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-slate-950 leading-[1.08] tracking-tight">
              {slide.title}{' '}
              <span className="text-[#e16922] relative inline-block">
                {slide.highlightText}
                <span className="absolute left-0 bottom-1 w-full h-1 bg-[#28c2ff]/30 rounded-full" />
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal">
              {slide.subtext}
            </p>

            {/* Bullet Highlights */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
              {slide.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-[#28c2ff]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-display font-bold text-sm text-white bg-[#e16922] hover:bg-[#c95919] shadow-xl shadow-[#e16922]/25 transition-all hover:scale-105"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={slide.ctaSecondaryLink}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-display font-bold text-sm text-slate-900 bg-white hover:bg-slate-50 border-2 border-[#28c2ff] shadow-sm transition-all hover:scale-105"
              >
                <span>{slide.ctaSecondaryText}</span>
                <ArrowUpRight className="w-4 h-4 text-[#0284c7]" />
              </Link>
            </div>

          </div>

          {/* Right Floating Info Card */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center">
            
            <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#28c2ff]/30 shadow-2xl space-y-4 max-w-xs animate-float">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#e16922]">
                  {slide.tagline}
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c2ff] animate-ping" />
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600">
                <span className="font-bold text-slate-900 block mb-0.5">Ahmedabad &bull; Since 2018</span>
                Empowering 75+ organisations with consulting, training and Gita wisdom programs
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Rolling Controls */}
        <div className="mt-12 pt-6 border-t border-slate-300/60 flex items-center justify-between gap-4">
          
          {/* Slide Progress Lines */}
          <div className="flex items-center gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className="group flex flex-col gap-1 text-left cursor-pointer"
                aria-label={`Jump to slide ${idx + 1}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-display font-black tracking-wider transition-colors ${
                    idx === current ? 'text-[#e16922]' : 'text-slate-400 group-hover:text-slate-700'
                  }`}>
                    0{s.id}
                  </span>
                  <span className="hidden md:inline text-[11px] font-bold text-slate-600">
                    {s.tagline.split(' ')[0]}
                  </span>
                </div>
                
                <div className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === current 
                    ? 'w-16 sm:w-24 bg-gradient-to-r from-[#e16922] to-[#28c2ff]' 
                    : 'w-8 bg-slate-300 group-hover:bg-slate-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Navigation Arrow Circles */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-700 hover:border-[#e16922] hover:text-[#e16922] shadow-sm flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-700 hover:border-[#28c2ff] hover:text-[#0284c7] shadow-sm flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
