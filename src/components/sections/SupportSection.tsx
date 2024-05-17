import ButtonComponent, { ButtonProps } from "../ButtonComponent";
import Container from "../Container";

export type SupportBlock = {
  icon: string;
  title: string;
  content: React.ReactNode;
  buttons: ButtonProps[];
};

export type SupportSectionProps = {
  heading: string;
  supportBlocks: SupportBlock[];
};

const SupportSection = ({ heading, supportBlocks }: SupportSectionProps) => {
  return (
    <Container>
      {heading && (
        <h2 className="text-3xl font-bold text-center mb-6">{heading}</h2>
      )}

      <div className="flex flex-wrap items-stretch ">
        {supportBlocks &&
          supportBlocks.map((block, index) => (
            <div
              key={index}
              className="w-full mx-auto md:w-1/2 lg:w-1/3 items-start flex flex-col flex-wrap pb-4 md:px-4 md:pb-8">
              <div className="bg-grey_ccc/30 p-6 flex-1 flex-col h-full relative flex justify-between">
                <div className="flex flex-col items-center justify-center mb-6">
                  <img
                    src={block.icon}
                    alt={block.title}
                    className="w-24 h-24 mb-6"
                  />
                  <h3 className="text-2xl font-medium text-center mb-6 leading-9">
                    {block.title}
                  </h3>
                  <p className="text-center">{block.content}</p>
                </div>
                <div className="flex flex-col items-center justify-end h-12em">
                  {block.buttons &&
                    block.buttons.map((button, index) => (
                      <div key={index} className="mb-3">
                        <ButtonComponent
                          text={button.text}
                          link={button.link}
                          className={button.className}
                          color={button.color}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default SupportSection;
