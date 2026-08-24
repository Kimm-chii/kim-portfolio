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
      "My work focuses on crafting responsive web experiences that balance design, functionality, and technology, using tools like React, Vite, TypeScript, and Tailwind CSS. Four years of professional experience in Data Quality and QA shape how I work: detail-driven, process-minded, and focused on getting things right.",
      "Rooted in minimalism and functional design (余白 - Yohaku, the beauty of open space), this site serves as my digital corner and garden, a place to showcase live web projects, interface designs, front-end craft, and the CRM systems I build to connect them to real business workflows."
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
        title: "CRM & Automation",
        desc: "Building GoHighLevel systems that connect custom websites to real business workflows, lead capture, pipelines, and automated follow-ups."
      },
      {
        title: "Digital Craft",
        desc: "Combining technology, typography, motion, and detail-oriented design to create polished and memorable web experiences."
      }
    ]
  },
  projects: [
    {
      id: "sora-digital-crm",
      title: "Sora Digital",
      subtitle: "Digital Services Studio & CRM Automation",
      category: "web app",
      featured: true,
      year: "2026",
      client: "Sora Digital",
      thumbnail: "/assets/sora-digital.webp",
      bannerImage: "/assets/sora-digital.webp",
      galleryImages: ["/assets/sora-digital.webp"],
      summary: "A fictional digital services studio showcasing landing page design and bespoke wedding experiences, connected end-to-end to a working GoHighLevel CRM automation system.",
      tags: ["Web App", "CRM Automation", "React", "GoHighLevel"],
      metrics: [],
      liveUrl: "#",
      githubUrl: "#",
      walkthroughUrl: "https://www.loom.com/share/dfa8a2fb685245c6ad0f65ce8d1d6c64",
      challenge: "Design a digital services studio site that could showcase multiple client-style projects, landing pages, wedding invitation sites, and an e-commerce concept, while connecting inquiries directly into a working CRM system instead of manual follow-up.",
      solution: "Built a responsive React site for Sora Digital, a fictional digital studio specializing in landing pages and bespoke wedding services. The site features two showcased sub-projects, a wedding invitation site with intro animation, venue details, and the couple's story, and a ring e-commerce concept, alongside a custom inquiry form wired to GoHighLevel. Leads flow into a four-stage pipeline (New Inquiry → Consultation → Proposal/Deposit → Completed) with automated confirmation emails, follow-ups, and tagging.",
      deliverables: ["Website Design & Development", "Custom Form Integration", "CRM Setup (GoHighLevel)", "Workflow & Automation Design", "Pipeline Configuration"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "GoHighLevel"]
    },
{
      id: "my-best-anime",
      title: "My Best Anime",
      subtitle: "Personal - Editorial Anime Archive",
      category: "Web App",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/my-best-anime.webp",
      bannerImage: "/assets/my-best-anime.webp",
      galleryImages: [
        "/assets/my-best-anime.webp"
      ],
      summary: "A personal editorial anime archive that lets users curate their favorite anime, save their collection locally, and export it as a custom archive poster.",
      tags: ["Web App", "Editorial Design", "Anime Archive", "API Integration"],
      metrics: [
        { label: "Performance", value: "98/100" }
      ],
      liveUrl: "https://my-best-anime.pages.dev/",
      githubUrl: "https://github.com/Kimm-chii/my-best-anime",
      challenge: "Create a simple and visually distinctive way for anime fans to showcase their personal favorites without relying on accounts, databases, or a conventional catalog-style interface.",
      solution: "Built an editorial-style anime archive with AniList GraphQL integration for anime search and cover artwork. Users can curate a personal collection, save their selections locally, and generate a customized aspect ratio of their choosing in high-resolution archive poster for downloading or sharing through the native mobile share experience.",
      deliverables: [
        "Anime Archive Web App",
        "Editorial UI Design",
        "AniList API Integration",
        "Local Collection Storage",
        "Poster Export System",
        "Responsive Web Design"
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "AniList GraphQL API",
        "IndexedDB"
      ]
    },
    {
      id: "kana-practice",
      title: "Kana Practice",
      subtitle: "Japanese Kana & Reading",
      category: "Japanese Learning",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/kana-practice.webp",
      bannerImage: "/assets/kana-practice.webp",
      galleryImages: [
        "/assets/kana-practice.webp"
      ],
      summary: "A gentle Japanese learning app for practicing Hiragana, Katakana, and N5-level reading through interactive quizzes, progress tracking, and furigana-supported passages.",
      tags: ["Japanese Learning", "Hiragana", "Katakana", "Reading Practice", "React"],
      metrics: [
        { label: "Kana", value: "104+" },
        { label: "Reading", value: "N5 Level" }
      ],
      liveUrl: "https://kana-practice-jp.pages.dev/",
      githubUrl: "https://github.com/Kimm-chii/",
      challenge: "Create a focused and approachable Japanese learning experience that makes kana practice feel less repetitive while helping learners build familiarity through quizzes, progress tracking, and simple reading exercises.",
      solution: "Designed and developed a soft, Sakura-inspired Japanese learning interface with interactive Hiragana and Katakana quizzes, randomized practice, accuracy tracking, streaks, progress statistics, and furigana-supported N5-level reading passages. The experience is designed to stay lightweight, accessible, and comfortable across desktop and mobile devices.",
      deliverables: [
        "Japanese Learning App",
        "Kana Quiz Experience",
        "Progress Tracking",
        "Reading Practice",
        "Responsive Web Design",
        "Frontend Development"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "IndexedDB"]
    },
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
      caseStudyUrl: "https://annchan-anisong-jp.vercel.app/",
      githubUrl: "https://github.com/Kimm-chii/annchan-anisong-jp",
      challenge: "Create a digital space for an anisong artist that feels immersive and visually rooted in Japanese music culture, while staying easy for fans to navigate.",
      solution: "Designed and built a responsive landing page with a dedicated hero, music-focused content sections, and interactive UI elements, giving fans a clean, focused space to explore the artist's work.",
      deliverables: ["Landing Page Development", "UI Design", "Responsive Web Design", "Web Graphics"],
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
      galleryImages: ["/assets/performing-arts.webp"],
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
      id: "restaurant-concept-modern",
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
      id: "kotonoha",
      title: "Kotonoha",
      subtitle: "Japanese - Writing Practice",
      category: "Japanese Learning",
      featured: true,
      year: "2026",
      client: "Personal Project",
      thumbnail: "/assets/kotonoha-home.webp",
      bannerImage: "/assets/kotonoha-home.webp",
      galleryImages: [
        "/assets/kotonoha-home.webp"
      ],
      summary: "A local-first Japanese writing practice app designed as a simple personal diary for practicing vocabulary, sentence structure, and everyday Japanese writing.",
      tags: ["Japanese Learning", "Diary App", "Local-First", "UI Design"],
      metrics: [
        { label: "Storage", value: "100% Local" }
      ],
      liveUrl: "https://kotonoha-note-jp.pages.dev/",
      githubUrl: "https://github.com/Kimm-chii/kotonoha-jp",
      challenge: "Create a simple and distraction-free space for practicing Japanese through regular writing while keeping personal diary entries private, accessible, and easy to back up.",
      solution: "Designed and developed a local-first Japanese diary with autosave, customizable typography, editable entry dates, entry search, optional English translations and notes, and vocabulary marking for later review. Added Export/Import functionality so users can maintain their own backups without requiring accounts or a backend.",
      deliverables: [
        "Japanese Writing Practice App",
        "Diary UI Design",
        "Local Data Persistence",
        "Entry Search Experience",
        "Vocabulary Review Workflow",
        "Export / Import System",
        "Responsive Web Design"
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "IndexedDB",
        "Yomitan"
      ]
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
        { name: "CRM & Automation", level: 100, description: "GoHighLevel, workflow automation, lead capture, pipeline management, conditional logic." },
        { name: "Data Quality & QA", level: 100, description: "Data validation, issue identification, structured documentation, quality-focused problem solving." },
        { name: "Deployment & Tools", level: 100, description: "Vercel, Netlify, Cloudflare, and Git-based workflows." }
      ]
    }
  ],
  processSteps: [],
  testimonials: [],
  faqs: []
};

