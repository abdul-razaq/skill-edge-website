import type { Metadata } from "next";
import { Compass, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo";
import { CtaBand } from "@/components/sections/cta-band";
import { Testimonials } from "@/components/sections/testimonials";
import { company, coreValues } from "@/content/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Skill Edge Tech Solutions is a technology-driven firm providing practical training and strategic consulting that helps professionals and businesses build capabilities and achieve digital transformation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We bridge the gap between learning and real-world application"
        description={`${company.name} is a technology-driven firm that provides practical training and strategic consulting services to help professionals and businesses build capabilities, optimise processes, and achieve digital transformation.`}
      >
        <ButtonLink href="/contact" size="lg">
          Work with us
        </ButtonLink>
      </PageHero>

      {/* Mission & vision */}
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-brand-50/60 p-9 ring-1 ring-brand-100 sm:p-11">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Target className="size-5.5" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{company.mission}</p>
            </article>

            <article className="rounded-2xl bg-ocean-50/70 p-9 ring-1 ring-ocean-100 sm:p-11">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ocean-500 text-white">
                <Compass className="size-5.5" />
              </span>
              <h2 className="mt-6 text-2xl font-semibold">Our vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{company.vision}</p>
            </article>
          </div>
        </Container>
      </Section>

      {/* Company story */}
      <Section tone="muted" spacing="default">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Who we are" title="Built for impact, not just completion" />

              <div className="mt-9 rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100/70">
                <LogoMark size={44} />
                <p className="mt-6 text-lg font-medium leading-relaxed text-ink-800">
                  {company.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-600">
              {company.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}

              <div className="mt-2 rounded-2xl border border-ink-200 bg-white p-7">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
                  Our services span
                </h3>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.slug} className="flex items-start gap-2.5 text-base text-ink-700">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500"
                      />
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core values */}
      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Core values"
            title="What we hold ourselves to"
            description="Five principles that shape how we teach, how we consult and how we work with the people who trust us."
          />

          <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <li
                key={value.name}
                className="rounded-2xl border border-ink-100 p-8 transition-colors duration-200 hover:border-brand-200 hover:bg-brand-50/40"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-brand-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{value.name}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-500">{value.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Testimonials />
      <CtaBand
        title="Let's talk about where you want to go"
        description="Whether you are switching careers or rolling out a new system across your business, we will help you map the route."
      />
    </>
  );
}
