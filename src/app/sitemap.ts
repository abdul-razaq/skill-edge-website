import type { MetadataRoute } from "next";
import { nav } from "@/content/site";

const BASE_URL = "https://www.skilledgetechsolutions.com";

// Required so the route is emitted as a file under `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return nav.map((item) => ({
    url: `${BASE_URL}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
