'use client';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { Attributes, DOMAttributes, useState } from 'react';
import PopupSingleImage from '../images/PopupSingleImage';

interface BlogProps {
  props?: Attributes | DOMAttributes<HTMLDivElement>;
}
export default function BlogCard({ props }: BlogProps) {
  const [openSlide, setOpenSlide] = useState(false);
  return (
    <div className="flex flex-col gap-3" {...props}>
      <div className="relative cursor-pointer" onClick={() => setOpenSlide(true)}>
        <div className="absolute inset-0 hover:bg-black/20 rounded-xl opacity-0 hover:opacity-100 transition ease-in-out duration-500">
          <span className="w-full flex justify-center items-center h-full">
            <FontAwesomeIcon icon={faEye} className="text-white" />
          </span>
        </div>
        <Image src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/3.jpg'} className="rounded-xl w-full object-cover h-[200px]" alt="blog 1" width={1000} height={1000} />
      </div>
      <Link href={'/blog/category/title'} className="text-md hover:text-blue-600 font-bold transition line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fuga. Vitae ipsum sit inventore saepe sed voluptate, ab eius consequatur! Amet, iure blanditiis similique voluptatibus facilis corrupti a aut recusandae!
      </Link>
      <p className="text-black/70 text-sm line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit itaque consequatur non praesentium veritatis neque voluptatum adipisci, iste iusto.</p>
      <span className="text-black/70">
        <span className="font-bold text-black">Lasinto.</span> on Mar 20 2024
      </span>
      <PopupSingleImage open={openSlide} {...props} onOpenChange={setOpenSlide} title="Image Popup" url="https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/3.jpg" />
    </div>
  );
}
