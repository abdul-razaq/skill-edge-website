import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` emits a plain `out/` folder that can be
  // uploaded to any host. The site has no server-side code — the enquiry form
  // posts directly to Formspree.
  output: "export",
  // Required by `output: "export"`. The logo lockups are PNGs from the original
  // artwork; the optimizer is not available under static export.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
