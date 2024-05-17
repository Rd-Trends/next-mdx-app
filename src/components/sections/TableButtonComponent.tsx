import Link from "next/link";

type TableButtonComponentProps = {
  text: string;
  link: string;
  color?: string;
  className?: string;
};

const TableButtonComponent = ({
  text,
  link,
  color = "orange",
  className = "bg-orange-500 hover:bg-orange-700",
}: TableButtonComponentProps) => {
  return (
    <div className="flex w-100">
      <Link
        href={link}
        className={`text-white text-lg font-normal py-4 px-4 transition-all duration-300 ${className}`}>
        {text}
      </Link>
    </div>
  );
};

export default TableButtonComponent;
