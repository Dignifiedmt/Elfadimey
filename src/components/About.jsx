import React from 'react';
import SectionHeading from './SectionHeading';
import { CheckCircle2, ArrowRight, ShieldCheck, Compass, Handshake, Globe2 } from 'lucide-react';

export default function About() {
  const pillars = [
    { title: "International Sourcing", desc: "Connecting directly with export-ready manufacturers." },
    { title: "Procurement Management", desc: "Coordinating project tenders and commercial supplies." },
    { title: "Import & Export", desc: "Streamlining maritime logistics, compliance, and customs." },
    { title: "Market Development", desc: "Guiding suppliers into high-demand regional territories." },
    { title: "Trade Facilitation", desc: "Bridging financial, legal, and operational cross-border friction." },
    { title: "Business Connections", desc: "Forging verified B2B relationships that generate recurring value." }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#061711] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Company Overview"
          title="About Elfadimey Global Concept Limited"
          subtitle="An international trade and market development company bridging industrial manufacturing and high-growth commercial demand across strategic borders."
        />

        {/* Split Layout: Content + Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Story & Core Brand Value */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E23] dark:text-[#F8F6F0]">
                Welcome to Elfadimey Global Concept Limited — Building Sustainable Trade Across Borders.
              </h3>
              
              <p className="text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed text-base sm:text-lg">
                We are an international trade and market development company focused on connecting businesses, suppliers, buyers, and commercial opportunities across borders.
              </p>

              <p className="text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed text-base sm:text-lg">
                Our work covers international sourcing, procurement, import & export, market development, trade facilitation, and business connections, with a particular focus on creating stronger commercial links between <strong className="text-[#0B2E23] dark:text-[#F9F7F2]">Iran</strong>, <strong className="text-[#0B2E23] dark:text-[#F9F7F2]">Nigeria</strong>, and <strong className="text-[#0B2E23] dark:text-[#F9F7F2]">African markets</strong>.
              </p>
            </div>

            {/* Prominent Brand Message Callout */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B2E23] to-[#124233] text-[#F9F7F2] border-l-4 border-[#C89D42] shadow-xl overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C89D42]/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
                  Our Guiding Belief
                </span>
                <blockquote className="font-serif-brand text-lg sm:text-xl md:text-2xl font-semibold italic leading-snug text-[#F8F6F0]">
                  “At Elfadimey, we believe that the right connection can create a lasting business opportunity.”
                </blockquote>
              </div>
            </div>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F9F7F2] dark:bg-[#0B221A] border border-[#E5DFC8] dark:border-[#194031]">
                  <CheckCircle2 className="w-5 h-5 text-[#C89D42] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2E23] dark:text-[#F9F7F2]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5D7066] dark:text-[#9FB1A8] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="pt-2">
              <a
                href="#who-we-work-with"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8A6C28] dark:text-[#D4AF37] hover:underline"
              >
                <span>Discover our target business network</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Featuring Official Brand Identity */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#C89D42]/20 to-[#0B2E23]/20 blur-xl transform rotate-3"></div>

              {/* Main Visual Display Card */}
              <div className="relative bg-[#071F17] rounded-3xl p-8 sm:p-10 border border-[#C89D42]/40 shadow-2xl text-center text-[#F9F7F2]">
                
                {/* Official Brand Logo */}
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 bg-[#F9F7F2] ring-4 ring-[#C89D42] shadow-2xl mb-8 group transition-transform duration-500 hover:scale-105">
                  <img
                    src="/elfadimey-logo.jpg"
                    alt="Official Seal of Elfadimey Global Concept Limited"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 className="font-serif-brand text-2xl font-bold text-[#F9F7F2] tracking-wider mb-1">
                  ELFADIMEY
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C89D42] mb-4">
                  GLOBAL CONCEPT LIMITED
                </p>

                <p className="text-xs sm:text-sm text-[#B4C5BC] italic font-serif-brand max-w-xs mx-auto mb-6">
                  “Building Sustainable Trade Across Borders”
                </p>

                {/* Corridors highlight strip */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#1C4B39] text-center">
                  <div className="p-2 rounded-lg bg-[#0F3529]">
                    <span className="block text-base">🇮🇷</span>
                    <span className="text-[11px] font-bold text-[#D4AF37]">Iran</span>
                    <span className="block text-[9px] text-[#A3B8AD]">Sourcing</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#0F3529]">
                    <span className="block text-base">🇳🇬</span>
                    <span className="text-[11px] font-bold text-[#D4AF37]">Nigeria</span>
                    <span className="block text-[9px] text-[#A3B8AD]">Gateway</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#0F3529]">
                    <span className="block text-base">🌍</span>
                    <span className="text-[11px] font-bold text-[#D4AF37]">Africa</span>
                    <span className="block text-[9px] text-[#A3B8AD]">Expansion</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
