'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '@/lib/Fetcher';
import { FaBed, FaCheck, FaHotel, FaMinus, FaPlaneDeparture, FaPlus, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import { formatDate } from '@/lib/Parser/DateFormat';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MdOutlineShare } from 'react-icons/md';
import Favorites from '@/components/order/Favorites';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { CiSaveDown2 } from 'react-icons/ci';
export default function ComparisonCarts({ paket_umroh }: { paket_umroh: any }) {
  const [compare, setCompare]: any = useState([]);

  paket_umroh = paket_umroh.map((paket: any, index: number) => {
    let isSyariah = true;
    if (index === 3 || index === 1) isSyariah = false;
    return {
      ...paket,
      is_syariah: isSyariah,
    };
  });

  const [paket, setPaket] = useState(paket_umroh);
  const setComparison = (data: any) => {
    let comparison = [...compare];

    if (comparison.find((comp) => comp.id === data.id)) {
      comparison = comparison.filter((comp) => comp.id !== data.id);
    } else {
      if (comparison.length === 2) comparison.pop();
      comparison.push(data);
    }

    setCompare(comparison);
  };

  const deleteCompare = (id: string) => {
    let comparison = [...compare];

    comparison = comparison.filter((comp) => comp.id !== id);

    setCompare(comparison);
  };

  const deleteComparison = (id: string) => {
    let comparison = [...paket];
    if (compare.find((comp: any) => comp.id === id)) {
      deleteCompare(id);
    }
    comparison = comparison.filter((comp) => comp.id !== id);
    if (comparison.length === 0) comparison = [];
    setPaket(comparison);
  };

  const isCheaporExpen = (price: number) => {
    const isExpen = !paket.find((data: any) => price < data.price);
    const isCheap = !paket.find((data: any) => data.price < price);

    if (isCheap) return 'cheap';

    if (isExpen) return 'expen';

    return false;
  };

  const setReverse = () => {
    let comparison = [...compare];
    comparison = comparison.reverse();

    setCompare(comparison);
  };
  return (
    <section>
      {paket.length === 0 && <div className="text-center">Tidak ada Paket yang ingin dibandingkan.</div>}
      <Carousel opts={{ loop: false }} className="w-full">
        <CarouselContent className="p-1 py-5">
          {paket &&
            paket.map((paket_umroh: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 flex justify-center">
                <Card
                  className={'p-3 hover:outline hover:outline-1 shadow-md hover:outline-blue-400 relative ' + (compare.find((comp: any) => comp.id === paket_umroh.id) ? 'outline outline-1 outline-blue-400' : '')}
                  //   onClick={() => setComparison(paket_umroh)}
                >
                  {compare.find((comp: any) => comp.id === paket_umroh.id) && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-blue-400 rounded-full p-1 text-white">
                        <FaCheck />
                      </div>
                    </div>
                  )}

                  <div className="absolute -left-1 top-3">
                    {isCheaporExpen(paket_umroh.price) === 'cheap' && <Badge className="bg-green-400">Paling Murah</Badge>}
                    {isCheaporExpen(paket_umroh.price) === 'expen' && <Badge variant={'destructive'}>Paling Mahal</Badge>}
                  </div>

                  <div className="flex justify-between gap-3 items-center">
                    <Image className="rounded object-cover w-[100px] h-[70px]" loading={'lazy'} src={paket_umroh?.img} alt="Pic 1" height={100} width={100} />
                    <div className="flex flex-col">
                      <Link href={`/packets/${String(paket_umroh.title).replaceAll(' ', '-')}`} key={index}>
                        <span className="text-sm font-semibold line-clamp-2 hover:text-blue-600">{paket_umroh.title}</span>
                      </Link>
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
                  <div className="flex justify-between items-center my-3">
                    <div>
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
                    </div>
                    <div className="flex items-center gap-1 z-20">
                      {!compare.find((comp: any) => comp.id === paket_umroh.id) && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant={'outline'} className="hover:bg-green-400 text-white hover:text-white bg-green-600" onClick={() => setComparison(paket_umroh)}>
                                <FaPlus />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-green-400">
                              <p>Pilih</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant={'destructive'} onClick={() => deleteComparison(paket_umroh.id)}>
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
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        {paket.length !== 0 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      {paket.length !== 0 && (
        <>
          <Separator className="my-5" />
          <div className="flex justify-center">
            <span className="text-black/70 uppercase font-bold text-center mb-3 ">Silahkan pilih dua paket untuk membandingkan</span>
          </div>
        </>
      )}

      <div className="flex gap-5 max-md:gap-[3rem] w-full max-md:flex-col min-h-full relative" key={'compare-land'}>
        {compare.length !== 0 &&
          compare.map((paket_umroh: any, index: number) => {
            return (
              <>
                <Card key={index} className="p-3 hover:outline hover:outline-1 w-full shadow-md hover:outline-blue-600 cursor-pointer">
                  <div className="flex justify-between gap-3 items-center">
                    <Image className="rounded object-cover w-[100px] h-[70px]" loading={'lazy'} src={paket_umroh?.img} alt="Pic 1" height={100} width={100} />
                    <div className="flex flex-col w-full">
                      <Link href={`/packets/${String(paket_umroh.title).replaceAll(' ', '-')}`} key={index}>
                        <span className="text-sm font-semibold line-clamp-2 hover:text-blue-600">{paket_umroh.title}</span>
                      </Link>
                      <div className="flex justify-between max-lg:flex-col">
                        <span className="text-sm text-orange-400 font-bold flex items-center gap-3">
                          Rp. {paket_umroh.price.toString().length >= 6 ? paket_umroh.price.toString().slice(0, 2) + ',' + paket_umroh.price.toString().charAt(2) + 'jt' : paket_umroh.price.toString().slice(0, 3) + 'rb'}
                          {compare.length === 2 && (compare.find((comp: any) => paket_umroh.price < comp.price) ? <Badge className="bg-green-500">Lebih Murah</Badge> : <Badge variant={'destructive'}>Lebih Mahal</Badge>)}
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
                  <div className="flex justify-between items-center my-3">
                    <div>
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
                    </div>
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link href={`/${String(paket_umroh.title).replaceAll(' ', '-')}`}>
                              <Button>
                                <FiShoppingCart />
                              </Button>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Pesan</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Favorites />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-blue-dark">
                            <p>Tambahkan ke Favorit</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant={'ghost'}>
                              <MdOutlineShare className="text-lg" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="bg-blue-dark">
                            <p>Bagikan</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant={'destructive'} onClick={() => setComparison(paket_umroh)}>
                              <FaMinus />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="bg-red-400">
                            <p>Keluarkan</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </Card>
                {index === 0 && (
                  <div key={index + '-separator'} className="relative h-auto w-auto flex items-center mx-5">
                    <Separator className="max-md:hidden" orientation={'vertical'} />

                    <Separator className="md:hidden" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white px-3 py-2 rounded-full outline outline-1 cursor-pointer active:rotate-180 transition" onClick={setReverse}>
                        <FontAwesomeIcon icon={faRightLeft} />
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}

        {compare.length === 1 && (
          <div key={'hint-compare'} className="w-full flex items-center justify-center text-center">
            Silahkan pilih paket lagi untuk membandingkan
          </div>
        )}
      </div>
    </section>
  );
}
