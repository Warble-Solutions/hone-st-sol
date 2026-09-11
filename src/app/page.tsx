import React from 'react';
import HeroV2 from '@/components/HeroV2';
import TrustBarV2 from '@/components/TrustBarV2';
import StickyVerticalsStudio from '@/components/StickyVerticalsStudio';
import DiagnosticToolV2 from '@/components/DiagnosticToolV2';
import SignatureArjunaV2 from '@/components/SignatureArjunaV2';
import ComparisonMatrixV2 from '@/components/ComparisonMatrixV2';
import TestimonialsV2 from '@/components/TestimonialsV2';
import FAQSectionV2 from '@/components/FAQSectionV2';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Full-Width Hero with Dynamic Capability Switcher */}
      <HeroV2 />

      {/* 2. Institutional Trust & Credentials Bar */}
      <TrustBarV2 />

      {/* 3. Middle Sticky Sidebar Studio Element (5 Verticals Navigator) */}
      <StickyVerticalsStudio />

      {/* 4. Interactive 30-Second Bottleneck Diagnostic Tool */}
      <DiagnosticToolV2 />

      {/* 5. Signature Bhagavad Gita Arjuna Leadership & Free Sunday Chanting */}
      <SignatureArjunaV2 />

      {/* 6. The HoneST Advantage Comparison Matrix */}
      <ComparisonMatrixV2 />

      {/* 7. Executive Client Testimonials */}
      <TestimonialsV2 />

      {/* 8. Frequently Asked Questions Accordion */}
      <FAQSectionV2 />
    </div>
  );
}
