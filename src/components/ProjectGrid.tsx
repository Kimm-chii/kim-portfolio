import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { Project, CategoryType } from '../types';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelectProject }) => {
  return (
    <section id="projects" className="py-20 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-mono">
              01 / PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight">
              Projects
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-60 max-w-md leading-relaxed font-sans">
            A curated showcase of modern web projects, landing pages, and UI designs.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer border border-white/10 dark:border-white/10 light:border-black/10 rounded-2xl bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md"
              >
                <div>
                  {/* Thumbnail Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-white/10 dark:border-white/10 light:border-black/10">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 border border-white/20 text-[9px] font-mono uppercase tracking-widest text-white">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Reveal Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                      <span className="px-4 py-2 rounded-full bg-white text-black font-medium text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Project</span>
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-sans font-medium tracking-tight group-hover:opacity-75 transition-opacity">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <p className="text-xs opacity-60 leading-relaxed line-clamp-2">
                      {project.subtitle}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-md border border-white/10 dark:border-white/10 light:border-black/10 opacity-60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="px-5 py-2.5 border-t border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between text-[10px] uppercase tracking-widest opacity-50">
                  <span>{project.client}</span>
                  <span className="group-hover:opacity-100 transition-opacity">Read &rarr;</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
