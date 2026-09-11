import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/content/testimonials";

/** Derives initials for the avatar placeholder, e.g. "Henry Adedayo" -> "HA". */
function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="Student stories"
          title="What our graduates say"
          description="Unedited feedback from people who completed the Business Central programme."
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100/70"
            >
              <Quote className="size-7 shrink-0 text-brand-200" aria-hidden />

              <blockquote className="mt-5 flex-1 leading-relaxed text-ink-600">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-ink-100 pt-6">
                <span
                  aria-hidden
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-700"
                >
                  {initials(testimonial.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-ink-900">{testimonial.name}</span>
                  <span className="block text-sm text-ink-500">{testimonial.course}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
