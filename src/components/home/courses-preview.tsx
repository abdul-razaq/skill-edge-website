import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { courses } from "@/content/courses";

export function CoursesPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Training catalog"
            title="Choose the track that matches your goal"
            description="Four programmes, live or self-paced, each taking you from foundations through to a capstone you can show."
            className="max-w-2xl"
          />
          <ButtonLink href="/courses" variant="secondary" className="shrink-0 max-sm:self-start">
            View all courses
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses#${course.slug}`}
              className="group flex flex-col rounded-2xl border border-ink-100 p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
            >
              {/* Badge sits above the title on narrow screens so the heading
                  gets the full width instead of being squeezed beside it. */}
              <div className="flex flex-col-reverse items-start gap-3 sm:flex-row sm:justify-between sm:gap-5">
                <h3 className="text-xl font-semibold leading-snug">{course.title}</h3>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-600">
                  <Clock className="size-3.5" />
                  {course.duration}
                </span>
              </div>

              <p className="mt-4 flex-1 leading-relaxed text-ink-500">{course.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {course.modules.map((module) => (
                  <li
                    key={module}
                    className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700"
                  >
                    {module}
                  </li>
                ))}
              </ul>

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                Course details
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
