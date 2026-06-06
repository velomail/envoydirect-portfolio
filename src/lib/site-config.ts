export const siteConfig = {
  name: "EnvoyDirect",
  title: "EnvoyDirect // Software Architect & Strategist",
  seoTitle:
    "EnvoyDirect | Freelance Software Architect & SaaS Product Studio (Ontario)",
  description:
    "EnvoyDirect is the umbrella studio behind VeloMail, MetroRate, and RadarAI. Building high-performance digital utilities, secure pipeline automation, and conversion-focused front ends.",
  seoDescription:
    "Hire EnvoyDirect for custom SaaS development, workflow automation, and product landing pages. Studio behind VeloMail, MetroRate & RadarAI. Based in Ontario, Canada.",
  email: "contact@envoydirect.io",
  location: "Ontario, Canada",
  locationShort: "ONTARIO, CA",
  timezone: "America/Toronto",
  url: "https://envoydirect-portfolio.vercel.app",
  founder: "Jesse Envoy",
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
  slug: string;
  status: string;
  statusTone: "live" | "progress" | "development";
  coreUtility: string;
  functionalImpact: string;
  seoDescription: string;
  tags: string[];
  demo: "radarai" | "velomail" | "metrorate";
};

export const projects: Project[] = [
  {
    id: "01",
    number: "01",
    name: "RadarAI",
    slug: "radarai",
    status: "LIVE & DEPLOYED",
    statusTone: "live",
    coreUtility:
      "A precision job-search aggregator and automated resume-matching engine designed to crawl, parse, and match candidates to active pipelines using custom semantic scoring vectors.",
    functionalImpact:
      "Reduces manual search overhead by programmatically aggregating target roles and auditing resume alignment instantly.",
    seoDescription:
      "RadarAI is an AI-powered job search and resume matching SaaS that automates candidate pipeline discovery for professionals and recruiters.",
    tags: ["Next.js", "TailwindCSS", "LLM Vector Embedding API", "Node.js"],
    demo: "radarai",
  },
  {
    id: "02",
    number: "02",
    name: "VeloMail",
    slug: "velomail",
    status: "PERFORMANCE OPTIMIZATION",
    statusTone: "progress",
    coreUtility:
      "A real-time mobile email preview engine engineered to parse, validate, and preview responsive code layouts across disparate viewport footprints instantly.",
    functionalImpact:
      "Eliminates cross-client layout degradation for digital marketers, ensuring pixel-perfect compliance before pipeline dispatch.",
    seoDescription:
      "VeloMail is a browser email preview tool for marketers and sales teams who need mobile and desktop render QA before send.",
    tags: ["TypeScript", "Web Rendering Engines", "Next.js API Routes"],
    demo: "velomail",
  },
  {
    id: "03",
    number: "03",
    name: "MetroRate",
    slug: "metrorate",
    status: "ACTIVE SPRINT DEVELOPMENT",
    statusTone: "development",
    coreUtility:
      "An automated financial utility dashboard built for sales representatives to track custom commission structures, multi-tier quotas, and real-time performance analytics.",
    functionalImpact:
      "Provides granular financial forecasting and removes manual commission auditing bottlenecks through real-time data visualization.",
    seoDescription:
      "MetroRate is a sales commission calculator and payout forecasting dashboard built for B2B revenue teams.",
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
      "Full-stack SaaS apps, internal operational tools, and tailored analytics dashboards wrapped in premium, minimalist glass UI tokens.",
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
      "Blazing fast front-end architectures optimized for software tools, startup product pages, and lightning-quick technical landing pages.",
    icon: "gauge" as const,
  },
];

export const faqItems = [
  {
    question: "What is EnvoyDirect?",
    answer:
      "EnvoyDirect is a software architecture studio and product umbrella based in Ontario, Canada. We design, build, and ship production-grade digital utilities for startups, sales teams, and enterprise operators — including VeloMail, MetroRate, and RadarAI.",
  },
  {
    question: "What freelance development services does EnvoyDirect offer?",
    answer:
      "EnvoyDirect offers custom full-stack web development, workflow automation, API integrations, internal business tools, SaaS MVP builds, and high-conversion startup landing pages. Engagements are available through direct contact, Upwork, and Fiverr.",
  },
  {
    question: "What is VeloMail and who is it for?",
    answer:
      "VeloMail is a real-time email render preview utility for marketers, sales reps, and email developers. It lets teams validate mobile and desktop layouts before sending, reducing broken renders across Gmail, Outlook, and Apple Mail.",
  },
  {
    question: "What does MetroRate do for sales teams?",
    answer:
      "MetroRate is a commission calculation and payout forecasting tool for B2B sales representatives. It replaces spreadsheet math with live deal-size, split, rate, and tax inputs so reps can audit earnings instantly.",
  },
  {
    question: "How does RadarAI help job seekers?",
    answer:
      "RadarAI aggregates active job listings, parses requirements, and scores resume alignment using semantic matching. It reduces manual search time by surfacing roles that fit a candidate's skills and experience profile.",
  },
  {
    question: "How do I hire EnvoyDirect for a custom software project?",
    answer:
      "Email contact@envoydirect.io with your scope, timeline, and budget range. You can also connect via LinkedIn, Upwork, or Fiverr. Typical projects include SaaS MVPs, automation pipelines, and product marketing sites.",
  },
];

export const seoKeywords = [
  "freelance software architect Ontario",
  "custom SaaS development Canada",
  "startup product studio",
  "workflow automation developer",
  "VeloMail email preview tool",
  "MetroRate commission calculator",
  "RadarAI job search automation",
  "Next.js freelance developer",
  "B2B internal tools development",
  "high conversion landing page developer",
];
