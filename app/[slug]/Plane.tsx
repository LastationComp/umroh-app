'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { MdAirplanemodeActive } from 'react-icons/md';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Plane() {
  return (
    <Card className="my-3">
      <CardHeader className="font-bold">
        <div className="flex gap-3 items-center">
          <MdAirplanemodeActive />
          Maskapai Penerbangan
        </div>
      </CardHeader>
      <CardContent>
        <Carousel
          opts={{
            loop: true,
            align: 'start',
          }}
          className="w-full mx-auto"
        >
          <CarouselContent className="">
            <CarouselItem key={1} className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/4  flex justify-center">
              <div className="p-3 bg-white shadow border border-1 flex flex-col gap-3 max-md:w-[280px]">
                <span className="font-bold">Penerbangan 1</span>
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_38,w_64,q_80,fl_progressive/airline_logo/fzzbrqn3b3zvjpbh6qih.png`}
                    className=" rounded transition border-black w-[80px] h-[50px]"
                    alt="Galeri "
                    width={1000}
                    height={1000}
                  />
                  <span>Garuda Indonesia</span>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem key={2} className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/4  flex justify-center">
              <div className="p-3 bg-white shadow border border-1 flex flex-col gap-3 w-auto max-md:w-[280px] shadow-md">
                <span className="font-bold">Penerbangan 2</span>
                <div className="flex items-center gap-3 max-md:flex-wrap">
                  <Image
                    src={`https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_38,w_64,q_80,fl_progressive/airline_logo/fzzbrqn3b3zvjpbh6qih.png`}
                    className=" rounded transition border-black w-[80px] h-[50px]"
                    alt="Galeri "
                    width={1000}
                    height={1000}
                  />
                  <span>Garuda Indonesia</span>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}
