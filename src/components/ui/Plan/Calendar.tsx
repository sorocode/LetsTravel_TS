import { useState } from "react";
import { Calendar } from "../calendar";
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../drawer";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
const CalendarContent = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>날짜선택</DrawerTitle>
        <DrawerDescription>여행가는 날짜를 선택해주세요</DrawerDescription>
      </DrawerHeader>

      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={1}
      />
    </DrawerContent>
  );
};

export default CalendarContent;
