import type { MetadataRoute } from "next"
import { navItems, siteUrl } from "@/lib/site-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navItems.map((item) => item.href), "/contact"]
  const lastModified = new Date()

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
