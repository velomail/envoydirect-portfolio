import { featuredProjects, siteConfig } from "@/lib/site-config";

export function getStructuredData() {
  const softwareApps = featuredProjects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: project.description,
  }));

  return [
    {
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
        siteConfig.links.linkedin,
        siteConfig.links.fiverr,
        siteConfig.links.upwork,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.seoDescription,
      inLanguage: "en-CA",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Envoy Direct Software Development",
      url: siteConfig.url,
      description: siteConfig.description,
      areaServed: siteConfig.location,
    },
    ...softwareApps,
  ];
}
