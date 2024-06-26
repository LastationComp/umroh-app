"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import PopupSliders from "@/components/images/PopupSliders";

export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  const [openPopup, setOpenPopup] = useState(false);
  const [slide, setSlide] = useState(0);
  const imagesData = images.map((image) => {
    return {
      original: `https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/${image}.jpg`,
      thumbnail: `https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/${image}.jpg`,
    };
  });
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center">
          <h1 className="text-[24px] font-bold">Galeri Jamaah</h1>
        </div>
      </section>
      <section className="flex justify-center items-center max-md:container max-md:mx-auto bg-blue-dark h-[250px]">
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
          className="w-full -ml-5 md:container md:mx-auto "
        >
          <CarouselContent className="">
            {images.map((image, i) => (
              <CarouselItem
                key={i}
                className="basis-1/1 md:basis-1/2 lg:basis-1/4 lg:basis-1/6 pl-5 flex justify-center"
              >
                <div className="pt-1 pb-5 px-1 bg-white shadow border border-1 flex flex-col">
                  <Image
                    src={`https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/${image}.jpg`}
                    onClick={() => {
                      setOpenPopup(!openPopup);
                      setSlide(i);
                    }}
                    className="w-[250px] h-[150px] shadow-lg rounded transition border-black cursor-pointer"
                    alt="Galeri "
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={
                      "/api/image/blur?url=" +
                      `https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/${image}.jpg`
                    }
                    width={300}
                    height={300}
                  />
                  <span className="line-clamp-1 max-w-[250px] text-center">
                    Lorem, ipsum dolor.{" "}
                    {i % 2 === 0 &&
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem."}{" "}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
        {/* <PopupSingleImage open={openPopup} onOpenChange={setOpenPopup} url={url} title={`Gambar ${url}`} /> */}
        <PopupSliders
          open={openPopup}
          onOpenChange={setOpenPopup}
          currentSlide={slide}
          data={imagesData}
        />
      </section>
    </>
  );
}
