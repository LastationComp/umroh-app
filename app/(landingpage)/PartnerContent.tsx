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

export default function PartnerContent({ data }: { data: any[] }) {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col text-center">
            <span className="text-[24px]">Rekan Travel Umroh Kami</span>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center my-3 max-md:container max-md:mx-auto bg-blue-dark h-[250px]">
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
            {data?.map((patner: any, index: number) => (
              <CarouselItem
                key={index}
                className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/6 pl-5 flex justify-center"
              >
                <div className="p-5 bg-white shadow border border-1 flex items-center h-full">
                  <LazyLoadedContent>
                    <Image
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={"/api/image/blur?url=" + patner.img_url}
                      src={patner.img_url}
                      className=" rounded transition border-black w-[150px]"
                      alt="Galeri "
                      width={1000}
                      height={1000}
                    />
                  </LazyLoadedContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </section>
      <section className="flex justify-center my-3">
        <Button variant={"ghost"} className="hover:bg-blue-dark/200">
          <span className="text-blue-dark  font-semibold">
            Lihat Lebih Banyak {">"}
          </span>
        </Button>
      </section>
    </>
  );
}
