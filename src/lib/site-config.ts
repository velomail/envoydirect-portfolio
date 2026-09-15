export const siteConfig = {
  name: "Envoy Direct",
  brand: "ENVOY DIRECT",
  title: "Envoy Direct — Website redesigns for local businesses",
  seoTitle: "Envoy Direct — Website redesigns for local businesses",
  description:
    "Envoy Direct is a one-person shop serving Orillia and Simcoe County. Jesse redesigns websites for local businesses so customers can find you, trust you, and call or book.",
  seoDescription:
    "Website redesigns for local businesses in Orillia and Simcoe County. Jesse at Envoy Direct builds sites that bring in customers — one person, from first conversation to launch.",
  email: "jesse03hiles@gmail.com",
  contactEmail: "jesse03hiles@gmail.com",
  location: "Orillia and Simcoe County",
  locationShort: "Orillia, ON",
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
  "I'm an independent designer and developer. Envoy Direct is a one-person shop for local businesses in Orillia and Simcoe County who need a site that brings in work.",
  "You get a clear timeline, preview links early, and a direct line to the person building the site.",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Scope",
    description: "The problem, the timeline, and what done looks like.",
  },
  {
    step: "02",
    title: "Preview",
    description: "Real pages in days, not a sketch.",
  },
  {
    step: "03",
    title: "Launch",
    description: "A live link you can share and send customers to.",
  },
  {
    step: "04",
    title: "Refine",
    description: "We adjust copy, photos, and forms together.",
  },
] as const;

export const projectTypes = [
  "New website",
  "Redesign",
  "Booking or quote system",
  "Not sure yet",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const contactFollowUps: Record<
  ProjectType,
  { messagePlaceholder: string; showSiteUrl: boolean }
> = {
  Redesign: {
    messagePlaceholder: "What's not working on your current site?",
    showSiteUrl: true,
  },
  "New website": {
    messagePlaceholder: "Tell me about your business and what you're picturing.",
    showSiteUrl: false,
  },
  "Booking or quote system": {
    messagePlaceholder: "What do you want customers to be able to book or request?",
    showSiteUrl: false,
  },
  "Not sure yet": {
    messagePlaceholder: "Tell me a bit about what you're working on.",
    showSiteUrl: false,
  },
};

export const faqItems = [
  {
    question: "What does a site usually cost?",
    answer:
      "It depends on how many pages you need and whether you want quotes or booking built in. I'll give you a clear fixed price up front after a quick look at what you need.",
  },
  {
    question: "How long does it take?",
    answer:
      "Two to four weeks for a typical redesign. You'll see real pages in the first few days.",
  },
  {
    question: "Do I need to know anything technical?",
    answer: "No. If you can email me and send photos of the business, that's enough.",
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
  relatedService?: { label: string; href: string };
  caseStudy: {
    problem: string;
    approach: string;
    result: string;
  };
  testimonial?: {
    quote: string;
    attribution: string;
  };
};

export const featuredProjects: Project[] = [
  {
    id: "gunning-grounds",
    name: "Gunning Grounds Service",
    status: "Shipped",
    tagline: "Lawn care and property maintenance that actually generates quotes.",
    description:
      "A professional site for a local grounds company — real photos, clear services, and a simple quote request so homeowners don't have to play phone tag. Built to look sharp on a phone and send every lead somewhere you can see it.",
    outcomes: ["Quote requests", "Works on phones", "Lead inbox"],
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    stackLine: "Next.js + Supabase",
    previewImage: "/gunning-grounds-preview.png",
    appUrl: "https://gunning-grounds.vercel.app",
    relatedService: { label: "Website redesigns", href: "/services" },
    caseStudy: {
      problem:
        "The work was strong, but the website didn't match it — and there was no reliable way for people to request a quote.",
      approach:
        "Clear services, photos that show the quality of the work, big buttons on mobile, and a step-by-step quote form instead of a generic contact box.",
      result:
        "A live marketing site, a custom quote flow, and a private dashboard for incoming leads — so the business can follow up instead of guessing who called.",
    },
    testimonial: {
      quote:
        "The old site didn't do our work justice, and quotes meant a lot of missed calls. Jesse built something that looks like us and lets people request a quote on their phone — every lead shows up in one place.",
      attribution: "Owner, Gunning Grounds Service",
    },
  },
  {
    id: "stay-connected",
    name: "Stay Connected",
    status: "Shipped",
    tagline: "Software simple enough for anyone to use.",
    description:
      "Built for people who aren't comfortable with tech — large type, calm pages, an obvious way to get in touch. The same standard I hold local business sites to: if a non-technical person can't use it, it isn't done.",
    outcomes: ["Easy to read", "Simple booking", "Clear contact"],
    stack: ["Next.js", "React", "Supabase", "Resend"],
    stackLine: "Next.js + Supabase",
    previewImage: "/stay-connected-preview.png",
    appUrl: "https://stay-connected-eta.vercel.app",
    relatedService: { label: "Speed & mobile fixes", href: "/services" },
    caseStudy: {
      problem:
        "Seniors and families needed a calm, trustworthy way to book patient digital help — without flashy sites that feel overwhelming.",
      approach:
        "Large type, clear steps, and persistent phone and email so someone who isn't comfortable with tech can still get through. The same bar I hold for a local business site.",
      result:
        "A public site, a simple booking flow, newsletter signup, and a private admin area for bookings and updates.",
    },
    testimonial: {
      quote:
        "We needed a site our clients could actually use — large type, calm pages, and a clear way to book. Families tell us they found us and signed up without getting stuck. That's exactly what we asked for.",
      attribution: "Stay Connected",
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
    workHref: "/work/gunning-grounds",
    workLabel: "See Gunning Grounds",
  },
  {
    title: "Booking & quote systems",
    description: "Let customers request a quote or pick a time without the back-and-forth.",
    deliverables: ["Quote requests", "Online booking", "Lead inbox", "Follow-up ready"],
    workHref: "/work/gunning-grounds#quote-flow",
    workLabel: "See the quote flow",
  },
  {
    title: "Speed & mobile fixes",
    description:
      "Fast on phones, easy to tap, and built so people don't leave before they reach you.",
    deliverables: ["Works on phones", "Faster load", "Easy buttons", "Simple to use"],
    workHref: "/work/stay-connected",
    workLabel: "See Stay Connected",
  },
];

export const seoKeywords = [
  "Envoy Direct",
  "Jesse Envoy",
  "website redesign Orillia",
  "website redesign Simcoe County",
  "small business website Orillia",
  "contractor website redesign",
  "booking and quote website",
];
