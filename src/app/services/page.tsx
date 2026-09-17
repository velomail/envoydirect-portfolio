import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Services } from "@/components/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Business websites, booking and quote systems, and speed and mobile fixes for local businesses in ${siteConfig.location}.`,
};

export default function ServicesPage() {
  return (
    <PageShell>
      <main id="main-content" tabIndex={-1}>
        <Services />
      </main>
    </PageShell>
  );
}
