import { cn } from "@/lib/utils";

export const inputClasses =
  "w-full min-w-0 rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-300 " +
  "transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

export function Field({
  label,
  htmlFor,
  optional,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor?: string;
  optional?: boolean;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-700">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-ink-400">(optional)</span> : null}
      </label>
      {children}
      {hint ? <p className="text-sm text-ink-400">{hint}</p> : null}
    </div>
  );
}
