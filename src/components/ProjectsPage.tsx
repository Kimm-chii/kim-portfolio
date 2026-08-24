import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Filter, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { ProjectAccordionList } from './ProjectAccordionList';

interface ProjectsPageProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
  onBackToHome: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  onSelectProject,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...cats];
  }, [projects]);

  // Filter projects by selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="pt-28 pb-[calc(6rem+env(safe-area-inset-bottom))] min-h-screen relative z-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
          <div className="space-y-4">
            <button
              onClick={onBackToHome}
              className="group inline-flex items-center gap-2 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-[#1a1a1a] dark:text-[#faf7f5]"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-medium tracking-tight text-[#1a1a1a] dark:text-[#faf7f5]">
              All Projects
            </h1>
          </div>
        </div>

        {/* Category Filter Pills - Flex Wrap to ensure no cropping on mobile/tablet */}
        <div className="p-3 sm:p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md flex flex-wrap items-center gap-2.5 text-[#1a1a1a] dark:text-[#faf7f5]">
          <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-black/10 dark:border-white/10 py-1">
            <Filter className="w-3.5 h-3.5 opacity-40 text-[#f99db5]" />
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Filter:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#1a1a1a] text-[#faf7f5] dark:bg-[#faf7f5] dark:text-[#1a1a1a] font-semibold scale-105'
                      : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 text-[#1a1a1a] dark:text-[#faf7f5]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects List (Accordion) */}
        <div className="min-h-[400px]">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="border-t border-black/10 dark:border-white/10 mt-8"
            >
              <ProjectAccordionList projects={filteredProjects} onSelectProject={onSelectProject} />
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center space-y-4 border border-dashed border-black/20 dark:border-white/20 rounded-2xl bg-black/5 dark:bg-white/5 text-[#1a1a1a] dark:text-[#faf7f5]"
            >
              <Sparkles className="w-8 h-8 opacity-30 mx-auto text-[#f99db5]" />
              <div className="space-y-1">
                <h3 className="text-lg font-sans font-medium">No projects in this category</h3>
                <p className="text-[13px] opacity-60 font-sans">
                  Try selecting a different category filter.
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-4 py-2 rounded-full border border-black/20 dark:border-white/20 text-xs font-mono uppercase tracking-wider hover:bg-[#1a1a1a] hover:text-[#faf7f5] dark:hover:bg-white dark:hover:text-[#1a1a1a] transition-colors cursor-pointer text-[#1a1a1a] dark:text-[#faf7f5]"
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#1a1a1a] dark:text-[#faf7f5]">
          <div className="text-xs font-mono opacity-50">
            Showing {filteredProjects.length} of {projects.length} total projects
          </div>

          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 hover:bg-[#1a1a1a] hover:text-[#faf7f5] dark:hover:bg-white dark:hover:text-[#1a1a1a] transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] cursor-pointer text-[#1a1a1a] dark:text-[#faf7f5]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Main Page</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
