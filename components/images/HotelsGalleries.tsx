"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import PopupSliders from "@/components/images/PopupSliders";

export default function HotelsGalleries({ images }: { images: any[] }) {
  const [slide, setSlide] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);
  const imagesData = images.map((image) => {
    return {
      original: image.image,
      thumbnail: image.image,
      originalClass: "max-h-[36rem]",
    };
  });

  return (
    // <form action={handleUploadImage} ref={form}>
    <section className="w-auto">
      <PopupSliders
        open={openGallery}
        onOpenChange={setOpenGallery}
        currentSlide={slide}
        data={imagesData}
      />
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
          align: "start",
        }}
        className=""
      >
        <CarouselContent className="w-auto">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-12/12 md:basis-6/12 lg:basis-4/12 max-w-[200px]"
            >
              <div className="p-3 cursor-pointer bg-white shadow border border-1 flex items-center trigger-tooltip-image relative ">
                <Image
                  src={image.image}
                  onClick={() => {
                    setSlide(index);
                    setOpenGallery(!openGallery);
                  }}
                  className=" rounded transition border-black w-full h-[150px] object-cover"
                  alt={image.title}
                  width={150}
                  height={150}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-ml-5" />
        <CarouselNext className="-mr-5" />
      </Carousel>
    </section>
    // </form>
  );
}
