'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Users, 
  MapPin, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  GraduationCap,
  ShieldCheck,
  Target,
  Compass,
  Briefcase,
  Monitor,
  PhoneCall,
  Mail,
  Clock,
  Award
} from 'lucide-react';
import { LinkedInIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from '@/components/SocialIcons';

export default function AboutUsPage() {
  const values = [
    {
      title: "Harmonizing Opportunities",
      letter: "H",
      desc: "Identifying latent capabilities within your people and processes, uniting disparate efforts into a clear, unified direction for growth"
    },
    {
      title: "Enhancing Productivity",
      letter: "E",
      desc: "Eliminating hesitation and daily bottlenecks through proven frameworks, clear measurable goals, and disciplined execution"
    },
    {
      title: "Nurturing Synergies",
      letter: "N",
      desc: "Connecting boardroom vision with frontline workforce energy to create an encouraging culture where high performance comes naturally"
    },
    {
      title: "Transforming Organizations & Individuals",
      letter: "T",
      desc: "Delivering permanent, meaningful progress in business bottom lines, personal confidence, and executive composure"
    }
  ];

  const verticals = [
    {
      title: "Corporate Training",
      badge: "Experiential Labs",
      icon: GraduationCap,
      color: "from-blue-600 to-sky-500",
      desc: "Customized training programs based on Training Need Identification (TNI) for 75+ organizations, delivering experiential roleplay simulations and workforce mindset shifts",
      href: "/corporate-training"
    },
    {
      title: "Business Consulting",
      badge: "Start Up to Scale Up",
      icon: Briefcase,
      color: "from-[#e16922] to-amber-500",
      desc: "Empowering entrepreneurs and SMEs with practical systems, standard operating procedures, sales engines, and professional governance to scale sustainably",
      href: "/business-consulting"
    },
    {
      title: "Digital Solutions",
      badge: "Modern Engineering",
      icon: Monitor,
      color: "from-cyan-600 to-blue-500",
      desc: "Custom websites, mobile apps, Google SEO ranking, social media management, and smart business automations that connect businesses with customers online",
      href: "/digital"
    },
    {
      title: "The Bhagavad Gita",
      badge: "Timeless Wisdom",
      icon: BookOpen,
      color: "from-emerald-600 to-teal-500",
      desc: "Our landmark 'Discover the Arjuna in You' program decoded from Chapter 18, published corporate literature, and free weekly in-person chanting in Ahmedabad",
      href: "/bhagavad-gita"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "The Germination of Hone ST",
      desc: "Founded in Ahmedabad with a core conviction: combining high-level corporate governance and management acumen with timeless life principles"
    },
    {
      year: "2020",
      title: "The Arjuna Signature Program",
      desc: "Launched 'Discover the Arjuna in You' at the prestigious Ahmedabad Management Association (AMA), expanding to corporate boardrooms across India"
    },
    {
      year: "2022",
      title: "Publication & 50% CSR Pledge",
      desc: "Authored 'The Corporate Bhagavad Gita' by Prasun Kundu, dedicating 50% of all book proceeds directly to the education of underprivileged girls"
    },
    {
      year: "2024",
      title: "State-of-the-Art Training Centre",
      desc: "Inaugurated our dedicated training academy at Titanium Business Park in Makarba, hosting weekly free chanting sessions and executive simulations"
    },
    {
      year: "Present",
      title: "Full-Spectrum One-Stop Partner",
      desc: "Empowering 75+ enterprises and 25,000+ individuals through integrated business consulting, corporate training, digital engineering, and published wisdom"
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen text-slate-900 selection:bg-[#0284c7] selection:text-white">
      
      {/* 1. Cinematic Hero Section with authentic background */}
      <section className="relative pt-16 pb-20 sm:pb-28 overflow-hidden border-b border-white/10 bg-slate-950 text-white">
        
        {/* Full-bleed Background Image with Sleek Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slider/consulting-hero.jpg"
            alt="Hone ST Solutions Leadership and Culture"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/70" />
        </div>

        {/* Ambient Cyan/Orange Glow Blooms */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#e16922]/15 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-[#28c2ff]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-[#28c2ff] transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#28c2ff] font-bold">About Us</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e16922]/15 border border-[#e16922]/40 text-[#ff9c5a] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ff9c5a]" />
              <span>Our Philosophy &amp; Heritage</span>
            </div>
          </div>

          {/* Main Headline & Narrative from Original Website */}
          <div className="max-w-3xl space-y-5 mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-[1.12]">
              &ldquo;What Mind Can Conceive,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9c5a] via-[#e16922] to-amber-200">
                Man Can Achieve&rdquo;
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Germination of an idea in the year 2018 has resulted in adding value to 75+ organizations and 25,000+ individuals. This has been made possible by countless boardroom strategies executed on the ground, training and mentoring of the workforce spanning over 100 years resulting in experience, expertise, empathy and exuberance which results in building highly productive teams and great places to work! Guided by our motto: <strong className="text-white font-semibold">&ldquo;Together We Can Make a Difference&rdquo;</strong>.
            </p>

            {/* Authentic Quote Chip */}
            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md space-y-1 max-w-2xl">
              <p className="text-xs sm:text-sm font-serif italic text-slate-300">
                &ldquo;Countless boardroom strategies executed on the ground, training and mentoring of the workforce spanning decades — delivering experience, expertise, empathy, and exuberance.&rdquo;
              </p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#28c2ff]">
                The Hone ST Solutions Founding Principle &bull; Together We Can Make a Difference
              </p>
            </div>
          </div>

          {/* 4 Impact Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-display font-black text-white">75+</p>
              <p className="text-xs text-slate-300 font-semibold mt-1 uppercase tracking-wider">Organizations Mentored</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-display font-black text-[#ff9c5a]">25,000+</p>
              <p className="text-xs text-slate-300 font-semibold mt-1 uppercase tracking-wider">Individuals Impacted</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-display font-black text-[#28c2ff]">100+ Yrs</p>
              <p className="text-xs text-slate-300 font-semibold mt-1 uppercase tracking-wider">Collective Experience</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
              <p className="text-3xl sm:text-4xl font-display font-black text-emerald-400">50%</p>
              <p className="text-xs text-slate-300 font-semibold mt-1 uppercase tracking-wider">Royalties Donated (CSR)</p>
            </div>
          </div>

          {/* Jump Links */}
          <div className="flex flex-wrap items-center gap-3 pt-8">
            <a
              href="#founders"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#e16922]/30 transition-all hover:scale-[1.01]"
            >
              <span>Meet Our Founders</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-colors"
            >
              <span>Our Philosophy</span>
            </a>
            <a
              href="#centre"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#28c2ff]" />
              <span>Ahmedabad Centre</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. The Hone ST Acronym Identity */}
      <section id="philosophy" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1.5 rounded-full border border-[#28c2ff]/30">
            The Meaning Behind Our Name &bull; Together We Can Make a Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            The Blueprint of <span className="text-[#e16922]">Hone ST Solutions</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal">
            More than just a name: Hone ST is our guiding operational philosophy across every client consultation, corporate workshop, and digital solution. Together We Can Make a Difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div 
              key={i}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#28c2ff]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#e16922] to-[#ff8c42] text-white font-display font-black text-2xl flex items-center justify-center mb-6 shadow-md shadow-[#e16922]/20 group-hover:scale-105 transition-transform">
                  {v.letter}
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#0284c7]">
                <span>Pillar 0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Executive Leadership with Real Founder Photographs */}
      <section id="founders" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1.5 rounded-full border border-[#e16922]/25">
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Meet the Visionaries Behind Hone ST
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Decades of real-world corporate governance, experiential workshop mastery, and authentic commitment to social transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Founder 1: Mr. Prasun Kundu */}
            <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                {/* Header with Real Portrait Photo */}
                <div className="p-8 sm:p-10 border-b border-slate-200/80 bg-white flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 shrink-0">
                    <Image
                      src="/images/founders/prasun-kundu.jpg"
                      alt="Mr. Prasun Kundu - Founder & Managing Partner"
                      fill
                      sizes="(max-width: 640px) 112px, 128px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#fef4ee] text-[#e16922] border border-[#e16922]/30 inline-block mb-1.5">
                      Author &amp; Faculty
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                      Mr. Prasun Kundu
                    </h3>
                    <p className="text-xs font-bold text-slate-600">
                      Founder &amp; Managing Partner
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      30+ Years Corporate Consulting &amp; Management Acumen
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <div className="p-8 sm:p-10 space-y-6">
                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    <p>
                      A distinguished corporate consultant and facilitator with over 30 years of corporate exposure spanning boardroom restructurings, sales leadership, and organizational development.
                    </p>
                    <p>
                      Prasun Kundu is the esteemed author of <strong>&lsquo;The Corporate Bhagavad Gita: Discover the Arjuna in You&rsquo;</strong>. He has conducted flagship workshops at prestigious institutions such as the <strong>Ahmedabad Management Association (AMA)</strong>, helping executives unlock poise and eliminate hesitation in high-stakes environments.
                    </p>
                    <p>
                      Renowned for his immaculate Sanskrit diction and chanting uccharan, he personally leads weekly free chanting sessions to impart timeless sound energy and focus to children, youth, and corporate leaders.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Key Specializations</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Chapter 18 Decoded</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">AMA Keynote Speaker</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Boardroom Strategy</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Training Need Identification (TNI)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer strip */}
              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-500">Ahmedabad, Gujarat, India</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.youtube.com/@prasunkundu" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline"
                  >
                    <YouTubeIcon className="w-4 h-4" />
                    <span>YouTube Channel</span>
                  </a>
                  <span className="text-slate-300">&bull;</span>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:underline"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Founder 2: Mrs. Sandhya Kundu */}
            <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                {/* Header with Real Portrait Photo */}
                <div className="p-8 sm:p-10 border-b border-slate-200/80 bg-white flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 shrink-0">
                    <Image
                      src="/images/founders/sandhya-kundu.jpg"
                      alt="Mrs. Sandhya Kundu - Co-Founder & Director"
                      fill
                      sizes="(max-width: 640px) 112px, 128px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#eefaff] text-[#0284c7] border border-[#28c2ff]/30 inline-block mb-1.5">
                      Operations &amp; Culture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                      Mrs. Sandhya Kundu
                    </h3>
                    <p className="text-xs font-bold text-slate-600">
                      Co-Founder &amp; Director
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Corporate Operations &amp; CSR Program Leadership
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <div className="p-8 sm:p-10 space-y-6">
                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    <p>
                      A foundational pillar of Hone ST Solutions, Sandhya Kundu oversees corporate operations, training logistics, and the organization’s dedicated social welfare programs.
                    </p>
                    <p>
                      Her empathetic yet structured approach has built Hone ST’s repute as a warm, responsive, and deeply trusted partner for corporate clients seeking holistic team-building workshops and leadership alignment.
                    </p>
                    <p>
                      Sandhya spearheads Hone ST’s philanthropic mission, ensuring that <strong>50% of all proceeds</strong> from book publications are systematically deployed towards schooling, meals, and educational resources for underprivileged girls.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Key Specializations</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Organizational Culture</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">CSR Program Leadership</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Training Operations</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Mentorship</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer strip */}
              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-slate-500">Ahmedabad, Gujarat, India</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                  <span className="text-slate-300">&bull;</span>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:underline"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. The 4-Vertical One-Stop Ecosystem */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1.5 rounded-full border border-[#28c2ff]/30">
            One-Stop Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Our 4 Core Business Verticals
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Whether scaling business operations, training corporate workforces, modernizing digital channels, or mastering life composure — we provide integrated solutions under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticals.map((vert, idx) => {
            const Icon = vert.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0284c7]/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${vert.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {vert.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-950">
                    {vert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {vert.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={vert.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0284c7] hover:text-[#0369a1] transition-colors"
                  >
                    <span>Explore {vert.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Ahmedabad Training Centre Spotlight */}
      <section id="centre" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-slate-50/90 border border-slate-200 p-8 sm:p-14 space-y-8 shadow-sm">
            
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e16922]/10 text-[#e16922] text-xs font-bold uppercase tracking-widest border border-[#e16922]/25">
                <MapPin className="w-3.5 h-3.5 text-[#e16922]" /> Physical Headquarters &amp; Academy
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-[1.15]">
                Our State-of-the-Art Training Centre in Ahmedabad
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Located at A-814 Titanium Business Park in Makarba, Ahmedabad, our physical facility provides a dedicated environment designed specifically for executive masterclasses, boardroom simulation roleplays, and serene Gita chanting sessions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#e16922]" />
                <h4 className="font-bold text-slate-900 text-sm">Interactive Audio-Visual Labs</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Equipped for corporate simulation roleplays and live executive case evaluations</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#0284c7]" />
                <h4 className="font-bold text-slate-900 text-sm">Free In-Person Gita Chanting</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Conducted every week for adults and children free of any charge</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-slate-900 text-sm">Titanium Business Park Venue</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">Conveniently situated off Corporate Road in Makarba with ample visitor parking</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/#contact-help"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.01]"
              >
                <span>Book Centre Visit or Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Explore Free Programs</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CSR Impact Section: Educating Underprivileged Girls */}
      <section id="csr" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-rose-50/60 via-white to-amber-50/40 border border-rose-200/70 p-8 sm:p-14 space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border border-red-200">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> Social Impact Pledge
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
            Educating Girls &amp; Underprivileged Children
          </h3>
          
          <p className="text-base text-slate-600 leading-relaxed font-normal max-w-3xl">
            We firmly believe that wisdom must yield compassion in action. <strong>50% of the proceeds</strong> from every copy of <em>&lsquo;The Corporate Bhagavad Gita: Discover the Arjuna in You&rsquo;</em> and our illustrated storybooks are channeled directly towards schooling fees, books, and nutrition for underprivileged girls
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/bhagavad-gita"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#e16922] hover:underline uppercase tracking-wider"
            >
              <span>Learn About the Book &amp; Royalties Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Milestones & Timeline */}
      <section id="journey" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1.5 rounded-full border border-[#28c2ff]/30">
              Our Journey So Far
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
              Key Milestones (2018 - Present)
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto font-normal">
              How an idea germinated in Ahmedabad grew into a multi-vertical organization touching thousands of lives
            </p>
          </div>

          <div className="relative border-l-2 border-[#28c2ff]/30 ml-4 md:ml-32 space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#e16922] border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />
                
                <span className="md:absolute md:-left-28 md:top-0 text-sm font-extrabold text-[#e16922]">
                  {m.year}
                </span>

                <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Direct Invitation & Conversion Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#eefaff] via-white to-orange-50 border-2 border-[#28c2ff]/30 shadow-lg shadow-slate-900/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                Connect with Hone ST &bull; Together We Can Make a Difference
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950">
                Ready to Accelerate Your Organization?
              </h3>
              <p className="text-sm text-slate-600 font-normal">
                Visit our training academy at Titanium Business Park in Ahmedabad or book a consultation with our leadership team
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                <span className="inline-flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#e16922]" /> +91 98240 04696 / +91 97277 09956
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0284c7]" /> contact@honestsol.com
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/#contact-help"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.01]"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors"
              >
                <span>View All Programs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
