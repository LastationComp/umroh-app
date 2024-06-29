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
import LazyLoadedContent from "@/components/images/LazyLoadedContent";
export default function Gallery() {
  const images = [
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/1.jpg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/2.jpg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/3.jpeg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/4.jpg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/5.jpeg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/1.jpg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/2.jpg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/3.jpeg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/4.jpg",
    process.env.NEXT_PUBLIC_URL_API + "/storage/galleries/5.jpeg",
  ];
  const title = [
    "Pengalaman Tak Terlupakan: Testimoni Jamaah Umroh",
    "Kebahagiaan Jamaah Setelah Menjalani Umroh",
    "Cerita Sukses Umroh: Kesaksian dari Para Jamaah",
    "Momen Mengharukan di Tanah Suci: Testimoni Jamaah Umroh",
    "Rasa Syukur Jamaah Setelah Menunaikan Umroh",
    "Kenangan Indah Bersama Jamaah Umroh Kami",
    "Perjalanan Spiritual Jamaah Umroh: Kisah dan Testimoni",
    "Menggapai Mimpi Umroh: Pengalaman Jamaah Kami",
    "Kepuasan Jamaah Setelah Menunaikan Ibadah Umroh",
    "Cerita Jamaah Umroh: Dari Hati yang Tulus",
  ];
  const [openPopup, setOpenPopup] = useState(false);
  const [slide, setSlide] = useState(0);
  const imagesData = images.map((image) => {
    return {
      original: image,
      thumbnail: image,
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
                  <LazyLoadedContent>
                    <Image
                      src={`${image}`}
                      onClick={() => {
                        setOpenPopup(!openPopup);
                        setSlide(i);
                      }}
                      className="w-[250px] h-[150px] object-cover shadow-lg rounded transition border-black cursor-pointer"
                      alt="Galeri "
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={"/api/image/blur?url=" + image}
                      width={300}
                      height={300}
                    />
                  </LazyLoadedContent>
                  <span
                    className="line-clamp-1 max-w-[250px] text-center "
                    title={title[i]}
                  >
                    {title[i]}
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
