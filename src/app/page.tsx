import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { CoursesPreview } from "@/components/home/courses-preview";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  description:
    "Skill Edge Tech Solutions equips professionals and businesses with practical technology skills and innovative solutions that drive growth, efficiency and digital transformation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <CoursesPreview />
      <WhyUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
