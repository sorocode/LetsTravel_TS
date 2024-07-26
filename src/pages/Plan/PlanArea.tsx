import { City } from "@/types/http";
import { FC, useEffect, useState } from "react";
import { CalendarToday } from "@mui/icons-material";
import { badgeVariants } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import CalendarContent from "./Calendar";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
interface PlanAreaProps {
  cityInfo: City;
}

const PlanArea: FC<PlanAreaProps> = ({ cityInfo }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  // 도시이름이 없을 경우 되돌아가기
  useEffect(() => {
    if (cityInfo.cityNameTranslated === undefined) {
      navigate("..");
    }
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col text-xl font-semibold">
        <span>{cityInfo.cityNameTranslated} 여행,</span>
        <span>언제 떠나세요?</span>
      </div>
      <Drawer>
        <DrawerTrigger className="flex justify-start">
          {date?.from ? (
            date.to ? (
              <Button variant="ghost" className="flex gap-1 px-0">
                <CalendarIcon />
                <span>{format(date.from, "yyyy년 MM월 dd일")}</span>
                <span>-</span>
                <span>{format(date.to, "yyyy년 MM월 dd일")}</span>
              </Button>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <Button className="flex items-center gap-1 px-0" variant="ghost">
              <CalendarToday />
              <span>일정 등록</span>
            </Button>
          )}
        </DrawerTrigger>
        <CalendarContent date={date} setDate={setDate} />
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
