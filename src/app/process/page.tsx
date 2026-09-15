import type { Metadata } from "next";
import { Process } from "@/components/process";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteSplitShell, SplitAsideCta } from "@/components/site-split-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Process",
  description: `How ${siteConfig.name} works with local businesses — scope, preview, launch, and refine.`,
};

export default function ProcessPage() {
  return (
    <>
      <SiteNav />
      <SiteSplitShell>
        <main id="main-content" tabIndex={-1} className="xl:grid xl:grid-cols-2">
          <Process className="border-t-0 pt-28 sm:pt-32 xl:pt-32" />
          <SplitAsideCta />
        </main>
      </SiteSplitShell>
      <SiteFooter />
    </>
  );
}
