import { ImageResponse } from "next/og"
import { siteData } from "@/lib/site-data"

export const alt = `${siteData.person.fullName} — ${siteData.person.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Generated at build time so shared links have a real preview card. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #161618 0%, #1d1b2e 55%, #141422 100%)",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#7c6cf5",
              color: "#111",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {siteData.person.name.charAt(0)}
          </div>
          <div style={{ color: "#a8a5b8", fontSize: 26 }}>{siteData.person.fullName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#f5f4f7", fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
            {siteData.person.role}
          </div>
          <div style={{ color: "#a8a5b8", fontSize: 30, lineHeight: 1.4, maxWidth: 900 }}>
            {siteData.person.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, color: "#7c6cf5", fontSize: 24 }}>
          <span>React</span>
          <span style={{ color: "#4b4859" }}>·</span>
          <span>TypeScript</span>
          <span style={{ color: "#4b4859" }}>·</span>
          <span>Next.js</span>
          <span style={{ color: "#4b4859" }}>·</span>
          <span>{siteData.person.location}</span>
        </div>
      </div>
    ),
    size,
  )
}
