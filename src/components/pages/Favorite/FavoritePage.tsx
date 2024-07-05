import CarouselTemplate from "@/components/templates/CarouselTemplate";
import React, { FC } from "react";

const FavoritePage: FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 gap-6">
        <div className="w-full mx-auto md:text-xl">
          <p>⛱️ 여름철 인기 여행지</p>

          <CarouselTemplate />
        </div>
        <div className="w-full mx-auto md:text-xl">
          <p>🔥 요즘 뜨는 핫플레이스</p>

          <CarouselTemplate />
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
