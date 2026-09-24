'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  GraduationCap, 
  Handshake,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface Slide {
  id: string;
  vertical: string;
  headline: string;
  subtext: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  accentColor: string;
  icon: React.ElementType;
  highlights: string[];
}

const slides: Slide[] = [
  {
    id: 'bhagavad-gita',
    vertical: 'Bhagavad Gita',
    headline: 'Ancient Wisdom for Modern Leaders',
    subtext: 'Discover the Arjuna in You — practical boardroom clarity and mental mastery decoded directly from timeless Gita principles',
    image: '/images/slider/gita.png',
    ctaText: 'Explore Gita Program',
    ctaLink: '/bhagavad-gita',
    accentColor: '#e16922',
    icon: BookOpen,
    highlights: ['Flagship Executive Workshop', '100% Free Weekly Chanting']
  },
  {
    id: 'corporate-consulting',
    vertical: 'Corporate Consulting',
    headline: 'Strategy That Moves the Needle',
    subtext: 'Hands-on boardroom advisory, India expansion strategies, and frontline process alignment to scale your business sustainably',
    image: '/images/slider/consulting-hero.jpg',
    ctaText: 'Our Consulting Approach',
    ctaLink: '/business-consulting',
    accentColor: '#0284c7',
    icon: Handshake,
    highlights: ['100+ Years Collective Exp', '75+ Organizations Guided']
  },
  {
    id: 'digital',
    vertical: 'Digital Solutions',
    headline: 'Websites, Apps & AI That Work for You',
    subtext: 'Modern high-speed web apps, intelligent AI workflows, and modern search visibility built to accelerate real business revenue',
    image: '/images/slider/digital-hero.jpg',
    ctaText: 'Explore Digital Services',
    ctaLink: '/digital',
    accentColor: '#06b6d4',
    icon: Cpu,
    highlights: ['Next.js Web & Mobile Apps', 'AI Agents & Modern SEO']
  },
  {
    id: 'training',
    vertical: 'Corporate Training',
    headline: 'Workshops That Build Stronger Teams',
    subtext: 'Experiential boardroom-caliber training in consultative selling, adaptive leadership, and high-trust team collaboration',
    image: '/images/slider/training-hero.jpg',
    ctaText: 'View Training Modules',
    ctaLink: '/corporate-training',
    accentColor: '#f59e0b',
    icon: GraduationCap,
    highlights: ['Experiential Learning', 'Custom Corporate Modules']
  }
];

const SLIDE_DURATION = 6000;

export default function HomeHeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef<number>(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  // Smooth auto-advance using requestAnimationFrame
  useEffect(() => {
    if (isPaused) return;

    const elapsed = (progress / 100) * SLIDE_DURATION;
    startTimeRef.current = Date.now() - elapsed;

    const tick = () => {
      const now = Date.now();
      const diff = now - startTimeRef.current;
      const pct = Math.min((diff / SLIDE_DURATION) * 100, 100);

      if (pct >= 100) {
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
        startTimeRef.current = Date.now();
      } else {
        setProgress(pct);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, current]);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      
      {/* Hero Canvas Container */}
      <div 
        className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-width Background Images with Smooth Cross-fade */}
        {slides.map((s, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={s.id}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              <Image
                src={s.image}
                alt={s.vertical}
                fill
                priority={idx === 0}
                className={`object-cover object-center transition-transform duration-1000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* Cinematic Gradient Overlays: lighter on right to keep image clear & vibrant */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        {/* Ambient Color Bloom behind card */}
        <div 
          className="absolute left-10 sm:left-24 top-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full pointer-events-none z-10 transition-colors duration-1000 blur-3xl opacity-25"
          style={{ backgroundColor: slide.accentColor }}
        />

        {/* Foreground Content: Sleek Frosted Glass Card */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 flex flex-col justify-center">
          
          <div className="max-w-2xl">
            {/* Frosted Glass Floating Card */}
            <div className="relative bg-slate-950/55 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-9 lg:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-300">
              
              {/* Card Top Row: Vertical Badge + Step Counter */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <span 
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md transition-all duration-300"
                  style={{
                    backgroundColor: `${slide.accentColor}20`,
                    borderColor: `${slide.accentColor}50`,
                    color: slide.accentColor
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {slide.vertical}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-slate-400">
                  <span style={{ color: slide.accentColor }} className="font-bold">
                    0{current + 1}
                  </span>
                  <span className="text-slate-600">/</span>
                  <span>0{slides.length}</span>
                </div>
              </div>

              {/* Headline */}
              <h1 
                key={`h-${current}`}
                className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-white leading-[1.12] tracking-tight"
                style={{ animation: 'heroFadeUp 0.5s ease-out' }}
              >
                {slide.headline}
              </h1>

              {/* Subtext */}
              <p 
                key={`p-${current}`}
                className="mt-3.5 text-sm sm:text-base text-slate-200/90 font-normal leading-relaxed"
                style={{ animation: 'heroFadeUp 0.5s ease-out 0.08s both' }}
              >
                {slide.subtext}
              </p>

              {/* Highlights Pill Badges */}
              <div 
                key={`hl-${current}`}
                className="mt-5 flex flex-wrap gap-2"
                style={{ animation: 'heroFadeUp 0.5s ease-out 0.14s both' }}
              >
                {slide.highlights.map((highlight, hIdx) => (
                  <span 
                    key={hIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.06] border border-white/10"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div 
                key={`cta-${current}`}
                className="mt-7 flex flex-wrap items-center gap-4"
                style={{ animation: 'heroFadeUp 0.5s ease-out 0.2s both' }}
              >
                <Link
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl text-white text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-200 hover:scale-[1.03]"
                  style={{ 
                    backgroundColor: slide.accentColor,
                    boxShadow: `0 8px 24px ${slide.accentColor}40`
                  }}
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#contact-help"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-slate-200 hover:text-white text-sm font-semibold border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-sm transition-all"
                >
                  <span>Consult an Advisor</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Sleek Floating Bottom Control Deck */}
        <div className="absolute bottom-6 left-0 right-0 z-30 px-4 sm:px-6 lg:px-12 pointer-events-none">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Minimalist Switcher Pills (Replaces bulky bottom bar) */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/15 shadow-xl pointer-events-auto">
              {slides.map((s, idx) => {
                const isActive = idx === current;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goTo(idx)}
                    className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive 
                        ? 'text-white shadow-md' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                    style={isActive ? { backgroundColor: `${s.accentColor}30`, borderColor: `${s.accentColor}60` } : undefined}
                  >
                    <span className="text-[10px] font-mono opacity-60">0{idx + 1}</span>
                    <span className="hidden sm:inline">{s.vertical}</span>
                    <span className="sm:hidden">{s.vertical.split(' ')[0]}</span>

                    {/* Integrated smooth progress line on active item */}
                    {isActive && (
                      <span 
                        className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full overflow-hidden"
                        style={{ backgroundColor: `${s.accentColor}40` }}
                      >
                        <span 
                          className="block h-full transition-all duration-75 ease-linear"
                          style={{ 
                            width: `${progress}%`, 
                            backgroundColor: s.accentColor 
                          }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Carousel Arrow Controls & Play/Pause */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/15 shadow-xl pointer-events-auto">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="w-8 h-8 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 ml-0.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Slide FadeUp Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}
