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

        <ul className="mt-14 flex flex-col gap-5">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <figure className="grid overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-100/70 lg:grid-cols-[18rem_minmax(0,1fr)]">
                <figcaption className="flex items-center border-b border-ink-100/80 bg-brand-50/50 px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
                  <div className="flex items-center gap-3.5 lg:flex-col lg:items-start lg:gap-5">
                    <span
                      aria-hidden
                      className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-700 shadow-card ring-1 ring-brand-100 lg:size-14 lg:text-base"
                    >
                      {initials(testimonial.name)}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-ink-900">{testimonial.name}</span>
                      <span className="mt-0.5 block text-sm leading-snug text-ink-500">
                        {testimonial.course}
                      </span>
                    </span>
                  </div>
                </figcaption>

                <blockquote className="relative min-w-0 px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                  <Quote className="size-7 text-brand-200" aria-hidden />
                  <p className="mt-4 text-[1.05rem] leading-[1.75] text-ink-600 sm:text-lg sm:leading-[1.8]">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
