export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  topic: string;
  keywords: readonly string[];
  relatedSlugs: readonly string[];
  workHref?: string;
  workLabel?: string;
  serviceHref: string;
  body: readonly BlogBlock[];
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "why-you-need-a-quote-system",
    title: "Why your local business needs an online quote system",
    description:
      "A quote form on your website catches the homeowners who won't call. Here's what it does, what to ask, and how it should work on a phone.",
    date: "2026-09-17",
    topic: "Quotes",
    keywords: [
      "online quote system",
      "quote request form",
      "contractor quote website",
      "lawn care quote form",
      "small business website Orillia",
    ],
    relatedSlugs: ["quote-form-vs-phone-calls", "quotes-and-booking-on-your-website"],
    workHref: "/work/gunning-grounds",
    workLabel: "See quotes on Gunning Grounds",
    serviceHref: "/services#quotes-booking",
    body: [
      {
        type: "p",
        text: "Most local businesses still wait for the phone to ring. The people who need you — a lawn cut, a repair, a quote for the season — often don't call. They're on the couch with a phone. They'll fill out a short form. They won't play voicemail tag after work.",
      },
      {
        type: "p",
        text: "An online quote system is not software you log into. It's a page on your site — Request a quote — a button that's easy to tap, and every request landing in one inbox you actually check.",
      },
      {
        type: "h2",
        text: "What a quote form is for",
      },
      {
        type: "p",
        text: "It's for the gap between “I found you” and “I hired you.” Someone searched, opened your site, liked the photos, and still has to decide. If the next step is a phone number and nothing else, a lot of them leave and try the next listing.",
      },
      {
        type: "p",
        text: "A form lets them tell you the job without performing a phone call. You get a name, a way to reach them, and enough detail to price it. They get a reply instead of hoping they caught you between jobs.",
      },
      {
        type: "h2",
        text: "What you should ask — and what you shouldn't",
      },
      {
        type: "p",
        text: "Short. Written for a thumb. A few questions, not an application.",
      },
      {
        type: "ul",
        items: [
          "What they need done, in their words",
          "Where the job is — town or address is enough to start",
          "How to reach them — phone or email, their choice",
          "Photos, if the work is visual. Optional. Don't block the send button on it.",
        ],
      },
      {
        type: "p",
        text: "Don't ask for a budget, a company name, or six dropdowns. That's how quote forms die on a phone. If you can follow up in a text or a call the same day, you don't need the whole job on the first screen.",
      },
      {
        type: "h2",
        text: "Why it belongs on your website",
      },
      {
        type: "p",
        text: "Facebook messages get buried. A Google listing with only a phone number helps people who already like calling. Your own site is the place you control: the photos, the services, the button, and the inbox.",
      },
      {
        type: "p",
        text: "That's how [Gunning Grounds](/work/gunning-grounds) takes quotes. A Get a quote button in the header and on the phone. A short form. Every request in one place they can check — not a pile of voicemails from numbers they don't recognize.",
      },
      {
        type: "h2",
        text: "What this is worth in Orillia and Simcoe County",
      },
      {
        type: "p",
        text: "Trades, lawn care, cleaning, and property work around here still run on “give us a call.” The businesses that answer after hours — or look like they will — pick up the people who browse at 9 p.m. A quote form is that after-hours door, without you sitting on the phone.",
      },
      {
        type: "p",
        text: "If you already have a site, the form can go on it. If the current site isn't worth keeping, we fold quotes into a new one. Either way it's a page, a button, and an inbox — [not a separate app](/blog/quotes-and-booking-on-your-website).",
      },
      {
        type: "p",
        text: "I build this for local businesses as part of the website. [See how quotes and booking go on the site](/services#quotes-booking), or [tell me what you need](/#contact) and I'll reply within 48 hours with a price.",
      },
    ],
  },
  {
    slug: "benefits-of-a-website-booking-system",
    title: "Benefits of a booking system on your website",
    description:
      "A booking page on your site lets people pick a time without calling. Here's why that matters for local businesses, and how to keep it simple.",
    date: "2026-09-17",
    topic: "Booking",
    keywords: [
      "website booking system",
      "online booking for small business",
      "appointment booking website",
      "book online local business",
      "Simcoe County booking website",
    ],
    relatedSlugs: ["quotes-and-booking-on-your-website", "why-you-need-a-quote-system"],
    workHref: "/work/stay-connected",
    workLabel: "See booking on Stay Connected",
    serviceHref: "/services#quotes-booking",
    body: [
      {
        type: "p",
        text: "A booking system on your website is a page where someone picks a time and you see it in one place. Same idea as a [quote form](/blog/why-you-need-a-quote-system), with a slot instead of a request. No new app for you. No login for them if the job doesn't need one.",
      },
      {
        type: "h2",
        text: "People book when it's easy. They don't when it isn't.",
      },
      {
        type: "p",
        text: "Calling to book means catching you, explaining the visit, and hoping the time they wanted is still open. A lot of customers — especially people booking for a parent, or booking around a shift — will not do that twice. They'll find a business that shows the next step on the page.",
      },
      {
        type: "p",
        text: "On a phone, that next step has to be obvious: Book a time, large type, a few steps, phone and email still in reach if they'd rather talk.",
      },
      {
        type: "h2",
        text: "What you actually get",
      },
      {
        type: "ul",
        items: [
          "Requests while you're on a job, not only when you can pick up",
          "A name, a time, and a way to confirm — in one inbox or admin view",
          "Fewer “I called and nobody answered” reviews",
          "A site that matches how people already use every other service they trust",
        ],
      },
      {
        type: "p",
        text: "You still confirm. You still call if something's off. Booking on the site doesn't replace judgment. It stops the first step from being a missed call.",
      },
      {
        type: "h2",
        text: "Keep it on the website",
      },
      {
        type: "p",
        text: "Calendly links, third-party widgets, and “download our app” all add a hop. For a local business, the hop is where people quit. The booking page should feel like the rest of the site — same type, same buttons, same phone number in the header.",
      },
      {
        type: "p",
        text: "[Stay Connected](/work/stay-connected) books sessions from the site itself. Large type, a few steps, phone and email always visible. Bookings show up in a private admin area. Families can finish it without getting stuck. That's the bar: if a non-technical person can't use it, it isn't done.",
      },
      {
        type: "h2",
        text: "Quotes vs booking — which one do you need?",
      },
      {
        type: "p",
        text: "If the job has to be priced first — lawns, repairs, custom work — start with a quote form. If the offer is a set visit or a session at a known length, booking is the cleaner path. Some businesses need both: a quote for new work, a bookable slot for the regulars.",
      },
      {
        type: "p",
        text: "I put either one on the site as a page and a button, not a product you have to learn. [How it gets on the site](/services#quotes-booking), or [get a quote](/#contact) if you already know you need it.",
      },
    ],
  },
  {
    slug: "quote-form-vs-phone-calls",
    title: "Why customers request a quote instead of calling",
    description:
      "Homeowners browse at night and hate voicemail. A quote request on your site is how they reach you without a phone tag.",
    date: "2026-09-17",
    topic: "Quotes",
    keywords: [
      "request a quote online",
      "website quote form vs calling",
      "contractor leads from website",
      "Orillia lawn care quotes",
    ],
    relatedSlugs: ["why-you-need-a-quote-system", "local-business-website-that-brings-in-work"],
    workHref: "/work/gunning-grounds",
    workLabel: "See the Gunning Grounds quote flow",
    serviceHref: "/services#quotes-booking",
    body: [
      {
        type: "p",
        text: "Calling a local business is work. You look up the number, you wait, you get a mailbox, you try to describe the driveway in a 20-second message. A lot of people would rather type it once and go back to their evening.",
      },
      {
        type: "p",
        text: "That isn't laziness. It's how they already buy everything else. If your site only offers a phone number, you're asking them to switch modes — from browsing to a call — at the exact moment they were ready to ask for a price.",
      },
      {
        type: "h2",
        text: "When they look, you are often busy",
      },
      {
        type: "p",
        text: "Search for a contractor or a lawn company peaks after work and on weekends. That's when you're on a job or done for the day. A missed call at 7 p.m. is a lead that tries two other names. A form at 7 p.m. is a lead waiting in the inbox in the morning.",
      },
      {
        type: "p",
        text: "You don't have to reply at midnight. You have to look like you can be reached without performing a conversation.",
      },
      {
        type: "h2",
        text: "What a good quote request looks like",
      },
      {
        type: "ul",
        items: [
          "A Get a quote button where people already look — header, and after the services",
          "A short page, not a popup that covers the photos they trusted",
          "Plain language. “What do you need done?” beats “Describe your project scope.”",
          "Works with a thumb. If the fields are tiny, they will bounce.",
        ],
      },
      {
        type: "p",
        text: "Keep the phone number. Some people still want to talk. The form is for everyone else — which is most of the new people who found you on their phone.",
      },
      {
        type: "h2",
        text: "The inbox is the point",
      },
      {
        type: "p",
        text: "A form that emails a junk folder is worse than no form. Every request should land in one place you check, with the questions they already answered so you're not starting from zero. Follow-up happens there: a text, a call, a price.",
      },
      {
        type: "p",
        text: "That's the system behind [Gunning Grounds](/work/gunning-grounds): the button, the short form, the inbox. Homeowners request a quote on their phone. The owner isn't guessing who left a voicemail from a blocked number.",
      },
      {
        type: "p",
        text: "If your current site is a brochure with a phone number, adding this is usually the highest-leverage change. [Why the quote system belongs on the site](/blog/why-you-need-a-quote-system), or [ask me for a price](/#contact).",
      },
    ],
  },
  {
    slug: "quotes-and-booking-on-your-website",
    title: "Keep quotes and booking on your website — not a separate app",
    description:
      "Quote tools and booking apps add logins and extra tabs. For a local business, the request should live on the site customers already opened.",
    date: "2026-09-17",
    topic: "How it works",
    keywords: [
      "booking on website not app",
      "website quote system vs software",
      "small business booking page",
      "quote form on website",
    ],
    relatedSlugs: ["why-you-need-a-quote-system", "benefits-of-a-website-booking-system"],
    workHref: "/services#quotes-booking-how",
    workLabel: "How it gets on the site",
    serviceHref: "/services#quotes-booking",
    body: [
      {
        type: "p",
        text: "There is a whole industry of quote software and booking apps. Most of them are built for teams, subscriptions, and dashboards. A one-truck business in Simcoe County does not need another login. The customer who just found you does not need to create an account to ask what a clean-up costs.",
      },
      {
        type: "p",
        text: "Quotes and booking should live on the website. A page. A button. An inbox. If it's not a fit, you say so in a reply — you don't send them into a product they have to learn.",
      },
      {
        type: "h2",
        text: "Why the extra app loses people",
      },
      {
        type: "ul",
        items: [
          "A new tab or a widget that looks nothing like your site",
          "A login wall before they can send the job",
          "You checking a second tool you forget exists",
          "A monthly fee for something a simple page already does",
        ],
      },
      {
        type: "p",
        text: "Your site already has your name, your photos, and your services. The quote or the booking is the last step of that page, not a departure from it.",
      },
      {
        type: "h2",
        text: "What “on the site” means in practice",
      },
      {
        type: "p",
        text: "For a new site, it's built in from the start. That's how [Gunning Grounds](/work/gunning-grounds) takes quotes and [Stay Connected](/work/stay-connected) takes bookings.",
      },
      {
        type: "p",
        text: "For a site you already have, I add the page and the button to what you have. If the current site isn't worth keeping — slow, broken on a phone, no clear services — we fold quotes or booking into a new one instead of bolting a widget onto a page nobody trusts.",
      },
      {
        type: "h2",
        text: "You still own the conversation",
      },
      {
        type: "p",
        text: "A form is not an autopilot. You price the job. You confirm the time. You decide if it's a fit. The website's job is to get the request to you without friction. After that it's still your business, talked to like a person.",
      },
      {
        type: "p",
        text: "That's the work I take on: [a website for the business, and a way to request a quote or book a time on that site](/services). [Get a quote](/#contact) if you want it built that way.",
      },
    ],
  },
  {
    slug: "local-business-website-that-brings-in-work",
    title: "What to put on a local business website that brings in work",
    description:
      "A site for Orillia and Simcoe County businesses should show the work, make the next step obvious, and work on a phone. Here's the short list.",
    date: "2026-09-17",
    topic: "Websites",
    keywords: [
      "small business website Orillia",
      "contractor website Simcoe County",
      "local business website that gets customers",
      "mobile friendly business website",
    ],
    relatedSlugs: ["why-you-need-a-quote-system", "quote-form-vs-phone-calls"],
    workHref: "/#work",
    workLabel: "See the work",
    serviceHref: "/services",
    body: [
      {
        type: "p",
        text: "A local business website has one job: help someone who doesn't know you yet decide to get in touch. Pretty is not the job. “Coming soon” is not the job. A phone number buried under a slideshow is not the job.",
      },
      {
        type: "p",
        text: "People in Orillia and across Simcoe County will judge you in a few seconds on a phone. They want to know what you do, that you're real, and how to ask for a quote or a time without hunting.",
      },
      {
        type: "h2",
        text: "Show the work like it actually looks",
      },
      {
        type: "p",
        text: "Real photos of the trucks, the lawns, the shop, the people. Stock grass and a handshake don't convert a homeowner who can drive past your competitors. If the photos are only on Facebook, the site still looks empty to Google and to anyone who landed from search.",
      },
      {
        type: "h2",
        text: "Say the services in plain language",
      },
      {
        type: "p",
        text: "A list they can scan. What you take on. What you don't, if that saves everyone a call. Area you cover — town names beat “we service the GTA and beyond.”",
      },
      {
        type: "h2",
        text: "Make the next step impossible to miss",
      },
      {
        type: "p",
        text: "Call, [request a quote](/blog/why-you-need-a-quote-system), or [book a time](/blog/benefits-of-a-website-booking-system). Put the button in the header and again after the services. Large enough for a thumb. If they have to pinch-zoom to tap it, they will leave.",
      },
      {
        type: "p",
        text: "Keep phone and email visible even if you have a form. Some people will only call. The form is for the rest.",
      },
      {
        type: "h2",
        text: "It has to work on a phone. That's not optional.",
      },
      {
        type: "p",
        text: "Most of your new customers are not at a desk. Slow pages, tiny type, and menus that don't open are how you lose the lead after you already paid to be found. The test is simple: hand the site to someone who isn't comfortable with tech. If they can't finish, it isn't done.",
      },
      {
        type: "p",
        text: "That's the standard on [Stay Connected](/work/stay-connected) and on the local business sites I ship. I build them as a one-person shop from Orillia — first conversation to launch, no hand-offs.",
      },
      {
        type: "p",
        text: "[What I take on](/services), or [get a quote](/#contact) if you already know the site isn't doing this.",
      },
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost) {
  return post.relatedSlugs
    .map((slug) => getPost(slug))
    .filter((item): item is BlogPost => Boolean(item));
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Toronto",
  }).format(new Date(`${date}T12:00:00`));
}
