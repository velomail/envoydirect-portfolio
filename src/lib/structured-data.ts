import { featuredProjects, siteConfig } from "@/lib/site-config";

export function getStructuredData() {
  const softwareApps = featuredProjects
    .filter((project): project is typeof project & { appUrl: string } =>
      "appUrl" in project && typeof project.appUrl === "string" && project.appUrl.length > 0
    )
    .map((project) => ({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: project.description,
      url: project.appUrl,
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
      sameAs: [siteConfig.links.linkedin, siteConfig.links.fiverr],
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
