import Image from "next/image";
import Container from "../Container";
import LinkButton, { LinkButtonProps } from "../LinkButton";

type CallBlockProps = {
  heading: React.ReactNode;
  text: React.ReactNode;
  button: LinkButtonProps;
  image: string;
};

const CallBlock = ({ heading, text, button, image }: CallBlockProps) => {
  return (
    <Container
      className={
        "bg-brand text-white flex flex-col md:flex-row md:items-center " +
        "justify-between py-8 md:py-8 xl:!px-32 space-y-8 md:space-y-0"
      }>
      <div
        className={
          "w-full md:w-4/12 lg:w-4/12 lg:max-w-[399px] space-y-6 md:space-y-8 " +
          " flex flex-col items-center md:items-start px-4 text-center md:text-left"
        }>
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        )}
        {text && (
          <p className="mb-6 lg:mb-0 text-lg font-bold md:text-[28px] md:leading-tight">
            {text}
          </p>
        )}
        {button && <LinkButton className={`mx-auto md:mx-0 `} {...button} />}
      </div>

      <Image
        className=" md:w-7/12 h-auto"
        src={image}
        alt={"Call to action"}
        width={648}
        height={432}
      />
    </Container>
  );
};

export default CallBlock;
