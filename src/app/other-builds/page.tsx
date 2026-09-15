import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SiteSplitShell, SplitAsideCta } from "@/components/site-split-shell";
import { Work } from "@/components/work";
import { otherBuilds, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Other builds",
  description: `A few extra projects from ${siteConfig.name}, outside the main local-business work.`,
};

export default function OtherBuildsPage() {
  return (
    <>
      <SiteNav />
      <SiteSplitShell>
        <main id="main-content" tabIndex={-1} className="xl:grid xl:grid-cols-2">
          <Work
            id="other-builds"
            label="Other builds"
            title="Other builds"
            subtitle="A few extra projects outside the main local-business work."
            projects={otherBuilds}
            className="border-t-0 pt-28 sm:pt-32 xl:pt-32"
          />
          <SplitAsideCta
            title="Local business work"
            body="For redesigns and sites built for Orillia and Simcoe County, see the main portfolio on the homepage."
          />
        </main>
      </SiteSplitShell>
      <SiteFooter />
    </>
  );
}
