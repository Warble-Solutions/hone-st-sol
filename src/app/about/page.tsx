import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Users, 
  Award, 
  MapPin, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  BookOpen, 
  GraduationCap,
  ShieldCheck,
  Target,
  Compass,
  Quote
} from 'lucide-react';
import { LinkedInIcon } from '@/components/SocialIcons';

export default function AboutUsPage() {
  const values = [
    {
      title: "Harmonizing Opportunities",
      letter: "H",
      desc: "Identifying latent capabilities within people and processes, uniting disparate efforts into a unified strategic direction."
    },
    {
      title: "Enhancing Productivity",
      letter: "E",
      desc: "Eliminating friction and hesitation through scientifically tested systems, clear metrics, and disciplined execution."
    },
    {
      title: "Nurturing Synergies",
      letter: "N",
      desc: "Aligning boardroom leadership with frontline workforce energy to create cultures where high performance is natural."
    },
    {
      title: "Transforming Lives",
      letter: "T",
      desc: "Delivering lasting, permanent shifts in organizational bottom lines and individual mental composure."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "The Germination of HoneST",
      desc: "Founded in Ahmedabad with a core conviction: combining high-level corporate management acumen with the timeless wisdom of the Bhagavad Gita."
    },
    {
      year: "2020",
      title: "The Arjuna Signature Program",
      desc: "Launched 'Discover the Arjuna in You' at the Ahmedabad Management Association (AMA), expanding to corporate boardrooms across India."
    },
    {
      year: "2022",
      title: "Publication & 50% CSR Pledge",
      desc: "Authored 'The Corporate Bhagavad Gita' by Prasun Kundu, dedicating 50% of all book proceeds to the education of girls and underprivileged children."
    },
    {
      year: "2024",
      title: "State-of-the-Art Training Centre",
      desc: "Inaugurated the dedicated physical training facility in Ahmedabad, offering free weekly chanting sessions and experiential corporate simulations."
    },
    {
      year: "2026",
      title: "Unified Digital & AI Ecosystem",
      desc: "Consolidating all 3 subdomains into honestsol.com — pioneering AI Agents, modern web architectures, and GEO/AEO search intelligence."
    }
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      
      {/* Light Theme Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#28c2ff]/8 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e16922]/8 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e16922]/10 text-[#e16922] text-xs font-extrabold uppercase tracking-widest border border-[#e16922]/25 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e16922]" /> Our Philosophy &amp; Heritage
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight max-w-5xl mx-auto leading-[1.1] text-slate-950">
            &ldquo;What Mind Can Conceive, <span className="text-[#e16922]">Man Can Achieve</span>&rdquo;
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Since 2018, HoneST Solutions has operated as a one-stop catalyst for 75+ organizations and over 25,000 individuals — harmonizing corporate rigor with profound life mastery.
          </p>

          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-200">
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-slate-950">75+</p>
              <p className="text-xs text-slate-500 font-semibold mt-1 uppercase">Enterprises Mentored</p>
            </div>
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-[#e16922]">25,000+</p>
              <p className="text-xs text-slate-500 font-semibold mt-1 uppercase">Leaders Empowered</p>
            </div>
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-[#28c2ff]">100+ Yrs</p>
              <p className="text-xs text-slate-500 font-semibold mt-1 uppercase">Faculty Pedigree</p>
            </div>
            <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-xs">
              <p className="text-3xl font-display font-black text-slate-900">50%</p>
              <p className="text-xs text-slate-500 font-semibold mt-1 uppercase">Proceeds Donated</p>
            </div>
          </div>
        </div>
      </section>

      {/* The HoneST Acronym Identity */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#28c2ff] bg-[#28c2ff]/10 px-4 py-1.5 rounded-full border border-[#28c2ff]/25">
            The Architectural Meaning Behind Our Name
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-950 tracking-tight">
            The Blueprint of <span className="text-[#e16922]">HoneST Solutions</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            More than just a company name — HoneST is an operational philosophy guiding every client consultation, corporate workshop, and software deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div 
              key={i}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#28c2ff]/50 transition-all card-rds flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#e16922] to-[#ff8c42] text-white font-display font-black text-2xl flex items-center justify-center mb-6 shadow-md shadow-[#e16922]/20 group-hover:scale-105 transition-transform">
                  {v.letter}
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#28c2ff]">
                <span>Pillar 0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders Spotlight Section with Portraits (Light Theme) */}
      <section className="py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#e16922]/10 px-4 py-1.5 rounded-full border border-[#e16922]/25">
              Executive Leadership
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-black text-slate-950 tracking-tight">
              Meet the Visionaries Behind HoneST
            </h2>
            <p className="text-base text-slate-600">
              Decades of real-world corporate governance, experiential workshop mastery, and authentic commitment to social transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Founder 1: Prasun Kundu */}
            <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between card-rds">
              <div>
                {/* Photo Strip Header */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                    alt="Mr. Prasun Kundu leading corporate executive seminar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#e16922] text-white shadow-sm inline-block mb-1">
                        Author &amp; Faculty
                      </span>
                      <h3 className="text-2xl font-display font-black text-white">Mr. Prasun Kundu</h3>
                      <p className="text-xs font-bold text-slate-200">Founder &amp; Managing Partner</p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md text-[#e16922] font-display font-black text-xl flex items-center justify-center shadow-md">
                      PK
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-6">
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      A distinguished corporate consultant and facilitator with over 30 years of corporate exposure spanning boardroom restructurings, sales management, and organizational development.
                    </p>
                    <p>
                      Prasun Kundu is the esteemed author of <strong>&lsquo;The Corporate Bhagavad Gita – Discover the Arjuna in You&rsquo;</strong>. He has conducted flagship workshops at prestigious institutions such as the <strong>Ahmedabad Management Association (AMA)</strong>, helping executives unlock poise and eliminate hesitation in high-stakes environments.
                    </p>
                    <p>
                      Renowned for his immaculate Sanskrit diction and chanting uccharan, he personally leads weekly free chanting sessions to impart ancient sound energy to both children and corporate leaders.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Key Specializations</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Chapter 18 Decoded</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">AMA Keynote Speaker</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">Boardroom Strategy</span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">TNI Frameworks</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Ahmedabad, Gujarat, India</span>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e16922] hover:underline"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Founder 2: Sandhya Kundu */}
            <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between card-rds">
              <div>
                {/* Photo Strip Header */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Mrs. Sandhya Kundu leading organizational welfare initiatives"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#28c2ff] text-slate-950 shadow-sm inline-block mb-1 font-black">
                        Operations &amp; Culture
                      </span>
                      <h3 className="text-2xl font-display font-black text-white">Mrs. Sandhya Kundu</h3>
                      <p className="text-xs font-bold text-slate-200">Co-founder &amp; Director</p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md text-[#28c2ff] font-display font-black text-xl flex items-center justify-center shadow-md">
                      SK
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-6">
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      A foundational pillar of HoneST Solutions, Sandhya Kundu oversees corporate operations, training logistics, and the organization’s dedicated social welfare programs.
                    </p>
                    <p>
                      Her empathetic yet structured approach has built HoneST’s repute as a warm, responsive, and deeply trusted partner for corporate clients seeking holistic team-building workshops and leadership alignment.
                    </p>
                    <p>
                      Sandhya spearheads HoneST’s philanthropic mission, ensuring that 50% of all proceeds from book publications are systematically deployed towards schooling, meals, and educational resources for underprivileged girls.
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

              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Ahmedabad, Gujarat, India</span>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28c2ff] hover:underline"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Ahmedabad Training Centre Spotlight with Real Architecture Image (Light Theme) */}
      <section id="centre" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white text-slate-900 overflow-hidden shadow-xl border border-slate-200/90">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-14 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e16922]/10 text-[#e16922] text-xs font-bold uppercase tracking-widest border border-[#e16922]/25">
                <MapPin className="w-3.5 h-3.5 text-[#e16922]" /> Physical Headquarters &amp; Academy
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight leading-[1.15]">
                Our State-of-the-Art Training Centre in Ahmedabad
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Experience learning in a distraction-free, acoustically calibrated sanctuary designed specifically for immersive executive masterclasses, boardroom simulation roleplays, and serene Gita chanting.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#e16922] shrink-0" />
                  <span>Interactive Audio-Visual Labs for corporate simulation games</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#28c2ff] shrink-0" />
                  <span>100% Free In-Person Gita Chanting for Children and Adults every week</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#e16922] shrink-0" />
                  <span>Conveniently located in Ahmedabad with executive parking and amenities</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/#contact-cta"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#e16922] hover:bg-[#d05c19] text-white font-bold text-sm shadow-md shadow-[#e16922]/20 transition-all hover:scale-105"
                >
                  <span>Book Centre Visit or Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 lg:h-[500px] w-full bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Ahmedabad State-of-the-art training facility boardroom"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/30 lg:to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-xs space-y-1.5">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#e16922]" /> Ahmedabad Executive Academy
                </p>
                <p className="text-slate-500 text-[11px]">Equipped with high-definition multi-camera live streaming &amp; surround acoustics.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CSR Impact Section with Photo */}
      <section id="csr" className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              
              <div className="md:col-span-7 p-8 sm:p-14 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border border-red-200">
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> Social Impact Pledge
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight">
                  Educating Girls &amp; Underprivileged Children
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We firmly believe that wisdom must yield compassion in action. <strong>50% of the proceeds</strong> from every copy of <em>&lsquo;The Corporate Bhagavad Gita – Discover the Arjuna in You&rsquo;</em> and our illustrated children’s storybooks are channeled directly towards schooling fees, books, and nutrition for underprivileged girls.
                </p>
                <div className="pt-2">
                  <Link
                    href="/#arjuna-program"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#e16922] hover:underline"
                  >
                    <span>Learn About the Book &amp; Royalties Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 relative h-72 md:h-full min-h-[300px] bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Educating girls and young students CSR initiative"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-center p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <span className="text-4xl font-display font-black text-[#e16922] block">50%</span>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                    Book Royalties Dedicated to Girl Child Education
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Milestones & Timeline */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#28c2ff] bg-[#28c2ff]/10 px-4 py-1.5 rounded-full border border-[#28c2ff]/25">
            Our Journey So Far
          </span>
          <h2 className="text-4xl font-display font-black text-slate-950 tracking-tight">
            Key Milestones (2018 &mdash; Present)
          </h2>
        </div>

        <div className="relative border-l-2 border-[#28c2ff]/30 ml-4 md:ml-32 space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#e16922] border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />
              
              <span className="md:absolute md:-left-28 md:top-0 text-sm font-extrabold text-[#e16922]">
                {m.year}
              </span>

              <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-[#28c2ff] transition-colors">
                {m.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
