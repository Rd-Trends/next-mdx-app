import ChecklistItem, { ChecklistItemProps } from "../CheckListItem";
import Container from "../Container";

type ChecklistSectionWithDescriptionProps = {
  heading: string;
  description: string;
  checklist: ChecklistItemProps[];
};

const ChecklistSectionWithDescription = ({
  heading,
  description,
  checklist,
}: ChecklistSectionWithDescriptionProps) => {
  return (
    <Container>
      <div className={" bg-light__orange p-4 md:p-6 lg:p-8 py-8"}>
        {heading ? (
          <h2 className="text-3xl font-semibold text-default_heading mb-4 md:mb-6">
            {heading}
          </h2>
        ) : null}

        <div
          className={
            "flex flex-col md:flex-row items-start justify-between " +
            " space-y-4 md:space-y-0"
          }>
          <div className="md:w-5/12 xl:w-[21%]">
            {!!description ? (
              <p className="text-base md:text-lg md:leading-[32px] font-black">{description}</p>
            ) : null}
          </div>
          {!!checklist.length && (
            <div
              className={
                " w-full md:w-6/12 xl:w-[70%] xl:pr-16 " +
                " grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-y-6 xl:gap-x-8"
              }>
              {checklist.map((checklist, index) => (
                <ChecklistItem {...checklist} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ChecklistSectionWithDescription;
