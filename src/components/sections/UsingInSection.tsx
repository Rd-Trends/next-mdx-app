import Image from "next/image";
import Container from "../Container";

export type UsingInSectionProps = {
  heading: React.ReactNode;
  companies: {
    name: string;
    logo: string;
    alt: string;
  }[];
};

const UsingInSection = ({ heading, companies }: UsingInSectionProps) => {
  return (
    <Container>
      <div className="py-6 flex flex-col items-center mb-8">
        <h2 className="w-full text-center text-3xl font-semibold text-default_heading mb-4">
          {heading}
        </h2>

        <div
          className={
            " bg-grey_ccc/30 w-full flex-wrap md:flex-nowrap flex justify-between p-4 md:p-10 xl:p-20" +
            " [&>*:nth-child(3)]:mt-4 [&>*:nth-child(4)]:mt-4 md:[&>*]:!mt-0 md:space-x-4"
          }>
          {companies.map((item, index) => (
            <Image
              className=" w-[calc(50%-.5rem)] h-auto  md:w-full md:max-w-[calc(100%/4-1rem)] md:aspect-square"
              key={index}
              src={item.logo}
              alt={item.alt}
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default UsingInSection;
