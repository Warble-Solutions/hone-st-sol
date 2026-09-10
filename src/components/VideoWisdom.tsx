import React from 'react';
import { Play, ArrowRight, BookOpen, Clock, Eye, Sparkles } from 'lucide-react';
import { YouTubeIcon } from './SocialIcons';

const mediaCards = [
  {
    title: "बच्चों द्वारा गाया गया भगवद्गीता का 12वाँ अध्याय",
    type: "YouTube Discourse",
    category: "Gita Chanting for Children",
    desc: "Recorded live at our Ahmedabad Training Centre. Listen to the precise Sanskrit diction and serene uccharan of children chanting Chapter 12.",
    duration: "14 mins",
    speaker: "Conducted by Prasun Kundu",
    link: "https://youtube.com"
  },
  {
    title: "The Bhagavad Gita and Modern Management",
    type: "Executive Insight",
    category: "Corporate Gita Series",
    desc: "How ancient principles of Nishkama Karma, decisive leadership, and team synergy solve 21st-century boardroom attrition and execution plateaus.",
    duration: "8 min read",
    speaker: "Research by Prasun Kundu",
    link: "https://honestsol.com"
  },
  {
    title: "The Hidden Purpose of Suffering & Overcoming 'Why Me?'",
    type: "YouTube Discourse",
    category: "Wisdom Series",
    desc: "A profound breakdown of Chapter 2 and Chapter 18 shlokas, addressing anxiety, unexpected crisis management, and emotional equipoise.",
    duration: "18 mins",
    speaker: "Conducted by Prasun Kundu",
    link: "https://youtube.com"
  }
];

export default function VideoWisdom() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 bg-red-50 px-4 py-1.5 rounded-full border border-red-200/80 flex items-center gap-1.5 w-fit">
              <YouTubeIcon className="w-3.5 h-3.5" /> Media & Wisdom Talks
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-950 tracking-tight">
              Watch & Read Our <span className="gradient-text-blue">Thought Leadership</span>
            </h2>
            <p className="text-base text-slate-600">
              Access authentic discourses, children chanting demonstrations, and boardroom management breakdowns straight from our Ahmedabad facility.
            </p>
          </div>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/20 transition-all hover:scale-105 shrink-0"
          >
            <YouTubeIcon className="w-4 h-4" />
            <span>Visit YouTube Channel</span>
          </a>
        </div>

        {/* 3 Cards (Light Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between card-luxury group"
            >
              {/* Card Banner Image / Visual Mock */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 via-blue-50/50 to-slate-50 flex items-center justify-center p-6 text-center border-b border-slate-100 overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-slate-800 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-slate-200 font-bold shadow-2xs">
                    {card.category}
                  </span>
                  <span className="flex items-center gap-1 font-semibold bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                    <Clock className="w-3 h-3 text-slate-400" /> {card.duration}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600">
                    {card.type}
                  </span>
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {card.speaker}
                  </span>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <span>Open Media</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
