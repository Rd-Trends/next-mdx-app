import React from "react";
import Image from "next/image";
import Container from "../Container";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export type HeroProps = {
  heading: React.ReactNode;
  subHeading: React.ReactNode;
  button: LinkButtonProps;
  image: string;
  alt: string;
};

const Hero = ({ heading, subHeading, button, image, alt }: HeroProps) => {
  return (
    <Container className="flex w-full flex-col justify-center relative h-hero mb-10 bg-red">
      <div className="relative z-20 text-white text-4xl">
        {heading ? (
          <h1 className="text-4xl md:text-5xl !leading-normal mb-4 font-black max-w-[80%] md:max-w-4xl">
            {heading}
          </h1>
        ) : null}
        {subHeading ? (
          <p className=" text-[28px] md:text-[32px] leading-tight mb-6 font-black ">
            {subHeading}
          </p>
        ) : null}
        {button ? <LinkButton {...button} /> : null}
      </div>
      {/* <Image className="w-full absolute z-10" src="/images/content/hero-background.png" alt="" width={900} height={500} /> */}
      <Image
        className="w-full h-auto absolute left-0 right-0 z-0 object-cover object-center"
        src={image}
        sizes="100vw"
        quality={100}
        fill
        alt={alt}
        priority
      />
    </Container>
  );
};

export default Hero;
