import React from 'react';

/**
 * Clean, standard SVG Vector Icons for Elfadimey Global Concept Limited
 * Replacing all emojis with high-contrast, scalable SVG icons.
 */

export function XTwitterIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74 0 .96.78 1.74 1.74 1.74s1.74-.78 1.74-1.74c0-.96-.78-1.74-1.74-1.74z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.39 1.3-1.93 1.38-.5.08-1.14.11-3.69-.95-3.26-1.35-5.35-4.66-5.51-4.88-.16-.22-1.33-1.77-1.33-3.37 0-1.6 1.04-2.39 1.41-2.71.37-.32.81-.4 1.08-.4.27 0 .54 0 .78.02.25.01.59-.1 1.04.81.47 1.13.79 1.94.86 2.08.07.14.12.31.02.5-.1.19-.15.3-.3.47-.15.17-.32.38-.46.51-.15.15-.31.31-.13.62.18.31.8 1.31 1.72 2.13 1.18 1.05 2.17 1.37 2.48 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.15 1.02.32.16.53.24.61.37.08.13.08.76-.16 1.44z" />
    </svg>
  );
}

/**
 * Crisp Vector Flags and Corridor Emblems (Replacing raw emojis)
 */

export function IranFlagSvg({ className = "w-6 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 36 24"
      className={`rounded shadow-xs border border-black/10 shrink-0 ${className}`}
      aria-label="Flag of Iran"
      {...props}
    >
      {/* Green band */}
      <rect width="36" height="8" fill="#239f40" />
      {/* White band */}
      <rect y="8" width="36" height="8" fill="#ffffff" />
      {/* Red band */}
      <rect y="16" width="36" height="8" fill="#da0000" />
      {/* Stylized Emblem in Center */}
      <circle cx="18" cy="12" r="2.6" fill="#da0000" />
      <path
        d="M18 9.5c.8 0 1.5.8 1.5 2.5s-.7 2.5-1.5 2.5-1.5-.8-1.5-2.5.7-2.5 1.5-2.5z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function NigeriaFlagSvg({ className = "w-6 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 36 24"
      className={`rounded shadow-xs border border-black/10 shrink-0 ${className}`}
      aria-label="Flag of Nigeria"
      {...props}
    >
      {/* Green */}
      <rect width="12" height="24" fill="#008751" />
      {/* White */}
      <rect x="12" width="12" height="24" fill="#ffffff" />
      {/* Green */}
      <rect x="24" width="12" height="24" fill="#008751" />
    </svg>
  );
}

export function AfricaContinentSvg({ className = "w-6 h-6", ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-label="African continent emblem"
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#0B2E23" />
      {/* Stylized Africa Continental landmass */}
      <path
        d="M17.5 7.5c1.2.3 2.8 1.1 3.2 2 .5 1 .2 2.2-.4 2.8-.8.8-1.2 1.5-.8 2.2.4.7 1.5 1.2 2.2 2 .8.9 1 2 .2 3-.8 1-2.2 1.8-2.6 2.8-.5 1.2-.2 2.5-.8 3.5-.6 1-1.8 2.2-2.5 2.2-.5 0-.8-.8-.8-1.5 0-.8.4-1.8.2-2.5-.2-.8-1.2-1.5-1.5-2.2-.4-.9-.2-2-.8-2.8-.6-.8-1.8-1.2-2.2-2.2-.4-1-.1-2.2-.5-3.2-.4-1-1.2-1.8-1-2.8.2-1 1.2-1.8 2.2-2.2 1-.4 2-.2 3-.5 1-.3 1.8-1 2.9-.8z"
        fill="#C89D42"
      />
    </svg>
  );
}
