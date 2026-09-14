import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
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
      <main id="main-content" tabIndex={-1}>
        <Work
          id="other-builds"
          label="Other builds"
          title="Other builds"
          subtitle="A few extra projects outside the main local-business work."
          projects={otherBuilds}
          className="border-t-0 pt-28 sm:pt-32"
        />
      </main>
      <SiteFooter />
    </>
  );
}
