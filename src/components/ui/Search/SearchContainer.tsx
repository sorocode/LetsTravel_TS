import React, { FC } from "react";

interface SearchContainerProps {
  children: JSX.Element;
}

const SearchContainer: FC<SearchContainerProps> = ({ children }) => {
  return <div className="w-screen">{children}</div>;
};

export default SearchContainer;
