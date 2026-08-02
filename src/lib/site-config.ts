export const siteConfig = {
  name: "Envoy Direct",
  brand: "ENVOY DIRECT",
  title: "Envoy Direct — Production-ready software, by Jesse",
  seoTitle: "Envoy Direct — Freelance MVP Developer | Production-Ready Software",
  description:
    "Envoy Direct is a one-person software studio in Ontario, Canada. Jesse builds production-ready MVPs, workflow automations, and UI systems for founders — from idea to launch, no agency hand-offs.",
  seoDescription:
    "Hire Jesse at Envoy Direct to build production-ready MVPs, workflow automations, and UI systems. Independent full-stack developer in Ontario, Canada — from idea to launch.",
  email: "jesse03hiles@gmail.com",
  contactEmail: "jesse03hiles@gmail.com",
  location: "Ontario, Canada",
  timezone: "America/Toronto",
  url: "https://envoydirect.co",
  founder: "Jesse Envoy",
  links: {
    github: "https://github.com/velomail",
    linkedin: "https://www.linkedin.com/in/jesse-hiles-685a86210/",
    fiverr:
      "https://www.fiverr.com/envoydirect/build-a-nextjs-mvp-or-full-production-web-app-with-supabase",
  },
} as const;

export const heroStats = [
  { value: "2", label: "Client projects" },
  { value: "48h", label: "Reply time" },
  { value: "100%", label: "Direct, no hand-offs" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Fiverr", href: siteConfig.links.fiverr },
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
    description: "Working UI and core logic in the first few days — a real product preview.",
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
    id: "stay-connected",
    name: "Stay Connected",
    status: "Shipped",
    tagline: "Digital literacy for seniors.",
    description:
      "Simple, patient digital literacy help for seniors — and peace of mind for the people who love them. Group classes, one-on-one sessions, and workshops across the Greater Toronto Area.",
    stack: ["Next.js", "React", "Supabase", "Resend"],
    previewImage: "/stay-connected-preview.png",
    appUrl: "https://stay-connected-eta.vercel.app",
    caseStudy: {
      problem:
        "Seniors and caretakers needed a calm, trustworthy way to book patient digital help — without overwhelming marketing sites or agency friction.",
      approach:
        "Designed a dual-audience experience: large, clear paths for seniors; reassurance and booking control for adult children. Blue-and-white trust palette, step-by-step flows, persistent phone and email anchors.",
      shipped:
        "Public marketing site, multi-step booking wizard, newsletter capture, resource blog, and a password-protected admin CMS for bookings, posts, and metrics — all on Next.js with Supabase.",
    },
  },
  {
    id: "gunning-grounds",
    name: "Gunning Grounds Service",
    status: "Shipped",
    tagline: "Residential & commercial maintenance that shows.",
    description:
      "A brand-forward marketing site for lawn care, seasonal clean-ups, and junk removal — with an interactive scope builder, quote requests, and an admin dashboard for leads and analytics.",
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    previewImage: "/gunning-grounds-preview.png",
    appUrl: "https://gunning-grounds.vercel.app",
    caseStudy: {
      problem:
        "A growing property maintenance business needed a professional web presence and reliable lead capture — not a generic template that undersold the quality of their work.",
      approach:
        "Built a high-impact hero-led site with clear service hierarchy, mobile-first CTAs, a step-by-step scope builder for custom quotes, and trust anchors across testimonials and contact flows.",
      shipped:
        "Full marketing site, scope builder + quote modal, Supabase-backed quote and contact storage, page analytics, and a password-protected admin dashboard — deployed on Vercel.",
    },
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
  "freelance MVP developer",
  "production-ready software",
  "independent software developer Ontario",
  "full-stack MVP development",
  "hire freelance developer Canada",
];
