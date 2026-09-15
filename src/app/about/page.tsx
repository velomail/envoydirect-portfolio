import type { Metadata } from "next";
import { About } from "@/components/about";
import { AboutPortrait } from "@/components/about-portrait";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteSplitShell, splitPanelClass } from "@/components/site-split-shell";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `Meet Jesse at ${siteConfig.name} — independent website design and development for local businesses in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <SiteSplitShell>
        <main id="main-content" tabIndex={-1} className="xl:grid xl:grid-cols-2 xl:divide-x xl:divide-border">
          <div
            className={cn(
              splitPanelClass,
              "flex items-center border-t border-border pt-28 xl:border-t-0 xl:pt-12",
            )}
          >
            <AboutPortrait className="max-w-[320px]" priority />
          </div>
          <About
            hidePortrait
            align="start"
            className="border-t-0 pt-28 xl:pt-12"
          />
        </main>
      </SiteSplitShell>
      <SiteFooter />
    </>
  );
}
