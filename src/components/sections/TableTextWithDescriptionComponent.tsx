type TableTextWithDescriptionComponentProps = {
  text: string;
  description: string;
};

const TableTextWithDescriptionComponent = ({
  text,
  description,
}: TableTextWithDescriptionComponentProps) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold lg:text-xl">{text}</h4>
      <p className="text-sm lg:text-lg font-medium">{description}</p>
    </div>
  );
};

export default TableTextWithDescriptionComponent;
