'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { formatDate } from '@/lib/Parser/DateFormat';
import { formatRupiah } from '@/lib/String/RupiahFormat';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';

export default function FavoritLists({ data }: { data: any[] }) {
  const [favorit, setFavorit] = useState(data);
  const [qty, setQty] = useState(1);

  const setQtyPlus = (id: number) => {
    let fav = [...favorit];
    fav = fav.map((data) => {
      if (data.id === id)
        return {
          ...data,
          qty: (data.qty ?? 1) + 1,
        };

      return data;
    });
    setFavorit(fav);
  };

  const setQtyMinus = (id: number) => {
    const fav = favorit.map((data) => {
      if (data.id === id)
        return {
          ...data,
          qty: (data.qty ?? 1) - 1,
        };

      return data;
    });
    setFavorit(fav);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {favorit &&
        favorit.map((paket_umroh: any, index: number) => (
          <Card className={'p-3 hover:outline hover:outline-1 shadow-md hover:outline-blue-400 relative'} key={index}>
            <div className="flex gap-3 items-center">
              <Image className="rounded object-cover h-[100px] w-[150px] " loading={'lazy'} src={paket_umroh?.img} alt="Pic 1" height={200} width={200} />
              <div className="flex flex-col w-full gap-3">
                <Link href={`/paket/${String(paket_umroh.title).replaceAll(' ', '-')}`} key={index}>
                  <span className="text-sm font-semibold line-clamp-2 hover:text-blue-600">{paket_umroh.title}</span>
                </Link>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{formatRupiah(paket_umroh.price)}</span>
                  <Badge variant={'outline'} className="flex w-auto">
                    <span className="text-sm text-black/60">{paket_umroh.feature}</span>
                  </Badge>
                </div>
                <div className="flex">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Image src={'https://assets.umroh.com/borobudur/img/amitra-syariah.1c01c48.svg'} className={!paket_umroh.is_syariah ? ' grayscale' : ''} alt="Is Syariah" width={60} height={20} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Pembayaran Syariah</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div className="flex items-center ml-auto gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button>
                            <FiShoppingCart />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Pesan</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant={'destructive'}>
                            <FiTrash2 />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-red-400">
                          <p>Hapus</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
    </section>
  );
}
