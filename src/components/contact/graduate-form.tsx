"use client";

import { useId, useState } from "react";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, inputClasses } from "@/components/forms/fields";
import { courses } from "@/content/courses";
import { contact } from "@/content/site";
import { opportunityTypes, workModes } from "@/content/talent";
import { formspreeEndpoint, mailtoEnquiry, postEnquiry } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function GraduateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();
  const field = (name: string) => `${formId}-${name}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Talent network: ${data.get("name")} / ${data.get("training_track")}`;

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
          <h2 className="text-2xl font-semibold">Thank you, we have your details</h2>
          <p className="mt-3 leading-relaxed text-ink-600">
            Skill Edge will consider you when a relevant employer request comes in. This is not a
            job application, and it is not a guarantee of work.
          </p>
        </div>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Submit another profile
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-10"
    >
      <input type="hidden" name="form_type" value="talent_network_join" />
      <input type="hidden" name="_subject" value="Skill Edge talent network application" />

      <h2 className="text-2xl font-semibold">Your professional details</h2>
      <p className="mt-2.5 leading-relaxed text-ink-500">
        We keep this on file and consider you when a relevant employer writes to us. Your profile
        is not published, and it is not shared until we have spoken with you.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor={field("name")}>
          <input
            id={field("name")}
            name="name"
            type="text"
            required
            autoComplete="name"
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
            className={inputClasses}
          />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor={field("phone")}>
          <input
            id={field("phone")}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClasses}
          />
        </Field>
        <Field label="Training track completed" htmlFor={field("training_track")}>
          <select
            id={field("training_track")}
            name="training_track"
            required
            defaultValue=""
            className={cn(inputClasses, "appearance-none pr-10")}
          >
            <option value="" disabled>
              Select a programme
            </option>
            {courses.map((course) => (
              <option key={course.slug} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Completion date or cohort" htmlFor={field("cohort")} optional>
          <input id={field("cohort")} name="cohort" type="text" className={inputClasses} />
        </Field>
        <Field label="Location" htmlFor={field("location")} optional>
          <input id={field("location")} name="location" type="text" className={inputClasses} />
        </Field>
        <Field label="LinkedIn profile" htmlFor={field("linkedin")} optional>
          <input
            id={field("linkedin")}
            name="linkedin"
            type="url"
            placeholder="https://"
            className={inputClasses}
          />
        </Field>
        <Field
          label="CV or portfolio link"
          htmlFor={field("cv_link")}
          hint="A public URL is enough. We will ask if we need the file."
          optional
        >
          <input
            id={field("cv_link")}
            name="cv_link"
            type="url"
            placeholder="https://"
            className={inputClasses}
          />
        </Field>
        <Field label="Skills" htmlFor={field("skills")} className="sm:col-span-2">
          <textarea
            id={field("skills")}
            name="skills"
            required
            rows={3}
            placeholder="The tools and modules you can actually use."
            className={cn(inputClasses, "resize-y")}
          />
        </Field>
        <Field
          label="Capstone / project"
          htmlFor={field("capstone")}
          className="sm:col-span-2"
          optional
        >
          <textarea
            id={field("capstone")}
            name="capstone"
            rows={3}
            placeholder="What you built, and the business problem it solved."
            className={cn(inputClasses, "resize-y")}
          />
        </Field>
        <Field
          label="Certifications"
          htmlFor={field("certifications")}
          className="sm:col-span-2"
          optional
          hint="Skill Edge certificate, Microsoft credentials, or anything else an employer should know."
        >
          <textarea
            id={field("certifications")}
            name="certifications"
            rows={2}
            className={cn(inputClasses, "resize-y")}
          />
        </Field>
        <Field label="Work experience" htmlFor={field("experience")} className="sm:col-span-2" optional>
          <textarea
            id={field("experience")}
            name="experience"
            rows={3}
            className={cn(inputClasses, "resize-y")}
          />
        </Field>
        <Field label="Availability" htmlFor={field("availability")} optional>
          <input
            id={field("availability")}
            name="availability"
            type="text"
            placeholder="Immediately, from next month…"
            className={inputClasses}
          />
        </Field>
        <Field label="Remote / on-site preference" htmlFor={field("work_mode")} optional>
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

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-ink-700">
            Preferred opportunity types
          </legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {opportunityTypes.map((type) => (
              <label key={type} className="flex items-center gap-2.5 text-sm text-ink-700">
                <input
                  type="checkbox"
                  name="preferred_opportunity"
                  value={type}
                  className="size-4 accent-brand-600"
                />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-600 sm:col-span-2">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
            className="mt-1 size-4 accent-brand-600"
          />
          <span>
            I understand this is not a guarantee of work. Skill Edge may store these details and
            contact me if a relevant employer request comes in. My profile will not be shared
            without that conversation first.
          </span>
        </label>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3.5 text-sm text-red-800"
        >
          <TriangleAlert className="mt-0.5 size-[18px] shrink-0" />
          <span>
            Something went wrong sending your details. Please email us at{" "}
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
            Join the network
          </>
        )}
      </Button>
    </form>
  );
}
