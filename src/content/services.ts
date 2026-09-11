/** Service lines, transcribed from the company overview in "About Skill Edge.docx". */

export type Service = {
  slug: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "tech-skills-training",
    title: "Tech Skills Training",
    description:
      "Practical, instructor-led programmes that take professionals from foundations to implementation-ready, built around real business case studies rather than theory.",
    items: [
      "Business / Data Analysis",
      "Dynamics 365 Business Central",
      "Microsoft Power Platform",
      "Dynamics 365 Finance & Operations",
      "ZOHO Books",
      "AI Skills",
      "Digital Tools and ERP",
    ],
  },
  {
    slug: "erp-implementation",
    title: "ERP Implementation & Support",
    description:
      "End-to-end delivery, from configuring and deploying the system through to the change management and ongoing support that make it stick.",
    items: [
      "ERP implementation",
      "System configuration & deployment",
      "User training & change management",
      "Post-implementation support",
    ],
  },
  {
    slug: "process-optimization",
    title: "Business Process Optimization",
    description:
      "We review how work actually flows through your business, find where it stalls, and redesign the process so your systems and your people pull in the same direction.",
    items: [
      "Process review & mapping",
      "Bottleneck and gap analysis",
      "Workflow redesign",
      "Measurable efficiency gains",
    ],
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    description:
      "Advisory for organisations deciding what to build, buy or change — so digital investment is directed at the outcomes that matter.",
    items: [
      "ERP advisory & solution design",
      "Digital transformation strategy",
      "System selection & optimization",
    ],
  },
];
