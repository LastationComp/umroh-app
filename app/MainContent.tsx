'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HiChevronUpDown } from 'react-icons/hi2';
import { IoMdCheckmark, IoIosSearch } from 'react-icons/io';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];
export default function MainContent() {
  const [openLocation, setOpenLocation] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [openPrice, setOpenPrice] = useState(false);
  const [priceValue, setPriceValue] = useState('');
  return (
    <section className="container mx-auto">
      <Card className="p-3">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-3">
          {/* <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant={'outline'}>Lokasi Berangkat</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Jakarta</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
          <div className="flex gap-3 max-lg:flex-col">
            <div className="flex flex-col">
              <span>Lokasi Keberangkatan</span>
              <Popover open={openLocation} onOpenChange={setOpenLocation}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={openLocation} className="w-auto xl:w-[300px] justify-between">
                    {locationValue ? frameworks.find((framework) => framework.value === locationValue)?.label : 'Lokasi Keberangkatan...'}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Lokasi Keberangkatan..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            className="flex justify-between"
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setLocationValue(currentValue === locationValue ? '' : currentValue);
                              setOpenLocation(false);
                            }}
                          >
                            {framework.label}
                            {locationValue === framework.value && <IoMdCheckmark />}
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
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={openDate} className="w-auto xl:w-[300px] justify-between">
                    {dateValue ? frameworks.find((framework) => framework.value === dateValue)?.label : 'Waktu Keberangkatan...'}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Waktu Keberangkatan..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            className="flex justify-between"
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setDateValue(currentValue === dateValue ? '' : currentValue);
                              setOpenDate(false);
                            }}
                          >
                            {framework.label}
                            {dateValue === framework.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col">
              <span>Biaya Umroh</span>
              <Popover open={openPrice} onOpenChange={setOpenPrice}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={openPrice} className="w-auto xl:w-[300px] justify-between">
                    {priceValue ? frameworks.find((framework) => framework.value === priceValue)?.label : 'Biaya Umroh...'}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Biaya Umroh..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            className="flex justify-between"
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setPriceValue(currentValue === priceValue ? '' : currentValue);
                              setOpenPrice(false);
                            }}
                          >
                            {framework.label}
                            {priceValue === framework.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button className="flex gap-3">
            <IoIosSearch /> Cari Paket Umroh
          </Button>
        </div>
      </Card>
      <div className="grid sm:grid-cols-1 gap-3 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress className="" value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg'}
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">Lorem ipsum dolor sit amet consectetur. Lorem ipsu...</span>
              <div className="flex justify-between">
                <span className="text-sm text-black font-bold">Rp. 59jt</span>
                <span className="text-sm text-black/60">Quad</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between">
              <span className="text-sm">Sisa Seat</span>
              <span className="text-sm font-bold">33 Seat</span>
            </div>
            <Progress value={33} />
          </div>
          <Separator />
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaRegCalendarAlt />
              10 Apr 2024
            </span>
            <span className="text-sm flex gap-2 items-center">
              4 <FaRegStar /> <FaHotel />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <FaPlaneDeparture /> Garuda
            </span>
            <span className="text-sm flex gap-2 items-center">
              17 Hari <IoTimeSharp />
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="text-sm flex gap-2 items-center">
              <IoLocation /> Jakarta
            </span>
            <span className="text-sm flex gap-2 items-center">
              Sekamar Ber-4 <FaBed />
            </span>
          </div>
        </Card>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 text-center">
          <Button>Lihat lebih banyak</Button>
        </div>
      </div>
    </section>
  );
}
