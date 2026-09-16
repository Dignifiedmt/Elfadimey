import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  id
}) {
  const isCenter = align === "center";

  return (
    <div id={id} className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          light
            ? 'bg-[#C89D42]/20 text-[#D4AF37] border border-[#C89D42]/30'
            : 'bg-[#C89D42]/15 text-[#8F702B] dark:text-[#D4AF37] border border-[#C89D42]/30'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C89D42] animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      
      {title && (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-[#F9F7F2]' : 'text-[#0B2E23] dark:text-[#F8F6F0]'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          light ? 'text-[#C7D4CD]' : 'text-[#506359] dark:text-[#9FB1A8]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
