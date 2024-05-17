"use client";

import React from "react";
import Container from "../Container";
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
} from "../Carousel";
import AutoPlay from "embla-carousel-autoplay";

export interface SlidesSectionProps {
  slides: SlideSectionProps[];
}

export interface SlideSectionProps {
  text: React.ReactNode;
  author: string;
  authorFrom: string;
}

const SimpleSlidesSection = ({ slides }: SlidesSectionProps) => {
  return (
    <Container>
      <Carousel
        className=" bg-grey_ccc/30 py-6 md:py-8 lg:py-12 space-y-6"
        opts={{
          loop: true,
        }}
        plugins={[
          AutoPlay({
            playOnInit: true,
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}>
        <CarouselContent>
          {slides.map((item, index) => (
            <CarouselItem
              key={item.author + index}
              className={
                " text-default_heading  p-4 md:px-8 lg:px-12 text-center flex flex-col items-center "
              }>
              <h2 className="text-2xl md:text-4xl font-bold mb-5">
                {item.text}
              </h2>
              <h3 className="text-deepblue mb-2 text-xl md:text-2xl font-bold">
                {item.author}
              </h3>
              <p className="text-lg font-normal text-deepblue">
                {item.authorFrom}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselDotButtons />
      </Carousel>
    </Container>
  );
};

export default SimpleSlidesSection;
