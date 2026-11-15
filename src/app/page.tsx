import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Make } from "@/components/make";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/process";
import { SystemsTeaser } from "@/components/systems-teaser";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Make />
        <Process />
        <Work showStory />
        <SystemsTeaser />
        <About />
        <Contact />
      </main>
    </PageShell>
  );
}
