import React, { FC } from "react";

interface SearchContainerProps {
  children: JSX.Element[];
}

const SearchContainer: FC<SearchContainerProps> = ({ children }) => {
  return <div className="flex flex-col items-center gap-1">{children}</div>;
};

export default SearchContainer;
