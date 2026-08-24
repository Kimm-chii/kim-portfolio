import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PortfolioData } from '../types';

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 md:pt-16 pb-[calc(3.5rem+env(safe-area-inset-bottom))] border-t border-black/10 dark:border-white/10 text-[#1a1a1a] dark:text-[#faf7f5] text-xs font-mono">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <span className="font-sans font-bold text-2xl text-[#1a1a1a] dark:text-[#faf7f5]">K</span>
            <div>
              <span className="font-sans font-semibold text-base block text-[#1a1a1a] dark:text-[#faf7f5]">{data.name} {data.japaneseName}</span>
              <p className="text-[10px] opacity-40 font-mono uppercase tracking-widest">{data.location} &bull; Personal Corner</p>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="px-4 py-2 rounded-full border border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 text-[10px] uppercase tracking-[0.2em] font-mono transition-colors flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 text-[#1a1a1a] dark:text-[#faf7f5]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 opacity-60" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest opacity-40">
          <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
