import Header from "@/pages/Search/Search/Header";
import { Outlet } from "react-router-dom";

const SearchLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SearchLayout;
