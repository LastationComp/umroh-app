"use client";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaHotel,
  FaPlaneDeparture,
  FaRegCalendarAlt,
  FaRegStar,
} from "react-icons/fa";
import { formatDate } from "@/lib/Parser/DateFormat";
import { IoExtensionPuzzle, IoLocation, IoTimeSharp } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useDotButton } from "@/components/images/useDotButtons";
import OrderButton from "@/components/order/OrderButton";
import { useComparison } from "@/lib/Zustands/User/Comparison";
import { FiTrash2 } from "react-icons/fi";
import { formatRupiah } from "@/lib/String/RupiahFormat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Compare } from "@/components/packet/action";

export default function ComparisonCarts({ paket_umroh }: { paket_umroh: any }) {
  const [dots, setDots]: any = useState([]);
  const decCount = useComparison((state) => state.decCount);
  const [api, setApi] = React.useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
  const [collapseId, setCollapseId] = useState("facility");
  const [paket, setPaket] = useState(paket_umroh);

  const deleteCompare = (id: string) => {
    Compare("/", id, "detachment");
    decCount();
  };

  const deleteComparison = (id: string) => {
    deleteCompare(id);
    let comparison = [...paket];
    comparison = comparison.filter((comp) => comp.id !== id);
    if (comparison.length === 0) comparison = [];
    setPaket(comparison);
  };

  const isCheaporExpen = (price: number) => {
    const isExpen = !paket.find((data: any) => price < data.price);
    const isCheap = !paket.find((data: any) => data.price < price);

    if (isCheap) return "cheap";

    if (isExpen) return "expen";

    return false;
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }
    const data = api.slidesInView();
    setDots(data);
    // setCount(0);
  }, [api]);

  return (
    <section>
      {paket.length === 0 && (
        <div className="text-center">
          Tidak ada Paket yang ingin dibandingkan.
        </div>
      )}
      <Carousel opts={{ loop: false }} className="w-full" setApi={setApi}>
        <CarouselContent className="p-1 py-5 ">
          {paket &&
            paket.map((paket_umroh: any, index: number) => (
              <CarouselItem
                key={index}
                className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center w-full"
              >
                <Card
                  className={
                    "p-3 hover:outline hover:outline-1 shadow-md hover:outline-blue-400 relative w-full"
                  }
                  //   onClick={() => setComparison(paket_umroh)}
                >
                  <div className="absolute -left-1 top-3">
                    {isCheaporExpen(paket_umroh.price) === "cheap" && (
                      <Badge className="bg-green-400">Paling Murah</Badge>
                    )}
                    {isCheaporExpen(paket_umroh.price) === "expen" && (
                      <Badge variant={"destructive"}>Paling Mahal</Badge>
                    )}
                  </div>

                  <div className="flex gap-3 items-start">
                    <Image
                      className="rounded object-cover max-w-[100px] max-h-[70px]"
                      loading={"lazy"}
                      placeholder="blur"
                      blurDataURL={
                        "/api/image/blur?url=" + paket_umroh?.gallery?.image_url
                      }
                      src={paket_umroh?.gallery?.image_url}
                      alt={paket_umroh?.gallery?.title}
                      style={{
                        width: "100px",
                        height: "70px",
                      }}
                      height={100}
                      width={100}
                    />
                    <div className="flex flex-col">
                      <Link
                        href={`/paket/${paket_umroh?.slug}`}
                        key={index}
                        title={paket_umroh.title}
                      >
                        <span className="text-sm font-semibold line-clamp-1 hover:text-blue-600">
                          {paket_umroh.title}
                        </span>
                      </Link>
                      <div className="flex justify-between">
                        <span className="text-sm text-orange-400 font-bold">
                          {formatRupiah(paket_umroh?.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Sisa Seat</span>
                      <span className="text-sm font-bold">
                        {paket_umroh?.quota} Seat
                      </span>
                    </div>
                    <Progress
                      className=""
                      value={paket_umroh.quota}
                      max={paket_umroh.quota}
                    />
                  </div>
                  <Separator />
                  <div className="flex justify-between my-2">
                    <span className="text-sm flex gap-2 items-center">
                      <FaRegCalendarAlt />
                      {formatDate(paket_umroh.departure_time)}
                    </span>
                    <span className="text-sm flex gap-2 items-center">
                      {paket_umroh.hotel_class}{" "}
                      <FaRegStar className="text-yellow-500" /> <FaHotel />
                    </span>
                  </div>
                  <div className="flex justify-between my-2">
                    <span className="text-sm flex gap-2 items-center">
                      <FaPlaneDeparture /> {paket_umroh.airline}
                    </span>
                    <span className="text-sm flex gap-2 items-center">
                      {paket_umroh.travel_duration} Hari <IoTimeSharp />
                    </span>
                  </div>
                  <div className="flex justify-between my-2">
                    <span className="text-sm flex gap-2 items-center">
                      <IoLocation /> {paket_umroh.departing_from}
                    </span>
                    <span className="text-sm flex gap-2 items-center">
                      {paket_umroh.variant_counts === 0
                        ? ""
                        : paket_umroh.variant_counts + " Add-ons"}
                      {paket_umroh.variant_counts !== 0 && (
                        <IoExtensionPuzzle />
                      )}
                    </span>
                  </div>
                  <div className="flex justify-end items-center my-3">
                    <div className="flex items-center gap-1 z-20">
                      <OrderButton />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant={"destructive"}
                              onClick={() => deleteComparison(paket_umroh.id)}
                            >
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
                  <Accordion
                    type="single"
                    value={collapseId}
                    collapsible
                    onValueChange={(val) => setCollapseId(val)}
                  >
                    <AccordionItem value="facility">
                      <AccordionTrigger className="uppercase text-black/70">
                        Fasilitas
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-sm">
                          {paket_umroh?.facilities.map((facility: any) => (
                            <li>{facility?.description}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="hotel">
                      <AccordionTrigger className="uppercase text-black/70">
                        Hotel
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-sm">
                          {paket_umroh?.hotels &&
                            paket_umroh?.hotels.map(
                              (hotel: any, index: number) => (
                                <li key={index}>{hotel.name}</li>
                              )
                            )}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="airline">
                      <AccordionTrigger className="uppercase text-black/70">
                        Penerbangan
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-sm">
                          {paket_umroh?.airlines &&
                            paket_umroh?.airlines.map(
                              (airline: any, index: number) => (
                                <li key={index}>{airline.airline_name}</li>
                              )
                            )}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="addons">
                      <AccordionTrigger className="uppercase text-black/70">
                        Add-ons
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside text-sm">
                          {paket_umroh?.variants &&
                            paket_umroh?.variants.map(
                              (addon: any, index: number) => (
                                <li key={index}>{addon.title}</li>
                              )
                            )}
                        </ul>
                        {paket_umroh?.variants?.length === 0 &&
                          "Tidak ada Add-ons."}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        {paket.length !== 0 && (
          <>
            <CarouselPrevious
              variant={"default"}
              className="bg-green-400/70 hover:bg-green-500 z-90 mt-[3rem]"
            />
            <CarouselNext
              variant={"default"}
              className="bg-green-400/70 hover:bg-green-500 z-90 mt-[3rem]"
            />
          </>
        )}
      </Carousel>
      <div className="flex items-center gap-3 justify-center">
        {scrollSnaps.map((_, index: number) => (
          <span
            key={index}
            className={
              "bg-transparent outline outline-2 p-1 rounded-full cursor-pointer " +
              (index === selectedIndex
                ? "outline-blue-dark"
                : "outline-black/60")
            }
            onClick={() => onDotButtonClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
