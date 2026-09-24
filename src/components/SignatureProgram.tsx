import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollText, Sparkles, CheckCircle2, ArrowRight, ArrowUpRight, BookOpen, Video, MapPin, Heart } from 'lucide-react';

export default function SignatureProgram() {
  return (
    <section id="bhagavad-gita" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80 scroll-mt-20">
      <div id="arjuna-program" className="scroll-mt-24" />
      
      {/* Subtle Background Glows (Light Theme) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#e16922]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#28c2ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Spotlight Card */}
        <div className="rounded-3xl border-2 border-[#e16922]/20 bg-gradient-to-br from-[#fef4ee]/60 via-white to-orange-50/20 p-8 sm:p-14 shadow-xl shadow-orange-950/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef4ee] text-[#e16922] text-xs font-display font-extrabold uppercase tracking-widest border border-[#e16922]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#e16922]" />
                Hone ST Signature Landmark Program
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-950 tracking-tight leading-[1.1]">
                Discover the <span className="text-[#e16922]">Arjuna</span> in You
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                In moments of immense corporate stakes and personal uncertainty, hesitation costs everything. Grounded in Chapter 18 of the Shrimad Bhagavad Gita, this landmark signature program by <strong>Mr Prasun Kundu</strong> has transformed corporate boardrooms, entrepreneurs and students across India
              </p>

              <blockquote className="border-l-4 border-[#e16922] pl-5 py-2 italic text-slate-800 text-base font-medium bg-[#fef4ee]/70 rounded-r-2xl">
                &ldquo;Live life by DESIGN, not by DEFAULT. Bhagawan Shri Krishna teaches that true strength is not renouncing action, but acting with unwavering devotion, poise, and zero fear of failure.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#fef4ee] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e16922]" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Conquer Executive Delusion & Decision Hesitation</strong>
                    <span className="text-xs text-slate-600">Break through executive inertia using the 700-shloka scientific framework</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#eefaff] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Authentic Sanskrit Sound Vibration & Chanting Energy</strong>
                    <span className="text-xs text-slate-600">Learn accurate pronunciation and rhythm directly from Prasun Kundu</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#fef4ee] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e16922]" />
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">100% FREE In-Person Chanting at Ahmedabad Hub</strong>
                    <span className="text-xs text-slate-600">Weekly community sessions for children, youth and corporate executives</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about#centre"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-display font-bold text-sm shadow-lg shadow-[#e16922]/20 transition-all hover:scale-105"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Join Chanting at Ahmedabad Hub</span>
                </Link>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-display font-bold text-sm border-2 border-[#28c2ff] transition-colors shadow-xs"
                >
                  <Video className="w-4 h-4 text-red-600" />
                  <span>Watch Video Talks</span>
                </a>
              </div>

            </div>

            {/* Right Card Graphic with Real Photography */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl space-y-5">
                
                {/* Visual Header Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"
                    alt="Bhagavad Gita Wisdom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-[10px] font-display font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#e16922]">
                      Landmark Publication
                    </span>
                    <span className="text-[11px] font-bold">Chapter 18 Decoded</span>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4 text-xs text-slate-600 leading-relaxed">
                  <h3 className="text-xl font-display font-black text-slate-900">The Corporate Bhagavad Gita</h3>
                  <p>
                    A deeply researched corporate manual applying timeless principles of Nishkama Karma to modern management, team synchronization and personal equanimity
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#fef4ee] border border-[#e16922]/20 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#e16922] text-xs">Authored by</span>
                      <p className="font-display font-bold text-slate-900 text-base">Mr. Prasun Kundu</p>
                    </div>
                    <span className="text-[10px] font-display font-black uppercase px-3 py-1 rounded-full bg-[#e16922] text-white">
                      Bestselling
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#eefaff] border border-[#28c2ff]/30 flex items-center gap-3">
                    <Heart className="w-5 h-5 text-[#e16922] shrink-0" />
                    <p className="text-[11px] text-slate-800 font-medium">
                      <strong className="text-[#e16922]">50% of all proceeds</strong> directly support education and welfare of girls and underprivileged children
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/about#csr"
                      className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Read Book & Social Mission</span>
                      <ArrowUpRight className="w-4 h-4 text-[#28c2ff]" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
