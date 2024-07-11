import React from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getPackets } from './paket/action';
import TravelPacketCard from '@/components/packet/TravelPacketCard';
import { shuffleArray } from '@/lib/utils';
import { getUserRole } from '../_actions/Authentication';
import Link from 'next/link';

const loadingPage = [1, 2, 3, 4, 5, 6, 7, 8];

export default async function SearchContent() {
  const res = await getPackets();
  const userRole = await getUserRole();
  const paket_umroh = res.data;
  return (
    <div className="grid sm:grid-cols-1 gap-3 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {!paket_umroh && loadingPage?.map((paket_umroh: any, index: number) => <Skeleton key={index} className="p-3 hover:outline hover:outline-1 w-full h-[300px] shadow-md  hover:outline-blue-600" />)}
      {paket_umroh?.map((paket_umroh: any, index: number) => (
        <TravelPacketCard data={paket_umroh} index={index} key={index} userRole={userRole} />
      ))}

      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 text-center">
        <Button className="bg-blue-dark" asChild>
          <Link href={'/paket'}>Tampilkan lainnya</Link>
        </Button>
      </div>
    </div>
  );
}
