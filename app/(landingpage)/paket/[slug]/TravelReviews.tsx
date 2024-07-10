'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewsPagination from './ReviewsPagination';

export default function TravelReviews() {
  return (
    <Card className="relative">
      <div className="bg-black/40 absolute top-0 left-0 w-full h-full rounded-md">
        <div className="flex justify-center items-center w-full h-full text-white">
          <span className='font-semibold'>Masih dalam pengembangan...</span>
        </div>
      </div>
      <CardHeader>
        <div className="flex gap-3 font-bold">Penilaian Travel</div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              Tony Stark <Separator orientation={'vertical'} /> <span className="text-sm text-black/70">Bekasi</span>
            </span>
            <span className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </span>
            <p className="text-sm text-black/70">Buat yang punya niat untuk naik haji, umroh dan travelling jejak imani sangat di rekomendasikan karena pelayanan yang memuaskan yang didukung oleh technology tinggi.</p>
            <Separator />
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              Eko <Separator orientation={'vertical'} /> <span className="text-sm text-black/70">Jakarta</span>
            </span>
            <span className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </span>
            <p className="text-sm text-black/70">Pelayanan terbaik. Hotelnya dekat. Pembimbingnya berilmu banget.</p>
            <Separator />
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              Robby Dermawan <Separator orientation={'vertical'} /> <span className="text-sm text-black/70">Tangerang Selatan</span>
            </span>
            <span className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </span>
            <p className="text-sm text-black/70">Insyaa Allah salah satu travel haji dan haji terbaik untuk warga tangsel dan sekitarnya.</p>
            <Separator />
          </div>
          <div className="">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="">1</PaginationLink>
                </PaginationItem>
                {/* <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem> */}
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
