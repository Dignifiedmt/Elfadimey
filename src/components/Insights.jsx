import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import ArticleModal from './ArticleModal';
import { insightCategories, insightsArticlesData } from '../data/insights';
import { Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = selectedCategory === "All Categories"
    ? insightsArticlesData
    : insightsArticlesData.filter(art => art.category === selectedCategory);

  return (
    <section id="insights" className="py-20 md:py-28 bg-[#F9F7F2] dark:bg-[#071F17] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Trade Intelligence & Editorial"
          title="Market Insights & Trade Perspectives"
          subtitle="Strategic analyses, regulatory perspectives, and practical frameworks for international business across Middle Eastern and African trade corridors."
        />

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-2 shrink-0 pr-2">
            <Filter className="w-4 h-4 text-[#8A6C28] dark:text-[#D4AF37]" />
            <span className="text-xs font-semibold text-[#6E8076] dark:text-[#9FB1A8] mr-1">Topic:</span>
          </div>
          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#0B2E23] text-[#F9F7F2] dark:bg-[#C89D42] dark:text-[#071F17] shadow-sm'
                  : 'bg-[#FFFFFF] dark:bg-[#0B221A] text-[#55675E] dark:text-[#CCD8D2] hover:bg-[#E5DFC8] dark:hover:bg-[#143B2D] border border-[#E5DFC8] dark:border-[#1E4D3C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-[#FFFFFF] dark:bg-[#0B221A] rounded-2xl p-7 border border-[#E5DFC8] dark:border-[#184232] shadow-sm hover:shadow-xl hover:border-[#C89D42] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F4EFE3] dark:bg-[#0F3529] text-[#8A6C28] dark:text-[#E5BE65]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#788B81] dark:text-[#9FB1A8]">
                    <Clock className="w-3 h-3 text-[#C89D42]" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-3 group-hover:text-[#C89D42] dark:group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed mb-6 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE0] dark:border-[#14382A] flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6C28] dark:text-[#D4AF37] hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Article</span>
                </button>

                <span className="text-[11px] font-mono text-[#8C9E94] dark:text-[#64796E]">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
}
