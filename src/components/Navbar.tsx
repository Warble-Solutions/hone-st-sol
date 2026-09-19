'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Bhagavad Gita', href: '/bhagavad-gita' },
  { label: 'Business Consulting', href: '/business-consulting' },
  { label: 'Corporate Training', href: '/corporate-training' },
  { label: 'Digital Solutions', href: '/digital' },
  { label: 'Programs', href: '/programs' },
  { label: 'About Us', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-20 sm:h-[84px]">

          {/* Logo */}
          <Link href="/" className="relative h-14 sm:h-16 md:h-[70px] w-48 sm:w-60 md:w-72 shrink-0 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src="/logo/hone-ST-logo.webp"
              alt="HoneST Solutions"
              fill
              sizes="(max-width: 768px) 240px, 320px"
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
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
                  className={`relative px-3 xl:px-4 py-2 text-sm xl:text-[15px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#e16922]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 xl:left-4 xl:right-4 h-0.5 bg-[#e16922] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact-cta"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#e16922] hover:bg-[#d05a18] rounded-full transition-colors shadow-sm whitespace-nowrap"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-5 pb-6 pt-4 space-y-1">
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
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-[#e16922] bg-orange-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/#contact-cta"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white bg-[#e16922] rounded-full"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
