import React from 'react';
import { ArrowLeft, Clock, Calendar, Bookmark, Share2 } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
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
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C89D42]/15 text-[#8A6C28] dark:text-[#E5BE65]">
              {article.category}
            </span>
            <span className="text-xs text-[#6F8278] dark:text-[#9FB1A8] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C89D42]" />
              {article.readTime}
            </span>
          </div>

          <h3 id="modal-article-title" className="text-2xl sm:text-3xl font-bold text-[#0B2E23] dark:text-[#F8F6F0] leading-snug">
            {article.title}
          </h3>
        </div>

        {/* Article Body */}
        <div className="prose dark:prose-invert max-w-none text-base text-[#3E5147] dark:text-[#CAD6D0] leading-relaxed space-y-4 whitespace-pre-line mb-8">
          {article.fullContent}
        </div>

        {/* Tags */}
        {article.tags && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5DFC8] dark:border-[#1A3D30] mb-6">
            {article.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-[#F2EFE9] dark:bg-[#0B221A] text-[#55675E] dark:text-[#A3B8AD]">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-end pt-4 border-t border-[#E5DFC8] dark:border-[#1A3D30]">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-[#0B2E23] text-[#F9F7F2] hover:bg-[#164335] dark:bg-[#C89D42] dark:text-[#071F17] dark:hover:bg-[#D4AF37] transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
