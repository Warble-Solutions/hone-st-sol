'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  ScrollText,
  ShieldCheck
} from 'lucide-react';
import { LinkedInIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700 pt-20 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual-Path Conversion Section (Light Theme with #e16922 & #28c2ff) */}
        <div id="contact-cta" className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* B2B Path */}
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#eefaff]/90 via-white to-slate-50 border-2 border-[#28c2ff]/30 shadow-lg shadow-sky-500/5">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eefaff] text-[#0284c7] text-xs font-display font-extrabold uppercase tracking-wider mb-4 border border-[#28c2ff]/40">
                  <Building2 className="w-3.5 h-3.5" /> For Enterprises & SMEs
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight leading-snug">
                  Scale Operations with Proven Systems & Next-Gen Digital Tech
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Join 75+ forward-looking organizations that transformed productivity, operational clarity, and market authority through our consulting, AI agents, and corporate training.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/digital#audit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#e16922] hover:bg-[#c95919] text-white font-display font-bold text-sm shadow-md shadow-[#e16922]/20 transition-all hover:scale-[1.02]"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-display font-bold text-sm border border-slate-300 transition-colors"
                >
                  <span>Our 50+ Yr Experience</span>
                </Link>
              </div>
            </div>
          </div>

          {/* B2C / Personal Growth Path */}
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#fef4ee]/90 via-white to-slate-50 border-2 border-[#e16922]/30 shadow-lg shadow-orange-500/5">
            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef4ee] text-[#e16922] text-xs font-display font-extrabold uppercase tracking-wider mb-4 border border-[#e16922]/40">
                  <ScrollText className="w-3.5 h-3.5" /> For Individuals & Seekers
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight leading-snug">
                  "Discover the Arjuna in You", Ancient Wisdom for Modern Clarity
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Experience the life-altering power of Bhagavad Gita chanting and executive leadership shlokas taught directly at our state-of-the-art Ahmedabad training centre.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/#arjuna-program"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-display font-bold text-sm shadow-md shadow-[#28c2ff]/20 transition-all hover:scale-[1.02]"
                >
                  <span>Explore Free Programs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about#centre"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-display font-bold text-sm border border-slate-300 transition-colors"
                >
                  <span>Visit Training Centre</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-200">
          
          {/* HoneST Mission & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-44">
                <Image
                  src="/logo/hone-ST-logo.webp"
                  alt="HoneST Solutions Logo"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              &ldquo;What mind can conceive man can achieve&rdquo;, since 2018, providing a comprehensive catalyst for organisations and individuals
            </p>

            <div className="p-4 rounded-2xl bg-[#fef4ee]/60 border border-[#e16922]/20 text-xs space-y-1.5">
              <p className="font-display font-black text-[#e16922] uppercase tracking-wide">The HoneST Blueprint</p>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-950">H</strong>armonizing <strong className="text-slate-950">O</strong>pportunities &bull; <strong className="text-slate-950">E</strong>nhancing productivity &bull; <strong className="text-slate-950">N</strong>urturing <strong className="text-slate-950">S</strong>ynergies &bull; <strong className="text-slate-950">T</strong>ransforming lives
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-slate-600">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-[#e16922] hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-[#0284c7] hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" aria-label="YouTube">
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Digital Suite Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0284c7] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Digital Solutions Hub
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/digital#ai-agents" className="hover:text-[#e16922] transition-colors flex items-center justify-between">
                  <span>AI Agents & Automation</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#fef4ee] text-[#e16922] font-bold border border-[#e16922]/30">Hot</span>
                </Link>
              </li>
              <li>
                <Link href="/digital#apps" className="hover:text-[#e16922] transition-colors">
                  Mobile & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/digital#websites" className="hover:text-[#e16922] transition-colors">
                  Modern Websites & Platforms
                </Link>
              </li>
              <li>
                <Link href="/digital#seo-geo" className="hover:text-[#e16922] transition-colors">
                  SEO / GEO / AEO Search Dominance
                </Link>
              </li>
              <li>
                <Link href="/digital#social" className="hover:text-[#e16922] transition-colors">
                  Social Media & Performance Ads
                </Link>
              </li>
              <li>
                <Link href="/digital#course-design" className="hover:text-[#e16922] transition-colors">
                  Interactive Course Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Verticals Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-display font-extrabold uppercase tracking-wider text-[#e16922] flex items-center gap-1.5">
              <ScrollText className="w-3.5 h-3.5" /> Core Verticals
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/bhagavad-gita" className="hover:text-[#e16922] transition-colors">
                  Discover the Arjuna in You
                </Link>
              </li>
              <li>
                <Link href="/business-consulting" className="hover:text-[#e16922] transition-colors">
                  Business Consulting (Ahmedabad)
                </Link>
              </li>
              <li>
                <Link href="/corporate-training" className="hover:text-[#e16922] transition-colors">
                  Corporate Training &amp; TNI
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#e16922] transition-colors">
                  Gita Chanting Programs
                </Link>
              </li>
              <li>
                <Link href="/bhagavad-gita" className="hover:text-[#e16922] transition-colors">
                  The Corporate Bhagavad Gita
                </Link>
              </li>
              <li>
                <Link href="/about#csr" className="hover:text-[#e16922] transition-colors font-bold text-[#e16922]">
                  50% CSR Book Initiative
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-display font-extrabold uppercase tracking-wider text-slate-900">
              Ahmedabad Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e16922] shrink-0 mt-0.5" />
                <span>
                  State-of-the-Art Training Centre & Executive Suites, Ahmedabad, Gujarat, India
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0284c7] shrink-0" />
                <span>contact@honestsol.com</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e16922] shrink-0" />
                <span>+91 79 4000 0000 / +91 98250 00000</span>
              </p>
            </div>

            <div className="mt-4 p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-[11px] text-emerald-900 font-medium">
                Verified Ahmedabad Management Partner & Corporate Facilitator
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} HoneST Solutions (honestsol.com). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#e16922] transition-colors">
              Founders
            </Link>
            <a href="#privacy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-800 transition-colors">
              Terms & Conditions
            </a>
            <a href="#refund" className="hover:text-slate-800 transition-colors">
              Cancellation & Returns
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
