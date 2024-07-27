import { Button } from "@/components/ui/button";
import {
  EventAvailableOutlined,
  FavoriteBorder,
  IosShareOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { FunctionComponent } from "react";

interface SpotMenuProps {}

const SpotMenu: FunctionComponent<SpotMenuProps> = () => {
  // TODO:버튼 기능 넣기
  return (
    <div className="flex justify-stretch items-center py-3">
      <Button variant="ghost" className="flex flex-col">
        <FavoriteBorder />
        <span className="text-gray-500">저장하기</span>
      </Button>
      <Button variant="ghost" className="flex flex-col">
        <EventAvailableOutlined />
        <span className="text-gray-500">일정추가</span>
      </Button>
      <Button variant="ghost" className="flex flex-col">
        <StarBorderOutlined />
        <span className="text-gray-500">리뷰쓰기</span>
      </Button>
      <Button variant="ghost" className="flex flex-col">
        <IosShareOutlined />
        <span className="text-gray-500">공유하기</span>
      </Button>
    </div>
  );
};

export default SpotMenu;
