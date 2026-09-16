import React from 'react';
import SectionHeading from './SectionHeading';
import { whyElfadimeyData } from '../data/partners';
import { Network, SearchCheck, Target, ClipboardCheck, Sparkles, Shield, Repeat } from 'lucide-react';

const iconMap = {
  Network: Network,
  SearchCheck: SearchCheck,
  Target: Target,
  ClipboardCheck: ClipboardCheck,
  Sparkles: Sparkles,
  Shield: Shield,
  Repeat: Repeat
};

export default function WhyElfadimey() {
  return (
    <section id="why-elfadimey" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#061711] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Our Value Pillars"
          title="Why Work With Elfadimey"
          subtitle="Our approach is rooted in authentic market relationships, transparent verification, and sustainable cross-border commercial execution."
        />

        {/* 7 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyElfadimeyData.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Shield;

            return (
              <div
                key={pillar.id}
                className="p-7 rounded-2xl bg-[#F9F7F2] dark:bg-[#0B221A] border border-[#E5DFC8] dark:border-[#184232] hover:border-[#C89D42] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F2EBE0] dark:bg-[#0F3529] border border-[#E0D5BE] dark:border-[#1C4A3A] flex items-center justify-center text-[#8A6C28] dark:text-[#D4AF37] mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-b from-[#F2EFE9] to-[#F9F7F2] dark:from-[#0B221A] dark:to-[#071F17] border border-[#E5DFC8] dark:border-[#194031]">
          <p className="text-sm uppercase tracking-widest text-[#8A6C28] dark:text-[#D4AF37] font-semibold mb-2">
            The Elfadimey Principle
          </p>
          <p className="font-serif-brand text-xl sm:text-2xl font-bold text-[#0B2E23] dark:text-[#F8F6F0] leading-snug">
            “Sustainable trade is not built on one-off transactions, but on transparent, reliable commercial partnerships that grow with time.”
          </p>
        </div>

      </div>
    </section>
  );
}
