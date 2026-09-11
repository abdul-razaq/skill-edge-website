import { cn } from "@/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** Vertical rhythm. `loose` is for hero-adjacent bands that need more air. */
  spacing?: "default" | "loose" | "tight";
  tone?: "white" | "muted" | "ink";
};

const spacingClasses = {
  tight: "py-14 sm:py-16",
  default: "py-20 sm:py-24 lg:py-28",
  loose: "py-24 sm:py-32 lg:py-40",
} as const;

const toneClasses = {
  white: "bg-white",
  muted: "bg-ink-50",
  ink: "bg-ink-900 text-ink-100",
} as const;

export function Section({
  className,
  spacing = "default",
  tone = "white",
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacingClasses[spacing], toneClasses[tone], className)} {...props} />
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const onDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "mx-auto max-w-2xl text-center items-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.16em]",
            onDark ? "text-brand-300" : "text-brand-600",
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cn(
          "text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          onDark && "text-white",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p className={cn("text-lg leading-relaxed", onDark ? "text-ink-200" : "text-ink-500")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
