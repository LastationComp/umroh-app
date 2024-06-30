'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React, { useId, useState } from 'react';

import { IoLocation } from 'react-icons/io5';

import Autoplay from 'embla-carousel-autoplay';
import PopupSliders from '@/components/images/PopupSliders';
import GetHotelFacilities from '@/components/facilities/GetHotelFacilities';

export default function HotelCard({ hotel }: { hotel: any }) {
  const [slide, setSlide] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);
  const imagesData = hotel.hotel_gallery.map((image: any) => {
    return {
      original: image.image_url,
      thumbnail: image.image_url,
    };
  });
  const hotelId = useId();
  return (
    <section key={hotelId}>
      <PopupSliders open={openGallery} onOpenChange={setOpenGallery} currentSlide={slide} data={imagesData} />

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex flex-col gap-3">
          <span className="font-bold">{hotel.name}</span>
          <span className="flex gap-3 items-center">
            <IoLocation />
            {hotel.location}
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
              {hotel?.hotel_gallery.map((image: any, index: number) => (
                <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/6  flex justify-center">
                  <div className="p-3 bg-white shadow border border-1 flex items-center">
                    <Image
                      src={image.url}
                      className=" rounded transition border-black w-[150px] h-auto cursor-pointer"
                      onClick={() => {
                        setSlide(index);
                        setOpenGallery(!openGallery);
                      }}
                      alt={'Galeri ' + index}
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
          <span className="font-bold">Fasilitas Popular</span>
          <div className="flex flex-wrap gap-3">
            <GetHotelFacilities data={hotel?.hotel_facilities} />
          </div>
          <span className="font-bold">Fasilitas Lainnya</span>
          <span className="text-sm">{hotel?.other_facilities}</span>
        </div>
      </div>
    </section>
  );
}
