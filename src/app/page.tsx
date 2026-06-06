import { ProjectMatrix } from "@/components/project-matrix";
import { FaqSection } from "@/components/faq-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  mobileStackCenter,
  sectionPadding,
  sectionShell,
} from "@/lib/layout-classes";

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className={`${sectionShell} ${sectionPadding} pb-16 pt-20 sm:pb-20 sm:pt-24 md:pt-32`}
    >
      <div className={`mx-auto max-w-4xl ${mobileStackCenter}`}>
        <h1
          id="hero-heading"
          className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-left md:text-6xl lg:text-7xl"
        >
          Building high-performance digital utilities and functional design systems.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg md:text-left">
          EnvoyDirect builds production software for startups and revenue teams — custom SaaS
          tools, workflow automation, and conversion-focused product pages from Ontario, Canada.
        </p>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:text-left">
          Available for freelance engagements: internal business utilities, API automation,
          MVP development, and technical landing pages for VeloMail, MetroRate, RadarAI, and
          net-new product builds.
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent-neon/5 blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-accent-neon/5 blur-3xl" />
      </div>

      <div className="relative">
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          <HeroSection />
          <ProjectMatrix />
          <RoadmapSection />
          <ServicesSection />
          <FaqSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
