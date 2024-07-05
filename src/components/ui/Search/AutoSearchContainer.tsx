import React, { FC } from "react";

interface AutoSearchContainerProps {
  children: JSX.Element | boolean | string;
}

const AutoSearchContainer: FC<AutoSearchContainerProps> = ({ children }) => {
  return (
    <div className="border-black border-[1px] mt-1 rounded-sm px-1 py-1 w-[23rem]">
      {children}
    </div>
  );
};

export default AutoSearchContainer;
