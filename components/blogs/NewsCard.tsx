'use client';
import React, { Attributes, DOMAttributes, useState } from 'react';
import Tag from './Tag';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import PopupSingleImage from '../images/PopupSingleImage';

interface NewsProps {
  isThumbnail?: boolean;
  type?: 'image' | 'video';
  props?: Attributes | DOMAttributes<HTMLDivElement>;
}
export default function NewsCard({ isThumbnail = false, type = 'video', props }: NewsProps) {
  const [openSlide, setOpenSlide] = useState(false);
  return (
    <div className="flex flex-col gap-3 justify-between h-full" {...props}>
      {isThumbnail && type === 'video' && (
        <iframe
          className="rounded-xl w-auto max-md:hidden"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/b8QDqPlFEfo?si=yAJLtOR2yN4JDyWy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      {isThumbnail && type === 'image' && (
        <div className="relative cursor-pointer" onClick={() => setOpenSlide(!openSlide)}>
          <div className="absolute inset-0 hover:bg-black/20 rounded-xl opacity-0 hover:opacity-100 transition ease-in-out duration-500">
            <span className="w-full flex justify-center items-center h-full">
              <FontAwesomeIcon icon={faEye} className="text-white" />
            </span>
          </div>
          <Image
            src={'https://c4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-preview.jpg'}
            className="rounded-xl w-full object-cover w-[1000px] h-auto max-md:hidden"
            alt="blog 1"
            width={1000}
            height={1000}
          />
        </div>
      )}
      <div>
        <Link href={'/blog/category/title'} className="text-md hover:text-blue-600 font-bold transition line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fuga. Vitae ipsum sit inventore saepe sed voluptate, ab eius consequatur! Amet
        </Link>
        <p className="text-md text-black/70 line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, iste! Eius iure deserunt labore hic asperiores recusandae ipsam pariatur incidunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum culpa magnam
          ullam sint excepturi ut obcaecati rerum ducimus non vitae.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <span>
          <span className="font-semibold">Lasinto</span> on Apr 2024
        </span>
        <Tag variant={'blue'}>Berita</Tag>
      </div>
      <PopupSingleImage open={openSlide} onOpenChange={setOpenSlide} title="Image Blog" url="https://c4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-preview.jpg" />
    </div>
  );
}
