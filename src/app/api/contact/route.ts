import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";
import { projectTypes } from "@/lib/site-config";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!projectTypes.includes(projectType as (typeof projectTypes)[number])) {
    return NextResponse.json({ error: "Please select a valid project type." }, { status: 400 });
  }

  const supabase = createSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Email hello@envoydirect.co instead." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    project_type: projectType,
    message,
  });

  if (error) {
    console.error("Supabase contact insert failed:", error.message);
    return NextResponse.json(
      { error: "Could not save your message. Please try again or email hello@envoydirect.co." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
