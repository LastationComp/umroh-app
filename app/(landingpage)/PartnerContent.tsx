'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';

export default function PartnerContent({ data }: { data: any[] }) {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col text-center">
            <span className="text-[24px]">Rekan Biro Travel Umroh Kami</span>
            <span className="text-black/60">Lebih Dari 100 Biro Travel Umroh telah Menjadi Rekan Kami</span>
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
            align: 'start',
          }}
          className="w-full -ml-5"
        >
          <CarouselContent className="">
            {data?.map((patner: any, index: number) => (
              <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3 lg:basis-1/6 pl-5 flex justify-center">
                <div className="p-5 bg-white shadow border border-1 flex items-center">
                  <Link href={'http://localhost:3000/travel/name-travel'} target="_blank">
                    <Image src={patner.img_url} className=" rounded transition border-black w-[150px] h-auto" alt="Galeri " width={1000} height={1000} />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </section>
      <section className="flex justify-center my-3">
        <Button variant={'ghost'} className="hover:bg-tacao">
          <span className="text-green-600 hover:text-green-700 font-semibold">Lihat Lebih Banyak {'>'}</span>
        </Button>
      </section>
    </>
  );
}
