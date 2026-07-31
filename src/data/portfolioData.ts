import { PortfolioData } from '../types';

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
      category: "Artist Website",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/project-1.png",
      bannerImage: "/assets/project-1.png",
      galleryImages: [
        "/assets/project-1.png"
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
      id: "questlog-v12",
      title: "QuestLog",
      subtitle: "Gamified Gaming Archive",
      category: "Gaming Journal",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/project-2.png",
      bannerImage: "/assets/project-2.png",
      galleryImages: [
        "/assets/project-2.png"
      ],
      summary: "An immersive landing page and dashboard application for tracking daily quests, habits, and gamified productivity.",
      tags: ["Landing Page", "Web Design", "UI Design", "TypeScript"],
      metrics: [
        { label: "UI Polish", value: "100%" }
      ],
      liveUrl: "https://questlog-v12.vercel.app/",
      githubUrl: "https://github.com/Kimm-chii/questlog-gaming-journal",
      challenge: "Design a gaming journal that blends RPG-inspired progression with a clean, modern interface for tracking games and personal experiences.",
      solution: "Built a responsive React application featuring custom status badges, intuitive game tracking, and a polished interface inspired by RPG progression systems.",
      deliverables: ["Landing Page Development", "UI Design", "Responsive Design", "Custom Web Graphics"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    }
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

