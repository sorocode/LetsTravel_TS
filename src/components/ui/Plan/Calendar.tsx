import { FC, useState } from "react";
import { Calendar } from "../calendar";
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../drawer";
import { DateRange } from "react-day-picker";

interface CalendarContentProps {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}
const CalendarContent: FC<CalendarContentProps> = ({ date, setDate }) => {
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
