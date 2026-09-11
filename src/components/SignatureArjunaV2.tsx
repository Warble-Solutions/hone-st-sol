'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Heart, 
  BookOpen, 
  ExternalLink,
  ShieldCheck,
  Award,
  Video
} from 'lucide-react';

interface PrincipleItem {
  id: string;
  name: string;
  sanskrit: string;
  meaning: string;
  takeaway: string;
}

const principles: PrincipleItem[] = [
  {
    id: 'moha-nash',
    name: 'Conquer Executive Hesitation',
    sanskrit: 'नष्टो मोहः स्मृतिर्लब्धा (Moha-Nash)',
    meaning: '"My delusion is destroyed, and clarity is restored."',
    takeaway: 'Overcoming the cognitive paralysis that strikes leaders during restructuring, competitive warfare, and boardroom impasses.',
  },
  {
    id: 'nishkama-karma',
    name: 'Equanimity in Execution',
    sanskrit: 'कर्मण्येवाधिकारस्ते (Nishkama Karma)',
    meaning: '"Focus entirely on precision of action, free from anxiety of outcomes."',
    takeaway: 'Eliminating the burnout and emotional volatility that derail high-growth executive teams in volatile markets.',
  },
  {
    id: 'nishchay',
    name: 'Unshakable Moral Authority',
    sanskrit: 'करिष्ये वचनं तव (Nishchay)',
    meaning: '"I shall now act with unwavering conviction."',
    takeaway: 'Aligning corporate governance with personal values so leadership commands authentic loyalty and high morale.',
  },
];

export default function SignatureArjunaV2() {
  const [activePrinciple, setActivePrinciple] = useState<string>('moha-nash');
  const activeData = principles.find((p) => p.id === activePrinciple) || principles[0];

  return (
    <section id="bhagavad-gita" className="py-24 sm:py-32 bg-white relative scroll-mt-20 overflow-hidden border-t border-slate-200/80">
      <div id="arjuna-program" className="absolute -top-20" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#e16922]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-[#e16922]/20 text-[#e16922] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Leadership Landmark Program</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
            Discover the <span className="text-[#e16922]">Arjuna</span> in You.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            In moments of immense corporate stakes and personal uncertainty, hesitation costs everything. Grounded in Chapter 18 of the Shrimad Bhagavad Gita, this landmark curriculum by <strong>Mr. Prasun Kundu</strong> has transformed boardrooms and executives across India.
          </p>
        </div>

        {/* Interactive Master Card */}
        <div className="rounded-3xl border-2 border-[#e16922]/20 bg-gradient-to-br from-[#fffbf7] via-white to-orange-50/20 p-8 sm:p-12 lg:p-14 shadow-xl shadow-orange-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Principle Switcher */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Interactive Chapter 18 Framework:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {principles.map((p) => {
                    const isSelected = activePrinciple === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setActivePrinciple(p.id)}
                        className={`text-left p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#e16922] text-[#e16922] shadow-sm ring-1 ring-[#e16922]/30'
                            : 'bg-white/70 hover:bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <p className="font-extrabold text-[13px]">{p.name}</p>
                        <p className="text-[10px] text-slate-400 mt-1 truncate">{p.sanskrit}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Principle Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#e16922]/20 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e16922] bg-orange-50 px-2.5 py-1 rounded-md">
                    {activeData.sanskrit}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Chapter 18 Decoded</span>
                </div>
                <blockquote className="text-sm font-semibold text-slate-800 italic border-l-3 border-[#e16922] pl-3 py-0.5">
                  {activeData.meaning}
                </blockquote>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeData.takeaway}
                </p>
              </div>

              {/* Core Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-slate-200">
                  <Award className="w-5 h-5 text-[#e16922] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">AMA Signature Program</p>
                    <p className="text-[11px] text-slate-500">Celebrated at Ahmedabad Management Association</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-slate-200">
                  <Heart className="w-5 h-5 text-[#e16922] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">50% Proceeds to Charity</p>
                    <p className="text-[11px] text-slate-500">Supports education of underprivileged girls</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/about#centre"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-sm shadow-md shadow-[#e16922]/20 transition-transform hover:scale-102"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Join Sunday Chanting (100% Free)</span>
                </Link>

                <Link
                  href="/#contact-cta"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors shadow-2xs"
                >
                  <span>Book Corporate Gita Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right: Modern Visual & Free Chanting RSVP Spotlight */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Image Card */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"
                  alt="Discover the Arjuna in You"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-300 mb-0.5">
                    Authored by Mr. Prasun Kundu
                  </p>
                  <h4 className="text-lg font-display font-extrabold leading-snug">
                    The Corporate Bhagavad Gita
                  </h4>
                </div>
              </div>

              {/* Free Sunday Chanting Community Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Weekly Sunday Chanting
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    100% FREE
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <p className="flex items-center gap-2 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#e16922]" /> Every Sunday, 9:00 AM IST
                  </p>
                  <p className="flex items-center gap-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#e16922]" /> Ahmedabad State-of-the-Art Training Centre
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-2">
                  Open to all children, students, youth, and corporate executives. Master correct Sanskrit phonetics and unlock inner calm.
                </p>

                <Link
                  href="/about#centre"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  <span>View Training Centre & Map</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
