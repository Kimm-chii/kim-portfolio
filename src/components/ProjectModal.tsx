import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Building2, Tag, Play } from 'lucide-react';
import { Project } from '../types';
import { sounds } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onShowToast: (title: string, desc?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onShowToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          key="modal-container"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
        >
          {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#f5efe8] dark:bg-[#1a1a1a] border border-black/20 dark:border-white/20 overflow-y-auto z-10 flex flex-col text-[#1a1a1a] dark:text-[#faf7f5]"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#f5efe8]/90 dark:bg-[#1a1a1a]/90 border-b border-black/10 dark:border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight">{project.title}</h2>
              <span className="inline-block px-2 py-1 bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/15 text-[9px] font-mono uppercase tracking-[0.2em] opacity-70 whitespace-nowrap shrink-0">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 transition-colors cursor-pointer text-[#1a1a1a] dark:text-[#faf7f5]"
            >
              <X className="w-4 h-4 opacity-70" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Banner Image */}
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  sounds.playClick();
                  onShowToast('Opening live project link', project.liveUrl);
                }}
                className="border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 aspect-video relative group cursor-pointer block overflow-hidden"
                title={`Visit Live Project - ${project.title}`}
              >
                <img
                  src={project.bannerImage || project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 bg-[#faf7f5] text-[#1a1a1a] text-[10px] font-mono uppercase tracking-[0.2em] font-semibold border border-black/10 flex items-center gap-2 shadow-lg">
                    <span>View Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ) : (
              <div className="border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 aspect-video relative group">
                <img
                  src={project.bannerImage || project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Quick Meta Strip */}
            <div className="grid grid-cols-2 gap-4 p-4 border border-black/10 dark:border-white/10 text-xs">
              <div>
                <span className="opacity-40 flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest mb-1">
                  <Building2 className="w-3 h-3 opacity-60" /> Client
                </span>
                <span className="font-sans font-medium text-xs">{project.client}</span>
              </div>
              <div>
                <span className="opacity-40 flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest mb-1">
                  <Tag className="w-3 h-3 opacity-60" /> Category
                </span>
                <span className="font-sans font-medium text-xs">{project.category}</span>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">The Challenge</h4>
                <p className="text-xs opacity-80 leading-relaxed font-sans">{project.challenge}</p>
              </div>

              <div className="p-5 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">The Solution</h4>
                <p className="text-xs opacity-80 leading-relaxed font-sans">{project.solution}</p>
              </div>
            </div>

            {/* Scope Deliverables */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-3 block">SCOPE & DELIVERABLES</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 border border-black/10 dark:border-white/10 text-xs opacity-80">
                    <span className="opacity-60 shrink-0 font-mono">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            {(project.techStack || project.tags) && (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-3 block">TECH STACK & TOOLS</span>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || project.tags).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-black/10 dark:border-white/10 text-[10px] font-mono uppercase tracking-wider opacity-80 flex items-center gap-1.5"
                    >
                      <span className="opacity-60 shrink-0">•</span> {tag}
                    </span>
                  ))}
                </div>
                
                {project.id === 'sora-digital-crm' && project.walkthroughUrl && (
                  <div className="pt-5">
                    <a
                      href={project.walkthroughUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 hover:border-[#f99db5] dark:hover:border-[#f99db5] px-4 py-3 text-[#1a1a1a] dark:text-[#faf7f5] opacity-90 hover:opacity-100 text-[10px] uppercase tracking-[0.15em] font-mono transition-all cursor-pointer w-fit bg-[#f5efe8] dark:bg-[#1a1a1a]"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Watch the full automation walkthrough</span>
                    </a>
                  </div>
                )}
              </div>
            )}

            </div>

            {/* Actions Bar (Sticky Footer) */}
            <div className="sticky bottom-0 z-20 p-4 sm:p-6 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:pb-[calc(1.5rem+env(safe-area-inset-bottom))] bg-[#f5efe8]/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xl border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#1a1a1a] dark:text-[#faf7f5]">
              <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      sounds.playClick();
                      onShowToast('Opening live demo link', project.liveUrl);
                    }}
                    className="flex-1 sm:flex-none justify-center px-6 py-3.5 bg-[#1a1a1a] text-[#faf7f5] dark:bg-[#faf7f5] dark:text-[#1a1a1a] text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-85 flex items-center gap-2 transition-opacity cursor-pointer"
                  >
                    <span>Visit Live Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      sounds.playClick();
                      onShowToast('Opening source code repository', project.githubUrl);
                    }}
                    className="flex-1 sm:flex-none justify-center px-6 py-3.5 border border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 text-[10px] uppercase tracking-[0.2em] font-mono flex items-center gap-2 transition-colors bg-[#f5efe8] dark:bg-[#1a1a1a] cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}

                {project.walkthroughUrl && (
                  <a
                    href={project.walkthroughUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      sounds.playClick();
                      onShowToast('Opening video walkthrough', project.walkthroughUrl);
                    }}
                    className="flex-1 sm:flex-none justify-center px-6 py-3.5 border border-black/20 dark:border-white/20 hover:border-[#f99db5] dark:hover:border-[#f99db5] text-[10px] uppercase tracking-[0.2em] font-mono flex items-center gap-2 transition-colors bg-[#f5efe8] dark:bg-[#1a1a1a] cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Walkthrough</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3 sm:py-0 text-[10px] font-mono uppercase tracking-widest opacity-50 hover:opacity-100 cursor-pointer transition-opacity"
              >
                Close Case Study
              </button>
            </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
