'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Clock,
  Sparkles,
  Award,
  Layers,
  Workflow,
  Compass,
  Briefcase,
  AlertCircle,
  Phone,
  Mail,
  Check,
  X,
  Zap,
  Radio,
  Cpu,
  ShoppingBag,
  Factory,
  Bot,
  Truck,
  HardHat,
  PackageCheck
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

interface DiagnosticChallenge {
  id: string;
  tag: string;
  title: string;
  symptom: string;
  rootCause: string;
  honestApproach: string;
  targetOutcome: string;
  metric: string;
}

const diagnosticChallenges: DiagnosticChallenge[] = [
  {
    id: "founder-bottleneck",
    tag: "Leadership & Autonomy",
    title: "The Promoter Bottleneck & Firefighting",
    symptom: "Every routine operational decision, supplier issue, and department sign-off waits on the business owner, stalling daily agility",
    rootCause: "Reviewing people rather than processes, missing Delegation of Authority (DoA) matrices, and absence of standardized operating procedures",
    honestApproach: "We review processes (not people) to put the right systems in place, empowering middle management to run daily operations with clear accountability",
    targetOutcome: "Promoter recovers 15+ hours weekly for strategic growth while operations run smoothly on repeatable SOPs",
    metric: "15+ hrs/week recovered"
  },
  {
    id: "sales-inconsistency",
    tag: "Revenue Engine",
    title: "Unpredictable Sales & GTM Friction",
    symptom: "Revenue fluctuates widely across quarters, closing cycles drag on, and frontline sales lack a unified Route-To-Market (RTM) strategy",
    rootCause: "Disconnect between strategic brand intent and last-mile execution, plus incentive models decoupled from gross margins",
    honestApproach: "We design robust RTM/GTM plans, engineer stage-gate sales qualification, and execute with frontline teams right down to the last mile",
    targetOutcome: "Consistent quarterly cash flows, disciplined pipeline visibility, and accelerated closing cycles",
    metric: "30-40% faster closing cycles"
  },
  {
    id: "departmental-silos",
    tag: "Operational Harmony",
    title: "Departmental Silos & Internal Friction",
    symptom: "Sales, operations, and finance operate in disconnected silos with conflicting priorities, leading to order delays and customer dissatisfaction",
    rootCause: "Absence of cross-departmental alignment toward common organizational goals and missing Service Level Agreements (SLAs)",
    honestApproach: "Seamless integration of all departments with an unwavering focus on organizational goals, unified rhythm meetings, and synchronized handoffs",
    targetOutcome: "Eliminated operational friction, synchronized order-to-dispatch fulfillment, and high customer retention",
    metric: "95%+ on-time SLA fulfillment"
  },
  {
    id: "scaling-barrier",
    tag: "Expansion & Succession",
    title: "INR 50Cr to 500Cr Scaling Barrier",
    symptom: "The company has achieved product-market fit, but scaling from INR 50Cr toward INR 500Cr breaks existing informal management styles",
    rootCause: "Growing complexity requires transitioning from founder intuition to institutional systems, professional leadership, and succession readiness",
    honestApproach: "We introduce a professional approach, install data-driven management insights, and prepare internal talent for seamless generational succession",
    targetOutcome: "Structured, de-risked enterprise scale ensuring growth happens 'BECAUSE' and not merely 'INSPITE'",
    metric: "Scalable INR 50Cr–500Cr model"
  }
];

// The 5 Core Pillars directly from the original Hone ST Solutions services
const coreConsultingServices = [
  {
    id: "strategic-planning",
    icon: Compass,
    accent: "#0284c7",
    title: "Strategic Planning",
    tagline: "Bridging where you are with where you MUST belong",
    description: "Designing a comprehensive Strategic Plan for the organization based on empirical market research, your current competitive position, and the apex position the enterprise MUST command in the market",
    deliverables: [
      "Empirical research-backed strategic roadmaps",
      "Competitive positioning & market whitespace analysis",
      "Goal setting & executive scorecards aligned to vision",
      "Risk mitigation & contingency frameworks"
    ]
  },
  {
    id: "marketing-sales",
    icon: TrendingUp,
    accent: "#e16922",
    title: "Marketing & Sales (RTM / GTM)",
    tagline: "Strategic brand intent executed to the last mile",
    description: "Creating a dominant brand by blending your organization's strategic intent across offline and online channels, complemented by a robust Route-To-Market (RTM) and Go-To-Market (GTM) plan executed right down to the last mile",
    deliverables: [
      "Unified online and offline brand integration",
      "Robust RTM/GTM strategy and channel partner governance",
      "Last-mile execution frameworks for frontline sales teams",
      "Customer acquisition & retention value loops"
    ]
  },
  {
    id: "operations-excellence",
    icon: Workflow,
    accent: "#059669",
    title: "Operations Excellence",
    tagline: "Mitigating competition and unexpected disruptions",
    description: "Each operation of your business must achieve operational excellence to excel in competitive markets. We review and optimize end-to-end workflows to eliminate bottlenecks and insulate against market turbulence",
    deliverables: [
      "Process review (focusing on processes, not people)",
      "Standard Operating Procedures (SOPs) with visual control",
      "Bottleneck elimination & cycle time reduction",
      "Cross-departmental Service Level Agreements (SLAs)"
    ]
  },
  {
    id: "organizational-development",
    icon: Building2,
    accent: "#7c3aed",
    title: "Organizational Development",
    tagline: "Seamless departmental integration focused on GOALS",
    description: "Dismantling friction between sales, accounts, dispatch, and procurement. We achieve seamless integration of all departments with a singular, unyielding focus on collective organizational goals",
    deliverables: [
      "Inter-departmental alignment & unified rhythm meetings",
      "Delegation of Authority (DoA) matrices",
      "Key Result Area (KRA) & KPI governance architecture",
      "Transparent management information systems (MIS)"
    ]
  },
  {
    id: "people-development",
    icon: Users,
    accent: "#d97706",
    title: "People Development & Succession",
    tagline: "Continuous upskilling and robust leadership succession",
    description: "People are the ultimate asset of any business. We continuously upgrade and upskill your workforce to outpace competition while preparing a rock-solid, future-proof succession plan for key roles",
    deliverables: [
      "Workforce capability gap analysis & upskilling roadmaps",
      "Next-generation executive mentoring & succession blueprints",
      "High-performance, high-trust workplace culture building",
      "Promoter-to-professional leadership handover frameworks"
    ]
  }
];

// The 6 Core Benefits from the original Hone ST Solutions site
const sixKeyBenefits = [
  {
    icon: BarChart3,
    title: "Scale Up",
    desc: "Scale sales turnover from INR 50Cr toward INR 500Cr with structured capacity"
  },
  {
    icon: Briefcase,
    title: "More Professional Approach",
    desc: "Transition from owner-driven firefighting into a professionally managed enterprise"
  },
  {
    icon: Workflow,
    title: "Streamline Systems & Processes",
    desc: "Put the right repeatable systems in place so operations run smoothly every day"
  },
  {
    icon: Target,
    title: "Data-Driven Insights",
    desc: "Base strategic decisions on empirical operational data rather than intuition"
  },
  {
    icon: ShieldCheck,
    title: "Achieve Objectivity",
    desc: "Gain an unbiased, seasoned third-party perspective to resolve complex dilemmas"
  },
  {
    icon: Users,
    title: "Create Value for All Stakeholders",
    desc: "Drive lasting commercial value for customers, employees, and promoters alike"
  }
];

// The 4-Step Methodology from Hone ST codebase
const consultingSteps = [
  {
    step: "01",
    duration: "Weeks 1–2",
    title: "Diagnostic Operational Audit",
    desc: "Forensic review of workflows, departmental friction points, revenue leakage, and executive time allocation without disrupting active customer fulfillment"
  },
  {
    step: "02",
    duration: "Weeks 3–4",
    title: "Strategic Alignment & Governance",
    desc: "Realigning boardroom goals with frontline KPIs so every functional leader rows in the exact same strategic direction with clear Delegation of Authority"
  },
  {
    step: "03",
    duration: "Weeks 5–12",
    title: "Process Standardization Blueprint",
    desc: "Deploying repeatable SOPs, clear reporting metrics, and management dashboards—reviewing processes (not people) to eliminate everyday chaos"
  },
  {
    step: "04",
    duration: "Month 4 Onwards",
    title: "Capability Handover & Scaling",
    desc: "Upskilling and mentoring internal leadership to run the standardized systems autonomously without permanent external consultant dependency"
  }
];

// The 9 exact verified industries from the original Hone ST site
const originalIndustries = [
  { name: "Manufacturing", icon: Factory, note: "Shopfloor SOPs, productivity & capacity optimization" },
  { name: "Retail", icon: ShoppingBag, note: "Store footprints, retail inventory & sales discipline" },
  { name: "FMCG", icon: PackageCheck, note: "Route-to-Market (RTM), distributor networks & territory scale" },
  { name: "Renewable Energy", icon: Zap, note: "Project governance, vendor coordination & scaling" },
  { name: "Technology", icon: Cpu, note: "Service delivery pods, SLA adherence & contract profitability" },
  { name: "Telecommunications", icon: Radio, note: "Infrastructure management, customer ops & channel governance" },
  { name: "Automation", icon: Bot, note: "Process instrumentation, machine uptime & systems integration" },
  { name: "Trading", icon: Truck, note: "Working capital cycles, logistics & margin protection" },
  { name: "Infrastructure", icon: HardHat, note: "Timeline adherence, cost rationalization & execution control" }
];

const comparisonPoints = [
  {
    dimension: "Advisory Faculty",
    honest: "Boardroom veterans with 100+ years collective ground-level execution experience",
    traditional: "Junior analysts presenting theoretical academic frameworks"
  },
  {
    dimension: "Engagement Style",
    honest: "Shoulder-to-shoulder on-the-ground implementation alongside your staff",
    traditional: "Deliver a 200-page slide deck and depart"
  },
  {
    dimension: "Core Philosophy",
    honest: "Review processes (not people) to ensure growth 'BECAUSE' and not 'INSPITE'",
    traditional: "Generic cost-cutting and disruptive personnel reshuffles"
  },
  {
    dimension: "SME & Promoter Focus",
    honest: "Deeply attuned to Indian enterprises scaling from INR 50Cr to INR 500Cr",
    traditional: "Cookie-cutter Western corporate bureaucracy ill-fitted for Indian promoters"
  },
  {
    dimension: "End Goal",
    honest: "Complete capability handover so you never remain permanently dependent on consultants",
    traditional: "Perpetual retainers engineered to create client lock-in"
  }
];

const consultingFaqs = [
  {
    q: "What types of businesses benefit most from your consulting?",
    a: "Businesses doing a sales turnover of INR 50 Cr. to INR 500 Cr. are the ones looking to scale up by introducing a professional approach and putting the right systems and processes in place. We work across industries—manufacturing, retail, FMCG, renewable energy, technology, and more—because the need for real-world execution expertise and objective perspective is universal."
  },
  {
    q: "What does 'Review processes (not people)' mean in practice?",
    a: "When business errors or delivery delays occur, organizations often make the mistake of blaming or replacing individuals. We examine the underlying process, handover protocols, and tools first. When the right systems and clear SOPs are put in place, people perform with confidence, accountability, and excellence."
  },
  {
    q: "What is your philosophy on growth 'BECAUSE' and not 'INSPITE'?",
    a: "Many Indian enterprises grow initially due to raw promoter grit, favorable market tailwinds, or sheer hustle—growing 'INSPITE' of chaotic internal systems. Our consulting ensures your enterprise grows 'BECAUSE' of robust strategic planning, disciplined RTM/GTM sales execution, streamlined operations, and seamless departmental synergy."
  },
  {
    q: "How long does a typical consulting engagement last?",
    a: "Our initial diagnostic operational audit takes 2 to 3 weeks. Full organizational alignment, SOP deployment, and frontline coaching typically run across 3 to 6 months with bi-weekly review checkpoints, culminating in an autonomous capability handover to your leadership team."
  },
  {
    q: "How is Hone ST Solutions different from large corporate consulting firms?",
    a: "Large corporate firms typically assign junior analysts who deliver theoretical presentations that gather dust. Guided by our belief that 'Together We Can Make a Difference', our senior faculty brings over 100 years of collective high-level leadership experience to work directly on the ground alongside your promoters and department heads in Ahmedabad and across India."
  },
  {
    q: "How is confidentiality and business data protected?",
    a: "Before reviewing any operational workflows, financial records, or strategic plans, we execute a legally binding Non-Disclosure Agreement (NDA). All client discussions, operational findings, and proprietary data remain strictly confidential."
  }
];

export default function BusinessConsultingPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>(diagnosticChallenges[0].id);

  const activeChallenge = diagnosticChallenges.find(c => c.id === selectedChallenge) || diagnosticChallenges[0];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-slate-900">
      
      {/* 1. Cinematic Hero Section with Background Image */}
      <section className="relative pt-12 pb-16 sm:pb-24 overflow-hidden border-b border-white/10 bg-slate-950 text-white">
        
        {/* Full-bleed Photographic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slider/consulting-hero.jpg"
            alt="Business Consulting Leadership"
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
          
          {/* Breadcrumb & Practice Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#28c2ff] font-bold">Strategic Business Consulting</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284c7]/15 border border-[#0284c7]/40 text-[#28c2ff] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-[#28c2ff]" />
              <span>Boardroom Advisory &amp; Frontline Execution &bull; Together We Can Make a Difference</span>
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
                Strategy That Moves{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28c2ff] via-sky-400 to-cyan-200">
                  the Needle
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                High level of complexity, change, and competition in the current business scenarios means organizations need to adapt and improve constantly. Businesses doing sales turnover of INR 50Cr. to INR 500Cr. are the ones looking to scale up by introducing a professional approach and putting the right systems and processes in place—ensuring growth <span className="text-white font-bold">&ldquo;BECAUSE&rdquo;</span> and not <span className="text-white font-bold">&ldquo;INSPITE&rdquo;</span>.
              </p>

              {/* Quote Chip */}
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md space-y-1 max-w-xl">
                <p className="text-xs sm:text-sm font-serif italic text-slate-300">
                  &ldquo;Review processes (not people) to ensure movement in the right direction.&rdquo;
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#28c2ff]">
                  The Hone ST Solutions Consulting Principle &bull; Together We Can Make a Difference
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#diagnostic-matrix"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0284c7]/30 transition-all hover:scale-[1.02]"
                >
                  <span>Identify Operational Roadblocks</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#services-pillars"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-[#28c2ff]" />
                  <span>Our 5 Service Pillars</span>
                </a>

                <Link
                  href="/#contact-help"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all"
                >
                  <span>Book Consultation</span>
                </Link>
              </div>

              {/* Live Metric Bar */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <span className="font-bold text-white text-2xl block font-display">75+</span>
                  <span className="text-xs text-slate-400">Organizations Transformed</span>
                </div>
                <div>
                  <span className="font-bold text-white text-2xl block font-display">100+ Yrs</span>
                  <span className="text-xs text-slate-400">Collective Leadership</span>
                </div>
                <div>
                  <span className="font-bold text-[#28c2ff] text-2xl block font-display">INR 50–500Cr</span>
                  <span className="text-xs text-slate-400">Target Enterprise Turnovers</span>
                </div>
              </div>
            </div>

            {/* Right Visual Feature Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/15 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Why Businesses Engage Us
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#28c2ff]">
                    Ahmedabad, Gujarat
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-[#28c2ff]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Real-World Ground Execution
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Countless boardroom strategies executed on the ground, mentoring workforces to build highly productive teams
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Workflow className="w-4 h-4 text-[#e16922]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Review Processes, Not People
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Diagnosing workflow bottlenecks, clear SOPs, and cross-departmental SLAs so your teams operate with confidence
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Complete Capability Handover
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      We prepare internal leadership and establish succession plans so your enterprise thrives without consultant dependency
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-[11px] text-slate-400">
                    One-Stop Business Catalyst for Enterprises Across India
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive Operational Diagnostic Matrix */}
      <section id="diagnostic-matrix" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eefaff] border border-[#0284c7]/30 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Operational Diagnostic Console
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Where Is Your Business Stuck?
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Select your organization&apos;s primary challenge to see how we review processes (not people) to restore operational momentum
            </p>
          </div>

          {/* Challenge Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {diagnosticChallenges.map((c) => {
              const isSelected = c.id === selectedChallenge;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChallenge(c.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-[#28c2ff]' : 'text-slate-500'
                  }`}>
                    {c.tag}
                  </span>
                  <span className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                    {c.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Diagnostic Stage */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-sm transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Diagnosis Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Observed Operational Symptom
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-snug">
                    {activeChallenge.symptom}
                  </h3>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Root Cause Analysis
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {activeChallenge.rootCause}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#eefaff] border border-[#0284c7]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#0284c7]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      The Hone ST Solutions Intervention
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed font-normal">
                    {activeChallenge.honestApproach}
                  </p>
                </div>
              </div>

              {/* Right Impact Metric Card */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7] block mb-1">
                    Expected Business Outcome
                  </span>
                  <p className="text-base font-bold text-slate-900 leading-snug">
                    {activeChallenge.targetOutcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500 block mb-1">
                    Target Impact Metric
                  </span>
                  <span className="text-2xl sm:text-3xl font-display font-black text-[#0284c7]">
                    {activeChallenge.metric}
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href="/#contact-help"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Request Audit for This Bottleneck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. The 5 Core Consulting Service Pillars (From Original Website) */}
      <section id="services-pillars" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1.5 rounded-full border border-[#0284c7]/30">
            Array of Consulting Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            How Businesses Benefit From Our Advisory
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Five comprehensive pillars designed to bring a professional approach, streamline systems, and drive sustained enterprise valuation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreConsultingServices.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: service.accent }}
                    >
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <span 
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${service.accent}12`,
                        borderColor: `${service.accent}35`,
                        color: service.accent
                      }}
                    >
                      Core Pillar
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-950 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 italic">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Key Deliverables:
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/#contact-help"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all"
                    style={{ color: service.accent }}
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Summary Callout */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-7 sm:p-8 text-white border border-white/10 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#28c2ff] uppercase tracking-wider block">
                The Hone ST Edge &bull; Together We Can Make a Difference
              </span>
              <h3 className="text-2xl font-display font-bold leading-snug">
                Harmonizing Opportunities to Enhance Productivity
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                By nurturing synergies to transform operations and people, our business verticals provide a true One-Stop Solution for organizations across India
              </p>
              <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>100+ Years Combined Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>75+ Organizations Transformed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Experience, Expertise, Empathy &amp; Exuberance</span>
                </div>
              </div>
            </div>

            <Link
              href="/#contact-help"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Schedule Diagnostic Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The 6 Core Benefits from Old Website */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1.5 rounded-full border border-[#e16922]/30">
              Measurable Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              Tangible Value Delivered to Organizations
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Every consulting intervention is engineered to generate lasting commercial and operational breakthroughs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixKeyBenefits.map((b, idx) => {
              const BIcon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#eefaff] text-[#0284c7] flex items-center justify-center">
                    <BIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. The 4-Phase Low-Disruption Methodology */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0284c7]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#e16922]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/40 text-[#28c2ff] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Clock className="w-3.5 h-3.5" />
              Low-Disruption Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight">
              Our 4-Step Consulting Framework
            </h2>
            <p className="text-base text-slate-300 font-normal">
              Structured, sprint-based interventions that respect active business operations while systematically upgrading systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/15 flex flex-col justify-between space-y-4 hover:border-[#28c2ff]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#28c2ff] bg-[#0284c7]/20 px-3 py-1 rounded-full border border-[#0284c7]/30">
                      Phase {s.step}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {s.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. The 9 Industries from Original Website */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1.5 rounded-full border border-[#0284c7]/30">
            Cross-Sector Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            &ldquo;We work with every industry, as the need for real-world expertise and perspective is universal. Any organization that operates to generate profits and wants to realize specific outcomes benefits from our consulting.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {originalIndustries.map((ind, iIdx) => {
            const IndIcon = ind.icon;
            return (
              <div
                key={iIdx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-900 text-[#28c2ff] flex items-center justify-center shrink-0">
                  <IndIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {ind.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. The Hone ST Difference vs Traditional Consulting */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1.5 rounded-full border border-[#e16922]/30">
              Pragmatic Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              The Hone ST Solutions Difference
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Why Indian promoters choose our execution-first advisory over conventional consulting firms
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-900 text-white p-5 sm:p-6 text-xs font-bold uppercase tracking-wider">
              <div>Evaluation Criteria</div>
              <div className="text-[#28c2ff] hidden md:block">Hone ST Solutions</div>
              <div className="text-slate-400 hidden md:block">Generic Consulting / Big-4</div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonPoints.map((point, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-5 sm:p-6 gap-4 items-center">
                  <div className="font-bold text-slate-900 text-sm">
                    {point.dimension}
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-800 bg-[#eefaff] md:bg-transparent p-3 md:p-0 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>{point.honest}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-500 bg-slate-50 md:bg-transparent p-3 md:p-0 rounded-xl">
                    <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{point.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. Diagnostic Call Booking Banner */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-white/15 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e16922]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#28c2ff] text-xs font-bold uppercase tracking-wider border border-white/15">
                <Compass className="w-3.5 h-3.5" />
                Confidential Preliminary Discovery
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-tight">
                Ready to Review Processes and Scale Your Organization?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                Schedule a complimentary confidential diagnostic call with our senior consulting advisors to review operational bottlenecks and chart an actionable growth roadmap
              </p>

              <div className="pt-2 flex flex-wrap gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#28c2ff]" />
                  <span>+91 97277 09956</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#e16922]" />
                  <span>contact@honestsol.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict Non-Disclosure Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/#contact-help"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0284c7]/40 transition-all hover:scale-[1.02] text-center"
              >
                <span>Schedule Diagnostic Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all text-center"
              >
                <span>Our 100+ Year Acumen</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={consultingFaqs}
            title="Strategic Consulting FAQs"
            subtitle="Common questions from promoters, founders, and managing directors regarding our consulting models, NDAs, and operational timelines"
          />
        </div>
      </section>

    </div>
  );
}
