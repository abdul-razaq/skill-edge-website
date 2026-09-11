import type { Metadata } from "next";
import { CalendarClock, Check, GraduationCap, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/social-icons";
import { CtaBand } from "@/components/sections/cta-band";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUs } from "@/components/sections/why-us";
import { courses } from "@/content/courses";
import { whatsappLink } from "@/content/site";
import { applicationJourney, applyHref } from "@/content/training";
import { DeliveryOptions } from "@/components/sections/delivery-options";
import { ReadyToPresent } from "@/components/sections/ready-to-present";

export const metadata: Metadata = {
  title: "Training Courses",
  description:
    "Practical training in Business Analysis, Dynamics 365 Business Central, Microsoft Power Platform and AI skills. Join a live weekend cohort, or receive a private recording link after payment. Every track closes with a capstone you present.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Training catalog"
        title="Practical training with real business case studies"
        description="Four programmes for working professionals. Join the live weekend cohort, or learn self-paced from a private recording link sent after payment. Every track closes with a capstone you present."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={applyHref()} size="lg" className="w-full justify-center sm:w-auto">
            Apply for training
          </ButtonLink>
          <ButtonAnchor
            href={whatsappLink("Hello Skill Edge, I'd like to know more about your courses.")}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            size="lg"
            className="w-full justify-center sm:w-auto"
          >
            <WhatsAppIcon className="size-[17px] text-brand-600" />
            Ask on WhatsApp
          </ButtonAnchor>
        </div>
      </PageHero>

      <DeliveryOptions />

      {/* Quick index */}
      <Section spacing="tight">
        <Container>
          <nav aria-label="Course list" className="flex flex-wrap gap-3">
            {courses.map((course) => (
              <a
                key={course.slug}
                href={`#${course.slug}`}
                className="rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                {course.title}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      {/* Course details */}
      <Section spacing="tight" className="pt-0">
        <Container>
          <div className="flex flex-col gap-6">
            {courses.map((course, index) => (
              <article
                key={course.slug}
                id={course.slug}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-ink-100 bg-white"
              >
                <div className="grid lg:grid-cols-[1.25fr_1fr]">
                  <div className="p-6 sm:p-11 lg:p-12">
                    <span className="font-display text-sm font-semibold tabular-nums text-brand-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                      {course.title}
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-ink-500">{course.summary}</p>

                    <div className="mt-7 flex items-start gap-2.5 rounded-xl bg-ink-50 px-5 py-4">
                      <Users className="mt-0.5 size-[18px] shrink-0 text-ink-400" />
                      <p className="text-sm leading-relaxed text-ink-600">
                        <span className="font-semibold text-ink-800">Who it is for: </span>
                        {course.audience}
                      </p>
                    </div>

                    <h3 className="mt-9 text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Modules &amp; tools covered
                    </h3>
                    <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {course.modules.map((module) => (
                        <li key={module} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 size-[18px] shrink-0 text-brand-500" />
                          <span className="text-ink-700">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <aside className="flex flex-col gap-7 border-t border-ink-100 bg-ink-50/70 p-6 sm:p-11 lg:justify-center lg:border-l lg:border-t-0 lg:p-12">
                    <Detail
                      icon={<CalendarClock className="size-[18px] text-brand-600" />}
                      label="Duration"
                      value={course.duration}
                    />
                    <Detail
                      icon={<Users className="size-[18px] text-brand-600" />}
                      label="Format"
                      value={course.format}
                    />
                    <Detail
                      icon={<GraduationCap className="size-[18px] text-brand-600" />}
                      label="Capstone"
                      value={course.capstone}
                    />

                    <div className="flex flex-col gap-3 pt-2">
                      <ButtonLink href={applyHref({ interest: course.title })} className="w-full">
                        Apply for this programme
                      </ButtonLink>
                      <ButtonAnchor
                        href={whatsappLink(
                          `Hello Skill Edge, I'm interested in the ${course.title} programme (${course.keyword}). Please share the pricing and next cohort dates.`,
                        )}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        className="w-full"
                      >
                        <WhatsAppIcon className="size-4 text-brand-600" />
                        Enquire on WhatsApp
                      </ButtonAnchor>
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Everything included */}
      <WhyUs />

      <Section>
        <Container width="narrow">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From first enquiry to certificate"
          />
          <ol className="mt-14 flex flex-col gap-8">
            {applicationJourney.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-500 font-display text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-500">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <ReadyToPresent />
      <Testimonials />
      <CtaBand
        title="Not sure which track fits?"
        description="Tell us your background and the role you are aiming for. We will recommend the programme that gets you there fastest."
      />
    </>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{label}</h3>
      </div>
      <p className="mt-2 font-medium leading-relaxed text-ink-800">{value}</p>
    </div>
  );
}
