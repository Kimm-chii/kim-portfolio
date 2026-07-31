export type CategoryType = string;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  featured: boolean;
  year: string;
  client: string;
  thumbnail: string;
  bannerImage?: string;
  galleryImages: string[];
  summary: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack?: string[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  startingPrice: string;
  estimatedTimeline: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string; description?: string }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PortfolioData {
  name: string;
  japaneseName: string;
  title: string;
  headline: string;
  tagline: string;
  location: string;
  timezone: string;
  availability: {
    status: 'Available' | 'Limited' | 'Booked';
    text: string;
    nextSlot: string;
  };
  contact: {
    email: string;
    phone?: string;
    location: string;
    github: string;
    twitter?: string;
    linkedin: string;
    dribbble?: string;
    readcv?: string;
  };
  stats: { label: string; value: string; detail: string }[];
  bio: {
    intro: string;
    fullBio: string[];
    philosophies: { title: string; desc: string }[];
  };
  projects: Project[];
  experiences: Experience[];
  services: Service[];
  skillCategories: SkillCategory[];
  processSteps: ProcessStep[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}
