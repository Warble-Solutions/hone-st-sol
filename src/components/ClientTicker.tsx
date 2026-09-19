import React from 'react';
import Image from 'next/image';

const clientLogosRow1 = [
  { id: 1, name: 'Saral Trader', logo: '/images/clients/client-01.png' },
  { id: 2, name: 'Sora Global', logo: '/images/clients/client-02.png' },
  { id: 3, name: 'next360', logo: '/images/clients/client-03.png' },
  { id: 4, name: 'Reliance Retail', logo: '/images/clients/client-04.png' },
  { id: 5, name: 'MICA - The School of Ideas', logo: '/images/clients/client-05.png' },
  { id: 6, name: 'Ahmedabad Management Association (AMA)', logo: '/images/clients/client-06.png' },
  { id: 7, name: 'Corporate Partner', logo: '/images/clients/client-07.png' },
  { id: 8, name: 'Kalorex Group', logo: '/images/clients/client-08.png' },
  { id: 9, name: 'Enterprise Partner', logo: '/images/clients/client-09.png' },
  { id: 10, name: 'Industrial Partner', logo: '/images/clients/client-10.png' },
  { id: 11, name: 'Global Brand Partner', logo: '/images/clients/client-11.png' },
  { id: 12, name: 'Commercial Partner', logo: '/images/clients/client-12.png' },
  { id: 13, name: 'OmniMD Healthcare', logo: '/images/clients/client-13.png' },
  { id: 14, name: 'Strategic Partner', logo: '/images/clients/client-14.png' },
  { id: 15, name: 'Gujarat Technological University (GTU)', logo: '/images/clients/client-15.png' },
];

const clientLogosRow2 = [
  { id: 16, name: 'Manas Polymers & Energies', logo: '/images/clients/client-16.png' },
  { id: 17, name: 'MachineWiz / iotwiz', logo: '/images/clients/client-17.png' },
  { id: 18, name: 'Engineering Partner', logo: '/images/clients/client-18.png' },
  { id: 19, name: 'Business Solutions', logo: '/images/clients/client-19.png' },
  { id: 20, name: 'Supply Chain Partner', logo: '/images/clients/client-20.png' },
  { id: 21, name: 'Technology Partner', logo: '/images/clients/client-21.png' },
  { id: 22, name: 'Manufacturing Partner', logo: '/images/clients/client-22.png' },
  { id: 23, name: 'Enterprise Ventures', logo: '/images/clients/client-23.png' },
  { id: 24, name: 'Academic & Training Partner', logo: '/images/clients/client-24.png' },
  { id: 25, name: 'Global Logistics', logo: '/images/clients/client-25.png' },
  { id: 26, name: 'Digital Services Partner', logo: '/images/clients/client-26.png' },
  { id: 27, name: 'Consulting Client', logo: '/images/clients/client-27.png' },
  { id: 28, name: 'Retail Alliance', logo: '/images/clients/client-28.png' },
  { id: 29, name: 'Institutional Partner', logo: '/images/clients/client-29.png' },
  { id: 30, name: 'Growth Enterprise', logo: '/images/clients/client-30.png' },
];

export default function ClientTicker() {
  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-[#e16922] text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200/60">
          <span className="w-2 h-2 rounded-full bg-[#e16922] animate-pulse" />
          Our Valued Clientele & Partners
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Trusted by 75+ Industry Leaders, Universities & Fast-Growth Enterprises
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Delivering transformative digital engineering, strategic management consulting, and workforce capability programs.
        </p>
      </div>

      {/* Marquee Wrapper with Smooth Gradient Fades */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward Marquee */}
        <div className="animate-marquee flex items-center gap-6 py-2">
          {[...clientLogosRow1, ...clientLogosRow1].map((client, idx) => (
            <div
              key={`r1-${client.id}-${idx}`}
              className="group h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] px-6 sm:px-8 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-orange-300/80 flex items-center justify-center shrink-0 transition-all duration-300 cursor-default"
              title={client.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={240}
                  height={80}
                  className="h-14 sm:h-16 w-auto max-w-[190px] sm:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward (Reverse) Marquee */}
        <div className="animate-marquee-reverse flex items-center gap-6 py-2">
          {[...clientLogosRow2, ...clientLogosRow2].map((client, idx) => (
            <div
              key={`r2-${client.id}-${idx}`}
              className="group h-24 sm:h-28 min-w-[200px] sm:min-w-[240px] px-6 sm:px-8 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-sky-300/80 flex items-center justify-center shrink-0 transition-all duration-300 cursor-default"
              title={client.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={240}
                  height={80}
                  className="h-14 sm:h-16 w-auto max-w-[190px] sm:max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
