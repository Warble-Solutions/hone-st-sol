'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { YouTubeIcon } from './SocialIcons';

export default function YouTubeChannelSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "zJ5yIjKGOMg",
      title: "The Lesson of Bhagavad Gita 18.14 | 5 Factors for Success",
      tag: "Signature Framework",
      desc: "In Chapter 18 Verse 14, Shri Krishna reveals that every achievement depends on 5 essential factors: Adhisthana, Karta, Karanam, Cheshta and Daivam",
      duration: "12 mins",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "children-gita-ch12",
      youtubeUrl: "https://www.youtube.com/watch?v=zJ5yIjKGOMg",
      title: "बच्चों द्वारा गाया गया भगवद्गीता का 12वाँ अध्याय",
      tag: "Children Chanting",
      desc: "Recorded live at our Ahmedabad Training Centre. Listen to the precise Sanskrit diction and serene uccharan of children chanting Chapter 12",
      duration: "14 mins",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "management-wisdom",
      youtubeUrl: "https://www.youtube.com/watch?v=zJ5yIjKGOMg",
      title: "The Bhagavad Gita and Corporate Management",
      tag: "Executive Insight",
      desc: "How ancient principles of Nishkama Karma and team synergy overcome 21st-century boardroom hesitation and execution plateaus",
      duration: "16 mins",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="youtube-channel" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200 flex items-center gap-2 w-fit">
              <YouTubeIcon className="w-3.5 h-3.5" />
              <span>Official Channel</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
              Our YouTube Channel
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Access authentic discourses, children chanting demonstrations and boardroom management breakdowns by Mr Prasun Kundu
            </p>
          </div>

          {/* Subscribe Button & Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs">
              1.6K+ Subscribers
            </div>
            <a
              href="https://www.youtube.com/@prasunkundu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 transition-all hover:scale-105"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>Subscribe</span>
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Thumbnail / Video Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900 group">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Play Button Overlay */}
                  <a
                    href="https://www.youtube.com/watch?v=zJ5yIjKGOMg"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    aria-label={`Watch ${vid.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </a>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 text-white text-[10px] font-bold">
                    {vid.duration}
                  </div>

                  {/* Tag Badge */}
                  <div className="absolute top-3 left-3 px-3 py-0.5 rounded-full bg-white/95 text-slate-900 text-[10px] font-extrabold uppercase tracking-wider">
                    {vid.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-display font-black text-slate-900 tracking-tight leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {vid.desc}
                  </p>
                </div>
              </div>

              {/* Watch Link */}
              <div className="p-6 pt-0">
                <a
                  href="https://www.youtube.com/watch?v=zJ5yIjKGOMg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition-colors uppercase tracking-wider"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
