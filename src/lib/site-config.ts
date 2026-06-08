export const siteConfig = {
  name: "Envoy Direct",
  brand: "ENVOY DIRECT",
  title: "Envoy Direct — Independent Developer Shipping High-Utility Software",
  seoTitle: "Envoy Direct | Independent Software Developer & Product Studio",
  description:
    "Envoy Direct is a one-person software lab building lean, functional utilities and high-performance interfaces for founders who value velocity over bureaucracy.",
  seoDescription:
    "Independent developer building VeloMail, RadarAI, and MetroRate. Full-stack MVP development, workflow automation, and premium UI engineering from Ontario, Canada.",
  email: "hello@envoydirect.co",
  contactEmail: "hello@envoydirect.co",
  location: "Ontario, Canada",
  url: "https://envoydirect.co",
  founder: "Jesse Envoy",
  links: {
    github: "https://github.com/velomail",
    linkedin: "https://linkedin.com/in/jesseenvoy",
    upwork: "https://www.upwork.com/freelancers/~01envoydirect",
    fiverr: "https://www.fiverr.com/envoydirect",
    radarai: "https://rapidai-velomails-projects.vercel.app",
  },
} as const;

export const featuredProjects = [
  {
    id: "velomail",
    name: "VeloMail",
    tag: "STUDIO · V1",
    description:
      "A real-time email render preview engine. Parse, validate, and preview responsive code layouts across disparate viewport footprints instantly.",
    href: "#software",
    visual: "velomail" as const,
  },
  {
    id: "radarai",
    name: "RadarAI",
    tag: "AGGREGATOR · BETA",
    description:
      "A precision job-search aggregator and automated resume-matching engine designed to crawl, parse, and match candidates to active pipelines.",
    href: siteConfig.links.radarai,
    visual: "radarai" as const,
  },
  {
    id: "metrorate",
    name: "MetroRate",
    tag: "DASHBOARD · LIVE",
    description:
      "An automated financial utility dashboard built for sales representatives to track custom commission structures and real-time performance analytics.",
    href: "#software",
    visual: "metrorate" as const,
  },
];

export const services = [
  {
    title: "Full-Stack MVP Development",
    description:
      "Fully functional, production-ready minimum viable products built from scratch at high speed — architected to scale the moment they ship.",
  },
  {
    title: "Agentic Workflow & API Automation",
    description:
      "Automated backend pipelines, custom web scrapers, data-routing solutions, and AI-native tooling (n8n, custom orchestrators) that streamline business workflows end-to-end.",
  },
  {
    title: "Premium UI/UX Engineering",
    description:
      "Translating complex application logic into fluid, polished, interactive, and fully responsive interfaces that feel as considered as they perform.",
  },
];

export const aboutParagraphs = [
  "I run Envoy Direct as a fast-moving, one-person software studio. By leaning on modern AI-native tooling, rapid prototyping frameworks, and agile workflows, I build software in days rather than months — without the overhead, hand-offs, or theatre of a traditional agency.",
  "My focus is entirely on shipping high-utility software and solving real technical problems: writing the architecture, building the product, wiring the automations, and getting it in front of users. If it ships and it's useful, it counts.",
];

export const seoKeywords = [
  "independent software developer",
  "full-stack MVP development",
  "workflow automation developer",
  "VeloMail",
  "RadarAI",
  "MetroRate",
  "Ontario freelance developer",
  "AI-native software studio",
];
