export const siteConfig = {
  name: "Envoy Direct",
  brand: "ENVOY DIRECT",
  title: "Envoy Direct — Website redesigns for local businesses",
  seoTitle: "Envoy Direct — Website redesigns for local businesses",
  description:
    "Envoy Direct is a one-person shop in Ontario, Canada. Jesse redesigns websites for local businesses — contractors, restaurants, dentists, and service shops — so customers can find you, trust you, and call or book. No agency hand-offs.",
  seoDescription:
    "Hire Jesse at Envoy Direct to redesign your local business website so it brings in customers. Independent designer and developer in Ontario, Canada — one person, from first conversation to launch.",
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
  { value: "1:1", label: "You work with me" },
  { value: "48h", label: "Reply time" },
  { value: "100%", label: "Direct, no hand-offs" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Fiverr", href: siteConfig.links.fiverr },
] as const;

export const aboutPoints = [
  "You work directly with me — design, build, and launch.",
  "Scoped timelines and preview links shared early, every week.",
  "Clear communication throughout. No agency hand-offs, ever.",
  "Limited client roster, so every project gets real attention.",
] as const;

export const aboutParagraphs = [
  "I'm an independent designer and developer in Ontario, Canada. Envoy Direct is a one-person shop for local businesses who need a site that brings in work — no account managers, no hand-offs.",
  "You get a clear timeline, preview links early, and a direct line to the person building the site.",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Scope",
    description: 'Define the problem, timeline, and what "done" actually looks like.',
  },
  {
    step: "02",
    title: "Preview",
    description:
      "You'll see real pages in the first few days — not a sketch. Something you can open on your phone.",
  },
  {
    step: "03",
    title: "Launch",
    description: "A live link you can share, test, and start sending customers to.",
  },
  {
    step: "04",
    title: "Refine",
    description: "We adjust copy, photos, and forms together until it feels right.",
  },
] as const;

export type Project = {
  id: string;
  name: string;
  status: string;
  tagline: string;
  description: string;
  outcomes: readonly string[];
  stack: readonly string[];
  stackLine: string;
  previewImage: string;
  appUrl?: string;
  caseStudy: {
    problem: string;
    approach: string;
    result: string;
  };
};

export const featuredProjects: Project[] = [
  {
    id: "gunning-grounds",
    name: "Gunning Grounds Service",
    status: "Shipped",
    tagline: "Lawn care and property maintenance that actually generates quotes.",
    description:
      "A professional site for a local grounds company — services, photos of real work, and a simple quote request so homeowners can ask for a price without playing phone tag. Built so it looks sharp on a phone and sends every lead somewhere you can actually see it.",
    outcomes: ["Quote requests", "Works on phones", "Lead inbox"],
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    stackLine: "Next.js + Supabase",
    previewImage: "/gunning-grounds-preview.png",
    appUrl: "https://gunning-grounds.vercel.app",
    caseStudy: {
      problem:
        "The work was strong, but the website didn't match it — and there was no reliable way for people to request a quote.",
      approach:
        "Clear services, photos that show the quality of the work, big buttons on mobile, and a step-by-step quote form instead of a generic contact box.",
      result:
        "A live marketing site, a custom quote flow, and a private dashboard for incoming leads — so the business can follow up instead of guessing who called.",
    },
  },
  {
    id: "stay-connected",
    name: "Stay Connected",
    status: "Shipped",
    tagline: "Software simple enough for anyone to use.",
    description:
      "Built for people who aren't comfortable with tech — large type, calm pages, and an obvious way to get in touch. The same standard I use for local business sites: if a non-technical person can't use it, it isn't done.",
    outcomes: ["Easy to read", "Simple booking", "Clear contact"],
    stack: ["Next.js", "React", "Supabase", "Resend"],
    stackLine: "Next.js + Supabase",
    previewImage: "/stay-connected-preview.png",
    appUrl: "https://stay-connected-eta.vercel.app",
    caseStudy: {
      problem:
        "Seniors and families needed a calm, trustworthy way to book patient digital help — without flashy sites that feel overwhelming.",
      approach:
        "Large type, clear steps, and persistent phone and email so someone who isn't comfortable with tech can still get through. The same bar I hold for a local business site.",
      result:
        "A public site, a simple booking flow, newsletter signup, and a private admin area for bookings and updates.",
    },
  },
];

export const otherBuilds: Project[] = [
  {
    id: "velomail",
    name: "VeloMail",
    status: "Shipped",
    tagline: "See your Gmail draft on a phone before you send.",
    description:
      "A free Chrome extension that mirrors your Gmail compose window in a live phone frame as you type — catch mobile layout issues without sending a test email. Privacy-local: nothing leaves your device.",
    outcomes: ["Live phone preview", "Works in Gmail", "Stays on your device"],
    stack: ["Chrome Extension", "Manifest V3", "JavaScript", "Vercel"],
    stackLine: "Chrome Extension",
    previewImage: "/velomail-preview.png",
    appUrl:
      "https://chromewebstore.google.com/detail/velomail-%E2%80%94-mobile-preview/gifcnmheckieogmpnohkhajjhnelmico",
    caseStudy: {
      problem:
        "People write email on desktop, but recipients almost always read on a phone — and broken spacing, truncated subjects, and awkward formatting only show up after you hit send.",
      approach:
        "A phone frame over Gmail that updates live as you type, plus dark/light chrome and a keyboard shortcut — no account, no backend, draft content stays in the browser.",
      result:
        "Chrome Web Store listing, a marketing site, live phone preview for Gmail compose, and a privacy-first local-only path with no data collection.",
    },
  },
  {
    id: "resume-job-matcher",
    name: "Resume-matched job finder",
    status: "Coming soon",
    tagline: "Top 10 job matches from your resume.",
    description:
      "A mobile app that finds listings on major job platforms and ranks the best fits against your resume — so you see the top ten opportunities worth applying to, not an endless feed.",
    outcomes: ["Resume match", "Top 10 list", "Mobile app"],
    stack: ["React Native", "Expo", "Node.js", "Supabase"],
    stackLine: "React Native + Supabase",
    previewImage: "/coming-soon-job-matcher.png",
    caseStudy: {
      problem:
        "Job seekers drown in listings that don't match their skills or experience — searching multiple boards and guessing fit wastes hours every week.",
      approach:
        "A mobile-first flow: upload or paste a resume, pull listings from major platforms, score relevance, and surface a ranked top-ten list with clear match reasons.",
      result:
        "In progress — mobile app shell and matching pipeline planned for a first release that delivers ranked jobs from your resume on iOS and Android.",
    },
  },
];

export const services = [
  {
    title: "Website redesigns",
    description:
      "A clear, professional site that shows what you do and makes it easy to call, book, or request a quote.",
    deliverables: ["New look", "Clear services", "Working contact", "Ready to launch"],
  },
  {
    title: "Booking & quote systems",
    description: "Let customers request a quote or pick a time without the back-and-forth.",
    deliverables: ["Quote requests", "Online booking", "Lead inbox", "Follow-up ready"],
  },
  {
    title: "Speed & mobile fixes",
    description:
      "Fast on phones, easy to tap, and built so people don't leave before they reach you.",
    deliverables: ["Works on phones", "Faster load", "Easy buttons", "Simple to use"],
  },
];

export const projectTypes = [
  "New website",
  "Redesign",
  "Booking or quote system",
  "Not sure yet",
] as const;

export const seoKeywords = [
  "Envoy Direct",
  "Jesse Envoy",
  "website redesign for local businesses",
  "small business website Ontario",
  "contractor website redesign",
  "booking and quote website",
  "hire web designer Ontario",
];
