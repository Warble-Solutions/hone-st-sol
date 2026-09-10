import React from 'react';
import HeroRollingBanner from '@/components/HeroRollingBanner';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import SignatureProgram from '@/components/SignatureProgram';
import ClientTicker from '@/components/ClientTicker';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoWisdom from '@/components/VideoWisdom';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Building2, BookOpen, Compass, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const homeFaqs = [
    {
      q: "What makes HoneST Solutions unique compared to typical consulting agencies?",
      a: "HoneST Solutions combines 50+ years of collective high-level boardroom execution with deep-rooted philosophical wisdom and cutting-edge digital AI engineering. We don't just hand over slide decks; we work side-by-side with leadership in Ahmedabad and across India to implement systems, train teams experiential-first, and deploy automated tech."
    },
    {
      q: "How does the 'Discover the Arjuna in You' program work for corporate teams?",
      a: "Rooted in Chapter 18 of the Shrimad Bhagavad Gita, this signature program was designed by Mr. Prasun Kundu and celebrated at institutions like the Ahmedabad Management Association (AMA). It transforms executive decision-making, overcomes organizational delusion/hesitation, and restores equipoise under high-stakes corporate pressure."
    },
    {
      q: "Can we engage HoneST Solutions strictly for Digital Engineering & AI Agents?",
      a: "Yes! Our Digital Solutions vertical operates as a dedicated high-performance agency. We engineer autonomous AI agents, custom mobile/web apps in Next.js, and spearhead Generative Engine Optimization (GEO/AEO) for modern search visibility."
    },
    {
      q: "Are the Bhagavad Gita chanting sessions truly free of charge?",
      a: "Yes. In line with our foundational mission and values, all in-person Gita chanting sessions held at our Ahmedabad State-of-the-Art Training Centre and virtual broadcasts are 100% free of charge for children, students, and adults."
    },
    {
      q: "Where do book proceeds go?",
      a: "50% of all proceeds from 'The Corporate Bhagavad Gita – Discover the Arjuna in You' and related publications are donated directly to charities supporting the education and welfare of girls and underprivileged children."
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Rolling Hero Banner with Ken Burns zoom, dual CTAs, and photographic slides */}
      <HeroRollingBanner />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. 10 Services Grid across 5 Verticals with rich photographic headers */}
      <ServicesGrid />

      {/* 4. Signature Program Spotlight */}
      <SignatureProgram />

      {/* 5. Client Logos Strip */}
      <ClientTicker />

      {/* 6. Testimonials Carousel */}
      <TestimonialsSection />

      {/* 7. Video & Wisdom Media */}
      <VideoWisdom />

      {/* 8. Home FAQ Section */}
      <FAQAccordion 
        faqs={homeFaqs} 
        title="Frequently Asked Questions" 
        subtitle="Clarifying our consulting methodology, digital solutions, and wisdom programs."
      />

      {/* Pre-Footer Quick Jump Banner (Light Theme RDS style) */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-[#e16922]/10 text-[#e16922] flex items-center justify-center font-bold shrink-0 shadow-inner">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e16922] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#e16922]"></span>
                  Next Generation Capabilities
                </div>
                <h4 className="text-xl font-display font-extrabold text-slate-900">Explore Our Comprehensive Digital Suite</h4>
                <p className="text-sm text-slate-500 mt-0.5">Dive into AI Agents, Apps, Next.js Platforms & Generative Search.</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 shrink-0">
              <Link
                href="/digital"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-[#28c2ff] hover:text-[#28c2ff] text-slate-800 font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <span>Go to Digital Hub</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#28c2ff]" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#e16922] hover:bg-[#d05c19] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#e16922]/20"
              >
                <span>Meet Our Founders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
