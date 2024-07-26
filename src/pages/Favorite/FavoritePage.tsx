import { buttonVariants } from "@/components/ui/button";
import React, { FC } from "react";
import { Link } from "react-router-dom";

const FavoritePage: FC = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <p>아직 찜한 장소가 없습니다.</p>
      <Link to="/search" className={buttonVariants({ variant: "outline" })}>
        탐색하러가기
      </Link>
    </div>
  );
};

export default FavoritePage;
