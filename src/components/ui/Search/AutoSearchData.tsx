import { FC } from "react";

interface AutoSearchDataProps {
  children: JSX.Element;
  onClick: () => void;
}

const AutoSearchData: FC<AutoSearchDataProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="hover:bg-teal-50">
      <span className="text-xl">{children}</span>
    </div>
  );
};

export default AutoSearchData;
