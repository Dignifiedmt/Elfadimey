import React from 'react';
import { ArrowRight, MessageSquare, Handshake, Globe2 } from 'lucide-react';

export default function InquiryCTA() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
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
    <section className="py-16 md:py-24 bg-[#FFFFFF] dark:bg-[#061711] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B2E23] via-[#0D382B] to-[#071F17] p-8 sm:p-12 lg:p-16 text-[#F9F7F2] border border-[#C89D42]/40 shadow-2xl overflow-hidden">
          
          {/* Background Vector Map & Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C89D42]/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#164335]/30 blur-3xl pointer-events-none"></div>

          {/* SVG Geometric Subtle Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-mesh" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C89D42" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-mesh)" />
          </svg>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C89D42]/20 text-[#D4AF37] border border-[#C89D42]/30 mb-6">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Cross-Border Commercial Bridge</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-extrabold tracking-tight leading-tight mb-4">
              Have a sourcing requirement or a business opportunity?
            </h2>

            <p className="text-base sm:text-xl text-[#C5D6CD] font-normal leading-relaxed mb-8 max-w-xl mx-auto">
              “Let’s explore the right connection for your business.”
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-xl shadow-[#C89D42]/25 transition-all duration-200 group"
              >
                <span>Make an Inquiry</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://www.facebook.com/share/19SQYsLXSc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold border border-[#C89D42]/60 text-[#F9F7F2] hover:bg-[#C89D42]/15 transition-all"
              >
                <Handshake className="w-5 h-5 text-[#C89D42]" />
                <span>Visit Official Page</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-[#8FA397] font-serif-brand italic">
              “At Elfadimey, we believe that the right connection can create a lasting business opportunity.”
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
