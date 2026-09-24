'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  Target, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  MapPin, 
  Building2, 
  Sparkles 
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function CorporateTrainingPage() {
  const trainingModules = [
    {
      title: "Discover the Arjuna in You – Bhagavad Gita for Corporates",
      desc: "Our signature program designed to increase productivity of individuals leading to incremental organizational productivity, blending ancient wisdom with modern management",
      audience: "Board of Directors, VPs, Senior General Managers & Emerging Leaders"
    },
    {
      title: "Sales & Marketing Certification Program",
      desc: "A must programme for middle management level sales personnel and entrepreneurs (Start Up, SME & MSME) to master consultative selling and market positioning",
      audience: "B2B Sales Teams, Account Managers & Entrepreneurs"
    },
    {
      title: "Leadership Communication & Business Communication",
      desc: "Comprehensive programs covering Negotiation, Time Management, Effective Presentation Skills, Logical Reasoning, Resume Writing and Interview Skills",
      audience: "Mid-Level Managers, Team Leads & Individual Contributors"
    },
    {
      title: "Behavioural & Soft Skills Training",
      desc: "Experiential behavioral simulations that connect with individuals at both the theory and practical level, delivered by faculty with 100+ years of collective corporate experience",
      audience: "Cross-Functional Teams, Operations & HR Departments"
    },
    {
      title: "Public Speaking – All Age Groups",
      desc: "Confidence-building public speaking workshops for professionals, students and all age groups, designed to develop persuasive communication and presentation mastery",
      audience: "All Age Groups – Professionals, Students & Individuals"
    }
  ];

  const tniSteps = [
    {
      step: "01",
      title: "Training Needs Identification (TNI)",
      desc: "Direct interviews with departmental heads to identify specific skill gaps rather than running generic off-the-shelf slide presentations"
    },
    {
      step: "02",
      title: "Contextual Simulation Design",
      desc: "Customizing roleplay cases with your company’s actual product lines, client objections, and operational bottlenecks"
    },
    {
      step: "03",
      title: "Experiential Delivery Lab",
      desc: "High-energy workshop delivery conducted either at our Ahmedabad Training Centre or on-site at client headquarters"
    },
    {
      step: "04",
      title: "Post-Workshop Impact Audit",
      desc: "Structured 30-day and 60-day behavioral reviews to ensure permanent adoption of the trained methodologies"
    }
  ];

  const trainingFaqs = [
    {
      q: "Can workshops be conducted at our own company offices?",
      a: "Yes. We deliver workshops on-site across India, as well as off-site retreats at our state-of-the-art training centre in Titanium Business Park, Ahmedabad."
    },
    {
      q: "How large are workshop cohorts?",
      a: "For intensive leadership masterclasses, we recommend 15 to 25 participants to guarantee personalized feedback and active participation in roleplay simulations."
    },
    {
      q: "What makes Hone ST training different from conventional corporate trainers?",
      a: "We replace passive PowerPoint lecturing with experiential behavioral roleplays, psychological composure frameworks, and measurable post-training follow-through."
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e16922]/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0284c7]/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef4ee] text-[#e16922] text-xs font-bold uppercase tracking-widest border border-[#e16922]/30">
                <GraduationCap className="w-3.5 h-3.5 text-[#e16922]" /> Corporate Learning &amp; TNI &bull; Together We Can Make a Difference
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 tracking-tight leading-[1.1]">
                Experiential Corporate Training that Builds <span className="text-[#e16922]">Lasting Capability</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                More than 75 organizations have benefitted from our programs with customized offerings based on Training Need Identification (TNI). Our highly professional faculties bring in a vast experience of <strong className="text-slate-900 font-semibold">100+ years</strong> from corporate environment which makes the trainings experiential and connects with individuals at both the theory and practical level. Corporate and individual trainings are also conducted at our <strong className="text-slate-900 font-semibold">State-of-the-Art Training Centre</strong>.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/#contact-help"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.01]"
                >
                  <span>Schedule Corporate Training Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about#centre"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Visit Ahmedabad Centre</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap gap-8 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-900 text-lg block font-display">100+ Yrs</span>
                  <span>Collective Experience</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-lg block font-display">Custom TNI</span>
                  <span>Needs Identification</span>
                </div>
                <div>
                  <span className="font-bold text-[#e16922] text-lg block font-display">Titanium Park</span>
                  <span>Physical Academy in Makarba</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/slider/training.png"
                  alt="Corporate Training Vertical"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#28c2ff] block mb-1">
                    Experiential Labs
                  </span>
                  <p className="text-lg font-display font-bold">
                    Transforming Workforce Mindsets
                  </p>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Roleplay Simulations &amp; Executive Composure Labs
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature Modules */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1.5 rounded-full border border-[#28c2ff]/30">
            Specialized Masterclasses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Our Core Corporate Training Programs
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Customized for each tier of leadership, from frontline supervisors to C-suite executives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingModules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e16922] bg-[#fef4ee] px-3 py-1 rounded-full border border-[#e16922]/20 inline-block">
                  Target Audience: {mod.audience}
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0284c7]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Includes Interactive Simulation Lab</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step TNI Process */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1.5 rounded-full border border-[#e16922]/30">
              Methodical Pedagogic Rigor
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              Our 4-Phase TNI Learning Framework
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Ensuring training delivers tangible business impact rather than temporary motivation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tniSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#0284c7] bg-[#eefaff] px-2.5 py-1 rounded-md mb-3 inline-block">
                    Phase {s.step}
                  </span>
                  <h4 className="font-display font-bold text-base text-slate-950 mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ahmedabad Training Centre Facility */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e16922]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#28c2ff] text-xs font-bold uppercase tracking-wider border border-white/20">
              <MapPin className="w-3.5 h-3.5" /> Ahmedabad Physical Academy
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight">
              Conduct Your Off-Site Retreat at Titanium Business Park
            </h3>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Escape daily workplace noise. Our dedicated facility in Makarba provides an acoustically calibrated boardroom and simulation arena for uninterrupted strategic planning and team breakthroughs.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/#contact-help"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.01]"
              >
                <span>Reserve Academy for Your Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919824004696"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Direct Inquiry: +91 98240 04696</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={trainingFaqs}
            title="Corporate Training FAQs"
            subtitle="Common questions about cohort sizes, customized curriculum, and venue arrangements"
          />
        </div>
      </section>

    </div>
  );
}
