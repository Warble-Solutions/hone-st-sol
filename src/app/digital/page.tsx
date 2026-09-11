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
  ExternalLink,
  ChevronRight,
  Terminal,
  Activity,
  Check
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

interface ArchitectureSim {
  id: string;
  name: string;
  tag: string;
  nodes: { step: string; title: string; desc: string }[];
  impact: string;
  latency: string;
}

const architectures: ArchitectureSim[] = [
  {
    id: 'ai-agents',
    name: 'Autonomous Operations Agent',
    tag: 'Enterprise Workflow Automation',
    nodes: [
      { step: '01', title: 'Trigger & Ingestion', desc: 'Inbound customer inquiry, invoice PDF, or CRM lead event.' },
      { step: '02', title: 'Contextual RAG & Multi-LLM', desc: 'Queries enterprise knowledge base with semantic vector retrieval.' },
      { step: '03', title: 'Automated Action Execution', desc: 'Updates ERP/CRM, generates personalized response, notifies team on Slack.' },
    ],
    impact: 'Cuts 20+ Hours/Week of manual employee busywork',
    latency: 'Sub-350ms processing',
  },
  {
    id: 'geo-search',
    name: 'Generative Engine Search (GEO/AEO)',
    tag: 'Next-Gen Search Optimization',
    nodes: [
      { step: '01', title: 'Entity Graph Mapping', desc: 'Structured JSON-LD schema across services, leadership, and case results.' },
      { step: '02', title: 'Citation Authority Engine', desc: 'Optimized citations referenced by ChatGPT, Perplexity & Claude.' },
      { step: '03', title: 'AI Overview Visibility', desc: 'Brand surfaces as the primary authoritative answer on Google AI Overviews.' },
    ],
    impact: '+280% increase in qualified inbound executive inquiries',
    latency: 'Real-time citation presence',
  },
  {
    id: 'nextjs-platform',
    name: 'High-Velocity Next.js Ecosystem',
    tag: 'Cloud-Native Architecture',
    nodes: [
      { step: '01', title: 'Turbopack SSR Engine', desc: 'Server-side rendering delivering sub-second First Contentful Paint.' },
      { step: '02', title: 'Edge CDN & API Layer', desc: 'Globally distributed edge compute with Razorpay/Stripe microservices.' },
      { step: '03', title: 'Conversion Funnel', desc: 'Frictionless interactive drawers, calculators, and automated lead capture.' },
    ],
    impact: 'Top 3% global web performance scores (99+ Lighthouse)',
    latency: 'Sub-80ms TTFB worldwide',
  },
];

const digitalPillars = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents & Workflows',
    badge: 'High Impact',
    tagline: 'Multi-Agent LLM Systems That Eliminate Human Bottlenecks',
    desc: 'Deploy custom autonomous multi-agent systems that ingest unstructured emails, extract document data, cross-reference ERP databases, and execute multi-step business actions with zero manual friction.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    icon: Bot,
    metrics: 'Save 15–25 Hours/Week per Department',
    stack: ['LangChain / LlamaIndex', 'Claude 3.5 & GPT-4o', 'pgvector & Pinecone', 'HubSpot & ERP Webhooks'],
    capabilities: [
      'Multi-agent task collaboration (Researcher → Drafter → Quality Auditor)',
      'Enterprise RAG architectures with secure internal company knowledge',
      'Autonomous CRM updates, lead scoring, and automated client triage',
      'Zero-leakage data privacy with on-premise or encrypted cloud models'
    ]
  },
  {
    id: 'apps',
    title: 'Custom Web & Mobile Applications',
    badge: 'Cloud Native',
    tagline: 'Engineered for High-Transaction Volume and Sub-Second Speeds',
    desc: 'We architect and build production-grade web applications and native iOS/Android mobile apps designed to scale seamlessly to tens of thousands of active users without downtime.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    icon: Smartphone,
    metrics: '99.99% Uptime with Sub-100ms API Latency',
    stack: ['Next.js 16 App Router', 'Flutter & React Native', 'Node.js & Python FastAPI', 'Razorpay & Stripe SDK'],
    capabilities: [
      'Modular microservices and REST/GraphQL API gateway design',
      'Native payment gateway integration (UPI, NetBanking, Cards, Razorpay)',
      'Role-based access control (RBAC) and multi-tenant admin dashboards',
      'Real-time websockets for live notifications, telemetry, and chats'
    ]
  },
  {
    id: 'websites',
    title: 'Modern Web Platforms & Hubs',
    badge: 'Conversion First',
    tagline: 'Aesthetic Authority That Turns Visitors into Enterprise Clients',
    desc: 'A slow or generic website damages your brand credibility. We build custom, visually stunning Next.js platforms that load instantly, tell your story with conviction, and capture high-intent inbound leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: Globe,
    metrics: 'Top 5% Global Lighthouse Performance',
    stack: ['Next.js App Router', 'Tailwind CSS', 'Turbopack', 'Vercel Edge Network'],
    capabilities: [
      'Sub-second First Contentful Paint with Server-Side Rendering (SSR)',
      'Interactive scope builders, live diagnostic widgets, and lead drawers',
      'Full WCAG AA accessibility and fluid responsive design on all screens',
      'Custom headless CMS integrations for seamless internal marketing updates'
    ]
  },
  {
    id: 'seo-geo',
    title: 'Next-Gen Search (GEO, AEO & SEO)',
    badge: 'Search Evolution',
    tagline: 'Rank on Traditional Google + ChatGPT, Perplexity & Claude',
    desc: 'Search has evolved beyond ten blue links. We optimize your digital presence for Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), ensuring AI bots cite your company as the verified authority.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    icon: Search,
    metrics: '+240% Lift in Qualified Inbound Search Leads',
    stack: ['JSON-LD Entity Graphs', 'Semantic Vector Indexing', 'Schema.org', 'Google Search Console'],
    capabilities: [
      'GEO optimization for ChatGPT, Perplexity, and Claude conversational answers',
      'Answer Engine Optimization (AEO) for Google AI Overviews and rich snippets',
      'Comprehensive Local SEO with verified multi-location schema in Gujarat & India',
      'Deep semantic content architecture targeting high-intent commercial queries'
    ]
  },
  {
    id: 'social',
    title: 'B2B Authority & Growth Marketing',
    badge: 'Pipeline Engine',
    tagline: 'Turn Online Presence into a Predictable Revenue Channel',
    desc: 'Establish executive thought leadership and brand resonance. We craft data-backed content calendars, short-form video strategies, and high-ROI targeted ad campaigns across LinkedIn, Meta, and YouTube.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    icon: Share2,
    metrics: '4x–7x ROAS on Targeted B2B Ad Funnels',
    stack: ['LinkedIn Executive Studio', 'Meta Business Suite', 'Google Ads', 'GA4 Analytics'],
    capabilities: [
      'Executive LinkedIn ghostwriting and thought leadership positioning',
      'Short-form vertical video scripting, editing, and YouTube optimization',
      'Full-funnel B2B performance advertising with custom retargeting pixels',
      'Transparent weekly pipeline reporting on cost-per-qualified-lead'
    ]
  },
  {
    id: 'lms-academies',
    title: 'Custom LMS & Course Academies',
    badge: 'Digital IP',
    tagline: 'Monetize & Scale Organizational Knowledge Online',
    desc: 'Transform your internal corporate training, executive coaching, and employee onboarding manuals into interactive digital academies complete with progress tracking, quizzes, and automated PDF certification.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    icon: GraduationCap,
    metrics: '82% Course Completion vs 12% Industry Average',
    stack: ['Custom LMS Architecture', 'Video Streaming CDNs', 'PDF Certificate Engine', 'Razorpay Subscriptions'],
    capabilities: [
      'Custom branded student and corporate employee dashboards',
      'Interactive assessments, case study simulators, and quiz engines',
      'Automated digital certificate generation with verifiable serial IDs',
      'Support for one-time purchases, subscription tiers, and corporate bulk seats'
    ]
  }
];

const availableScopeItems = [
  { name: 'Autonomous AI Agents', duration: '2–3 wks', category: 'ai' },
  { name: 'Modern Next.js Platform', duration: '3–4 wks', category: 'web' },
  { name: 'Generative Search (GEO/AEO)', duration: '2–3 wks', category: 'search' },
  { name: 'Custom Mobile / Web App', duration: '6–8 wks', category: 'app' },
  { name: 'Executive Social Media Engine', duration: 'Ongoing', category: 'growth' },
  { name: 'Interactive LMS Academy', duration: '3–4 wks', category: 'course' },
];

export default function DigitalSolutionsPage() {
  const [activeArchId, setActiveArchId] = useState('ai-agents');
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Autonomous AI Agents',
    'Modern Next.js Platform'
  ]);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeArch = architectures.find((a) => a.id === activeArchId) || architectures[0];

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
      q: "How do Autonomous AI Agents integrate with our existing enterprise software?",
      a: "We build secure API connectors with your current stack (Salesforce, HubSpot, Zoho, SAP, custom SQL databases, Slack). Our AI agents operate as specialized background microservices that listen to webhooks, retrieve verified context, execute approved actions, and log every step for full auditability."
    },
    {
      q: "What is Generative Engine Optimization (GEO/AEO) and why does it matter?",
      a: "Traditional SEO focuses on keyword rankings on Google's search results page. GEO and AEO optimize your company's semantic entity profile so that LLM-based engines (ChatGPT, Perplexity, Claude, Google AI Overviews) recognize and quote your business as the definitive source when prospective clients ask questions."
    },
    {
      q: "Can you rebuild our legacy website in Next.js without disrupting current traffic?",
      a: "Yes. We execute clean 301 redirect mappings, preserve your high-ranking URLs, and stage the entire build on private preview URLs. Once validated, we switch DNS with zero downtime."
    },
    {
      q: "Is our proprietary enterprise data protected when using AI models?",
      a: "100% yes. We deploy zero-data-retention enterprise API keys or private self-hosted open models (like Llama 3) in isolated VPCs. Your company data is never used to train public models."
    },
    {
      q: "What is the typical deployment timeline for a digital project?",
      a: "A dedicated AI agent or modern Next.js platform typically deploys within 3 to 5 weeks. Full-scale custom mobile apps and enterprise LMS portals take 6 to 10 weeks depending on custom feature complexity."
    }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-[#1e92bf] selection:text-white">
      
      {/* 1. Hero Section Infused with #1e92bf and #e16922 */}
      <section className="relative pt-12 pb-24 sm:pb-32 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#edf7fb]/60 via-white to-white">
        
        {/* Ambient Tech Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1e92bf]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#e16922]/8 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb + Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/" className="text-xs font-semibold text-slate-500 hover:text-[#1e92bf] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-semibold text-[#1e92bf]">Digital Practice</span>

            <div className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e92bf]/10 border border-[#1e92bf]/20 text-[#1e92bf] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1e92bf]" />
              <span>Full-Stack AI & Digital Engineering</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-950 tracking-tight leading-[1.08]">
              Autonomous AI Agents, Next.js Platforms &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e92bf] to-cyan-600">
                Generative Search.
              </span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              We design and deploy modern digital infrastructure built for the AI era &mdash; removing human operational bottlenecks, capturing enterprise search dominance, and converting visitors into loyal clients.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#scope-builder"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white font-bold text-sm shadow-md shadow-[#1e92bf]/25 transition-all hover:scale-102"
            >
              <span>Build Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#architectures"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors shadow-2xs"
            >
              <Cpu className="w-4 h-4 text-[#1e92bf]" />
              <span>Interactive Architecture Demo</span>
            </a>

            <Link
              href="/#contact-cta"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange-50 hover:bg-orange-100 text-[#e16922] font-semibold text-sm border border-[#e16922]/20 transition-colors"
            >
              <span>Book Architecture Call</span>
            </Link>
          </div>

          {/* Verified Tech Ecosystem Strip */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Battle-Tested Production Stack:
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              {[
                'Next.js 16 (App Router)',
                'Claude 3.5 & GPT-4o RAG',
                'Python FastAPI Microservices',
                'pgvector & Supabase',
                'Generative Search (GEO/AEO)',
                'Razorpay & Stripe SDK',
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Architecture Simulator */}
      <section id="architectures" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#1e92bf]/20 text-[#1e92bf] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
                <Activity className="w-3.5 h-3.5 text-[#1e92bf]" />
                <span>Live Architecture Simulator</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
                How Our Solutions Actually Work.
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                Click through our core technical architectures to view step-by-step workflow orchestration, latency targets, and direct enterprise ROI.
              </p>
            </div>

            {/* Architecture Selector Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              {architectures.map((arch) => {
                const isSelected = activeArchId === arch.id;
                return (
                  <button
                    key={arch.id}
                    onClick={() => setActiveArchId(arch.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1e92bf] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {arch.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Simulator Display Card */}
          <div className="rounded-3xl border-2 border-[#1e92bf]/30 bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e92bf] bg-[#1e92bf]/10 px-3 py-1 rounded-full">
                  {activeArch.tag}
                </span>
                <h3 className="text-2xl font-display font-extrabold text-slate-950 mt-2">
                  {activeArch.name} Workflow Flowchart
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                  ⚡ {activeArch.latency}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  ✓ Verified ROI
                </span>
              </div>
            </div>

            {/* Step Nodes Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {activeArch.nodes.map((node, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#edf7fb]/40 border border-[#1e92bf]/20 relative hover:bg-[#edf7fb]/80 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-[#1e92bf] text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      {node.step}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Node {i + 1}</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-slate-950 mb-1.5">
                    {node.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Impact Strip */}
            <div className="p-4 rounded-2xl bg-[#1e92bf]/10 border border-[#1e92bf]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1e92bf] shrink-0" />
                <span className="text-sm font-bold text-slate-900">
                  Measurable Operational Impact: {activeArch.impact}
                </span>
              </div>

              <Link
                href="/#contact-cta"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white text-xs font-bold transition-colors shadow-xs shrink-0"
              >
                <span>Deploy This Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. The 6 Core Digital Pillars (Interactive Command Center & Studio Inspector) */}
      <section id="pillars" className="py-24 sm:py-32 bg-white relative scroll-mt-20 overflow-hidden">
        
        {/* Subtle Ambient Tech Glows */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#1e92bf]/8 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#e16922]/6 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e92bf]/10 border border-[#1e92bf]/20 text-[#1e92bf] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-[#1e92bf]" />
                <span>The 6 Pillars of HoneST Digital Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-tight">
                Engineering Discipline.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e92bf] to-cyan-600">
                  Zero Technical Debt.
                </span>
              </h2>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                Click any pillar below to launch the interactive live inspector, test simulated architecture workflows, and explore verified enterprise deliverables.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Interactive Command Deck Active</span>
            </div>
          </div>

          {/* Interactive 6-Pillar Selector Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
            {digitalPillars.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activePillarIdx === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillarIdx(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white border-[#1e92bf] shadow-lg shadow-[#1e92bf]/15 ring-2 ring-[#1e92bf]/20'
                      : 'bg-slate-50 hover:bg-white border-slate-200/90 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#1e92bf] text-white shadow-xs'
                          : 'bg-white text-slate-500 border border-slate-200 group-hover:text-[#1e92bf]'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#1e92bf]' : 'bg-transparent'}`} />
                  </div>

                  <h3
                    className={`font-display font-bold text-xs sm:text-sm leading-snug line-clamp-2 ${
                      isSelected ? 'text-slate-950 font-extrabold' : 'text-slate-700 group-hover:text-slate-950'
                    }`}
                  >
                    {p.title.split(' &')[0]}
                  </h3>

                  <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px] font-semibold">
                    <span className={isSelected ? 'text-[#1e92bf] font-bold' : 'text-slate-400 group-hover:text-slate-600'}>
                      {isSelected ? 'Inspecting' : 'Explore'}
                    </span>
                    <ChevronRight className={`w-3 h-3 transition-transform ${isSelected ? 'text-[#1e92bf] translate-x-0.5' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Deep Inspector Stage (The Hero Command Box) */}
          <div className="rounded-3xl border-2 border-[#1e92bf]/30 bg-gradient-to-br from-[#edf7fb]/40 via-white to-white shadow-2xl shadow-slate-900/5 p-6 sm:p-10 lg:p-12 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Stage: Detailed Specifications & Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1e92bf] bg-[#1e92bf]/10 px-3 py-1 rounded-full">
                      Pillar {String(activePillarIdx + 1).padStart(2, '0')} &bull; {digitalPillars[activePillarIdx].badge}
                    </span>
                    <span className="text-xs font-bold text-[#e16922] bg-orange-50 px-2.5 py-1 rounded-full border border-[#e16922]/20">
                      ⚡ {digitalPillars[activePillarIdx].metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-950 leading-tight">
                    {digitalPillars[activePillarIdx].title}
                  </h3>
                  <p className="text-sm font-semibold text-[#1e92bf] mt-1">
                    {digitalPillars[activePillarIdx].tagline}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {digitalPillars[activePillarIdx].desc}
                </p>

                {/* Interactive Capability Checklist */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Core Technical Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {digitalPillars[activePillarIdx].capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-2.5 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1e92bf] shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Production Architecture Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {digitalPillars[activePillarIdx].stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-xs font-mono font-semibold text-slate-800"
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#1e92bf]/25 transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>Add {digitalPillars[activePillarIdx].title.split(' &')[0]} to Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/#contact-cta"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider border border-slate-200 transition-colors"
                  >
                    <span>Speak with Practice Lead</span>
                  </Link>
                </div>

              </div>

              {/* Right Stage: Interactive Sandbox / Technical Visualizer */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-md space-y-4">
                
                {/* Visualizer Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">
                      hone-st://{digitalPillars[activePillarIdx].id}.internal
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#1e92bf] bg-[#1e92bf]/10 px-2 py-0.5 rounded">
                    LIVE_SPEC
                  </span>
                </div>

                {/* Visual Graphic with Framed Imagery */}
                <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                  <Image
                    src={digitalPillars[activePillarIdx].image}
                    alt={digitalPillars[activePillarIdx].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-[#1e92bf]">
                      Production Ready
                    </p>
                    <p className="text-base font-display font-bold leading-tight mt-0.5">
                      {digitalPillars[activePillarIdx].metrics}
                    </p>
                  </div>
                </div>

                {/* Simulated Telemetry Log Console */}
                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1.5 mb-1.5">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ORCHESTRATOR STATUS: OK
                    </span>
                    <span>v2.4.0</span>
                  </div>
                  <p className="text-slate-300">
                    <span className="text-[#1e92bf]">&gt;</span> target: <span className="text-amber-300">{digitalPillars[activePillarIdx].title}</span>
                  </p>
                  <p className="text-slate-400">
                    <span className="text-[#1e92bf]">&gt;</span> framework: {digitalPillars[activePillarIdx].stack[0]}
                  </p>
                  <p className="text-emerald-400">
                    <span className="text-[#1e92bf]">&gt;</span> latency_target: sub-100ms
                  </p>
                  <p className="text-cyan-300 text-[11px] pt-1">
                    ✓ 100% Type-Safe &bull; Fully Managed Deployment
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Quick Comparison Cards for All 6 Pillars */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                All 6 Disciplines at a Glance:
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
                      ? 'bg-white border-[#1e92bf] shadow-md ring-1 ring-[#1e92bf]/30'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#1e92bf]">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {p.badge}
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-sm text-slate-900 leading-snug">
                    {p.title}
                  </h5>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {p.desc}
                  </p>
                  <p className="text-[11px] font-semibold text-[#1e92bf] mt-3 flex items-center gap-1">
                    <span>Inspect Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Super Interactive Scope Builder */}
      <section id="scope-builder" className="py-24 sm:py-32 bg-[#edf7fb]/40 border-y border-slate-200/80 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#1e92bf]/20 text-[#1e92bf] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Scope Configurator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              Configure Your Digital Solution.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Select the capabilities your enterprise needs to calculate estimated delivery timeframes and generate a custom proposal blueprint.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#1e92bf]/30 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Selectors */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Step 1: Select Required Practices
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableScopeItems.map((item) => {
                      const isChecked = selectedServices.includes(item.name);
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => toggleService(item.name)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                            isChecked
                              ? 'bg-[#1e92bf]/10 border-[#1e92bf] text-[#1e92bf] font-bold shadow-xs'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-900">{item.name}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">Est. {item.duration}</p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                              isChecked ? 'bg-[#1e92bf] border-[#1e92bf] text-white' : 'border-slate-300'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleScopeSubmit} className="space-y-3 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Step 2: Who Should We Send the Architecture Proposal To?
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#1e92bf] focus:ring-1 focus:ring-[#1e92bf] outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="work.email@company.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#1e92bf] focus:ring-1 focus:ring-[#1e92bf] outline-none"
                    />
                  </div>

                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp (+91 ...)"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#1e92bf] focus:ring-1 focus:ring-[#1e92bf] outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#1e92bf]/20 transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Request Custom Scope & Sprint Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center">
                    ✓ Scope received! An engineering lead will deliver your blueprint within 24 hours.
                  </div>
                )}
              </div>

              {/* Live Computed Summary Card */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1e92bf] bg-[#1e92bf]/10 px-2.5 py-0.5 rounded-full">
                    Live Computed Scope
                  </span>
                  <h4 className="text-xl font-display font-extrabold text-slate-950 mt-2">
                    {selectedServices.length} Selected Discipline{selectedServices.length > 1 ? 's' : ''}
                  </h4>
                </div>

                <div className="space-y-2 border-t border-slate-200 pt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Included Components:
                  </p>
                  <ul className="space-y-1.5">
                    {selectedServices.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1e92bf] shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <p className="font-bold text-slate-900">
                    Estimated Production Sprint:
                  </p>
                  <p className="text-slate-600 font-mono text-sm font-bold text-[#1e92bf]">
                    {selectedServices.length <= 2 ? '3–5 Weeks' : selectedServices.length <= 4 ? '5–8 Weeks' : '8–12 Weeks'} to Live Launch
                  </p>
                </div>

                <div className="text-[11px] text-slate-500 leading-relaxed">
                  Includes dedicated project lead, bi-weekly demo staging, CI/CD pipeline, and 60-day post-launch warranty.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Production Delivery Methodology (4-Step Sprints) */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e92bf]/10 border border-[#1e92bf]/20 text-[#1e92bf] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Clock className="w-3.5 h-3.5" />
              <span>Sprint Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              From Architecture to Production in 4 Sprints.
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              We run fast, transparent, agile sprints with bi-weekly demos &mdash; zero black-box development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Sprint 01',
                title: 'Architecture & Tech Discovery',
                desc: 'Deep audit of existing databases, API integrations, user journeys, and search keyword entities.',
              },
              {
                step: 'Sprint 02',
                title: 'Rapid Wireframes & AI Model Fine-Tuning',
                desc: 'Prompt engineering, vector index initialization, interactive Figma prototypes, and schema mapping.',
              },
              {
                step: 'Sprint 03',
                title: 'Full-Stack Next.js Engineering',
                desc: 'Production frontend build, cloud serverless microservices, security penetration testing, and payment gateway hookup.',
              },
              {
                step: 'Sprint 04',
                title: 'Launch, GEO Indexing & Support',
                desc: 'DNS switchover, automated Lighthouse performance verification, GEO citation indexing, and ongoing retainer support.',
              },
            ].map((sprint, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#1e92bf] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#1e92bf] bg-[#1e92bf]/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                    {sprint.step}
                  </span>
                  <h4 className="font-display font-extrabold text-base text-slate-950 mb-2">
                    {sprint.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
            title="Digital Engineering FAQs"
            subtitle="Clear answers on AI integrations, data security, GEO search, and production handovers."
          />
        </div>
      </section>

      {/* 7. Bottom Conversion Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#edf7fb] via-white to-orange-50 border-2 border-[#1e92bf]/30 shadow-lg shadow-slate-900/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1e92bf]">
                Ready to Build?
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                Partner with Ahmedabad&apos;s Premier Digital Engineering Agency.
              </h3>
              <p className="text-sm text-slate-600">
                Schedule a 45-minute technical discovery call with our solutions architects.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/#contact-cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1e92bf] hover:bg-[#177ba3] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#1e92bf]/25 transition-all hover:scale-102"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider border border-slate-200 transition-colors"
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
