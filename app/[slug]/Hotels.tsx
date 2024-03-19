'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';
import { FaHotel, FaWifi } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { GiBus } from 'react-icons/gi';
import Autoplay from 'embla-carousel-autoplay';
import JSXStyle from 'styled-jsx/style';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup, IconProp, findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { MdFamilyRestroom, MdFoodBank, MdOutlineRoomService } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';

export default function Hotels() {
  return (
    <Card className="my-3">
      <CardHeader>
        <span className="font-bold flex gap-3 items-center">
          <FaHotel />
          Hotel
        </span>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-5">
          <div className="flex flex-col gap-3 text-sm">
            <span className="font-bold bg-slate-50 text-lg rounded px-1 py-3">Mekkah</span>
            <div className="flex flex-col gap-3">
              <span className="font-bold">Le Meridien Towers Makkah</span>
              <span className="flex gap-3 items-center">
                <IoLocation />
                1900m dari Menara Abraj Al Bait
              </span>
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                opts={{
                  loop: true,
                  align: 'start',
                }}
                className="w-full mx-auto"
              >
                <CarouselContent className="">
                  <CarouselItem key={1} className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/6  flex justify-center">
                    <div className="p-3 bg-white shadow border border-1 flex items-center">
                      <Image
                        src={`https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_95,w_109,q_80,fl_progressive/hotel/178773758.jpg`}
                        className=" rounded transition border-black w-[150px] h-auto"
                        alt="Galeri "
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem key={2} className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/6 pl-5 flex justify-center">
                    <div className="p-3 bg-white shadow border border-1 flex items-center h-full">
                      <Image
                        src={`https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_95,w_109,q_80,fl_progressive/hotel/6546424.jpg`}
                        className=" rounded transition border-black w-[150px] h-auto"
                        alt="Galeri "
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem key={11} className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/6 pl-5 flex justify-center">
                    <div className="p-3 bg-white shadow border border-1 flex items-center">
                      <Image
                        src={`https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_95,w_109,q_80,fl_progressive/hotel/178773744.jpg`}
                        className=" rounded transition border-black w-[150px] h-auto"
                        alt="Galeri "
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <span className="font-bold">Fasilitas Popular</span>
              <div className="flex flex-wrap gap-3">
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(FaWifi)}
                  Free Wifi
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(MdFamilyRestroom)}
                  Free Wifi
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(MdFoodBank)}
                  Tempat Makan
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(GiBus)}
                  Shuttle Bandara
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(MdOutlineRoomService)}
                  Pelayanan Kamar
                </Button>
              </div>
              <span className="font-bold">Fasilitas Lainnya</span>
              <span className="text-sm">Tidak ada Fasilitas...</span>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-3 text-sm">
            <span className="font-bold bg-slate-50 text-lg rounded px-1 py-3">Madinah</span>
            <div className="flex flex-col gap-3">
              <span className="font-bold">Dar Al Eiman Al Andalus Hotel</span>
              <span className="flex gap-3 items-center">
                <IoLocation />
                800m dari Bukit Safa
              </span>
              <span className="font-bold">Fasilitas Popular</span>
              <div className="flex flex-wrap gap-3">
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(FaWifi)}
                  Free Wifi
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(MdFamilyRestroom)}
                  Free Wifi
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(MdFoodBank)}
                  Tempat Makan
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(GiBus)}
                  Shuttle Bandara
                </Button>
                <Button variant={'outline'} className="flex items-center gap-3 text-black/70">
                  {React.createElement(MdOutlineRoomService)}
                  Pelayanan Kamar
                </Button>
              </div>
              <span className="font-bold">Fasilitas Lainnya</span>
              <span className="text-sm">Tidak ada Fasilitas...</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
