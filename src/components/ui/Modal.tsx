import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Button } from "./button";
import { City } from "@/types/http";
import { DialogClose } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  cityData: City;
}

const Modal: FC<ModalProps> = ({ cityData }) => {
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    navigate(`/plan/${cityData.cityName}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">선택</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{cityData.cityNameTranslated}</DialogTitle>
        </DialogHeader>
        <div>이 도시를 선택하시겠습니까?</div>
        <DialogFooter>
          {/* TODO: 선택 버튼 클릭 시 동작 코드 작성(날짜 선택페이지로 이동) */}
          <Button type="button" onClick={onSubmitHandler}>
            선택
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
