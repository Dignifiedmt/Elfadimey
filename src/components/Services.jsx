import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ServiceDetailModal from './ServiceDetailModal';
import { servicesData } from '../data/services';
import { Globe, ShieldCheck, Ship, TrendingUp, FileText, Users, ArrowRight } from 'lucide-react';

const iconMap = {
  Globe: Globe,
  ShieldCheck: ShieldCheck,
  Ship: Ship,
  TrendingUp: TrendingUp,
  FileText: FileText,
  Users: Users
};

export default function Services({ onSelectServiceForInquiry }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleInquire = (serviceTitle) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      const navOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F9F7F2] dark:bg-[#071F17] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Core Services"
          title="International Trade & Market Facilitation"
          subtitle="Comprehensive, commercially focused capabilities designed to de-risk sourcing, accelerate market access, and sustain cross-border trade pipelines."
        />

        {/* 6 Reusable Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;

            return (
              <div
                key={service.id}
                className="group relative bg-[#FFFFFF] dark:bg-[#0B221A] rounded-2xl p-7 sm:p-8 border border-[#E5DFC8] dark:border-[#184232] shadow-sm hover:shadow-xl hover:border-[#C89D42]/80 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top gold accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-transparent group-hover:bg-[#C89D42] rounded-t-full transition-all duration-300"></div>

                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#F4EFE3] dark:bg-[#0F3529] border border-[#E3DAC4] dark:border-[#1E4D3C] flex items-center justify-center text-[#8A6C28] dark:text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#C89D42] group-hover:text-[#071F17] transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#8B9C92] dark:text-[#64796E]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-3 group-hover:text-[#C89D42] dark:group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Footer: Action button */}
                <div className="pt-4 border-t border-[#F0EBE0] dark:border-[#14382A] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#8A6C28] dark:text-[#D4AF37] hover:text-[#0B2E23] dark:hover:text-[#F9F7F2] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => handleInquire(service.title)}
                    className="text-xs font-semibold text-[#6B7D74] dark:text-[#8FA397] hover:text-[#C89D42] dark:hover:text-[#D4AF37]"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Popup */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquire}
      />
    </section>
  );
}
