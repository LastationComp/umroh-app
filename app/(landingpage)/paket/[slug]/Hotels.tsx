'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { useState } from 'react';
import { FaHotel, FaWifi } from 'react-icons/fa';
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
