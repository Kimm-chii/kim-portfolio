import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectAccordionListProps {
  projects: Project[];
  onSelectProject?: (p: Project) => void;
}

export const ProjectAccordionList: React.FC<ProjectAccordionListProps> = ({ projects }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const smoothScrollToElement = (elementId: string) => {
    const navOffset = window.innerWidth >= 1024 ? 100 : 80;
    const startTime = performance.now();
    const duration = 650; // Smooth 650ms scroll
    const startY = window.scrollY;

    const step = (currentTime: number) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for a silky smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 3);

      const currentElementTop = element.getBoundingClientRect().top + window.scrollY;
      const targetY = Math.max(0, currentElementTop - navOffset);
      const newY = startY + (targetY - startY) * ease;

      window.scrollTo(0, newY);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const toggleExpand = (id: string) => {
    const isOpening = expandedId !== id;
    setExpandedId((prev) => (prev === id ? null : id));

    if (isOpening) {
      // Start smooth scroll shortly after expansion begins for a unified, natural transition
      setTimeout(() => {
        smoothScrollToElement(`accordion-${id}`);
      }, 60);
    }
  };

  return (
    <div className="w-full">
      {projects.map((project, index) => {
        const isExpanded = expandedId === project.id;
        const number = (index + 1).toString().padStart(2, '0');

        return (
          <div 
            key={project.id} 
            id={`accordion-${project.id}`}
            className="border-b border-black/10 dark:border-white/10 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-300"
          >
            {/* Row Header (Clickable) */}
            <button
              onClick={() => toggleExpand(project.id)}
              className="w-full text-left py-4 md:py-5 flex items-start sm:items-center justify-between cursor-pointer focus:outline-none"
            >
              <div className="flex items-start sm:items-center gap-6 md:gap-10 flex-1 pr-6">
                <span className="text-[10px] md:text-[11px] font-mono text-black/40 dark:text-white/40 pt-1 sm:pt-0 shrink-0">
                  {number}
                </span>
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <h3 className="text-base md:text-lg lg:text-xl font-medium tracking-tight text-[#1a1a1a] dark:text-[#faf7f5] transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-block px-1.5 py-0.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-mono text-[#1a1a1a]/70 dark:text-[#faf7f5]/70 whitespace-nowrap shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[11px] md:text-xs text-[#1a1a1a]/60 dark:text-[#faf7f5]/60 leading-relaxed max-w-2xl font-sans">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="pt-2 sm:pt-0 shrink-0">
                <ChevronDown 
                  className={`w-5 h-5 text-black/40 dark:text-white/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? 'rotate-180' : ''}`} 
                />
              </div>
            </button>

            {/* Expanded Content (Accordion) */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pt-1 pl-0 sm:pl-[4.5rem] md:pl-[4.5rem] pr-6 md:pr-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                      
                      {/* Left Column: Images & Links */}
                      <div className="lg:col-span-5 flex flex-col gap-6">
                        <div 
                          className="aspect-[4/3] w-full overflow-hidden bg-black/5 dark:bg-white/5 relative shrink-0 border border-black/10 dark:border-white/10 group/image cursor-pointer block"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.liveUrl && project.liveUrl !== '#') {
                              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                        >
                          <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            className="w-full h-full object-cover filter contrast-[1.02] group-hover/image:scale-[1.03] transition-transform duration-700 ease-out"
                            referrerPolicy="no-referrer"
                          />
                          
                          {/* Accordion Wipe Hover Effect Layer */}
                          <div className="absolute inset-0 z-10 flex pointer-events-none">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className="h-full flex-1 bg-[#f99db5] origin-left scale-x-0 group-hover/image:scale-x-100 transition-transform duration-300 ease-out opacity-95"
                                style={{ transitionDelay: `${i * 40}ms` }}
                              />
                            ))}
                          </div>
                          
                          {/* View Project Text */}
                          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
                            <span className="text-[#1a1a1a] font-mono uppercase tracking-[0.2em] text-[10px] font-semibold px-4 py-2 bg-[#faf7f5]/80 backdrop-blur-sm border border-black/10">
                              View Live Project
                            </span>
                          </div>
                        </div>

                        {/* Project Links */}
                        <div className="flex flex-col gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 pb-1 text-[#1a1a1a] dark:text-[#faf7f5] opacity-80 hover:opacity-100 text-[10px] uppercase tracking-[0.15em] font-mono transition-all cursor-pointer w-fit"
                            >
                              <span>Visit Live Project</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 pb-1 text-[#1a1a1a] dark:text-[#faf7f5] opacity-80 hover:opacity-100 text-[10px] uppercase tracking-[0.15em] font-mono transition-all cursor-pointer w-fit"
                            >
                              <span>Repository</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.walkthroughUrl && (
                            <a
                              href={project.walkthroughUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 border-b border-black/20 dark:border-white/20 hover:border-[#f99db5] dark:hover:border-[#f99db5] pb-1 text-[#1a1a1a] dark:text-[#faf7f5] opacity-80 hover:opacity-100 text-[10px] uppercase tracking-[0.15em] font-mono transition-all cursor-pointer w-fit"
                            >
                              <span>Walkthrough</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right Column: Details & Tech */}
                      <div className="lg:col-span-7 flex flex-col">
                        <div className="mb-6 space-y-4">
                          <p className="text-[11px] md:text-[12px] text-[#1a1a1a]/80 dark:text-[#faf7f5]/80 leading-relaxed font-sans mt-2">
                            {project.summary}
                          </p>
                        </div>
                        
                        {/* Challenge & Solution */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                          <div className="space-y-2">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-black/50 dark:text-white/50 block">Challenge</span>
                            <p className="text-[11px] md:text-xs text-[#1a1a1a]/70 dark:text-[#faf7f5]/70 leading-relaxed font-sans">{project.challenge}</p>
                          </div>
                          <div className="space-y-2">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-black/50 dark:text-white/50 block">Solution</span>
                            <p className="text-[11px] md:text-xs text-[#1a1a1a]/70 dark:text-[#faf7f5]/70 leading-relaxed font-sans">{project.solution}</p>
                          </div>
                        </div>

                        {/* Scope & Tech Stack */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-black/10 dark:border-white/10 pt-6 mt-auto">
                          <div className="space-y-3">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-black/50 dark:text-white/50 block">Scope & Deliverables</span>
                            <ul className="space-y-2">
                              {project.deliverables.map((item, idx) => (
                                <li key={idx} className="text-[11px] md:text-xs text-[#1a1a1a]/70 dark:text-[#faf7f5]/70 font-sans flex items-start gap-2.5">
                                  <span className="w-1 h-1 rounded-full bg-black/40 dark:bg-white/40 mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-black/50 dark:text-white/50 block">Tech Stack & Tools</span>
                            <div className="flex flex-wrap gap-2">
                              {(project.techStack || project.tags).map(tag => (
                                <span 
                                  key={tag} 
                                  className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-[#1a1a1a]/80 dark:text-[#faf7f5]/80 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            {project.id === 'sora-digital-crm' && project.walkthroughUrl && project.walkthroughUrl !== '#' && (
                              <div className="pt-4">
                                <a
                                  href={project.walkthroughUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 hover:border-[#f99db5] dark:hover:border-[#f99db5] px-4 py-2 text-[#1a1a1a] dark:text-[#faf7f5] opacity-90 hover:opacity-100 text-[10px] uppercase tracking-[0.15em] font-mono transition-all cursor-pointer w-fit bg-[#f5efe8] dark:bg-[#1a1a1a]"
                                >
                                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                  </svg>
                                  <span>Watch the full automation walkthrough</span>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
