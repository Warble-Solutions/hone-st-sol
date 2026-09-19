'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ExternalLink, Clock, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { YouTubeIcon } from './SocialIcons';

interface BlogItem {
  id: number;
  title: string;
  category: string;
  desc: string;
  readTime: string;
  image: string;
  link: string;
}

const featuredBlogs: BlogItem[] = [
  {
    id: 1,
    title: 'The Bhagavad Gita and Management',
    category: 'Management Philosophy',
    desc: 'Applying Chapter 18 dialogue principles directly to modern boardroom decision frameworks and team leadership',
    readTime: '6 min read',
    image: '/images/blogs/management.jpg',
    link: 'https://solutions.honestsol.com/the-bhagavad-gita-and-management/'
  },
  {
    id: 2,
    title: 'Relevance of The Bhagavad Gita',
    category: 'Corporate Wisdom',
    desc: 'Translating ancient battlefield counsel into everyday corporate resilience and strategic clarity',
    readTime: '8 min read',
    image: '/images/blogs/relevance.png',
    link: 'https://solutions.honestsol.com/relevance-of-the-bhagavad-gita/'
  },
  {
    id: 3,
    title: 'Experience the Power of Bhagvad Gita',
    category: 'Personal Leadership',
    desc: 'Practical mental frameworks to conquer anxiety, overcome delusion and maintain unshakeable inner equipoise',
    readTime: '5 min read',
    image: '/images/blogs/power.png',
    link: 'https://solutions.honestsol.com/experience-the-power-of-bhagavad-gita/'
  },
  {
    id: 4,
    title: 'Gita Chanting is Enchanting',
    category: 'Sound Energy & Diction',
    desc: 'The scientific alignment of sound vibrations that centers the nervous system and deepens moral comprehension',
    readTime: '7 min read',
    image: '/images/blogs/chanting.png',
    link: 'https://honestsol.com/gita-chanting-is-enchanting-free/'
  }
];

export default function WisdomMediaLounge() {
  return (
    <section id="wisdom-media" className="py-20 sm:py-28 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 inline-flex items-center gap-2">
              <YouTubeIcon className="w-3.5 h-3.5" />
              <span>Thought Leadership Media</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Wisdom &amp; Insights Lounge
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Explore authentic video discourses, management frameworks and published writings by founder Mr Prasun Kundu
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
              1.6K+ Subscribers
            </div>
            <a
              href="https://www.youtube.com/@prasunkundu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>Subscribe</span>
            </a>
          </div>
        </div>

        {/* 2-Column Split Layout: Video Feature Left + Articles List Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Featured Video Showcase */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between group">
              <div>
                {/* Video Player Card */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/slider/bhagavad-gita.png"
                    alt="The Lesson of Bhagavad Gita 18.14"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Play Button */}
                  <a
                    href="https://www.youtube.com/watch?v=zJ5yIjKGOMg"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    aria-label="Watch The Lesson of Bhagavad Gita 18.14 on YouTube"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </div>
                  </a>

                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-xs">
                      Featured Discourse
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/80 text-white text-[11px] font-bold">
                    12 mins
                  </div>
                </div>

                {/* Video Narrative */}
                <div className="p-7 sm:p-8 space-y-4">
                  <span className="text-xs font-bold text-[#e16922] uppercase tracking-wider block">
                    Chapter 18 Verse 14 Breakdown
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight leading-snug">
                    The Lesson of Bhagavad Gita 18.14 | 5 Factors for Success
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    In Chapter 18, Verse 14, Shri Krishna reveals that every achievement depends on 5 essential factors working in unison: Adhisthana (Foundation), Karta (The Doer), Karanam (Tools &amp; Senses), Cheshta (Focused Effort), and Daivam (Providence)
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-7 sm:p-8 pt-0 border-t border-slate-200/60 mt-4">
                <a
                  href="https://www.youtube.com/watch?v=zJ5yIjKGOMg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider pt-2"
                >
                  <span>Watch Complete Masterclass</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Curated Published Blogs List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Published Insights &amp; Articles
              </span>
              <a
                href="https://honestsol.com/blogs/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#e16922] hover:text-[#c95919] uppercase tracking-wider flex items-center gap-1"
              >
                <span>All Articles</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* List of 4 Articles */}
            <div className="space-y-3.5 flex-1">
              {featuredBlogs.map((b) => (
                <a
                  key={b.id}
                  href={b.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 transition-all flex items-center gap-4 group shadow-xs hover:shadow-sm"
                >
                  {/* Article Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="80px"
                    />
                  </div>

                  {/* Article Text */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#e16922]">
                        {b.category}
                      </span>
                      <span className="text-slate-300">&bull;</span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{b.readTime}</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-display font-bold text-slate-900 group-hover:text-[#e16922] transition-colors truncate">
                      {b.title}
                    </h4>

                    <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#e16922] group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
