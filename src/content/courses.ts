/** Course catalog, transcribed from section 3 of "About Skill Edge.docx". */

export type Course = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  modules: string[];
  duration: string;
  format: string;
  capstone: string;
  /** Prefilled WhatsApp keyword for enquiries about this course. */
  keyword: string;
};

export const courses: Course[] = [
  {
    slug: "business-analysis",
    title: "Business Analysis for Non-Tech Professionals",
    summary:
      "Move into data and analysis work without a technical background. You learn to clean and interrogate data, build dashboards decision-makers actually use, and put AI to work in your day-to-day analysis.",
    audience: "Career changers and professionals moving into data and business analysis roles.",
    modules: [
      "Excel for Data Analysis",
      "Power BI Interactive Dashboards",
      "Microsoft Copilot AI Assistance",
    ],
    duration: "2 Months",
    format: "Weekend classes",
    capstone: "Capstone project and presentation, within a month",
    keyword: "ANALYSIS",
  },
  {
    slug: "dynamics-365-business-central",
    title: "Microsoft Dynamics 365 Business Central",
    summary:
      "The complete functional implementation track. You cover the core Business Central modules end to end and learn how the configuration decisions in each one shape real business processes.",
    audience: "Aspiring and practising Business Central functional consultants.",
    modules: [
      "Finance",
      "Procurement",
      "Sales & CRM",
      "Manufacturing",
      "Warehousing",
      "Project",
      "Copilot in BC",
    ],
    duration: "3 Months",
    format: "Weekend classes",
    capstone: "Capstone project and presentation, within a month",
    keyword: "BUSINESS CENTRAL",
  },
  {
    slug: "power-platform",
    title: "Microsoft Power Platform",
    summary:
      "Build the apps, automations and portals that sit around your business systems, from canvas and model-driven apps through to automated workflows and external-facing Power Pages.",
    audience: "Professionals building low-code business applications and automations.",
    modules: [
      "Canvas App",
      "Model-driven Apps",
      "Power Automate",
      "Copilot Studio",
      "Power Pages",
    ],
    duration: "4 Months",
    format: "Weekend classes",
    capstone: "Capstone project and presentation, within a month",
    keyword: "POWER PLATFORM",
  },
  {
    slug: "ai-skills-for-business",
    title: "AI Skills for Business Professionals",
    summary:
      "A non-technical route into applied AI. You learn where AI genuinely helps, how to prompt it for real business tasks, and how to use Copilot across the tools you already work in every day.",
    audience: "Business professionals applying AI to everyday work. No coding required.",
    modules: [
      "AI Foundations for Business (Non-Technical)",
      "Prompt Engineering for Business Use Cases",
      "Microsoft Copilot Across the 365 Suite",
    ],
    duration: "1 Month",
    format: "Weekend classes",
    capstone: "Capstone project and presentation, within 2 weeks",
    keyword: "AI SKILLS",
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
