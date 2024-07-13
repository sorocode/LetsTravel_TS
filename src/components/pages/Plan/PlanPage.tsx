import { Button } from "@/components/ui/button";
import PlanArea from "@/components/ui/Plan/PlanArea";
import RecommendArea from "@/components/ui/Plan/RecommendArea";
import { FunctionComponent } from "react";
import { useLocation, useParams } from "react-router-dom";
interface PlanPageProps {}

const PlanPage: FunctionComponent<PlanPageProps> = () => {
  const params = useParams();
  const location = useLocation();
  const cityInfo = { ...location.state };
  return (
    <div className="flex flex-col h-3/4 justify-between">
      <div>
        <PlanArea cityInfo={cityInfo} />
        <RecommendArea cityInfo={cityInfo} />
      </div>
      {/* TODO:db에 일정 저장 */}
      <div className="flex flex-col items-center justify-end">
        <Button>일정 저장하고 계속하기</Button>
      </div>
    </div>
  );
};

export default PlanPage;
