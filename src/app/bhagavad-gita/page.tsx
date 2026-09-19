'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Calendar, 
  MapPin, 
  Phone, 
  Award,
  Play,
  Volume2,
  BookMarked,
  Scroll,
  Sun,
  Shield,
  Layers,
  ExternalLink,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

interface ShlokaScenario {
  id: string;
  tag: string;
  challenge: string;
  shlokaSanskrit: string;
  transliteration: string;
  reference: string;
  corporateDiagnosis: string;
  prescribedWisdom: string;
  keyTakeaway: string;
}

const scenarios: ShlokaScenario[] = [
  {
    id: "result-anxiety",
    tag: "Execution Under Pressure",
    challenge: "Paralysis by Over-Analysis & Result Anxiety",
    shlokaSanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "Karmany-evādhikāras te mā phaleṣhu kadāchana | mā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi",
    reference: "Chapter 2, Verse 47",
    corporateDiagnosis: "Executives and founders often freeze or procrastinate because their minds obsess over hypothetical quarterly failures rather than immediate operational steps",
    prescribedWisdom: "The Gita directs 100% of your cognitive energy to the craft of action while consciously releasing psychological attachment to the fruits",
    keyTakeaway: "Discipline of process guarantees peak performance, whereas anxiety over outcomes drains executive capability"
  },
  {
    id: "crisis-poise",
    tag: "Emotional Equilibrium",
    challenge: "Staying Poised in Market Crisis & Volatility",
    shlokaSanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    transliteration: "Yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya | siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga uchyate",
    reference: "Chapter 2, Verse 48",
    corporateDiagnosis: "Teams oscillate wildly between euphoric overconfidence during market booms and panic during sudden revenue downturns, leading to erratic strategic pivots",
    prescribedWisdom: "True leadership equanimity (Sthitaprajna) is maintaining an unshakeable inner compass regardless of victory or setback",
    keyTakeaway: "Equanimity in turbulence is the highest mark of seasoned boardroom leadership"
  },
  {
    id: "leadership-standard",
    tag: "Executive Culture",
    challenge: "Workforce Disengagement & Cultural Friction",
    shlokaSanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    transliteration: "Yad yad ācharati śhreṣhṭhas tat tad evetaro janaḥ | sa yat pramāṇaṁ kurute lokas tad anuvartate",
    reference: "Chapter 3, Verse 21",
    corporateDiagnosis: "Promoters often lament that frontline staff lack accountability, while executives themselves bypass company SOPs and exhibit divided priorities",
    prescribedWisdom: "Whatever standards of integrity and discipline the apex leader demonstrates through living action, the entire organization automatically emulates",
    keyTakeaway: "Culture is never dictated by corporate posters: it is caught by observing leadership actions"
  },
  {
    id: "burnout-mind",
    tag: "Mental Composure",
    challenge: "Executive Burnout & Self-Sabotaging Mindset",
    shlokaSanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration: "Uddhared ātmanātmānaṁ nātmānam avasādayet | ātmaiva hyātmano bandhur ātmaiva ripur ātmanaḥ",
    reference: "Chapter 6, Verse 5",
    corporateDiagnosis: "High achievers frequently battle internal imposter syndrome, exhaustion, and chronic overthinking that erodes mental peace and family life",
    prescribedWisdom: "Elevate yourself through the trained mind, never degrade yourself. The undisciplined mind is your fiercest opponent, but the mastered mind is your greatest ally",
    keyTakeaway: "Inner mind mastery is the foundation upon which external commercial success is sustained"
  },
  {
    id: "five-factors",
    tag: "Strategic Success",
    challenge: "The 5 Factors Behind Every Success & Failure",
    shlokaSanskrit: "अधिष्ठानं तथा कर्ता करणं च पृथग्विधम्। विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम्॥",
    transliteration: "Adhiṣhṭhānaṁ tathā kartā karaṇaṁ cha pṛithag-vidham | vividhāśh cha pṛithak cheṣhṭā daivaṁ chaivātra pañchamam",
    reference: "Chapter 18, Verse 14",
    corporateDiagnosis: "Leaders either take sole egotistical credit for market wins or point fingers during operational failures without understanding systemic attribution",
    prescribedWisdom: "Every outcome requires 5 coordinated elements: The arena (organization), The doer (leadership), The instruments (tools & capital), The varied efforts (execution), and Providential synchronicity (Daivam)",
    keyTakeaway: "Understanding the 5 factors dissolves executive arrogance and builds resilient, systemic humility"
  }
];

const discourseVideos = [
  {
    id: "zJ5yIjKGOMg",
    title: "The Lesson of Bhagavad Gita 18.14: 5 Factors for Success",
    speaker: "Mr. Prasun Kundu",
    desc: "A deep dive into Chapter 18 Verse 14 explaining how modern executives can balance effort, capability, and systemic harmony to achieve repeatable success",
    duration: "Keynote Lecture",
    tag: "Leadership Masterclass"
  },
  {
    id: "B_FBjPLQWgo",
    title: "Chapter 12 Sung by Children: The Power of Pure Sanskrit Chanting",
    speaker: "HoneST Children Academy",
    desc: "A joyful demonstration of authentic Sanskrit diction (uccharan) and rhythmic cadence by young students at our Ahmedabad training facility",
    duration: "Student Recital",
    tag: "Children Chanting"
  },
  {
    id: "y1Fuyv9CNOw",
    title: "Harmonizing Relationships & Dissolving Ego in Work and Life",
    speaker: "Mr. Prasun Kundu",
    desc: "Actionable techniques to transform interpersonal friction into collaborative synergy by understanding the root psychology of ego",
    duration: "Wisdom Discourse",
    tag: "Interpersonal Harmony"
  }
];

export default function BhagavadGitaPage() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("result-anxiety");
  const [activeVideoId, setActiveVideoId] = useState<string>("zJ5yIjKGOMg");
  const [selectedPoster, setSelectedPoster] = useState<{ title: string; image: string } | null>(null);

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];
  const activeVideo = discourseVideos.find((v) => v.id === activeVideoId) || discourseVideos[0];

  const gitaFaqs = [
    {
      q: "Is 'Discover the Arjuna in You' a religious or corporate curriculum?",
      a: "It is strictly a secular leadership and mind-mastery program. We study the Bhagavad Gita as an extraordinary psychological and strategic dialogue on decision-making, executive composure, and ethical action under crisis, fully applicable to modern corporate environments."
    },
    {
      q: "Where are the free weekly Gita chanting sessions conducted?",
      a: "All in-person sessions take place at our dedicated training centre at A-814, Titanium Business Park, Off Corporate Road, Makarba, Ahmedabad. All sessions are 100% free of charge for participants."
    },
    {
      q: "How does the 50% CSR royalty pledge work for the book?",
      a: "50% of author royalties and net proceeds from every copy of 'The Corporate Bhagavad Gita: Discover the Arjuna in You' and our storybooks are directly donated to sponsor schooling fees, textbooks, and nutrition for underprivileged girls in Gujarat."
    },
    {
      q: "Can corporate organizations book customized on-site workshops?",
      a: "Yes. Mr. Prasun Kundu regularly conducts customized half-day and full-day executive masterclasses for corporate boards, industry associations, and leadership summits across India."
    }
  ];

  return (
    <div className="bg-[#fcfbf9] text-slate-900 min-h-screen">
      
      {/* 1. Cinematic Hero Header with Background Image and gita.png */}
      <section className="relative pt-12 pb-16 sm:pb-24 overflow-hidden border-b border-white/10 bg-slate-950 text-white">
        
        {/* Full-bleed Photographic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slider/bhagavad-gita-hero.jpg"
            alt="Bhagavad Gita Wisdom"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle gradient overlays so the background image is visible and warm while keeping text crystal-clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60" />
        </div>

        {/* Warm Aureole & Ambient Saffron Blooms */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#e16922]/20 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Top Emblem */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-[#e16922] transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <span className="text-[#e16922] font-bold">Bhagavad Gita Wisdom</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e16922]/15 border border-[#e16922]/40 text-[#e16922] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sun className="w-3.5 h-3.5 text-[#e16922]" />
              <span>हर घर गीता &bull; Har Ghar Gita Initiative</span>
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-black text-white tracking-tight leading-[1.1]">
                Ancient Wisdom for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e16922] via-orange-400 to-amber-300">
                  Modern Leaders
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
                The Bhagavad Gita is not a scripture of renunciation. It is a practical manual on decisive leadership, executive composure, and ethical action in high-stakes corporate environments
              </p>

              {/* Quote Banner (Frosted Glass) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md space-y-1.5 max-w-2xl">
                <p className="text-xs sm:text-sm font-serif italic text-slate-300 leading-relaxed">
                  &ldquo;The preaching of Shrimad Bhagavad Gita is like an Ocean filled with priceless jewels. The more one dives deep into it, the more jewels one is bound to discover.&rdquo;
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#e16922]">
                  The HoneST Solutions Philosophy
                </p>
              </div>

              {/* Highlight Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Discover the Arjuna in You',
                  '50+ Years Experience',
                  '100% Free Weekly Chanting',
                  '50% Book Royalties to Girls'
                ].map((chip, cIdx) => (
                  <span 
                    key={cIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.06] border border-white/10 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#decision-lab"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#e16922]/30 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Interactive Decision Lab</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#book-csr"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-sm transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#e16922]" />
                  <span>The Book &amp; 50% CSR Pledge</span>
                </a>

                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#e16922]/20 hover:bg-[#e16922]/30 text-orange-200 font-bold text-xs uppercase tracking-wider border border-[#e16922]/40 transition-colors"
                >
                  <span>Free Chanting Programs</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Feature Card with gita.png */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-slate-900/70 backdrop-blur-2xl border border-white/15 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
                  <Image
                    src="/images/slider/gita.png"
                    alt="Bhagavad Gita Wisdom - Mr. Prasun Kundu"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#28c2ff] block">
                      Facilitated by Author
                    </span>
                    <p className="text-base font-display font-bold">
                      Mr. Prasun Kundu
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-semibold text-slate-400">Faculty Pedigree:</span>
                    <span className="font-bold text-white">50+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-semibold text-slate-400">Flagship Curriculum:</span>
                    <span className="font-bold text-white">Discover the Arjuna in You</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-semibold text-slate-400">Partner Keynotes:</span>
                    <span className="font-bold text-white">AMA Ahmedabad</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-semibold text-slate-400">Social Commitment:</span>
                    <span className="font-bold text-emerald-400">50% Book Royalties to Girls</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive Wisdom Console: "The Decision Lab of Arjuna" */}
      <section id="decision-lab" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef4ee] border border-[#e16922]/30 text-[#e16922] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Decision Frameworks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              The Decision Lab of Arjuna
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Select a leadership dilemma below to explore how specific Bhagavad Gita shlokas decode modern corporate obstacles
            </p>
          </div>

          {/* Scenario Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
            {scenarios.map((sc, idx) => {
              const isSelected = activeScenarioId === sc.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-[#fef4ee] border-[#e16922] shadow-md ring-2 ring-[#e16922]/20 text-slate-950'
                      : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                        isSelected
                          ? 'bg-[#e16922] text-white'
                          : 'bg-white text-slate-500 border border-slate-200'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#e16922]' : 'bg-transparent'}`} />
                  </div>

                  <p className="text-xs font-bold leading-snug line-clamp-2">
                    {sc.challenge}
                  </p>

                  <span className={`text-[10px] font-bold uppercase tracking-wider mt-3 block ${
                    isSelected ? 'text-[#e16922]' : 'text-slate-400'
                  }`}>
                    {sc.reference}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Shloka Stage */}
          <div className="rounded-3xl border-2 border-[#e16922]/30 bg-gradient-to-br from-[#fefbf7] via-white to-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-orange-950/5 space-y-8">
            
            {/* Top Badge & Reference */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-900/10">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e16922] bg-[#fef4ee] px-3 py-1 rounded-full border border-[#e16922]/20">
                  {activeScenario.tag} &bull; {activeScenario.reference}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 pt-1">
                  {activeScenario.challenge}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                  Chapter 18 Decoded
                </span>
              </div>
            </div>

            {/* Sacred Shloka Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e16922]">
                  Original Sanskrit Shloka
                </span>
                <span className="text-xs font-serif text-slate-500">
                  Authentic Chanting Text
                </span>
              </div>

              <p className="text-xl sm:text-2xl font-serif text-slate-900 leading-relaxed font-bold tracking-wide">
                {activeScenario.shlokaSanskrit}
              </p>

              <div className="pt-2 border-t border-amber-200/60">
                <p className="text-xs font-mono text-slate-600 leading-relaxed italic">
                  {activeScenario.transliteration}
                </p>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>The Corporate Bottleneck</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {activeScenario.corporateDiagnosis}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>The Prescribed Strategic Framework</span>
                </h4>
                <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-normal">
                  {activeScenario.prescribedWisdom}
                </p>
              </div>

            </div>

            {/* Key Executive Takeaway Strip */}
            <div className="p-5 rounded-2xl bg-white border border-[#e16922]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#e16922] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Executive Principle: {activeScenario.keyTakeaway}
                </span>
              </div>

              <Link
                href="/#contact-help"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs shrink-0"
              >
                <span>Request Executive Masterclass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. "Har Ghar Gita" Dual-Language Manifesto Section */}
      <section className="py-20 sm:py-28 bg-[#fdfaf5] border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-white px-4 py-1.5 rounded-full border border-amber-900/20 shadow-xs">
              Our Foundational Conviction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              हर घर गीता &bull; The Ocean of Priceless Jewels
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Bridging the gap between sacred scriptural possession and everyday practical application
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* English Manifesto Box */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-900/15 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e16922]">
                  The English Manifesto
                </span>
                <span className="text-xs text-slate-400">By Prasun Kundu</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p>
                  Bhagavad Gita is a more than 5,000-year-old dialogue between &lsquo;seeker&rsquo; and &lsquo;guru&rsquo; and serves as a manual for leading a holistic life. While most Indian households possess a copy of this great scripture, almost 80% of individuals have not made an attempt to read and comprehend its practical essence.
                </p>
                <p>
                  Unlike ascetic literature which recommends a world of renunciation, austerity, and retreat to forests, Shrimad Bhagavad Gita demonstrates how one can enrich life by excelling in the field of their own natural aptitude.
                </p>
                <p>
                  It is about a holistic view of life that leads to genuine happiness through sequential and logical methods. Pursuit of happiness requires converting theoretical knowledge into living intellect, which is precisely what is prescribed in this extraordinary discourse.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0284c7]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Action-Oriented Philosophy for Modern Professionals</span>
              </div>
            </div>

            {/* Hindi Translation Box */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-900/15 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                  मूल हिंदी संदेश
                </span>
                <span className="text-xs text-slate-400">संस्थापक संदेश</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p>
                  यह पुस्तक भगवद्‍गीता को एक कहानी या गीत के रूप में उपलब्ध कराने का एक निष्ठावान प्रयास है, जैसा कि अर्जुन और भगवान श्रीकृष्ण के बीच का पावन संवाद है। यह मूल पाठ से पृथक नहीं, केवल हर श्लोक का शब्दानुसार अनुवाद कर सरल वाक्यों में प्रस्तुत किया गया है।
                </p>
                <p>
                  श्रीमद्भगवद्गीता का उपदेश उस अथाह सागर की तरह है जो अनमोल रत्नों से भरा हुआ है। जो साधक इसमें जितना गहरा गोता लगाता है, वह उतने ही अमूल्य रत्न प्राप्त करने के लिए बाध्य होता है।
                </p>
                <p>
                  हमारा संकल्प इस महान ज्ञान को विश्वभर में हर घर तक पहुँचाना है ताकि युवा पीढ़ी और नेतृत्वकर्ता जीवन के हर क्षेत्र में संतुलित, निर्भय और सफल बन सकें।
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#e16922]">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>बालिकाओं की शिक्षा के लिए ५०% आय का पावन संकल्प</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Interactive Video Wisdom Theatre */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1.5 rounded-full border border-[#28c2ff]/30">
              Media &amp; Discourse Theatre
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Watch Keynote Discourses &amp; Chanting
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Select a lecture below to stream key insights directly from our recorded Ahmedabad auditorium sessions
            </p>
          </div>

          {/* Video Player Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main Screen */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=0&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              <div className="p-6 sm:p-7 bg-slate-900 text-white space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[#28c2ff] font-bold uppercase tracking-wider">
                    {activeVideo.tag}
                  </span>
                  <span>{activeVideo.speaker}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {activeVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                  {activeVideo.desc}
                </p>
              </div>
            </div>

            {/* Right Video Playlist Selector */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Available Discourses
              </span>

              {discourseVideos.map((vid) => {
                const isActive = activeVideoId === vid.id;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideoId(vid.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 group ${
                      isActive
                        ? 'bg-[#fef4ee] border-[#e16922] shadow-sm'
                        : 'bg-white hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isActive ? 'bg-[#e16922] text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-[#e16922] group-hover:text-white transition-colors'
                    }`}>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>

                    <div className="space-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? 'text-[#e16922]' : 'text-slate-400'
                      }`}>
                        {vid.duration}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                        {vid.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-normal">
                        {vid.speaker}
                      </p>
                    </div>
                  </button>
                );
              })}

              <a
                href="https://www.youtube.com/channel/UCHPXTufZ_8ocSWBi8TpOGiw/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 p-4 rounded-2xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 flex items-center justify-between text-xs font-bold transition-colors"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. "The Corporate Bhagavad Gita" Book & CSR Transparency Showcase */}
      <section id="book-csr" className="py-20 sm:py-28 bg-[#fbf6ee] border-b border-amber-900/10 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-white border-2 border-amber-900/20 p-8 sm:p-14 shadow-xl shadow-amber-950/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Story & CSR */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef4ee] border border-[#e16922]/30 text-[#e16922] text-xs font-bold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>The Corporate Bhagavad Gita &bull; Published Work</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
                  Bhagavad Gita: A Story for Every Seeker
                </h2>

                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  This book is an effort to make the Bhagavad Gita accessible as a captivating dialogue and song, precisely as it was spoken without deviating from original Sanskrit meanings.
                </p>

                {/* Author's Personal Note */}
                <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#e16922] block">
                    Author&apos;s Confession by Prasun Kundu
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif italic">
                    &ldquo;While working on this book, I personally enjoyed it tremendously and need to make an honest confession: I have fallen in love with the Bhagavad Gita all over again. It is far more accessible than most people think, structured as an inspiring story for a larger global audience to reverberate with these precious teachings.&rdquo;
                  </p>
                </div>

                {/* 50% CSR Transparency Box */}
                <div className="p-6 rounded-2xl bg-red-50/70 border border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span>50% Author Income Dedicated to Girls Education</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    50% of the income generated from this book is dedicated to sponsoring tuition fees, books, and nutrition for underprivileged girls and children in Gujarat.
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href="https://users.honestsol.com/register"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Buy Book &amp; Sponsor a Child</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://users.honestsol.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors"
                  >
                    <span>Read Free Online on Portal</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Right Column: 50% Impact Badge Card */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 sm:p-10 bg-gradient-to-b from-[#fef4ee] to-white rounded-3xl border border-[#e16922]/30 text-center space-y-4 shadow-sm">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#e16922] border border-[#e16922]/20">
                  <Heart className="w-10 h-10 fill-[#e16922]" />
                </div>
                
                <div>
                  <span className="text-5xl font-display font-black text-[#e16922] block">
                    50%
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-1">
                    Direct Social Commitment
                  </h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Your purchase directly empowers girl students across Ahmedabad and surrounding rural areas with certified schooling support
                </p>

                <div className="pt-2 w-full border-t border-slate-200/80 text-[11px] text-slate-500 font-semibold">
                  Verified Transparency Pledge
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. The 2 Free Community Chanting Initiatives */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1.5 rounded-full border border-[#e16922]/30">
              Community &amp; Wisdom Initiatives
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Attend Weekly In-Person Chanting in Ahmedabad
            </h2>
            <p className="text-base text-slate-600 font-normal">
              100% free of charge at A-814, Titanium Business Park, Off Corporate Road, Makarba, Ahmedabad
            </p>
          </div>

          {/* 2 Program Cards with Full Uncropped Posters */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Card 1: Adults */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div 
                  onClick={() => setSelectedPoster({ title: "Gita Chanting Is Enchanting", image: "/images/programs/gita-adults.jpg" })}
                  className="relative w-full aspect-[1236/1600] bg-slate-100 overflow-hidden cursor-pointer group/poster border-b border-slate-200"
                  title="Click to view full poster"
                >
                  <Image
                    src="/images/programs/gita-adults.jpg"
                    alt="Gita Chanting Is Enchanting Adult Program Flyer"
                    fill
                    className="object-contain transition-transform duration-300 group-hover/poster:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/poster:bg-slate-950/10 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover/poster:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#28c2ff]" />
                      Click to expand poster
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-sm bg-[#fef4ee] text-[#e16922] border-[#e16922]/30">
                      100% Free Program
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] block">
                    Guided by Prasun Kundu &amp; Sandhya Kundu
                  </span>
                  <h3 className="text-2xl font-display font-black text-slate-900">
                    Gita Chanting Is Enchanting
                  </h3>
                  <p className="text-xs text-[#e16922] font-bold uppercase tracking-wider">
                    A 5-Day Weekday Inner Transformation Program
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Weekly interactive chanting and reflective sessions designed to build mental clarity, inner peace, and emotional resilience under modern life pressures.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Calendar className="w-4 h-4 text-[#e16922] shrink-0" />
                      <span>Every Monday to Friday, 3:00 PM to 4:00 PM</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>A-814, Titanium Business Park, Off Corporate Road, Makarba, Ahmedabad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Contact: +91 98240 04696</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 pt-0 flex gap-3">
                <Link
                  href="/#contact-help"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#e16922]/20"
                >
                  <span>Register Free for Adults</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedPoster({ title: "Gita Chanting Is Enchanting", image: "/images/programs/gita-adults.jpg" })}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-bold text-xs uppercase tracking-wider"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            {/* Card 2: Children */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div 
                  onClick={() => setSelectedPoster({ title: "Gita Chanting Is Enchanting for Children", image: "/images/programs/gita-children.jpg" })}
                  className="relative w-full aspect-[1236/1600] bg-slate-100 overflow-hidden cursor-pointer group/poster border-b border-slate-200"
                  title="Click to view full poster"
                >
                  <Image
                    src="/images/programs/gita-children.jpg"
                    alt="Gita Chanting for Children Program Flyer"
                    fill
                    className="object-contain transition-transform duration-300 group-hover/poster:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover/poster:bg-slate-950/10 transition-colors flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover/poster:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#28c2ff]" />
                      Click to expand poster
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-sm bg-[#eefaff] text-[#0284c7] border-[#28c2ff]/30">
                      100% Free Program
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8 space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] block">
                    Inspiring Young Minds from a Young Age
                  </span>
                  <h3 className="text-2xl font-display font-black text-slate-900">
                    Gita Chanting Is Enchanting for Children
                  </h3>
                  <p className="text-xs text-[#0284c7] font-bold uppercase tracking-wider">
                    A Joyful Step Towards Building Values &amp; Confidence
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Nurturing children through authentic Sanskrit pronunciation, rhythmic recitation, and timeless moral lessons that enhance memory, focus, and self-discipline.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Calendar className="w-4 h-4 text-[#e16922] shrink-0" />
                      <span>Happening Every Sunday, 11:00 AM to 12:00 PM</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>A-814, Titanium Business Park, Off Corporate Road, Makarba, Ahmedabad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Contact: +91 98240 04696</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 pt-0 flex gap-3">
                <Link
                  href="/#contact-help"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#0284c7]/20"
                >
                  <span>Register Free for Children</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedPoster({ title: "Gita Chanting Is Enchanting for Children", image: "/images/programs/gita-children.jpg" })}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-bold text-xs uppercase tracking-wider"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={gitaFaqs}
            title="Bhagavad Gita Wisdom FAQs"
            subtitle="Clear answers on our secular leadership approach, weekly chanting, and book royalties"
          />
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-12 right-0 sm:-right-10 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close poster view"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full aspect-[1236/1600] max-h-[82vh] bg-black/40 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={selectedPoster.image}
                alt={selectedPoster.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between w-full text-white text-xs px-2">
              <span className="font-semibold text-slate-200">{selectedPoster.title}</span>
              <Link
                href="/#contact-help"
                onClick={() => setSelectedPoster(null)}
                className="inline-flex items-center gap-1.5 text-[#28c2ff] hover:underline font-bold"
              >
                <span>Register Free Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
