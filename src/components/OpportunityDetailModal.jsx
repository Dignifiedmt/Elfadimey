import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, MapPin, Clock, FileCheck } from 'lucide-react';

export default function OpportunityDetailModal({ opportunity, onClose, onInquire }) {
  if (!opportunity) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-opp-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFFFF] dark:bg-[#071F17] rounded-2xl shadow-2xl border border-[#C89D42]/40 overflow-hidden text-[#1F2923] dark:text-[#F8F6F0] p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Back to Home"
          title="Back to Home"
          className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#6B7D74] dark:text-[#A3B8AD] bg-[#F2EFE9] dark:bg-[#0B221A] hover:bg-[#E5DFC8] dark:hover:bg-[#164335] hover:text-[#0B2E23] dark:hover:text-[#F8F6F0] transition-colors border border-[#E5DFC8] dark:border-[#1E4D3C]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C89D42]/15 text-[#8A6C28] dark:text-[#E5BE65]">
              {opportunity.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              {opportunity.status}
            </span>
          </div>

          <h3 id="modal-opp-title" className="text-2xl sm:text-3xl font-bold text-[#0B2E23] dark:text-[#F8F6F0]">
            {opportunity.title}
          </h3>
          
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#5C6E64] dark:text-[#9FB1A8]">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#C89D42]" />
              Corridor: {opportunity.region}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[#C89D42]" />
              {opportunity.timeline}
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-[#F9F7F2] dark:bg-[#0B221A] border border-[#E5DFC8] dark:border-[#194031]">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B2E23] dark:text-[#D4AF37] mb-2">
              Scope & Commercial Framework
            </h4>
            <p className="text-sm text-[#3E5147] dark:text-[#BAC9C1] leading-relaxed">
              {opportunity.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F9F7F2] dark:bg-[#0B221A] border border-[#E5DFC8] dark:border-[#194031]">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#0B2E23] dark:text-[#D4AF37] mb-2">
              Counterparty Requirements & Compliance
            </h4>
            <p className="text-sm text-[#3E5147] dark:text-[#BAC9C1] leading-relaxed">
              {opportunity.requirements}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E5DFC8] dark:border-[#1A3D30]">
          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[#D5CDC0] dark:border-[#204938] text-[#55675E] dark:text-[#B4C5BC] hover:bg-[#F2EFE9] dark:hover:bg-[#0F3529] hover:text-[#0B2E23] dark:hover:text-[#F8F6F0] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <button
            onClick={() => {
              onClose();
              if (onInquire) onInquire(opportunity.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-md transition-all"
          >
            <span>Express Commercial Interest</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
