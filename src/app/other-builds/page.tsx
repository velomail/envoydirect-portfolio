import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Work } from "@/components/work";
import { otherBuilds, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Other builds",
  description: `A few extra projects from ${siteConfig.name}, outside the main local-business work.`,
};

export default function OtherBuildsPage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <Work
          id="other-builds"
          label="Other builds"
          projects={otherBuilds}
        />
      </main>
    </PageShell>
  );
}
