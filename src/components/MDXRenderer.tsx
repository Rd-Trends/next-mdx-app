import React from "react";

export type MDXRendererProps = {
  mdxSource: string;
};

export const MDXRenderer: React.FC<MDXRendererProps> = ({ mdxSource }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: mdxSource }} />
    </>
  );
};

export default MDXRenderer;
