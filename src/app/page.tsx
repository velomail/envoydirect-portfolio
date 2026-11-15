import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/process";
import { StoryRail } from "@/components/story-rail";
import { SystemsTeaser } from "@/components/systems-teaser";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <PageShell>
      <StoryRail />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Work showStory />
        <Process
          headingAs="h2"
          nextHref="#systems-teaser"
          nextLabel="Next — after the site"
        />
        <SystemsTeaser />
        <About nextHref="#contact" nextLabel="Next — get a quote" />
        <Contact />
      </main>
    </PageShell>
  );
}
