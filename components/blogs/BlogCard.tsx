"use client";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { Attributes, DOMAttributes, useState } from "react";
import PopupSingleImage from "../images/PopupSingleImage";
import { MdOutlineDateRange } from "react-icons/md";
import Tag from "./Tag";
import { Separator } from "../ui/separator";
import LazyLoadedContent from "../images/LazyLoadedContent";
import LazyImage from "../images/LazyImage";

interface BlogProps {
  props?: Attributes | DOMAttributes<HTMLDivElement>;
}
export default function BlogCard({ props }: BlogProps) {
  const [openSlide, setOpenSlide] = useState(false);
  return (
    <div className="flex flex-col gap-3" {...props}>
      <div
        className="relative cursor-pointer"
        onClick={() => setOpenSlide(true)}
      >
        <div className="absolute inset-0 hover:bg-black/20 rounded-xl opacity-0 hover:opacity-100 transition ease-in-out duration-500">
          <span className="w-full flex justify-center items-center h-full">
            <FontAwesomeIcon icon={faEye} className="text-white" />
          </span>
        </div>
        <LazyImage
          src={
            "https://c4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-preview.jpg"
          }
          className="rounded-xl w-full object-cover h-[200px] z-0"
          alt="blog 1"
          width={1000}
          height={1000}
        />
      </div>
      <section className="p-3 flex flex-col gap-3">
        <div className="flex justify-between gap-3 text-slate-500">
          <div className="flex items-center gap-3">
            <MdOutlineDateRange />
            <span className="text-sm">24 April 2024</span>
          </div>
          <Tag variant={"blue"}>Berita</Tag>
        </div>

        <Link
          href={"/blog/category/title"}
          className="text-md hover:text-blue-600 font-bold transition line-clamp-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          fuga. Vitae ipsum sit inventore saepe sed voluptate, ab eius
          consequatur! Amet, iure blanditiis similique voluptatibus facilis
          corrupti a aut recusandae!
        </Link>
        <p className="text-black/70 text-sm line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit
          itaque consequatur non praesentium veritatis neque voluptatum
          adipisci, iste iusto.
        </p>
        <Separator />
        <span className="text-black/70">
          Dibuat oleh <span className="font-bold text-black">Lasinto.</span>
        </span>
      </section>

      <PopupSingleImage
        open={openSlide}
        {...props}
        onOpenChange={setOpenSlide}
        title="Image Popup"
        url="https://c4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-preview.jpg"
      />
    </div>
  );
}
