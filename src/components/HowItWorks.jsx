import React from 'react';
import SectionHeading from './SectionHeading';
import { howItWorksSteps } from '../data/partners';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F9F7F2] dark:bg-[#071F17] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Engagement Process"
          title="How It Works"
          subtitle="A clear, structured 4-step methodology designed to take your international trade or procurement requirement from initial scoping to long-term commercial execution."
        />

        {/* 4 Steps Container */}
        <div className="relative mt-8">
          
          {/* Desktop Connecting Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-[#C89D42]/30 via-[#C89D42] to-[#C89D42]/30 -translate-y-8 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#FFFFFF] dark:bg-[#0B221A] rounded-2xl p-7 border border-[#E5DFC8] dark:border-[#184232] shadow-sm hover:shadow-xl hover:border-[#C89D42] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-[#0B2E23] dark:bg-[#0F3529] text-[#D4AF37] font-serif-brand font-bold text-lg flex items-center justify-center border border-[#C89D42]/60 shadow-md">
                      {step.step}
                    </span>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#8A6C28] dark:text-[#C89D42]">
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE0] dark:border-[#14382A]">
                  <p className="text-xs text-[#71857B] dark:text-[#8E9F96] italic">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action Trigger */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-lg shadow-[#C89D42]/20 transition-all group"
          >
            <span>Initiate Step 01 — Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
