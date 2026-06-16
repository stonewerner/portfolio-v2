export const site = {
  name: "Stone Werner",
  tagline:
    "Software engineer working in AI, startups, and online media.",
  meta: "Software engineer · NYC · UC Berkeley CS",
  email: "hello@stonewerner.com",
  photo: "/blue_shirt_square.png",
  links: {
    instagram: "https://www.instagram.com/stone.werner/",
    tiktok: "https://www.tiktok.com/@stonewerner",
    linkedin: "https://www.linkedin.com/in/stonewerner",
    github: "https://github.com/stonewerner",
    bookCall: "https://cal.com/stonewerner/30min",
    resume: "/Stone_Werner_Resume.pdf",
    maintouch: "https://www.maintouch.com/",
  },
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Content", href: "#content" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutPoints = [
  "Full-stack software engineer based in NYC. Currently at Maintouch.",
  "BS in Computer Science from UC Berkeley. Focus areas: AI and systems.",
  "Develops AI developer tools and applications as independent projects.",
  "Co-founded The SASI Store and delivered freelance software for businesses.",
  "Creating content on technology, startups, AI, VC, personal finance, and fitness on Instagram and TikTok.",
] as const;

export const personalityLine =
  "Outside of work: surfing, beach volleyball, and weight training.";

export const workItems = [
  {
    title: "CodeAIDE",
    description: "AI-powered online IDE for learning, debugging, and code execution.",
    href: "https://github.com/stonewerner/CodeAIDE",
  },
  {
    title: "IntelliDrive",
    description:
      "AI search over notes and course materials. Provides retrieval across a personal knowledge base.",
    href: "https://github.com/stonewerner/IntelliDrive",
  },
  {
    title: "Basechat",
    description:
      "Multi-tenant chatbot using RAG to query organizational knowledge bases.",
    href: "https://github.com/ragieai/basechat",
  },
] as const;

export const contentPillars = [
  "Tech & AI",
  "Startups & VC",
  "Personal finance",
  "Fitness",
] as const;

export const reelLinks = [
  {
    title: "Content on technology, startups, and software development",
    platform: "Instagram",
    href: "https://www.instagram.com/stone.werner/",
  },
  {
    title: "More content coming soon",
    platform: "TikTok",
    href: "https://www.tiktok.com/@stonewerner",
  },
] as const;

export const experienceItems = [
  {
    role: "Software Engineer, Full Stack",
    company: "Maintouch",
    period: "November 2025 — present",
    description: "Building AI-powered SEO and search automation for B2B.",
  },
  {
    role: "Software Engineer, Full Stack",
    company: "Ragie AI",
    period: "March 2025 — November 2025",
    description:
      "Built agentic retrieval, billing, and core product for Base Chat — a RAG platform for talking to your knowledge base.",
  },
  {
    role: "Co-founder, CTO",
    company: "The SASI Store",
    period: "2023 — 2024",
    description:
      "Co-founded an e-commerce store to raise funds for causes we cared about. Built and shipped the platform.",
  },
  {
    role: "Software Engineer, Freelance",
    company: "Self-employed",
    period: "July 2023 — present",
    description:
      "Websites and products for businesses — from idea to deployed, production-ready software.",
  },
] as const;

export const bookCallCopy = {
  title: "Book a call",
  description:
    "Paid 1:1 calls on career, startups, AI, and building online.",
  cta: "Book a call",
} as const;

export const contactLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Instagram", href: site.links.instagram },
  { label: "TikTok", href: site.links.tiktok },
] as const;
