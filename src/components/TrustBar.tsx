import React from 'react';
import { Building2, Users, Award, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      value: "75+",
      label: "Enterprises Mentored",
      detail: "From fast-growth startups to legacy industrial leaders",
      color: "text-[#e16922]",
      pill: "B2B Track Record",
      pillBg: "bg-[#fef4ee] text-[#e16922] border-[#e16922]/30"
    },
    {
      value: "100+ Yrs",
      label: "Collective Experience",
      detail: "Hands-on boardroom and operational pedigree",
      color: "text-[#0284c7]",
      pill: "Faculty Authority",
      pillBg: "bg-[#eefaff] text-[#0284c7] border-[#28c2ff]/30"
    },
    {
      value: "2018",
      label: "Founded in Ahmedabad",
      detail: "Catalyst for organizations & individuals",
      color: "text-slate-900",
      pill: "Est. 2018",
      pillBg: "bg-slate-100 text-slate-700 border-slate-200"
    },
    {
      value: "Ahmedabad",
      label: "State-of-the-Art Training Hub",
      detail: "Dedicated physical academy & simulation labs",
      color: "text-[#e16922]",
      pill: "Physical Center",
      pillBg: "bg-[#fef4ee] text-[#e16922] border-[#e16922]/30"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-8 border-b border-slate-100 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#e16922] animate-ping" />
            <p className="text-xs font-display font-extrabold uppercase tracking-widest text-slate-500">
              The Hone ST Benchmark &bull; Grounded in Results Since 2018
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5 bg-[#fef4ee] text-[#e16922] px-3.5 py-1 rounded-full border border-[#e16922]/30 font-bold">
              <CheckCircle className="w-3.5 h-3.5 text-[#e16922]" />
              Boardroom Executed
            </span>
            <span className="flex items-center gap-1.5 bg-[#eefaff] text-[#0284c7] px-3.5 py-1 rounded-full border border-[#28c2ff]/40 font-bold">
              <CheckCircle className="w-3.5 h-3.5 text-[#28c2ff]" />
              Sanskrit Chanting Diction
            </span>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="space-y-2 group">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-display font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full border ${item.pillBg}`}>
                  {item.pill}
                </span>
              </div>
              <div className={`text-4xl lg:text-5xl font-display font-black tracking-tight ${item.color}`}>
                {item.value}
              </div>
              <h4 className="text-sm font-display font-extrabold text-slate-900 tracking-tight">
                {item.label}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
