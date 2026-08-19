import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const headshotData = await readFile(
  join(process.cwd(), "public", site.headshot.src.replace(/^\//, "")),
  "base64",
);
const headshotSrc = `data:image/png;base64,${headshotData}`;

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0c0b0a",
          color: "#f4efe8",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            flex: 1,
            paddingRight: 56,
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
            <div style={{ fontSize: 68, lineHeight: 1.05 }}>{site.name}</div>
            <div
              style={{
                marginTop: 20,
                fontSize: 28,
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
        <img
          src={headshotSrc}
          alt=""
          width={390}
          height={390}
          style={{
            width: 390,
            height: 390,
            borderRadius: 195,
            objectFit: "cover",
            objectPosition: "center 18%",
            border: "3px solid #d4a574",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    size,
  );
}
