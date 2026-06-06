import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "EnvoyDirect Portfolio";
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
          padding: "64px",
          background: "#050505",
          color: "#f2f2f2",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.2em", color: "#00e5c0", marginBottom: 24 }}>
          ENVOYDIRECT //
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
          Building high-performance digital utilities and functional design systems.
        </div>
        <div style={{ marginTop: 32, fontSize: 22, color: "#888" }}>{siteConfig.description}</div>
      </div>
    ),
    { ...size },
  );
}
