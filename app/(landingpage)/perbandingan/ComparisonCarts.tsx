'use client';
import { Card } from '@/components/ui/card';
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import { formatDate } from '@/lib/Parser/DateFormat';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import { type CarouselApi } from '@/components/ui/carousel';
import { useDotButton } from '@/components/images/useDotButtons';

export default function ComparisonCarts({ paket_umroh }: { paket_umroh: any }) {
  const [compare, setCompare]: any = useState([]);
  const [dots, setDots]: any = useState([]);
  const [api, setApi] = React.useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
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

  React.useEffect(() => {
    if (!api) {
      return;
    }
    const data = api.slidesInView();
    api.scrollTo(7);
    setDots(data);
    console.log(api.slidesInView());
  }, [api]);

  return (
    <section>
      {paket.length === 0 && <div className="text-center">Tidak ada Paket yang ingin dibandingkan.</div>}
      <Carousel opts={{ loop: false }} className="w-full" setApi={setApi}>
        <CarouselContent className="p-1 py-5">
          {paket &&
            paket.map((paket_umroh: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 flex justify-center">
                <Card
                  className={'p-3 hover:outline hover:outline-1 shadow-md hover:outline-blue-400 relative'}
                  //   onClick={() => setComparison(paket_umroh)}
                >
                  <div className="absolute -left-1 top-3">
                    {isCheaporExpen(paket_umroh.price) === 'cheap' && <Badge className="bg-green-400">Paling Murah</Badge>}
                    {isCheaporExpen(paket_umroh.price) === 'expen' && <Badge variant={'destructive'}>Paling Mahal</Badge>}
                  </div>

                  <div className="flex justify-between gap-3 items-center">
                    <Image className="rounded object-cover w-[100px] h-[70px]" loading={'lazy'} src={paket_umroh?.img} alt="Pic 1" height={100} width={100} />
                    <div className="flex flex-col">
                      <Link href={`/paket/${String(paket_umroh.title).replaceAll(' ', '-')}`} key={index}>
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
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button onClick={() => setComparison(paket_umroh)}>
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
                  <div className="relative w-full my-3">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Fasilitas</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-sm">
                    <li>Lorem ipsum dolor sit amet.</li>
                    {index > 3 && <li>Lorem ipsum dolor sit amet.</li>}
                  </ul>
                  <div className="relative w-full my-3">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Hotel</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-sm">
                    <li>Le Meridien Towers Makkah</li>
                    <li>Dar Al Eiman Al Andalus Hotel</li>
                  </ul>
                  <div className="relative w-full my-3">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Penerbangan</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-sm">
                    <li>Garuda Indonesia</li>
                  </ul>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        {paket.length !== 0 && (
          <>
            <CarouselPrevious variant={'default'} className="bg-green-400/70 hover:bg-green-500" />
            <CarouselNext variant={'default'} className="bg-green-400/70 hover:bg-green-500" />
          </>
        )}
      </Carousel>
      <div className="flex items-center gap-3 justify-center">
        {scrollSnaps.map((_, index: number) => (
          <span key={index} className={'bg-transparent outline outline-2 p-1 rounded-full cursor-pointer ' + (index === selectedIndex ? 'outline-blue-dark' : 'outline-black/60')} onClick={() => onDotButtonClick(index)}></span>
        ))}
      </div>
    </section>
  );
}
