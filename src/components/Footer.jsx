import React from 'react';
import Logo from './Logo';
import { ExternalLink, Mail } from 'lucide-react';
import {
  XTwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon
} from './SvgIcons';

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Market Focus", href: "#markets" },
    { label: "Who We Work With", href: "#who-we-work-with" },
    { label: "Why Elfadimey", href: "#why-elfadimey" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact Desk", href: "#contact" }
  ];

  const serviceLinks = [
    { label: "International Sourcing", href: "#services" },
    { label: "Procurement Advisory", href: "#services" },
    { label: "Import & Export", href: "#services" },
    { label: "Market Development", href: "#services" },
    { label: "Trade Facilitation", href: "#services" },
    { label: "Business Connections", href: "#services" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
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
    <footer className="bg-gradient-to-b from-[#0F382B] via-[#071F17] to-[#03130E] text-[#F9F7F2] border-t border-[#C89D42]/40 relative overflow-hidden transition-colors">
      {/* Top subtle golden shimmer accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C89D42] to-transparent opacity-85"></div>
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#C89D42]/15 via-[#25D366]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tr from-[#0B2E23]/40 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1A3D30]">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="inline-block"
            >
              <Logo className="h-12 w-auto" textTheme="dark" />
            </a>

            <p className="text-xs sm:text-sm text-[#C89D42] font-serif-brand italic font-medium">
              “Building Sustainable Trade Across Borders”
            </p>

            <p className="text-xs sm:text-sm text-[#A2B5AB] leading-relaxed max-w-sm">
              International trade and market development company focused on connecting businesses, suppliers, buyers, and commercial opportunities across Iran, Nigeria, and African markets.
            </p>

            {/* Guiding Belief Quote Box */}
            <div className="p-3.5 rounded-xl bg-[#0B221A] border border-[#1A4535] max-w-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block mb-1">
                Company Belief:
              </span>
              <p className="text-xs text-[#CBD8D1] italic">
                “At Elfadimey, we believe that the right connection can create a lasting business opportunity.”
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#9BB1A5] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#9BB1A5] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Channels Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] mb-4">
              Official Channels
            </h4>

            {/* Circular Icons Channel List: Circular icons with name on desktop, without name on mobile */}
            <div className="flex flex-wrap md:flex-col gap-2.5 sm:gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/19SQYsLXSc/"
                target="_blank"
                rel="noopener noreferrer"
                title="Elfadimey Global Concept Ltd on Facebook"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#CBD8D1] hover:text-[#D4AF37] transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-[#1877F2]/15 text-[#1877F2] dark:text-[#60A5FA] border border-[#1877F2]/30 group-hover:border-[#1877F2] group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-200">
                  <FacebookIcon className="w-4 h-4" />
                </span>
                <span className="hidden md:inline">Facebook</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348100788978"
                target="_blank"
                rel="noopener noreferrer"
                title="Direct WhatsApp: +234 810 078 8978"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#CBD8D1] hover:text-[#52E38B] transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-[#25D366]/15 text-[#25D366] dark:text-[#52E38B] border border-[#25D366]/30 group-hover:border-[#25D366] group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-200">
                  <WhatsAppIcon className="w-4 h-4" />
                </span>
                <span className="hidden md:inline">WhatsApp (+234 810 078 8978)</span>
              </a>

              {/* Email */}
              <a
                href="mailto:elfadimey@gmail.com"
                title="Official Email: elfadimey@gmail.com"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#CBD8D1] hover:text-[#D4AF37] transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-[#C89D42]/15 text-[#C89D42] dark:text-[#D4AF37] border border-[#C89D42]/30 group-hover:border-[#C89D42] group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-200">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="hidden md:inline">Email Desk</span>
              </a>

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on X"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#CBD8D1] hover:text-white transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-white/10 text-white border border-white/20 group-hover:border-white group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-200">
                  <XTwitterIcon className="w-3.5 h-3.5" />
                </span>
                <span className="hidden md:inline">X (Twitter)</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#CBD8D1] hover:text-[#E1306C] transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-[#E1306C]/15 text-[#E1306C] border border-[#E1306C]/30 group-hover:border-[#E1306C] group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-200">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </span>
                <span className="hidden md:inline">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#CBD8D1] hover:text-[#38BDF8] transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-[#0A66C2]/15 text-[#0A66C2] dark:text-[#38BDF8] border border-[#0A66C2]/30 group-hover:border-[#0A66C2] group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-200">
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </span>
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </div>

            <div className="pt-5 text-[11px] text-[#80958A] flex items-center justify-between border-t border-[#1A3D30] mt-4">
              <span>Bilateral Corridors</span>
              <span className="text-[#C89D42]">Iran • Nigeria • Africa</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7F9489]">
          <p>
            © 2026 Elfadimey Global Concept Limited. All rights reserved.
          </p>

          <p className="text-[11px]">
            Building Sustainable Trade Across Borders
          </p>
        </div>

      </div>
    </footer>
  );
}
