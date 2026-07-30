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
    <section id="about" className="py-20 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-mono">
            02 / ABOUT
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight">
            About {data.name} {data.japaneseName}
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/10 pb-4">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-white text-black border-white'
                    : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            {/* Bio Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight leading-snug">
                "{data.bio.intro}"
              </h3>
              <div className="space-y-4 text-xs sm:text-sm opacity-70 leading-relaxed font-sans">
                {data.bio.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
                <button
                  onClick={() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-85 transition-opacity flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Philosophies Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-1 block">
                CORE PHILOSOPHIES
              </span>
              {data.bio.philosophies.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/10 bg-[#0D0D0D] space-y-2 hover:border-white/30 transition-colors shadow-sm"
                >
                  <h5 className="text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></span>
                    {item.title}
                  </h5>
                  <p className="text-xs opacity-60 leading-relaxed font-sans">{item.desc}</p>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {data.skillCategories.map((cat, catIdx) => (
              <div key={catIdx} className="p-6 rounded-2xl border border-white/10 bg-[#0D0D0D] space-y-6">
                <h4 className="text-xs uppercase tracking-[0.2em] font-mono border-b border-white/10 pb-3 opacity-80">
                  {cat.category}
                </h4>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="text-xs">
                        <span className="font-medium uppercase tracking-wider block break-words">{skill.name}</span>
                      </div>

                      {skill.description && (
                        <p className="text-[10px] opacity-70 font-mono tracking-wider leading-relaxed break-words">{skill.description}</p>
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
