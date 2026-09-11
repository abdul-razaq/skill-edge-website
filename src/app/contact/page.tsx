import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonAnchor } from "@/components/ui/button";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/social-icons";
import { ContactForm } from "@/components/contact/contact-form";
import { contact, whatsappLink } from "@/content/site";
import { courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Skill Edge Tech Solutions about training programmes, ERP implementation or technology consulting. Reach us by email, phone or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation"
        description="Tell us where you are and what you are aiming for. We will point you to the programme or service that fits, with pricing and the next available cohort."
      />

      <Section>
        <Container>
          {/* `min-w-0` on the children stops the grid inheriting their
              min-content width, which the long email address would otherwise
              push past the viewport on small screens. */}
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 [&>*]:min-w-0">
            <ContactForm />

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-ink-900 p-9 text-ink-200 sm:p-10">
                <h2 className="text-xl font-semibold text-white">Reach us directly</h2>
                <p className="mt-2.5 leading-relaxed text-ink-300">
                  Prefer to talk? WhatsApp is usually the quickest way to get an answer.
                </p>

                <ul className="mt-8 flex flex-col gap-6">
                  <ContactRow
                    icon={<WhatsAppIcon className="size-[17px]" />}
                    label="WhatsApp"
                    value={contact.whatsapp}
                    href={whatsappLink()}
                    external
                  />
                  <ContactRow
                    icon={<Phone className="size-[17px]" />}
                    label="Phone"
                    value={contact.phone}
                    href={contact.phoneHref}
                  />
                  <ContactRow
                    icon={<Mail className="size-[17px]" />}
                    label="Email"
                    value={contact.email}
                    href={`mailto:${contact.email}`}
                  />
                  <ContactRow
                    icon={<LinkedInIcon className="size-[16px]" />}
                    label="LinkedIn"
                    value="Skill Edge Tech Solutions"
                    href={contact.linkedin}
                    external
                  />
                </ul>

                <ButtonAnchor
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  variant="onDark"
                  size="lg"
                  className="mt-9 w-full"
                >
                  <WhatsAppIcon className="size-[17px]" />
                  Chat with us now
                </ButtonAnchor>
              </div>

              <div className="rounded-2xl border border-ink-100 p-8">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-[18px] shrink-0 text-brand-500" />
                  <div>
                    <h3 className="font-semibold text-ink-900">Where we run</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-500">{contact.location}</p>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-3 border-t border-ink-100 pt-7">
                  <CalendarDays className="mt-0.5 size-[18px] shrink-0 text-brand-500" />
                  <div>
                    <h3 className="font-semibold text-ink-900">Class schedule</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-500">
                      All {courses.length} programmes run as weekend classes, so you can train
                      without stepping away from work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
          {label}
        </span>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="mt-1 block break-words font-medium text-white transition-colors hover:text-brand-300"
        >
          {value}
        </a>
      </span>
    </li>
  );
}
