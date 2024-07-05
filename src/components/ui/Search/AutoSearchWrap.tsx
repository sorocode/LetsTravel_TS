import { FC, ReactNode } from "react";

interface AutoSearchWrapProps {
  children: ReactNode[];
}

const AutoSearchWrap: FC<AutoSearchWrapProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AutoSearchWrap;
