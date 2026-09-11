'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  Heart, 
  Sparkles,
  Send,
  MessageSquare
} from 'lucide-react';
import { LinkedInIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from './SocialIcons';

export default function FooterV2() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedVertical, setSelectedVertical] = useState('Executive Consulting');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Interactive Contact Hub */}
        <div id="contact-cta" className="mb-20 scroll-mt-24">
          <div className="rounded-3xl border-2 border-[#e16922]/20 bg-gradient-to-br from-[#fffbf7] via-white to-orange-50/20 p-8 sm:p-12 lg:p-14 shadow-xl shadow-orange-950/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Direct Outreach & Ahmedabad Hub */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-[#e16922]/20 text-[#e16922] text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-black text-slate-950 tracking-tight leading-tight">
                  Let&apos;s Build Clarity, Autonomy & Exponential Growth.
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  Whether you are seeking boardroom strategy, transformative Bhagavad Gita executive leadership, corporate TNI workshops, or autonomous AI systems &mdash; our senior partners in Ahmedabad are ready to engage.
                </p>

                {/* Direct Contact Pills */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-orange-100/80 flex items-center justify-center shrink-0 text-[#e16922]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>HoneST Solutions, Ahmedabad, Gujarat, India</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-orange-100/80 flex items-center justify-center shrink-0 text-[#e16922]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:connect@honestsol.com" className="hover:text-[#e16922] font-semibold transition-colors">
                      connect@honestsol.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-8 h-8 rounded-full bg-orange-100/80 flex items-center justify-center shrink-0 text-[#e16922]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a href="tel:+919825000000" className="hover:text-[#e16922] font-semibold transition-colors">
                      +91 98250 00000 / Direct Headquarters
                    </a>
                  </div>
                </div>

                {/* Sunday Chanting Community Callout */}
                <div className="p-4 rounded-2xl bg-white border border-[#e16922]/20 shadow-xs flex items-center gap-3.5">
                  <Calendar className="w-6 h-6 text-[#e16922] shrink-0" />
                  <div>
                    <strong className="text-xs text-slate-900 block font-bold">
                      Sunday Chanting at Ahmedabad Hub (100% Free)
                    </strong>
                    <span className="text-[11px] text-slate-500">
                      Open to all children, students, and executives. No prior chanting experience needed.
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Consultation Request Form */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-slate-950">
                      Message Received
                    </h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you for reaching out. A senior partner will contact you within 24 hours with custom scheduling options.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#e16922] hover:underline cursor-pointer pt-2"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h4 className="text-xl font-display font-bold text-slate-950">
                        Request a Confidential Diagnostic
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fill out the brief form below to connect directly with our practice leads.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Shah"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Primary Practice of Interest
                        </label>
                        <select
                          value={selectedVertical}
                          onChange={(e) => setSelectedVertical(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none bg-white"
                        >
                          <option value="Bhagavad Gita Leadership">Bhagavad Gita — Discover the Arjuna in You</option>
                          <option value="Business Solutions">Business Solutions — Strategy & SOP Scaling</option>
                          <option value="Corporate Training">Corporate Training — TNI-Based Workshops</option>
                          <option value="Digital & AI Solutions">Digital Solutions — AI Agents & Web Platforms</option>
                          <option value="Sunday Chanting RSVP">Sunday Chanting RSVP (Ahmedabad Hub)</option>
                          <option value="Book / Publication Inquiry">Book / Publication Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Brief Organizational Context (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about your organization and current priorities..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#e16922]/20 transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Diagnostic Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-14 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="relative h-10 w-44 block">
              <Image
                src="/logo/hone-ST-logo.webp"
                alt="HoneST Solutions"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Consolidating 50+ years of high-stakes corporate execution, deep-rooted Bhagavad Gita leadership science, and autonomous digital engineering.
            </p>
            <div className="flex items-center gap-2.5 pt-1 text-slate-500">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#e16922] hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#e16922] hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#e16922] hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#e16922] hover:text-white transition-colors" aria-label="YouTube">
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Core Verticals
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/#bhagavad-gita" className="hover:text-[#e16922] transition-colors">
                  Bhagavad Gita Leadership
                </Link>
              </li>
              <li>
                <Link href="/#business-solutions" className="hover:text-[#e16922] transition-colors">
                  Business Solutions & SOPs
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#e16922] transition-colors">
                  Corporate Training (TNI)
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:text-[#e16922] transition-colors">
                  Digital Solutions & AI
                </Link>
              </li>
              <li>
                <Link href="/about#csr" className="hover:text-[#e16922] transition-colors">
                  Books & 50% Royalties
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company & Hub
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/about" className="hover:text-[#e16922] transition-colors">
                  About Our Founders
                </Link>
              </li>
              <li>
                <Link href="/about#centre" className="hover:text-[#e16922] transition-colors">
                  Ahmedabad Training Hub
                </Link>
              </li>
              <li>
                <Link href="/about#milestones" className="hover:text-[#e16922] transition-colors">
                  Journey Since 2018
                </Link>
              </li>
              <li>
                <Link href="/about#csr" className="hover:text-[#e16922] transition-colors">
                  Girls’ Education CSR
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Community Programs
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/#bhagavad-gita" className="hover:text-[#e16922] transition-colors font-medium text-[#e16922]">
                  Free Sunday Chanting
                </Link>
              </li>
              <li>
                <Link href="/#bhagavad-gita" className="hover:text-[#e16922] transition-colors">
                  AMA Signature Workshops
                </Link>
              </li>
              <li>
                <Link href="/#diagnostic" className="hover:text-[#e16922] transition-colors">
                  Interactive Growth Diagnostic
                </Link>
              </li>
              <li>
                <Link href="/#contact-cta" className="hover:text-[#e16922] transition-colors">
                  Book C-Suite Advisory
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} HoneST Solutions. All rights reserved. Founded in 2018 in Ahmedabad, India.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/about" className="hover:text-slate-900 transition-colors">Privacy & Ethics</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-900 transition-colors">Terms of Engagement</Link>
            <span>•</span>
            <span className="text-[#e16922] font-semibold">50% Book Royalties to Charity</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
