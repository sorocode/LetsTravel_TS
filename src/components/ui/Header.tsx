import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex items-center gap-2 bg-cyan-500 px-4 py-2">
      <img src="/logo.png" alt="logo" width={50} />
      <span>LetsTravel</span>
    </div>
  );
};

export default Header;
