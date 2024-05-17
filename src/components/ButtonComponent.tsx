import Link from "next/link";
import React from "react";

export interface ButtonProps {
  text: string;
  link: string;
  color?: string;
  className?: string;
  withoutWrapper?: boolean;
}

const ButtonComponent = ({
  text,
  link,
  withoutWrapper = false,
  color = "orange",
  className = "bg-orange-500 hover:bg-orange-700",
}: ButtonProps) => {
  return (
    <>
      {withoutWrapper && (
        <Link
          href={link}
          className={`text-white text-xl font-bold py-2 px-8 rounded transition-all duration-300 ${className}`}>
          {text}
        </Link>
      )}

      {!withoutWrapper && (
        <div className="inline-flex">
          <Link
            href={link}
            className={`text-white text-xl font-bold py-2 px-8 rounded transition-all duration-300 ${className}`}>
            {text}
          </Link>
        </div>
      )}
    </>
  );
};

export default ButtonComponent;
