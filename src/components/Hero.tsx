import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MapPin, Sparkles, Code2, Terminal, Compass } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const handleScrollTo = (id: string) => {
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8 sm:space-y-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 text-[10px] uppercase tracking-[0.2em] font-mono opacity-80"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>{data.availability.text}</span>
        </motion.div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Title & Description */}
          <div className="lg:col-span-7 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-[11px] uppercase tracking-[0.25em] font-mono opacity-50 block mb-3">
                Digital Corner & Personal Space
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-semibold tracking-tight leading-[1.2]">
                {data.headline}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm leading-relaxed opacity-70 max-w-lg font-sans"
            >
              {data.tagline}
            </motion.p>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 text-[10px] uppercase tracking-wider font-mono opacity-70"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                <Compass className="w-3 h-3 opacity-60 text-emerald-400" />
                {data.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                <Sparkles className="w-3 h-3 opacity-60 text-purple-400" />
                React & TypeScript
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-1"
            >
              <button
                onClick={() => handleScrollTo('#projects')}
                className="px-6 py-2.5 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-85 transition-opacity flex items-center gap-2.5 cursor-pointer group shadow-lg"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Hero Personal Space & Digital Garden Card */}
          <div className="lg:col-span-5 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto lg:max-w-none"
            >
              <div className="relative border border-white/15 rounded-2xl bg-[#0D0D0D] p-5 sm:p-6 shadow-2xl space-y-5 overflow-hidden">
                {/* Decorative Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-80 text-emerald-300">
                      Digital Garden
                    </span>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest opacity-40">
                    PERSONAL CORNER
                  </span>
                </div>

                {/* Name & Role */}
                <div className="space-y-0.5">
                  <h3 className="text-xl sm:text-2xl font-sans font-medium tracking-tight">
                    {data.name} {data.japaneseName}
                  </h3>
                  <p className="text-[11px] font-mono opacity-50 uppercase tracking-wider">
                    {data.title}
                  </p>
                </div>

                {/* Minimal Garden Note Quote */}
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono opacity-60 uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>Focus & Mindset</span>
                  </div>
                  <p className="text-xs opacity-75 leading-relaxed font-sans">
                    "Exploring responsive web experiences through UI design and technologies like React, Vite, TypeScript, and Tailwind CSS."
                  </p>
                </div>

                {/* Stack Tags */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-widest opacity-40 block">
                    APPROACH & TOOLS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Web Design', 'UI / Interface Design', 'Responsive Web Experiences', 'Landing Page Design', 'React + TypeScript', 'Tailwind CSS'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-wider opacity-70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location & Contact Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 opacity-60 text-[10px] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{data.location}</span>
                  </div>
                  <a
                    href={data.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 text-[10px] uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                  >
                    <Code2 className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

