import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Systems } from "@/components/systems";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Systems",
  description: `Done-for-you SMS systems for local businesses in ${siteConfig.location} — reactivation and review requests, with more coming soon.`,
};

export default function SystemsPage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <Systems />
      </main>
    </PageShell>
  );
}
