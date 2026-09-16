import React from 'react';

export default function Logo({ className = "h-12 w-auto", showText = true, textTheme = "light" }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-[#C89D42]/60 shadow-md transition-transform duration-300 group-hover:scale-105">
        <img
          src="/elfadimey-logo.jpg"
          alt="Elfadimey Global Concept Limited Official Logo"
          className={`${className} object-cover rounded-full`}
          loading="eager"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif-brand font-bold tracking-wider text-base md:text-lg leading-tight ${
            textTheme === "dark" ? "text-[#0B2E23] dark:text-[#F8F6F0]" : "text-[#0B2E23] dark:text-[#F8F6F0]"
          }`}>
            ELFADIMEY
          </span>
          <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-medium text-[#C89D42]">
            GLOBAL CONCEPT LIMITED
          </span>
        </div>
      )}
    </div>
  );
}
