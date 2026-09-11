import type { Metadata } from "next";
import { ArrowRight, Building2, Check, GaugeCircle, Lightbulb, Presentation } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { services } from "@/content/services";
import { coreValues } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tech skills training, ERP implementation and support, business process optimization and technology consulting, delivered by a team that implements these systems for a living.",
};

const icons: Record<string, LucideIcon> = {
  "tech-skills-training": Presentation,
  "erp-implementation": Building2,
  "process-optimization": GaugeCircle,
  "technology-consulting": Lightbulb,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical, results-oriented, built for impact"
        description="We help organisations maximise the value of their digital investments, from selecting and implementing the right systems to training the people who will run them."
      >
        <ButtonLink href="/contact" size="lg">
          Discuss your project
          <ArrowRight className="size-[18px]" />
        </ButtonLink>
      </PageHero>

      <Section spacing="tight">
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = icons[service.slug] ?? Lightbulb;

              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28 rounded-3xl border border-ink-100 p-9 sm:p-11 lg:p-12"
                >
                  <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                          <Icon className="size-5.5" />
                        </span>
                        <span className="font-display text-sm font-semibold tabular-nums text-ink-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="mt-6 text-2xl font-bold leading-snug sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-5 text-lg leading-relaxed text-ink-500">
                        {service.description}
                      </p>

                      <ButtonLink href="/contact" variant="secondary" className="mt-8">
                        Talk to us about this
                        <ArrowRight className="size-4" />
                      </ButtonLink>
                    </div>

                    <div className="rounded-2xl bg-ink-50/70 p-8">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                        What this covers
                      </h3>
                      <ul className="mt-6 flex flex-col gap-3.5">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Check className="mt-0.5 size-[18px] shrink-0 text-brand-500" />
                            <span className="text-ink-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Values as the way we work */}
      <Section tone="ink">
        <Container>
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="How we work"
            title="The standards behind every engagement"
            description="The same values that shape our classroom shape our consulting work."
          />

          <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.name} className="border-l-2 border-brand-500/60 pl-6">
                <h3 className="text-lg font-semibold text-white">{value.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-300">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Training crossover */}
      <Section>
        <Container>
          <div className="rounded-3xl bg-brand-50/60 p-10 ring-1 ring-brand-100 sm:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_auto]">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Training your team as part of the rollout
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
                  Systems only deliver when people know how to use them. Our training catalog runs
                  alongside our implementation work, so your team is ready on day one rather than
                  months later.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0 max-lg:self-start">
                <ButtonLink href="/courses" size="lg">
                  View the catalog
                  <ArrowRight className="size-[18px]" />
                </ButtonLink>
                <ButtonLink href="/hire" variant="secondary" size="lg">
                  Hire Skill Edge Talent
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Tell us what you are trying to fix"
        description="Whether it is an ERP that is not delivering, a process that keeps stalling, or a team that needs to skill up, start with a conversation."
      />
    </>
  );
}
