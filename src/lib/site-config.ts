export const siteConfig = {
  name: "Envoy Direct",
  brand: "ENVOY DIRECT",
  navBrand: "envoydirect",
  title: "Envoy Direct — Websites for local businesses",
  seoTitle: "Envoy Direct — Websites for local businesses",
  description:
    "Envoy Direct is a one-person shop serving Orillia and Simcoe County. Jesse builds websites for local businesses so customers can find you, trust you, and call or book.",
  seoDescription:
    "Websites for local businesses in Orillia and Simcoe County. Jesse at Envoy Direct builds sites that bring in customers — one person, from first conversation to launch.",
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

export const heroNameLines = ["Envoy", "Direct"] as const;

export const heroCopy = {
  headline: "A website that brings in customers.",
  lede: "I build sites for local businesses across Orillia and Simcoe County — so people can find you, trust you, and call or book.",
} as const;

export const storyChapters = [
  { id: "top", num: "01", label: "Start" },
  { id: "work", num: "02", label: "Work" },
  { id: "process", num: "03", label: "Process" },
  { id: "about", num: "04", label: "About" },
  { id: "contact", num: "05", label: "Quote" },
] as const;

export const homeSectionIds = storyChapters.map((chapter) => chapter.id);

export const workIntro = {
  heading: "Sites people actually use.",
  lede: "Quotes and booking live on the page — not a separate app. Two local businesses, two ways in.",
} as const;

export const aboutHeading = "Orillia based, building for Simcoe County.";

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.links.linkedin },
] as const;

export const remoteGigLink = {
  label: "Remote MVP on Fiverr",
  href: siteConfig.links.fiverr,
} as const;

export const aboutParagraphs = [
  "I'm Jesse in Orillia — a one-person shop for Simcoe County businesses. I don't hand you off. I build sites people can actually use on their phone: clear services, real photos of your work, and a way to request a quote or book without phone tag.",
  "What you get on the site: mobile-first pages, services that make sense to a stranger, a quote or booking path that's easy to tap, and every lead in one inbox. Optional: follow-up systems after launch (reactivation texts, review requests) if you already have customers.",
] as const;

export const processIntro =
  "We start with what your customers need to do (call, quote, book). I scope that, then show you real pages in days — not a vague mock. We launch a live link, then refine copy and photos together so it fits your trade, not a template.";

export const processSteps = [
  {
    step: "01",
    title: "Scope",
    description: "What customers need to do, the timeline, and what done looks like.",
  },
  {
    step: "02",
    title: "Preview",
    description: "Real pages in days — not a vague mock.",
  },
  {
    step: "03",
    title: "Launch",
    description: "A live link you can share and send customers to.",
  },
  {
    step: "04",
    title: "Refine",
    description: "Copy and photos together so it fits your trade, not a template.",
  },
] as const;

export const projectTypes = [
  "Website",
  "System",
  "Both",
  "Not sure",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const systemInterests = [
  "Reactivation",
  "Review Engine",
  "Not sure which",
] as const;

export type SystemInterest = (typeof systemInterests)[number];

export const contactFollowUps: Record<
  ProjectType,
  { messagePlaceholder: string; showSiteUrl: boolean; showSystemInterest: boolean }
> = {
  Website: {
    messagePlaceholder: "Tell me about your business and what you're picturing.",
    showSiteUrl: false,
    showSystemInterest: false,
  },
  System: {
    messagePlaceholder: "What should the system do? Do you already have a customer list or website?",
    showSiteUrl: true,
    showSystemInterest: true,
  },
  Both: {
    messagePlaceholder: "Tell me about the site and which follow-up you care about first.",
    showSiteUrl: true,
    showSystemInterest: true,
  },
  "Not sure": {
    messagePlaceholder: "Tell me a bit about what you're working on.",
    showSiteUrl: false,
    showSystemInterest: false,
  },
};

export const faqItems = [
  {
    question: "What does a site usually cost?",
    answer:
      "Most local business websites start from CA$600 fixed. Quote or booking on the site usually lands in the CA$800–1,200 range. You get a clear number after a short look at what you need — deposit to start, balance when we launch.",
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
  action?: {
    title: string;
    body: string;
  };
  caseStudy: {
    problem: string;
    approach: string;
    result: string;
  };
  testimonial?: {
    quote: string;
    attribution: string;
  };
  spotlight?: readonly { value: string; label: string }[];
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
    spotlight: [
      { value: "Live", label: "Public marketing site" },
      { value: "Quotes", label: "Step-by-step form" },
    ],
    relatedService: { label: "Quotes and booking", href: "/services#quotes-booking" },
    action: {
      title: "Quotes on the site",
      body: "A Get a quote button in the header and on the phone. A short form — a few questions, not a voicemail. Every request lands in one inbox they can check.",
    },
    caseStudy: {
      problem:
        "They needed a site that showed the quality of the work and let homeowners request a quote without playing phone tag.",
      approach:
        "A new site built around that: real photos, clear services, big buttons on mobile, and a step-by-step quote form instead of a generic contact box.",
      result:
        "A marketing site, a custom quote flow, and a private dashboard for incoming leads — so the business can follow up instead of guessing who called.",
    },
    testimonial: {
      quote:
        "We needed something that looks like us and lets people request a quote on their phone — every lead shows up in one place.",
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
    spotlight: [
      { value: "Live", label: "Public site & booking" },
      { value: "Simple", label: "Large type, calm UI" },
    ],
    relatedService: { label: "Quotes and booking", href: "/services#quotes-booking" },
    action: {
      title: "Booking on the site",
      body: "Book a session from the site itself — large type, a few steps, phone and email always in reach. Bookings show up in a private admin area. Same idea as a quote form, with a time instead of a request.",
    },
    caseStudy: {
      problem:
        "Seniors and families needed a calm, trustworthy way to book patient digital help — without a flashy site that feels overwhelming.",
      approach:
        "A new site built around that: large type, clear steps, and persistent phone and email so someone who isn't comfortable with tech can still get through.",
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
];

export const services = [
  {
    title: "Business websites",
    description:
      "A clear, professional site that shows what you do and makes it easy to call, book, or request a quote.",
    deliverables: ["Clear services", "Works on a phone", "Working contact", "Ready to launch"],
    workHref: "/work/gunning-grounds",
    workLabel: "See Gunning Grounds",
  },
  {
    id: "quotes-booking",
    title: "Quotes and booking",
    description:
      "Not a separate app. A page on their site — Request a quote, or Book a time — with a button that's easy to tap on a phone. Every request lands in one inbox.",
    deliverables: ["A page on the site", "A button people actually tap", "One inbox for leads"],
    workHref: "/work/gunning-grounds#on-the-site",
    workLabel: "See quotes on Gunning Grounds",
  },
  {
    title: "Easy on a phone",
    description:
      "Large type, obvious buttons, and a path someone can finish with a thumb. If a non-technical person can't use it, it isn't done.",
    deliverables: ["Works on phones", "Easy buttons", "Simple to use"],
    workHref: "/work/stay-connected",
    workLabel: "See Stay Connected",
  },
] as const;

export const quoteBookingHow = {
  heading: "How it gets on the site",
  lede: "Quotes and booking live on the website. They don't require a new app, a login, or software the owner has to learn.",
  steps: [
    {
      title: "A page",
      body: "Request a quote, or Book a time. Short, plain language, written for a phone.",
    },
    {
      title: "A button",
      body: "In the header and after the services — the thing people actually tap instead of calling and hoping.",
    },
    {
      title: "An inbox",
      body: "Every request shows up in one place they can check. Follow-up happens there, not in a pile of voicemails.",
    },
  ],
  paths: [
    {
      title: "New site",
      body: "It's built in from the start. That's how Gunning Grounds takes quotes and Stay Connected takes bookings.",
    },
    {
      title: "Site they already have",
      body: "I add the page and the button to what they have. If the current site isn't worth keeping, we fold quotes or booking into a new one.",
    },
  ],
} as const;

export const systemsTeaser = {
  heading: "After the site is live.",
  lede: "Optional follow-up systems invite past customers back or ask for reviews the right way — setup plus a modest monthly, with texting billed at cost. Same one-person shop.",
  ctaLabel: "See the systems",
  ctaHref: "/systems",
} as const;

export const systemsPage = {
  heading: "Systems that follow up.",
  lede: "After the website is live (or if you already have one), these are done-for-you SMS systems for local service businesses — quiet hours, consent, and opt-outs built in. Setup plus monthly; SMS at cost. Nothing sends until you approve a dry-run.",
  comingSoon:
    "More systems are on the way. If you need something adjacent — follow-ups after quotes, reminders, or another quiet workflow — ask. I build them one client at a time.",
  partnersNote:
    "Agencies who want the same engines under their own brand can ask about partnering — it stays secondary to the owner-facing work.",
  ctaLabel: "Talk about a system",
  ctaHref: "/#contact",
} as const;

export type LiveSystem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  outcomes: readonly string[];
  priceShape: string;
  doneMeans: string;
  askHref: string;
  askLabel: string;
  href: string | null;
  linkLabel: string;
};

export const liveSystems: readonly LiveSystem[] = [
  {
    id: "reactivation",
    name: "Reactivation",
    tagline: "Bring back the customers you already earned.",
    description:
      "I clean your lapsed list, consent-check it, and text a few people a day inside quiet hours with a personal reason to come back. Replies are handled from your approved FAQ; interested customers get your booking link, and you get an alert.",
    outcomes: [
      "Cleaned, consent-checked list",
      "Daily texts inside quiet hours",
      "FAQ replies + booking link on interest",
      "Opt-outs honoured immediately",
    ],
    priceShape: "From CA$299 setup · CA$99/mo · SMS at cost",
    doneMeans:
      "Cleaned list, approved FAQ/offer, dry-run, small pilot, quiet-hours sends, and replies/alerts running.",
    askHref: "/#contact",
    askLabel: "Ask about Reactivation",
    href: "https://reactivation-web.vercel.app",
    linkLabel: "How it works",
  },
  {
    id: "review-engine",
    name: "Review Engine",
    tagline: "Ask for the review. Keep the complaint private.",
    description:
      "After a finished visit, one rating text goes out inside quiet hours. A 4 or 5 gets your Google review link. A 1, 2, or 3 stays private — I alert you so you can make it right, and they never get the link.",
    outcomes: [
      "One text after each finished visit",
      "Google link only on a happy score",
      "Private alert on a low score",
      "Consent and quiet hours checked first",
    ],
    priceShape: "From CA$199 setup · CA$79/mo · SMS at cost",
    doneMeans:
      "Rating SMS after visit, 4–5 → Google link, 1–3 private + alert, opt-outs and quiet hours on.",
    askHref: "/#contact",
    askLabel: "Ask about Review Engine",
    href: "https://review-engine-web.vercel.app/",
    linkLabel: "How it works",
  },
];

export const seoKeywords = [
  "Envoy Direct",
  "Jesse Envoy",
  "small business website Orillia",
  "small business website Simcoe County",
  "contractor website",
  "booking and quote website",
  "online quote system",
  "website booking system",
  "quote request form",
  "customer reactivation SMS",
  "review request system",
];
