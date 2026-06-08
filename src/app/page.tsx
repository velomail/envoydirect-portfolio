import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
