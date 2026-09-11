import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

/** Consistent masthead for every inner page. */
export function PageHero({ eyebrow, title, description, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-ink-100 bg-ink-50", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 size-[26rem] rounded-full bg-brand-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-24 size-[22rem] rounded-full bg-ocean-100/50 blur-3xl"
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500 sm:text-xl">{description}</p>
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
