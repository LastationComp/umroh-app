'use client';
import { Card } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';
import { Controls, MediaPlayEvent, MediaPlayFailEvent, MediaPlayRequestEvent, MediaPlayer, MediaPlayerInstance, MediaProvider, MediaProviderAdapter, PlayButton, isYouTubeProvider } from '@vidstack/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function StoryContent() {
  return (
    <div className=" md:container md:mx-auto mx-3 my-5">
      <Card className="bg-white p-5">
        <div className="flex justify-between items-center">
          <span className="text-[24px]">Cerita Islam Terkini</span>
          <Link href={'/'} className="text-end">
            Lihat Lebih Banyak
          </Link>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <div className="relative cursor-pointer">
              <div className="absolute inset-0 hover:bg-black/20 opacity-0 hover:opacity-100 transition">
                <span className="w-full flex justify-center items-center h-full">
                  <FontAwesomeIcon icon={faEye} className="text-white" />
                </span>
              </div>
              <Image src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/3.jpg'} className="rounded w-full object-cover h-[200px]" alt="blog 1" width={1000} height={1000} />
            </div>
            <Link href={'/'} className="text-md hover:text-blue-600 font-bold transition line-clamp-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, quod!
            </Link>
            <p className="text-black/70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit itaque consequatur non praesentium veritatis neque voluptatum adipisci, iste iusto.</p>
            <span className="text-black/70">
              <span className="font-bold text-black">Lasinto.</span> on Mar 20 2024
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative cursor-pointer">
              <div className="absolute inset-0 hover:bg-black/20 opacity-0 hover:opacity-100 transition">
                <span className="w-full flex justify-center items-center h-full">
                  <FontAwesomeIcon icon={faEye} className="text-white" />
                </span>
              </div>
              <Image src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/3.jpg'} className="rounded w-full object-cover h-[200px]" alt="blog 1" width={1000} height={1000} />
            </div>
            <Link href={'/'} className="text-md hover:text-blue-600 font-bold transition line-clamp-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, quod!
            </Link>
            <p className="text-black/70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit itaque consequatur non praesentium veritatis neque voluptatum adipisci, iste iusto.</p>
            <span className="text-black/70">
              <span className="font-bold text-black">Lasinto.</span> on Mar 20 2024
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative cursor-pointer">
              <div className="absolute inset-0 hover:bg-black/20 opacity-0 hover:opacity-100 transition">
                <span className="w-full flex justify-center items-center h-full">
                  <FontAwesomeIcon icon={faEye} className="text-white" />
                </span>
              </div>
              <Image src={'https://umroh-static.s3.ap-southeast-1.amazonaws.com/gallery/3.jpg'} className="rounded w-full object-cover h-[200px]" alt="blog 1" width={1000} height={1000} />
            </div>
            <Link href={'/'} className="text-md hover:text-blue-600 font-bold transition line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fuga. Vitae ipsum sit inventore saepe sed voluptate, ab eius consequatur! Amet, iure blanditiis similique voluptatibus facilis corrupti a aut recusandae!
            </Link>
            <p className="text-black/70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit itaque consequatur non praesentium veritatis neque voluptatum adipisci, iste iusto.</p>
            <span className="text-black/70">
              <span className="font-bold text-black">Lasinto.</span> on Mar 20 2024
            </span>
          </div>
        </div>
      </Card>

      {/* <Lightbox
          open={true}
          plugins={[Video]}
          slides={[
            {
              type: 'video',
              width: 1280,
              height: 720,
              // poster: '/public/poster-image.jpg',
              sources: [
                {
                  src: 'https://www.youtube.com/watch?v=hc1XZYLwIhw',
                  type: 'video/mp4',
                },
              ],
            },
            // ...
          ]}
          // ...
        /> */}
    </div>
  );
}
