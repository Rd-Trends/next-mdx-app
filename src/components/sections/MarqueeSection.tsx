import Image from "next/image";
import Container from "../Container";
import Marquee from "react-fast-marquee";

export type MarqueeItem = {
  name: string;
  image: string;
  alt: string;
};

export type MarqueeSectionProps = {
  heading: React.ReactNode;
  marqueeItems: MarqueeItem[];
};

const MarqueeSection = ({ heading, marqueeItems }: MarqueeSectionProps) => {
  return (
    <Container className=" flex flex-col items-center">
      <h2 className="w-full text-center text-3xl font-semibold text-default_heading mb-4">
        {heading}
      </h2>

      <Marquee autoFill className={" bg-grey_ccc/30 py-8 md:py-16"}>
        {marqueeItems.map((item, index) => (
          <Image
            className=" w-[100px] md:w-[200px] h-auto ml-10 md:ml-20 xl:ml-36"
            key={index}
            src={item.image}
            alt={item.alt}
            width={200}
            height={200}
          />
        ))}
      </Marquee>
    </Container>
  );
};

export default MarqueeSection;
