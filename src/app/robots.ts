import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

// Required so the route is emitted as a file under `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
