export const siteConfig = {
  name: "Envoy Direct",
  brand: "ENVOY DIRECT",
  title: "Envoy Direct — Software that ships, by Jesse",
  seoTitle: "Envoy Direct — Software that ships, by Jesse",
  description:
    "Envoy Direct is a one-person software studio in Ontario, Canada. Jesse builds MVPs, workflow automations, and UI systems for founders who need working software fast — scope to deployment, no agency hand-offs.",
  seoDescription:
    "Envoy Direct is a one-person software studio in Ontario, Canada. Jesse builds MVPs, workflow automations, and UI systems for founders who need working software fast — scope to deployment, no agency hand-offs.",
  email: "hello@envoydirect.co",
  contactEmail: "hello@envoydirect.co",
  location: "Ontario, Canada",
  timezone: "America/Toronto",
  url: "https://envoydirect.co",
  founder: "Jesse Envoy",
  links: {
    github: "https://github.com/velomail",
    linkedin: "https://linkedin.com/in/jesseenvoy",
    upwork: "https://www.upwork.com/freelancers/~01envoydirect",
    fiverr: "https://www.fiverr.com/envoydirect",
  },
} as const;

export const heroStats = [
  { value: "3", label: "Products shipped" },
  { value: "48h", label: "Reply time" },
  { value: "100%", label: "Direct, no hand-offs" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Fiverr", href: siteConfig.links.fiverr },
  { label: "Upwork", href: siteConfig.links.upwork },
] as const;

export const aboutPoints = [
  "You work directly with me — design, engineering, and deployment.",
  "Scoped timelines and preview links shared early, every week.",
  "Clear communication throughout. No agency hand-offs, ever.",
  "Limited client roster, so every project gets real attention.",
] as const;

export const aboutParagraphs = [
  "I'm an independent software developer based in Ontario, Canada. I founded Envoy Direct as a one-person studio for founders and small teams who need software shipped fast — without the overhead, account managers, or hand-offs of an agency.",
  "I take on MVPs, workflow automations, and UI builds. Scoped timelines, preview links early, and a direct line to the person actually writing the code.",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Scope",
    description: 'Define the problem, timeline, and what "done" actually looks like.',
  },
  {
    step: "02",
    title: "Prototype",
    description: "Working UI and core logic in the first few days — not a deck.",
  },
  {
    step: "03",
    title: "Ship",
    description: "A deployed preview URL, ready to test and share with your team.",
  },
  {
    step: "04",
    title: "Iterate",
    description: "Direct access to refine, automate, or hand off cleanly.",
  },
] as const;

export const featuredProjects = [
  {
    id: "velomail",
    name: "VeloMail",
    status: "Shipped",
    tagline: "Mobile email previews, in real time.",
    description:
      "A real-time mobile email preview app and standalone studio workspace. Developers and marketers instantly visualize, test, and perfect how their emails render on mobile devices as they build them.",
    stack: ["Next.js", "React", "HTML parsing"],
  },
  {
    id: "metrorate",
    name: "MetroRate",
    status: "Shipped",
    tagline: "Commission tracking that keeps the next number in view.",
    description:
      "A premium, high-fidelity sales commission tracker for high-performing reps. Complex commission structures become a clear, gamified performance interface that keeps the next number in view.",
    stack: ["Next.js", "React", "PostgreSQL"],
  },
  {
    id: "radarai",
    name: "RadarAI",
    status: "Shipped",
    tagline: "Resume-to-job matching, automated.",
    description:
      "An advanced, automated resume-matching and job aggregator. Scraping logic and intelligent processing scan job markets, analyze resumes, and surface high-compatibility roles instantly.",
    stack: ["Next.js", "Python", "AI"],
  },
];

export const services = [
  {
    title: "Full-stack MVPs",
    description: "Production-ready products — auth, UI, API, and deployment.",
    deliverables: ["Core flows", "API + database", "Deploy", "Docs"],
  },
  {
    title: "Workflow automation",
    description: "Scrapers, webhooks, and pipelines for repetitive work.",
    deliverables: ["Data pipelines", "Integrations", "Orchestration", "Monitoring"],
  },
  {
    title: "UI engineering",
    description: "Responsive, accessible interfaces built precisely to spec.",
    deliverables: ["Components", "Motion polish", "Accessibility", "Design-to-code"],
  },
];

export const projectTypes = ["MVP", "Automation", "UI build", "Not sure yet"] as const;

export const seoKeywords = [
  "Envoy Direct",
  "Jesse Envoy",
  "independent software developer",
  "full-stack MVP development",
  "Ontario freelance developer",
];
