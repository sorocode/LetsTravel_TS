import React, { FC } from "react";
import { Outlet } from "react-router-dom";
const RootLayout: FC = () => {
  return (
    <div className="flex justify-center bg-gray-200 max-w-4xl mx-auto max-h-screen h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
