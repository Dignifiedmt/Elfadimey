import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Handshake, Globe2 } from 'lucide-react';

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
      className="relative min-h-[90vh] pt-28 pb-16 lg:py-28 flex items-center overflow-hidden bg-gradient-to-b from-[#F2EFE9]/70 via-[#F9F7F2] to-[#F9F7F2] dark:from-[#061711] dark:via-[#071F17] dark:to-[#071F17] transition-colors duration-300"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#0B2E23_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-[#C89D42]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-[#0B2E23]/10 dark:bg-[#164335]/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Copy & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top Market Pillar Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#C89D42]/15 text-[#8A6C28] dark:text-[#E5BE65] border border-[#C89D42]/30 w-fit mb-6 shadow-sm">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, '#services')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-lg shadow-[#C89D42]/20 hover:shadow-xl hover:shadow-[#C89D42]/30 transition-all duration-200 group text-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold border-2 border-[#0B2E23] dark:border-[#C89D42]/60 text-[#0B2E23] dark:text-[#F8F6F0] hover:bg-[#0B2E23] hover:text-[#F9F7F2] dark:hover:bg-[#C89D42] dark:hover:text-[#071F17] transition-all duration-200 text-center"
              >
                <MessageSquare className="w-5 h-5 text-[#C89D42]" />
                <span>Start a Business Conversation</span>
              </a>
            </div>

            {/* Strategic Value Metrics */}
            <div className="pt-6 border-t border-[#E5DFC8] dark:border-[#1A3D30] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0B2E23] dark:text-[#D4AF37]">
                  Strategic
                </span>
                <span className="text-xs sm:text-sm text-[#61736A] dark:text-[#9FB1A8] font-medium">
                  Iran • Nigeria • Africa
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0B2E23] dark:text-[#D4AF37]">
                  6 Services
                </span>
                <span className="text-xs sm:text-sm text-[#61736A] dark:text-[#9FB1A8] font-medium">
                  End-to-End Facilitation
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0B2E23] dark:text-[#D4AF37]">
                  Verified
                </span>
                <span className="text-xs sm:text-sm text-[#61736A] dark:text-[#9FB1A8] font-medium">
                  B2B Trade Direct
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Photographic Showcase of African and White Business People in Discussion */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[520px]">
              
              {/* Outer Decorative Gradient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C89D42]/30 via-transparent to-[#0B2E23]/30 blur-xl"></div>

              {/* Main Image Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C89D42]/50 bg-[#0B2E23]">
                <img
                  src="/business-discussion.jpg"
                  alt="African and international business executives discussing cross-border trade contracts and commercial opportunities"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
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
