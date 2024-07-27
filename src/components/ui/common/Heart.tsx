import { Favorite } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { FunctionComponent } from "react";

interface HeartProps {
  likes: number;
}

const Heart: FunctionComponent<HeartProps> = ({ likes }) => {
  return (
    <div className="flex items-center gap-1">
      <Favorite sx={{ color: red[600] }} />
      <span>{likes}</span>
    </div>
  );
};

export default Heart;
