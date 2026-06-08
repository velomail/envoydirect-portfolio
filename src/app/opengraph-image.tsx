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
          padding: "80px",
          background: "#fdfbf7",
          color: "#111111",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.15em", color: "#ef6820", marginBottom: 24 }}>
          ENVOY DIRECT
        </div>
        <div style={{ fontSize: 64, fontWeight: 400, lineHeight: 1.05, maxWidth: 900, fontFamily: "serif" }}>
          Independent developer shipping high-utility software.
        </div>
        <div style={{ marginTop: 32, fontSize: 24, color: "#555555" }}>{siteConfig.description}</div>
      </div>
    ),
    { ...size },
  );
}
