import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
const RootLayout: FC = () => {
  return (
    <div className="bg-gray-200 max-w-4xl mx-auto max-h-screen h-screen">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
        <nav className="w-full fixed bottom-0 right-0">
          <Navbar />
        </nav>
      </main>
    </div>
  );
};

export default RootLayout;
