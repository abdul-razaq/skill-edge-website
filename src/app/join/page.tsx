import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { GraduateForm } from "@/components/contact/graduate-form";
import { talentDisclaimer } from "@/content/talent";

export const metadata: Metadata = {
  title: "Join the Talent Network",
  description:
    "Skill Edge graduates can submit their details to be considered when employers request trained professionals. This is not a guarantee of employment.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="For graduates"
        title="Join the Talent Network"
        description="Completed a Skill Edge programme? Leave your details. When an employer asks for trained people, we look here first. This is not a job application, and it is not a promise of work."
      >
        <ButtonLink href="/hire" variant="secondary" size="lg" className="w-full justify-center sm:w-auto">
          Employers: hire Skill Edge talent
        </ButtonLink>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 [&>*]:min-w-0">
            <GraduateForm />
            <aside className="rounded-2xl border border-ink-100 p-8">
              <h2 className="text-lg font-semibold">What this is, and is not</h2>
              <p className="mt-3 leading-relaxed text-ink-500">{talentDisclaimer}</p>
              <p className="mt-5 leading-relaxed text-ink-500">
                Finishing a programme still means presenting your capstone and receiving your
                certificate. Joining the network is optional, and separate from that.
              </p>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
