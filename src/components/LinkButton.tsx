import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

export type LinkButtonProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "custom";
  text?: string;
} & LinkProps;

const LinkButton = ({
  children,
  className = "",
  size = "md",
  color = "primary",
  ...rest
}: PropsWithChildren<LinkButtonProps>) => {
  return (
    <Link
      className={clsx(
        "inline-flex items-center justify-center font-bold",
        " ",
        {
          "bg-primary text-white hover:bg-primary/80": color === "primary",
          "bg-white text-black hover:bg-black hover:text-white": color === "secondary",
          "px-2 py-1 text-lg": size === "sm",
          "px-4 md:px-6 py-2.5 text-xl": size === "md",
          "px-4 md:px-8 lg:px-10  py-2.5 text-xl": size === "lg",
        },
        className
      )}
      {...rest}>
      {rest?.text || children}
    </Link>
  );
};

export default LinkButton;
