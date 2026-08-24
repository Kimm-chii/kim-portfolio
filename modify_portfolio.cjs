const fs = require('fs');
const file = 'src/data/portfolioData.ts';
let content = fs.readFileSync(file, 'utf8');

// The new project
const soraProject = `{
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
    }`;

// Find the projects array start
const startIdx = content.indexOf('projects: [') + 'projects: ['.length;

// We need to parse the projects array out, or we can just use regex/string replacement.
// Let's use a simpler approach: finding the string blocks.

const annchanStart = content.indexOf('{', startIdx);
const annchanEnd = content.indexOf('},', annchanStart) + 2;
const annchanStr = content.substring(annchanStart, annchanEnd);

// Find the kana practice end
const myBestAnimeStart = content.indexOf('{', annchanEnd);
const myBestAnimeEnd = content.indexOf('},', myBestAnimeStart) + 2;

const kanaPracticeStart = content.indexOf('{', myBestAnimeEnd);
const kanaPracticeEnd = content.indexOf('},', kanaPracticeStart) + 2;

// Reconstruct
const before = content.substring(0, startIdx);
const after = content.substring(kanaPracticeEnd);

const newContent = before + '\n    ' + soraProject + ',\n' + content.substring(myBestAnimeStart, kanaPracticeEnd) + '\n    ' + annchanStr.trim() + ',\n' + after.trimLeft();

fs.writeFileSync(file, newContent, 'utf8');
console.log("Updated portfolioData.ts");
