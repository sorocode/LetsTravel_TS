import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
const RootLayout: FC = () => {
  return (
    <div className="bg-gray-200 max-w-[37.5rem] mx-auto max-h-dvh h-dvh font-NotoSansKR">
      <header>
        <Header />
      </header>
      <main className="h-full mt-10 mx-6">
        <Outlet />
      </main>
      <nav className="w-full fixed bottom-0 right-0">
        <Navbar />
      </nav>
    </div>
  );
};

export default RootLayout;
