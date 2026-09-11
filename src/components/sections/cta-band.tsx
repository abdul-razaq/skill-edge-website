import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink, ButtonAnchor } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/social-icons";
import { whatsappLink } from "@/content/site";

type CtaBandProps = {
  title?: string;
  description?: string;
};

/** Closing conversion band, repeated at the foot of every page. */
export function CtaBand({
  title = "Ready to take the next step?",
  description = "Tell us where you are and what you are aiming for, and we will point you to the programme or service that fits. No pressure, no obligation.",
}: CtaBandProps) {
  return (
    <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-16 size-72 rounded-full bg-ocean-500/25 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-200">{description}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="onDark" size="lg">
                Make an enquiry
                <ArrowRight className="size-[18px]" />
              </ButtonLink>
              <ButtonAnchor
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                size="lg"
                className="bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
              >
                <WhatsAppIcon className="size-[17px]" />
                Chat on WhatsApp
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
