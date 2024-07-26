import { ChevronLeft, MapIcon, Menu } from "lucide-react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="flex justify-between px-1 mb-3">
      <Link to="..">
        <ChevronLeft />
      </Link>
      <div className="flex justify-center items-center gap-2">
        <Link to="map">
          <MapIcon />
        </Link>
        <Link to="#">
          <Menu />
        </Link>
      </div>
    </div>
  );
};

export default Header;
