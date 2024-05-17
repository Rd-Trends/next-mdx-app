import Image, { ImageProps } from "next/image";
import HelloWorld from "./components/HelloWorld";
import Hero from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import HeadlineProductsSection from "./components/sections/HeadlineProductsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import AdvantagesBlocksSection from "./components/sections/AdvantagesBlocksSection";
import PricingSection from "./components/sections/PricingSection";
import CallBlock from "./components/sections/CallBanner";
import ChecklistSectionWithDescription from "./components/sections/ChecklistSectionWithDescription";
import MarqueeSection from "./components/sections/MarqueeSection";
import SimpleSlidesSection from "./components/sections/SimpleSlidesSection";

export const components = {
  HelloWorld,
  Image: (props: ImageProps) => <Image {...props} />,
  img: (props: any) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),

  // sections
  Hero,
  IntroSection,
  HeadlineProductsSection,
  ExperienceSection,
  AdvantagesBlocksSection,
  PricingSection,
  CallBlock,
  ChecklistSectionWithDescription,
  MarqueeSection,
  SimpleSlidesSection,
};
