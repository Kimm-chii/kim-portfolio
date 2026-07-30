import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../types';

interface NavbarProps {
  data: PortfolioData;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Lab', href: '#playground' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl sm:max-w-4xl">
      <div className="rounded-full bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] px-4 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between transition-all duration-300">
        
        {/* Brand with Live Indicator Avatar Badge */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 transition-opacity hover:opacity-85 text-left cursor-pointer"
        >
          {/* Live Indicator Avatar */}
          <div className="relative shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-md">
              <div className="w-full h-full rounded-full bg-[#0A0A0A] overflow-hidden flex items-center justify-center font-sans text-sm font-semibold text-white">
                {data.name.charAt(0)}
              </div>
            </div>
            {/* Live animated pulse ring */}
            <span className="absolute bottom-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-[#0A0A0A]"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-sm sm:text-base font-semibold tracking-tight">
                {data.name}
              </span>
              <span className="text-xs font-sans opacity-50 font-medium">
                {data.japaneseName}
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-sans mt-0.5">
              Personal Corner & Digital Garden
            </span>
          </div>
        </button>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white dark:bg-white light:bg-black group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Right Controls: Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-white/10 text-xs text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-4 rounded-3xl bg-[#0A0A0A]/90 dark:bg-[#0A0A0A]/90 light:bg-[#F8F8F6]/95 backdrop-blur-2xl border border-white/15 dark:border-white/15 light:border-black/10 shadow-2xl space-y-2"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between text-left py-2.5 px-4 rounded-2xl hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
