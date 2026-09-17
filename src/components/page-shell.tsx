import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}
