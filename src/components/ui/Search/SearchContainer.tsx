import React, { FC, ReactNode } from "react";

interface SearchContainerProps {
  children: ReactNode[];
}

const SearchContainer: FC<SearchContainerProps> = ({ children }) => {
  return <div className="flex flex-col items-center gap-1">{children}</div>;
};

export default SearchContainer;
