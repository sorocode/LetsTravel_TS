import { FunctionComponent } from "react";

import SpotInfo from "./SpotInfo";
import SpotMenu from "./SpotMenu";

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
    </>
  );
};

export default SpotPage;
