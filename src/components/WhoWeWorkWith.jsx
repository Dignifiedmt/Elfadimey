import React from 'react';
import SectionHeading from './SectionHeading';
import { whoWeWorkWithData } from '../data/partners';
import { Factory, PackageSearch, HardHat, Building2, Building, Hammer, Handshake, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Factory: Factory,
  PackageSearch: PackageSearch,
  HardHat: HardHat,
  Building2: Building2,
  Building: Building,
  Hammer: Hammer,
  Handshake: Handshake
};

export default function WhoWeWorkWith({ onSelectPartnerType }) {
  const handlePartnerInquiry = (title) => {
    if (onSelectPartnerType) {
      onSelectPartnerType(title);
    }
    const elem = document.querySelector('#contact');
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
    <section id="who-we-work-with" className="py-20 md:py-28 bg-[#F9F7F2] dark:bg-[#071F17] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Commercial Network"
          title="Who We Work With"
          subtitle="Connecting verified commercial entities across the entire supply chain, from industrial manufacturing plants to major regional developers and distributors."
        />

        {/* 7 Business Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whoWeWorkWithData.map((category) => {
            const IconComponent = iconMap[category.icon] || Handshake;

            return (
              <div
                key={category.id}
                className="group bg-[#FFFFFF] dark:bg-[#0B221A] rounded-2xl p-7 border border-[#E5DFC8] dark:border-[#184232] shadow-sm hover:shadow-xl hover:border-[#C89D42]/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F4EFE3] dark:bg-[#0F3529] border border-[#E3DAC4] dark:border-[#1E4D3C] flex items-center justify-center text-[#8A6C28] dark:text-[#D4AF37] group-hover:bg-[#C89D42] group-hover:text-[#071F17] group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F2EFE9] dark:bg-[#0F3529] text-[#71857B] dark:text-[#A3B8AD]">
                      B2B Network
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-2.5 group-hover:text-[#C89D42] dark:group-hover:text-[#D4AF37] transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-sm text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE0] dark:border-[#14382A]">
                  <div className="text-xs text-[#7A8C83] dark:text-[#8E9F96] mb-3">
                    <span className="font-semibold text-[#0B2E23] dark:text-[#D4AF37]">Engagement:</span> {category.collaborationFocus}
                  </div>
                  
                  <button
                    onClick={() => handlePartnerInquiry(category.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6C28] dark:text-[#D4AF37] hover:underline"
                  >
                    <span>Partner with us</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Partnership Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0B2E23] text-[#F9F7F2] border border-[#C89D42]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-1">
              Looking for a Reliable International Sourcing Partner?
            </h4>
            <p className="text-sm text-[#B7C7C0] max-w-xl">
              Whether you are an overseas producer seeking market entry or an importer seeking verified factory pricing, we are ready to discuss your objectives.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-md shrink-0 transition-all"
          >
            Connect With Our Trade Team
          </a>
        </div>

      </div>
    </section>
  );
}
