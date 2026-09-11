import Link from "next/link";
import { MonitorPlay, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { applyHref, deliveryModes, presentHref } from "@/content/training";
import { cn } from "@/lib/utils";

const icons = {
  "instructor-led": Users,
  "self-paced": MonitorPlay,
} as const;

export function DeliveryOptions() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          eyebrow="How you can learn"
          title="Two ways in. One standard out."
          description="Same programme, same exercises, same capstone, same certificate. You either join the live weekend cohort, or you receive a private recording link after payment."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {deliveryModes.map((mode) => {
            const Icon = icons[mode.id];
            const selfPaced = mode.id === "self-paced";

            return (
              <article
                key={mode.id}
                className={cn(
                  "flex flex-col rounded-3xl bg-white p-6 shadow-card ring-1 sm:p-10",
                  selfPaced ? "ring-ocean-200" : "ring-ink-100",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      "inline-flex size-11 items-center justify-center rounded-xl",
                      selfPaced ? "bg-ocean-50 text-ocean-600" : "bg-brand-50 text-brand-600",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
                      selfPaced ? "bg-ocean-50 text-ocean-700" : "bg-brand-50 text-brand-700",
                    )}
                  >
                    {mode.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold">{mode.label}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{mode.detail}</p>
                <p
                  className={cn(
                    "mt-5 rounded-2xl px-4 py-3.5 text-sm leading-relaxed",
                    selfPaced ? "bg-ocean-50 text-ocean-800" : "bg-ink-50 text-ink-700",
                  )}
                >
                  {mode.note}
                </p>

                <ol className="mt-8 flex flex-col gap-4 border-l border-ink-100 pl-5">
                  {mode.journey.map((step, index) => (
                    <li key={step} className="relative text-sm leading-relaxed text-ink-700">
                      <span className="absolute -left-[1.6rem] top-0.5 font-display text-[0.7rem] font-semibold text-ink-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <ButtonLink
                  href={applyHref({ delivery: mode.id })}
                  variant={selfPaced ? "secondary" : "primary"}
                  className="mt-8 w-full justify-center sm:w-auto sm:self-start"
                >
                  Apply for {mode.label.toLowerCase()}
                </ButtonLink>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm leading-relaxed text-ink-500">
          Already working through a self-paced programme?{" "}
          <Link
            href={presentHref()}
            className="font-semibold text-ocean-700 underline decoration-ocean-200 underline-offset-4 transition-colors hover:text-ocean-800"
          >
            Tell us you are ready to present
          </Link>
        </p>
      </Container>
    </Section>
  );
}
