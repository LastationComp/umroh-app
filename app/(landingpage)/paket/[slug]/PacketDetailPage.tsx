'use client';
import Favorites from '@/components/order/Favorites';
import { Button } from '@/components/ui/button';
import { Card, CardDescription } from '@/components/ui/card';
import 'react-multi-carousel/lib/styles.css';
import { Carousel as ShadCarousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { formatRupiah } from '@/lib/String/RupiahFormat';
import Image from 'next/image';
import React, { Suspense, useMemo, useRef, useState } from 'react';
import { FaClock, FaHotel, FaLocationArrow, FaPlaneDeparture, FaPlus, FaRegBookmark, FaRegCalendarAlt, FaRegHeart, FaStar } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import PopupSliders from '@/components/images/PopupSliders';
import { formatDate } from '@/lib/Parser/DateFormat';
import CompareButton from '@/components/packet/CompareButton';
export default function PacketDetailPage({ data, userRole = 'subscriber' }: { data: any; userRole?: string }) {
  const [list, setList] = useState('');
  const [qty, setQty] = useState(1);
  const [openImage, setOpenImage] = useState(false);
  const [slide, setSlide] = useState(0);

  const allPrice = useMemo(() => {
    return data?.variants[0].details.map((detail: any) => {
      return detail?.price;
    });
  }, []);

  const pricelist: any = useMemo(() => {
    return data.variants[0].details;
  }, []);

  const images = useMemo(() => {
    return data?.galleries;
  }, []);

  const imagesData = images.map((image: any) => {
    return {
      original: image.image_url,
      thumbnail: image.image_url,
    };
  });

  function isPrimary(data: any) {
    return Boolean(data.is_primary) === true;
  }

  function isAddons(data: any) {
    return Boolean(data.is_primary) === false;
  }
  return (
    <Card className="p-5 gap-5">
      <PopupSliders data={imagesData} currentSlide={slide} open={openImage} onOpenChange={setOpenImage} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ShadCarousel className="w-full flex justify-center items-center">
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
                className="my-auto"
              >
                <Image
                  src={image.image_url}
                  alt={image.title}
                  placeholder="blur"
                  style={{
                    maxHeight: '400px',
                  }}
                  blurDataURL={'/api/image/blur'}
                  title={data?.title}
                  className="w-[600px] object-cover"
                  loading={'lazy'}
                  width={600}
                  height={600}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </ShadCarousel>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">{data.title}</span>

            {userRole === 'subscriber' && (
              <div className="mb-auto">
                <Favorites />
              </div>
            )}
          </div>
          {!list && (
            <span className="text-xl font-semibold flex items-center gap-3 font-bold">
              {formatRupiah(Math.min(...allPrice))} - {formatRupiah(Math.max(...allPrice))}
              {/* {Boolean(data?.is_syariah) && <Badge>Pembayaran Syariah</Badge>} */}
            </span>
          )}
          {list &&
            pricelist
              .filter((price: any) => price.name.toLowerCase() === list.toLowerCase())
              .map((price: any, index: number) => (
                <span key={index} className="text-xl font-semibold flex items-center gap-3 font-bold fw-800">
                  {formatRupiah(price.price)}
                  {/* {Boolean(data?.is_syariah) && <Badge>Pembayaran Syariah</Badge>} */}
                </span>
              ))}
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <span className="flex items-center gap-3">
              <FaRegCalendarAlt />
              <div className="flex flex-col ">
                <span className="font-semibold">Waktu Keberangkatan</span>
                <span className="text-sm ">{formatDate(data.departure_time)}</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaLocationArrow />
              <div className="flex flex-col ">
                <span className="font-semibold">Lokasi Keberangkatan</span>
                <span className="text-sm ">{data?.departing_from}</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaClock />
              <div className="flex flex-col ">
                <span className="font-semibold">Durasi Perjalanan</span>
                <span className="text-sm ">{data?.travel_duration} Hari</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaPlaneDeparture />
              <div className="flex flex-col ">
                <span className="font-semibold">Pesawat</span>
                <span className="text-sm ">{data?.airline}</span>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <FaHotel />
              <div className="flex flex-col ">
                <span className="font-semibold">Kelas Hotel</span>
                <span className="text-sm flex gap-1 items-center">
                  {data?.hotel_class} <FaStar className="text-yellow-600" />
                </span>
              </div>
            </span>
          </div>

          <Separator />
          {!list && userRole === 'subscriber' && <span className="text-red-600 text-sm">Pilih paket utama untuk memesan</span>}
          {data?.variants.filter(isPrimary).map((variant: any, index: number) => (
            <div className="flex items-center gap-5" key={index}>
              <span>{variant.title}</span>
              <Separator orientation="vertical" />
              <ToggleGroup
                type={variant.type}
                variant={'outline'}
                onValueChange={(value: string) => {
                  if (index === 0) return setList(value);
                }}
                className="flex justify-start flex-wrap gap-2.5"
              >
                {variant.details.map((detail: any, index: number) => (
                  <ToggleGroupItem key={index} value={detail.name.toLowerCase()} className="data-[state=on]:outline data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
                    {detail.name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          ))}

          {data?.variants.filter(isAddons).length !== 0 && (
            <div className="flex flex-col gap-3">
              <div>
                <CardDescription>Add-ons</CardDescription>
                <Separator />
              </div>

              {data?.variants.filter(isAddons).map((variant: any, index: number) => (
                <div className="flex items-center gap-5" key={index}>
                  <span>{variant.title}</span>
                  <Separator orientation="vertical" />
                  <ToggleGroup type={variant.type} variant={'outline'} className="flex justify-start flex-wrap gap-2.5">
                    {variant.details.map((detail: any, index: number) => (
                      <ToggleGroupItem key={index} value={detail.name.toLowerCase()} className="data-[state=on]:outline data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
                        {detail.name}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
              ))}
            </div>
          )}
          {/* <div className="flex items-center gap-5">
            <span>Pilih Paket</span>
            <Separator orientation="vertical" />
            <ToggleGroup type="single" variant={'outline'} value={list} onValueChange={(value) => setList(value)} className="flex justify-start ">
              {pricelist.map((price, index) => (
                <ToggleGroupItem key={index} value={price.name.toLowerCase()} className="data-[state=on]:outline data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
                  {price.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div> */}

          <div className="flex flex-col">
            <div className="flex justify-between">
              <span>Sisa Seat</span>
              <span>{data?.quota} Seat</span>
            </div>
            <Progress value={Math.floor(data?.quota / 2)} max={data?.quota} />
          </div>
          {userRole === 'subscriber' && (
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
          )}
          {userRole === 'subscriber' && (
            <div className="flex gap-3 items-center flex-wrap">
              <CompareButton compared={data?.is_compared} id={data?.id} slug={data?.slug} title={data?.title}>
                Bandingkan
              </CompareButton>
              {/* <Button variant={'secondary'} className="flex items-center gap-3" disabled={!list}>
              <MdGroup /> Pesan Group
            </Button> */}
              <Button className="flex items-center gap-3" disabled={!list}>
                <FiShoppingCart /> Pesan Paket
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
