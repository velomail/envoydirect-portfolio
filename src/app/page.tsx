import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteSplitShell } from "@/components/site-split-shell";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <SiteSplitShell>
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Contact layout="split" />
          <Work compact sideBySide className="py-14 sm:py-20" />
        </main>
      </SiteSplitShell>
      <SiteFooter />
    </>
  );
}
