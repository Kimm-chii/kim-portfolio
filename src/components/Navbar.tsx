import React, { useState, useEffect } from 'react';
import { Home, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  data: PortfolioData;
  currentPage?: 'home' | 'projects';
  onNavigateHome?: (targetSection?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  currentPage = 'home',
  onNavigateHome,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState<string>('HERO');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100));
      } else {
        setScrollProgress(0);
      }

      // Active section detection
      if (currentPage === 'projects') {
        setCurrentSection('ARCHIVE');
        return;
      }

      const sections = [
        { id: 'contact', label: 'CONTACT' },
        { id: 'playground', label: 'LAB' },
        { id: 'about', label: 'ABOUT' },
        { id: 'projects', label: 'PROJECTS' },
      ];

      let found = 'HERO';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            found = section.label;
            break;
          }
        }
      }
      setCurrentSection(found);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: percentage * totalHeight,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Projects', shortLabel: 'PROJ', href: '#projects', isProjects: true, tag: 'PROJECTS' },
    { name: 'About', shortLabel: 'ABOUT', href: '#about', tag: 'ABOUT' },
    { name: 'Lab', shortLabel: 'LAB', href: '#playground', tag: 'LAB' },
    { name: 'Contact', shortLabel: 'CONT', href: '#contact', tag: 'CONTACT' },
  ];

  const handleNavClick = (link: { name: string; href: string; isProjects?: boolean }) => {
    if (currentPage === 'projects') {
      if (link.isProjects) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        if (onNavigateHome) {
          onNavigateHome(link.href);
        }
      }
    } else {
      const target = document.querySelector(link.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBrandClick = () => {
    if (currentPage === 'projects') {
      if (onNavigateHome) onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-[calc(0.75rem+env(safe-area-inset-top))] sm:pt-6">
        <div className="relative rounded-2xl sm:rounded-full bg-[#f5efe8]/85 dark:bg-[#1a1a1a]/85 backdrop-blur-md border border-black/10 dark:border-white/10 px-3.5 py-2 sm:px-6 sm:py-3 flex items-center justify-between transition-all duration-300 overflow-hidden shadow-md dark:shadow-2xl">
          
          {/* Brand with Live Indicator Avatar Badge */}
          <button
            type="button"
            onClick={handleBrandClick}
            className="group flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-85 text-left cursor-pointer z-10 shrink-0"
          >
            {/* Live Indicator Avatar */}
            <div className="relative shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#f99db5] via-pink-400 to-[#f99db5]/70 shadow-[0_0_10px_rgba(249,157,181,0.35)]">
                <div className="w-full h-full rounded-full bg-[#f5efe8] dark:bg-[#1a1a1a] overflow-hidden flex items-center justify-center font-sans text-xs sm:text-sm font-semibold text-[#1a1a1a] dark:text-[#faf7f5]">
                  {data.name.charAt(0)}
                </div>
              </div>
              {/* Live animated pulse ring */}
              <span className="absolute bottom-0 right-0 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-400 border-2 border-[#f5efe8] dark:border-[#1a1a1a]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-sm sm:text-base font-semibold tracking-tight text-[#1a1a1a] dark:text-[#faf7f5]">
                  {data.name}
                </span>
                <span className="text-xs sm:text-sm font-sans opacity-60 font-medium text-[#1a1a1a] dark:text-[#faf7f5]">
                  {data.japaneseName}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-sans mt-0.5 hidden sm:block text-[#1a1a1a] dark:text-[#faf7f5]">
                Personal Corner & Digital Garden
              </span>
            </div>
          </button>

          {/* Center Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-[9px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a] dark:text-[#faf7f5] z-10">
            {currentPage === 'projects' && (
              <button
                onClick={() => handleBrandClick()}
                className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer py-1 flex items-center gap-1.5"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            )}

            {navLinks.map((link) => {
              const isActive = (currentPage === 'projects' && link.isProjects) || (currentPage === 'home' && currentSection === link.tag);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`transition-colors duration-200 cursor-pointer py-1 relative group ${
                    isActive ? 'opacity-100 text-[#f99db5]' : 'opacity-70 hover:opacity-100 text-[#1a1a1a] dark:text-[#faf7f5]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#f99db5] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_6px_#f99db5]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & Live Reading Progress Badge - Desktop */}
          <div className="hidden md:flex items-center gap-3 z-10 shrink-0">
            <div 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[9px] font-mono tracking-widest text-[#1a1a1a]/90 dark:text-[#faf7f5]/90 backdrop-blur-md shadow-inner"
              title="Page Scroll Progress & Section Tracker"
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${scrollProgress >= 98 ? 'bg-emerald-400' : 'bg-[#f99db5] animate-pulse'}`} />
              <span className="font-semibold text-[#1a1a1a] dark:text-[#faf7f5] tabular-nums w-[2.25rem] text-right inline-block">
                {Math.round(scrollProgress)}%
              </span>
              <span className="opacity-30 shrink-0">|</span>
              <span className="text-[#f99db5] font-semibold inline-flex items-center justify-center min-w-[4.25rem] text-center">
                {scrollProgress >= 98 ? (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Sparkles className="w-3 h-3 text-emerald-400 inline" />
                    <span>READ</span>
                  </span>
                ) : (
                  currentSection
                )}
              </span>
            </div>

            {/* Theme Toggle Button */}
            <ThemeToggle size="md" />
          </div>

          {/* Mobile View: Nav Links + Theme Toggle */}
          <div className="flex md:hidden items-center gap-2 sm:gap-3 z-10 shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              {navLinks.map((link) => {
                const isActive = (currentPage === 'projects' && link.isProjects) || (currentPage === 'home' && currentSection === link.tag);
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className={`transition-colors duration-200 cursor-pointer py-1 text-[10px] sm:text-xs font-mono font-medium uppercase tracking-wider relative group ${
                      isActive ? 'opacity-100 text-[#f99db5]' : 'opacity-70 hover:opacity-100 text-[#1a1a1a] dark:text-[#faf7f5]'
                    }`}
                  >
                    <span>{link.shortLabel}</span>
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#f99db5] transition-all duration-300 ${
                        isActive ? 'w-full shadow-[0_0_6px_#f99db5]' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="pl-1 border-l border-black/10 dark:border-white/10">
              <ThemeToggle size="sm" />
            </div>
          </div>

          {/* Integrated 4-Segment Dotted Reading Progress Bar across Bottom of Navbar */}
          <div 
            onClick={handleScrub}
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/10 dark:bg-black/40 cursor-pointer z-20 grid grid-cols-4 gap-1 px-1"
            title={`Reading progress: ${Math.round(scrollProgress)}% (Click segment to jump)`}
          >
            {navLinks.map((link, idx) => {
              const segFill = Math.min(100, Math.max(0, (scrollProgress - idx * 25) / 25 * 100));
              return (
                <div key={link.name} className="h-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-[#f99db5] transition-all duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(249,157,181,0.8)]"
                    style={{ width: `${segFill}%` }}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </header>
  );
};


