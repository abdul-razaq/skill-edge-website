/**
 * Single source of truth for site copy.
 * All wording is taken from the client documents:
 *   - "About Skill Edge.docx"        (mission, vision, overview, values, catalog, contact)
 *   - "Student Testimonial.docx"     (testimonials)
 * Anything the client left blank is marked TODO rather than invented.
 */

export const company = {
  name: "Skill Edge Tech Solutions",
  shortName: "Skill Edge",
  tagline: "…from skills to solutions. Built for impact.",
  taglinePlain: "From skills to solutions. Built for impact.",
  mission:
    "To equip professionals and businesses with practical technology skills and innovative solutions that drive growth, efficiency, and digital transformation.",
  vision:
    "To become a leading technology training and business solutions company, empowering professionals and organizations to thrive in a digital world.",
  overview: [
    "Skill Edge Tech Solutions is a technology-driven firm that provides practical training and strategic consulting services to help professionals and businesses build capabilities, optimize processes, and achieve digital transformation.",
    "We bridge the gap between learning and real-world application by equipping individuals with practical, in-demand tech skills and supporting organizations in maximizing the value of their digital investments.",
    "We believe that acquiring knowledge is not enough — true value comes from applying those skills to solve real business problems, improve processes, and drive measurable results. Everything we do is practical, results-oriented, and built for impact.",
  ],
} as const;

export const contact = {
  email: "info@skilledgetechsolutions.com",
  phone: "08108711583",
  phoneHref: "tel:+2348108711583",
  whatsapp: "+234 808 222 5114",
  whatsappNumber: "2348082225114",
  linkedin: "https://www.linkedin.com/company/skill-edge-tech-solutions",
  // TODO(client): office address, Instagram / Facebook / X links, domain.
  location: "Online-first — weekend classes delivered live, with recordings for every session.",
} as const;

/** Builds a wa.me link with a prefilled enquiry message. */
export function whatsappLink(message?: string): string {
  const text = message ?? `Hello Skill Edge, I'd like to enquire about your training programmes.`;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export type Value = { name: string; description: string };

export const coreValues: Value[] = [
  { name: "Practicality", description: "We turn knowledge into real-world capability and solutions." },
  { name: "Excellence", description: "We hold ourselves to high standards and continuously improve." },
  { name: "Integrity", description: "We act honestly, transparently, and responsibly." },
  { name: "Growth", description: "We continuously develop people, businesses, and ourselves." },
  { name: "Impact", description: "We focus on measurable and meaningful outcomes." },
];

export type Benefit = { title: string; description: string };

/** What every Skill Edge cohort includes. */
export const learningBenefits: Benefit[] = [
  {
    title: "Practical hands-on training",
    description:
      "Every class is built around doing the work, not watching it. You configure, build and analyse in a live environment from the first session.",
  },
  {
    title: "Real business case studies",
    description:
      "You work through the same scenarios consultants meet on live projects, so the skills transfer straight into the role you are targeting.",
  },
  {
    title: "Capstone project & presentation",
    description:
      "Each programme closes with a capstone you scope, build and present — the portfolio piece you take into interviews.",
  },
  {
    title: "Certificate of completion",
    description: "Finish your capstone and receive a certificate recognising the programme you completed.",
  },
  {
    title: "Class recordings",
    description: "Every session is recorded and shared, so you can revisit any topic at your own pace.",
  },
  {
    title: "1-on-1 reviews",
    description: "Direct feedback on your exercises and capstone work from instructors who implement these systems.",
  },
];
