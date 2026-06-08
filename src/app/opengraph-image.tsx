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
          background: "#faf9f7",
          color: "#1a2332",
        }}
      >
        <div style={{ fontSize: 24, color: "#5c6678", marginBottom: 24 }}>{siteConfig.brand}</div>
        <div style={{ fontSize: 56, fontWeight: 400, lineHeight: 1.1, maxWidth: 900, fontFamily: "serif" }}>
          Software that ships.
        </div>
        <div style={{ marginTop: 28, fontSize: 22, color: "#5c6678" }}>{siteConfig.description}</div>
      </div>
    ),
    { ...size },
  );
}
