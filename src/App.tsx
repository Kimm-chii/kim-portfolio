import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Project } from './types';
import { ToastMessage } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSplash } from './components/IntroSplash';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  // Lock dark mode permanently
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
  }, []);

  // Listen to hash changes for direct routing (#all-projects)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#all-projects' || window.location.hash === '#projects-archive') {
        setCurrentPage('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentPage('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleViewAllProjects = () => {
    setCurrentPage('projects');
    window.location.hash = 'all-projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = (targetSection?: string) => {
    setCurrentPage('home');
    if (targetSection) {
      window.location.hash = targetSection.replace('#', '');
      setTimeout(() => {
        const elem = document.querySelector(targetSection);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (title: string, description?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen font-sans relative bg-[#0A0A0A] text-[#F2F2F2] selection:bg-white selection:text-black">
      <IntroSplash />
      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="w-[1px] h-full bg-white/5" />
        <div className="w-[1px] h-full hidden md:block bg-white/5" />
        <div className="w-[1px] h-full bg-white/5" />
      </div>

      {/* Floating Glassmorphic Navigation */}
      <Navbar
        data={portfolioData}
        currentPage={currentPage}
        onNavigateHome={handleBackToHome}
        onNavigateProjects={handleViewAllProjects}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <>
            {/* 1. Hero */}
            <Hero data={portfolioData} />

            {/* 2. Projects (Featured Preview) */}
            <ProjectGrid
              projects={portfolioData.projects}
              onSelectProject={(p) => setSelectedProject(p)}
              onViewAllProjects={handleViewAllProjects}
              limit={3}
            />

            {/* 3. About */}
            <AboutSection data={portfolioData} />

            {/* 4. Interactive Canvas Generator Lab */}
            <PlaygroundSection />

            {/* 5. Contact */}
            <ContactSection
              data={portfolioData}
              onShowToast={showToast}
            />
          </>
        ) : (
          /* Dedicated Projects Archive Page */
          <ProjectsPage
            projects={portfolioData.projects}
            onSelectProject={(p) => setSelectedProject(p)}
            onBackToHome={() => handleBackToHome()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer data={portfolioData} />

      {/* Project Case Study Popup Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={showToast}
      />

      {/* Global Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
