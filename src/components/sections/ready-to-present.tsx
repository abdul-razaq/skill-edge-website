import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { presentHref } from "@/content/training";

export function ReadyToPresent() {
  return (
    <Section spacing="tight">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ocean-900 px-6 py-10 sm:px-12 sm:py-14 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-ocean-500/30 blur-3xl"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-200">
                Self-paced learners
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Ready to present your capstone?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ocean-100">
                When the recordings and exercises are done, tell us. We will schedule your
                project presentation. The certificate is issued only after that.
              </p>
            </div>
            <ButtonLink
              href={presentHref()}
              variant="onDark"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              I am ready to present
              <ArrowRight className="size-[18px]" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
