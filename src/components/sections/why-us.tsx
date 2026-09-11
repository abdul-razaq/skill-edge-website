import {
  Award,
  ClipboardCheck,
  Layers,
  MessagesSquare,
  PlayCircle,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { learningBenefits } from "@/content/site";

const icons: LucideIcon[] = [
  Wrench,
  Layers,
  ClipboardCheck,
  Award,
  PlayCircle,
  MessagesSquare,
];

export function WhyUs() {
  return (
    <Section tone="ink">
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Why Skill Edge"
          title="Knowledge is not enough on its own"
          description="True value comes from applying skills to solve real business problems. Every programme is built around that idea."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {learningBenefits.map((benefit, index) => {
            const Icon = icons[index] ?? Wrench;

            return (
              <div key={benefit.title}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
