import { AccountCircle } from "@mui/icons-material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
const Header: FC = () => {
  return (
    <div className="flex justify-between items-center bg-cyan-500 px-6 py-2">
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" width={50} />
        <span className="text-white text-xl font-semibold font-ShadowsIntoLight">
          LetsTravel
        </span>
      </Link>

      <Link to="/login">
        <AccountCircle color="action" fontSize="large" />
      </Link>
    </div>
  );
};

export default Header;
