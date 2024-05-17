import React from "react";
import Container from "../Container";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export type IntroSectionProps = {
  heading: React.ReactNode;
  subHeading?: React.ReactNode;
  text: string;
  button?: LinkButtonProps;
};

const IntroSection = ({
  heading,
  subHeading = "",
  text,
  button,
}: IntroSectionProps) => {
  return (
    <Container className="py-6 flex flex-col items-center mb-8">
      <h2 className=" text-4xl  md:text-5xl font-semibold text-default_heading mb-6 text-center">
        {heading}
      </h2>
      {subHeading && (
        <h3 className="text-2xl md:text-[27px] leading-[30px] font-bold text-primary_dark mb-2 text-center">
          {subHeading}
        </h3>
      )}
      <p className="text-deepblue text-center text-lg leading-8 font-medium w-full max-w-[1098px] mb-7 ">
        {text}
      </p>

      {button ? <LinkButton {...button} /> : null}
    </Container>
  );
};

export default IntroSection;
