import { FunctionComponent } from "react";
import { useLocation, useParams } from "react-router-dom";
interface PlanPageProps {}

const PlanPage: FunctionComponent<PlanPageProps> = () => {
  const params = useParams();
  const location = useLocation();
  const cityInfo = { ...location.state };
  return <p>현재 선택된 도시: {cityInfo.cityNameTranslated}</p>;
};

export default PlanPage;
