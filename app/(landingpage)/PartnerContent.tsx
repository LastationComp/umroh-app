"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import LazyLoadedContent from "@/components/images/LazyLoadedContent";
import LazyImage from "@/components/images/LazyImage";

export default function PartnerContent({ data }: { data: any[] }) {
  return (
    <section className="md:container max-md:container-md">

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
        className="px-3"
      >
        <CarouselContent className="">
          {data?.map((patner: any, index: number) => (
            <CarouselItem
              key={index}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6 flex justify-center"
            >
              <div className="p-5 bg-white shadow border border-1 flex items-center h-full">
                <LazyImage
                  src={patner.img_url}
                  className=" rounded transition border-black w-[150px]"
                  alt="Galeri "
                  width={1000}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
}
