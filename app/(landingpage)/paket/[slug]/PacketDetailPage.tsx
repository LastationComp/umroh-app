'use client';
import Favorites from '@/components/order/Favorites';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Carousel as ShadCarousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { formatRupiah } from '@/lib/String/RupiahFormat';
import { faArrowsLeftRight, faLeftRight, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { url } from 'inspector';
import Image from 'next/image';
import React, { Suspense, useRef, useState } from 'react';
import { FaClock, FaHotel, FaLocationArrow, FaPlaneDeparture, FaPlus, FaRegBookmark, FaRegCalendarAlt, FaRegHeart, FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

const pricelist = [
  {
    name: 'Double',
    price: 38900000,
  },

  {
    name: 'Triple',
    price: 48000000,
  },
  {
    name: 'Quad',
    price: 59000000,
  },
];

let allPrice: any[] = [];
pricelist.map((price) => {
  allPrice.push(price.price);
});

const responsive = {
  mobile: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slideToSlide: 1,
  },
};

const images = [
  {
    url: 'https://cloud.umroh.com/images/upload/c_contain,f_auto,g_face,b_rgb:000000,dpr_2.0,h_391,w_627,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg',
  },
  {
    url: 'https://cloud.umroh.com/images/upload/c_contain,f_auto,g_face,b_rgb:000000,dpr_2.0,h_391,w_627,q_80,fl_progressive/Flyer%20Katalog%20Umrah%20Ramadhan%20Maret%202024_03012024_MITRA_page-0005.jpg',
  },
];

export default function PacketDetailPage({ slug }: { slug: string }) {
  const [list, setList] = useState('');
  const [qty, setQty] = useState(1);
  const [openImage, setOpenImage] = useState(false);
  const [slide, setSlide] = useState(0);

  const orderSlideSelecter = (data: any, index: number) => {
    return index === slide;
  };
  const orderNotSlide = (data: any, index: number) => {
    return index !== slide;
  };
  return (
    <Card className="p-5 gap-5">
      <Dialog open={openImage} onOpenChange={setOpenImage}>
        <DialogContent className="max-xl:max-w-xl xl:max-w-2xl">
          <DialogClose className="fixed top-8 right-8 z-30">
            <Button className="rounded-full uppercase opacity-50">x</Button>
          </DialogClose>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots max-xl:max-w-xl xl:max-w-2xl -z-1"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 100,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            deviceType={'desktop'}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <Suspense fallback={<div>Loading...</div>}>
              {images.filter(orderSlideSelecter).map((image: any, index: number) => (
                <Image src={image.url} key={index} alt="Image Promo" className=" object-cover xl:max-w-2xl" loading={'lazy'} width={2000} height={1000} quality={100} />
              ))}
            </Suspense>
            {images.filter(orderNotSlide).map((image: any, index: number) => (
              <Image src={image.url} key={index} alt="Image Promo" className=" object-cover xl:max-w-2xl" loading={'lazy'} width={2000} height={1000} quality={100} />
            ))}
          </Carousel>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ShadCarousel className="xl:w-[550px] full flex justify-center place-self-center">
          <CarouselPrevious />
          <CarouselContent
            className="cursor-pointer"
            onClick={() => {
              setOpenImage(!openImage);
            }}
          >
            {images.map((image: any, index: number) => (
              <CarouselItem
                key={index}
                onClick={() => {
                  setSlide(index);
                  setOpenImage(!openImage);
                }}
              >
                <Image src={image.url} alt="Image Promo" className="w-[600px] object-cover" loading={'lazy'} width={600} height={400} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </ShadCarousel>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">{slug}</span>
            <div className="mb-auto">
              <Favorites />
            </div>
          </div>
          {!list && (
            <span className="text-xl font-semibold flex items-center gap-3 font-bold">
              {formatRupiah(Math.min(...allPrice))} - {formatRupiah(Math.max(...allPrice))} <Separator orientation={'vertical'} />
              <Badge>Pembayaran Syariah</Badge>
            </span>
          )}
          {list &&
            pricelist
              .filter((price) => price.name.toLowerCase() === list.toLowerCase())
              .map((price, index) => (
                <span key={index} className="text-xl font-semibold flex items-center gap-3 font-bold fw-800">
                  {formatRupiah(price.price)} <Separator orientation={'vertical'} />
                  <Badge>Pembayaran Syariah</Badge>
                </span>
              ))}
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <span className="flex items-center gap-3">
              <FaRegCalendarAlt />
              <div className="flex flex-col ">
                <span className="font-semibold">Waktu Keberangkatan</span>
                <span className="text-sm ">27 Maret 2024</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaLocationArrow />
              <div className="flex flex-col ">
                <span className="font-semibold">Lokasi Keberangkatan</span>
                <span className="text-sm ">Jakarta</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaClock />
              <div className="flex flex-col ">
                <span className="font-semibold">Durasi Perjalanan</span>
                <span className="text-sm ">6 Hari</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaPlaneDeparture />
              <div className="flex flex-col ">
                <span className="font-semibold">Pesawat</span>
                <span className="text-sm ">Garuda Indonesia</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaHotel />
              <div className="flex flex-col ">
                <span className="font-semibold">Kelas Hotel</span>
                <span className="text-sm flex gap-1 items-center">
                  4 <FaStar className="text-yellow-600" />
                </span>
              </div>
            </span>
          </div>

          <Separator />
          <div className="flex items-center gap-5">
            <span>Pilih Paket</span>
            <Separator orientation="vertical" />
            <ToggleGroup type="single" variant={'outline'} value={list} onValueChange={(value) => setList(value)} className="flex justify-start ">
              {pricelist.map((price, index) => (
                <ToggleGroupItem key={index} value={price.name.toLowerCase()} className="data-[state=on]:outline data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
                  {price.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span>Sisa Seat</span>
              <span>33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm">Jumlah Paket</span>
            <Separator orientation="vertical" />
            <Button variant={'outline'} size={'sm'} onClick={() => setQty((qty) => qty - 1)} disabled={qty <= 1}>
              -
            </Button>
            <span className="text-sm">{qty}</span>
            <Button variant={'outline'} size={'sm'} onClick={() => setQty((qty) => qty + 1)}>
              +
            </Button>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <Button variant={'outline'} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faRightLeft} /> Bandingkan
            </Button>
            {/* <Button variant={'secondary'} className="flex items-center gap-3" disabled={!list}>
              <MdGroup /> Pesan Group
            </Button> */}
            <Button className="flex items-center gap-3" disabled={!list}>
              <FiShoppingCart /> Pesan Paket
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
