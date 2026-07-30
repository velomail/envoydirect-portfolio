import type { Metadata } from "next";
import { getAdminMetrics } from "@/lib/admin/metrics";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminDashboardPage() {
  const metrics = await getAdminMetrics();

  const cards = [
    {
      label: "Quotes received",
      value: metrics.totalSubmissions,
      hint: `${metrics.submissionsLast7Days} in the last 7 days`,
    },
    {
      label: "Unique emails",
      value: metrics.uniqueEmails,
      hint: "Distinct contact emails",
    },
    {
      label: "Page views",
      value: metrics.totalPageViews,
      hint: `${metrics.viewsLast7Days} in the last 7 days`,
    },
    {
      label: "Unique visitors",
      value: metrics.uniqueVisitors,
      hint: `${metrics.visitorsLast7Days} in the last 7 days`,
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-serif text-4xl font-medium tracking-tight">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Quotes from the contact form and custom visitor analytics.
        </p>
      </div>

      {!metrics.configured ? (
        <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
          Supabase is not configured. Add{" "}
          <code className="font-mono text-foreground">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="font-mono text-foreground">SUPABASE_SERVICE_ROLE_KEY</code> to enable
          quotes and analytics.
        </div>
      ) : null}

      {metrics.error ? (
        <div className="rounded-2xl border border-destructive/30 bg-card p-6 text-sm text-destructive">
          Could not load metrics: {metrics.error}. If page views are empty, run{" "}
          <code className="font-mono">supabase/page_views.sql</code> in the Supabase SQL Editor.
        </div>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.label}
            className="rounded-2xl border border-border bg-card p-5 text-left"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {card.label}
            </p>
            <p className="mt-3 font-serif text-4xl font-medium tracking-tight">{card.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{card.hint}</p>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-serif text-2xl font-medium tracking-tight">Recent quotes</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Latest contact form submissions (up to 50).
          </p>
        </div>

        {metrics.submissions.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            No quotes yet. New contact form messages will show up here.
          </div>
        ) : (
          <ul className="space-y-3">
            {metrics.submissions.map((submission) => (
              <li
                key={submission.id}
                className="rounded-2xl border border-border bg-card p-5 text-left"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-foreground">{submission.name}</p>
                    <a
                      href={`mailto:${submission.email}`}
                      className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {submission.email}
                    </a>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {submission.project_type}
                    </span>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {formatDate(submission.created_at)}
                    </p>
                  </div>
                </div>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                  {submission.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
