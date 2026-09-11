import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export function TalentPreview() {
  return (
    <Section spacing="tight">
      <Container>
        <div className="grid gap-8 rounded-3xl bg-ink-50 px-6 py-8 ring-1 ring-ink-100 sm:px-12 sm:py-12 lg:grid-cols-[1.3fr_auto] lg:items-center lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
              Skill Edge Talent Network
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Need trained people, not only training?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              Employers can request Skill Edge graduates for internships, freelance work,
              contracts, projects or full-time roles. Graduates can opt in. We never guarantee a
              placement.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/hire" size="lg" className="w-full justify-center sm:w-auto">
              Hire Skill Edge Talent
              <ArrowRight className="size-[18px]" />
            </ButtonLink>
            <ButtonLink href="/join" variant="secondary" size="lg" className="w-full justify-center sm:w-auto">
              Join the network
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
