'use client';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React, { useMemo } from 'react';
import travelLogo from '@/public/assets/travel.png';
export default function TravelProfile({ travel }: { travel: any }) {
  const travel_legalities: any[] = useMemo(() => {
    return travel.travel_legalities.map((legality: any) => legality.number);
  }, []);
  return (
    <Card className="p-3 my-3 flex gap-3">
      <Image src={travel.logo ?? travelLogo} alt={travel.name} title={travel.name} width={1000} height={1000} className="rounded-full w-[80px] h-[80px] object-cover my-auto" />
      <div className="flex flex-col gap-3 justify-center">
        <span className="text-xl font-semibold">{travel.name}</span>
        <div className="flex gap-3 items-center text-sm text-black/70 max-md:hidden">
          <span className="font-bold text-black">??</span> Penilaian
          <Separator orientation={'vertical'} />
          <span className="font-bold text-black">??</span> Terjual
          <Separator orientation={'vertical'} />
          <span>
            Nomor Legalitas : <span className="font-bold text-black">{travel_legalities.join(',')}</span>
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
            Nomor Legalitas : <span className="font-bold text-black">{travel_legalities.join(',')}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
