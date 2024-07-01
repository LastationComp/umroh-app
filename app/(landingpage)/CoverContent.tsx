"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import LazyLoadedContent from "@/components/images/LazyLoadedContent";
import LazyImage from "@/components/images/LazyImage";
export default function CoverContent() {
  const urls = [
    `https://cloud.umroh.com/images/upload/c_cover,w_60,dpr_2.0,q_20,fl_progressive/web/Image_63_2x.png`,
    `https://cloud.umroh.com/images/upload/c_cover,w_60,dpr_2.0,q_20,fl_progressive/cover/6b595b03dd5023d18020bbbd355d1cc5.jpeg`,
    `https://cloud.umroh.com/images/upload/c_cover,w_60,dpr_2.0,q_20,fl_progressive/hamsa%20tour.png`,
    `https://cloud.umroh.com/images/upload/c_cover,w_60,dpr_2.0,q_20,fl_progressive/LOGO%20SADAR%20GRUP.jpeg`,
    `https://cloud.umroh.com/images/upload/c_cover,w_60,dpr_2.0,q_20,fl_progressive/web/Image_63_2x.png`,
  ];
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col text-center">
            <span className="text-[24px]">Diliput Oleh</span>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-3 max-md:container max-md:mx-auto bg-blue-dark py-5">
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
            {urls.map((url, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/6 pl-5 flex justify-center"
              >
                <div className="p-5 bg-white shadow border border-1 flex items-center h-full">
                  <LazyImage
                    src={url}
                    className=" rounded transition border-black w-[150px]"
                    alt="Galeri "
                    width={1000}
                    height={1000}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
