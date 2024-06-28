'use client';
import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import nProgress from 'nprogress';
import { useRouter } from 'next/navigation';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import { formatDate } from '@/lib/Parser/DateFormat';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import CompareButton from './CompareButton';
import OrderButton from '../order/OrderButton';
import Favorites from '../order/Favorites';
import ShareButton from './ShareButton';

interface PacketProps {
  data: any;
  index?: number;
  props?: React.Attributes;
}

export default function PacketCard({ data, index, props }: PacketProps) {
  const router = useRouter();
  const handleUrlImage = (url: string) => {
    nProgress.start();
    router.push('/paket/' + url);
  };
  return (
    <Card {...props} key={index} className="p-3 hover:outline hover:outline-1  shadow-md  hover:outline-blue-600">
      <div className="flex justify-between gap-3 items-center">
        <Image
          className="rounded object-cover w-[100px] h-[70px] cursor-pointer"
          onClick={() => handleUrlImage(String(data.title).replaceAll(' ', '-'))}
          loading={'lazy'}
          src={data?.img}
          placeholder="blur"
          blurDataURL={'/api/image/blur?url=' + data?.img}
          alt="Pic 1"
          height={100}
          width={100}
        />

        <div className="flex flex-col">
          <Link href={`/paket/${String(data.title).replaceAll(' ', '-')}`} key={index}>
            <span className="text-sm font-semibold line-clamp-2 hover:text-blue-600">{data.title}</span>
          </Link>
          <div className="flex justify-between">
            <span className="text-sm text-orange-400 font-bold">Rp. {data.price.toString().length >= 6 ? data.price.toString().slice(0, 2) + ',' + data.price.toString().charAt(2) + 'jt' : data.price.toString().slice(0, 3) + 'rb'}</span>
            <span className="text-sm text-black/60">{data.feature}</span>
          </div>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-between">
          <span className="text-sm">Sisa Seat</span>
          <span className="text-sm font-bold">{data.sisa_seat} Seat</span>
        </div>
        <Progress className="" value={data.sisa_seat} />
      </div>
      <Separator />
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <FaRegCalendarAlt />
          {formatDate(data.date_going)}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {data.star_hotel} <FaRegStar className="text-yellow-500" /> <FaHotel />
        </span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <FaPlaneDeparture /> {data.plane}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {data.days} Hari <IoTimeSharp />
        </span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <IoLocation /> {data.departing_from}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {data.feature_detail} <FaBed />
        </span>
      </div>
      <div className="flex justify-between items-center my-3">
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={`/blog/pembayaran-syariah`} target="_blank">
                  <Image src={'https://assets.umroh.com/borobudur/img/amitra-syariah.1c01c48.svg'} className={index === 3 || index === 1 ? ' grayscale' : ''} alt="Is Syariah" width={60} height={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pembayaran Syariah</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-1">
          <OrderButton />
          <CompareButton />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Favorites data={data} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-blue-dark">
                <p>Tambahkan ke Favorit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ShareButton image_url={data.img} title={data.title} url={'http://localhost:3000/paket/' + String(data.title).replaceAll(' ', '-')} />
        </div>
      </div>
    </Card>
  );
}
