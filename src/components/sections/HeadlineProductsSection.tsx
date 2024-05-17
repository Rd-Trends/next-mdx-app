import React from "react";
import ButtonComponent, { ButtonProps } from "../ButtonComponent";
import Image from "next/image";
import Container from "../Container";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export type HeadlineProductsSectionProps = {
  heading: React.ReactNode;
  products: HeadlineProductsSectionItemProps[];
};

export type HeadlineProductsSectionItemProps = {
  title: React.ReactNode;
  subtitle: string;
  description: React.ReactNode;
  cover: string;
  button: LinkButtonProps;
};

const HeadlineProductsSection = ({
  heading,
  products,
}: HeadlineProductsSectionProps) => {
  return (
    <Container className="flex flex-col items-center">
      <h2 className="w-full text-center text-3xl md:text-4xl font-semibold text-default_heading">
        {heading}
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {products?.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "flex flex-col w-full relative justify-between py-8 px-10 h-full z-10 before:absolute " +
                "before:bg-grey_ccc/30 before:w-full  " +
                "before:h-[70%] before:bottom-0 before:left-0 before:right-0 before:-z-10"
              }>
              <Image
                className="mb-8 mx-auto"
                src={item.cover}
                alt={""}
                width={220}
                height={330}
                quality={100}
              />
              <div className="flex flex-col w-full h-full items-center justify-between space-y-4">
                <div className=" flex flex-col w-full items-center space-y-1">
                  <h3 className="text-3xl lg:text-5xl text-black font-bold text-center">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-center font-black">
                    {item.subtitle}
                  </h4>
                  <p className="text-lg text-center font-medium">
                    {item.description}
                  </p>
                </div>
                <LinkButton className={` lowercase`} {...item.button} />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default HeadlineProductsSection;
