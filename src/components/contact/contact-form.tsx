"use client";

import { useId, useState } from "react";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/site";
import { courses } from "@/content/courses";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

/**
 * Formspree endpoint. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT once the client's form
 * is created; until then the form falls back to composing an email so no
 * enquiry is ever silently dropped.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

const interests = [
  ...courses.map((course) => course.title),
  ...services.map((service) => service.title),
  "General enquiry",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();

  const field = (name: string) => `${formId}-${name}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // No endpoint configured yet — hand off to the visitor's mail client.
    if (!ENDPOINT) {
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "—"}`,
        `Interested in: ${data.get("interest")}`,
        "",
        String(data.get("message") ?? ""),
      ].join("\n");

      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Website enquiry — ${data.get("interest")}`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-5 rounded-2xl border border-brand-200 bg-brand-50/60 p-9 sm:p-11">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-500 text-white">
          <CircleCheck className="size-6" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold">Thank you — your message is on its way</h2>
          <p className="mt-3 leading-relaxed text-ink-600">
            We have received your enquiry and will get back to you shortly. If it is urgent, reach
            us on WhatsApp at {contact.whatsapp}.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card sm:p-10"
    >
      <h2 className="text-2xl font-semibold">Send us a message</h2>
      <p className="mt-2.5 leading-relaxed text-ink-500">
        Tell us what you are interested in and we will come back to you with pricing and the next
        cohort dates.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor={field("name")}>
          <input
            id={field("name")}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </Field>

        <Field label="Email address" htmlFor={field("email")}>
          <input
            id={field("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </Field>

        <Field label="Phone / WhatsApp" htmlFor={field("phone")} optional>
          <input
            id={field("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+234 …"
            className={inputClasses}
          />
        </Field>

        <Field label="I'm interested in" htmlFor={field("interest")}>
          <select
            id={field("interest")}
            name="interest"
            required
            defaultValue=""
            className={cn(inputClasses, "appearance-none bg-[length:1rem] pr-10")}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" htmlFor={field("message")} className="sm:col-span-2">
          <textarea
            id={field("message")}
            name="message"
            required
            rows={5}
            placeholder="Tell us about your background and what you are aiming for."
            className={cn(inputClasses, "resize-y")}
          />
        </Field>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3.5 text-sm text-red-800"
        >
          <TriangleAlert className="mt-0.5 size-[18px] shrink-0" />
          <span>
            Something went wrong sending your message. Please email us directly at{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold underline">
              {contact.email}
            </a>
            .
          </span>
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-8 w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <LoaderCircle className="size-[18px] animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-[18px]" />
            Send message
          </>
        )}
      </Button>

      <p className="mt-4 text-sm text-ink-400">
        We only use your details to respond to this enquiry.
      </p>
    </form>
  );
}

const inputClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-300 " +
  "transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

function Field({
  label,
  htmlFor,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-700">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-ink-400">(optional)</span> : null}
      </label>
      {children}
    </div>
  );
}
