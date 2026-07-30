import Link from "next/link";
import { LogoutButton } from "@/components/admin/logout-button";
import { siteConfig } from "@/lib/site-config";

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div>
            <Link href="/admin" className="text-sm font-semibold tracking-[0.12em]">
              {siteConfig.brand}
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">Admin dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">{children}</main>
    </div>
  );
}
