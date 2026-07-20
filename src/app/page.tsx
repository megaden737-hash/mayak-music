import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Directions } from "@/components/home/Directions";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StudioPreview } from "@/components/home/StudioPreview";
import { Cases } from "@/components/home/Cases";
import { Testimonials } from "@/components/home/Testimonials";
import { Team } from "@/components/home/Team";
import { Location } from "@/components/home/Location";
import { Faq } from "@/components/home/Faq";
import { CtaBonus } from "@/components/home/CtaBonus";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Directions />
      <HowItWorks />
      <StudioPreview />
      <Cases />
      <Testimonials />
      <Team />
      <Location />
      <Faq />
      <CtaBonus />
    </>
  );
}
