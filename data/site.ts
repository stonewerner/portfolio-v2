export const site = {
  name: "Stone Werner",
  tagline:
    "Building at the intersection of AI, startups, and how people win online.",
  meta: "Software engineer · NYC · UC Berkeley CS",
  email: "hello@stonewerner.com",
  photo: "/stone.jpg",
  links: {
    instagram: "https://www.instagram.com/stone.werner/",
    tiktok: "https://www.tiktok.com/@stone.werner",
    linkedin: "https://www.linkedin.com/in/stonewerner",
    github: "https://github.com/stonewerner",
    bookCall: "https://cal.com/stonewerner/30min",
    resume: "/Stone_Werner_Resume.pdf",
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
  "Full-stack software engineer building AI-powered products in NYC. Currently at Maintouch.",
  "CS from UC Berkeley — foundation in AI, systems, and shipping real software.",
  "Side projects before and alongside the job: AI dev tools and products people actually use.",
  "Co-founded The SASI Store and shipped freelance products for businesses that needed more than a template.",
  "Creating content on tech, startups, AI, VC, personal finance, and fitness on Instagram and TikTok.",
] as const;

export const personalityLine =
  "When I'm not building, you'll find me surfing, playing beach volleyball, or in the gym.";

export const workItems = [
  {
    title: "CodeAIDE",
    description: "AI-powered online IDE for learning, debugging, and shipping faster.",
    href: "https://code-aide.vercel.app/",
  },
  {
    title: "IntelliDrive",
    description:
      "AI search over your notes and course materials — your knowledge base, instantly accessible.",
    href: "https://intellidrive.xyz",
  },
  {
    title: "Basechat",
    description:
      "Multi-tenant chatbot using RAG to let organizations talk to their own knowledge base.",
    href: "https://github.com/stonewerner/basechat",
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
    title: "Follow for tech, startups, and builder content",
    platform: "Instagram",
    href: "https://www.instagram.com/stone.werner/",
  },
  {
    title: "More content coming soon",
    platform: "TikTok",
    href: "https://www.tiktok.com/@stone.werner",
  },
] as const;

export const experienceItems = [
  {
    role: "Software Engineer",
    company: "Maintouch",
    period: "2024 — present",
    description: "Building AI-powered SEO and search automation for B2B.",
  },
  {
    role: "Software Engineering Resident",
    company: "Headstarter AI",
    period: "2024",
    description:
      "Built 9 AI projects — RAG pipelines, agents, and production patterns with OpenAI and vector DBs.",
  },
  {
    role: "Co-founder, CTO",
    company: "The SASI Store",
    period: "2023 — 2024",
    description:
      "Co-founded an e-commerce store to raise funds for causes we cared about. Built and shipped the platform.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2022 — 2024",
    description:
      "Websites and products for businesses — from idea to deployed, production-ready software.",
  },
] as const;

export const bookCallCopy = {
  title: "Book a call",
  description:
    "Paid 1:1 calls on whatever you want to talk about — career, startups, AI, building online, or thinking out loud with someone in the arena.",
  cta: "Book a call",
} as const;

export const contactLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Instagram", href: site.links.instagram },
  { label: "TikTok", href: site.links.tiktok },
] as const;
