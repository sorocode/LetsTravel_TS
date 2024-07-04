import { FC } from "react";

interface AutoSearchWrapProps {
  children: JSX.Element[];
}

const AutoSearchWrap: FC<AutoSearchWrapProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AutoSearchWrap;
