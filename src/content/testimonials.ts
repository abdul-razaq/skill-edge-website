/** Verbatim student testimonials from "Student Testimonial.docx". */

export type Testimonial = {
  name: string;
  course: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Chibundu Orji",
    course: "Dynamics 365 Business Central",
    quote:
      "I like how practical the course was, right from the first class. We were given hands-on exercises to carry out after most of our classes and this forces us to keep practicing and implementing what we are being taught to get better. The course met my expectation because it took me from knowing absolutely nothing about ERP or Business Central to being able to implement basic solutions in a sandbox environment.",
  },
  {
    name: "Mukaila Wasiu",
    course: "Dynamics 365 Business Central",
    quote:
      "I can confidently configure and implement core Business Central functions like finance, sales, purchasing, inventory, posting groups, dimensions, and workflows, and troubleshoot issues effectively. The capstone project was a major “aha moment,” helping me understand how Business Central modules connect and why each configuration matters in real business processes.",
  },
  {
    name: "Henry Adedayo",
    course: "Dynamics 365 Business Central",
    quote:
      "What stood out to me was that the course covered the complete Business Central functional implementation lifecycle rather than focusing only on system navigation or configuration. It covered Finance, Supply Chain, Warehousing, Manufacturing, Projects, Business Analysis, UAT, Delivery Governance, and Consulting Skills. It aligned perfectly with my career goal of becoming a Business Central Functional Consultant because it combined both functional knowledge and implementation methodology.",
  },
];
