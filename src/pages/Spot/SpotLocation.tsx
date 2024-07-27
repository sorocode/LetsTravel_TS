import LocationOn from "@mui/icons-material/LocationOn";
import { FunctionComponent } from "react";

interface SpotLocationProps {
  location: string;
}

const SpotLocation: FunctionComponent<SpotLocationProps> = ({ location }) => {
  return (
    <div className="flex items-center my-4">
      <LocationOn color="disabled" />
      <span>{location}</span>
    </div>
  );
};

export default SpotLocation;
