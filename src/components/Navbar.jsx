import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ activeSection, currentTheme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Markets", href: "#markets" },
    { label: "Who We Work With", href: "#who-we-work-with" },
    { label: "Why Elfadimey", href: "#why-elfadimey" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F7F2]/95 dark:bg-[#071F17]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E5DFC8]/80 dark:border-[#1A3D30]'
          : 'bg-[#F9F7F2]/80 dark:bg-[#071F17]/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C89D42] rounded-lg p-1"
            aria-label="Elfadimey Global Concept Limited Home"
          >
            <Logo className="h-10 sm:h-12 w-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2" aria-label="Main menu">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 relative ${
                    isActive
                      ? 'text-[#C89D42] font-semibold'
                      : 'text-[#23352C] dark:text-[#E2ECE7] hover:text-[#C89D42] dark:hover:text-[#D4AF37]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C89D42] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-full text-[#0B2E23] dark:text-[#E2ECE7] hover:bg-[#EAE4D3] dark:hover:bg-[#0F3529] border border-[#E0D8C3] dark:border-[#1E4D3C] transition-all duration-200"
              title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Moon className="w-4 h-4 text-[#0B2E23]" />
              )}
            </button>

            {/* Quick Inquiry CTA */}
            <a
              id="navbar-inquiry-cta"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>Make an Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full text-[#0B2E23] dark:text-[#E2ECE7] hover:bg-[#EAE4D3] dark:hover:bg-[#0F3529] border border-[#E0D8C3] dark:border-[#1E4D3C]"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Moon className="w-4 h-4 text-[#0B2E23]" />
              )}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#0B2E23] dark:text-[#F9F7F2] hover:bg-[#EAE4D3] dark:hover:bg-[#0F3529] focus:outline-none focus:ring-2 focus:ring-[#C89D42]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C89D42]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="xl:hidden bg-[#F9F7F2] dark:bg-[#071F17] border-b border-[#E5DFC8] dark:border-[#1A3D30] shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#C89D42]/15 text-[#C89D42] font-semibold border-l-4 border-[#C89D42]'
                      : 'text-[#23352C] dark:text-[#E2ECE7] hover:bg-[#EAE4D3]/50 dark:hover:bg-[#0F3529]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E5DFC8] dark:border-[#1A3D30]">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-semibold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-md"
            >
              <span>Make an Inquiry</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
