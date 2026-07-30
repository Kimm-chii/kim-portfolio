import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle, Building2, Tag } from 'lucide-react';
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

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
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
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F8F8F6] border border-white/10 dark:border-white/10 light:border-black/10 overflow-y-auto z-10 flex flex-col text-[#F2F2F2] dark:text-[#F2F2F2] light:text-[#111111]"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#0A0A0A]/90 dark:bg-[#0A0A0A]/90 light:bg-[#F8F8F6]/90 border-b border-white/10 dark:border-white/10 light:border-black/10 backdrop-blur-md">
            <div>
              <span className="inline-block px-2.5 py-0.5 border border-white/10 text-[9px] font-mono uppercase tracking-[0.2em] opacity-60 mb-1">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight">{project.title}</h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 border border-white/10 hover:border-white/40 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 opacity-70" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Banner Image */}
            <div className="border border-white/10 bg-black aspect-video relative group">
              <img
                src={project.bannerImage || project.thumbnail}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Meta Strip */}
            <div className="grid grid-cols-2 gap-4 p-4 border border-white/10 text-xs">
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
              <div className="p-5 border border-white/10 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">The Challenge</h4>
                <p className="text-xs opacity-80 leading-relaxed font-sans">{project.challenge}</p>
              </div>

              <div className="p-5 border border-white/10 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">The Solution</h4>
                <p className="text-xs opacity-80 leading-relaxed font-sans">{project.solution}</p>
              </div>
            </div>

            {/* Scope Deliverables */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-3 block">SCOPE DELIVERABLES</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 border border-white/10 text-xs opacity-80">
                    <CheckCircle className="w-3.5 h-3.5 opacity-60 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-3 block">TECH STACK & TOOLS</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-white/10 text-[10px] font-mono uppercase tracking-wider opacity-60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      sounds.playClick();
                      onShowToast('Opening live demo link', project.liveUrl);
                    }}
                    className="px-6 py-3 bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-85 flex items-center gap-2 transition-opacity"
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
                    className="px-6 py-3 border border-white/20 text-[10px] uppercase tracking-[0.2em] font-mono hover:border-white/60 flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-[10px] font-mono uppercase tracking-widest opacity-50 hover:opacity-100 cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
