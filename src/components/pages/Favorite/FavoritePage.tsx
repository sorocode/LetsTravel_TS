import CarouselTemplate from "@/components/templates/CarouselTemplate";
import React, { FC } from "react";

const FavoritePage: FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-end items-center mt-10 mb-5">
        {/* <p>추천 여행지</p> */}
        <CarouselTemplate />
      </div>
    </div>
  );
};

export default FavoritePage;
