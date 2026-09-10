'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Bot, 
  Smartphone, 
  Globe, 
  Search, 
  Share2, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  Zap, 
  Cpu, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Send,
  Sliders,
  TrendingUp,
  BarChart3,
  Code2,
  ExternalLink
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function DigitalSolutionsPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'AI Agents & Automation',
    'Modern Websites & Platforms'
  ]);
  const [timeline, setTimeline] = useState('4-6 Weeks');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadCompany, setLeadCompany] = useState('');

  const digitalServices = [
    {
      id: 'ai-agents',
      title: 'AI Agents & Automation',
      badge: 'High Impact',
      tagline: 'Autonomous Workflows That Eliminate Operational Drag',
      desc: 'Deploy custom multi-agent LLM systems that read incoming emails, manage CRM updates, answer high-tier support tickets, and run multi-step back-office reconciliations without human bottlenecks.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      icon: Bot,
      accentColor: '#e16922',
      metrics: 'Save 15-25 Hours/Week per Department',
      capabilities: [
        'LangChain & LlamaIndex RAG architectures with internal docs',
        'Multi-agent task collaboration (Researcher -> Drafter -> Auditor)',
        'Bi-directional sync with HubSpot, Salesforce, Zoho & Slack',
        'Secure enterprise OpenAI/Anthropic APIs or on-premise models'
      ]
    },
    {
      id: 'apps',
      title: 'Custom Mobile & Web Apps',
      badge: 'Scalable Systems',
      tagline: 'Cloud-Native Web and Mobile Applications Built to Scale',
      desc: 'We architect and develop robust web applications and native iOS/Android mobile apps engineered for speed, high transaction volumes, and flawless user experiences.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      icon: Smartphone,
      accentColor: '#28c2ff',
      metrics: '99.9% Uptime with Sub-100ms API Response',
      capabilities: [
        'Modern frontend stacks (Next.js, React, Tailwind, Flutter)',
        'Microservices, Node.js, Python FastAPI, and serverless backends',
        'Secure payment integrations (Razorpay, Stripe, NetBanking, UPI)',
        'Role-based access control (RBAC), multi-tenant SaaS dashboards'
      ]
    },
    {
      id: 'websites',
      title: 'Modern Websites & Platforms',
      badge: 'Conversion-First',
      tagline: 'Sub-Second Speeds & Modern Aesthetic Authority',
      desc: 'In today’s market, a slow website destroys corporate credibility. We build lightning-fast, beautifully designed web platforms that capture enterprise leads and communicate your brand pedigree.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      icon: Globe,
      accentColor: '#e16922',
      metrics: 'Top 5% Global Lighthouse Scores Guaranteed',
      capabilities: [
        'Next.js App Router with Server-Side Rendering (SSR) & Turbopack',
        'Conversion-optimized layout with interactive modals and trust badges',
        'WCAG AA accessible, responsive across smartphones, tablets, 4K displays',
        'Zero-maintenance Headless CMS or modern customized backends'
      ]
    },
    {
      id: 'seo-geo',
      title: 'Next-Gen Search (SEO, GEO & AEO)',
      badge: 'Search Evolution',
      tagline: 'Rank in Traditional Google + ChatGPT, Perplexity & AI Overviews',
      desc: 'Search has fundamentally changed. We optimize your brand not only for standard keywords but for Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), ensuring AI engines recommend your business as the definitive answer.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      icon: Search,
      accentColor: '#28c2ff',
      metrics: '+240% Average Increase in Qualified Organic Inquiries',
      capabilities: [
        'Generative Engine Optimization (GEO) for ChatGPT & Perplexity citations',
        'Answer Engine Optimization (AEO) for Google AI Overviews and voice queries',
        'Comprehensive Local SEO with JSON-LD Schema (Ahmedabad & National)',
        'Deep semantic entity graphs and technical sitemap restructuring'
      ]
    },
    {
      id: 'social',
      title: 'Social Media & Growth Marketing',
      badge: 'Authority Engine',
      tagline: 'Turn Online Presence into a Predictable Lead Engine',
      desc: 'Establish executive thought leadership and brand resonance. We craft data-driven content calendars, short-form video strategies, and high-ROI targeted ad campaigns across LinkedIn, Instagram, and YouTube.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      icon: Share2,
      accentColor: '#e16922',
      metrics: 'Consistent 4x-8x ROAS on Targeted B2B Ad Funnels',
      capabilities: [
        'Executive LinkedIn positioning & thought leadership ghostwriting',
        'Short-form vertical video scripting, editing, and YouTube optimization',
        'Full-funnel performance ads (Meta, Google Search, LinkedIn Ads)',
        'Bi-weekly analytics reporting on follower quality, engagement & pipeline'
      ]
    },
    {
      id: 'course-design',
      title: 'Interactive Course Design & LMS',
      badge: 'Knowledge IP',
      tagline: 'Transform Corporate Knowledge into Interactive Digital Academies',
      desc: 'Turn internal training manuals, onboarding binders, and executive workshops into engaging, interactive e-learning modules with video lessons, exercises, and automated certifications.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      icon: GraduationCap,
      accentColor: '#28c2ff',
      metrics: '85% Course Completion Rate vs 12% Industry Average',
      capabilities: [
        'Custom interactive LMS portals and gated member dashboards',
        'Interactive assessments, case study simulators, and quiz engines',
        'Gamified progress tracking and automated PDF certificate generation',
        'Content digitalization from raw video/audio into clean chapters'
      ]
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Diagnostic Audit & Tech Discovery",
      desc: "We analyze your current digital footprint, speed bottlenecks, manual process leaks, and competitive search gaps."
    },
    {
      num: "02",
      title: "Blueprint & Architecture Sprint",
      desc: "We design high-fidelity interactive wireframes, select the optimal tech stack, and map out the data schemas and AI workflows."
    },
    {
      num: "03",
      title: "Agile Rapid Development",
      desc: "We build iteratively in 2-week sprints with live preview staging URLs, rigorous QA testing, and continuous client feedback."
    },
    {
      num: "04",
      title: "Deployment & Growth Scaling",
      desc: "Zero-downtime DNS launch, telemetry tracking (GA4), search console indexing, and team training on your new systems."
    }
  ];

  const digitalFaqs = [
    {
      q: "What is GEO and AEO, and why does my business need them in 2026?",
      a: "Traditional SEO targets keywords on standard search engine results pages. However, modern executives and buyers increasingly use AI assistants like ChatGPT, Perplexity, Claude, and Google AI Overviews to research solutions. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) structure your brand's data, citations, and authority so AI models synthesize and recommend your company directly in answers."
    },
    {
      q: "How long does a typical digital project take from start to finish?",
      a: "A modern, high-performance website or landing page suite takes approximately 3 to 4 weeks. Custom AI agent workflows and full-stack web/mobile applications typically require 4 to 8 weeks depending on integration complexity and testing scope."
    },
    {
      q: "Can our existing team easily update content after the site is launched?",
      a: "Yes. We build using modular component architecture, and we can wire your platform into a headless CMS or provide an intuitive admin dashboard so your marketing team can publish blogs, update services, and manage media with zero coding."
    },
    {
      q: "How does HoneST ensure our internal data remains secure when deploying AI Agents?",
      a: "Security is paramount. We implement strict data isolation protocols. Your proprietary business data and customer records are never used to train public models. We utilize SOC-2 compliant enterprise APIs and can deploy dedicated, private self-hosted models within your own cloud boundary if required."
    }
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      
      {/* Light Theme Hero Section with subtle accent glows */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#28c2ff]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#e16922]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e16922]/10 text-[#e16922] text-xs font-extrabold uppercase tracking-widest border border-[#e16922]/25 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e16922]" /> Digital Engineering & AI Hub
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-slate-950 tracking-tight max-w-5xl mx-auto leading-[1.1]">
            Engineering Scalable Growth with <span className="text-[#e16922]">AI Agents</span> &amp; <span className="text-[#28c2ff]">Next-Gen Platforms</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Consolidating modern web engineering, autonomous AI workflows, mobile applications, and search intelligence (SEO, GEO & AEO) into a single, high-velocity powerhouse.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#audit"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#e16922] hover:bg-[#d05c19] text-white font-bold text-sm shadow-xl shadow-[#e16922]/25 transition-all hover:scale-105 cursor-pointer"
            >
              <span>Get a Custom Digital Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services-breakdown"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs hover:border-[#28c2ff] hover:text-[#28c2ff] transition-all"
            >
              <span>Explore All 6 Pillars</span>
            </a>
          </div>

          {/* Quick Metrics Strip (Light Theme) */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-200">
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-slate-950">10x</p>
              <p className="text-xs text-slate-500 font-semibold mt-1">Automation Velocity</p>
            </div>
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-[#28c2ff]">&lt; 0.8s</p>
              <p className="text-xs text-slate-500 font-semibold mt-1">Sub-Second Loads</p>
            </div>
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-[#e16922]">100%</p>
              <p className="text-xs text-slate-500 font-semibold mt-1">GEO / AI-Search Ready</p>
            </div>
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-slate-900">75+</p>
              <p className="text-xs text-slate-500 font-semibold mt-1">Enterprises Scaled</p>
            </div>
          </div>

        </div>
      </section>

      {/* The 6 Core Pillars Breakdown with Rich Photography */}
      <section id="services-breakdown" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#e16922]/10 px-4 py-1.5 rounded-full border border-[#e16922]/25">
            Comprehensive Digital Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-950 tracking-tight">
            The 6 Pillars of HoneST Digital Engineering
          </h2>
          <p className="text-base text-slate-600">
            Designed to replace fragmented freelancers and outdated vendors with one coordinated, institutional-grade digital partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalServices.map((service) => {
            const Icon = service.icon;
            const isOrange = service.accentColor === '#e16922';
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#28c2ff]/60 transition-all duration-300 card-rds flex flex-col justify-between group"
              >
                <div>
                  {/* Photographic Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md backdrop-blur-md"
                        style={{ backgroundColor: isOrange ? '#e16922' : '#28c2ff', color: '#ffffff' }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-xs font-extrabold text-white tracking-wide drop-shadow-sm line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-display font-black text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Capabilities List */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Deliverables
                      </p>
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-[#28c2ff] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome metric & CTA */}
                <div className="p-7 pt-0">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800 flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-[#e16922] shrink-0" />
                    <span>{service.metrics}</span>
                  </div>

                  <a
                    href="#audit"
                    onClick={() => {
                      if (!selectedServices.includes(service.title)) {
                        setSelectedServices([...selectedServices, service.title]);
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#e16922] hover:text-white text-slate-700 text-xs font-bold text-center block transition-all"
                  >
                    Select for Scope Audit &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4-Step Agile Delivery Framework (Light Theme) */}
      <section className="py-24 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#28c2ff] bg-[#28c2ff]/10 px-4 py-1.5 rounded-full border border-[#28c2ff]/25">
              Battle-Tested Methodology
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-slate-950">
              From Diagnosis to Autonomous Deployment
            </h2>
            <p className="text-base text-slate-600">
              A transparent, 4-step roadmap engineered for predictability, zero scope creep, and rapid ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 space-y-4 hover:border-[#28c2ff] hover:bg-white transition-all card-rds group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-display font-black text-2xl text-[#e16922] shadow-xs group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Scope & Audit Estimator */}
      <section id="audit" className="py-24 bg-slate-50/60 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-14 shadow-xl shadow-slate-200/50">
            
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e16922]/10 text-[#e16922] text-xs font-bold uppercase tracking-widest border border-[#e16922]/25">
                <Sliders className="w-3.5 h-3.5" /> Interactive Scope Builder
              </div>
              <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">
                Design Your Digital Growth Package
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Select your required capabilities below. Our technical partners will prepare a complimentary audit and feasibility blueprint within 24 hours.
              </p>
            </div>

            {/* Service Toggle Chips */}
            <div className="space-y-3 mb-8">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                1. Select Desired Capabilities (Click to toggle)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {digitalServices.map((s) => {
                  const isSelected = selectedServices.includes(s.title);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.title)}
                      className={`p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#e16922] bg-[#e16922] text-white shadow-md shadow-[#e16922]/20' 
                          : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-300'}`} />
                        <span className="text-xs sm:text-sm font-bold">{s.title}</span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {s.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Picker */}
            <div className="space-y-3 mb-8">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                2. Target Delivery Timeline
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['2-3 Weeks (Fast Track)', '4-6 Weeks (Standard)', '8+ Weeks (Enterprise)'].map((tOption) => (
                  <button
                    key={tOption}
                    type="button"
                    onClick={() => setTimeline(tOption)}
                    className={`py-3.5 px-3 rounded-2xl text-center text-xs font-bold border transition-all cursor-pointer ${
                      timeline === tOption
                        ? 'border-[#28c2ff] bg-[#28c2ff]/10 text-[#0284c7] shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {tOption}
                  </button>
                ))}
              </div>
            </div>

            {/* Submission Form */}
            {formSubmitted ? (
              <div className="p-7 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Audit Request Confirmed!</h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you! Our senior digital architects have received your request for <strong>{selectedServices.join(', ')}</strong> on a <strong>{timeline}</strong> timeline. We will deliver your diagnostic audit to <strong>{leadEmail}</strong> within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Company / Business Name *</label>
                    <input
                      type="text"
                      required
                      value={leadCompany}
                      onChange={(e) => setLeadCompany(e.target.value)}
                      placeholder="e.g. Apex Enterprises Ahmedabad"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#e16922]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="executive@company.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#e16922]"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                  <span>Selected Pillars: <strong className="text-[#e16922]">{selectedServices.length} Active Services</strong></span>
                  <span>Estimated Schedule: <strong className="text-[#28c2ff]">{timeline}</strong></span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#e16922] hover:bg-[#d05c19] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#e16922]/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Receive Free Audit &amp; Architectural Blueprint</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        faqs={digitalFaqs}
        title="Digital Solutions &amp; Tech FAQs"
        subtitle="Key details regarding our code ownership, security, and AI integrations."
      />

    </div>
  );
}
