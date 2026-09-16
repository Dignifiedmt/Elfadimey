import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onInquire }) {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFFFF] dark:bg-[#071F17] rounded-2xl shadow-2xl border border-[#C89D42]/40 overflow-hidden text-[#1F2923] dark:text-[#F8F6F0] p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Back to Home Button */}
        <button
          onClick={onClose}
          aria-label="Back to Home"
          title="Back to Home"
          className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#6B7D74] dark:text-[#A3B8AD] bg-[#F2EFE9] dark:bg-[#0B221A] hover:bg-[#E5DFC8] dark:hover:bg-[#164335] hover:text-[#0B2E23] dark:hover:text-[#F8F6F0] transition-colors border border-[#E5DFC8] dark:border-[#1E4D3C]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C89D42]/15 text-[#8A6C28] dark:text-[#E5BE65] mb-3">
            Core Service
          </div>
          <h3 id="modal-service-title" className="text-2xl sm:text-3xl font-bold text-[#0B2E23] dark:text-[#F8F6F0]">
            {service.title}
          </h3>
          <p className="mt-2 text-base text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Core Deliverables List */}
        <div className="mb-6 bg-[#F9F7F2] dark:bg-[#0B221A] p-5 rounded-xl border border-[#E5DFC8] dark:border-[#194031]">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B2E23] dark:text-[#D4AF37] mb-3">
            Key Scope & Deliverables
          </h4>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#3E5147] dark:text-[#CCD8D2]">
                <CheckCircle2 className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sector Applications */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7D74] dark:text-[#9FB1A8] mb-2.5">
            Primary Sectors & Applications
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.sectors.map((sector, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-[#EFECE3] dark:bg-[#0F3529] text-[#0B2E23] dark:text-[#E2ECE7] border border-[#DDD6C0] dark:border-[#1E4D3C]"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
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
              if (onInquire) onInquire(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-md transition-all"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
