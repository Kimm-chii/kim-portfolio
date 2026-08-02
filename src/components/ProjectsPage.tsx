import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Filter, Sparkles, Folder } from 'lucide-react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

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
      className="pt-28 pb-24 min-h-screen relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-[11px] font-mono uppercase tracking-[0.2em] cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest opacity-60">
            <Folder className="w-3.5 h-3.5 text-emerald-400" />
            <span>Archive Total: {projects.length} Works</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-emerald-400">
              01 / DEDICATED ARCHIVE
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono opacity-50">
              EXPLORE ALL WORKS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-semibold tracking-tight">
            All Projects & Concepts
          </h1>

          <p className="text-xs sm:text-sm leading-relaxed opacity-70 max-w-2xl font-sans">
            A curated archive of modern website concepts and frontend explorations, crafted with a focus on minimalist design, responsive experiences, and thoughtful interaction.
          </p>
        </div>

        {/* Category Filter Pills - Flex Wrap to ensure no cropping on mobile/tablet */}
        <div className="p-3 sm:p-4 rounded-2xl border border-white/10 bg-[#0D0D0D]/80 backdrop-blur-md flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-white/10 py-1">
            <Filter className="w-3.5 h-3.5 opacity-40 text-emerald-400" />
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
                      ? 'bg-white text-black font-semibold shadow-md scale-105'
                      : 'bg-white/5 border border-white/10 opacity-70 hover:opacity-100 hover:bg-white/10 text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Seamless Fade */}
        <div className="min-h-[400px]">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelectProject={onSelectProject}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center space-y-4 border border-dashed border-white/15 rounded-2xl bg-white/[0.02]"
            >
              <Sparkles className="w-8 h-8 opacity-30 mx-auto text-emerald-400" />
              <div className="space-y-1">
                <h3 className="text-base font-sans font-medium">No projects in this category</h3>
                <p className="text-xs opacity-50 font-sans">
                  Try selecting a different category filter.
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono opacity-50">
            Showing {filteredProjects.length} of {projects.length} total projects
          </div>

          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 bg-[#0D0D0D] hover:bg-white hover:text-black transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] cursor-pointer shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Main Page</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
