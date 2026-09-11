import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { EmployerForm } from "@/components/contact/employer-form";
import { employerValue, opportunityTypes, talentCategories, talentDisclaimer } from "@/content/talent";

export const metadata: Metadata = {
  title: "Hire Skill Edge Talent",
  description:
    "Request trained Skill Edge professionals for internships, freelance work, contract engagements, project-based roles and full-time employment.",
};

const steps = [
  {
    title: "You tell us what you need",
    body: "The role, the skills, and the kind of engagement. There is no public listing and no candidate inbox here.",
  },
  {
    title: "We review our graduates",
    body: "We look across people who completed the relevant track and presented their capstone.",
  },
  {
    title: "We come back with a shortlist",
    body: "If there is a fit, we speak to the graduate first, then share the relevant profiles with you.",
  },
  {
    title: "You take it from there",
    body: "You interview and decide. Internship, freelance, contract, project or full-time is yours to choose.",
  },
];

export default function HirePage() {
  const categories = talentCategories();

  return (
    <>
      <PageHero
        eyebrow="Skill Edge Talent Network"
        title="Hire Skill Edge Talent"
        description={employerValue}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#request" size="lg" className="w-full justify-center sm:w-auto">
            Tell us what you need
            <ArrowRight className="size-[18px]" />
          </ButtonLink>
          <ButtonLink href="/join" variant="secondary" size="lg" className="w-full justify-center sm:w-auto">
            Graduates: join the network
          </ButtonLink>
        </div>
      </PageHero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="An employer request, not a job board"
            description="Write to our team. We match the brief to trained Skill Edge professionals. You will not browse public CVs on this page."
            className="max-w-3xl"
          />
          <ol className="mt-14 grid gap-8 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
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

      <Section tone="muted" spacing="tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
                Talent categories
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink-700 ring-1 ring-ink-100"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
                Types of opportunity
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {opportunityTypes.map((type) => (
                  <li
                    key={type}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink-700 ring-1 ring-ink-100"
                  >
                    <BriefcaseBusiness className="size-3.5 text-brand-600" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16 [&>*]:min-w-0">
            <div id="request" className="scroll-mt-28">
              <EmployerForm />
            </div>
            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl border border-ink-100 p-8">
                <ShieldCheck className="size-6 text-brand-600" />
                <h2 className="mt-4 text-lg font-semibold">No guaranteed placement</h2>
                <p className="mt-3 leading-relaxed text-ink-500">{talentDisclaimer}</p>
              </div>
              <div className="rounded-2xl bg-ink-50 p-8">
                <h2 className="text-lg font-semibold">Are you a graduate?</h2>
                <p className="mt-3 leading-relaxed text-ink-500">
                  Completed a Skill Edge programme? Join the network so we can consider you when
                  employers write to us.
                </p>
                <ButtonLink href="/join" variant="secondary" className="mt-6">
                  Join the Talent Network
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Need training for your own team instead?"
        description="If the gap is skills inside the business rather than a hire, start with a conversation about our programmes or consulting work."
      />
    </>
  );
}
