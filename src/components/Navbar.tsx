'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Bhagavad Gita', href: '/#bhagavad-gita' },
  { label: 'Digital Solutions', href: '/digital' },
  { label: 'Business Solutions', href: '/#business-solutions' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 pb-2">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 border border-slate-200/80 px-5 sm:px-7 py-2.5'
            : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xs px-5 sm:px-7 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative h-9 w-36 sm:w-40 shrink-0 transition-transform hover:scale-102">
            <Image
              src="/logo/hone-ST-logo.webp"
              alt="HoneST Solutions"
              fill
              sizes="160px"
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = link.href.includes('#')
                ? pathname === '/' && hash === link.href.slice(1)
                : pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (link.href.includes('#')) setHash(link.href.slice(1));
                  }}
                  className={`relative px-4 py-1.5 text-xs sm:text-[13px] font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#e16922] shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/#contact-cta"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#e16922] hover:bg-[#c95919] rounded-full transition-all duration-200 shadow-sm shadow-[#e16922]/20 hover:shadow-md hover:scale-[1.02]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-200 animate-ping" />
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl p-4 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = link.href.includes('#')
              ? pathname === '/' && hash === link.href.slice(1)
              : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  if (link.href.includes('#')) setHash(link.href.slice(1));
                  setIsOpen(false);
                }}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-[#e16922] bg-orange-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/#contact-cta"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#e16922] rounded-xl shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
