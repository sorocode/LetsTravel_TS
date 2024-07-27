import { FunctionComponent } from "react";
import SpotImage from "./SpotImage";
import Stars from "@/components/ui/common/Stars";
import Heart from "@/components/ui/common/Heart";
import SpotLocation from "./SpotLocation";
import { SpotInfoType } from "@/types/spot";

const SpotInfo: FunctionComponent<SpotInfoType> = ({
  imageUrl,
  spotName,
  spotLocalName,
  likes,
  reviews,
  score,
  location,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <SpotImage imageUrl={imageUrl} />
        <p className="font-[510] text-2xl">{spotName}</p>
        <p className="text-gray-500">{spotLocalName}</p>
      </div>
      <div id="rating" className="mt-4 flex gap-2">
        <Stars score={score} reviews={reviews} />
        <Heart likes={likes} />
      </div>
      <SpotLocation location={location} />
    </>
  );
};

export default SpotInfo;
