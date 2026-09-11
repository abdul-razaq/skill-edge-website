import Image from "next/image";
import { cn } from "@/lib/utils";
import { company } from "@/content/site";

/** Horizontal lockup viewBox is 365.31 x 100. */
const ASPECT = 3.6531;

type LogoProps = {
  /** Rendered height in pixels; width is derived from the lockup aspect ratio. */
  height?: number;
  variant?: "color" | "white";
  priority?: boolean;
  className?: string;
};

export function Logo({ height = 36, variant = "color", priority, className }: LogoProps) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-horizontal-white.svg" : "/brand/logo-horizontal.svg"}
      alt={company.name}
      width={Math.round(height * ASPECT)}
      height={height}
      priority={priority}
      className={cn("w-auto", className)}
      style={{ height }}
    />
  );
}

/** Symbol only — for tight spaces and square contexts. */
export function LogoMark({
  size = 40,
  variant = "color",
  className,
}: {
  size?: number;
  variant?: "color" | "white";
  className?: string;
}) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-mark-white.svg" : "/brand/logo-mark.svg"}
      alt=""
      aria-hidden
      width={Math.round(size * 1.2401)}
      height={size}
      className={cn("w-auto", className)}
      style={{ height: size }}
    />
  );
}
