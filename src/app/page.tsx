import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { DigitalMarketing } from "@/components/sections/DigitalMarketing";
import { Industries } from "@/components/sections/Industries";
import { WhyMixmedia } from "@/components/sections/WhyMixmedia";
import { CredibilityStats } from "@/components/sections/CredibilityStats";
import { Benefits } from "@/components/sections/Benefits";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Insights } from "@/components/sections/Insights";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Mixmedia Labs — Digital Growth Agency in Bengaluru | SEO, Marketing, Web & Branding",
  description:
    "Mixmedia Labs is a Bengaluru-based digital growth agency helping ambitious brands scale through SEO, performance marketing, web development, branding, and UI/UX design. 50+ brands scaled with 3.2x average ROI.",
  keywords: [
    "digital marketing agency Bangalore",
    "SEO company Bangalore",
    "web development company Bangalore",
    "branding agency Bangalore",
    "performance marketing Bangalore",
    "digital growth agency India",
  ],
  alternates: {
    canonical: "https://mixmedialabs.com/",
  },
  openGraph: {
    title: "Mixmedia Labs — Digital Growth Agency in Bengaluru",
    description: "50+ brands scaled with 3.2x average ROI. SEO, performance marketing, web development, branding, and UI/UX design.",
    url: "https://mixmedialabs.com/",
  },
  twitter: {
    title: "Mixmedia Labs — Digital Growth Agency in Bengaluru",
    description: "50+ brands scaled with 3.2x average ROI. SEO, performance marketing, web development, branding, and UI/UX design.",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <ServicesGrid />
      <DigitalMarketing />
      <Industries />
      <WhyMixmedia />
      <CredibilityStats />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <Process />
      <Insights />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}
