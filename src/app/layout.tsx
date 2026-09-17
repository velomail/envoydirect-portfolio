import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { ProjectTypeProvider } from "@/components/project-type-context";
import { ScrollProgress } from "@/components/scroll-progress";
import { getStructuredData } from "@/lib/structured-data";
import { seoKeywords, siteConfig } from "@/lib/site-config";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#eeeeea",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  applicationName: siteConfig.name,
  keywords: seoKeywords,
  authors: [{ name: siteConfig.founder, url: siteConfig.links.linkedin }],
  creator: siteConfig.founder,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${archivo.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
        <ProjectTypeProvider>
          <PageViewTracker />
          <ScrollProgress />
          {children}
        </ProjectTypeProvider>
      </body>
    </html>
  );
}
