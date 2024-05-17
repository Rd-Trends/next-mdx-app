import React from "react";

import { ButtonProps } from "../ButtonComponent";
import Image from "next/image";

import TableTextWithDescriptionComponent from "./TableTextWithDescriptionComponent";
import TableTextComponent from "./TableTextComponent";
import TableButtonComponent from "./TableButtonComponent";

import ButtonComponent from "../ButtonComponent";
import Container from "../Container";
import clsx from "clsx";

export type ComparisonTableDividerProps = {
  heading?: string;
  subheading?: string;
};

export type ComparisonTableColProps = {
  link: string;
  component: string;
  className: string | undefined;
  text?: string;
  button?: ButtonProps;
  description?: string;
};

export type ComparisonTableRowProps = {
  col?: ComparisonTableColProps[];
  colIndex?: number;
  divider?: ComparisonTableDividerProps;
  button?: ButtonProps[];
};

export type ComparisonTableProps = {
  row: ComparisonTableRowProps[];
};

export type ComparisonTableComponentProps = {
  table: ComparisonTableProps;
};

const ComparisonTableComponent = ({ table }: ComparisonTableComponentProps) => {
  if (!table || !Array.isArray(table)) {
    // Handle the case when 'table' or 'table.row' is undefined
    return <div>No data to display</div>;
  }

  return (
    <Container className=" relative overflow-auto">
      <table className="w-full lg:table-fixed">
        {table &&
          table.map((rowGroup, groupIndex) =>
            groupIndex === 0 ? (
              <thead key={groupIndex}>
                <tr className="border-t-grey_666 border-t border-r-0">
                  {rowGroup &&
                    rowGroup.row.map(
                      (
                        row: { col: any[] },
                        rowIndex: React.Key | null | undefined
                      ) => (
                        <th
                          scope="col"
                          className={clsx("px-4 py-4", {
                            "bg-grey_ccc/30": rowIndex === 0,
                          })}
                          key={rowIndex}>
                          {row.col &&
                            row.col.map((col, colIndex) => (
                              <div key={colIndex} className="w-full justify-normal">
                                {col && col.component === "text" && (
                                  <TableTextComponent text={col.text} />
                                )}
                                {col &&
                                  col.component === "text-with-description" && (
                                    <TableTextWithDescriptionComponent
                                      text={col.text}
                                      description={col.description}
                                    />
                                  )}
                                {col && col.component === "button" && (
                                  <div className="mt-2 ">
                                    <ButtonComponent
                                      text={col.button.text}
                                      link={col.button.link}
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                        </th>
                      )
                    )}
                </tr>
              </thead>
            ) : null
          )}
        <tbody>
          {table &&
            table.map((rowGroup, groupIndex) =>
              groupIndex > 0 ? (
                <tr
                  key={groupIndex}
                  className="border-t-grey_666 border-t border-r-0">
                  {rowGroup &&
                    rowGroup.row.map(
                      (row: ComparisonTableRowProps, rowIndex: number) => (
                        <React.Fragment key={rowIndex}>
                          {Array.isArray(row.divider) &&
                            row.divider.map((col, colIndex) => (
                              <th
                                scope="col"
                                colSpan={4}
                                className="p-4 py-2 col rowIndex bg-deepblue"
                                key={colIndex}>
                                <div
                                  className={`mx-1 p-4 w-fit whitespace-nowrap ${
                                    rowIndex === 0 ? "text-left" : ""
                                  }`}>
                                  {col.component === "text" && (
                                    <TableTextComponent text={col.text} />
                                  )}
                                </div>
                              </th>
                            ))}

                          {row.col &&
                            row.col.map((col, colIndex) => (
                              <th
                                scope="col"
                                className={clsx("", {
                                  "bg-grey_ccc/30": rowIndex === 0,
                                })}
                                key={colIndex}>
                                <div
                                  className={`mx-1 p-4 ${
                                    rowIndex === 0 ? "text-left" : ""
                                  }`}>
                                  {col.component === "text" && (
                                    <TableTextComponent text={col.text || ""} />
                                  )}
                                  {col.component ===
                                    "text-with-description" && (
                                    <TableTextWithDescriptionComponent
                                      text={col.text || ""}
                                      description={col.description || ""}
                                    />
                                  )}
                                  {col.component === "mark" && (
                                    <div className="flex justify-center">
                                      <Image
                                        src="/images/checkmark.png"
                                        width={32}
                                        height={32}
                                        alt=""
                                      />
                                    </div>
                                  )}
                                </div>
                              </th>
                            ))}
                          {Array.isArray(row.button) &&
                            row.button.map(
                              (col: ButtonProps, colIndex: number) => (
                                <th
                                  scope="col"
                                  className={`b-0 p-0 col rowIndex`}
                                  colSpan={4}
                                  key={colIndex}>
                                  <div className="radius-0">
                                    {col && (
                                      <TableButtonComponent
                                        className={col.className || ""}
                                        text={col.text || ""}
                                        link={col.link || ""}
                                      />
                                    )}
                                  </div>
                                </th>
                              )
                            )}
                        </React.Fragment>
                      )
                    )}
                </tr>
              ) : null
            )}
        </tbody>
      </table>
    </Container>
  );
};

export default ComparisonTableComponent;
