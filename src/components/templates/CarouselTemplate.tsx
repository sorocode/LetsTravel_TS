import React, { FC, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CardContent, Card } from "@mui/material";
import { City } from "@/types/http";
import { Skeleton } from "../ui/skeleton";
import Modal from "../ui/Modal";

interface CarouselTemplateProps<T> {
  data: T;
}
const CarouselTemplate: FC<CarouselTemplateProps<City[]>> = ({ data }) => {
  let content: ReactNode;

  if (data) {
    content = data.map((item, index) => (
      <Dialog>
        <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center">
                <img
                  src={item.cityPhotoURL}
                  alt={item.cityNameTranslated}
                  className="h-full"
                />
                <span className="text-2xl font-semibold">
                  {item.cityNameTranslated}
                </span>
                <DialogTrigger asChild>
                  <Button variant="outline">선택</Button>
                </DialogTrigger>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <Modal cityData={item} />
      </Dialog>
    ));
  } else {
    content = (
      <Card>
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </Card>
    );
  }
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm md:max-w-xl lg:max-w-3xl"
      >
        <CarouselContent>{content}</CarouselContent>
      </Carousel>
    </>
  );
};

export default CarouselTemplate;
