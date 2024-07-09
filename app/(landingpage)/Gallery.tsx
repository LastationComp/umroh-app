"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import PopupSliders from "@/components/images/PopupSliders";
import LazyImage from "@/components/images/LazyImage";
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
    <section className="max-md:container-md md:container text-sm md:text-md lg:text-lg">

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
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem
              key={i}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6 flex justify-center"
            >
              <div className="pt-1 pb-5 px-1 bg-white shadow border border-1 flex flex-col">
                {/* <LazyLoadedContent> */}
                <LazyImage
                  onClick={() => {
                    setOpenPopup(!openPopup);
                    setSlide(i);
                  }}
                  className="w-[250px] h-[75px] md:h-[150px] object-cover shadow-lg rounded transition border-black cursor-pointer"
                  alt="Galeri "
                  src={`${image}`}
                  width={300}
                  height={300}
                />
                {/* </LazyLoadedContent> */}
                <span
                  className="line-clamp-1 max-w-[250px] text-center"
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
  );
}
