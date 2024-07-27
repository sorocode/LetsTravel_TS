import { FunctionComponent } from "react";

interface SpotImageProps {
  imageUrl: string;
}

const SpotImage: FunctionComponent<SpotImageProps> = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="spot image"
      className="w-full rounded-md mx-auto"
    />
  );
};

export default SpotImage;
