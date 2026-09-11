import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap " +
  "transition-[background-color,color,box-shadow,transform] duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-500 text-white shadow-sm hover:bg-brand-600 focus-visible:outline-brand-500",
  secondary:
    "bg-white text-ink-900 ring-1 ring-ink-200 hover:bg-ink-50 hover:ring-ink-300 focus-visible:outline-ink-400",
  ghost: "text-ink-700 hover:bg-ink-50 hover:text-ink-900 focus-visible:outline-ink-400",
  onDark:
    "bg-white text-ink-900 hover:bg-ink-100 focus-visible:outline-white focus-visible:outline-offset-4",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, size, className)} {...props} />;
}

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, size, className)} {...props} />;
}

type ExternalButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonAnchor({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ExternalButtonProps) {
  return <a className={buttonClasses(variant, size, className)} {...props} />;
}
