import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card } from '@/components/ui/card';

export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center">
          <h1 className="text-[24px] font-bold">Galeri Jamaah</h1>
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
            align: 'start',
          }}
          className="w-full -ml-5"
        >
          <CarouselContent className="">
            {images.map((image) => (
              <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/4 pl-5 flex justify-center">
                <div className="pt-1 pb-10 px-1 bg-white shadow border border-1">
                  <Image src={`https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/${image}.jpg`} className="w-[250px] h-[150px] shadow-lg rounded transition border-black" alt="Galeri " width={300} height={300} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
}
