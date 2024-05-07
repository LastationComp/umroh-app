"use client";

import PopupSliders from "@/components/images/PopupSliders";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";

export default function CarouselCredentials({ data }: { data: any[] }) {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const imagesData = data.map((image) => {
    return {
      original: image.credentials,
      thumbnail: image.credentials,
    };
  });

  const openImage = (index: number) => {
    setOpen(!open);

    setSlide(index);
  };
  return (
    <section>
      <Carousel className="w-full ">
        <CarouselContent>
          {data.map((travel_legality: any, index: number) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Image
                  alt={travel_legality.name}
                  width={500}
                  className="w-full max-h-50 object-cover cursor-pointer"
                  height={1000}
                  quality={50}
                  src={travel_legality.credentials}
                  onClick={() => openImage(index)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <PopupSliders
        data={imagesData}
        open={open}
        onOpenChange={setOpen}
        currentSlide={slide}
      />
    </section>
  );
}
