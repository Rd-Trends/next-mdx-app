import React from "react";
import Container from "../Container";
import Image from "next/image";

export type HowItWorksProps = {
  heading: string;
  texts: string[];
  smallImage?: string;
  largeImage?: string;
};

const HowItWorksSection = (props: HowItWorksProps) => {
  const { heading, texts, smallImage, largeImage } = props;

  return (
    <Container
      className={
        " relative space-y-8 lg:space-y-4" +
        " lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0  lg:after:h-[70%] " +
        " lg:after:bg-grey_ccc/30 lg:after:mx-16"
      }>
      <div
        className={
          " flex flex-col items-center lg:flex-row lg:space-x-12 xl:space-x-20 " +
          " lg:pl-12 xl:pl-20  space-y-4 md:space-y-8 lg:space-y-0"
        }>
        {!!smallImage && (
          <Image
            src={smallImage}
            alt=""
            width={220}
            height={330}
            quality={100}
            className=" w-full lg:w-3/12 max-w-[220px] h-auto"
          />
        )}
        {!!largeImage && (
          <Image
            src={largeImage}
            alt=""
            width={869}
            height={501}
            className="w-full md:w-8/12 lg:w-full h-auto"
          />
        )}
      </div>

      <div className=" py-4 md:w-11/12 mx-auto lg:w-full lg:p-8 lg:pt-0 pt-0">
        <h2 className="text-4xl font-bold text-center lg:text-left mb-4 ">
          {heading}
        </h2>
        <div className=" space-y-4 lg:space-y-0 lg:flex lg:space-x-4 xl:space-x-8">
          {texts.map((text, index) => (
            <p
              key={index}
              className=" text-black text-center lg:text-left font-medium text-lg leading-8 ">
              {text}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HowItWorksSection;
