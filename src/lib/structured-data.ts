import { faqItems, projects, siteConfig } from "@/lib/site-config";

export function getStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.seoDescription,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      url: siteConfig.links.linkedin,
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.upwork,
      siteConfig.links.fiverr,
    ],
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.seoDescription,
    inLanguage: "en-CA",
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EnvoyDirect Software Development",
    url: siteConfig.url,
    description:
      "Freelance software architecture, SaaS product development, and workflow automation for startups and enterprise teams.",
    areaServed: siteConfig.location,
    serviceType: [
      "Custom Software Development",
      "SaaS MVP Development",
      "Workflow Automation",
      "Product Landing Pages",
    ],
  };

  const softwareApps = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: project.seoDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }));

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [organization, website, professionalService, ...softwareApps, faqPage];
}
