import React, { FC, ReactNode } from "react";

interface AutoSearchContainerProps {
  children: ReactNode;
}

const AutoSearchContainer: FC<AutoSearchContainerProps> = ({ children }) => {
  return (
    <div className="border-black border-[1px] mt-1 rounded-sm px-1 py-1 w-[23rem] md:w-[28rem]">
      {children}
    </div>
  );
};

export default AutoSearchContainer;
