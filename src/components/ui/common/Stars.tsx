import { FunctionComponent, useMemo } from "react";
import StarIcon from "@mui/icons-material/Star";
import { grey, yellow } from "@mui/material/colors";
import React from "react";

interface StarsProps {
  score: number;
  reviews: number;
}

const Stars: FunctionComponent<StarsProps> = ({ score, reviews }) => {
  const MAX_STARS = 5;

  const renderStars = useMemo(() => {
    const stars = [];
    const validScore = Math.max(0, Math.min(score, MAX_STARS));

    for (let i = 0; i < MAX_STARS; i++) {
      stars.push(
        <StarIcon
          key={i}
          sx={{ color: i < validScore ? yellow[600] : grey[300] }}
        />
      );
    }
    return stars;
  }, [score]);

  return (
    <div className="flex items-center gap-1">
      <span>{renderStars}</span>
      <span>{reviews}</span>
    </div>
  );
};

export default React.memo(Stars);
