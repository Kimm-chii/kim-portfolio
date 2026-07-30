import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Workflow, CheckCircle, ArrowRight } from 'lucide-react';
import { PortfolioData } from '../types';
import { sounds } from '../utils/sound';

interface ProcessSectionProps {
  data: PortfolioData;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ data }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = data.processSteps[activeStepIndex];

  return (
    <section id="process" className="py-24 relative border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-sans">
              04 / EXECUTION PIPELINE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif italic font-light tracking-tight">
              5-Step Work Process
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-60 max-w-md leading-relaxed">
            A battle-tested workflow designed for speed, clarity, and zero surprise delays. From initial alignment to live production.
          </p>
        </div>

        {/* Horizontal Timeline Connector (Desktop & Tablet) */}
        <div className="hidden md:grid grid-cols-5 gap-3 mb-12 relative">
          {data.processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => {
                  sounds.playClick();
                  setActiveStepIndex(idx);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`p-4 text-left transition-all border relative flex flex-col justify-between h-32 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white border-white'
                    : 'bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-serif italic font-light">
                    {step.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 bg-black dark:bg-black light:bg-white" />}
                </div>

                <div>
                  <h4 className="text-xs font-serif italic line-clamp-1">
                    {step.title}
                  </h4>
                  <p className="text-[9px] font-mono uppercase tracking-wider opacity-60 line-clamp-1">{step.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <motion.div
          key={activeStep.number}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-10 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 block">
              PHASE {activeStep.number} OF 05
            </span>

            <h3 className="text-3xl sm:text-4xl font-serif italic">
              {activeStep.title}
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-60">{activeStep.subtitle}</p>

            <p className="text-xs opacity-70 leading-relaxed font-sans pt-2">
              {activeStep.description}
            </p>

            <div className="pt-4 flex items-center gap-3">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => {
                  sounds.playClick();
                  setActiveStepIndex((prev) => Math.max(0, prev - 1));
                }}
                className="px-5 py-2.5 border border-white/10 text-[10px] font-mono uppercase tracking-widest opacity-60 hover:opacity-100 disabled:opacity-20 cursor-pointer"
              >
                &larr; Prev Phase
              </button>

              <button
                disabled={activeStepIndex === data.processSteps.length - 1}
                onClick={() => {
                  sounds.playClick();
                  setActiveStepIndex((prev) => Math.min(data.processSteps.length - 1, prev + 1));
                }}
                className="px-5 py-2.5 bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-85 flex items-center gap-2 disabled:opacity-20 cursor-pointer"
              >
                <span>Next Phase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 border border-white/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F8F8F6] space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
              Deliverables & Artifacts
            </h4>
            <div className="space-y-2">
              {activeStep.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 border border-white/10 text-xs font-sans opacity-80">
                  <CheckCircle className="w-3.5 h-3.5 opacity-60 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
