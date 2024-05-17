import Image from "next/image";
import Container from "../Container";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export type PageListingSectionProps = {
  heading: string;
  list: PageListingSectionItem[];
};

export type PageListingSectionItem = {
  title: string;
  cover: string;
  linkBtn: LinkButtonProps;
};

const PageListingSection = ({ heading, list }: PageListingSectionProps) => {
  return (
    <Container>
      <h2 className="text-5xl mb-6 font-bold">{heading}</h2>
      <div className="flex flex-wrap justify-between w-full">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="mb-4 md:mb-6 mx-auto w-full md:w-1/2 lg:w-4/12 p-3 flex flex-col space-y-4">
              <h3 className="text-3xl text-default_heading font-semibold text-center">
                {item.title}
              </h3>
              <Image
                src={item.cover}
                alt={item.title}
                width={900}
                height={500}
              />
              <LinkButton
                className="text-lg m-auto lowercase bg-brand hover:bg-orange-700 text-white transition-all duration-300"
                {...item.linkBtn}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PageListingSection;
