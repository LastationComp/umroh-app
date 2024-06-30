'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaHotel, FaWifi } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { GiBus } from 'react-icons/gi';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { MdFamilyRestroom, MdFoodBank, MdOutlineRoomService } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';
import PopupSliders from '@/components/images/PopupSliders';
import GetHotelFacilities from '@/components/facilities/GetHotelFacilities';
import HotelCard from './HotelCard';

const images = [
  {
    url: 'https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_95,w_109,q_80,fl_progressive/hotel/178773758.jpg',
  },
  {
    url: 'https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_95,w_109,q_80,fl_progressive/hotel/178773758.jpg',
  },
  {
    url: 'https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_95,w_109,q_80,fl_progressive/hotel/178773744.jpg',
  },
];
export default function Hotels({ data }: { data: any }) {
  return (
    <Card className="my-3">
      <CardHeader>
        <span className="font-bold flex gap-3 items-center">
          <FaHotel />
          Hotel
        </span>
      </CardHeader>
      <CardContent>
        {data.map((hotel: any, index: number) => (
          <section key={index}>
            <HotelCard hotel={hotel} />
          </section>
        ))}
      </CardContent>
    </Card>
  );
}
