'use client';

import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Amit Bose",
    title: "Business Director",
    company: "DSM B2C Business MANDI",
    tag: "Corporate Leadership & Chanting",
    quote: "The Bhagavad Gita is an incredible scripture that teaches one and all how to live life, and how in spiritual progress, it's not really giving up actions, but actually how to do the action with full devotion and single-minded focus without fear of failure. Chanting with Prasun elevates the entire experience. During group chanting, different thoughts converge into one rhythm, generating huge positive energy that empowers and awakens us.",
    rating: 5,
    initials: "AB"
  },
  {
    id: 2,
    name: "Varsha Adhikari",
    title: "Managing Director",
    company: "Tinctura Colour",
    tag: "Chanting Diction & Family Wellness",
    quote: "Earlier, chanting for me was just reciting some selective shlokas. But chanting with Prasun opened up a new vista and perspective to understand the importance of sound energy. Prasun helped me to improve my diction with his chaste uccharan and simple, specific instructions. He made us repeat and absorb the verse completely. The whole process helped me and my family welcome Gita with love and reverence into our lives.",
    rating: 5,
    initials: "VA"
  },
  {
    id: 3,
    name: "Mr. Amit Gulati",
    title: "CEO",
    company: "My Car My Ride",
    tag: "AMA Ahmedabad Workshop Alumnus",
    quote: "I distinctly remember going to a workshop conducted by Mr. Prasun Kundu at AMA, Ahmedabad on 'Discover the Arjuna in You'. The workshop was exceptional, but I was awestruck by Prasun's pronunciation of the shlokas. That compelled me to learn how to read and chant shlokas properly. It was Prasun's patience and methodology that helped me learn. Learning from Bhagavad Gita helps me overcome delusion and anxiety in corporate decision-making every time.",
    rating: 5,
    initials: "AG"
  },
  {
    id: 4,
    name: "Khushal Lalwani",
    title: "Entrepreneur & Founder",
    company: "Lalwani Enterprises",
    tag: "Executive Composure & Equipoise",
    quote: "Blessed to be a part of enchanting Shri Bhagavad Gita chanting with Prasun. With every shloka, I felt decluttered, and many confusions were cleared. There is something so liberating that I am not able to express in words. Every chanting session prepared us for modern-day business challenges and made us far more equipoised in high-pressure situations.",
    rating: 5,
    initials: "KL"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200/60">
              Client Success Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-950 tracking-tight">
              The Word from <span className="gradient-text-blue">Industry Leaders</span>
            </h2>
            <p className="text-base text-slate-600">
              Read authentic feedback from executives who engaged with our business consulting, AMA workshops, and Bhagavad Gita programs.
            </p>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="p-3.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white shadow-xs cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white shadow-xs cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-3xl bg-slate-50/80 border border-slate-200 p-8 sm:p-14 relative overflow-hidden shadow-lg shadow-slate-100">
          
          <div className="absolute top-8 right-8 text-slate-200/80 pointer-events-none">
            <Quote className="w-24 h-24 sm:w-32 sm:h-32 opacity-40" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-6">
            
            {/* Stars & Tag */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-white px-3.5 py-1 rounded-full border border-slate-200/80 shadow-xs">
                {t.tag}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-xl sm:text-2xl text-slate-800 font-medium leading-relaxed font-sans">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author Profile */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black text-lg flex items-center justify-center shadow-md shadow-blue-500/20">
                {t.initials}
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  {t.name}
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {t.title} &bull; <strong className="text-slate-800">{t.company}</strong>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Indicators */}
          <div className="mt-8 pt-4 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === current ? 'w-10 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
