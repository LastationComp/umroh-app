'use client';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

export default function TravelProfile() {
  return (
    <Card className="p-3 my-3 flex gap-3">
      <Image src={'https://cloud.umroh.com/images/upload/c_cover,f_auto,dpr_2.0,h_75,w_75,q_80,fl_progressive/LF6Gv6jy_400x400.jpg'} alt="Travel Profile" width={1000} height={1000} className="rounded-full w-[80px]" />
      <div className="flex flex-col gap-3 justify-center">
        <span className="text-xl font-semibold">Jejak Imani</span>
        <div className="flex gap-3 text-sm text-black/70">
          <span>7 Penilaian</span>
          <Separator orientation={'vertical'} />
          <span>76 Terjual</span>
        </div>
      </div>
    </Card>
  );
}
