import { createSupabaseAdmin } from "@/lib/supabase/admin";

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  project_type: string;
  message: string;
  created_at: string;
};

export type AdminMetrics = {
  configured: boolean;
  error?: string;
  totalSubmissions: number;
  uniqueEmails: number;
  submissionsLast7Days: number;
  totalPageViews: number;
  uniqueVisitors: number;
  viewsLast7Days: number;
  visitorsLast7Days: number;
  submissions: ContactSubmission[];
};

function daysAgoIso(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

const emptyMetrics = {
  totalSubmissions: 0,
  uniqueEmails: 0,
  submissionsLast7Days: 0,
  totalPageViews: 0,
  uniqueVisitors: 0,
  viewsLast7Days: 0,
  visitorsLast7Days: 0,
  submissions: [] as ContactSubmission[],
};

export async function getAdminMetrics(): Promise<AdminMetrics> {
  const supabase = createSupabaseAdmin();

  if (!supabase) {
    return {
      configured: false,
      error: "Supabase is not configured.",
      ...emptyMetrics,
    };
  }

  const since = daysAgoIso(7);
  const errors: string[] = [];

  const [totalSubmissionsRes, submissionsWeekRes, submissionsRes, allEmailsRes] =
    await Promise.all([
      supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      supabase
        .from("contact_submissions")
        .select("*", { count: "exact", head: true })
        .gte("created_at", since),
      supabase
        .from("contact_submissions")
        .select("id, name, email, project_type, message, created_at")
        .order("created_at", { ascending: false })
        .limit(50),
      supabase.from("contact_submissions").select("email"),
    ]);

  for (const result of [
    totalSubmissionsRes,
    submissionsWeekRes,
    submissionsRes,
    allEmailsRes,
  ]) {
    if (result.error) errors.push(result.error.message);
  }

  const [totalViewsRes, viewsWeekRes, allVisitorsRes, weekVisitorsRes] = await Promise.all([
    supabase.from("page_views").select("*", { count: "exact", head: true }),
    supabase.from("page_views").select("*", { count: "exact", head: true }).gte("created_at", since),
    supabase.from("page_views").select("visitor_id"),
    supabase.from("page_views").select("visitor_id").gte("created_at", since),
  ]);

  for (const result of [totalViewsRes, viewsWeekRes, allVisitorsRes, weekVisitorsRes]) {
    if (result.error) errors.push(result.error.message);
  }

  const uniqueEmails = new Set(
    (allEmailsRes.data ?? []).map((row) => row.email?.toLowerCase()).filter(Boolean),
  ).size;

  const uniqueVisitors = new Set(
    (allVisitorsRes.data ?? []).map((row) => row.visitor_id).filter(Boolean),
  ).size;

  const visitorsLast7Days = new Set(
    (weekVisitorsRes.data ?? []).map((row) => row.visitor_id).filter(Boolean),
  ).size;

  return {
    configured: true,
    error: errors.length ? errors[0] : undefined,
    totalSubmissions: totalSubmissionsRes.count ?? 0,
    uniqueEmails,
    submissionsLast7Days: submissionsWeekRes.count ?? 0,
    totalPageViews: totalViewsRes.count ?? 0,
    uniqueVisitors,
    viewsLast7Days: viewsWeekRes.count ?? 0,
    visitorsLast7Days,
    submissions: (submissionsRes.data ?? []) as ContactSubmission[],
  };
}
