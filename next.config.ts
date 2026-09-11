import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` emits a plain `out/` folder that can be
  // uploaded to any host. The site has no server-side code — the enquiry form
  // posts directly to Formspree.
  output: "export",
  // Required by `output: "export"`. Every image on the site is an SVG, so the
  // optimizer would not have done anything useful anyway.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
