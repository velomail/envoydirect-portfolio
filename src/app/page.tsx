import { ProjectMatrix } from "@/components/project-matrix";
import { RoadmapSection } from "@/components/roadmap-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
      <div className="max-w-4xl">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent-neon">
          EnvoyDirect // Umbrella studio for VeloMail, MetroRate & RadarAI
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Building high-performance digital utilities and functional design systems.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          EnvoyDirect is the engineering umbrella behind a growing ecosystem of production software.
          Specialized in rapid deployment, secure pipeline automation, and conversion-focused internal
          tools that bridge the gap between technical infrastructure and enterprise execution.
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent-neon/5 blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-accent-neon/5 blur-3xl" />
      </div>

      <div className="relative">
        <SiteHeader />
        <main>
          <HeroSection />
          <ProjectMatrix />
          <RoadmapSection />
          <ServicesSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
