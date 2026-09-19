'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      title: "The Bhagavad Gita and Management",
      category: "Management Philosophy",
      desc: "Many of the principles and ideas presented in the Bhagavad Gita can be applied directly to modern management practices, decision frameworks and team leadership",
      readTime: "6 min read",
      image: "/images/blogs/management.jpg",
      link: "https://solutions.honestsol.com/the-bhagavad-gita-and-management/"
    },
    {
      id: 2,
      title: "Relevance of The Bhagavad Gita",
      category: "Corporate Wisdom",
      desc: "Our landmark book 'The Corporate Bhagavad Gita, Discover the Arjuna in You' translates ancient battlefield counsel into everyday corporate resilience",
      readTime: "8 min read",
      image: "/images/blogs/relevance.png",
      link: "https://solutions.honestsol.com/relevance-of-the-bhagavad-gita/"
    },
    {
      id: 3,
      title: "Experience the Power of Bhagvad Gita",
      category: "Personal Leadership",
      desc: "In our journey of life and business, we frequently encounter unexpected turbulence. Discover how Gita principles build unshakeable inner equipoise",
      readTime: "5 min read",
      image: "/images/blogs/power.png",
      link: "https://solutions.honestsol.com/experience-the-power-of-bhagavad-gita/"
    },
    {
      id: 4,
      title: "Gita Chanting is Enchanting",
      category: "Sound Energy & Diction",
      desc: "Chanting is not merely recitation, it is a scientifically studied alignment of sound vibrations that centers the nervous system and deepens comprehension",
      readTime: "7 min read",
      image: "/images/blogs/chanting.png",
      link: "https://honestsol.com/gita-chanting-is-enchanting-free/"
    }
  ];

  return (
    <section id="blogs" className="py-20 sm:py-28 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e16922] bg-[#fef4ee] px-4 py-1 rounded-full border border-[#e16922]/30">
              Articles &amp; Thought Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Blogs
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Insights on management philosophy, Bhagavad Gita shloka construct and corporate transformation
            </p>
          </div>

          <a
            href="https://honestsol.com/blogs/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 hover:bg-[#fef4ee] text-slate-800 hover:text-[#e16922] font-bold text-xs uppercase tracking-wider transition-all border border-slate-200 hover:border-[#e16922]/40 shrink-0"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-slate-800 shadow-xs border border-slate-100">
                      {b.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{b.readTime}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-950 tracking-tight leading-snug group-hover:text-[#e16922] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <a
                  href={b.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e16922] hover:text-[#c95919] uppercase tracking-wider pt-3"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
