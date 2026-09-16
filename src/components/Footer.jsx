import React from 'react';
import Logo from './Logo';
import { ExternalLink, Phone } from 'lucide-react';

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
    <footer className="bg-[#071F17] text-[#F9F7F2] border-t border-[#1C4535] relative overflow-hidden transition-colors">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C89D42]/5 rounded-full blur-3xl pointer-events-none"></div>

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

          {/* Connect & Social Media Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4AF37] mb-4">
              Official Channels
            </h4>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348100788978"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-semibold text-[#F9F7F2] transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#25D366] text-white flex items-center justify-center font-bold text-xs">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </span>
                <span>WhatsApp: <strong className="font-mono text-[#52E38B]">08100788978</strong></span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#52E38B]" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19SQYsLXSc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-[#0F3529] hover:bg-[#164335] text-xs font-semibold text-[#F9F7F2] border border-[#235846] transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs">
                  f
                </span>
                <span>Official Facebook</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#C89D42]" />
            </a>

            {/* Social grid: X, Instagram, LinkedIn */}
            <div className="grid grid-cols-3 gap-2 pt-1 text-xs">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0F3529] hover:bg-[#164335] border border-[#235846] text-center font-bold text-white transition-colors"
                title="x.com"
              >
                𝕏 x.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0F3529] hover:bg-[#164335] border border-[#235846] text-center font-bold text-[#E5BE65] transition-colors"
                title="instagram.com"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0F3529] hover:bg-[#164335] border border-[#235846] text-center font-bold text-[#38BDF8] transition-colors"
                title="linkedin.com"
              >
                LinkedIn
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#80958A]">
              Iran • Nigeria • African Markets
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
