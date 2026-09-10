import React from 'react';
import { Building2, Shield, Award, CheckCircle2 } from 'lucide-react';

const clients = [
  { name: "DSM B2C Business MANDI", category: "Nutrition & FMCG" },
  { name: "Tinctura Colour", category: "Manufacturing & Chemicals" },
  { name: "My Car My Ride", category: "Automotive & Fleet" },
  { name: "AMA Ahmedabad", category: "Management Association" },
  { name: "Gujarat Engineering Corp", category: "Industrial Solutions" },
  { name: "Zenith Retail Group", category: "Retail & Distribution" },
  { name: "Apex Logistics India", category: "Supply Chain" },
  { name: "Veda Health & Wellness", category: "Healthcare & Ayurveda" },
  { name: "Orbit FinTech Global", category: "Financial Services" },
  { name: "Surat Textile Innovators", category: "Apparel & Textiles" }
];

export default function ClientTicker() {
  return (
    <section className="py-16 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by 75+ Leading Organizations, Industry Associations & Fast-Growth SMEs
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-2">
          {/* Double array for seamless loop */}
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-sm shrink-0 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center font-bold text-xs">
                {client.name.charAt(0)}
              </div>
              <div>
                <span className="text-sm font-extrabold text-slate-800 tracking-tight block">
                  {client.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
