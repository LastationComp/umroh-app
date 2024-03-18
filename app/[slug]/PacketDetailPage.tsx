'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaClock, FaHotel, FaLocationArrow, FaPlaneDeparture, FaPlus, FaRegCalendarAlt, FaStar } from 'react-icons/fa';
import { MdGroup, MdPerson } from 'react-icons/md';

const pricelist = [
  {
    name: 'Quad',
    price: 59000000,
  },
  {
    name: 'Triple',
    price: 48000000,
  },
  {
    name: 'Double',
    price: 38900000,
  },
];

let allPrice: any[] = [];
pricelist.map((price) => {
  allPrice.push(price.price);
});
const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  compactDisplay: 'short',
  currencyDisplay: 'symbol',
});
export default function PacketDetailPage({ slug }: { slug: string }) {
  const [list, setList] = useState('');
  return (
    <Card className="p-5 gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Carousel className="xl:w-[550px] flex justify-center place-self-center">
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem>
              <Image
                src={'https://cloud.umroh.com/images/upload/c_contain,f_auto,g_face,b_rgb:000000,dpr_2.0,h_391,w_627,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
                alt="Image Promo"
                className="w-[600px] object-cover"
                width={2000}
                height={1000}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={'https://cloud.umroh.com/images/upload/c_contain,f_auto,g_face,b_rgb:000000,dpr_2.0,h_391,w_627,q_80,fl_progressive/Flyer%20Katalog%20Umrah%20Ramadhan%20Maret%202024_03012024_MITRA_page-0005.jpg'}
                alt="Image Promo"
                className="w-[600px] object-cover"
                width={2000}
                height={1000}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">{slug}</h1>
          {!list && (
            <span className="text-xl font-semibold flex items-center gap-3">
              {rupiah.format(Math.min(...allPrice))} - {rupiah.format(Math.max(...allPrice))} <Separator orientation={'vertical'} />
              <Badge>Pembayaran Syariah</Badge>
            </span>
          )}
          {list &&
            pricelist
              .filter((price) => price.name.toLowerCase() === list.toLowerCase())
              .map((price) => (
                <span className="text-xl font-semibold flex items-center gap-3">
                  {rupiah.format(price.price)} <Separator orientation={'vertical'} />
                  <Badge>Pembayaran Syariah</Badge>
                </span>
              ))}
          <Separator />
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
              <span className="font-semibold">Berangkat Dari</span>
              <span className="text-sm ">Jakarta</span>
            </div>
          </span>
          <span className="flex items-center gap-3">
            <FaClock />
            <div className="flex flex-col ">
              <span className="font-semibold">Durasi Perjalanan</span>
              <span className="text-sm ">27 Maret 2024</span>
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
          <Separator />
          <div className="flex items-center gap-5">
            <span>Pilih Paket</span>
            <Separator orientation="vertical" />
            <ToggleGroup type="single" variant={'outline'} value={list} onValueChange={(value) => setList(value)} className="flex justify-start">
              {pricelist.map((price) => (
                <ToggleGroupItem value={price.name.toLowerCase()}>{price.name}</ToggleGroupItem>
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
          <div className="flex gap-3 items-center flex-wrap">
            <Button variant={'outline'} className="flex items-center gap-3">
              <FaPlus /> Tambahkan ke Perbandingan
            </Button>
            <Button variant={'secondary'} className="flex items-center gap-3">
              <MdGroup /> Pesan Group
            </Button>
            <Button className="flex items-center gap-3">
              <MdPerson /> Pesan Paket
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
