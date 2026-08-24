import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Code2, ExternalLink } from 'lucide-react';
import { PortfolioData } from '../types';

interface AboutSectionProps {
  data: PortfolioData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills'>('story');

  return (
    <section id="about" className="scroll-mt-10 lg:scroll-mt-8 py-12 sm:py-16 md:py-20 lg:py-24 relative border-t border-black/10 dark:border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase opacity-70 text-[#f99db5] mb-2 block">
            02 // Information
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-[#1a1a1a] dark:text-[#faf7f5]">
            About {data.name} <span className="text-[#f99db5]">{data.japaneseName}</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10 border-b border-black/10 dark:border-white/10 pb-4">
          {[
            { id: 'story', label: 'Story & Philosophy', icon: User },
            { id: 'skills', label: 'Tech Stack & Skills', icon: Code2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'story' | 'skills')}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border shadow-sm active:scale-95 ${
                  isActive
                    ? 'bg-[#1a1a1a] text-[#faf7f5] border-[#1a1a1a] dark:bg-[#faf7f5] dark:text-[#1a1a1a] dark:border-[#faf7f5] font-semibold'
                    : 'bg-black/5 border-black/10 text-[#1a1a1a] dark:bg-white/10 dark:border-white/15 dark:text-[#faf7f5] opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Story & Philosophy */}
        {activeTab === 'story' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
          >
            {/* Bio Narrative */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-semibold text-[#1a1a1a] dark:text-[#faf7f5] tracking-tight leading-snug">
                "{data.bio.intro}"
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm md:text-base opacity-70 leading-relaxed font-sans text-[#1a1a1a] dark:text-[#faf7f5]">
                {data.bio.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-black/10 dark:border-white/10">
                <button
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1a1a1a] text-[#faf7f5] dark:bg-[#faf7f5] dark:text-[#1a1a1a] rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Get in Touch</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Philosophies Cards Grid */}
            <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] opacity-50 block text-[#1a1a1a] dark:text-[#faf7f5]">
                Core Philosophies
              </span>
              {data.bio.philosophies.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-1.5 hover:border-black/25 dark:hover:border-white/25 transition-colors rounded-lg"
                >
                  <h5 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 text-[#1a1a1a] dark:text-[#faf7f5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f99db5]"></span>
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-sm opacity-70 leading-relaxed font-sans text-[#1a1a1a] dark:text-[#faf7f5]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 2: Tech Stack & Skills */}
        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {data.skillCategories.map((cat, catIdx) => (
              <div key={catIdx} className="p-4 sm:p-6 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-4 rounded-lg">
                <h4 className="text-[11px] sm:text-xs uppercase tracking-wider font-mono font-semibold border-b border-black/10 dark:border-white/10 pb-2.5 opacity-90 text-[#f99db5]">
                  {cat.category}
                </h4>

                <div className="space-y-3.5 text-[#1a1a1a] dark:text-[#faf7f5]">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="text-xs sm:text-sm font-sans">
                        <span className="font-semibold uppercase tracking-wider block break-words">{skill.name}</span>
                      </div>

                      {skill.description && (
                        <p className="text-[10px] sm:text-[11px] opacity-70 font-mono tracking-wider leading-relaxed break-words">{skill.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
