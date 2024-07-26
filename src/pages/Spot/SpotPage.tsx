import Stars from "@/components/ui/common/Stars";
import { FunctionComponent } from "react";

interface SpotPageProps {}

const SpotPage: FunctionComponent<SpotPageProps> = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <p className="font-[510] text-2xl">도톤보리</p>
        <p className="text-gray-500">道頓堀</p>
      </div>
      {/* FIXME:하드코딩 된 거 고치기 */}
      <div id="rating" className="mt-4">
        <Stars score={4} reviews={3231} />
      </div>
    </div>
  );
};

export default SpotPage;
