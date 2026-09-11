# Skill Edge Tech Solutions — Website

Five-page corporate site for Skill Edge Tech Solutions, built with Next.js 16, React 19 and
Tailwind CSS v4. The site has no backend: `npm run build` produces a static `out/` folder that can
be uploaded to any host.

**Live:** https://skill-edge-website.vercel.app

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
```

## Pages

| Route       | Contents                                                              |
| ----------- | --------------------------------------------------------------------- |
| `/`         | Hero, service overview, course preview, what's included, testimonials |
| `/about`    | Mission, vision, company story, the five core values                  |
| `/courses`  | All four programmes with modules, duration, format and capstone       |
| `/services` | Training, ERP implementation, process optimization, consulting        |
| `/contact`  | Enquiry form, WhatsApp / phone / email / LinkedIn                     |

## Where the content lives

All copy is in `src/content/` so it can be edited without touching components:

- `site.ts` — company details, mission, vision, contact details, nav, core values, benefits
- `courses.ts` — the course catalog
- `services.ts` — the four service lines
- `testimonials.ts` — student testimonials

Source of truth was the client's `About Skill Edge.docx` and `Student Testimonial.docx`.

## Brand assets

`public/brand/` holds SVG logos traced from the supplied PNG:

| File                         | Use                                 |
| ---------------------------- | ----------------------------------- |
| `logo-horizontal.svg`        | Header (mark + wordmark, side by side) |
| `logo-horizontal-white.svg`  | Footer and dark backgrounds         |
| `logo-full.svg`              | Original stacked lockup             |
| `logo-mark.svg`              | Symbol only                         |
| `favicon.svg`                | Browser tab icon                    |
| `og-image.png`               | Link preview for WhatsApp, LinkedIn and other shares (1200x630) |
| `apple-touch-icon.png`       | iOS home screen icon (180x180)      |

`og-image.png` is generated from the logo and tagline. If the tagline or brand
colours change, regenerate it at 1200x630 and replace the file.

Colours were sampled from the logo artwork and are defined as Tailwind tokens in
`src/app/globals.css`:

- `brand-500` `#1A7552` — the green "S"
- `ocean-500` `#1C527E` — the blue "E" / arrow
- `ink-900` `#0F2D47` — the wordmark navy, used for body headings and dark sections

## Contact form

The form posts directly to Formspree. To connect it:

1. Create a form at [formspree.io](https://formspree.io) that delivers to
   `info@skilledgetechsolutions.com`.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to the endpoint URL.
3. Rebuild.

Until that variable is set the form falls back to opening the visitor's email client with the
enquiry pre-filled, so enquiries are never silently dropped.

## Deploying

The repository is connected to Vercel, so **every push to `main` deploys automatically**. To ship a
change, commit and push; Vercel builds and promotes it to production.

To deploy manually from your machine instead:

```bash
vercel deploy --prod
```

`npm run build` also writes a plain static site to `out/`, so the contents of that folder can be
uploaded to any other web host if you ever move away from Vercel.

### Pointing the real domain at the site

Once the domain is ready:

```bash
vercel domains add skilledgetechsolutions.com
```

then follow the DNS records Vercel prints, and add them at the registrar.

The canonical domain used in social previews, `sitemap.xml` and `robots.txt` resolves itself from
`src/lib/site-url.ts`, so there is nothing to edit when the real domain goes live: Vercel repoints
`VERCEL_PROJECT_PRODUCTION_URL` at the custom domain and the next build picks it up.

If you build for a host other than Vercel, set `NEXT_PUBLIC_SITE_URL` to the live origin so those
absolute URLs are correct.

## Still needed from the client

These were blank in the brief and are marked `TODO(client)` in `src/content/site.ts`:

- Course pricing and deposit amounts (pages currently use a "Request pricing" call to action)
- Office address or a confirmed location statement
- Instagram / Facebook / X links (only LinkedIn is wired up)
- Instructor profiles, if they want an instructors section
