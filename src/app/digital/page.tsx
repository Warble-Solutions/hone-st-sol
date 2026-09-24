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
  CheckCircle2, 
  Clock, 
  Sliders, 
  Activity, 
  ChevronRight,
  ShieldCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

interface SolutionWorkflow {
  id: string;
  name: string;
  tag: string;
  nodes: { step: string; title: string; desc: string }[];
  impact: string;
  speed: string;
}

const solutionWorkflows: SolutionWorkflow[] = [
  {
    id: 'smart-automation',
    name: 'Smart Business Automation',
    tag: 'Save Hours Every Week',
    nodes: [
      { step: '01', title: 'Inquiry or Task Arrives', desc: 'A customer reaches out via website form, WhatsApp message, email, or invoice upload' },
      { step: '02', title: 'Smart Processing & Drafting', desc: 'The system automatically verifies information, organizes records, and drafts the right response' },
      { step: '03', title: 'Instant Follow-Up & Team Alert', desc: 'The client receives an immediate helpful answer, records update automatically, and your team is alerted' },
    ],
    impact: 'Saves 15 to 25 hours per week of repetitive manual data entry and email follow-up',
    speed: 'Instant 24/7 Response',
  },
  {
    id: 'google-seo',
    name: 'Google Search & SEO Visibility',
    tag: 'Attract Ready Inbound Buyers',
    nodes: [
      { step: '01', title: 'Website & Keyword Setup', desc: 'We optimize page speed, clean layout, and the exact terms your prospective buyers search for' },
      { step: '02', title: 'Local & Online Credibility', desc: 'We register local business signals, Google Business profiles, and clear content search engines trust' },
      { step: '03', title: 'Inbound Customer Inquiries', desc: 'When clients look for your services on Google or AI search engines, your company ranks at the top' },
    ],
    impact: 'Steady, long-term flow of genuine business calls and inquiries',
    speed: 'Compounding Organic Reach',
  },
  {
    id: 'high-converting-web',
    name: 'High-Converting Websites & Apps',
    tag: 'Turn Visitors into Paying Clients',
    nodes: [
      { step: '01', title: 'Clear Design & Brand Trust', desc: 'Modern visuals, authentic team photos, and clear service explanations that build confidence instantly' },
      { step: '02', title: 'Instant Mobile Loading', desc: 'Engineered so pages load instantly on all smartphones, tablets, and computers without annoying lag' },
      { step: '03', title: 'Easy Contact & WhatsApp Ordering', desc: 'Frictionless quote forms, WhatsApp chat buttons, and smooth checkout to capture every potential lead' },
    ],
    impact: 'Higher conversion rates and immediate brand credibility for your business',
    speed: 'Sub-second page load',
  },
];

const digitalPillars = [
  {
    id: 'ai-agents',
    title: 'Smart AI & Business Automation',
    badge: 'Save Time & Effort',
    tagline: 'Automate Routine Tasks & Free Up Your Team to Focus on Growth',
    desc: 'Deploy custom AI assistants and smart workflows that handle repetitive customer inquiries, process documents, update your records, and automate daily tasks without manual delays',
    image: '/images/digital/ai-agents.jpg',
    icon: Bot,
    metrics: 'Save 15 to 25 Hours of Manual Work per Week',
    stack: ['AI Customer Assistants', 'Automated Workflows', 'CRM Connectors', 'Data Security'],
    capabilities: [
      'Automated replies to routine customer inquiries, WhatsApp messages, and emails',
      'Smart document and invoice data extraction into your spreadsheets or database',
      'Automatic lead qualification, follow-ups, and sales team notifications',
      'Strict confidentiality — your proprietary company data remains 100% private'
    ]
  },
  {
    id: 'apps',
    title: 'Custom Web & Mobile Applications',
    badge: 'Reliable & Fast',
    tagline: 'User-Friendly Apps for iOS, Android, and Web Browsers',
    desc: 'We design and build custom, easy-to-use web applications and native mobile apps that make it effortless for your clients and team to browse, order, and manage work on the go',
    image: '/images/digital/apps.jpg',
    icon: Smartphone,
    metrics: 'Smooth, Reliable & Zero Downtime',
    stack: ['Mobile Apps (iOS & Android)', 'Modern Web Apps', 'Secure Cloud Hosting', 'UPI & Card Payments'],
    capabilities: [
      'Clean, intuitive user interfaces designed for both iOS and Android',
      'Secure Indian payment gateway integration (UPI, NetBanking, Google Pay, Cards)',
      'Easy admin portals to manage orders, customer accounts, and records',
      'Real-time notifications, SMS alerts, and WhatsApp order status updates'
    ]
  },
  {
    id: 'websites',
    title: 'Modern Websites & Landing Pages',
    badge: 'High Conversion',
    tagline: 'Stunning, Fast Websites That Convert Visitors into Clients',
    desc: 'We create custom, professional websites that look impressive on every phone and screen, explain your value proposition with clarity, and make it easy for potential customers to get in touch',
    image: '/images/digital/websites.jpg',
    icon: Globe,
    metrics: 'Top Google Speed & Mobile Scores',
    stack: ['Modern Next.js & React', 'Mobile Responsive Layouts', 'Lead Capture Forms', 'Fast Cloud Hosting'],
    capabilities: [
      'Instant loading on mobile devices, tablets, and desktop computers',
      'Clear contact forms, instant WhatsApp chat, and interactive quote calculators',
      'Clean, trustworthy design that elevates your brand credibility',
      'Easy-to-use content management so you can update text and images anytime'
    ]
  },
  {
    id: 'seo-geo',
    title: 'Search Engine Optimization (SEO)',
    badge: 'Google Visibility',
    tagline: 'Get Found on Google When Customers Search for Your Services',
    desc: 'We optimize your website structure, local Google Business profile, and content so that ready-to-buy clients find your company at the top of Google and modern AI search engines',
    image: '/images/digital/seo-geo.jpg',
    icon: Search,
    metrics: 'Steady Inbound Calls & Enquiries',
    stack: ['Google Search Console', 'Google Business Profile', 'Keyword Research', 'Local SEO Schema'],
    capabilities: [
      'Comprehensive Google Search ranking optimization for your core service keywords',
      'Local Ahmedabad and India Google Maps optimization to attract nearby customers',
      'Modern AI search visibility for ChatGPT, Perplexity, and Google AI Overviews',
      'Clear, readable content that answers customer questions and builds buying trust'
    ]
  },
  {
    id: 'social',
    title: 'Social Media & Growth Marketing',
    badge: 'Brand Authority',
    tagline: 'Build Trust Online & Turn Social Followers into Paying Clients',
    desc: 'Establish executive credibility and strong brand awareness with targeted content calendars, engaging videos, and high-return advertising campaigns across LinkedIn, Meta, and Google',
    image: '/images/digital/growth-marketing.jpg',
    icon: Share2,
    metrics: 'Predictable Inquiries & Proven Ad ROI',
    stack: ['LinkedIn & Meta Ads', 'Video Creation', 'Content Strategy', 'Lead Analytics'],
    capabilities: [
      'Professional LinkedIn thought leadership and company page management',
      'Engaging short-form video scripting, editing, and YouTube optimization',
      'Targeted ad campaigns designed to generate high-intent phone and email leads',
      'Transparent monthly reports showing your reach, leads, and cost per inquiry'
    ]
  },
  {
    id: 'lms-academies',
    title: 'Online Training Portals & Academies',
    badge: 'Digital Learning',
    tagline: 'Host Video Courses, Employee Training & Certifications',
    desc: 'Transform your corporate training manuals, employee onboarding programs, or knowledge courses into an interactive branded online academy with video lessons, quizzes, and certificates',
    image: '/images/digital/lms-academies.jpg',
    icon: GraduationCap,
    metrics: 'Interactive Learning with Verifiable Certificates',
    stack: ['Video Course Player', 'Student Dashboards', 'Quiz Engine', 'Automated Certificates'],
    capabilities: [
      'Custom branded student and corporate employee learning portals',
      'Smooth video streaming and chapter-by-chapter quiz assessments',
      'Automated digital completion certificates with verifiable student credentials',
      'Support for single purchases, subscription models, or corporate group access'
    ]
  }
];

const availableScopeItems = [
  { name: 'Website Development', duration: '3 to 4 weeks', category: 'web' },
  { name: 'Mobile & Web App Development', duration: '6 to 8 weeks', category: 'app' },
  { name: 'Smart AI & Business Automation', duration: '2 to 3 weeks', category: 'ai' },
  { name: 'Search Engine Optimization (SEO)', duration: '2 to 3 weeks', category: 'search' },
  { name: 'Social Media Marketing & Management', duration: 'Monthly retainer', category: 'growth' },
  { name: 'Video Creation & Multimedia', duration: '2 to 3 weeks', category: 'creative' },
  { name: 'Graphic Design & Branding', duration: '1 to 2 weeks', category: 'design' },
  { name: 'Technical Support & Maintenance', duration: 'Ongoing support', category: 'support' },
];

export default function DigitalSolutionsPage() {
  const [activeWorkflowId, setActiveWorkflowId] = useState('smart-automation');
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Website Development',
    'Search Engine Optimization (SEO)'
  ]);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeWorkflow = solutionWorkflows.find((w) => w.id === activeWorkflowId) || solutionWorkflows[0];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const handleScopeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const digitalFaqs = [
    {
      q: "How will a new website or digital marketing help my business get more clients?",
      a: "A modern, fast website acts as your 24/7 digital storefront. When paired with Google SEO and active social media marketing, prospective buyers can easily find you, understand your credibility, and contact you directly via phone, form, or WhatsApp."
    },
    {
      q: "Can you redesign our existing website without losing our current Google rankings?",
      a: "Yes, absolutely. We carefully map your existing web pages, preserve high-performing URLs, and ensure all search traffic is seamlessly redirected to the new design without any downtime or loss in search position."
    },
    {
      q: "What is AI automation, and how can it help my day-to-day business operations?",
      a: "AI automation helps eliminate repetitive manual tasks — such as drafting replies to frequent customer inquiries, routing incoming lead forms, organizing invoice data, or sending automated notifications — freeing your team to focus on serving clients."
    },
    {
      q: "How long does it typically take to complete and launch a website or app?",
      a: "A standard business website typically launches within 3 to 4 weeks. Custom web applications, mobile apps, or online course academies take around 6 to 8 weeks depending on the features and content required."
    },
    {
      q: "Do you take care of website updates and maintenance after launch?",
      a: "Yes! We provide ongoing support and maintenance packages. We handle technical updates, security monitoring, content changes, and backups so you never have to worry about your site going down."
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#0284c7] selection:text-white">
      
      {/* 1. Cinematic Hero Section with digital-hero.jpg */}
      <section className="relative pt-12 pb-16 sm:pb-24 overflow-hidden border-b border-white/10 bg-slate-950 text-white">
        
        {/* Full-bleed Photographic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slider/digital-hero.jpg"
            alt="Digital Solutions Team"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle gradient overlays so background image remains visible while keeping text sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60" />
        </div>

        {/* Ambient Cyan/Blue Light Blooms */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0284c7]/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-[#28c2ff]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-[#28c2ff] transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#28c2ff] font-bold">Digital Practice</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284c7]/15 border border-[#0284c7]/40 text-[#28c2ff] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#28c2ff]" />
              <span>Modern Websites &amp; Digital Marketing</span>
            </div>
          </div>

          {/* Main Headline (Clear & Normie-Understandable) */}
          <div className="max-w-3xl space-y-5 mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
              Websites, Apps &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28c2ff] via-sky-400 to-cyan-200">
                Digital Growth
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              In the current context, businesses without digital presence are non-existent. Our Digital Solutions are helping organizations across the globe to make their presence felt and be omnipresent — from Website Development and maintenance, App Development, Social Media Management, SEO, Google Ads to content digitalization.
            </p>

            {/* Authentic Quote Chip from Original Website */}
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md space-y-1 max-w-2xl">
              <p className="text-xs sm:text-sm font-serif italic text-slate-300">
                &ldquo;Rebuild your personal or corporate image on the web. We connect businesses with customers online and promote the positive.&rdquo;
              </p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#28c2ff]">
                The Hone ST Solutions Digital Promise &bull; Together We Can Make a Difference
              </p>
            </div>

            {/* Highlight Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Mobile-Friendly Websites',
                'Google Search Ranking (SEO)',
                'Social Media & Videos',
                'Reliable Ongoing Support'
              ].map((chip, cIdx) => (
                <span 
                  key={cIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.06] border border-white/10 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="#scope-builder"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0284c7]/30 transition-all hover:scale-[1.02]"
            >
              <span>Plan Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#workflows"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-colors"
            >
              <Activity className="w-4 h-4 text-[#28c2ff]" />
              <span>See How We Deliver</span>
            </a>

            <Link
              href="/#contact-help"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Free Consultation</span>
            </Link>
          </div>

          {/* Verified Core Capabilities Strip */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Our Core Digital Services
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {[
                'Website & App Development',
                'Search Engine Optimization (SEO)',
                'Smart AI & Automation',
                'Social Media & Video',
                'Graphic Design & Branding',
                'Ongoing Support & Maintenance',
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Simple How It Works / Solution Workflows */}
      <section id="workflows" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#28c2ff]/30 text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-3">
                <Activity className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>Simple, Proven Workflows</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
                How We Deliver Results for Your Business
              </h2>
              <p className="mt-3 text-slate-600 text-base font-normal">
                Click below to see how our straightforward digital workflows attract potential customers, streamline inquiries, and save your team valuable hours
              </p>
            </div>

            {/* Workflow Selector Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200">
              {solutionWorkflows.map((workflow) => {
                const isSelected = activeWorkflowId === workflow.id;
                return (
                  <button
                    key={workflow.id}
                    onClick={() => setActiveWorkflowId(workflow.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0284c7] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {workflow.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Workflow Display Card */}
          <div className="rounded-3xl border-2 border-[#28c2ff]/30 bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-[#eefaff] px-3 py-1 rounded-full">
                  {activeWorkflow.tag}
                </span>
                <h3 className="text-2xl font-display font-black text-slate-950 mt-2">
                  {activeWorkflow.name}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                  ⚡ {activeWorkflow.speed}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  ✓ Proven Client Value
                </span>
              </div>
            </div>

            {/* Step Nodes Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {activeWorkflow.nodes.map((node, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#eefaff]/40 border border-[#28c2ff]/20 relative hover:bg-[#eefaff]/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-[#0284c7] text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      {node.step}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">Step {i + 1}</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-slate-950 mb-1.5">
                    {node.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Impact Strip */}
            <div className="p-4 rounded-2xl bg-[#eefaff] border border-[#28c2ff]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0284c7] shrink-0" />
                <span className="text-sm font-bold text-slate-900">
                  Measurable Result: {activeWorkflow.impact}
                </span>
              </div>

              <Link
                href="/#contact-help"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition-colors shadow-xs shrink-0"
              >
                <span>Get Started with This Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The 6 Core Digital Pillars */}
      <section id="pillars" className="py-20 sm:py-28 bg-white relative scroll-mt-20 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eefaff] border border-[#28c2ff]/30 text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>The 6 Pillars of Hone ST Digital Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
                Everything Your Business Needs to Succeed Online
              </h2>
              <p className="mt-3 text-slate-600 text-base font-normal">
                Click any service below to explore what we create, how it works, and how it helps your company stand out
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>6 Core Services Available</span>
            </div>
          </div>

          {/* Interactive 6-Pillar Selector Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            {digitalPillars.map((p, idx) => {
              const isSelected = activePillarIdx === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillarIdx(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white border-[#0284c7] shadow-lg shadow-[#0284c7]/15 ring-2 ring-[#0284c7]/20'
                      : 'bg-slate-50 hover:bg-white border-slate-200/90 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#0284c7] text-white shadow-xs'
                          : 'bg-white text-slate-500 border border-slate-200 group-hover:text-[#0284c7]'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#0284c7]' : 'bg-transparent'}`} />
                  </div>

                  <h3
                    className={`font-display font-bold text-xs sm:text-sm leading-snug line-clamp-2 ${
                      isSelected ? 'text-slate-950 font-extrabold' : 'text-slate-700 group-hover:text-slate-950'
                    }`}
                  >
                    {p.title.split(' &')[0]}
                  </h3>

                  <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px] font-semibold">
                    <span className={isSelected ? 'text-[#0284c7] font-bold' : 'text-slate-400 group-hover:text-slate-600'}>
                      {isSelected ? 'Viewing' : 'Explore'}
                    </span>
                    <ChevronRight className={`w-3 h-3 transition-transform ${isSelected ? 'text-[#0284c7] translate-x-0.5' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Inspector Stage */}
          <div className="rounded-3xl border-2 border-[#28c2ff]/30 bg-gradient-to-br from-[#eefaff]/40 via-white to-white shadow-2xl shadow-slate-900/5 p-6 sm:p-10 lg:p-12 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Stage */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0284c7] bg-[#eefaff] px-3 py-1 rounded-full">
                      Pillar {String(activePillarIdx + 1).padStart(2, '0')} &bull; {digitalPillars[activePillarIdx].badge}
                    </span>
                    <span className="text-xs font-bold text-[#e16922] bg-orange-50 px-2.5 py-1 rounded-full border border-[#e16922]/20">
                      ⚡ {digitalPillars[activePillarIdx].metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-950 leading-tight">
                    {digitalPillars[activePillarIdx].title}
                  </h3>
                  <p className="text-sm font-semibold text-[#0284c7] mt-1">
                    {digitalPillars[activePillarIdx].tagline}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {digitalPillars[activePillarIdx].desc}
                </p>

                {/* Capability Checklist */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    What We Build &amp; Deliver
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {digitalPillars[activePillarIdx].capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-2.5 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities Chips */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Platforms &amp; Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {digitalPillars[activePillarIdx].stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Strip */}
                <div className="pt-4 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => {
                      toggleService(digitalPillars[activePillarIdx].title.split(' &')[0]);
                      const el = document.getElementById('scope-builder');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0284c7]/20 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <span>Add to Project Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/#contact-help"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors"
                  >
                    <span>Speak with Our Team</span>
                  </Link>
                </div>

              </div>

              {/* Right Stage: Image Visualizer with Distinct Photos */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-md space-y-4">
                
                {/* Visualizer Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-medium text-slate-500 ml-2">
                      Hone ST Digital Practice &bull; Ahmedabad
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0284c7] bg-[#eefaff] px-2 py-0.5 rounded">
                    VERIFIED SERVICE
                  </span>
                </div>

                {/* Visual Graphic with Unique High-Res Photo for Each Pillar */}
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                  <Image
                    src={digitalPillars[activePillarIdx].image}
                    alt={digitalPillars[activePillarIdx].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#28c2ff]">
                      {digitalPillars[activePillarIdx].badge}
                    </p>
                    <p className="text-base font-display font-bold leading-tight mt-0.5">
                      {digitalPillars[activePillarIdx].metrics}
                    </p>
                  </div>
                </div>

                {/* Client-Centric Advantage Box */}
                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs space-y-2.5 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1.5 mb-1.5">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      THE HONE ST PROMISE
                    </span>
                    <span className="text-slate-400">100+ Years Experience</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <p className="flex items-center gap-2">
                      <span className="text-[#28c2ff] font-bold">✓</span>
                      <span>Custom designed specifically for your brand and business goals</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#28c2ff] font-bold">✓</span>
                      <span>100% mobile-friendly, ultra-fast, and tested across all screens</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#28c2ff] font-bold">✓</span>
                      <span>Dedicated team and prompt, friendly ongoing support</span>
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Quick Comparison Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                All 6 Core Services at a Glance
              </h4>
              <span className="text-xs text-slate-400">Click any card to inspect above</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {digitalPillars.map((p, idx) => (
                <div
                  key={p.id}
                  onClick={() => setActivePillarIdx(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    activePillarIdx === idx
                      ? 'bg-white border-[#0284c7] shadow-md ring-1 ring-[#0284c7]/30'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#0284c7]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {p.badge}
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-sm text-slate-900 leading-snug">
                    {p.title}
                  </h5>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 font-normal">
                    {p.desc}
                  </p>
                  <p className="text-[11px] font-semibold text-[#0284c7] mt-3 flex items-center gap-1">
                    <span>View Service Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Scope Builder */}
      <section id="scope-builder" className="py-20 sm:py-28 bg-[#eefaff]/40 border-y border-slate-200/80 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#28c2ff]/30 text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Project Planner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              Plan Your Digital Project
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
              Select the services your business needs to estimate the timeline and receive a free, personalized proposal
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#28c2ff]/30 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Selector List */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Select Required Services
                </p>

                <div className="space-y-2.5">
                  {availableScopeItems.map((item, idx) => {
                    const isChecked = selectedServices.includes(item.name);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleService(item.name)}
                        className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                          isChecked
                            ? 'bg-[#eefaff] border-[#0284c7] text-slate-900 shadow-xs'
                            : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                              isChecked
                                ? 'bg-[#0284c7] border-[#0284c7] text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <p className="text-xs font-bold">{item.name}</p>
                            <p className="text-[11px] text-slate-500 font-normal">Estimated timeline: {item.duration}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <form onSubmit={handleScopeSubmit} className="space-y-3 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Get a Free Proposal &amp; Quote
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Work Email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] outline-none"
                    />
                  </div>

                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp (+91 ...)"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Request Free Proposal &amp; Cost Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center">
                    ✓ Thank you! We have received your request. Our team will get in touch with you within 24 hours.
                  </div>
                )}
              </div>

              {/* Computed Summary Card */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7] bg-[#eefaff] px-2.5 py-0.5 rounded-full">
                    Your Selected Plan
                  </span>
                  <h4 className="text-xl font-display font-black text-slate-950 mt-2">
                    {selectedServices.length} Selected Service{selectedServices.length > 1 ? 's' : ''}
                  </h4>
                </div>

                <div className="space-y-2 border-t border-slate-200 pt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Included Services
                  </p>
                  <ul className="space-y-1.5">
                    {selectedServices.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <p className="font-bold text-slate-900">
                    Estimated Timeline to Launch
                  </p>
                  <p className="text-[#0284c7] font-semibold text-sm">
                    {selectedServices.length <= 2 ? '3 to 5 Weeks' : selectedServices.length <= 4 ? '5 to 8 Weeks' : '8 to 12 Weeks'} to Live Launch
                  </p>
                </div>

                <div className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Includes dedicated project lead, regular review meetings, thorough quality testing, and 60 days of post-launch support
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Clear 4-Step Process */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eefaff] border border-[#28c2ff]/30 text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Simple 4-Step Journey to Your New Website or App
            </h2>
            <p className="mt-3 text-slate-600 text-base font-normal">
              We keep the entire process clear, collaborative, and completely stress-free with regular progress updates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Step 01',
                title: 'Discovery & Strategy',
                desc: 'We understand your business goals, target audience, and specific requirements to plan the right digital solution',
              },
              {
                step: 'Step 02',
                title: 'Design & Visual Layout',
                desc: 'We craft clean, modern visual designs, brand graphics, and mobile previews for your review and feedback',
              },
              {
                step: 'Step 03',
                title: 'Development & Testing',
                desc: 'We build your fast, secure website or app, test all forms and buttons, and ensure perfect display on all screens',
              },
              {
                step: 'Step 04',
                title: 'Launch & Ongoing Support',
                desc: 'We connect your domain, set up Google Search presence, launch smoothly, and provide dependable ongoing maintenance',
              },
            ].map((sprint, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#0284c7] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#0284c7] bg-[#eefaff] px-2.5 py-1 rounded-md mb-3 inline-block">
                    {sprint.step}
                  </span>
                  <h4 className="font-display font-bold text-base text-slate-950 mb-2">
                    {sprint.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {sprint.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Digital Solutions FAQ Accordion */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={digitalFaqs}
            title="Frequently Asked Questions"
            subtitle="Clear answers on our website development, digital marketing, timelines, and support"
          />
        </div>
      </section>

      {/* 7. Bottom Conversion Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#eefaff] via-white to-orange-50 border-2 border-[#28c2ff]/30 shadow-lg shadow-slate-900/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                Let&apos;s Build Together
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950">
                Ready to Grow Your Digital Presence?
              </h3>
              <p className="text-sm text-slate-600 font-normal">
                With 100+ years of collective experience, our Ahmedabad team is ready to build your website, enhance your brand, and support your growth.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/#contact-help"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.01]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors"
              >
                <span>Meet Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
