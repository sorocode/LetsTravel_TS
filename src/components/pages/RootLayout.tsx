import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
const RootLayout: FC = () => {
  return (
    <div className="bg-gray-100 max-w-[42rem] mx-auto h-dvh max-h-dvh font-NotoSansKR">
      {/* <header>
        <Header />
      </header> */}
      <main className="h-full bg-gray-100 pt-5 px-6">
        <Outlet />
      </main>
      {/* <nav className="w-full fixed bottom-0 right-0 ">
        <Navbar />
      </nav> */}
    </div>
  );
};

export default RootLayout;
