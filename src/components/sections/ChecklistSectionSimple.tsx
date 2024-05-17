import React from "react";
import Container from "../Container";
import ChecklistItem, { ChecklistItemProps } from "../CheckListItem";
import clsx from "clsx";

export type ChecklistSectionSimpleProps = {
  heading?: React.ReactNode;
  cols?: number;
  listWrapper?: string;
  checklist: ChecklistItemProps[];
  after?: React.ReactNode;
};

const ChecklistSectionSimple = ({
  heading,
  cols,
  listWrapper,
  checklist,
  after,
}: ChecklistSectionSimpleProps) => {
  return (
    <Container>
      <div className="p-4 md:p-8 bg-light__orange space-y-6 md:space-y-8">
        {heading ? (
          <h2 className="w-full text-3xl font-semibold text-default_heading">
            {heading}
          </h2>
        ) : null}
        {!!checklist?.length && (
          <div
            className={clsx("", {
              "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-6 xl:gap-x-24":
                cols === 2,
              "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-y-6":
                cols === 3,
            })}>
            {checklist.map((checklist, index) => (
              <ChecklistItem {...checklist} key={index} />
            ))}
          </div>
        )}
      </div>

      {!!after && <p className="text-center text-sm font-bold mt-4">{after}</p>}
    </Container>
  );
};

export default ChecklistSectionSimple;
