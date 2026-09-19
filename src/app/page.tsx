import React from 'react';
import HomeHeroBanner from '@/components/HomeHeroBanner';
import PhilosophyMatrix from '@/components/PhilosophyMatrix';
import VerticalsStudio from '@/components/VerticalsStudio';
import VisionMission from '@/components/VisionMission';
import ProgramsSection from '@/components/ProgramsSection';
import WisdomMediaLounge from '@/components/WisdomMediaLounge';
import ClientTicker from '@/components/ClientTicker';
import TestimonialsSection from '@/components/TestimonialsSection';
import HappyToHelp from '@/components/HappyToHelp';
import FAQAccordion from '@/components/FAQAccordion';

export default function HomePage() {
  const homeFaqs = [
    {
      q: "What makes HoneST Solutions unique compared to typical consulting agencies?",
      a: "HoneST Solutions combines 50+ years of collective high-level boardroom execution with deep-rooted philosophical wisdom and cutting-edge digital AI engineering. We don't just hand over slide decks; we work side-by-side with leadership in Ahmedabad and across India to implement systems, train teams experiential-first, and deploy automated tech"
    },
    {
      q: "How does the 'Discover the Arjuna in You' program work for corporate teams?",
      a: "Rooted in Chapter 18 of the Shrimad Bhagavad Gita, this signature program was designed by Mr Prasun Kundu and celebrated at institutions like the Ahmedabad Management Association (AMA). It transforms executive decision-making, overcomes organisational hesitation and restores equipoise under high-stakes corporate pressure"
    },
    {
      q: "Can we engage HoneST Solutions strictly for Digital Engineering and AI Agents?",
      a: "Yes! Our Digital Solutions vertical operates as a dedicated high-performance agency. We engineer autonomous AI agents, custom mobile/web apps in Next.js, and spearhead Generative Engine Optimization (GEO/AEO) for modern search visibility"
    },
    {
      q: "Are the Bhagavad Gita chanting sessions truly free of charge?",
      a: "Yes. In line with our foundational mission and values, all in-person Gita chanting sessions held at our Ahmedabad State-of-the-Art Training Centre and virtual broadcasts are 100% free of charge for children, students and adults"
    },
    {
      q: "Where do book proceeds go?",
      a: "50% of all proceeds from 'The Corporate Bhagavad Gita' and related publications are donated directly to charities supporting the education and welfare of girls and underprivileged children"
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Scrolling Hero Banner with 4 Core Verticals */}
      <HomeHeroBanner />

      {/* 2. Foundation & Philosophy: 'What Mind Can Conceive Man Can Achieve' + H-O-N-E-S-T Matrix */}
      <PhilosophyMatrix />

      {/* 3. Our Business Verticals: Interactive Split-Stage Studio */}
      <VerticalsStudio />

      {/* 4. Vision & Mission with 4 Core Values */}
      <VisionMission />

      {/* 5. Programs: 2 Official Programs (Adult Chanting & Children Chanting) */}
      <ProgramsSection />

      {/* 6. Wisdom Media Lounge: YouTube Masterclass + Curated Published Blogs */}
      <WisdomMediaLounge />

      {/* 7. Client Organizations Ticker */}
      <ClientTicker />

      {/* 8. Executive Testimonials Carousel */}
      <TestimonialsSection />

      {/* 9. Happy to Help ! Direct Contact Inquiry Form */}
      <HappyToHelp />

      {/* 10. FAQ Accordion */}
      <FAQAccordion 
        faqs={homeFaqs} 
        title="Frequently Asked Questions" 
        subtitle="Clarifying our consulting methodology, digital solutions and wisdom programs"
      />
    </div>
  );
}
