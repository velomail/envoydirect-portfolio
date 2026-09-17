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
          background: "#eeeeea",
          color: "#141414",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 28 }}>
          envoydirect
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 0.86,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            maxWidth: 1040,
          }}
        >
          Envoy Direct
        </div>
        <div style={{ marginTop: 36, fontSize: 28, color: "#5c5c58", maxWidth: 720 }}>
          {siteConfig.seoDescription}
        </div>
      </div>
    ),
    { ...size },
  );
}
