import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid } from 'lucide-react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
  onViewAllProjects?: () => void;
  limit?: number;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onSelectProject,
  onViewAllProjects,
  limit = 3,
}) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-20 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-mono">
              01 / FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight">
              Projects
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2.5 pt-1 md:pt-0">
            <p className="text-xs uppercase tracking-widest opacity-60 max-w-md leading-relaxed font-sans md:text-right">
              A curated showcase of modern web projects, landing pages, and UI designs.
            </p>
            {onViewAllProjects && (
              <button
                onClick={onViewAllProjects}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 text-[10px] font-mono uppercase tracking-[0.15em] transition-all cursor-pointer shadow-sm mt-1 sm:mt-0"
              >
                <Grid className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                <span>Explore Full Archive ({projects.length}) &rarr;</span>
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
