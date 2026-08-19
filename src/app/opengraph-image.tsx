import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.title}`;
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
          justifyContent: "space-between",
          background: "#0c0b0a",
          color: "#f4efe8",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#d4a574",
            fontFamily: "monospace",
          }}
        >
          {site.domain}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05 }}>{site.name}</div>
          <div
            style={{
              marginTop: 20,
              fontSize: 30,
              color: "#9c9488",
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              color: "#9c9488",
            }}
          >
            {site.stack.join("  ·  ")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
