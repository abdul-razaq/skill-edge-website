import { ArrowRight, CalendarDays, GraduationCap, PlayCircle, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { company } from "@/content/site";
import { courses } from "@/content/courses";

const highlights = [
  { icon: CalendarDays, label: "Live or self-paced" },
  { icon: Target, label: "Real business case studies" },
  { icon: GraduationCap, label: "Capstone + certificate" },
  { icon: PlayCircle, label: "Every session recorded" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-52 size-[34rem] rounded-full bg-brand-100/45 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-44 top-24 size-[30rem] rounded-full bg-ocean-100/45 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-brand-100">
              Technology training &amp; consulting
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.75rem]">
              From skills to solutions.{" "}
              <span className="text-brand-600">Built for impact.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl">
              {company.name} equips professionals and businesses with practical technology skills
              and innovative solutions that drive growth, efficiency and digital transformation.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/courses" size="lg" className="w-full justify-center sm:w-auto">
                Explore our courses
                <ArrowRight className="size-[18px]" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="secondary"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                Talk to our team
              </ButtonLink>
            </div>

            <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-ink-600">
                  <Icon className="size-[18px] shrink-0 text-brand-500" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white p-2 shadow-lift ring-1 ring-ink-100">
              <div className="rounded-[1.25rem] bg-ink-50/70 p-7 sm:p-9">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 sm:text-sm sm:tracking-[0.14em]">
                    Current programmes
                  </h2>
                  <span className="shrink-0 text-xs font-semibold text-brand-600 sm:text-sm">
                    {courses.length} tracks
                  </span>
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {courses.map((course) => (
                    <li
                      key={course.slug}
                      className="flex flex-col gap-2.5 rounded-2xl bg-white px-5 py-4 shadow-card sm:flex-row sm:items-center sm:justify-between sm:gap-5"
                    >
                      <span className="text-[0.9375rem] font-semibold leading-snug text-ink-900">
                        {course.title}
                      </span>
                      <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 sm:shrink-0 sm:self-auto">
                        {course.duration}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-sm leading-relaxed text-ink-500">
                  Live weekends or self-paced, with a private recording link after payment.
                  Both close with a capstone you present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
