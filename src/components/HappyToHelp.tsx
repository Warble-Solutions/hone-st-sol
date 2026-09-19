'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export default function HappyToHelp() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Business Consulting',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-help" className="py-20 sm:py-28 bg-white relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7] bg-[#eefaff] px-4 py-1 rounded-full border border-[#28c2ff]/30">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-950 tracking-tight">
            Happy to Help !
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Whether you are looking for executive consulting, corporate workshops, digital solutions or free Gita chanting sessions, we are here for you
          </p>
        </div>

        {/* Main 2-Column Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Contact Details Panel */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-[#fef4ee] via-white to-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e16922] block mb-1">
                  Ahmedabad Headquarters
                </span>
                <h3 className="text-2xl font-display font-black text-slate-950 tracking-tight">
                  Connect Directly With Our Team
                </h3>
                <p className="text-sm text-slate-600 mt-2 font-normal">
                  Drop by our state-of-the-art training centre in Ahmedabad or send us a message to discuss your organizational goals
                </p>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#e16922] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">Address</span>
                    <span>State-of-the-Art Training Centre & Executive Suites, Ahmedabad, Gujarat, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0284c7] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">Email</span>
                    <a href="mailto:contact@honestsol.com" className="hover:text-[#0284c7] transition-colors">
                      contact@honestsol.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#e16922] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider">Phone</span>
                    <span>+91 79 4000 0000 / +91 98250 00000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Callout */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">Commitment to Integrity</span>
              <span>All in-person and virtual Bhagavad Gita chanting sessions are 100% free of charge for all ages</span>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-slate-900">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-slate-600 max-w-md">
                  We have received your message. A senior consultant or program coordinator from our Ahmedabad centre will get in touch with you shortly
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none text-sm text-slate-900 transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none text-sm text-slate-900 transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none text-sm text-slate-900 transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none text-sm text-slate-900 transition-all bg-white"
                    >
                      <option value="Business Consulting">Business Consulting (B2B)</option>
                      <option value="Corporate Training">Corporate Training &amp; TNI</option>
                      <option value="Bhagavad Gita Program">Discover the Arjuna in You</option>
                      <option value="Free Chanting Sessions">Free Gita Chanting (Children / Adults)</option>
                      <option value="Digital Solutions">Digital Solutions &amp; AI Agents</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Message or Requirement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your organization or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#e16922] focus:ring-1 focus:ring-[#e16922] outline-none text-sm text-slate-900 transition-all bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#e16922] hover:bg-[#c95919] text-white font-bold text-sm uppercase tracking-wider shadow-md shadow-[#e16922]/25 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
