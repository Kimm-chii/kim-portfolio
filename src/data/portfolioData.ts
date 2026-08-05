import { PortfolioData } from '../types';
import projectAetherImg from '../assets/images/project_aether_1785401917646.jpg';
import projectPulseImg from '../assets/images/project_pulse_1785401942968.jpg';

export const portfolioData: PortfolioData = {
  name: "Kim",
  japaneseName: "キム",
  title: "Digital Design & Frontend Exploration",
  headline: "Crafting modern, responsive websites & clean web experiences.",
  tagline: "Working with React, TypeScript, Tailwind CSS, Web Design, UI Design, and landing pages.",
  location: "Exploring",
  timezone: "UTC / Remote",
  availability: {
    status: "Available",
    text: "Creating & Exploring",
    nextSlot: "Summer 2026"
  },
  contact: {
    email: "amazonakimjared@gmail.com",
    location: "Remote",
    github: "https://github.com/Kimm-chii",
    linkedin: "https://www.linkedin.com/in/kjared"
  },
  stats: [],
  bio: {
    intro: "Welcome to my personal digital corner. A space where I explore modern web experiences, creative interfaces, and thoughtful digital design.",
    fullBio: [
      "My work focuses on crafting responsive web experiences that balance design, functionality, and technology. I use tools like React, Vite, TypeScript, and Tailwind CSS while maintaining a strong focus on customization, quality, and user experience.",
      "Rooted in minimalism and functional design (余白 - Yohaku, the beauty of open space), this site serves as my digital corner and garden—a place to showcase live web projects, interface designs, and front-end craft."
    ],
    philosophies: [
      {
        title: "Frontend Development",
        desc: "Focused on creating responsive web experiences that adapt seamlessly across desktop, tablet, and mobile devices using React, Vite, TypeScript, and Tailwind CSS, with optimized deployments through modern platforms like Vercel and Cloudflare."
      },
      {
        title: "Web & UI Design",
        desc: "Centered around clean layouts, thoughtful component systems, and intuitive interfaces designed with clarity and usability in mind."
      },
      {
        title: "Landing Pages",
        desc: "Exploring effective visual storytelling through structured layouts, engaging hero sections, and user-focused journeys."
      },
      {
        title: "Digital Craft",
        desc: "Combining technology, typography, motion, and detail-oriented design to create polished and memorable web experiences."
      }
    ]
  },
  projects: [
    {
      id: "annchan-anisong",
      title: "Annchan Anisong JP",
      subtitle: "Japanese Artist Digital Space",
      category: "Creative",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/project-1.webp",
      bannerImage: "/assets/project-1.webp",
      galleryImages: [
        "/assets/project-1.webp"
      ],
      summary: "A vibrant landing page and music discovery portal celebrating Japanese anime theme songs and anisong culture.",
      tags: ["Landing Page", "UI Design", "Web Design", "React"],
      metrics: [
        { label: "Performance", value: "98/100" }
      ],
      liveUrl: "https://annchan-anisong-jp.vercel.app/",
      githubUrl: "https://github.com/Kimm-chii/annchan-anisong-jp",
      challenge: "Create a modern digital space for an anisong artist that feels immersive, easy to navigate, and visually aligned with Japanese music culture.",
      solution: "Built a responsive artist landing page featuring a hero section, music-focused content sections, interactive UI elements, and a clean visual system designed for fans to explore the artist's work.",
      deliverables: ["Landing Page Development", "UI Design", "Responsive Web Design", "Web Graphics"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      id: "restaurant-concept",
      title: "Restaurant Concept",
      subtitle: "Minimal - Japanese Dining",
      category: "Restaurant",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/project-3.webp",
      bannerImage: "/assets/project-3.webp",
      galleryImages: [
        "/assets/project-3.webp"
      ],
      summary: "A minimal restaurant website concept designed for local businesses, featuring a premium menu-focused experience inspired by Japanese minimalism and Yohaku (余白).",
      tags: ["Restaurant Website", "Landing Page", "UI Design", "React"],
      metrics: [
        { label: "Performance", value: "98/100" }
      ],
      liveUrl: "https://k-restaurant-concept.vercel.app/",
      githubUrl: "https://github.com/Kimm-chii/restaurant-concept",
      challenge: "Design a modern restaurant website that prioritizes the customer experience by making the menu, contact information, and location easily accessible while maintaining a premium and minimalist aesthetic suitable for real local businesses.",
      solution: "Built a responsive restaurant website centered around a beautifully organized full menu, clean navigation, subtle interactions, and a refined visual system inspired by Japanese minimalism. The design emphasizes readability, generous whitespace, and practical usability for both desktop and mobile users.",
      deliverables: ["Restaurant Website Design", "Menu Experience Design", "Responsive Web Design", "UI Design"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      id: "restaurant-concept",
      title: "Restaurant Concept",
      subtitle: "Modern - Japanese Dining",
      category: "Restaurant",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/project-4.webp",
      bannerImage: "/assets/project-4.webp",
      galleryImages: [
        "/assets/project-4.webp"
      ],
      summary: "A modern Japanese restaurant website concept inspired by Yohaku (余白), focused on minimalist design, responsive experiences, and interactive frontend development.",
      tags: ["Restaurant Website", "Landing Page", "UI Design", "React"],
      metrics: [
        { label: "Performance", value: "98/100" }
      ],
      liveUrl: "https://k-restaurant-modern.vercel.app/",
      githubUrl: "https://github.com/Kimm-chii/k-restaurant-modern",
      challenge: "Create a contemporary restaurant website that balances premium branding with practical usability, allowing visitors to effortlessly explore the menu, discover the restaurant's story, and access essential business information through a clean editorial experience.",
      solution: "Designed and developed a responsive restaurant website inspired by modern editorial layouts, combining elegant typography, immersive imagery, intuitive navigation, and subtle interactions. The experience emphasizes visual storytelling while maintaining fast navigation and excellent usability across desktop and mobile devices.",
      deliverables: ["Restaurant Website Design", "Editorial UI Design", "Responsive Web Design", "Frontend Development"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      id: "questlog-v12",
      title: "QuestLog",
      subtitle: "Gamified Gaming Archive",
      category: "Creative",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/project-2.webp",
      bannerImage: "/assets/project-2.webp",
      galleryImages: [
        "/assets/project-2.webp"
      ],
      summary: "An immersive landing page and dashboard application for tracking daily quests, habits, and gamified productivity.",
      tags: ["Landing Page", "Web Design", "UI Design", "TypeScript"],
      metrics: [
        { label: "UI Polish", value: "100%" }
      ],
      liveUrl: "https://k-questlog.vercel.app/",
      githubUrl: "https://github.com/Kimm-chii/questlog-gaming-journal",
      challenge: "Design a gaming journal that blends RPG-inspired progression with a clean, modern interface for tracking games and personal experiences.",
      solution: "Built a responsive React application featuring custom status badges, intuitive game tracking, and a polished interface inspired by RPG progression systems.",
      deliverables: ["Landing Page Development", "UI Design", "Responsive Design", "Custom Web Graphics"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      id: "sora-digital-space",
      title: "Performing Arts",
      subtitle: "Minimal - Performing Arts",
      category: "Studio",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/performing-arts.webp",
      bannerImage: "/assets/performing-arts.webp",
      galleryImages: "/assets/performing-arts.webp",
      summary: "A modern web platform exploring thoughtful interface design, fluid motion, and intentional negative space.",
      tags: ["UI Design", "Web Design", "Responsive Design", "TypeScript", "Tailwind CSS"],
      metrics: [
        { label: "Performance", value: "100%" }
      ],
      liveUrl: "https://k-performing-arts.vercel.app/",
      githubUrl: "https://github.com/Kimm-chii/k-performing-arts",
      challenge: "Create a modern digital experience that captures the energy of movement and artistic expression while making class information, programs, and studio details clear and accessible across all devices.",
      solution: "Designed a refined, responsive website using React, Tailwind CSS, and Motion, combining elegant typography, immersive visuals, smooth interactions, and intuitive navigation to reflect a contemporary performing arts studio.",
      deliverables: ["Brand Identity & UI Design", "Frontend Development", "Responsive Website Design", "Interactive User Experience"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"]
    }
    /*{
      id: "project-pulse",
      title: "Project Pulse",
      subtitle: "Real-time Audio Visualizer & Frontend Lab",
      category: "Web Application",
      featured: false,
      year: "2026",
      client: "Personal Project",
      thumbnail: projectPulseImg,
      bannerImage: projectPulseImg,
      galleryImages: [projectPulseImg],
      summary: "A sleek frontend dashboard concept designed for audio visualization, wave monitoring, and interactive sound design controls.",
      tags: ["Web Application", "Audio Viz", "React", "TypeScript"],
      metrics: [
        { label: "Usability", value: "100%" }
      ],
      liveUrl: "https://github.com/Kimm-chii",
      githubUrl: "https://github.com/Kimm-chii/pulse-audio-lab",
      challenge: "Build a responsive audio dashboard interface that renders clean charts and sound wave meters with fluid animations.",
      solution: "Implemented an optimized dashboard UI with smooth Web Audio APIs, custom sound controls, and modular widget cards.",
      deliverables: ["Dashboard UI", "Frontend Development", "Component Architecture"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Motion"]
    }*/
  ],
  experiences: [
    {
      id: "exp-1",
      period: "2023 — Present",
      role: "Frontend Developer & Web Designer",
      company: "Kim Studio",
      location: "Remote",
      description: "Crafting modern web apps, landing pages, and UI designs.",
      highlights: [
        "Built responsive web applications with clean React, TypeScript & Tailwind CSS architectures.",
        "Crafted UI layouts, graphic assets, and high-converting landing pages."
      ],
      skills: ["Frontend Development", "Web Design", "UI Design", "React", "Tailwind CSS"]
    }
  ],
  services: [],
  skillCategories: [
    {
      category: "Development & Design",
      skills: [
        { name: "Frontend Development", level: 100, description: "React, Vite, TypeScript, and Tailwind CSS with a focus on responsive web experiences." },
        { name: "Web & UI Design", level: 100, description: "Interface systems, visual layouts, wireframing, and responsive design principles." },
        { name: "Landing Pages", level: 100, description: "Hero sections, content structure, visual storytelling, and user-focused layouts." },
        { name: "Deployment & Tools", level: 100, description: "Vercel, Netlify, Cloudflare, and Git-based workflows." }
      ]
    }
  ],
  processSteps: [],
  testimonials: [],
  faqs: []
};

