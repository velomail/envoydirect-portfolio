import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "Envoy Direct";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#0B0D10",
          color: "#E8EAED",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: 28,
            color: "#2DD4BF",
          }}
        >
          envoydirect
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            maxWidth: 1040,
          }}
        >
          Sites that bring work in. Systems that follow up.
        </div>
        <div style={{ marginTop: 36, fontSize: 26, color: "#9AA3B2", maxWidth: 720 }}>
          {siteConfig.seoDescription}
        </div>
      </div>
    ),
    { ...size },
  );
}
