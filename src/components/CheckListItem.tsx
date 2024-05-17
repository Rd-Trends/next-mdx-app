"use client";

import Image from "next/image";
import { useId } from "react";

export type ChecklistItemProps = {
  label?: string;
  item?: string;
};

const ChecklistItem = ({ item, label }: ChecklistItemProps) => {
  const id = useId();
  return (
    <li key={id} className=" flex items-start justify-between">
      <Image src="/images/checkmark.png" width={32} height={32} alt="" />

      <div className=" w-[calc(100%-3rem)] space-y-2">
        {!!label && (
          <h3 className=" text-[28px] leading-tight text-black font-bold">
            {label}
          </h3>
        )}
        {!!item && (
          <p className=" text-brand text-base font-semibold md:text-xl md:font-bold">
            {item}
          </p>
        )}
      </div>
    </li>
  );
};

export default ChecklistItem;
