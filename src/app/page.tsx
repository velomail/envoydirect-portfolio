import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/process";
import { StatBand } from "@/components/stat-band";
import { StoryRail } from "@/components/story-rail";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <PageShell>
      <StoryRail />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <StatBand />
        <Work showStory />
        <Process
          headingAs="h2"
          nextHref="#about"
          nextLabel="Next — who you're hiring"
        />
        <About nextHref="#contact" nextLabel="Next — get a quote" />
        <Contact />
      </main>
    </PageShell>
  );
}
