'use client';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { fetcher } from '@/lib/Fetcher';
import { formatDate } from '@/lib/Parser/DateFormat';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';
import useSWR from 'swr';

export default function UmrohPackage() {
  const { data: paket_umroh, mutate } = useSWR('https://umroh-ai-dummy-api-production.up.railway.app/paket_umroh', fetcher);

  return (
    <div className="grid sm:grid-cols-1 gap-3 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {paket_umroh?.map((paket_umroh: any, index: number) => (
        <Link href={`/${String(paket_umroh.title).replaceAll(' ', '-')}`} key={index}>
          <Card key={index} className="p-3 hover:cursor-pointer hover:outline hover:outline-1  shadow-md  hover:outline-blue-600">
            <div className="flex justify-between gap-3 items-center">
              <Image className="rounded object-cover w-[100px] h-[70px]" loading={'lazy'} src={paket_umroh?.img} alt="Pic 1" height={100} width={100} />
              <div className="flex flex-col">
                <span className="text-sm font-semibold line-clamp-2">{paket_umroh.title}</span>
                <div className="flex justify-between">
                  <span className="text-sm text-orange-400 font-bold">
                    Rp. {paket_umroh.price.toString().length >= 6 ? paket_umroh.price.toString().slice(0, 2) + ',' + paket_umroh.price.toString().charAt(2) + 'jt' : paket_umroh.price.toString().slice(0, 3) + 'rb'}
                  </span>
                  <span className="text-sm text-black/60">{paket_umroh.feature}</span>
                </div>
              </div>
            </div>
            <div className="my-2">
              <div className="flex justify-between">
                <span className="text-sm">Sisa Seat</span>
                <span className="text-sm font-bold">{paket_umroh.sisa_seat} Seat</span>
              </div>
              <Progress className="" value={paket_umroh.sisa_seat} />
            </div>
            <Separator />
            <div className="flex justify-between my-2">
              <span className="text-sm flex gap-2 items-center">
                <FaRegCalendarAlt />
                {formatDate(paket_umroh.date_going)}
              </span>
              <span className="text-sm flex gap-2 items-center">
                {paket_umroh.star_hotel} <FaRegStar className="text-yellow-500" /> <FaHotel />
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span className="text-sm flex gap-2 items-center">
                <FaPlaneDeparture /> {paket_umroh.plane}
              </span>
              <span className="text-sm flex gap-2 items-center">
                {paket_umroh.days} Hari <IoTimeSharp />
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span className="text-sm flex gap-2 items-center">
                <IoLocation /> {paket_umroh.departing_from}
              </span>
              <span className="text-sm flex gap-2 items-center">
                {paket_umroh.feature_detail} <FaBed />
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
