import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Check, ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
  onShowToast?: (title: string, description?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [phTime, setPhTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now);
        setPhTime(formatted);
      } catch {
        setPhTime('20:41');
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    const email = data.contact.email || 'amazonakimjared@gmail.com';
    navigator.clipboard.writeText(email);
    setCopied(true);
    if (onShowToast) {
      onShowToast('Email copied to clipboard!', email);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedinUrl = data.contact.linkedin || 'https://www.linkedin.com/in/kjared';
  const githubUrl = data.contact.github || 'https://github.com/Kimm-chii';

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-6 sm:pt-36 sm:pb-8 md:pt-40 md:pb-10 lg:pt-44 lg:pb-12 flex flex-col justify-between overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full z-10 flex flex-col justify-between flex-grow">
        
        {/* Main Hero Header Block */}
        <div className="flex flex-col gap-3.5 sm:gap-4 md:gap-5 w-full pt-2">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase opacity-70 text-[#1a1a1a] dark:text-[#faf7f5]">
              {data.availability.status}
            </span>
          </motion.div>

          {/* Title: Kim キム ©2026 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-[#1a1a1a] dark:text-[#faf7f5] flex items-center flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1">
              <span>{data.name || 'Kim'}</span>
              <span className="text-[#f99db5]">{data.japaneseName || 'キム'}</span>
              <span className="text-xs sm:text-sm md:text-base font-normal opacity-50 font-mono tracking-widest align-middle">
                ©2026
              </span>
            </h1>
          </motion.div>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg opacity-70 max-w-3xl font-sans leading-relaxed text-[#1a1a1a] dark:text-[#faf7f5]"
          >
            <span className="font-semibold text-[#1a1a1a] dark:text-[#faf7f5]">Web Designer &amp; Frontend Developer</span> specializing in responsive, AI-assisted web experiences. A designer by trade, an analyst by instinct. Built on curiosity and good snacks.
          </motion.p>

          {/* 3 Flat Action Buttons (Email, LinkedIn, GitHub) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {/* 1. Flat Email Button */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 active:bg-black/15 dark:active:bg-white/25 border border-black/15 dark:border-white/15 rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#1a1a1a] dark:text-[#faf7f5] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm active:scale-95"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 opacity-70" />
                  <span>Email</span>
                </>
              )}
            </button>

            {/* 2. Flat LinkedIn Button */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 active:bg-black/15 dark:active:bg-white/25 border border-black/15 dark:border-white/15 rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#1a1a1a] dark:text-[#faf7f5] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm active:scale-95"
              title="Visit LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 opacity-70" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>

            {/* 3. Flat GitHub Button */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 active:bg-black/15 dark:active:bg-white/25 border border-black/15 dark:border-white/15 rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#1a1a1a] dark:text-[#faf7f5] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm active:scale-95"
              title="Visit GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 opacity-70" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-50" />
            </a>
          </motion.div>
        </div>

        {/* Experience & Location Section (Full Width across container) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 md:mt-10 pt-2 w-full"
        >
          {/* Location & Live Clock Header (Right Aligned) */}
          <div className="flex justify-end mb-2">
            <div className="text-[10px] sm:text-xs font-mono tracking-wider opacity-60 text-[#1a1a1a] dark:text-[#faf7f5] uppercase flex items-center gap-2">
              <span>PH</span>
              <span className="font-semibold text-[#1a1a1a] dark:text-[#faf7f5]">{phTime || '20:41'}</span>
            </div>
          </div>

          {/* Past Work & Current Experience List */}
          <div className="border-t border-b border-black/15 dark:border-white/15 divide-y divide-black/10 dark:divide-white/10 font-sans w-full">
            {/* Current Experience */}
            <div className="py-2.5 sm:py-3 md:py-3.5 flex flex-col sm:flex-row gap-1 sm:gap-8 md:gap-12 items-start">
              <div className="text-[10px] sm:text-xs font-mono opacity-50 uppercase tracking-wider sm:w-[100px] shrink-0">
                Current
              </div>
              <div className="space-y-0.5">
                <div className="font-semibold text-xs sm:text-sm md:text-base text-[#1a1a1a] dark:text-[#faf7f5]">
                  Self-Employed
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm opacity-60 text-[#1a1a1a] dark:text-[#faf7f5]">
                  Web Designer &amp; Frontend Developer
                </div>
              </div>
            </div>

            {/* Past Experience */}
            <div className="py-2.5 sm:py-3 md:py-3.5 flex flex-col sm:flex-row gap-1 sm:gap-8 md:gap-12 items-start">
              <div className="text-[10px] sm:text-xs font-mono opacity-50 uppercase tracking-wider sm:w-[100px] shrink-0">
                2022–2026
              </div>
              <div className="space-y-0.5">
                <div className="font-semibold text-xs sm:text-sm md:text-base text-[#1a1a1a] dark:text-[#faf7f5]">
                  UnitQ
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm opacity-60 text-[#1a1a1a] dark:text-[#faf7f5]">
                  Data Quality Analyst
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator with Accent Color Pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-4 pb-2 flex flex-col items-center justify-center gap-1.5 cursor-pointer group"
          onClick={() => {
            const el = document.querySelector('#projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase text-[#f99db5] opacity-80 group-hover:opacity-100 transition-opacity font-medium">
            SCROLL
          </span>
          <div className="w-[1px] h-8 sm:h-10 bg-white/15 relative overflow-hidden rounded-full">
            <motion.div
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#f99db5] to-transparent absolute left-0 shadow-[0_0_8px_#f99db5]"
              animate={{
                top: ['-50%', '100%']
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};




