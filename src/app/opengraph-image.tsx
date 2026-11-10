import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#93c5fd", fontWeight: 600 }}>Vignesh N</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16, lineHeight: 1.15 }}>
          AI &amp; Data Science Developer
        </div>
        <div style={{ fontSize: 28, color: "#cbd5e1", marginTop: 24 }}>
          Building intelligent, scalable systems with Next.js, FastAPI &amp; LLMs
        </div>
      </div>
    ),
    { ...size }
  );
}
