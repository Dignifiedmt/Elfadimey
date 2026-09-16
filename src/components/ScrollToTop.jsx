import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll));
      if (totalScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  const circumference = 30 * 2 * Math.PI;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="relative w-12 h-12 rounded-full bg-[#0B2E23] text-[#F9F7F2] shadow-xl hover:bg-[#164335] flex items-center justify-center transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-[#C89D42]"
      >
        {/* Circular Progress Ring */}
        <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 70 70">
          <circle
            cx="35"
            cy="35"
            r="30"
            className="stroke-[#1C4535]"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            cx="35"
            cy="35"
            r="30"
            className="stroke-[#C89D42] transition-all duration-100"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        <ArrowUp className="w-5 h-5 text-[#C89D42] group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
