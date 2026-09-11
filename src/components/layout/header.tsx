"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { company, nav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow duration-200",
        scrolled ? "shadow-[0_1px_0_rgb(15_45_71/0.08),0_6px_24px_-16px_rgb(15_45_71/0.35)]" : "",
      )}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <Link href="/" aria-label={`${company.name} — home`} className="shrink-0">
            <Logo height={34} priority />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-brand-700"
                    : "text-ink-600 hover:text-ink-900 hover:bg-ink-50",
                )}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/contact">Book a consultation</ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-50 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink-100 bg-white lg:hidden">
          <Container className="py-5">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-700 hover:bg-ink-50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ButtonLink
              href="/contact"
              size="lg"
              onClick={() => setOpen(false)}
              className="mt-5 w-full"
            >
              Book a consultation
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
