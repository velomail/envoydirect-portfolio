import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";

type ViewPayload = {
  path?: string;
  visitorId?: string;
  referrer?: string;
};

export async function POST(request: Request) {
  let body: ViewPayload;

  try {
    body = (await request.json()) as ViewPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const path = body.path?.trim() ?? "";
  const visitorId = body.visitorId?.trim() ?? "";
  const referrer = body.referrer?.trim().slice(0, 500) || null;

  if (!path.startsWith("/") || path.startsWith("/admin") || path.startsWith("/api")) {
    return NextResponse.json({ error: "Invalid path." }, { status: 400 });
  }

  if (!visitorId || visitorId.length < 8 || visitorId.length > 80) {
    return NextResponse.json({ error: "Invalid visitor id." }, { status: 400 });
  }

  const supabase = createSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const { error } = await supabase.from("page_views").insert({
    path,
    visitor_id: visitorId,
    referrer,
  });

  if (error) {
    console.error("page_views insert failed:", error.message);
    return NextResponse.json({ error: "Could not record view." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
