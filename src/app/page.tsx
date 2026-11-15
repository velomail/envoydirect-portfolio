import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Offer } from "@/components/offer";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/process";
import { SystemsTeaser } from "@/components/systems-teaser";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Offer />
        <Work showStory />
        <Process />
        <SystemsTeaser />
        <About />
        <Contact />
      </main>
    </PageShell>
  );
}
