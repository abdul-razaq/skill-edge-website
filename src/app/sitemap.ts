import type { MetadataRoute } from "next";
import { extraNav, nav } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

// Required so the route is emitted as a file under `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...nav, ...extraNav].map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
