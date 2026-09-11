import type { MetadataRoute } from "next";

// Required so the route is emitted as a file under `output: "export"`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.skilledgetechsolutions.com/sitemap.xml",
  };
}
