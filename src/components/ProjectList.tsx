import React from 'react';
import { Project } from '../types';
import { ProjectAccordionList } from './ProjectAccordionList';

interface ProjectListProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
  onViewAllProjects?: () => void;
  limit?: number;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onSelectProject,
  onViewAllProjects,
  limit = 3,
}) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="scroll-mt-10 lg:scroll-mt-8 py-12 sm:py-16 md:py-20 lg:py-24 lg:min-h-[calc(100vh-100px)] flex flex-col justify-center relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase opacity-70 text-[#f99db5] mb-2 block">
              01 // Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-[#1a1a1a] dark:text-[#faf7f5]">
              Featured Projects
            </h2>
          </div>
          
          {onViewAllProjects && (
            <div className="flex items-center pt-1 sm:pt-0">
              <button
                onClick={onViewAllProjects}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 active:bg-black/15 dark:active:bg-white/25 border border-black/15 dark:border-white/15 rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#1a1a1a] dark:text-[#faf7f5] transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <span>View Full Archive ({projects.length})</span>
                <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </div>
          )}
        </div>

        {/* Project List */}
        <div className="border-t border-black/10 dark:border-white/10">
          <ProjectAccordionList projects={displayedProjects} onSelectProject={onSelectProject} />
        </div>

      </div>
    </section>
  );
};
