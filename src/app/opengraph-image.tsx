import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 120% at 50% 0%, #1a1a1a 0%, #0f0f0f 45%, #0b0b0b 100%)",
          color: "#F8F8F8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#D4AF37",
            marginBottom: 28,
          }}
        >
          German Shepherds · Kenya
        </div>
        <div style={{ fontSize: 120, fontWeight: 600, lineHeight: 1 }}>
          Citadel <span style={{ color: "#D4AF37" }}>K9s</span>
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 34,
            letterSpacing: 6,
            color: "#C9C9C9",
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
