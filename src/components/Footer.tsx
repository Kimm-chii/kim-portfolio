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
    <footer className="py-12 border-t border-white/10 dark:border-white/10 light:border-black/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F8F8F6] text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <span className="font-sans font-bold text-2xl">K</span>
            <div>
              <span className="font-sans font-semibold text-base block">{data.name} {data.japaneseName}</span>
              <p className="text-[10px] opacity-40 font-mono uppercase tracking-widest">{data.location} &bull; Personal Corner</p>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-[10px] uppercase tracking-[0.2em] font-mono transition-colors flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100"
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
