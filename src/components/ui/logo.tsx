import Image from "next/image";
import { cn } from "@/lib/utils";
import { company } from "@/content/site";

/** Horizontal lockup is 1164 x 280. */
const LOCKUP_ASPECT = 1164 / 280;
/** Symbol is 347 x 279. */
const MARK_ASPECT = 347 / 279;

type LogoProps = {
  /** Rendered height in pixels; width is derived from the lockup aspect ratio. */
  height?: number;
  variant?: "color" | "white";
  priority?: boolean;
  className?: string;
};

export function Logo({ height = 42, variant = "color", priority, className }: LogoProps) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-horizontal-white.png" : "/brand/logo-horizontal.png"}
      alt={company.name}
      width={Math.round(height * LOCKUP_ASPECT)}
      height={height}
      priority={priority}
      className={cn("w-auto", className)}
      style={{ height }}
    />
  );
}

/** Symbol only, for tight spaces and square contexts. */
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
      src={variant === "white" ? "/brand/logo-mark-white.png" : "/brand/logo-mark.png"}
      alt=""
      aria-hidden
      width={Math.round(size * MARK_ASPECT)}
      height={size}
      className={cn("w-auto", className)}
      style={{ height: size }}
    />
  );
}
