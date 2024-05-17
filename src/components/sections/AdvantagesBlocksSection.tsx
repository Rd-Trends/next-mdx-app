import clsx from "clsx";
import Container from "../Container";

export type AdvatagesBlockProps = {
  advantages: AdvantagesProps[];
};

export type AdvantagesProps = {
  heading: string;
  text: string;
};

const AdvantagesBlocksSection = ({
  advantages
}: AdvatagesBlockProps) => {
  return (
    <Container>
      <div
        className={clsx("w-full grid grid-cols-1 gap-4", {
          "md:grid-cols-2": advantages.length === 2,
          "md:grid-cols-3": advantages.length === 3,
          "md:grid-cols-2 xl:grid-cols-4": advantages.length >= 4,
        })}>
        {advantages.map((advantagesBlock, index) => (
          <div
            key={advantagesBlock.heading + index}
            className={clsx(
              "flex flex-col items-center text-center"
            )}>
            <h3 className="text-[21px] leading-8 font-black text-brand">
              {advantagesBlock.heading}
            </h3>
            <p className="text-lg leading-8 text-deepblue font-medium">
              {advantagesBlock.text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AdvantagesBlocksSection;
