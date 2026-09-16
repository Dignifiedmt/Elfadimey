import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { marketsData, tradeCorridors } from '../data/markets';
import { Check, ArrowRight, Globe, Layers, Navigation } from 'lucide-react';
import { IranFlagSvg, NigeriaFlagSvg, AfricaContinentSvg } from './SvgIcons';

function renderMarketVisual(id, isLarge = false) {
  if (id === 'iran') {
    return <IranFlagSvg className={isLarge ? "w-12 h-8" : "w-9 h-6"} />;
  }
  if (id === 'nigeria') {
    return <NigeriaFlagSvg className={isLarge ? "w-12 h-8" : "w-9 h-6"} />;
  }
  return <AfricaContinentSvg className={isLarge ? "w-10 h-10 text-[#C89D42]" : "w-8 h-8 text-[#C89D42]"} />;
}

export default function Markets() {
  const [activeMarketId, setActiveMarketId] = useState('iran');

  const activeMarket = marketsData.find(m => m.id === activeMarketId) || marketsData[0];

  return (
    <section id="markets" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#061711] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background trade lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Strategic Geographic Focus"
          title="Market Focus: Iran • Nigeria • Africa"
          subtitle="Creating stronger commercial links between industrial manufacturers, high-growth buyer markets, and continental trade expansion corridors."
        />

        {/* Dynamic Interactive Corridor Diagram & Tabs */}
        <div className="mb-12 bg-[#F9F7F2] dark:bg-[#071F17] rounded-3xl p-6 sm:p-8 border border-[#E5DFC8] dark:border-[#184232] shadow-sm">
          
          {/* Top Corridor Steps (Iran -> Nigeria -> Africa) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {marketsData.map((market, index) => {
              const isSelected = market.id === activeMarketId;
              return (
                <button
                  key={market.id}
                  onClick={() => setActiveMarketId(market.id)}
                  onMouseEnter={() => setActiveMarketId(market.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#0B2E23] text-[#F9F7F2] border-[#C89D42] shadow-lg scale-[1.02]'
                      : 'bg-[#FFFFFF] dark:bg-[#0B221A] text-[#1F2923] dark:text-[#E2ECE7] border-[#E5DFC8] dark:border-[#1E4D3C] hover:border-[#C89D42]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {renderMarketVisual(market.id, false)}
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-[#C89D42] text-[#071F17]'
                        : 'bg-[#F2EFE9] dark:bg-[#0F3529] text-[#71857B] dark:text-[#9FB1A8]'
                    }`}>
                      Step 0{index + 1}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-1 ${
                    isSelected ? 'text-[#F9F7F2]' : 'text-[#0B2E23] dark:text-[#F8F6F0]'
                  }`}>
                    {market.name}
                  </h3>

                  <p className={`text-xs font-semibold mb-2 ${
                    isSelected ? 'text-[#D4AF37]' : 'text-[#8A6C28] dark:text-[#C89D42]'
                  }`}>
                    {market.role}
                  </p>

                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-[#C7D7CF]' : 'text-[#5A6D63] dark:text-[#9FB1A8]'
                  }`}>
                    {market.headline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Market Deep Dive Display */}
          <div className="bg-[#FFFFFF] dark:bg-[#0B221A] rounded-2xl p-6 sm:p-8 border border-[#E5DFC8] dark:border-[#184232] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-1 rounded-lg bg-[#F2EFE9] dark:bg-[#071913] border border-[#DDD7C5] dark:border-[#1A4535]">
                  {renderMarketVisual(activeMarket.id, true)}
                </div>
                <div>
                  <div className="text-xs uppercase font-mono tracking-widest text-[#8A6C28] dark:text-[#D4AF37]">
                    {activeMarket.strategicRole}
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#0B2E23] dark:text-[#F8F6F0]">
                    {activeMarket.name}
                  </h4>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#3F5247] dark:text-[#BAC9C1] leading-relaxed">
                {activeMarket.description}
              </p>

              <div>
                <h5 className="text-xs uppercase tracking-wider font-bold text-[#6D8075] dark:text-[#8E9F96] mb-3">
                  Key Strategic Focus Areas:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeMarket.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#273B30] dark:text-[#CCD8D1]">
                      <div className="w-4 h-4 rounded-full bg-[#C89D42]/20 text-[#8A6C28] dark:text-[#D4AF37] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Mini Map Indicator */}
            <div className="lg:col-span-5 bg-[#071F17] rounded-2xl p-6 text-[#F9F7F2] border border-[#C89D42]/30 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <div className="flex items-center justify-between border-b border-[#1A4535] pb-3 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                    Corridor Status
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#164335] text-emerald-300 font-medium">
                    Active Flow
                  </span>
                </div>
                <h5 className="text-lg font-bold text-[#F9F7F2] mb-1">
                  {activeMarket.tagline}
                </h5>
                <p className="text-xs text-[#9BB1A5] leading-relaxed">
                  Facilitating trusted commercial agreements, direct sourcing pipelines, and mutual trade growth.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1A4535] flex items-center justify-between">
                <span className="text-xs text-[#80958A]">Inquire regarding {activeMarket.name}:</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] hover:underline"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Trade Corridors Accordion / Summary */}
          <div className="mt-8 pt-6 border-t border-[#E5DFC8] dark:border-[#184232]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6D8075] dark:text-[#8E9F96] mb-4">
              Integrated Trade Pathways
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tradeCorridors.map((corridor, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#0B221A] border border-[#E5DFC8] dark:border-[#1E4D3C]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8A6C28] dark:text-[#D4AF37] mb-1">
                    <span>{corridor.from}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89D42]" />
                    <span>{corridor.to}</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-1">
                    {corridor.label}
                  </h5>
                  <p className="text-xs text-[#52665B] dark:text-[#9FB1A8]">
                    {corridor.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Clarity Note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#71857B] dark:text-[#7F9489] italic">
              * Note: While our core focus bridges Iran, Nigeria, and African markets, Elfadimey actively structures trade engagements across additional global supplier and buyer corridors.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
