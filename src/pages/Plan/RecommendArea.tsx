import { City } from "@/types/http";
import { FC } from "react";

interface RecommendAreaProps {
  cityInfo: City;
}

const RecommendArea: FC<RecommendAreaProps> = ({ cityInfo }) => {
  return (
    <>
      <div className="flex flex-col mt-6">
        <div className="title text-lg font-semibold">
          {cityInfo.cityNameTranslated}, 이런 곳은 어떠세요?
        </div>
        <div className="description text-sm text-gray-500">
          요즘 뜨는 {cityInfo.cityNameTranslated} 최신 핫플, 여기서
          확인해보세요!
        </div>
      </div>
    </>
  );
};

export default RecommendArea;
