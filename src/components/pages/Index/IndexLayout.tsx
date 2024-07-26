import { FC } from "react";
import { Outlet } from "react-router-dom";
import IndexHeader from "./IndexHeader";

interface IndexLayoutProps {}

const IndexLayout: FC<IndexLayoutProps> = () => {
  return (
    <>
      <IndexHeader />
      <Outlet />
    </>
  );
};

export default IndexLayout;
