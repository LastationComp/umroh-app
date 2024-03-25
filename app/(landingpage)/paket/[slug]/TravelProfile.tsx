'use client';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

export default function TravelProfile() {
  return (
    <Card className="p-3 my-3 flex gap-3">
      <Image
        src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_75,w_75,q_80,fl_progressive/LF6Gv6jy_400x400.jpg'}
        alt="Travel Profile"
        width={1000}
        height={1000}
        className="rounded-full w-[80px] h-[80px] object-cover my-auto"
      />
      <div className="flex flex-col gap-3 justify-center">
        <span className="text-xl font-semibold">Jejak Imani</span>
        <div className="flex gap-3 items-center text-sm text-black/70 max-md:hidden">
          <span className="font-bold text-black">7</span> Penilaian
          <Separator orientation={'vertical'} />
          <span className="font-bold text-black">77</span> Terjual
          <Separator orientation={'vertical'} />
          <span>
            Izin Umroh : <span className="font-bold text-black">Lorem, ipsum dolor.</span>
          </span>
        </div>
        <div className="flex gap-2 flex-col text-sm text-black/70 md:hidden">
          <span className="basis-1/2">
            <span className="font-bold text-black">7</span> Penilaian
          </span>
          <Separator orientation={'horizontal'} />
          <span className="basis-1/2">
            <span className="font-bold text-black">77</span> Terjual
          </span>
          <Separator orientation={'horizontal'} />
          <span className="basis-2/2">
            Izin Umroh : <span className="font-bold text-black">Lorem, ipsum dolor.</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
