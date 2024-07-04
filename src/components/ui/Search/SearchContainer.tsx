import React, { FC } from "react";

interface SearchContainerProps {
  children: JSX.Element[];
}

const SearchContainer: FC<SearchContainerProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default SearchContainer;
