/** How a learner can take a Skill Edge programme. */

export const readyToPresentInterest = "Ready for my project presentation";

export const deliveryModes = [
  {
    id: "instructor-led",
    label: "Instructor-led",
    badge: "Live cohort",
    summary: "Join the next weekend class, on a published start date.",
    detail:
      "Enquire about the next cohort. After Skill Edge confirms your place and payment is made, you attend the scheduled weekend sessions with an instructor.",
    note: "This is the live class. Recordings are for revision after each session, not a replacement for attending.",
    journey: [
      "Send your details and ask for the next start date",
      "After confirmation and payment, you join that live class",
      "Attend the weekend sessions and complete the exercises",
      "Present your capstone with the group, then receive your certificate",
    ],
  },
  {
    id: "self-paced",
    label: "Self-paced",
    badge: "Private access",
    summary: "After payment, receive a private link to the recorded course.",
    detail:
      "Enquire with your details. After Skill Edge confirms the programme and payment is made, we send a private link to the recordings and materials. You are not joining a live class.",
    note: "No cohort. No class timetable. You learn on your own schedule, then tell us when you are ready to present.",
    journey: [
      "Send your details and choose self-paced",
      "After confirmation and payment, we send a private recording link",
      "Watch the classes and complete the exercises in your own time",
      "Tell us when you are ready to present, then receive your certificate",
    ],
  },
] as const;

export type DeliveryModeId = (typeof deliveryModes)[number]["id"];

export const applicationJourney = [
  {
    title: "Enquire and choose how you will learn",
    body: "Send your details and pick instructor-led or self-paced. We confirm pricing. Live applicants hear the next start date. Self-paced applicants are not joining a class.",
  },
  {
    title: "After payment, you start in the way you chose",
    body: "Instructor-led: you are added to the weekend cohort. Self-paced: we send a private link to the recorded course. You do not receive a class timetable.",
  },
  {
    title: "Learn, practise, then present",
    body: "The exercises and capstone are the same. Self-paced learners tell us when they are ready to present. That presentation is required for the certificate.",
  },
  {
    title: "Leave with proof of what you can do",
    body: "A certificate, the recordings, and a portfolio piece. Joining the talent network after that is optional, and never a promise of work.",
  },
] as const;

export function applyHref(options?: {
  interest?: string;
  delivery?: DeliveryModeId;
}): string {
  const params = new URLSearchParams();
  if (options?.interest) params.set("interest", options.interest);
  if (options?.delivery) params.set("delivery", options.delivery);
  const query = params.toString();
  return query ? `/contact/?${query}` : "/contact/";
}

export function presentHref(): string {
  return applyHref({ interest: readyToPresentInterest });
}
