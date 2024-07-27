import { FunctionComponent } from "react";

import SpotInfo from "./SpotInfo";
import SpotMenu from "./SpotMenu";
import SpotDescription from "./SpotDescription";

interface SpotPageProps {}
const SpotPage: FunctionComponent<SpotPageProps> = () => {
  return (
    <>
      <SpotInfo
        imageUrl="https://images.unsplash.com/photo-1542210940661-5f91cb7afe02?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        score={4}
        reviews={302}
        likes={5132}
        spotName="도톤보리"
        spotLocalName="道頓堀"
        location="난바"
      />
      <SpotMenu />
      <SpotDescription description="도톤보리(Dotonbori)는 일본 오사카에 위치한 유명한 관광지로, 활기 넘치는 거리와 다양한 먹거리로 유명합니다. 도톤보리 강을 따라 늘어선 네온사인과 거대한 간판들이 특히 밤에 인상적이며, 글리코맨 간판은 대표적인 랜드마크 중 하나입니다. 쇼핑, 음식, 오락을 모두 즐길 수 있는 장소로, 타코야키, 오코노미야키 같은 오사카의 전통 음식을 맛볼 수 있는 다양한 레스토랑과 포장마차가 즐비합니다." />
    </>
  );
};

export default SpotPage;
