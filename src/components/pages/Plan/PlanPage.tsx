import PlanArea from "@/components/ui/Plan/PlanArea";
import { FunctionComponent } from "react";
import { useLocation, useParams } from "react-router-dom";
interface PlanPageProps {}

const PlanPage: FunctionComponent<PlanPageProps> = () => {
  const params = useParams();
  const location = useLocation();
  const cityInfo = { ...location.state };
  return (
    <>
      <PlanArea cityInfo={cityInfo} />
    </>
  );
};

export default PlanPage;
