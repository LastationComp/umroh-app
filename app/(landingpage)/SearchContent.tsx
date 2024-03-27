'use client';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HiChevronUpDown } from 'react-icons/hi2';
import { IoMdCheckmark, IoIosSearch } from 'react-icons/io';
import { IoLocation, IoPricetagOutline, IoTimeSharp } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import useSWR from 'swr';
import { fetcher } from '@/lib/Fetcher';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import Link from 'next/link';
import { MdDateRange, MdOutlineShare } from 'react-icons/md';
import { formatDate } from '@/lib/Parser/DateFormat';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Favorites from '@/components/order/Favorites';
import { Skeleton } from '@/components/ui/skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import nProgress from 'nprogress';
import { useRouter } from 'next/navigation';
import OrderButton from '@/components/order/OrderButton';
import ShareButton from '@/components/packet/ShareButton';
import CompareButton from '@/components/packet/CompareButton';
import PacketCard from '@/components/packet/PacketCard';

const city = [
  {
    value: 'semua kota',
    label: 'Semua Kota',
  },
  {
    value: 'jakarta',
    label: 'Jakarta',
  },
  {
    value: 'medan',
    label: 'Medan',
  },
];

const keberangkatan = [
  {
    value: 'semua waktu',
    label: 'Semua Waktu',
  },
  {
    value: 'mar-2004',
    label: 'Mar-2004',
  },
  {
    value: 'apr-2004',
    label: 'Apr-2004',
  },
];

const biaya = [
  {
    value: 'semua',
    label: 'Semua',
  },
  {
    value: '<30',
    label: '< 30jt',
  },
  {
    value: '30-40',
    label: '30jt - 40jt',
  },
  {
    value: '>40jt',
    label: '> 40jt',
  },
];

const loadingPage = [1, 2, 3, 4, 5, 6, 7, 8];

export default function SearchContent({ data }: { data: any[] }) {
  const [openLocation, setOpenLocation] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [openPrice, setOpenPrice] = useState(false);
  const [priceValue, setPriceValue] = useState('');
  const paket_umroh = data;
  const router = useRouter();
  const handleUrlImage = (url: string) => {
    nProgress.start();
    router.push('/paket/' + url);
  };
  return (
    <section className="md:container md:mx-auto mx-3">
      <Card className="p-3">
        <div className="flex items-center max-md:flex-col gap-3 cla">
          <div className="flex gap-3 max-lg:flex-col max-md:w-full">
            <div className="flex flex-col">
              <span>Lokasi Keberangkatan</span>
              <Popover open={openLocation} onOpenChange={setOpenLocation}>
                <PopoverTrigger asChild className="outline outline-1 outline-slate-400">
                  <Button variant="outline" role="combobox" aria-expanded={openLocation} className="w-auto xl:w-[300px] justify-between">
                    <div className="flex gap-3 items-center">
                      <CiLocationOn className="text-lg" />
                      {locationValue ? city.find((city: any) => city.value === locationValue)?.label : 'Lokasi Keberangkatan...'}
                    </div>

                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Lokasi Keberangkatan..." />
                    <CommandList>
                      <CommandEmpty>No Location Found.</CommandEmpty>
                      <CommandGroup>
                        {city?.map((city: any) => (
                          <CommandItem
                            className="flex justify-between"
                            key={city.value}
                            value={city.value}
                            onSelect={(currentValue) => {
                              setLocationValue(currentValue === locationValue ? '' : currentValue);
                              setOpenLocation(false);
                            }}
                          >
                            {city.label}
                            {locationValue === city.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col">
              <span>Waktu Keberangkatan</span>
              <Popover open={openDate} onOpenChange={setOpenDate}>
                <PopoverTrigger asChild className="outline outline-1 outline-slate-400">
                  <Button variant="outline" role="combobox" aria-expanded={openDate} className="w-auto xl:w-[300px] justify-between">
                    <div className="flex gap-3 items-center">
                      <MdDateRange className="text-lg" />
                      {dateValue ? keberangkatan.find((keberangkatan) => keberangkatan.value === dateValue)?.label : 'Waktu Keberangkatan...'}
                    </div>
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Waktu Keberangkatan..." />
                    <CommandList>
                      <CommandEmpty>Tidak ada data.</CommandEmpty>
                      <CommandGroup>
                        {keberangkatan.map((keberangkatan) => (
                          <CommandItem
                            className="flex justify-between"
                            key={keberangkatan.value}
                            value={keberangkatan.value}
                            onSelect={(currentValue) => {
                              setDateValue(currentValue === dateValue ? '' : currentValue);
                              setOpenDate(false);
                            }}
                          >
                            {keberangkatan.label}
                            {dateValue === keberangkatan.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col">
              <span>Biaya Umroh/Haji</span>
              <Popover open={openPrice} onOpenChange={setOpenPrice}>
                <PopoverTrigger asChild className="outline outline-1 outline-slate-400">
                  <Button variant="outline" role="combobox" aria-expanded={openPrice} className="w-auto xl:w-[300px] justify-between">
                    <div className="flex gap-3 items-center">
                      <IoPricetagOutline className="text-lg" />
                      {priceValue ? biaya.find((biaya) => biaya.value === priceValue)?.label : 'Biaya Umroh/Haji...'}
                    </div>
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Biaya Umroh/Haji..." />
                    <CommandList>
                      <CommandEmpty>Tidak ada data.</CommandEmpty>
                      <CommandGroup value={priceValue}>
                        {biaya.map((biaya, index) => (
                          <CommandItem
                            className="flex justify-between max-lg:aria-selected:bg-white"
                            key={index}
                            value={biaya.value}
                            onSelect={(currentValue) => {
                              setPriceValue(currentValue === priceValue ? '' : currentValue);
                              setOpenPrice(false);
                            }}
                            aria-selected={priceValue === biaya.value}
                          >
                            {biaya.label}
                            {priceValue === biaya.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button className="flex gap-3 bg-orange-500 hover:bg-orange-600 mt-auto">
            <IoIosSearch /> Cari Paket
          </Button>
        </div>
      </Card>
      <div className="grid sm:grid-cols-1 gap-3 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!paket_umroh && loadingPage?.map((paket_umroh: any, index: number) => <Skeleton key={index} className="p-3 hover:outline hover:outline-1 w-full h-[300px] shadow-md  hover:outline-blue-600" />)}
        {paket_umroh?.map((paket_umroh: any, index: number) => (
          <PacketCard data={paket_umroh} index={index} />
        ))}

        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 text-center">
          <Button className="bg-green-600 hover:bg-green-700">Tampilkan lainnya</Button>
        </div>
      </div>
    </section>
  );
}
