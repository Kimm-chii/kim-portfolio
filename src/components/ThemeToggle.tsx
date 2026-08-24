import React, { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

export interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  size = 'md',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // 5 vertical panels for the accordion wipe hover effect
  const ACCORDION_PANELS = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      delay: i * 40,
    }));
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={`group relative overflow-hidden flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer select-none ${
        size === 'sm' ? 'px-3 py-1 min-w-[50px] sm:px-4 sm:py-1.5 sm:min-w-[70px]' : 'px-5 py-2 min-w-[80px]'
      } ${
        isDark
          ? 'bg-white/5 border-white/15 text-[#faf7f5]'
          : 'bg-black/5 border-black/15 text-[#1a1a1a]'
      } ${className}`}
    >
      {/* Accordion Wipe Hover Effect Layer */}
      <div className="absolute inset-0 z-0 flex pointer-events-none">
        {ACCORDION_PANELS.map((p) => (
          <div
            key={p.id}
            className="h-full flex-1 bg-[#f99db5] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out opacity-95"
            style={{ transitionDelay: `${p.delay}ms` }}
          />
        ))}
      </div>

      <span className={`relative z-20 font-mono uppercase tracking-wider font-medium leading-none group-hover:text-[#1a1a1a] transition-colors duration-300 delay-75 ${
        size === 'sm' ? 'text-[8px] sm:text-[10px]' : 'text-[10px] sm:text-[11px]'
      }`}>
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeToggle;
