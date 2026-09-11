'use client';

import React from 'react';
import { Award, ShieldCheck, Users, BookOpen, Heart, TrendingUp } from 'lucide-react';

const trustStats = [
  {
    icon: Award,
    value: '50+ Years',
    label: 'C-Suite Executive Leadership',
    color: 'text-[#e16922]',
    bg: 'bg-orange-50',
  },
  {
    icon: TrendingUp,
    value: '75+ Cos',
    label: 'Scaled from Start-Up to Market Leader',
    color: 'text-[#1e92bf]',
    bg: 'bg-[#edf7fb]',
  },
  {
    icon: Users,
    value: '100+ Sessions',
    label: 'Delivered at Ahmedabad Management Assoc. (AMA)',
    color: 'text-[#e16922]',
    bg: 'bg-orange-50',
  },
  {
    icon: Heart,
    value: '50% Royalties',
    label: 'Donated to Girls’ Underprivileged Education',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
];

const clientLogos = [
  'Ahmedabad Management Association (AMA)',
  'Torrent Group Alumni',
  'Adani Solar Vendor Ecosystem',
  'Zydus Healthcare Network',
  'Gujarat Chamber of Commerce & Industry',
  'Federation of Indian Industry (FII)',
];

export default function TrustBarV2() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {trustStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex items-center gap-3.5 hover:bg-white hover:shadow-md transition-all"
              >
                <div className={`w-11 h-11 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-display font-black text-slate-950">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client / Institution Recognition Strip */}
        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Trusted by Leaders & Institutions Across India:
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {clientLogos.map((org, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/70 text-xs font-semibold text-slate-700"
              >
                {org}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
