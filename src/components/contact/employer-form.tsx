"use client";

import { useId, useState } from "react";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, inputClasses } from "@/components/forms/fields";
import { contact } from "@/content/site";
import {
  opportunityTypes,
  seniorityLevels,
  talentCategories,
  workModes,
} from "@/content/talent";
import { formspreeEndpoint, mailtoEnquiry, postEnquiry } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function EmployerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();
  const field = (name: string) => `${formId}-${name}`;
  const categories = talentCategories();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Talent request: ${data.get("opportunity_type")} / ${data.get("talent_category")}`;

    if (!formspreeEndpoint) {
      mailtoEnquiry(data, subject);
      return;
    }

    setStatus("submitting");

    try {
      await postEnquiry(data);
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
          <h2 className="text-2xl font-semibold">Thank you, we have your request</h2>
          <p className="mt-3 leading-relaxed text-ink-600">
            The Skill Edge team will review what you need and come back to you. If it is urgent,
            WhatsApp us at {contact.whatsapp}.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-10"
    >
      <input type="hidden" name="form_type" value="employer_talent_request" />
      <input type="hidden" name="_subject" value="Skill Edge talent request" />

      <h2 className="text-2xl font-semibold">Tell us what you need</h2>
      <p className="mt-2.5 leading-relaxed text-ink-500">
        A request to our team, not a public listing. We review it privately and share graduate
        profiles only where there is a fit.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Company / organisation" htmlFor={field("company")}>
          <input
            id={field("company")}
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClasses}
          />
        </Field>
        <Field label="Contact person" htmlFor={field("contact_name")}>
          <input
            id={field("contact_name")}
            name="contact_name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </Field>
        <Field label="Business email" htmlFor={field("email")}>
          <input
            id={field("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </Field>
        <Field label="Phone number" htmlFor={field("phone")}>
          <input
            id={field("phone")}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClasses}
          />
        </Field>
        <Field label="Type of opportunity" htmlFor={field("opportunity_type")}>
          <select
            id={field("opportunity_type")}
            name="opportunity_type"
            required
            defaultValue=""
            className={cn(inputClasses, "appearance-none pr-10")}
          >
            <option value="" disabled>
              Select an option
            </option>
            {opportunityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Skill / talent category"
          htmlFor={field("talent_category")}
          hint="Drawn from the current Skill Edge training tracks."
        >
          <select
            id={field("talent_category")}
            name="talent_category"
            required
            defaultValue=""
            className={cn(inputClasses, "appearance-none pr-10")}
          >
            <option value="" disabled>
              Select an option
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Role / title required" htmlFor={field("role")}>
          <input id={field("role")} name="role" type="text" required className={inputClasses} />
        </Field>
        <Field label="Number of people" htmlFor={field("headcount")} optional>
          <input
            id={field("headcount")}
            name="headcount"
            type="text"
            inputMode="numeric"
            placeholder="1"
            className={inputClasses}
          />
        </Field>
        <Field label="Experience / seniority" htmlFor={field("seniority")} optional>
          <select
            id={field("seniority")}
            name="seniority"
            defaultValue=""
            className={cn(inputClasses, "appearance-none pr-10")}
          >
            <option value="">Select if known</option>
            {seniorityLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Location" htmlFor={field("location")} optional>
          <input id={field("location")} name="location" type="text" className={inputClasses} />
        </Field>
        <Field label="Remote / hybrid / on-site" htmlFor={field("work_mode")} optional>
          <select
            id={field("work_mode")}
            name="work_mode"
            defaultValue=""
            className={cn(inputClasses, "appearance-none pr-10")}
          >
            <option value="">Select if known</option>
            {workModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Expected start date" htmlFor={field("start_date")} optional>
          <input id={field("start_date")} name="start_date" type="text" className={inputClasses} />
        </Field>
        <Field label="Engagement duration" htmlFor={field("duration")} optional>
          <input id={field("duration")} name="duration" type="text" className={inputClasses} />
        </Field>
        <Field
          label="Required skills or competencies"
          htmlFor={field("skills")}
          className="sm:col-span-2"
          optional
        >
          <textarea
            id={field("skills")}
            name="skills"
            rows={3}
            className={cn(inputClasses, "resize-y")}
          />
        </Field>
        <Field
          label="Role description"
          htmlFor={field("description")}
          className="sm:col-span-2"
        >
          <textarea
            id={field("description")}
            name="description"
            required
            rows={5}
            placeholder="What the person will do, and what good looks like."
            className={cn(inputClasses, "resize-y")}
          />
        </Field>
        <Field
          label="Additional requirements"
          htmlFor={field("additional")}
          className="sm:col-span-2"
          optional
        >
          <textarea
            id={field("additional")}
            name="additional"
            rows={3}
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
            Something went wrong sending your request. Please email us at{" "}
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
            Send talent request
          </>
        )}
      </Button>

      <p className="mt-4 text-sm text-ink-400">
        We only use these details to respond to this request and to identify suitable graduates.
      </p>
    </form>
  );
}
