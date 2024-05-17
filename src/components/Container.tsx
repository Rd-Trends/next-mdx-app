import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={clsx(
        " container mx-auto px-4 md:px-8 lg:px-12 xl:px-[60px]",
        props.className
      )}>
      {props.children}
    </div>
  );
};

export default Container;
