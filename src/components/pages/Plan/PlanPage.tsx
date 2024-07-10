import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
interface PlanPageProps {}

const PlanPage: FunctionComponent<PlanPageProps> = () => {
  const params = useParams();
  return <p>현재 선택된 도시: {params.cityName}</p>;
};

export default PlanPage;
