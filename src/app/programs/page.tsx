'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Phone, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import ProgramsSection from '@/components/ProgramsSection';
import FAQAccordion from '@/components/FAQAccordion';

export default function ProgramsPage() {
  const programFaqs = [
    {
      q: "Is there any registration fee for the chanting sessions?",
      a: "No. Both 'Gita Chanting Is Enchanting' (adults) and 'Gita Chanting Is Enchanting for Children' are 100% free of charge as part of HoneST Solutions' community wisdom initiative."
    },
    {
      q: "Where are the in-person sessions held?",
      a: "All sessions are conducted in our state-of-the-art training centre at A-814, Titanium Business Park, Off Corporate Road, Makarba, Ahmedabad."
    },
    {
      q: "What is the schedule for each program?",
      a: "Adult Chanting runs every Monday to Friday from 3:00 PM to 4:00 PM. Children Chanting runs every Sunday morning from 11:00 AM to 12:00 PM."
    },
    {
      q: "Do participants need prior knowledge of Sanskrit?",
      a: "No prior knowledge is needed. Mr. Prasun Kundu guides participants step-by-step through authentic pronunciation (uccharan), rhythmic recitation, and the practical philosophical meaning of each shloka."
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      
      {/* Page Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e16922]/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#28c2ff]/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef4ee] text-[#e16922] text-xs font-bold uppercase tracking-widest border border-[#e16922]/30">
            <Heart className="w-3.5 h-3.5 text-[#e16922] fill-[#e16922]" /> 100% Free Community Initiatives
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Weekly Gita Chanting &amp; <span className="text-[#e16922]">Inner Transformation</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Conducted at our state-of-the-art training centre in Makarba, Ahmedabad. Nurturing mental poise for adults and timeless ethical values for children.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
              <Calendar className="w-4 h-4 text-[#e16922]" />
              <span>Weekday &amp; Sunday Cohorts</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
              <MapPin className="w-4 h-4 text-[#0284c7]" />
              <span>Titanium Business Park, Ahmedabad</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Inquiry: +91 98240 04696</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 2 Authentic Programs (with uncropped posters & Lightbox) */}
      <ProgramsSection />

      {/* Programs FAQs */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={programFaqs}
            title="Program Participation FAQs"
            subtitle="Details on attending our free weekly chanting sessions in Ahmedabad"
          />
        </div>
      </section>

    </div>
  );
}
