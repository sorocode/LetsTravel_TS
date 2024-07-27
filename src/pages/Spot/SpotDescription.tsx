import { FunctionComponent } from "react";

interface SpotDescriptionProps {
  description: string;
}

const SpotDescription: FunctionComponent<SpotDescriptionProps> = ({
  description,
}) => {
  return (
    <div>
      <p className="py-2 italic">Description</p>
      <span className="text-gray-700 italic">{description}</span>
    </div>
  );
};

export default SpotDescription;
