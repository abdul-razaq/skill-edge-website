"use client";

import { useEffect, useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, inputClasses } from "@/components/forms/fields";
import { contact } from "@/content/site";
import { courses } from "@/content/courses";
import { services } from "@/content/services";
import { deliveryModes, readyToPresentInterest } from "@/content/training";
import { formspreeEndpoint, mailtoEnquiry, postEnquiry } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const interests = [
  ...courses.map((course) => course.title),
  ...services.map((service) => service.title),
  "Hire Skill Edge Talent",
  "Join the Talent Network",
  readyToPresentInterest,
  "General enquiry",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();
  const field = (name: string) => `${formId}-${name}`;
  const [interest, setInterest] = useState("");
  const [delivery, setDelivery] = useState("");

  useEffect(() => {
    const requestedInterest = searchParams.get("interest") ?? "";
    const requestedDelivery = searchParams.get("delivery") ?? "";
    if (interests.includes(requestedInterest)) setInterest(requestedInterest);
    if (deliveryModes.some((mode) => mode.id === requestedDelivery)) {
      setDelivery(requestedDelivery);
    }
  }, [searchParams]);

  const isReadyToPresent = interest === readyToPresentInterest;
  const isInstructorLed = delivery === "instructor-led" && !isReadyToPresent;
  const isSelfPaced = delivery === "self-paced" && !isReadyToPresent;
  const showDelivery = !isReadyToPresent;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Website enquiry: ${data.get("interest")}`;

    if (!formspreeEndpoint) {
      mailtoEnquiry(data, subject);
      return;
    }

    setStatus("submitting");

    try {
      await postEnquiry(data);
      form.reset();
      setInterest("");
      setDelivery("");
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
          <h2 className="text-2xl font-semibold">Thank you, your message is on its way</h2>
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
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-10"
    >
      <input type="hidden" name="form_type" value="training_or_general" />
      <input type="hidden" name="_subject" value="Skill Edge website enquiry" />

      <h2 className="text-2xl font-semibold">
        {isReadyToPresent
          ? "Ready to present"
          : isSelfPaced
            ? "Apply for self-paced training"
            : isInstructorLed
              ? "Apply for instructor-led training"
              : "Send us a message"}
      </h2>
      <p className="mt-2.5 leading-relaxed text-ink-500">
        {isReadyToPresent
          ? "Tell us which programme you have been working through, and when you can present. We will schedule the capstone with you."
          : isSelfPaced
            ? "Leave your details. We reply with pricing. After payment, we send a private link to the recorded course. You are not added to a live class."
            : isInstructorLed
              ? "Leave your details and a preferred start date if you have one. We reply with pricing and the next live cohort."
              : "Tell us the programme and how you want to learn. We reply with pricing, the next live cohort, or a private recording link after payment."}
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
            value={interest}
            onChange={(event) => {
              const next = event.target.value;
              setInterest(next);
              if (next === readyToPresentInterest) setDelivery("");
            }}
            className={cn(inputClasses, "appearance-none bg-[length:1rem] pr-10")}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>

        {isReadyToPresent ? (
          <Field label="Programme you are presenting" htmlFor={field("programme")}>
            <select
              id={field("programme")}
              name="programme"
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
        ) : null}

        {isReadyToPresent ? (
          <Field
            label="When can you present?"
            htmlFor={field("presentation_window")}
            optional
            hint="A week or a few dates is enough."
          >
            <input
              id={field("presentation_window")}
              name="presentation_window"
              type="text"
              placeholder="From next week, or evenings only"
              className={inputClasses}
            />
          </Field>
        ) : null}

        {showDelivery ? (
          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-medium text-ink-700">How you want to learn</legend>
            <p className="mt-1.5 text-sm text-ink-400">
              Skip this if you are writing about consulting, hiring talent, or something else.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {deliveryModes.map((mode) => (
                <label
                  key={mode.id}
                  className="flex cursor-pointer gap-3 rounded-xl border border-ink-200 bg-white px-4 py-4 transition-colors has-[:checked]:border-brand-400 has-[:checked]:bg-brand-50/50"
                >
                  <input
                    type="radio"
                    name="delivery"
                    value={mode.label}
                    checked={delivery === mode.id}
                    onChange={() => setDelivery(mode.id)}
                    className="mt-1 size-4 accent-brand-600"
                  />
                  <span>
                    <span className="block font-semibold text-ink-900">{mode.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-500">
                      {mode.summary}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {isInstructorLed ? (
          <Field
            label="Preferred start date or cohort"
            htmlFor={field("preferred_cohort")}
            className="sm:col-span-2"
            optional
            hint="If you do not have a date, we will share the next available cohort."
          >
            <input
              id={field("preferred_cohort")}
              name="preferred_cohort"
              type="text"
              placeholder="Next available, or a month that works"
              className={inputClasses}
            />
          </Field>
        ) : null}

        <Field label="Message" htmlFor={field("message")} className="sm:col-span-2">
          <textarea
            id={field("message")}
            name="message"
            required
            rows={5}
            placeholder={
              isReadyToPresent
                ? "Confirm the programme, what you have completed, and any dates we should avoid."
                : "Tell us about your background and what you are aiming for."
            }
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
            {isReadyToPresent ? "Send readiness note" : "Send message"}
          </>
        )}
      </Button>

      <p className="mt-4 text-sm text-ink-400">
        We only use your details to respond to this enquiry.
      </p>
    </form>
  );
}
