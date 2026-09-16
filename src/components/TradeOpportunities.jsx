import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import OpportunityDetailModal from './OpportunityDetailModal';
import { opportunityCategories, tradeOpportunitiesData } from '../data/opportunities';
import { ArrowRight, MapPin, Layers, Briefcase, Filter } from 'lucide-react';

export default function TradeOpportunities({ onSelectOpportunity }) {
  const [selectedCategory, setSelectedCategory] = useState("All Opportunities");
  const [activeModalOpp, setActiveModalOpp] = useState(null);

  const filteredOpportunities = selectedCategory === "All Opportunities"
    ? tradeOpportunitiesData
    : tradeOpportunitiesData.filter(opp => opp.category === selectedCategory);

  const handleInquire = (title) => {
    if (onSelectOpportunity) {
      onSelectOpportunity(title);
    }
    const elem = document.querySelector('#contact');
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
    <section id="opportunities" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#061711] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="B2B Deal Pipelines"
          title="Trade & Sourcing Opportunities"
          subtitle="Explore structured commercial channels and collaborative sourcing pipelines. Connect with verified counterparties across our target regional corridors."
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-2 shrink-0 pr-2">
            <Filter className="w-4 h-4 text-[#8A6C28] dark:text-[#D4AF37]" />
            <span className="text-xs font-semibold text-[#6E8076] dark:text-[#9FB1A8] mr-1">Filter:</span>
          </div>
          {opportunityCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#0B2E23] text-[#F9F7F2] dark:bg-[#C89D42] dark:text-[#071F17] shadow-sm'
                  : 'bg-[#F2EFE9] dark:bg-[#0B221A] text-[#55675E] dark:text-[#CCD8D2] hover:bg-[#E5DFC8] dark:hover:bg-[#143B2D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="bg-[#F9F7F2] dark:bg-[#0B221A] rounded-2xl p-7 border border-[#E5DFC8] dark:border-[#184232] shadow-sm hover:shadow-xl hover:border-[#C89D42] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FFFFFF] dark:bg-[#0F3529] text-[#8A6C28] dark:text-[#E5BE65] border border-[#E0D8C3] dark:border-[#1D4A39]">
                    {opp.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {opp.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-2.5 leading-snug">
                  {opp.title}
                </h3>

                {/* Corridor */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#617469] dark:text-[#A6BCB1] mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#C89D42]" />
                  <span>{opp.region}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed mb-6 line-clamp-3">
                  {opp.description}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#E8E2D2] dark:border-[#143B2D] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalOpp(opp)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6C28] dark:text-[#D4AF37] hover:underline"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleInquire(opp.title)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0B2E23] text-[#F9F7F2] dark:bg-[#C89D42] dark:text-[#071F17] hover:opacity-90 transition-opacity"
                >
                  Express Interest
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Custom Pipelines */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F9F7F2] dark:bg-[#0B221A] border border-[#E5DFC8] dark:border-[#194031]">
          <p className="text-sm text-[#54675D] dark:text-[#A3B8AD]">
            Have a custom commodity or manufacturing sourcing requirement not listed above?{' '}
            <a href="#contact" className="font-bold text-[#8A6C28] dark:text-[#D4AF37] hover:underline">
              Submit your bespoke trade request directly &rarr;
            </a>
          </p>
        </div>

      </div>

      <OpportunityDetailModal
        opportunity={activeModalOpp}
        onClose={() => setActiveModalOpp(null)}
        onInquire={handleInquire}
      />
    </section>
  );
}
