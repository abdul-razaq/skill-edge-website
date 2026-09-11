import { courses } from "@/content/courses";

/**
 * Employer-facing talent request options.
 * Categories are derived from the live course catalog so a new track
 * appears here when it is added to `courses.ts`.
 */
export const opportunityTypes = [
  "Internship",
  "Freelance",
  "Contract",
  "Full-time employment",
  "Project-based engagement",
  "Part-time / temporary",
] as const;

export const workModes = ["Remote", "Hybrid", "On-site", "Flexible / to discuss"] as const;

export const seniorityLevels = [
  "Internship / entry",
  "Junior",
  "Mid-level",
  "Senior",
  "To discuss",
] as const;

function shortCourseLabel(title: string): string {
  return title
    .replace(" for Non-Tech Professionals", "")
    .replace(" for Business Professionals", "")
    .replace("Microsoft ", "");
}

export function talentCategories(): string[] {
  const fromCourses = courses.map((course) => shortCourseLabel(course.title));
  return [...fromCourses, "Power BI / Data Analysis", "Other / not sure yet"];
}

export const talentDisclaimer =
  "Skill Edge does not guarantee employment. Eligible graduates may be considered for internship, freelance, contract, project-based and full-time opportunities shared through our talent network, based on employer requirements.";

export const employerValue =
  "Looking for skilled professionals for your business? Connect with trained Skill Edge professionals for internships, freelance projects, contract engagements, project-based work and full-time opportunities.";
