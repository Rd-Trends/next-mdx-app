import Image from "next/image";
import Container from "../Container";
import clsx from "clsx";

export type RefSingleProps = {
  title?: string;
  name?: string;
  image: string;
  text: React.ReactNode;
};

export type RefsSectionProps = {
  heading?: string;
  refs: RefSingleProps[];
  textBg?: boolean;
};

const RefsSection = ({ heading, refs, textBg = true }: RefsSectionProps) => {
  return (
    <Container className="flex flex-col">
      {heading ? (
        <div className="w-full mb-5">
          <h2 className="text-default_heading text-3xl text-center font-semibold">
            {heading}
          </h2>
        </div>
      ) : null}

      <div className="w-full flex flex-wrap justify-between align-middle h-auto md:space-x-4">
        {refs.map((item, index) => {
          const imgAlt =
            (item.name && item.name) || (item.title && item.title) || "";
          return (
            <div
              key={index}
              className="mb-6 w-full md:w-[calc(50%-1rem)] flex flex-col">
              {item.title ? (
                <h3 className="text-3xl text-brand font-semibold mb-5 text-center">
                  {item.title}
                </h3>
              ) : null}
              {item.image ? (
                <Image
                  className=""
                  src={item.image}
                  alt={imgAlt.toString()}
                  width={900}
                  height={400}
                />
              ) : null}
              <div
                className={clsx("py-4 md:py-8 h-full", {
                  "px-4 md:px-8 lg:px-10 bg-grey_ccc/30": !!textBg,
                })}>
                <h3 className="text-2xl text-default_heading font-semibold mb-3">
                  {item.name}
                </h3>
                <p className="text-lg font-medium text-deepblue leading-8">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default RefsSection;
