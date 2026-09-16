import React, { useEffect, useState } from 'react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress increment up to 100% over ~1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate near the end
        const increment = prev > 75 ? 8 : Math.floor(Math.random() * 9) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 85);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 200);

      const finishTimer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 700);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onFinish]);

  return (
    <div
      id="site-preloader"
      aria-label="Loading Elfadimey Global Concept Limited"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071F17] text-[#F9F7F2] transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background ambient gold aura */}
      <div className="absolute w-96 h-96 rounded-full bg-[#C89D42]/10 blur-3xl pointer-events-none animate-pulse"></div>

      <div className="relative flex flex-col items-center text-center px-6 max-w-md z-10">
        {/* Logo Container with Orbiting Gold Rings */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer Rotating Dash Ring */}
          <div className="absolute w-40 h-40 sm:w-44 sm:h-44 rounded-full border border-dashed border-[#C89D42]/40 animate-[spin_10s_linear_infinite]"></div>

          {/* Inner Counter-Rotating Gradient Ring */}
          <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border-t-2 border-r-2 border-[#D4AF37] border-b-transparent border-l-transparent animate-[spin_3s_linear_infinite]"></div>

          {/* Centered Official Logo */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 bg-[#F8F6F0] shadow-2xl ring-4 ring-[#C89D42]/80">
            <img
              src="/elfadimey-logo.jpg"
              alt="Elfadimey Global Concept Limited"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Company Title */}
        <h1 className="font-serif-brand text-2xl sm:text-3xl font-bold tracking-widest text-[#F9F7F2] leading-tight mb-2">
          ELFADIMEY
        </h1>
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#C89D42] mb-3">
          GLOBAL CONCEPT LIMITED
        </p>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-[#B4C2BA] italic mb-8 max-w-xs font-serif-brand">
          “Building Sustainable Trade Across Borders”
        </p>

        {/* Animated Progress Bar */}
        <div className="w-56 sm:w-64 bg-[#0F3529] rounded-full h-1.5 p-0.5 overflow-hidden border border-[#C89D42]/30 mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#8F702B] via-[#C89D42] to-[#E5C158] rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between w-56 sm:w-64 text-[11px] text-[#86998F] font-mono">
          <span>Connecting Corridors</span>
          <span className="text-[#C89D42] font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
