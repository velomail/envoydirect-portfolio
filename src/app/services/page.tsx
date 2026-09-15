import type { Metadata } from "next";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteSplitShell, SplitAsideCta } from "@/components/site-split-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Website redesigns, booking and quote systems, and speed and mobile fixes for local businesses in ${siteConfig.location}.`,
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <SiteSplitShell>
        <main id="main-content" tabIndex={-1} className="xl:grid xl:grid-cols-2">
          <Services className="border-t-0 pt-28 sm:pt-32 xl:pt-32" />
          <SplitAsideCta
            title="Not sure which fits?"
            body="Start with a short note about your business. I'll tell you honestly what makes sense."
          />
        </main>
      </SiteSplitShell>
      <SiteFooter />
    </>
  );
}
