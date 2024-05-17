import React from "react";
import Image from "next/image";
import Container from "../Container";
import clsx from "clsx";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export type ExperienceSectionProps = {
  headingImage: string;
  heading: React.ReactNode;
  subheadingLabel?: React.ReactNode;
  subheading: React.ReactNode;
  text?: React.ReactNode;
  button: LinkButtonProps;
  image: string;
  subImageText?: string[];
  featureList?: string[];
  onImageButton?: LinkButtonProps;
};

const ExperienceSection = ({
  headingImage,
  heading,
  subheadingLabel,
  subheading,
  text,
  featureList,
  button,
  image,
  subImageText,
  onImageButton,
}: ExperienceSectionProps) => {
  return (
    <Container
      className={
        " relative w-full flex flex-col items-center xl:flex-row xl:items-end justify-between "
      }>
      <div
        className={clsx(" flex flex-col  ", " max-w-2xl  xl:w-4/12", {
          "items-center xl:items-start text-center xl:text-start":
            !featureList?.length,
        })}>
        {!!heading && (
          <h2 className=" text-3xl md:text-4xl font-bold text-default_heading pb-4 md:pb-8 xl:pb-16 max-w-lg px-4 md:px-10">
            {heading}
          </h2>
        )}

        {!!headingImage && (
          <Image
            src={headingImage}
            alt={""}
            width={216}
            height={400}
            quality={100}
            className=" mx-auto"
          />
        )}

        <div
          className={clsx(
            " relative w-full before:bg-grey_ccc/30 before:absolute before:left-0 ",
            "before:top-0 before:bottom-0 before:h-full before:w-full before:xl:w-[700px]",
            {
              " -mt-16 pt-16 ": !!headingImage,
            }
          )}>
          <div className="p-4  md:p-10 pr-0 space-y-2">
            {!!subheadingLabel && (
              <h3 className="text-orange-600 text-xl font-semibold">
                {subheadingLabel}
              </h3>
            )}
            {!!subheading && (
              <h3 className=" text-brand text-[27px] leading-[30px] font-bold">
                {subheading}
              </h3>
            )}
            {!!text && (
              <p className="text-black font-medium text-lg leading-8">{text}</p>
            )}
            {!!featureList?.length && (
              <ul className=" list-disc text-black pl-4">
                {featureList.map((item, index) => (
                  <li
                    className=" !text-left text-lg font-medium leading-8"
                    key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {button && (
              <LinkButton className={` mt-6 m-auto lowercase`} {...button} />
            )}
          </div>
        </div>
      </div>

      <div
        className={
          " flex flex-col items-center justify-center relative w-full xl:w-8/12 "
        }>
        <Image
          src={image}
          alt={""}
          width={876}
          height={606}
          className=" w-full h-auto  "
        />

        {!!onImageButton && (
          <LinkButton
            className={
              ` text-lg m-auto lowercase bg-${onImageButton.color}-500 hover:bg-${onImageButton.color}-700 ` +
              " absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
            {...onImageButton}
          />
        )}
      </div>
    </Container>
  );
};

export default ExperienceSection;
