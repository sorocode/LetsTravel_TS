import { City } from "@/types/http";
import { FC } from "react";
import { CalendarToday } from "@mui/icons-material";
import { badgeVariants } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { Drawer, DrawerTrigger } from "../drawer";
import CalendarContent from "./Calendar";
interface PlanAreaProps {
  cityInfo: City;
}

const PlanArea: FC<PlanAreaProps> = ({ cityInfo }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col text-xl font-semibold">
        <span>{cityInfo.cityNameTranslated} 여행,</span>
        <span>언제 떠나세요?</span>
      </div>
      <Drawer>
        <DrawerTrigger>
          <Button className="flex items-center gap-1 px-0" variant="ghost">
            <CalendarToday />
            <span>일정 등록</span>
          </Button>
        </DrawerTrigger>
        <CalendarContent />
      </Drawer>
      <div>
        <Link to="/search" className={badgeVariants({ variant: "default" })}>
          + 도시추가
        </Link>
      </div>
    </div>
  );
};

export default PlanArea;
