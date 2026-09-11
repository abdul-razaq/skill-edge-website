import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { LinkedInIcon, WhatsAppIcon } from "@/components/ui/social-icons";
import { company, contact, extraNav, nav, whatsappLink } from "@/content/site";
import { courses } from "@/content/courses";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-300">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div className="max-w-sm">
            <Logo height={42} variant="white" />
            <p className="mt-6 text-sm leading-relaxed text-ink-300">{company.taglinePlain}</p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label={`${company.name} on LinkedIn`}
            >
              <LinkedInIcon className="size-[17px]" />
            </a>
          </div>

          <FooterColumn title="Company">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            {extraNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Courses">
            {courses.map((course) => (
              <FooterLink key={course.slug} href={`/courses#${course.slug}`}>
                {course.title.replace(" for Non-Tech Professionals", "").replace("Microsoft ", "")}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-start gap-2.5 text-sm text-ink-300 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-300" />
                <span className="break-all">{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2.5 text-sm text-ink-300 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-brand-300" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-ink-300 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-4 shrink-0 text-brand-300" />
                {contact.whatsapp}
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>{company.taglinePlain}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-ink-300 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
