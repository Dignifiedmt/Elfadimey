import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Handshake, Globe2, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import heroTradeSummit from '../assets/images/global_trade_summit_1789581967970.jpg';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 lg:py-28 flex items-center overflow-hidden bg-gradient-to-b from-[#F2EFE9]/80 via-[#F9F7F2] to-[#FAF8F5] dark:from-[#051711] dark:via-[#071F17] dark:to-[#08241B] transition-colors duration-300"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#0B2E23_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Ambient Lighting Orbs with Classic Gold/Forest Gradients */}
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#C89D42]/20 via-[#DFB864]/10 to-transparent blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0B2E23]/15 via-[#164335]/25 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Copy & Conversion CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Top Market Pillar Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-[#C89D42]/20 to-[#E3BE6A]/10 text-[#8A6C28] dark:text-[#E5BE65] border border-[#C89D42]/35 w-fit mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#C89D42] animate-ping"></span>
              <span>International Trade & Sourcing Facilitation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3.5xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-[#0B2E23] dark:text-[#F8F6F0] leading-[1.15] mb-6">
              Building Sustainable <br className="hidden sm:inline" />
              <span className="text-[#C89D42] underline decoration-[#C89D42]/40 decoration-wavy decoration-1 underline-offset-8">
                Trade Across Borders
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#46574F] dark:text-[#C5D2CB] font-normal leading-relaxed mb-8 max-w-2xl">
              Connecting businesses, suppliers, buyers and commercial opportunities across <span className="font-semibold text-[#0B2E23] dark:text-[#F9F7F2]">Iran</span>, <span className="font-semibold text-[#0B2E23] dark:text-[#F9F7F2]">Nigeria</span> and <span className="font-semibold text-[#0B2E23] dark:text-[#F9F7F2]">African markets</span>.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-[#C89D42] via-[#D4AF37] to-[#B88B2E] hover:from-[#D4AF37] hover:to-[#C89D42] text-[#071F17] shadow-lg shadow-[#C89D42]/20 hover:shadow-xl hover:shadow-[#C89D42]/30 transition-all duration-300 group text-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold border-2 border-[#0B2E23] dark:border-[#C89D42]/60 text-[#0B2E23] dark:text-[#F8F6F0] hover:bg-[#0B2E23] hover:text-[#F9F7F2] dark:hover:bg-[#C89D42] dark:hover:text-[#071F17] transition-all duration-300 text-center"
              >
                <MessageSquare className="w-5 h-5 text-[#C89D42]" />
                <span>Start a Business Conversation</span>
              </a>
            </div>

            {/* Strategic Value Metrics - Official Executive Layout */}
            <div className="pt-6 border-t border-[#E5DFC8] dark:border-[#1A3D30]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* Pillar 1: Strategic */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#0B241C] dark:via-[#0E2D23] dark:to-[#071F17] border border-[#E5DFC8] dark:border-[#1A4535] hover:border-[#C89D42]/60 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C89D42] to-[#9C7524] text-[#071F17] flex items-center justify-center shrink-0 shadow-xs">
                      <Globe2 className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6C28] dark:text-[#D4AF37]">
                      Corridors
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2E23] dark:text-[#F8F6F0] tracking-tight">
                    Strategic
                  </h3>
                  <p className="text-xs font-semibold text-[#5A6E63] dark:text-[#BAC7C0] mt-0.5">
                    Iran • Nigeria • Africa
                  </p>
                </div>

                {/* Pillar 2: 6 Services */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#0B241C] dark:via-[#0E2D23] dark:to-[#071F17] border border-[#E5DFC8] dark:border-[#1A4535] hover:border-[#C89D42]/60 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C89D42] to-[#9C7524] text-[#071F17] flex items-center justify-center shrink-0 shadow-xs">
                      <Briefcase className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6C28] dark:text-[#D4AF37]">
                      Solutions
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2E23] dark:text-[#F8F6F0] tracking-tight">
                    6 Services
                  </h3>
                  <p className="text-xs font-semibold text-[#5A6E63] dark:text-[#BAC7C0] mt-0.5">
                    End-to-End Facilitation
                  </p>
                </div>

                {/* Pillar 3: Verified */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#0B241C] dark:via-[#0E2D23] dark:to-[#071F17] border border-[#E5DFC8] dark:border-[#1A4535] hover:border-[#C89D42]/60 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C89D42] to-[#9C7524] text-[#071F17] flex items-center justify-center shrink-0 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6C28] dark:text-[#D4AF37]">
                      Compliance
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2E23] dark:text-[#F8F6F0] tracking-tight">
                    Verified
                  </h3>
                  <p className="text-xs font-semibold text-[#5A6E63] dark:text-[#BAC7C0] mt-0.5">
                    B2B Trade Direct
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Photographic Showcase of African and White Business People in Discussion */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[520px]">
              
              {/* Outer Decorative Gradient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C89D42]/30 via-transparent to-[#0B2E23]/30 blur-xl"></div>

              {/* Main Image Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C89D42]/50 bg-[#0B2E23]">
                <img
                  src={heroTradeSummit || "/business-discussion.jpg"}
                  alt="Two Nigerian business executives (one in native Hausa dressing and one in suit), one White executive, and one Arab executive in bilateral trade conference"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient overlay at the bottom for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F17] via-[#071F17]/30 to-transparent"></div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#071F17]/90 backdrop-blur-md border border-[#C89D42]/40 text-[#F9F7F2]">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Handshake className="w-4 h-4 text-[#C89D42]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C89D42]">
                        Cross-Border Collaboration
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Direct B2B
                    </span>
                  </div>
                  <p className="text-xs text-[#CBD8D1] leading-relaxed">
                    Facilitating high-level trade negotiations and commercial agreements between African buyers and international suppliers.
                  </p>
                </div>
              </div>

              {/* Floating Trust Pill Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#0B221A] text-[#0B2E23] dark:text-[#F9F7F2] shadow-xl border border-[#E5DFC8] dark:border-[#1E4D3C] text-xs font-bold">
                <Globe2 className="w-4 h-4 text-[#C89D42]" />
                <span>Iran ⇄ Nigeria ⇄ Africa</span>
              </div>

              {/* Floating Verified Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#C89D42] text-[#071F17] shadow-xl text-xs font-extrabold border border-[#F9F7F2]">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Sourcing</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
