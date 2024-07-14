import { FC, ReactNode } from "react";

interface AutoSearchDataProps {
  children: ReactNode;
  onClick: () => void;
}

const AutoSearchData: FC<AutoSearchDataProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover:bg-teal-50 border-b-[0.5px] border-gray-400 py-1"
    >
      <span className="text-xl">{children}</span>
    </div>
  );
};

export default AutoSearchData;
