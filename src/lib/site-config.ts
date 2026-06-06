export const siteConfig = {
  name: "EnvoyDirect",
  title: "EnvoyDirect // Software Architect & Strategist",
  description:
    "EnvoyDirect is the umbrella studio behind VeloMail, MetroRate, and RadarAI. Building high-performance digital utilities, secure pipeline automation, and conversion-focused front ends.",
  email: "contact@envoydirect.io",
  location: "ONTARIO, CA",
  timezone: "America/Toronto",
  url: "https://envoydirect-portfolio.vercel.app",
  links: {
    github: "https://github.com/velomail",
    linkedin: "https://linkedin.com/in/jesseenvoy",
    upwork: "https://www.upwork.com/freelancers/~01envoydirect",
    fiverr: "https://www.fiverr.com/envoydirect",
    radarai: "https://rapidai-velomails-projects.vercel.app",
  },
} as const;

export type Project = {
  id: string;
  number: string;
  name: string;
  status: string;
  statusTone: "live" | "progress" | "development";
  coreUtility: string;
  functionalImpact: string;
  tags: string[];
  demo: "radarai" | "velomail" | "metrorate";
};

export const projects: Project[] = [
  {
    id: "01",
    number: "01",
    name: "RadarAI",
    status: "LIVE & DEPLOYED",
    statusTone: "live",
    coreUtility:
      "A precision job-search aggregator and automated resume-matching engine designed to crawl, parse, and match candidates to active pipelines using custom semantic scoring vectors.",
    functionalImpact:
      "Reduces manual search overhead by programmatically aggregating target roles and auditing resume alignment instantly.",
    tags: ["Next.js", "TailwindCSS", "LLM Vector Embedding API", "Node.js"],
    demo: "radarai",
  },
  {
    id: "02",
    number: "02",
    name: "VeloMail",
    status: "PERFORMANCE OPTIMIZATION",
    statusTone: "progress",
    coreUtility:
      "A real-time mobile email preview engine engineered to parse, validate, and preview responsive code layouts across disparate viewport footprints instantly.",
    functionalImpact:
      "Eliminates cross-client layout degradation for digital marketers, ensuring pixel-perfect compliance before pipeline dispatch.",
    tags: ["TypeScript", "Web Rendering Engines", "Next.js API Routes"],
    demo: "velomail",
  },
  {
    id: "03",
    number: "03",
    name: "MetroRate",
    status: "ACTIVE SPRINT DEVELOPMENT",
    statusTone: "development",
    coreUtility:
      "An automated financial utility dashboard built for sales representatives to track custom commission structures, multi-tier quotas, and real-time performance analytics.",
    functionalImpact:
      "Provides granular financial forecasting and removes manual commission auditing bottlenecks through real-time data visualization.",
    tags: ["React", "TailwindCSS", "Financial Data Streams", "Local Storage State"],
    demo: "metrorate",
  },
];

export const roadmapPhases = [
  {
    phase: "PHASE_01",
    status: "ACTIVE",
    tone: "active" as const,
    description:
      "Deploying freelance capabilities across Upwork and Fiverr for custom application development, automation hooks, and high-conversion landing pages.",
  },
  {
    phase: "PHASE_02",
    status: "UPCOMING",
    tone: "upcoming" as const,
    description:
      "Structuring advanced data dashboard frameworks, secure multi-tenant user authentication, and optimized state management systems for complex data utilities.",
  },
  {
    phase: "PHASE_03",
    status: "HORIZON",
    tone: "horizon" as const,
    description:
      "Integrating machine learning APIs and advanced automated scrapers with large-scale data visualization pipelines and niche SaaS utilities.",
  },
];

export const services = [
  {
    title: "Custom Web Utilities",
    description:
      "Full-stack apps, internal operational tools, and tailored analytics dashboards wrapped in premium, minimalist glass UI tokens.",
    icon: "boxes" as const,
  },
  {
    title: "Workflow Automation Pipelines",
    description:
      "Secure API integration, custom web scrapers, data loops, and LLM orchestration to systematically eliminate manual corporate friction.",
    icon: "workflow" as const,
  },
  {
    title: "Data-Driven Front Ends",
    description:
      "Blazing fast front-end architectures optimized for software tools, business products, and lightning-quick technical landing pages.",
    icon: "gauge" as const,
  },
];
