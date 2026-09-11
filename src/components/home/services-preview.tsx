import Link from "next/link";
import { ArrowRight, Building2, GaugeCircle, Lightbulb, Presentation } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { services } from "@/content/services";

const icons: Record<string, LucideIcon> = {
  "tech-skills-training": Presentation,
  "erp-implementation": Building2,
  "process-optimization": GaugeCircle,
  "technology-consulting": Lightbulb,
};

export function ServicesPreview() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Two sides of the same promise"
          description="We train the people who run your systems, and we help organisations implement and get value from those systems. Both are grounded in the same practical, results-oriented approach."
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.slug] ?? Lightbulb;

            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100/70 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-200"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="size-5.5" />
                </span>

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-500">{service.description}</p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Learn more
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
