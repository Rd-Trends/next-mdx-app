"use client";

import React from "react";
import Container from "../Container";
import clsx from "clsx";
import * as Tabs from "@radix-ui/react-tabs";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export type PricingSectionProps = {
  heading: string;
  pricingPackages: PricingPackageProps[];
  after: string;
};

export type PricingPackageProps = {
  name: string;
  id: string;
  pricingPlans: PricingPlanProps[];
};

export type PricingPlanProps = {
  name: string;
  color: "green" | "orange" | "navy";
  description: string;
  price: string;
  linkBtn: LinkButtonProps;
};

const PricingSection = ({
  heading,
  pricingPackages,
  after,
}: PricingSectionProps) => {
  return (
    <Container className="flex flex-col">
      <div className="w-full mb-5">
        <h2 className="px-2 text-default_heading text-3xl md:text-4xl text-center font-semibold">
          {heading}
        </h2>
      </div>

      <Tabs.Root defaultValue={pricingPackages[0].id}>
        <Tabs.TabsList className=" w-full flex items-center justify-center space-x-4 md:space-x-6 pb-8">
          {pricingPackages.map((pricingPackage, index) => (
            <Tabs.Trigger
              key={`pkg-${index}`}
              value={pricingPackage.id}
              className={clsx(
                "px-4 md:px-12 lg:px-20 py-2 md:py-4 lg:py-[27px] cursor-pointer grayscale bg-grey_ccc/20 ",
                " hover:bg-grey_ccc/40 text-base font-semibold text-gray-500 data-[state=active]:text-black",
                " md:text-3xl lg:text-4xl rounded-2xl lg:rounded-[34px] data-[state=active]:bg-grey_ccc/40 data-[state=active]:grayscale-0"
              )}>
              {pricingPackage.name}
            </Tabs.Trigger>
          ))}
        </Tabs.TabsList>

        {pricingPackages.map((pricingPackage, index) => (
          <PricingPlan
            key={`pkg-${index}`}
            value={pricingPackage.id}
            pricingPackage={pricingPackage}
            after={after}
          />
        ))}
      </Tabs.Root>
    </Container>
  );
};

export default PricingSection;

const PricingPlan = ({
  value,
  pricingPackage,
  after,
}: {
  value: string;
  pricingPackage: PricingPackageProps;
  after: string;
}) => {
  return (
    <Tabs.Content value={value}>
      <div
        className={
          " w-full flex flex-wrap justify-between " +
          " space-y-4 md:space-y-0 md:[&>*:nth-child(n+3)]:!mt-4 xl:[&>*:nth-child(n+3)]:!mt-0"
        }>
        {pricingPackage.pricingPlans.map((pricingPlan, index) => (
          <div
            key={`pkgPlan-${index}`}
            className={clsx(
              " border-t-[30px] px-8 mx-auto flex flex-col items-center justify-between min-h-full space-y-4",
              " w-full md:w-[calc(100%/2-1rem)] xl:w-[calc(100%/3-1.5rem)] bg-grey_ccc/30 pb-8",
              {
                "border-custom__turtle_mos text-custom__turtle_mos":
                  pricingPlan.color === "green",
                "border-custom__spacer text-custom__spacer":
                  pricingPlan.color === "orange",
                "border-custom__elite_blue text-custom__elite_blue":
                  pricingPlan.color === "navy",
              }
            )}>
            <div>
              <h3
                className={`pb-4 pt-8 text-3xl md:text-4xl text-center leading-8 font-bold`}>
                {pricingPlan.name}
              </h3>

              <p className="text-lg leading-8 text-black text-center font-medium">
                {pricingPlan.description}
              </p>
            </div>

            <div>
              <h3 className={`mb-4 text-2xl font-black `}>
                {pricingPlan.price}
              </h3>
              <LinkButton
                className={clsx(" text-white", {
                  "bg-custom__turtle_mos hover:bg-custom__turtle_mos-700":
                    pricingPlan.color === "green",
                  "bg-custom__spacer hover:bg-custom__spacer-700":
                    pricingPlan.color === "orange",
                  "bg-custom__elite_blue hover:bg-custom__elite_blue-700":
                    pricingPlan.color === "navy",
                })}
                {...pricingPlan.linkBtn}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="py-4 md:px-0 text-sm font-medium leading-6 text-center">
        {after}
      </p>
    </Tabs.Content>
  );
};
