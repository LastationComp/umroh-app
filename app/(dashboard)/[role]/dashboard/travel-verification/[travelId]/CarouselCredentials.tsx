'use client';

import PopupSliders from '@/components/images/PopupSliders';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React, { useState } from 'react';
import { GoDownload } from 'react-icons/go';
import { downloadCredentialTravel } from './action';
import { getImageClient } from '@/lib/Parser/ImageClient';

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

  const downloadImage = async (url: string, title: string) => {
    const result = await downloadCredentialTravel(url, title);

    if (!result) return;

    const aElement = document.createElement('a');
    aElement.href = result;
    aElement.download = title;
    aElement.click();
  };
  return (
    <section>
      <Carousel className="w-full ">
        <CarouselContent>
          {data.map((travel_legality: any, index: number) => (
            <CarouselItem key={index}>
              <div className="p-1 relative trigger-tooltip-image">
                <Image alt={travel_legality.name} width={500} className="w-full max-h-[300px] object-cover cursor-pointer" height={1000} quality={50} src={travel_legality.credentials} onClick={() => openImage(index)} />
                <Button onClick={() => downloadImage(travel_legality.credentials, travel_legality.name)} className="absolute tooltip-image top-5 right-5 bg-blue-600 hover:bg-blue-400">
                  <GoDownload />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <PopupSliders data={imagesData} open={open} onOpenChange={setOpen} currentSlide={slide} />
    </section>
  );
}
