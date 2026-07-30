import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/login-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 text-center sm:p-8">
        <p className="text-sm font-semibold tracking-[0.12em]">{siteConfig.brand}</p>
        <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight">Admin sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Password-protected dashboard for quotes and site analytics.
        </p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
