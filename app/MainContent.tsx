"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HiChevronUpDown } from "react-icons/hi2";
import { IoMdCheckmark, IoIosSearch } from "react-icons/io";
import { IoLocation, IoTimeSharp } from "react-icons/io5";
import useSWR from "swr";
import { fetcher } from "@/lib/Fetcher";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  FaBed,
  FaHotel,
  FaPlaneDeparture,
  FaRegCalendarAlt,
  FaRegStar,
} from "react-icons/fa";
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const city = [
  {
    value: "semua kota",
    label: "Semua Kota",
  },
  {
    value: "jakarta",
    label: "Jakarta",
  },
  {
    value: "medan",
    label: "Medan",
  },
];

const keberangkatan = [
  {
    value: "semua waktu",
    label: "Semua Waktu",
  },
  {
    value: "mar-2004",
    label: "Mar-2004",
  },
  {
    value: "apr-2004",
    label: "Apr-2004",
  },
];

const biaya = [
  {
    value: "semua biaya",
    label: "Semua Biaya",
  },
  {
    value: "< 50jt",
    label: "< 50jt",
  },
  {
    value: "> 50jt",
    label: "> 50jt",
  },
];

export default function MainContent() {
  const [openLocation, setOpenLocation] = useState(false);
  const [locationValue, setLocationValue] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dateValue, setDateValue] = useState("");
  const [openPrice, setOpenPrice] = useState(false);
  const [priceValue, setPriceValue] = useState("");

  const formatDate = (date: any) => {
    const get_date = new Date(date).toDateString()
    const dateArray = get_date.split(" ");
    return dateArray[2] + " " + dateArray[1] + " " + dateArray[3];
  }

  const uniqueDeparting = (departing: any) => {
    const uniqueValue = new Set(departing)
    return uniqueValue
  }

  const { data: paket_umroh, mutate } = useSWR("http://localhost:4000/paket_umroh", fetcher);
  return (
    <section className="container mx-auto ">
      <Card className="p-3">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-3 cla">
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
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openLocation}
                    className="w-auto xl:w-[300px] justify-between"
                  >
                    {locationValue
                      ? city.find(
                          (city: any) => city.value === locationValue
                        )?.label
                      : "Lokasi Keberangkatan..."}
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
                              setLocationValue(
                                currentValue === locationValue
                                  ? ""
                                  : currentValue
                              );
                              setOpenLocation(false);
                            }}
                          >
                            {city.label}
                            {locationValue === city.value && (
                              <IoMdCheckmark />
                            )}
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
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openDate}
                    className="w-auto xl:w-[300px] justify-between"
                  >
                    {dateValue
                      ? keberangkatan.find(
                          (keberangkatan) => keberangkatan.value === dateValue
                        )?.label
                      : "Waktu Keberangkatan..."}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Waktu Keberangkatan..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {keberangkatan.map((keberangkatan) => (
                          <CommandItem
                            className="flex justify-between"
                            key={keberangkatan.value}
                            value={keberangkatan.value}
                            onSelect={(currentValue) => {
                              setDateValue(
                                currentValue === dateValue ? "" : currentValue
                              );
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
              <span>Biaya Umroh</span>
              <Popover open={openPrice} onOpenChange={setOpenPrice}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openPrice}
                    className="w-auto xl:w-[300px] justify-between"
                  >
                    {priceValue
                      ? biaya.find(
                          (biaya) => biaya.value === priceValue
                        )?.label
                      : "Biaya Umroh..."}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Biaya Umroh..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {biaya.map((biaya) => (
                          <CommandItem
                            className="flex justify-between"
                            key={biaya.value}
                            value={biaya.value}
                            onSelect={(currentValue) => {
                              setPriceValue(
                                currentValue === priceValue ? "" : currentValue
                              );
                              setOpenPrice(false);
                            }}
                          >
                            {biaya.label}
                            {priceValue === biaya.value && (
                              <IoMdCheckmark />
                            )}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button className="flex gap-3 bg-orange-500 hover:bg-orange-600">
            <IoIosSearch /> Cari Paket Umroh
          </Button>
        </div>
      </Card>
      <div className="grid sm:grid-cols-1 gap-3 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paket_umroh?.map((paket_umroh: any, index: number) => (
            <Card
              key={index}
              className="p-3 hover:cursor-pointer hover:outline hover:outline-1  shadow-md  hover:outline-blue-600"
            >
              <div className="flex justify-between gap-3 items-center">
                <Image
                  className="rounded object-cover w-[100px] h-[70px]"
                  src={
                    "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
                  }
                  alt="Pic 1"
                  height={100}
                  width={100}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {paket_umroh.title}
                  </span>
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
                <Progress className="" value={100 - paket_umroh.sisa_seat} />
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
          
        ))}

        {/* <Card className="p-3 hover:cursor-pointer hover:outline hover:outline-1 shadow-md">
          <div className="flex justify-between gap-3 items-center">
            <Image
              className="rounded object-cover w-[100px] h-[70px]"
              src={
                "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
              }
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsu...
              </span>
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
              src={
                "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
              }
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsu...
              </span>
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
            <Progress className="bg-green-600" value={33} />
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
              src={
                "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
              }
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsu...
              </span>
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
              src={
                "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
              }
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsu...
              </span>
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
              src={
                "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
              }
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsu...
              </span>
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
              src={
                "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
              }
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsu...
              </span>
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
              src={
                "https://cloud.umroh.com/images/upload/c_cover,f_auto,g_face,b_rgb:000000,dpr_2.0,h_146,w_298,q_80,fl_progressive/WhatsApp%20Image%202022-12-20%20at%2008.14.41.jpeg"
              }
              alt="Pic 1"
              height={100}
              width={100}
            />
            <div className="flex flex-col">
              <span className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsu...
              </span>
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
        </Card> */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 text-center">
          <Button className="bg-green-600 hover:bg-green-700">
            Lihat lebih banyak
          </Button>
        </div>
      </div>
    </section>
  );
}
