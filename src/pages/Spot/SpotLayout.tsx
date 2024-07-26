import Header from "@/components/ui/common/Header";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

interface SpotLayoutProps {}

const SpotLayout: FunctionComponent<SpotLayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SpotLayout;
