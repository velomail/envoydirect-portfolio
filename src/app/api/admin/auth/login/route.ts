import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/auth/session";

export async function POST(request: Request) {
  try {
    let body: { password?: string };
    try {
      body = (await request.json()) as { password?: string };
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const password = body.password?.trim() ?? "";
    if (!password) {
      return NextResponse.json({ error: "Password required." }, { status: 400 });
    }

    if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
      return NextResponse.json(
        {
          error:
            "Admin auth is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET.",
        },
        { status: 503 },
      );
    }

    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
    }

    const token = await createAdminSessionToken();
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (error) {
    console.error("admin login failed", error);
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}
