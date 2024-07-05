import React, { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent, Card } from "@mui/material";
import { City } from "@/types/httpTypes";

interface CarouselTemplateProps<T> {
  data: T;
}
const CarouselTemplate: FC<CarouselTemplateProps<City[]>> = ({ data }) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm md:max-w-xl lg:max-w-3xl"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center">
                    <img
                      src={item.cityPhotoURL}
                      alt={item.cityNameTranslated}
                      className="h-full"
                    />
                    <span className="text-3xl font-semibold">
                      {item.cityNameTranslated}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </>
  );
};

export default CarouselTemplate;
