"use client";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import nProgress from "nprogress";
import { useRouter } from "next/navigation";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import {
  FaBed,
  FaHotel,
  FaPlaneDeparture,
  FaRegCalendarAlt,
  FaRegStar,
} from "react-icons/fa";
import { formatDate } from "@/lib/Parser/DateFormat";
import { IoLocation, IoTimeSharp } from "react-icons/io5";
import CompareButton from "./CompareButton";
import OrderButton from "../order/OrderButton";
import Favorites from "../order/Favorites";
import ShareButton from "./ShareButton";
import { formatRupiah } from "@/lib/String/RupiahFormat";
interface PacketProps {
  data: any;
  index?: number;
  props?: React.Attributes;
}

export default function TravelPacketCard({ data, index, props }: PacketProps) {
  const router = useRouter();
  const handleUrlImage = (url: string) => {
    nProgress.start();
    router.push("/paket/" + url);
  };
  return (
    <Card
      {...props}
      className="p-3 hover:outline hover:outline-1  shadow-md  hover:outline-blue-600"
    >
      <div className="flex gap-3 items-start">
        <Image
          className="rounded object-cover cursor-pointer"
          onClick={() => handleUrlImage(data?.slug)}
          loading={"lazy"}
          src={data?.gallery?.image_url}
          alt={data?.gallery?.title}
          title={data?.gallery?.title}
          placeholder={"blur"}
          blurDataURL={"/api/image/blur?url=" + data?.gallery.image_url}
          style={{ objectFit: "cover", width: "100px", height: "70px" }}
          height={500}
          width={500}
        />

        <div className="flex flex-col ">
          <Link href={`/paket/${data?.slug}`} key={index} title={data?.title}>
            <span className="text-sm font-semibold line-clamp-1 hover:text-blue-600">
              {data?.title}
            </span>
          </Link>
          <div className="flex justify-between">
            <span className="text-sm text-orange-400 font-bold">
              {formatRupiah(data?.price)}
            </span>
            {/* <span className="text-sm text-black/60">{data.feature}</span> */}
          </div>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-between">
          <span className="text-sm">Sisa Seat</span>
          <span className="text-sm font-bold">{"999"} Seat</span>
        </div>
        <Progress className="" value={50} max={data?.quota} />
      </div>
      <Separator />
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <FaRegCalendarAlt />
          {formatDate(data?.departure_time)}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {data?.hotel_class} <FaRegStar className="text-yellow-500" />{" "}
          <FaHotel />
        </span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <FaPlaneDeparture /> {data?.airline}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {data?.travel_duration} Hari <IoTimeSharp />
        </span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <IoLocation /> {data?.departing_from}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {/* {data.feature_detail} <FaBed /> */}
          Development
        </span>
      </div>
      <div className="flex justify-between items-center my-3">
        <div>
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={`/blog/pembayaran-syariah`} target="_blank">
                  <Image
                    src={
                      "https://assets.umroh.com/borobudur/img/amitra-syariah.1c01c48.svg"
                    }
                    className={index === 3 || index === 1 ? " grayscale" : ""}
                    alt="Is Syariah"
                    width={60}
                    height={20}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pembayaran Syariah</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
        </div>
        <div className="flex items-center gap-1">
          <OrderButton />
          <CompareButton
            id={data?.id ?? ""}
            slug={data?.slug}
            compared={data?.is_compared}
          />
          <Favorites data={data} />

          <ShareButton
            image_url={data?.gallery?.image_url}
            title={data?.title}
            url={"/paket/" + data?.slug}
          />
        </div>
      </div>
    </Card>
  );
}
