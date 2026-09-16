import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Markets from './components/Markets';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import WhyElfadimey from './components/WhyElfadimey';
import HowItWorks from './components/HowItWorks';
import TradeOpportunities from './components/TradeOpportunities';
import Insights from './components/Insights';
import InquiryCTA from './components/InquiryCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    // Check localStorage preference or fallback to system preference / light
    const savedTheme = localStorage.getItem('elfadimey_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledOpportunity, setPrefilledOpportunity] = useState('');

  // Handle Theme switching & Persistence
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('elfadimey_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // ScrollSpy to track active section for Navbar indicator
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'services',
      'markets',
      'who-we-work-with',
      'opportunities',
      'insights',
      'contact'
    ];

    const handleScrollSpy = () => {
      const scrollY = window.pageYOffset + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleSelectServiceForInquiry = (serviceTitle) => {
    setPrefilledService(serviceTitle);
  };

  const handleSelectOpportunityForInquiry = (oppTitle) => {
    setPrefilledOpportunity(oppTitle);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] dark:bg-[#071913] text-[#17241F] dark:text-[#F4F7F4] flex flex-col transition-colors duration-300">
      
      {/* High-End Official Preloader Screen */}
      {isLoading && (
        <Loader onFinish={() => setIsLoading(false)} />
      )}

      {/* Sticky Premium Navbar */}
      <Navbar
        activeSection={activeSection}
        currentTheme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />
        <Markets />
        <WhoWeWorkWith onSelectPartnerType={handleSelectServiceForInquiry} />
        <WhyElfadimey />
        <HowItWorks />
        <TradeOpportunities onSelectOpportunity={handleSelectOpportunityForInquiry} />
        <Insights />
        <InquiryCTA />
        <Contact
          prefilledService={prefilledService}
          prefilledOpportunity={prefilledOpportunity}
        />
      </main>

      {/* High-End Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
