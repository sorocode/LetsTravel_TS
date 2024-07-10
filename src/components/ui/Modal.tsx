import { FC } from "react";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Button } from "./button";
import { City } from "@/types/http";
import { DialogClose } from "@radix-ui/react-dialog";

interface ModalProps {
  cityData: City;
}

const Modal: FC<ModalProps> = ({ cityData }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{cityData.cityNameTranslated}</DialogTitle>
      </DialogHeader>
      <div>이 도시를 선택하시겠습니까?</div>
      <DialogFooter>
        {/* TODO: 선택 버튼 클릭 시 동작 코드 작성 */}
        <Button type="submit">선택</Button>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default Modal;
