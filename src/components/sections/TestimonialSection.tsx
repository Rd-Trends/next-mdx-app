import Image from "next/image";
import Container from "../Container";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export type TestimonialSectionProps = {
  heading?: string;
  button?: LinkButtonProps;
  text: string;
  name: string;
  jobPost: React.ReactNode;
  image: string;
};

const TestimonialSection = ({
  heading,
  button,
  text,
  name,
  jobPost,
  image,
}: TestimonialSectionProps) => {
  return (
    <Container>
      {heading && (
        <h2 className="text-default_heading text-3xl text-center font-semibold">
          {heading}
        </h2>
      )}
      <div
        className={
          " relative w-full flex flex-col items-center xl:flex-row xl:items-end justify-between h-full"
        }>
        <div
          className={
            " relative w-full md:w-10/12 xl:w-1/2 text-brand text-center xl:text-left " +
            "p-4 md:p-8 lg:p-10 lg:pb-10 xl:px-16 bg-grey_ccc/30 "
          }>
          {button && (
            <div className="mb-12">
              <LinkButton {...button} />
            </div>
          )}
          {text && (
            <p className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
              {text}
            </p>
          )}
          {name && (
            <h3 className="text-2xl font-medium mb-2 md:mb-4">{name}</h3>
          )}
          {jobPost && <p className="text-sm">{jobPost}</p>}
        </div>

        {image ? (
          <Image
            className=" w-full xl:w-1/2 h-auto"
            src={image}
            alt={name}
            width={540}
            height={540}
          />
        ) : null}
      </div>
    </Container>
  );
};

export default TestimonialSection;
